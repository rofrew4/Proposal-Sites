export interface RoadmapItem {
  id: string;
  number: string;
  title: string;
  scope: string;
  whatItIs: string;
  whatItDoes: string | string[];
  whyItMatters: string;
  scopeNote?: string;
  isInfrastructure?: boolean;
}

export interface FinePrintItem {
  id: string;
  title: string;
  body: string;
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
  overview: string[];
  roadmapItems: RoadmapItem[];
  nextSteps: string[];
  dontGetOverwhelmed: string;
}
