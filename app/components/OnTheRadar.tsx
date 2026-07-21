export function OnTheRadar({
  items,
  title = "On the Radar",
}: {
  items: { title: string; body?: string }[];
  title?: string;
}) {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">{title}</h2>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="relative pl-3.5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60 before:content-['']"
          >
            <p className="prose-body text-foreground">{item.title}</p>
            {item.body && (
              <p className="prose-body mt-1 text-secondary">{item.body}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
