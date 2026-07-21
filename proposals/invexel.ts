import type { Proposal } from "./types";

export const invexel: Proposal = {
  slug: "invexel",
  password: "invexel",
  meta: {
    title: "Invexel Content Engine · Chesterbrook",
    description:
      "A daily content engine for Invexel: news research and ready-to-edit LinkedIn drafts.",
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
      text: "Search and AI tools won't find you if you're not publishing consistently. Writing LinkedIn posts from scratch every day is slow, and hiring a marketing team to do this can cost hundreds or thousands per month.",
    },
    "We build one project: a Content Engine that monitors real estate and GCC investment news and emails you ready-to-edit LinkedIn drafts every morning. You edit and post. Nothing goes live without your review.",
  ],
  whyUsIntegration:
    "No new dashboard and no new workflow to learn. Drafts land in your inbox; you keep posting from LinkedIn the way you already do.",
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
        "Monitors real estate and GCC investment news daily and drafts ready-to-edit LinkedIn posts from real, current events. Every morning, an email lands with several post ideas already written. No dashboard, no login. The system runs on a daily schedule in the background, so once it's live, you don't need to do anything except open your inbox each morning.",
      detailSections: [
        {
          label: "How it works, end to end",
          numbered: true,
          bullets: [
            "Each morning, the system pulls fresh articles from a curated set of news sources.",
            "It filters for what's actually relevant to your niche — not everything ingested makes the cut.",
            "The most relevant stories get turned into LinkedIn post drafts, shaped to sound like you.",
            "Drafts are emailed to you each morning.",
            "You review, edit to taste, and post — nothing is ever auto-published.",
          ],
        },
        {
          label: "News and data sources monitored",
          text: "Property Week, CoStar News UK, Arabian Business, Gulf Business, and Zawya — chosen to cover both sides of your niche: UK commercial property activity and GCC/Gulf investment flows.",
        },
        {
          label: "Content type, frequency, and volume",
          text: "A daily email containing 2–3 LinkedIn post drafts.",
        },
        {
          label: "Voice and brand fit",
          text: "Before build, you'll send over several pages of your own writing. We use that to build a style profile the drafting is shaped around, so posts sound like you rather than generic AI output.",
        },
        {
          label: "Timeline and milestones",
          text: "Two-week build.",
          bullets: [
            "Week 1: Source integration, drafting logic, and your style profile built from the writing samples you provide.",
            "Week 2: Testing and refinement, daily email pipeline finalized, handoff.",
          ],
        },
        {
          label: "Review and acceptance",
          text: "You review the finished system at delivery/handoff to confirm it meets expectations. Any style or tone adjustments happen during the first month of support, as you see real output land in your inbox.",
        },
        {
          label: "Support, maintenance, and enhancements",
          text: "First month of support is included at no extra cost — you can request style or tone adjustments during this window. After that, an optional $49/month retainer covers ongoing upkeep, with no obligation to continue.",
        },
      ],
      yourBenefit:
        "You get a second growth channel beyond referrals. Consistent publishing builds the SEO and GEO footprint that helps search and AI tools find Invexel.",
      scopeNote:
        "What you're paying for is source selection for your niche, voice tuning, and a morning pipeline that keeps running — not just a one-off draft script. 50% upfront, 50% at delivery.",
    },
  ],
  onTheRadarTitle: "Enhancements on the Radar",
  onTheRadar: [
    {
      title: "Website polish",
    },
    {
      title: "Direct LinkedIn integration for automatic posting",
    },
    {
      title: "Blog post publishing to your website",
    },
  ],
  nextSteps: [
    "Confirm scope on our call.",
    "Chesterbrook sends the SOW.",
    "We start once the upfront payment clears.",
  ],
};
