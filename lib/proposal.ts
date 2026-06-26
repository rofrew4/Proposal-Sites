import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getProposalBySlug } from "@/proposals/registry";
import { resolveProposalSlug } from "@/lib/proposal-slug";
import type { Proposal } from "@/proposals/types";

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

export function getProposal(): Proposal {
  const slug = getProposalSlug();
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    notFound();
  }

  return proposal;
}

export function getProposalPassword(slug: string): string {
  const proposal = getProposalBySlug(slug);
  return process.env.PROPOSAL_PASSWORD ?? proposal?.password ?? "changeme";
}
