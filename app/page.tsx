import type { Metadata } from "next";
import { DevProposalBanner } from "./components/DevProposalBanner";
import { DontGetOverwhelmed } from "./components/DontGetOverwhelmed";
import { FadeIn } from "./components/FadeIn";
import { FinePrint } from "./components/FinePrint";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowWeWork } from "./components/HowWeWork";
import { NextSteps } from "./components/NextSteps";
import { OnTheRadar } from "./components/OnTheRadar";
import { OpenQuestions } from "./components/OpenQuestions";
import { Overview } from "./components/Overview";
import { Phase1Section } from "./components/Phase1Section";
import { Roadmap } from "./components/Roadmap";
import { WorkflowRoadmap } from "./components/WorkflowRoadmap";
import { WhoWeAre } from "./components/WhoWeAre";
import { getProposal } from "@/lib/proposal";

export async function generateMetadata(): Promise<Metadata> {
  const proposal = getProposal();

  return {
    title: proposal.meta.title,
    description: proposal.meta.description,
  };
}

export const dynamic = "force-dynamic";

export default function Home() {
  const proposal = getProposal();

  return (
    <>
      <DevProposalBanner />
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
        {proposal.workflow ? (
          <WorkflowRoadmap
            title={proposal.workflow.title}
            steps={proposal.workflow.steps}
            afterSteps={proposal.workflow.afterSteps}
          />
        ) : (
          <Roadmap items={proposal.roadmapItems ?? []} />
        )}
      </FadeIn>
      {proposal.workflow && (
        <FadeIn>
          <Phase1Section content={proposal.workflow.phase1} />
        </FadeIn>
      )}
      {proposal.onTheRadar && proposal.onTheRadar.length > 0 && (
        <FadeIn>
          <OnTheRadar items={proposal.onTheRadar} />
        </FadeIn>
      )}
      {proposal.openQuestions && proposal.openQuestions.length > 0 && (
        <FadeIn>
          <OpenQuestions items={proposal.openQuestions} />
        </FadeIn>
      )}
      <FadeIn>
        <HowWeWork />
      </FadeIn>
      {proposal.dontGetOverwhelmed && (
        <FadeIn>
          <DontGetOverwhelmed body={proposal.dontGetOverwhelmed} />
        </FadeIn>
      )}
      <FadeIn>
        <FinePrint clientName={proposal.hero.clientName} />
      </FadeIn>
      {proposal.nextSteps && proposal.nextSteps.length > 0 && (
        <FadeIn>
          <NextSteps steps={proposal.nextSteps} />
        </FadeIn>
      )}
      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
    </>
  );
}
