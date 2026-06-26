import type { Proposal } from "./types";

export const pmi: Proposal = {
  slug: "pmi",
  password: "pmi",
  meta: {
    title: "PMI AI Roadmap · Chesterbrook",
    description:
      "Five AI projects for PMI. Reputation monitoring, Yardi intelligence, and management-opportunity sourcing.",
  },
  hero: {
    preparedDate: "06.2026",
    partnershipLabel: "PMI × Chesterbrook",
    title: "PMI AI Roadmap",
    clientContacts: "Eric Kunkle",
    clientName: "PMI",
    chesterbrookTeam: "Rowan Frew",
  },
  overview: [
    "You're further along on AI than most firms your size: Yardi Virtuoso beta, your team's testing daily, and you know exactly where the time sinks are. From our conversation, three gaps matter most.",
    {
      bold: "Reputation is a blind spot.",
      text: "Bad reviews land across a dozen sites and you only hear about them by accident.",
    },
    {
      bold: "Sourcing management opportunities is manual.",
      text: "You grow by taking over under-managed properties, but finding them and the owners behind them is slow and done by hand.",
    },
    {
      bold: "Yardi's AI layer may price you out.",
      text: "Virtuoso's cost is undisclosed and you don't want AI to be cost-neutral. The opening is more affordable agents that work alongside Yardi, not on top of Yardi's pricing.",
    },
    "We identified 5 possible projects that could be helpful, ranked by priority. Project 1 and Project 3 need no Yardi access and can start immediately.",
  ],
  roadmapItems: [
    {
      id: "reputation-monitoring",
      number: "01",
      title: "Reputation Monitoring & Alerting",
      whatItIs:
        "Watches the review listing for every PMI-managed community across the sites that matter, uses AI to flag the negative ones, and pings the property manager responsible (or Crystal) the day it lands. Catches and alerts. Responding stays in your team's hands.",
      whatItDoes: [
        "A licensed review aggregator (Zembra or Outscraper) takes each community's name and address and returns reviews from across platforms in one standard feed, monitored continuously.",
        "We classify each new review with Claude, flag the negatives, and route an alert to the right person.",
        "Because we only need to read reviews, the aggregator covers every site including Google, and we skip Google's API approval process entirely.",
        "Pass-through data cost: review aggregator + Claude API, roughly $20-75/month at your scale, billed at cost.",
      ],
      whyItMatters:
        "This is the tool you said you wanted most: an agent that scrubs the reputation sites and tells you what to pay attention to. MyNewHome, Rent.com, ApartmentRatings, Google, and Nextdoor are exactly the channels we'd cover. Reputation drives leasing; prospects read these sites before they tour. Right now you only hear about a bad review by accident, often weeks late. This makes it systematic: every community, every site, every negative review caught fast and put in front of the right person while it still matters.",
      phases: [
        {
          label: "Phase 1",
          scope: "LOW-MED",
          description:
            "A starter set of communities across the main sites, AI flagging, alerts routed to one inbox or channel. Catching real reviews inside two weeks.",
        },
        {
          label: "Phase 2",
          scope: "MED",
          description:
            "Rolls across all managed communities, per-manager routing, full site coverage, reliable community-to-listing matching with upkeep as the portfolio turns over, and tuning so alerts stay signal not noise.",
        },
      ],
      scopeNote:
        "Dependency: a roster of managed communities (name, address, assigned manager) to seed it. One-time CSV export, doesn't depend on the Yardi pipeline. Optional later add (not in scope): if you ever want the tool to draft or post replies, that's a separate build with full human approval.",
    },
    {
      id: "yardi-intelligence-layer",
      number: "02",
      title: "Yardi Intelligence Layer",
      scope: "MED-HIGH",
      whatItIs:
        "A read-only app that sits alongside Yardi and does two things: answers plain-English questions about your data, and surfaces issues on its own for your team to review and act on.",
      whatItDoes: [
        'Plain-English queries: "show me every property more than 5% over budget on R&M this month" writes the query for you and shows the exact rows behind every number.',
        "Proactive flags: receivables aging out, occupancy slipping, budget variances surfaced for review.",
        "The model writes only safe, read-only queries; nothing acts autonomously.",
        "Built on scheduled Yardi report exports, sidestepping the Yardi partner program and per-interface license fees.",
        "Phase 1 (foundation): stand up the export pipeline, the read-only NL query layer, and a first set of anomaly flags on one division.",
        "Phase 2 (production): handles multiple Yardi entities and chart-of-accounts structures, query validation and result verification, tuned anomaly baselines per property type, scheduled refresh, multi-user access, audit trail.",
      ],
      whyItMatters:
        "You don't want AI to be cost-neutral, and you're worried Virtuoso will price you out. This gives your team the ask-your-data-a-question / get-told-what-needs-attention capability without Yardi's pricing, on data you already own. For an ESOP with audit-grade accounting, the self-surfacing exception flags double as an internal-controls aid.",
      scopeNote:
        "Dependency: confirm your Yardi instance can export reports to SFTP/CSV. Python, Postgres, and the Claude API are the only metered cost beyond the data.",
    },
    {
      id: "management-opportunity-finder",
      number: "03",
      title: "Management-Opportunity Finder",
      scope: "HIGH",
      whatItIs:
        "Finds PA properties that look under-managed, identifies who owns them, ranks them, and hands your team a queue of owners to approach about PMI taking over management. Acquisition is the occasional upside.",
      whatItDoes: [
        "Ownership data is reliable statewide. One API (Regrid or ReportAll) covers all 67 PA counties with owner name, mailing address, sale history, and parcel count. We can identify individual owners (not LLC or management entity), absentee (mailing address not equal to property address), holding only one or two properties.",
        "Distress signals come from a paid feed, not 67 county scrapers. Tax delinquency, foreclosure/pre-foreclosure, code enforcement, and vacancy flags come through a national provider (PropertyRadar).",
        "We can't promise below-market rents as a targeting filter. Public data doesn't reveal a specific building's actual rent. We can surface area-level rent context as outreach talking points, but it won't drive the list. Where actual rents are visible on live competitor listings, we use them. That's Project 4.",
        "Each opportunity ranked 0-100, owner contact skip-traced for phone and email, queued for outreach.",
        "Pass-through data cost: parcel/owner data (Regrid or ReportAll) is quote-based, modest for PA-only scope. Distress feed (PropertyRadar) tiers run $119-$599/month; realistically ~$250-$600/month for usable coverage and API access. Skip-tracing: a few dollars per thousand records.",
      ],
      whyItMatters:
        'This is your play, in your words: find a poorly managed property, identify the owner, confirm they\'re an individual (not an LLC or management entity), and reach out: "we noticed six violations this year, your rents look under market, let\'s talk about PMI managing this." This is the tool that builds that pipeline.',
      scopeNote:
        "Later phase: cut the distress subscription with targeted county scraping. Philadelphia (OpenDataPhilly) and Allegheny/Pittsburgh publish distress data openly. Down the line we can scrape these directly for priority markets. Doing it for all 67 counties isn't worth it.",
    },
    {
      id: "competitor-vacancy-finder",
      number: "04",
      title: "Competitor Vacancy Finder (proposed)",
      scope: "MED-HIGH",
      whatItIs:
        "Scrapes other PMs' rental listings across your target PA markets, flags the ones sitting vacant or stale, and surfaces the owner behind them. A long-vacant unit means the current manager is failing. Your outreach becomes: your manager has had this listed 90+ days; we can lease it faster. Different door, same goal as Project 3: winning management contracts.",
      whatItDoes: [
        "Scrape rental listings (Apartments.com, Zillow Rentals, rental sites, competitor PM sites) across your chosen markets.",
        "Flag vacancies and stale listings (days-on-market past a threshold) and identify which competitor is managing them.",
        "Resolve the owner via the same parcel API as Project 3, screen for individual owners not affiliated with the managing entity.",
        "The listing shows the actual asking rent, so comparing it to a market benchmark (RentCast/HUD) tells you if it's mispriced: overpriced (why it's vacant) or underpriced (money left on the table).",
        "Queue the owner for outreach, deduped against Project 3's pipeline.",
        "Pass-through data cost: listing data + RentCast (free tier to ~$50/month) + shared parcel API. Modest.",
      ],
      whyItMatters:
        "A competitor's chronic vacancy is the clearest possible signal of an unhappy owner. This finds them systematically and arms your team with specifics. We've built competitor-listing scrapers that build a live lead database for other property managers.",
      scopeNote:
        "Lower scope if built alongside Project 3, reuses the owner-resolution and outreach-queue layers.",
    },
    {
      id: "compliance-tracker",
      number: "05",
      title: "Compliance Tracker (later)",
      scope: "MED",
      whatItIs:
        "Deadline tracking for your ~3,000 LIHTC / PHFA / HUD units. Surfaces upcoming and overdue recertifications and certification deadlines, routes them to the right person. Same read-only, human-in-the-loop pattern as Project 2, on the same data pipeline.",
      whatItDoes: [
        "Early-warning calendar over your own data so nothing slips on affordable-housing compliance dates.",
        "Scoped properly once Project 2's data pipeline is in place.",
      ],
      whyItMatters:
        "Affordable-housing compliance is unforgiving on dates and a missed recertification is expensive.",
      scopeNote:
        "Deliberately out of scope: automated validation of compliance (judging whether an income calc is right, whether rent is under the AMI ceiling, whether a file passes). That's high-liability work where trustworthy enough is the whole product. Separate, carefully-scoped engagement.",
    },
  ],
  onTheRadar: [
    {
      title: "Customer-service / FAQ agent",
      body: "24/7 answers to high-volume tenant questions, your biggest day-to-day pain. Strong off-the-shelf tools exist here, so we'd likely help you buy rather than build.",
    },
    {
      title: "Full platform replacement",
      body: "If PMI ever wanted off Yardi entirely, we can look into this more in the future. Different scale of engagement, but the door's open.",
    },
  ],
  openQuestions: [
    "Managed-communities roster. Can your team export the communities you manage (name, address, assigned manager)?",
    "Reputation scope. How many distinct communities are we monitoring? Do you want scattered single-family homes included (address-level, often no review listing, low signal) or just the multifamily and affordable communities?",
    "Target markets. Which PA markets/counties matter most?",
    "Yardi exports. Can your Yardi instance schedule report exports to SFTP/CSV, and which reports cover the operational and financial data you'd want to query? Gates Project 2.",
  ],
};
