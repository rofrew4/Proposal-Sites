import type { Proposal } from "./types";

export const halpern: Proposal = {
  slug: "halpern",
  password: "halpern",
  meta: {
    title: "Halpern Lease Generation · Chesterbrook",
    description:
      "Automating Halpern's lease generation workflow in Airtable. Phase 1 MVP in weeks.",
  },
  hero: {
    preparedDate: "06.2026",
    partnershipLabel: "Halpern × Chesterbrook",
    title: "Lease Generation Automation",
    clientContacts: "Matthew Oppenheimer",
    clientName: "Halpern",
    chesterbrookTeam: "Rowan Frew",
  },
  overview: [
    "Think of lease generation as an assembly line where Susan's working every station herself. Automation puts a machine at each station, and she becomes the foreman who watches the line and steps in when something needs judgment.",
    "The whole process lives in Airtable: intake, clause library, deal records, document status, all in one place. Susan and Matthew can see every doc in flight in Airtable, where they are in the deal process, and evaluate what's getting stuck.",
  ],
  workflow: {
    title: "Here's what changes at each step",
    steps: [
      {
        id: "request-intake",
        title: "Request intake",
        today:
          "requester emails an Excel LDR, usually missing fields, and chases them down.",
        automated:
          "a native Airtable form that won't submit until every required field is filled. Bad info never reaches Susan, and the deal record exists in Airtable from the moment it's submitted.",
      },
      {
        id: "draft-generation",
        title: "Draft generation",
        today:
          "opens the template, fills placeholders, picks the right rent table, the right broker paragraph, the right insurance riders, formats everything.",
        automated:
          "the tool reads the Airtable record, resolves every conditional, applies every formatting rule, and spits out a finished Word draft in seconds.",
      },
      {
        id: "addendum-assembly",
        title: "Addendum assembly",
        today:
          "opens the language folder and copy-pastes clauses for alcohol sales, broker involvement, LI allowances, renewal options, etc.",
        automated:
          "a clause library lives in Airtable. Each clause is a record tagged with trigger conditions. The generator pulls the right ones and stitches them in. Susan adds, edits, and retires clauses directly in Airtable. Edge cases still come to Susan.",
      },
      {
        id: "review-routing",
        title: "Review routing",
        today:
          "emails the draft to requester, Lease Admin, and Legal, tracks responses, and nags holdouts.",
        automated:
          "Airtable automations send to all three, update status, send reminders, and surface comments in one place.",
      },
      {
        id: "signature",
        title: "Signature",
        today: "creates DocuSign envelopes manually.",
        automated:
          "one button. The DocuSign API handles envelope creation, signer routing, and returns the signed copy to the Airtable record.",
      },
      {
        id: "filing",
        title: "Filing",
        today:
          "names the file per Halpern's convention, saves to the right folder, and hands the package to Lease Admin.",
        automated: "auto-named, auto-filed, Lease Admin gets pinged.",
      },
    ],
    afterSteps: {
      bold: "Susan's new role:",
      text: "watches the Airtable dashboard showing every doc in flight and where each one is stuck. Handles the edge cases (custom addendum language, weird deal terms, the Termination WITNESSETH lease history) and owns the clause library. When Legal changes a clause, updates one Airtable record and every future doc uses the new version. Matthew gets the workflow visibility he's looking for from day one.",
    },
    phase1: {
      intro: [
        "Building the full system is doable, but it'll take time. The smarter move is a Phase 1 MVP that handles a big chunk of the work now and stands up the Airtable foundation everything else builds on. From there we decide what to build next. Here's what Phase 1 covers:",
      ],
      discovery: {
        bold: "5-10 hour discovery:",
        text: "we've done some of this already. An engineer needs to do a deeper dive with Susan to map out specifics and design the Airtable schema, clause library structure, and template conditionals. This is so hours don't get lost down the line on guessing.",
      },
      mvpTitle: "40-55 hour MVP build:",
      mvpBullets: [
        "Set up the Airtable base: Deals table, Clauses table seeded with Susan's most-used clauses, Documents table with status tracking",
        "Native Airtable intake form replacing the Excel LDR for new deals",
        "Single-template lease generator (Predetermined RCD) that pulls from Airtable, fills every placeholder, applies every formatting rule, and resolves every conditional (rent table, free-rent paragraph, broker scenario, insurance riders, sales reports, Use inline vs. SEE ADDENDUM)",
        "Basic status tracking so Susan and Matthew see where each doc is in the process",
        "Susan trained on maintaining the Airtable base herself",
      ],
      closing: [
        "The goal is to create an easy to track process that takes 50% of Susan's work off her plate, give back real hours every week, and stand up the platform Matthew described. It ships in a couple weeks, not months. From there, you can decide if you want to continue automating the rest of the process without taking a large upfront risk.",
      ],
      costNote:
        "One note on cost: Airtable runs roughly $20-50 per user per month depending on the plan. Small recurring cost.",
    },
  },
};
