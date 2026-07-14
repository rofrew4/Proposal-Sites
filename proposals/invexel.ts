import type { Proposal } from "./types";

export const invexel: Proposal = {
  slug: "invexel",
  password: "invexel",
  meta: {
    title: "Invexel Content Engine · Chesterbrook",
    description:
      "A daily content engine for Invexel: news research and ready-to-edit LinkedIn and blog drafts.",
  },
  hero: {
    preparedDate: "07.2026",
    partnershipLabel: "Invexel × Chesterbrook",
    title: "Invexel Content Engine",
    clientContacts: "Hamid Alqumairi",
    clientName: "Invexel",
    chesterbrookTeam: "Rowan Frew",
  },
  overview: [
    {
      bold: "You're growing almost entirely on referrals.",
      text: "Search and AI tools won't find you if you're not publishing consistently. Writing LinkedIn and blog posts from scratch every day is slow, and hiring a marketing team to do this can cost hundreds or thousands per month.",
    },
    "We build one project: a Content Engine that monitors real estate and GCC investment news and emails you ready-to-edit drafts every morning. You edit and post. Nothing goes live without your review.",
  ],
  whyUsIntegration:
    "No new dashboard and no new workflow to learn. Drafts land in your inbox; you keep posting from LinkedIn and your site the way you already do.",
  dontGetOverwhelmed: null,
  howWeWork: [
    {
      title: "Billing",
      body: "Fixed project fee of $999. 50% upfront to start, 50% at delivery.",
    },
    {
      title: "Communication",
      body: "Short, direct phases. We set up a shared Slack channel or email thread once kickoff begins. Ask questions any time.",
    },
    {
      title: "Review first",
      body: "You see working versions early. Nothing goes live without your review.",
    },
  ],
  paymentTerms:
    "Fixed project fee of $999 for the Content Engine. 50% due upfront to start work, 50% due at delivery. Invoices processed through Stripe. Third-party infrastructure costs (if applicable) passed through at cost and itemized separately.",
  roadmapItems: [
    {
      id: "content-engine",
      number: "01",
      title: "Content Engine (News Research + Draft Generator)",
      cost: "$999",
      whatItIs:
        "Monitors real estate and GCC investment news daily and drafts ready-to-edit LinkedIn and blog posts from real, current events. Every morning, an email lands with several post ideas already written. No dashboard, no login. You edit and post.",
      whatItDoes: [
        "Pulls relevant daily news from sources tuned to your niche.",
        "Generates LinkedIn and blog drafts shaped to sound like you, not generic AI output.",
        "Emails several ready-to-edit ideas each morning so publishing stays consistent without a new tool to manage.",
        "Runs reliably in the background so you don't have to think about the pipeline day to day.",
      ],
      yourBenefit:
        "You get a second growth channel beyond referrals. Consistent publishing builds the SEO and GEO footprint that helps search and AI tools find Invexel.",
      scopeNote:
        "What you're paying for is source selection for your niche, voice tuning, and a morning pipeline that keeps running — not just a one-off draft script. 50% upfront, 50% at delivery.",
    },
  ],
  onTheRadar: [
    {
      title: "Website polish",
      body: "Restoring your track record section, tightening copy, and giving the site a general polish so it matches the reputation behind it. Separate project; worth its own follow-up call.",
    },
  ],
  nextSteps: [
    "Confirm scope on our call.",
    "Chesterbrook sends the SOW.",
    "We start once the upfront payment clears.",
  ],
};
