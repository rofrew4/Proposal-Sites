import type { FinePrintItem } from "./types";

export const whoWeAreIntro =
  "Chesterbrook is a custom AI consulting firm for property management and commercial real estate. We build tools for operators who want to move at a higher efficiency than their competition.";

export const whyUsShared = [
  "No upsells, no shelfware. We only recommend builds with a clear time or revenue ROI.",
  "We're young, fast, and accessible. Call us late, we'll pick up.",
];

export function buildWhyUs(integrationLine: string): string[] {
  return [integrationLine, ...whyUsShared];
}

export const howWeWork = [
  {
    title: "Billing",
    body: "$110/hour, billed biweekly based on actual time worked, one project at a time. If a phase is tracking over estimate, we flag it before we go over.",
  },
  {
    title: "Communication",
    body: "Once kickoff begins, we set up a shared Slack channel or email thread. Ask us questions any time. Biweekly syncs to demo progress.",
  },
  {
    title: "Pause anytime",
    body: "Stop at any phase boundary. You only pay for hours worked through that point. No long-term commitment.",
  },
  {
    title: "Optional retainer",
    body: "Most clients request to stay on a flexible retainer to handle new fixes, updates, and maintenance.",
  },
];

export function buildFinePrint(clientName: string): FinePrintItem[] {
  return [
    {
      id: "ip",
      title: "Intellectual Property",
      body: `${clientName} owns all deliverables, code, and work product produced under this engagement upon full payment. Chesterbrook retains no ownership of the deliverables or their contents. Chesterbrook may retain and reuse general methods, patterns, and frameworks developed over the course of its broader consultancy work, but will not reuse any ${clientName}-proprietary data, client information, or project-specific logic.`,
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      body: `Both parties agree to keep proprietary business information, technical details, and project-specific data confidential. This covers internal systems, customer data, operational data, and any operational intelligence shared during the engagement. Standard exceptions apply (public information, independently developed knowledge, legally compelled disclosure).`,
    },
    {
      id: "termination",
      title: "Termination",
      body: `Either party may terminate this agreement with written notice. On termination, ${clientName} pays for all hours worked through the termination date. Any completed deliverables transfer to ${clientName} per the IP terms above. No long-term commitment, no cancellation fees.`,
    },
    {
      id: "contracting",
      title: "Contracting Entity",
      body: "Services under this agreement are provided by OLD CHESTERBROOK LLC, doing business as Chesterbrook.",
    },
    {
      id: "payment",
      title: "Payment Terms",
      body: "We bill at $110/engineering hour. Invoices issued biweekly based on actual hours worked through each sync, due within 7 days of receipt. Payments processed through Stripe. Third-party infrastructure costs (if applicable) passed through at cost and itemized separately.",
    },
  ];
}

export const defaultDontGetOverwhelmed =
  "No need to commit to more than one project. Start with project 01, see what it actually saves you, then decide on the next one. The goal is to free up enough of your team's time to offset several new hires.";
