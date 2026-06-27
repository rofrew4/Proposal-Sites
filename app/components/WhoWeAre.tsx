import { whoWeAreIntro } from "@/proposals/shared";

export function WhoWeAre() {
  return (
    <section className="doc-section">
      <h2 className="doc-h2">Who We Are</h2>
      <p className="prose-body">{whoWeAreIntro}</p>
    </section>
  );
}
