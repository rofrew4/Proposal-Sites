import { buildWhyUs } from "@/proposals/shared";

export function WhyUs({ integrationLine }: { integrationLine: string }) {
  const bullets = buildWhyUs(integrationLine);

  return (
    <section className="doc-section">
      <h2 className="doc-h2">Why Us</h2>
      <ul className="space-y-2">
        {bullets.map((item) => (
          <li
            key={item.slice(0, 24)}
            className="prose-body relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
