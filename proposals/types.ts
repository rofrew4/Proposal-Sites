export interface RoadmapPhase {
  label: string;
  scope: string;
  description: string | string[];
}

export interface RoadmapItem {
  id: string;
  number: string;
  title: string;
  scope?: string;
  whatItIs: string;
  whatItDoes: string | string[];
  yourBenefit: string;
  phases?: RoadmapPhase[];
  scopeNote?: string;
  isInfrastructure?: boolean;
}

export interface FinePrintItem {
  id: string;
  title: string;
  body: string;
}

export type OverviewParagraph =
  | string
  | { bold: string; text: string };

export interface WorkflowStep {
  id: string;
  title: string;
  today: string;
  automated: string;
}

export interface Phase1Proposal {
  intro: string[];
  discovery: { bold: string; text: string };
  mvpTitle: string;
  mvpBullets: string[];
  closing: string[];
  costNote?: string;
}

export interface WorkflowSection {
  title: string;
  steps: WorkflowStep[];
  afterSteps?: OverviewParagraph;
  phase1: Phase1Proposal;
}

export interface Proposal {
  slug: string;
  password: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    preparedDate: string;
    partnershipLabel: string;
    title: string;
    clientContacts: string;
    clientName: string;
    chesterbrookTeam: string;
  };
  overview: OverviewParagraph[];
  whyUsIntegration: string;
  roadmapItems?: RoadmapItem[];
  workflow?: WorkflowSection;
  onTheRadar?: { title: string; body: string }[];
  openQuestions?: string[];
  nextSteps?: string[];
  dontGetOverwhelmed?: string | null;
}
