/**
 * NEW PROPOSAL TEMPLATE
 *
 * To create a new client proposal:
 * 1. Duplicate this file as `proposals/<slug>.ts` (e.g. `proposals/inlight.ts`)
 * 2. Paste proposal content into the fields below
 * 3. Register it in `proposals/registry.ts`
 * 4. Set `PROPOSAL_SLUG=<slug>` in `.env.local` (copy from `.env.example`)
 * 5. Deploy with subdomain `<slug>.chesterbrookai.com`
 *
 * Shared sections (Who We Are, Why Us, How We Work, Fine Print) are automatic.
 */
import type { Proposal } from "./types";

export const template: Proposal = {
  slug: "client-slug",
  password: "choose-a-password",
  meta: {
    title: "Client Name Engineering Roadmap · Chesterbrook",
    description: "Short meta description for the browser tab.",
  },
  hero: {
    preparedDate: "MM.YYYY",
    partnershipLabel: "Client Name × Chesterbrook",
    title: "Client Name Engineering Roadmap",
    clientContacts: "Contact Name(s)",
    clientName: "Client Name",
    chesterbrookTeam: "Rowan Frew & Wyatt Bracy",
  },
  overview: [
    {
      bold: "You're losing time on [specific problem].",
      text: "Describe what breaks for them day to day, in second person. Use 'you' and 'your'.",
    },
    "Explain what you build to fix it, phased, with their approval before each project starts.",
  ],
  whyUsIntegration:
    "We build around [their core system] instead of forcing change. Your stack stays where it is; we integrate around it.",
  roadmapItems: [
    {
      id: "project-01",
      number: "01",
      title: "Project Title",
      scope: "LOW-MED",
      whatItIs: "One-sentence summary of what the tool does.",
      whatItDoes: ["Bullet one.", "Bullet two."],
      yourBenefit: "You [plain client outcome in 1-2 sentences].",
      scopeNote: "Optional scope note.",
    },
  ],
  onTheRadar: [
    {
      title: "Future opportunity",
      body: "Brief description of something worth watching but not scoped yet.",
    },
  ],
  openQuestions: ["First open question before final numbers."],
  nextSteps: [
    "Client picks which project to start.",
    "Chesterbrook sends the SOW.",
    "Kickoff begins after the SOW is signed.",
  ],
};
