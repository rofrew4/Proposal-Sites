import type { NextRequest } from "next/server";
import { getProposalBySlug } from "@/proposals/registry";

const ROOT_DOMAIN = "chesterbrookai.com";
export const DEV_PROPOSAL_COOKIE = "dev-proposal-slug";

export function getProposalSlugFromHost(host: string): string | null {
  const hostname = host.split(":")[0].toLowerCase();

  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    const subdomain = hostname.slice(0, -(ROOT_DOMAIN.length + 1));
    if (subdomain && subdomain !== "www") {
      return subdomain;
    }
  }

  return null;
}

function slugFromDevCookie(request?: NextRequest): string | null {
  if (process.env.NODE_ENV !== "development" || !request) {
    return null;
  }

  const cookieSlug = request.cookies.get(DEV_PROPOSAL_COOKIE)?.value;
  if (cookieSlug && getProposalBySlug(cookieSlug)) {
    return cookieSlug;
  }

  return null;
}

export function resolveProposalSlug(
  host: string | null,
  request?: NextRequest,
): string | null {
  const fromHost = host ? getProposalSlugFromHost(host) : null;
  if (fromHost) return fromHost;

  if (process.env.PROPOSAL_SLUG) {
    return process.env.PROPOSAL_SLUG;
  }

  return slugFromDevCookie(request);
}

export function isLocalDevHost(host: string | null): boolean {
  if (!host) return true;

  const hostname = host.split(":")[0].toLowerCase();
  return hostname === "localhost" || hostname.endsWith(".localhost");
}
