import { examples } from "./examples";
import { halpern } from "./halpern";
import { invexel } from "./invexel";
import { pmi } from "./pmi";
import { solup } from "./solup";
import type { Proposal, Showcase, Site } from "./types";
import { isShowcase } from "./types";

export const sites: Record<string, Site> = {
  examples,
  halpern,
  invexel,
  pmi,
  solup,
};

/** @deprecated Use `sites` — kept for call sites that mean proposals only. */
export const proposals: Record<string, Proposal> = Object.fromEntries(
  Object.entries(sites).filter((entry): entry is [string, Proposal] => !isShowcase(entry[1])),
);

export const proposalSlugs = Object.keys(sites);

export function getProposalBySlug(slug: string): Site | undefined {
  return sites[slug];
}

export function getSiteBySlug(slug: string): Site | undefined {
  return sites[slug];
}

export function getShowcaseBySlug(slug: string): Showcase | undefined {
  const site = sites[slug];
  return site && isShowcase(site) ? site : undefined;
}
