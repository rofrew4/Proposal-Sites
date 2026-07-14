import { howWeWork as defaultHowWeWork } from "@/proposals/shared";

export function HowWeWork({
  items = defaultHowWeWork,
}: {
  items?: { title: string; body: string }[];
}) {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">How We Work</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-t-2 border-accent/25 pt-4"
          >
            <h3 className="mb-1.5 text-[15px] font-semibold text-accent">
              {item.title}
            </h3>
            <p className="prose-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
