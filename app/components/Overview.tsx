export function Overview({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Overview</h2>
      <div className="space-y-3 prose-body">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
