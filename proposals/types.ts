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
  whyItMatters: string;
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
  roadmapItems: RoadmapItem[];
  onTheRadar?: { title: string; body: string }[];
  openQuestions?: string[];
  nextSteps?: string[];
  dontGetOverwhelmed?: string;
}
