import type { Proposal } from "./types";

export const solup: Proposal = {
  slug: "solup",
  password: "solup",
  meta: {
    title: "Sol-Up Engineering Roadmap · Chesterbrook",
    description:
      "A phased engineering roadmap for Sol-Up. Eight builds. Start with one. Ship in weeks.",
  },
  hero: {
    preparedDate: "06.2026",
    partnershipLabel: "Sol-Up × Chesterbrook",
    title: "Sol-Up Engineering Roadmap",
    clientContacts: "Frank Rieger & Steve Hamile",
    clientName: "Sol-Up",
    chesterbrookTeam: "Rowan Frew & Wyatt Bracy",
  },
  overview: [
    {
      bold: "You're losing time and money on the same problems every week.",
      text: "Your BOMs drift from plan sets and your warehouse pulls the wrong product. Your lender photo packages keep bouncing back for missing shots. Your permitting staff spend most of their day retyping the same jurisdiction forms across 8-10 portals.",
    },
    "We build automation around PISA and Fluent that tackles each problem in phases. You pick the project, approve it, and we ship before you commit to the next one.",
  ],
  whyUsIntegration:
    "We build around PISA and Fluent instead of forcing change. Your stack stays where it is; we integrate around it.",
  roadmapItems: [
    {
      id: "bom-verification",
      number: "01",
      title: "BOM Verification",
      scope: "LOW–MED",
      whatItIs:
        "A check that compares the plan set against the BOM in PISA at permit-submission time. Flags conflicts before the warehouse pulls the wrong product.",
      whatItDoes: [
        "Parses the relevant fields off the plan set (inverter model, rail type, module, breaker, disconnect, domestic content flags).",
        "Reads the current BOM out of PISA.",
        "Flags conflicts on the spot, with the exact line item and the exact mismatch.",
      ],
      yourBenefit:
        "You catch BOM mismatches before the warehouse pulls the wrong product, so your installers are not on roofs with the wrong gear.",
      scopeNote:
        "Low if the plan parses cleanly and the BOM pulls easily from the PISA API. Higher if either gets messy.",
    },
    {
      id: "post-install-photo-qa",
      number: "02",
      title: "Post-Install Photo QA",
      scope: "MED",
      whatItIs:
        "An automated check on the ~80–100-photo lender submission package, run before Sol-Up sends it out. Catches missing serials, blurred shots, missing required angles.",
      whatItDoes: [
        "Static checks first: blur detection, missing serials, barcode-based serial identification.",
        "LLM/vision-API calls layered in only where the static checks can't decide.",
        "Outputs a deficiency report flagging the exact photos that need retaking.",
      ],
      yourBenefit:
        "Your team catches lender package problems before submission, so kickbacks do not delay final payment.",
    },
    {
      id: "hoa-submission-generator",
      number: "03",
      title: "HOA Submission Generator",
      scope: "LOW–MED",
      whatItIs:
        "A tool that auto-fills the ARC form from PISA client data and pre-checks the package against that HOA's encoded rules, flagging deficiencies before it goes out.",
      whatItDoes: [
        "Pulls client and project data out of PISA and auto-populates the correct ARC form for the target HOA.",
        "Cross-checks the assembled package against that HOA's solar installation guidelines (encoded once, reused forever).",
        "Flags deficiencies before submission — missing skirting language, missing renderings, missing setbacks, whatever each HOA requires.",
      ],
      yourBenefit:
        "You send complete HOA packages the first time instead of getting kicked back for missing items.",
      scopeNote:
        "Low-Med for 3–5 HOAs. Each additional HOA after that is a small, predictable lift.",
    },
    {
      id: "safety-plan-generator",
      number: "04",
      title: "Safety Plan Generator",
      scope: "LOW–MED",
      whatItIs:
        "A browser-automation tool that fills out the third-party safety plan form Steve does ~100×/month, end-to-end.",
      whatItDoes:
        "Pulls the project address from PISA, opens the safety plan portal, picks the closest hospital and fire department, completes the form, downloads the PDF.",
      yourBenefit:
        "Your team gets safety plan PDFs generated without manually filling the same third-party portal form on every job.",
    },
    {
      id: "17-point-inspection-scoring",
      number: "05",
      title: "17-Point Inspection Scoring",
      scope: "MED",
      whatItIs:
        "A capture path for the 17-point pre-inspection scores Steve already runs, plus a flag for likely-to-fail jobs before the jurisdiction is called.",
      whatItDoes: [
        "Field-friendly capture path for the 17 scores per job.",
        "A flag at submission time: based on this team's historical scores, this job is high-risk for failing inspection on X.",
        "A management view that surfaces patterns by crew over time.",
      ],
      yourBenefit:
        "Your team flags high-risk inspections before the jurisdiction is called, reducing expensive failed inspections.",
    },
    {
      id: "permit-form-auto-fill",
      number: "06",
      title: "Permit Form Auto-Fill",
      scope: "MED–HIGH",
      whatItIs:
        "A tool that parses the plan set and auto-fills the jurisdiction portal forms Steve fills out manually today. Steve reviews and submits.",
      whatItDoes: [
        "Reads the plan set from Fluent and pulls the structured fields: system size, panel count, inverter model, mounting type, service panel info, jurisdiction-specific cover-page data.",
        "Opens the relevant jurisdiction portal (Henderson, Clark County, North Las Vegas, etc.) and fills the form.",
        "Stops at upload-and-submit. Steve reviews and submits.",
      ],
      yourBenefit:
        "Your permitting team fills jurisdiction portal forms from the plan set instead of typing the same fields by hand on every submission.",
    },
    {
      id: "permit-status-monitoring",
      number: "07",
      title: "Permit Status Monitoring",
      scope: "MED–HIGH",
      whatItIs:
        "One combined notifier that watches every jurisdiction portal Sol-Up submits to and pings Steve when status changes — instead of Steve logging into each portal every day.",
      whatItDoes:
        "Pulls signals from multiple sources (email notifications when they fire, daily portal scrapers when they don't, custom webhooks where available, a simple refresh otherwise) and routes status changes into one feed tied to the PISA permit record.",
      yourBenefit:
        "Your team gets one feed for permit status changes across all jurisdictions instead of checking each portal daily.",
      scopeNote:
        "Lots of heterogeneous sources to wire up plus ongoing per-jurisdiction maintenance. Should be built after the auto-fill tool has already mapped each portal's structure.",
    },
    {
      id: "complex-solarapp-form",
      number: "08",
      title: "Complex SolarAPP+ Form Auto-Fill",
      scope: "HIGH",
      whatItIs:
        "The ~41-page form Steve walked us through, which needs values read off the electrical drawing — not just lifted from text.",
      whatItDoes:
        "If the design files have a text backend, parse values directly. Otherwise vision-parse the diagram, with the model citing the cropped source region next to each extracted value so human review is fast.",
      yourBenefit:
        "Your team gets complex SolarAPP+ forms pre-filled from the electrical drawing, with source citations for fast review.",
      scopeNote: "Drops to Med if a text backend exists. High if vision-only.",
    },
    {
      id: "crew-input-infrastructure",
      number: "★",
      title: "Crew Input as Infrastructure",
      scope: "HIGH",
      whatItIs:
        "A multimodal capture layer (voice, photo, checklist) tied to paperwork crews already have to do, so clean field data flows back into PISA without adding a separate logging burden.",
      whatItDoes: [],
      yourBenefit:
        "Your field teams capture data once and it flows into PISA, making several downstream projects cheaper to build.",
      isInfrastructure: true,
    },
  ],
  nextSteps: [
    "Sol-Up picks which project to start.",
    "Chesterbrook sends the SOW.",
    "Kickoff begins immediately after the SOW is signed. Targeting a finished first project within 2–3 weeks.",
  ],
  dontGetOverwhelmed:
    "No need to commit to more than one project. Start with project 01, see what it actually saves you, then decide on the next one. The goal is to free up enough of your team's time to offset several new hires.",
};
