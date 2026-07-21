import type { Showcase, ShowcaseCategory, ShowcaseProject } from "@/proposals/types";
import { FadeIn } from "./FadeIn";
import { Footer } from "./Footer";

function CategoryHeader({
  number,
  title,
  expanded = false,
}: {
  number: string;
  title: string;
  expanded?: boolean;
}) {
  const displayNumber = String(Number(number) || number);
  const label = expanded
    ? `Category ${displayNumber} (Expanded)`
    : `Category ${displayNumber}`;

  return (
    <div className="mb-3">
      <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {label}
      </p>
      <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-foreground">
        {title}
      </h2>
    </div>
  );
}

/** Bold the lead-in before ":" and, when present, the name before an em/en dash. */
function EmphasisText({ text }: { text: string }) {
  const colonIndex = text.indexOf(": ");
  if (colonIndex === -1) {
    return <>{text}</>;
  }

  const label = text.slice(0, colonIndex);
  const rest = text.slice(colonIndex + 2);
  const dashMatch = rest.match(/^(.*?)\s+[—–-]\s+(.*)$/);

  if (dashMatch) {
    return (
      <>
        <span className="font-semibold text-foreground">{label}:</span>{" "}
        <span className="font-semibold text-foreground">{dashMatch[1]}</span>
        {" — "}
        {dashMatch[2]}
      </>
    );
  }

  return (
    <>
      <span className="font-semibold text-foreground">{label}:</span> {rest}
    </>
  );
}

function CategorySummary({ category }: { category: ShowcaseCategory }) {
  return (
    <section className="doc-section">
      <CategoryHeader number={category.number} title={category.title} />
      <p className="mb-5 text-[15px] leading-[1.55] text-foreground">
        {category.summary}
      </p>
      <ul className="space-y-2.5">
        {category.highlights.map((item) => (
          <li
            key={item.title}
            className="relative pl-4 text-[15px] leading-[1.55] text-secondary before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent/55 before:content-['']"
          >
            <span className="font-semibold text-foreground">{item.title}</span>
            {" — "}
            {item.body}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectBlock({ project }: { project: ShowcaseProject }) {
  return (
    <article className="border-t border-accent/25 py-5 first:border-t-0 first:pt-0">
      <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-foreground">
        {project.title}
      </h3>
      {project.clients && (
        <p className="mt-1 text-[13px] italic leading-snug text-secondary">
          (Clients: {project.clients})
        </p>
      )}
      {project.body && (
        <p className="prose-body mt-3 text-secondary">{project.body}</p>
      )}
      {project.bullets && project.bullets.length > 0 && (
        <ul className="mt-3 space-y-2.5">
          {project.bullets.map((point) => (
            <li
              key={point.slice(0, 40)}
              className="relative pl-4 text-[15px] leading-[1.55] text-secondary before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent/55 before:content-['']"
            >
              <EmphasisText text={point} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function CategoryDetail({ category }: { category: ShowcaseCategory }) {
  return (
    <section id={category.id} className="doc-section">
      <CategoryHeader
        number={category.number}
        title={category.title}
        expanded
      />
      <p className="mb-5 text-[15px] italic leading-[1.55] text-foreground">
        {category.detailIntro}
      </p>
      <div className="border-t border-accent/30">
        {category.projects.map((project) => (
          <ProjectBlock key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export function ShowcasePage({ site }: { site: Showcase }) {
  return (
    <main className="doc">
      <FadeIn>
        <header className="doc-section">
          <h1 className="hero-title uppercase text-foreground">
            {site.hero.title}
          </h1>
          <p className="mt-3 text-[17px] italic leading-snug text-accent">
            {site.hero.subtitle}
          </p>
          <div className="mt-6 border-t border-accent/30 pt-6">
            <p className="text-[15px] leading-[1.55] text-foreground">
              {site.intro}
            </p>
          </div>
        </header>
      </FadeIn>

      {site.categories.map((category) => (
        <FadeIn key={`summary-${category.id}`}>
          <CategorySummary category={category} />
        </FadeIn>
      ))}

      <FadeIn>
        <p className="border-t border-accent/15 py-8 text-center text-[14px] italic text-secondary">
          {site.detailLeadIn}
        </p>
      </FadeIn>

      {site.categories.map((category) => (
        <FadeIn key={`detail-${category.id}`}>
          <CategoryDetail category={category} />
        </FadeIn>
      ))}

      <FadeIn>
        <section className="doc-section">
          <h2 className="doc-h2 text-foreground">{site.cta.title}</h2>
          <p className="prose-body max-w-[38rem]">{site.cta.body}</p>
        </section>
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
