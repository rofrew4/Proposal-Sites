import type { OverviewParagraph } from "@/proposals/types";

export function Overview({ paragraphs }: { paragraphs: OverviewParagraph[] }) {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Overview</h2>
      <div className="space-y-3 prose-body">
        {paragraphs.map((paragraph) => {
          if (typeof paragraph === "string") {
            return <p key={paragraph.slice(0, 48)}>{paragraph}</p>;
          }

          return (
            <p key={paragraph.bold}>
              <span className="font-semibold text-foreground">{paragraph.bold}</span>{" "}
              {paragraph.text}
            </p>
          );
        })}
      </div>
    </section>
  );
}
