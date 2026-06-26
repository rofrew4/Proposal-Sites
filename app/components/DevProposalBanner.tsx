import { getProposalSlug } from "@/lib/proposal";

export function DevProposalBanner() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const slug = getProposalSlug();

  return (
    <div className="border-b border-accent/20 bg-accent/[0.06] px-4 py-2 text-center font-mono text-[11px] tracking-wide text-accent">
      DEV · {slug} · set via PROPOSAL_SLUG in .env.local
    </div>
  );
}
