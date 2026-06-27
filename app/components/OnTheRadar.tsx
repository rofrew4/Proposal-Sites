export function OnTheRadar({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">On the Radar</h2>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.title}>
            <h3 className="mb-1.5 text-[15px] font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="prose-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
