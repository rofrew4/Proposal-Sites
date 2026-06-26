import type { OverviewParagraph, WorkflowStep } from "@/proposals/types";
import { DetailBlock } from "./DetailBlock";
import { ExpandableRow } from "./ExpandableRow";

export function WorkflowRoadmap({
  title,
  steps,
  afterSteps,
}: {
  title: string;
  steps: WorkflowStep[];
  afterSteps?: OverviewParagraph;
}) {
  return (
    <section id="roadmap" className="doc-section">
      <h2 className="doc-h2">{title}</h2>

      <div className="divide-y divide-accent/10 rounded-lg border border-accent/20 bg-widget shadow-card">
        {steps.map((step) => (
          <ExpandableRow
            key={step.id}
            id={step.id}
            variant="roadmap"
            header={
              <div className="px-4 py-4">
                <h3 className="text-[17px] font-semibold leading-tight tracking-[-0.01em] text-foreground">
                  {step.title}
                </h3>
              </div>
            }
          >
            <div className="px-4 pb-2 pt-1 md:px-5">
              <DetailBlock label="What Susan does today">{step.today}</DetailBlock>
              <DetailBlock label="What automation looks like">
                {step.automated}
              </DetailBlock>
            </div>
          </ExpandableRow>
        ))}
      </div>

      {afterSteps && (
        <p className="prose-body mt-6">
          {typeof afterSteps === "string" ? (
            afterSteps
          ) : (
            <>
              <span className="font-semibold text-foreground">{afterSteps.bold}</span>{" "}
              {afterSteps.text}
            </>
          )}
        </p>
      )}
    </section>
  );
}
