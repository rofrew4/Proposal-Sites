import type { Showcase } from "./types";

export const examples: Showcase = {
  kind: "showcase",
  slug: "examples",
  password: null,
  meta: {
    title: "Project Examples · Chesterbrook AI",
    description:
      "Custom AI software for real estate. A selection of recent Chesterbrook builds across operations, deal intelligence, and productized software.",
  },
  hero: {
    label: "Project Examples",
    title: "Chesterbrook AI — What We've Built",
    subtitle: "Custom AI software for real estate",
  },
  intro:
    "A selection of recent builds, grouped into three categories. Most V1s ship in two to three weeks.",
  detailLeadIn: "Expanded project details below ↓",
  categories: [
    {
      id: "operations",
      number: "01",
      title: "Operations & Workflow Automation",
      summary:
        "We identify where AI fits in your team's workflow, build custom tools that replace SaaS and automate the work that eats your day, and train employees on how to use modern AI tools.",
      highlights: [
        {
          title: "Meeting intelligence & live voice agents",
          body: "Bots and voice agents that answer audibly during IC calls.",
        },
        {
          title: "AI workflow automation",
          body: "Financial intelligence layer, HOA meeting analyzer, AI marketing engine, fractional AI partner.",
        },
      ],
      detailIntro:
        "AI agents and automations that replace SaaS, run alongside your team, or turn portfolio data into plain English.",
      projects: [
        {
          id: "meeting-intelligence",
          title: "Meeting intelligence & live voice AI agents",
          clients: "Southwest acquisitions firm, LA multifamily investor",
          body: "Meeting bots tuned to your workflow, or live voice agents that answer audibly during IC calls (“Hey, what’s industrial vacancy in North Phoenix right now?”). For the LA multifamily investor, the AI note taker feeds a dashboard inside the Financial Intelligence Layer build.",
        },
        {
          id: "workflow-automation",
          title: "AI workflow automation",
          clients:
            "New England PM, Executive branding agency, LA multifamily investor, Mid-Atlantic developer",
          body: "We identify where your team needs AI integrations, build custom AI that cuts SaaS costs and automates operator workflows, and train employees on how to use modern AI tools.",
          bullets: [
            "New England PM: AI HOA meeting analyzer — ingests recordings and documents, surfaces decisions, action items, and compliance issues for board and PM review.",
            "Executive branding agency: End-to-end AI marketing engine — scrapes the client's digital footprint (LinkedIn, Instagram, podcasts), generates a Brand Intelligence Report, builds a custom voice model, and produces polished drafts at scale.",
            "LA multifamily investor: AI Financial Intelligence Layer — plain-English monthly summaries of P&L, rent rolls, and budget vs. actuals, with a configurable variance watchlist and daily anomaly alerts.",
            "Mid-Atlantic developer: Fractional AI partner — team-wide discovery to map workflows and pain points, then scoped builds (email/calendar triage, AI note-taking with assigned action items, hands-on AI training).",
          ],
        },
        {
          id: "classification-prediction",
          title: "AI classification & prediction",
          body: "",
          bullets: [
            "Invoice tax-exemption classifier: flags exemption eligibility and legal basis on unstructured invoices, with confidence-tiered human review.",
            "AI / private-data detector: line-level detection of AI and sensitive data across Python, JavaScript, and TypeScript.",
            "Donor turnout prediction: site-level forecasting for a national nonprofit.",
          ],
        },
      ],
    },
    {
      id: "deal-sourcing",
      number: "02",
      title: "Deal Sourcing & Intelligence",
      summary:
        "AI that finds, parses, and ranks deals — from inbound OMs to off-market call-ready lists to federal opportunities.",
      highlights: [
        {
          title: "OM parsing & deal analysis",
          body: "Extract metrics, generate pro formas, route into CRMs.",
        },
        {
          title: "Off-market deal sourcing",
          body: "Call-ready owner lists across counties, corridors, and verticals.",
        },
        {
          title: "Federal opportunity intelligence",
          body: "Automated SAM.gov monitoring with AI reading the attached PDFs.",
        },
      ],
      detailIntro:
        "AI that finds, parses, and ranks deals.",
      projects: [
        {
          id: "om-parsing",
          title: "OM parsing & deal analysis",
          clients: "New England brokerage, NYC fund",
          body: "AI agents that ingest OMs from email, extract structured deal metrics (price, cap rate, NOI, SF, zoning), generate pro formas, and route results into existing CRMs.",
        },
        {
          id: "acquisition-intelligence",
          title: "Acquisition intelligence platform",
          clients: "Southwest acquisitions firm",
          body: "Knowledge base indexing deal memos and IC history; first-pass AI agent that ranks inbound deals against the buy box; multi-layer DD automation (market study, zoning, financial modeling, owner lookups); IC memo and deck generation.",
        },
        {
          id: "off-market",
          title: "Off-market deal sourcing",
          clients:
            "MA-focused investors, Southeast capital advisory firm, Carolinas acquisitions group, Southeast retail developer",
          body: "AI agents that scan county records, GIS, permits, code violations, zoning, SoS filings, and skip-trace APIs to surface properties matching a buy box, resolve true ownership behind LLCs, and deliver call-ready lists — from always-on platforms to one-off corridor lists.",
          bullets: [
            "MA-focused investors (multiple): always-on platforms covering Massachusetts territories.",
            "Southeast capital advisory firm: corridor-level prospect lists on demand. Starting with a major NC highway corridor: every commercial/retail owner along it, LLC piercing via NC SOS, skip-traced contacts, delivered as a call-ready list. Reusable for every new assignment.",
            "Carolinas acquisitions group: Piedmont Triad acquisitions across Forsyth, Guilford, and Davidson counties — non-anchored retail, small-bay flex industrial, 50+ acre land tracts. Scored on ownership duration, loan maturity, appreciation, vacancy, absentee ownership, and entity structure.",
            "Southeast retail developer: scanner for shopping centers with 15,000+ SF vacancies in secondary/tertiary markets, with entity resolution flagging inherited and non-RE owners. Skip-traced leads ranked by activity, feeding Pipedrive. Retail-gap analysis (e.g., Dollar General present, Dollar Tree absent) flagged as Phase 2.",
          ],
        },
        {
          id: "federal",
          title: "Federal opportunity intelligence",
          clients: "Federal real estate brokerage",
          body: "Automated SAM.gov monitoring with AI reading attached PDFs and filtering against specific business criteria (ABOA thresholds, firm term, TI amortization, set-asides, incumbent language). Replaces manual review and spreadsheets with a structured opportunity database, alerts, dashboard, and trend reporting. Phase 2 auto-matches federal opportunities to properties in the search area.",
        },
      ],
    },
    {
      id: "productized",
      number: "03",
      title: "Productized Software & Custom Builds",
      summary:
        "Full software products founders resell or operate as their own business, plus specialized customer-facing tools.",
      highlights: [
        {
          title: "Product buildouts for other founders",
          body: "Tenant feedback platforms, permitting data products, digital property ledgers.",
        },
      ],
      detailIntro:
        "Full AI products founders resell or operate as their own business, plus specialized customer-facing tools.",
      projects: [
        {
          id: "founder-buildouts",
          title: "Product buildouts for other founders",
          clients:
            "Mid-Atlantic PM firm, Permitting data startup, Residential proptech founder",
          body: "Full software products that CRE founders resell or operate as their own business.",
          bullets: [
            "Mid-Atlantic PM firm: tenant feedback and intelligence platform that captures resident sentiment in real time, surfaces actionable insights by property/unit/issue, and has been licensed and resold to other PM firms as a standalone product.",
            "Residential proptech founder: QR-based digital property ledger — every contractor visit, capital improvement, inspection, and repair logged with documentation, giving owners, buyers, and lenders a verified record of a home’s condition over time.",
          ],
        },
      ],
    },
  ],
  cta: {
    title: "Interested in something similar?",
    body: "Most V1 builds ship in two to three weeks. Every engagement starts with a written estimate. Reach out and we can scope something against your stack.",
  },
};
