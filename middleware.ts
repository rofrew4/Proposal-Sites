import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getProposalPassword } from "@/lib/proposal";
import { resolveProposalSlug } from "@/lib/proposal-slug";
import { getProposalBySlug } from "@/proposals/registry";

const AUTH_COOKIE = "proposal-auth";

function withProposalSlug(response: NextResponse, slug: string) {
  response.headers.set("x-proposal-slug", slug);
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host");
  const slug = resolveProposalSlug(host);

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth")
  ) {
    return withProposalSlug(NextResponse.next(), slug);
  }

  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    return new NextResponse("Proposal not found", { status: 404 });
  }

  const expectedPassword = getProposalPassword(slug);
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  const expectedToken = process.env.AUTH_TOKEN ?? expectedPassword;

  if (token !== expectedToken) {
    const loginUrl = new URL("/login", request.url);
    if (pathname !== "/") {
      loginUrl.searchParams.set("from", pathname);
    }
    return withProposalSlug(NextResponse.redirect(loginUrl), slug);
  }

  return withProposalSlug(NextResponse.next(), slug);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
