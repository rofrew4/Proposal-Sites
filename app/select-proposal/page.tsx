import Link from "next/link";
import { proposalSlugs, sites } from "@/proposals/registry";
import { isShowcase } from "@/proposals/types";

export default function SelectProposalPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <p className="eyebrow mb-2">Local dev</p>
        <h1 className="mb-2 text-[22px] font-semibold text-foreground">
          Choose a site
        </h1>
        <p className="prose-body mb-8">
          No site is active. Pick one below, or set{" "}
          <code className="font-mono text-[13px] text-foreground">PROPOSAL_SLUG</code>{" "}
          in <code className="font-mono text-[13px] text-foreground">.env.local</code>{" "}
          so the right site opens every time you run{" "}
          <code className="font-mono text-[13px] text-foreground">npm run dev</code>.
        </p>

        <ul className="divide-y divide-accent/15 rounded-lg border border-accent/20 bg-widget shadow-card">
          {proposalSlugs.map((slug) => {
            const site = sites[slug];
            const heading = isShowcase(site)
              ? site.hero.label
              : site.hero.clientName;
            const subheading = isShowcase(site)
              ? site.hero.title
              : site.hero.title;

            return (
              <li key={slug}>
                <Link
                  href={`/api/dev/select?slug=${slug}`}
                  className="block px-4 py-4 transition-colors hover:bg-accent/[0.04]"
                >
                  <p className="font-medium text-foreground">{heading}</p>
                  <p className="mt-0.5 text-[14px] text-secondary">{subheading}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                    {slug}.chesterbrookai.com
                    {site.password === null ? " · public" : ""}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="prose-body mt-6 text-[13px] text-secondary">
          Tip: copy <code className="font-mono text-foreground">.env.example</code> to{" "}
          <code className="font-mono text-foreground">.env.local</code> and set{" "}
          <code className="font-mono text-foreground">PROPOSAL_SLUG=examples</code> (or
          whichever site you&apos;re working on).
        </p>
      </div>
    </main>
  );
}
