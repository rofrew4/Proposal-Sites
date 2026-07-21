export interface RoadmapPhase {
  label: string;
  scope: string;
  description: string | string[];
}

export interface RoadmapDetailSection {
  label: string;
  text?: string;
  bullets?: string[];
  /** Render bullets as an ordered list. */
  numbered?: boolean;
}

export interface RoadmapItem {
  id: string;
  number: string;
  title: string;
  scope?: string;
  /** Flat price shown in the row header instead of a Low/Med/High scope. */
  cost?: string;
  whatItIs: string;
  whatItDoes?: string | string[];
  /** Extra labeled sections between what-it-does and your-benefit. */
  detailSections?: RoadmapDetailSection[];
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
  onTheRadar?: { title: string; body?: string }[];
  /** Overrides the On the Radar section heading when set. */
  onTheRadarTitle?: string;
  openQuestions?: string[];
  nextSteps?: string[];
  dontGetOverwhelmed?: string | null;
  /** Overrides shared How We Work cards when set. */
  howWeWork?: { title: string; body: string }[];
  /** Overrides Fine Print payment-terms body when set. */
  paymentTerms?: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  clients?: string;
  body: string;
  bullets?: string[];
}

export interface ShowcaseCategory {
  id: string;
  number: string;
  title: string;
  summary: string;
  /** Short blips on the overview page before the detail sections. */
  highlights: { title: string; body: string }[];
  /** Longer description shown above the projects in the detail section. */
  detailIntro: string;
  projects: ShowcaseProject[];
}

export interface Showcase {
  kind: "showcase";
  slug: string;
  /** Public sites use null — no login gate. */
  password: null;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
  };
  intro: string;
  categories: ShowcaseCategory[];
  detailLeadIn: string;
  cta: {
    title: string;
    body: string;
  };
}

export type Site = Proposal | Showcase;

export function isShowcase(site: Site): site is Showcase {
  return "kind" in site && site.kind === "showcase";
}
