import { whoWeAre } from "@/proposals/shared";

export function WhoWeAre() {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Who We Are</h2>
      <p className="prose-body mb-5">{whoWeAre.intro}</p>

      <p className="eyebrow mb-3">Why Us</p>
      <ul className="space-y-2">
        {whoWeAre.whyUs.map((item) => (
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
