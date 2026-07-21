import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getSiteBySlug } from "@/proposals/registry";
import { resolveProposalSlug } from "@/lib/proposal-slug";
import type { Proposal, Site } from "@/proposals/types";
import { isShowcase } from "@/proposals/types";

export function getProposalSlug(): string {
  const headerSlug = headers().get("x-proposal-slug");
  if (headerSlug) return headerSlug;

  const host = headers().get("host");
  const slug = resolveProposalSlug(host);

  if (!slug) {
    notFound();
  }

  return slug;
}

export function getSite(): Site {
  const slug = getProposalSlug();
  const site = getSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  return site;
}

export function getProposal(): Proposal {
  const site = getSite();

  if (isShowcase(site)) {
    notFound();
  }

  return site;
}

export function getProposalPassword(slug: string): string | null {
  const site = getSiteBySlug(slug);
  if (!site) return "changeme";
  if (site.password === null) return null;
  return process.env.PROPOSAL_PASSWORD ?? site.password;
}

export function siteRequiresAuth(site: Site): boolean {
  return site.password !== null;
}
