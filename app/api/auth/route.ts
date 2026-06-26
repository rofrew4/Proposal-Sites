import { NextResponse } from "next/server";
import { getProposalPassword, getProposalSlug } from "@/lib/proposal";

const AUTH_COOKIE = "proposal-auth";

export async function POST(request: Request) {
  let password = "";

  try {
    const body = await request.json();
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const slug = getProposalSlug();
  const expected = getProposalPassword(slug);

  if (password !== expected) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = process.env.AUTH_TOKEN ?? expected;

  const proto =
    request.headers.get("x-forwarded-proto") ??
    new URL(request.url).protocol.replace(":", "");

  const response = NextResponse.json({ ok: true });
  response.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: proto === "https",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  return response;
}
