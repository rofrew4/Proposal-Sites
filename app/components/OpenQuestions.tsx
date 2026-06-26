export function OpenQuestions({ items }: { items: string[] }) {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Open Questions</h2>

      <ol className="space-y-3 border-l-2 border-accent/25 pl-5">
        {items.map((question, index) => (
          <li key={question.slice(0, 48)} className="flex gap-3">
            <span className="shrink-0 font-mono text-[15px] font-medium tabular-nums text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="prose-body pt-px text-foreground">{question}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
