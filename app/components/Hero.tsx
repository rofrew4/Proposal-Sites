import type { Proposal } from "@/proposals/types";

export function Hero({ proposal }: { proposal: Proposal }) {
  const { hero } = proposal;

  return (
    <header className="doc-section">
      <p className="eyebrow mb-4">
        Prepared {hero.preparedDate} · {hero.partnershipLabel}
      </p>

      <h1 className="hero-title text-foreground">{hero.title}</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-accent/15 pt-5 text-[14px] sm:grid-cols-2 sm:gap-8">
        <div>
          <p className="eyebrow mb-1">For</p>
          <p className="font-medium text-foreground">{hero.clientContacts}</p>
          <p className="font-medium text-accent">{hero.clientName}</p>
        </div>
        <div>
          <p className="eyebrow mb-1">By</p>
          <p className="font-medium text-foreground">{hero.chesterbrookTeam}</p>
          <p className="font-medium text-accent">Chesterbrook</p>
        </div>
      </div>
    </header>
  );
}
