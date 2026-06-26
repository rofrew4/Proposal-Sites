import type { FinePrintItem } from "./types";

export const whoWeAre = {
  intro:
    "Chesterbrook is a custom AI engineering and strategy firm. We build agents, internal tools, data pipelines, and software for operators who want to move faster than off-the-shelf software lets them.",
  whyUs: [
    "No red tape. You talk directly to the engineers building, not an account manager who doesn't know how the software actually works.",
    "No upsells, no shelfware. We only recommend builds with a clear time or revenue ROI.",
    "We build around your existing systems instead of forcing change. Your stack stays where it is; we integrate around it.",
    "We're young, fast, and accessible. Call us late, we'll pick up.",
  ],
};

export const howWeWork = [
  {
    title: "Billing",
    body: "$110/hour, phased and approved one project at a time. Hours billed biweekly after each sync, based on actual time worked. If a phase is tracking over its estimate, we flag it before we go over, not after.",
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
    body: "Once projects are live, most clients want a lightweight monthly retainer to keep things humming. Small fixes, jurisdictions that change their forms, platform updates that break an integration. Fully optional. We don't put it in place at the start, and we don't put it in place at all if you don't want one.",
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
