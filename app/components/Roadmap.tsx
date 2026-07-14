import type { RoadmapItem, RoadmapPhase } from "@/proposals/types";
import { DetailBlock } from "./DetailBlock";
import { ExpandableRow } from "./ExpandableRow";
import { FadeIn } from "./FadeIn";

function scopeColorClass(scope: string): string {
  const s = scope.toUpperCase().replace(/\u2013/g, "-");
  if (s.startsWith("LOW")) return "text-scope-low";
  if (s === "MED" || s === "MED-HIGH") return "text-scope-med";
  if (s === "HIGH") return "text-scope-high";
  return "text-scope-low";
}

function hasHourlyScopes(items: RoadmapItem[]): boolean {
  return items.some(
    (item) =>
      Boolean(item.scope) ||
      (item.phases && item.phases.length > 0),
  );
}

function ScopeKey() {
  const items = [
    { label: "Low", hours: "20+ hrs", color: "text-scope-low" },
    { label: "Med", hours: "30+ hrs", color: "text-scope-med" },
    { label: "High", hours: "50+ hrs", color: "text-scope-high" },
  ] as const;

  return (
    <div className="mb-5 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[12px] tracking-wide">
      {items.map((item) => (
        <span key={item.label} className="whitespace-nowrap">
          <span className={`font-semibold uppercase ${item.color}`}>
            {item.label}
          </span>
          <span className="ml-1.5 text-foreground/70">≈ {item.hours}</span>
        </span>
      ))}
    </div>
  );
}

function RoadmapRowHeader({
  number,
  title,
  scope,
  cost,
  phases,
}: {
  number: string;
  title: string;
  scope?: string;
  cost?: string;
  phases?: RoadmapPhase[];
}) {
  return (
    <div className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4 sm:gap-y-1">
      <div className="flex min-w-0 items-baseline gap-3">
        <span className="row-number shrink-0 font-mono text-[13px] font-medium tabular-nums text-accent/45 transition-colors duration-[250ms]">
          [ {number} ]
        </span>
        <h3 className="text-[17px] font-semibold leading-tight tracking-[-0.01em] text-foreground">
          {title}
        </h3>
      </div>
      {phases && phases.length > 0 ? (
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 self-start sm:self-auto">
          {phases.map((phase) => (
            <span key={phase.label} className="whitespace-nowrap font-mono text-[11px] tracking-[0.04em]">
              <span className="font-medium text-foreground/80">{phase.label}</span>{" "}
              <span
                className={`font-semibold uppercase tracking-[0.08em] ${scopeColorClass(phase.scope)}`}
              >
                {phase.scope}
              </span>
            </span>
          ))}
        </div>
      ) : cost ? (
        <span className="self-start font-mono text-[13px] font-semibold tabular-nums tracking-[0.04em] text-accent sm:self-auto">
          {cost}
        </span>
      ) : (
        scope && (
          <span
            className={`self-start font-mono text-[11px] font-semibold uppercase tracking-[0.08em] sm:self-auto ${scopeColorClass(scope)}`}
          >
            {scope}
          </span>
        )
      )}
    </div>
  );
}

function PhaseBlock({ phase }: { phase: RoadmapPhase }) {
  const description = Array.isArray(phase.description)
    ? phase.description
    : [phase.description];

  return (
    <div className="border-t border-accent/10 py-3 first:border-t-0 first:pt-0">
      <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-[13px] font-semibold text-foreground">{phase.label}</span>
        <span
          className={`font-mono text-[11px] font-semibold uppercase tracking-[0.08em] ${scopeColorClass(phase.scope)}`}
        >
          {phase.scope}
        </span>
      </div>
      <ul className="space-y-1">
        {description.map((point) => (
          <li
            key={point.slice(0, 32)}
            className="prose-body relative pl-3.5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent/50 before:content-['']"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoadmapItemBody({ item }: { item: RoadmapItem }) {
  return (
    <div className="px-4 pb-2 pt-1 md:pl-[4.25rem] md:pr-5">
      <DetailBlock label="What we build">{item.whatItIs}</DetailBlock>

      {Array.isArray(item.whatItDoes) && item.whatItDoes.length > 0 ? (
        <DetailBlock label="What it does">
          <ul className="space-y-1">
            {item.whatItDoes.map((point) => (
              <li
                key={point.slice(0, 32)}
                className="relative pl-3.5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent/50 before:content-['']"
              >
                {point}
              </li>
            ))}
          </ul>
        </DetailBlock>
      ) : typeof item.whatItDoes === "string" && item.whatItDoes ? (
        <DetailBlock label="What it does">{item.whatItDoes}</DetailBlock>
      ) : null}

      <DetailBlock label="Your benefit">{item.yourBenefit}</DetailBlock>

      {item.phases && item.phases.length > 0 && (
        <DetailBlock label="Build">
          <div>
            {item.phases.map((phase) => (
              <PhaseBlock key={phase.label} phase={phase} />
            ))}
          </div>
        </DetailBlock>
      )}

      {item.scopeNote && (
        <p className="mt-1 font-mono text-[12px] leading-relaxed text-foreground/60">
          Scope note: {item.scopeNote}
        </p>
      )}
    </div>
  );
}

function StaticRoadmapItem({ item }: { item: RoadmapItem }) {
  return (
    <div
      id={item.id}
      className={[
        "expandable-row expandable-row--roadmap expandable-row--static",
        item.isInfrastructure ? "expandable-row--infrastructure" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="row-summary bg-accent/5">
        <RoadmapRowHeader
          number={item.number}
          title={item.title}
          scope={item.scope}
          cost={item.cost}
          phases={item.phases}
        />
      </div>
      <div className="row-body opacity-100" style={{ maxHeight: "none" }}>
        <RoadmapItemBody item={item} />
      </div>
    </div>
  );
}

export function Roadmap({ items }: { items: RoadmapItem[] }) {
  const showScopeKey = hasHourlyScopes(items);
  const alwaysOpen = items.length === 1;

  return (
    <section id="roadmap" className="doc-section">
      <h2 className="doc-h2">The Roadmap</h2>
      {showScopeKey && <ScopeKey />}

      <div className="divide-y divide-accent/10 rounded-lg border border-accent/20 bg-widget shadow-card">
        {items.map((item) => (
          <FadeIn key={item.id}>
            {alwaysOpen ? (
              <StaticRoadmapItem item={item} />
            ) : (
              <ExpandableRow
                id={item.id}
                variant="roadmap"
                infrastructure={item.isInfrastructure}
                header={
                  <RoadmapRowHeader
                    number={item.number}
                    title={item.title}
                    scope={item.scope}
                    cost={item.cost}
                    phases={item.phases}
                  />
                }
              >
                <RoadmapItemBody item={item} />
              </ExpandableRow>
            )}
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
