import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getProposalPassword } from "@/lib/proposal";
import {
  isLocalDevHost,
  resolveProposalSlug,
} from "@/lib/proposal-slug";
import { getSiteBySlug } from "@/proposals/registry";

const AUTH_COOKIE = "proposal-auth";

function withProposalSlug(response: NextResponse, slug: string) {
  response.headers.set("x-proposal-slug", slug);
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host");
  const slug = resolveProposalSlug(host, request);

  if (pathname.startsWith("/select-proposal")) {
    if (process.env.NODE_ENV !== "development") {
      return new NextResponse("Not found", { status: 404 });
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/dev/select")) {
    if (process.env.NODE_ENV !== "development") {
      return new NextResponse("Not found", { status: 404 });
    }
    return NextResponse.next();
  }

  if (!slug) {
    if (process.env.NODE_ENV === "development" && isLocalDevHost(host)) {
      return NextResponse.redirect(new URL("/select-proposal", request.url));
    }
    return new NextResponse("Proposal not found", { status: 404 });
  }

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth")
  ) {
    return withProposalSlug(NextResponse.next(), slug);
  }

  const site = getSiteBySlug(slug);

  if (!site) {
    return new NextResponse("Proposal not found", { status: 404 });
  }

  // Public sites (e.g. Project Examples) skip the password gate.
  if (site.password === null) {
    return withProposalSlug(NextResponse.next(), slug);
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
