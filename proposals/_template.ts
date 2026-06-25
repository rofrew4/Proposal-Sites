/**
 * NEW PROPOSAL TEMPLATE
 *
 * To create a new client proposal:
 * 1. Duplicate this file as `proposals/<slug>.ts` (e.g. `proposals/inlight.ts`)
 * 2. Paste proposal content into the fields below
 * 3. Register it in `proposals/registry.ts`
 * 4. Deploy with subdomain `<slug>.chesterbrookai.com`
 *
 * Shared sections (Who We Are, How We Work, Optional Retainer, Fine Print)
 * are automatic — only edit the fields in this file.
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
    "First overview paragraph.",
    "Second overview paragraph (optional — remove if not needed).",
  ],
  roadmapItems: [
    {
      id: "project-01",
      number: "01",
      title: "Project Title",
      scope: "LOW–MED",
      whatItIs: "One-sentence summary.",
      whatItDoes: ["Bullet one.", "Bullet two."],
      whyItMatters: "Why this project matters to the client.",
      scopeNote: "Optional scope note.",
    },
  ],
  nextSteps: [
    "Client picks which project to start.",
    "Chesterbrook sends the SOW.",
    "Kickoff begins after the SOW is signed.",
  ],
  dontGetOverwhelmed:
    "Start with project 01. See what it saves, then decide on the next one.",
};
