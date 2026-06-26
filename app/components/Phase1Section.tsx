import type { Phase1Proposal } from "@/proposals/types";

export function Phase1Section({ content }: { content: Phase1Proposal }) {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Phase 1 Proposal</h2>

      <div className="space-y-3 prose-body">
        {content.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-6 space-y-5 prose-body">
        <p>
          <span className="font-semibold text-foreground">{content.discovery.bold}</span>{" "}
          {content.discovery.text}
        </p>

        <div>
          <p className="mb-3 font-semibold text-foreground">{content.mvpTitle}</p>
          <ul className="space-y-2">
            {content.mvpBullets.map((bullet) => (
              <li
                key={bullet.slice(0, 32)}
                className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 space-y-3 prose-body">
        {content.closing.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
        {content.costNote && <p>{content.costNote}</p>}
      </div>
    </section>
  );
}
