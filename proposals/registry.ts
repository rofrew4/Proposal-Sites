import { solup } from "./solup";
import type { Proposal } from "./types";

export const proposals: Record<string, Proposal> = {
  solup,
};

export const proposalSlugs = Object.keys(proposals);

export function getProposalBySlug(slug: string): Proposal | undefined {
  return proposals[slug];
}
