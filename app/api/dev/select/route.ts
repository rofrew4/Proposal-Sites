import { NextResponse } from "next/server";
import { DEV_PROPOSAL_COOKIE } from "@/lib/proposal-slug";
import { getProposalBySlug } from "@/proposals/registry";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug || !getProposalBySlug(slug)) {
    return NextResponse.redirect(new URL("/select-proposal", request.url));
  }

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set(DEV_PROPOSAL_COOKIE, slug, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.redirect(new URL("/select-proposal", "http://localhost"));
  response.cookies.delete(DEV_PROPOSAL_COOKIE);
  return response;
}
