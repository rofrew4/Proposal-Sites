import type { Metadata } from "next";
import { DontGetOverwhelmed } from "./components/DontGetOverwhelmed";
import { FadeIn } from "./components/FadeIn";
import { FinePrint } from "./components/FinePrint";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowWeWork } from "./components/HowWeWork";
import { NextSteps } from "./components/NextSteps";
import { OptionalRetainer } from "./components/OptionalRetainer";
import { Overview } from "./components/Overview";
import { Roadmap } from "./components/Roadmap";
import { WhoWeAre } from "./components/WhoWeAre";
import { getProposal } from "@/lib/proposal";

export async function generateMetadata(): Promise<Metadata> {
  const proposal = getProposal();

  return {
    title: proposal.meta.title,
    description: proposal.meta.description,
  };
}

export default function Home() {
  const proposal = getProposal();

  return (
    <main className="doc">
      <FadeIn>
        <Hero proposal={proposal} />
      </FadeIn>
      <FadeIn>
        <WhoWeAre />
      </FadeIn>
      <FadeIn>
        <Overview paragraphs={proposal.overview} />
      </FadeIn>
      <FadeIn>
        <HowWeWork />
      </FadeIn>
      <FadeIn>
        <Roadmap items={proposal.roadmapItems} />
      </FadeIn>
      <FadeIn>
        <DontGetOverwhelmed body={proposal.dontGetOverwhelmed} />
      </FadeIn>
      <FadeIn>
        <OptionalRetainer />
      </FadeIn>
      <FadeIn>
        <FinePrint clientName={proposal.hero.clientName} />
      </FadeIn>
      <FadeIn>
        <NextSteps steps={proposal.nextSteps} />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
