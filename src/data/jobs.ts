import type { Artifact, CroJob, SlideCard } from "./types";

export const FOLLOW_UP_SLIDES: SlideCard[] = [
  {
    n: 1,
    kicker: "Call notes",
    voice: "them",
    title: "Acme's workforce priorities",
    body: "Only the workforce priorities confirmed in the meeting appear in the recap.",
  },
  {
    n: 2,
    kicker: "Review queue",
    voice: "them",
    title: "UKG Dimensions questions",
    body: "Any open Dimensions question stays marked for follow-up.",
  },
  {
    n: 3,
    kicker: "UKG follow-up",
    voice: "us",
    title: "UKG Pro product path",
    body: "The rep chooses which UKG Pro details belong in the next conversation.",
  },
  {
    n: 4,
    kicker: "Next action",
    voice: "us",
    title: "Ready for review",
    body: "The deck and email remain drafts until the rep approves them.",
  },
];

export const QUESTION_REPLY: Extract<Artifact, { kind: "redlines" }> = {
  kind: "redlines",
  title: "Acme product questions",
  paperTitle: "Review state",
  from: "Acme customer thread",
  marks: [
    {
      text: "UKG Pro workforce question",
      note: "Answer drafted from approved UKG Pro content. Source linked.",
      take: true,
    },
    {
      text: "Dimensions scheduling question",
      note: "Acme account notes checked. The draft uses confirmed context only.",
      take: true,
    },
    {
      text: "Payroll and HCM question",
      note: "An owner is requested. This item stays on hold.",
      take: false,
    },
  ],
  reply: {
    to: "Acme team",
    subject: "Follow-up to your UKG Pro and Dimensions questions",
    body: "Hi team,\n\nI pulled your UKG Pro, Dimensions, payroll, and HCM questions into one note. Each answer links to the source used, and I marked the item that still needs an owner. I have not filled any gaps with guesses.\n\nOnce the open item is confirmed, this is ready for review.\n\nBest,\nYour UKG team",
  },
};

export const ACCOUNT_BRIEF: Extract<Artifact, { kind: "outbound" }> = {
  kind: "outbound",
  title: "Acme account brief",
  account: "Acme",
  hypothesis: [
    {
      k: "Why this account",
      body: "A source must show the priority before it enters the brief.",
    },
    {
      k: "Why now",
      body: "The signal must be current, public, and linked.",
    },
    {
      k: "Why UKG",
      body: "Workforce and HCM fit stays open until the evidence supports it.",
    },
  ],
  evidence: [
    {
      source: "Company site",
      finding: "Current priorities and the language the company uses.",
    },
    {
      source: "Public filings",
      finding: "Business context with a direct source link.",
    },
    {
      source: "Careers",
      finding: "Team and role signals that can be checked.",
    },
  ],
  targets: [
    {
      name: "Contact to verify",
      role: "Role to confirm",
      why: "No outreach until identity and relevance are supported by a source.",
    },
  ],
  page: {
    headline: "A sourced account brief",
    body: "The agent collects evidence and keeps every open question visible. The rep decides whether there is a useful reason to reach out.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Update decks in real time",
    trigger: "A customer call starts",
    backgroundAction: "Taking notes and preparing the follow-up",
    problem:
      "Call notes, deck edits, and the recap compete with the rep's next meeting.",
    botJob:
      "Grok Bot follows the call, separates confirmed points from open questions, and prepares the customer follow-up.",
    storyboard: [
      {
        when: "As the call opens",
        label: "Grok Bot opens the approved note template and starts listening.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Customer discovery",
          people: [
            { initials: "YR", name: "Your rep" },
            { initials: "AC", name: "Acme team" },
            { initials: "GB", name: "Grok Bot" },
          ],
        },
      },
      {
        when: "While they talk",
        label: "Confirmed points and open questions land in separate lanes.",
        scene: "notes",
        visual: {
          kind: "live-transcript",
          timestamp: "Live",
          label: "Confirmed notes",
          summary:
            "Acme's workforce priorities stay separate from open UKG Pro and Dimensions questions.",
          signals: ["Workforce", "UKG Pro", "Dimensions"],
        },
      },
      {
        when: "Before the call ends",
        label: "The recap and last slides are ready for the rep to check.",
        scene: "deck",
        visual: {
          kind: "deck-update",
          eyebrow: "Draft only",
          headline: "Acme workforce recap",
          product: "UKG Pro and Dimensions",
          status: "Waiting for review",
        },
      },
      {
        when: "The artifact",
        label: "A customer-ready follow-up, still in draft.",
        scene: "deck",
        slides: FOLLOW_UP_SLIDES,
      },
    ],
    unlock:
      "The rep stays in the conversation while the follow-up takes shape.",
    outcome: "A live call becomes a clean follow-up while the details are fresh.",
    clips: [],
    demo: {
      title: "Grok Bot",
      subtitle: "Live deck updates",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "agent",
          name: "Grok Bot",
          role: "bot",
          persona: "Updates the Acme deck from a live call",
          color: "#007f72",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "agent",
          kind: "routine",
          body: "The Acme call started. I opened the approved note template. Nothing leaves this workspace.",
        },
        {
          id: "m2",
          from: "agent",
          kind: "text",
          body: "I separated confirmed workforce priorities from open UKG Pro and Dimensions questions. I will not fill a gap with a guess.",
        },
        {
          id: "m3",
          from: "agent",
          kind: "draft",
          draftLabel: "Follow-up deck",
          artifact: {
            kind: "slides",
            title: "UKG customer follow-up",
            cards: FOLLOW_UP_SLIDES,
          },
        },
        {
          id: "m4",
          from: "agent",
          kind: "system",
          body: "Deck and recap are ready for review. Nothing sent.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Find product and internal answers fast",
    trigger: "A customer question lands",
    backgroundAction: "Checking approved sources and drafting the reply",
    problem:
      "A simple customer question can stall while the rep searches old threads and asks around.",
    botJob:
      "Grok Bot checks approved UKG product content, Acme account notes, and internal sources. It links each answer and holds anything uncertain.",
    storyboard: [
      {
        when: "A new thread arrives",
        label: "Grok Bot reads the questions and opens a source checklist.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Acme team",
          subject: "UKG Pro and Dimensions questions",
          state: "New thread",
        },
      },
      {
        when: "Sources are checked",
        label: "Each answer is tied to the page or note that supports it.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "UKG Pro", answer: "Workforce source linked" },
            { name: "Dimensions", answer: "Scheduling source linked" },
            { name: "Payroll and HCM", answer: "Open item routed" },
          ],
          status: "Review complete",
        },
      },
      {
        when: "The draft is ready",
        label: "The rep sees what is answered and what still needs an owner.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Acme team",
          subject: "Follow-up to your UKG product questions",
          status: "Ready for review",
        },
      },
      {
        when: "The artifact",
        label: "A sourced response with the open item still visible.",
        scene: "send",
        artifact: QUESTION_REPLY,
      },
    ],
    unlock: "The rep reviews one draft instead of rebuilding the answer.",
    outcome:
      "A customer question becomes a sourced reply with no hidden guesswork.",
    clips: [],
    demo: {
      title: "Grok Bot",
      subtitle: "Product answers with sources",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "agent",
          name: "Grok Bot",
          role: "bot",
          persona: "Checks UKG sources and drafts the Acme answer",
          color: "#ff704d",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "agent",
          kind: "routine",
          body: "An Acme question arrived. I am checking approved UKG Pro, Dimensions, payroll, and HCM content.",
        },
        {
          id: "m2",
          from: "agent",
          kind: "text",
          body: "Two items have direct sources. One still needs an owner, so I left it on hold.",
        },
        {
          id: "m3",
          from: "agent",
          kind: "draft",
          draftLabel: "Question review",
          artifact: QUESTION_REPLY,
        },
        {
          id: "m4",
          from: "agent",
          kind: "draft",
          draftLabel: "Email reply",
          artifact: {
            kind: "gmail",
            title: "Customer reply",
            to: QUESTION_REPLY.reply.to,
            subject: QUESTION_REPLY.reply.subject,
            body: QUESTION_REPLY.reply.body,
          },
        },
        {
          id: "m5",
          from: "agent",
          kind: "system",
          body: "The answer stays in drafts until you approve it.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Pipeline generation is now easier than ever",
    trigger: "An account enters the rep's list",
    backgroundAction: "Reading public sources and building a brief",
    problem:
      "Generic outreach starts with a persona. Useful outreach starts with a current reason to talk.",
    botJob:
      "Grok Bot checks public sources, records the links, and leaves UKG product fit open until the evidence supports it.",
    storyboard: [
      {
        when: "The account enters the list",
        label: "Grok Bot opens public sources before it drafts a message.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Acme",
          sources: ["Company site", "Public filings", "Careers"],
          signal: "Public sources only",
        },
      },
      {
        when: "The brief takes shape",
        label: "Evidence and open questions stay side by side.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Account", answer: "Evidence required" },
            { label: "Timing", answer: "Current source required" },
            { label: "UKG fit", answer: "UKG Pro / Dimensions" },
          ],
        },
      },
      {
        when: "Before outreach",
        label: "The rep checks the contact, the reason, and every source.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Contact to verify",
          channels: ["LinkedIn", "Email", "Account note"],
          status: "Drafts only",
        },
      },
      {
        when: "The artifact",
        label: "A research brief that shows its work.",
        scene: "send",
        artifact: ACCOUNT_BRIEF,
      },
    ],
    unlock: "Research is ready before the rep writes the first line.",
    outcome:
      "A new account becomes a sourced brief, with the gaps left in plain view.",
    clips: [],
    demo: {
      title: "Grok Bot",
      subtitle: "Acme research and first-touch prep",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "agent",
          name: "Grok Bot",
          role: "bot",
          persona: "Builds the Acme brief from public sources",
          color: "#e8ff71",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "agent",
          kind: "routine",
          body: "Acme entered your list. I am checking public sources before I draft anything.",
        },
        {
          id: "m2",
          from: "agent",
          kind: "text",
          body: "The brief separates linked evidence from open questions. UKG Pro and Dimensions fit is still waiting for your review.",
        },
        {
          id: "m3",
          from: "agent",
          kind: "draft",
          draftLabel: "Account brief",
          artifact: {
            kind: "packet",
            title: "Evidence and open questions",
            fields: [
              {
                label: "Company site",
                value: "Current priorities and company language.",
              },
              {
                label: "Public filings",
                value: "Business context with a direct source link.",
              },
              {
                label: "Open question",
                value: "Confirm the relevant team before outreach.",
              },
            ],
          },
        },
        {
          id: "m4",
          from: "agent",
          kind: "draft",
          draftLabel: "Reason to reach out",
          artifact: {
            kind: "packet",
            title: "First-touch check",
            fields: ACCOUNT_BRIEF.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m5",
          from: "agent",
          kind: "draft",
          draftLabel: "LinkedIn note",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn draft",
            to: "Acme contact to verify",
            role: "Role to confirm",
            body: "I pulled together a short note from Acme's public sources. If the confirmed workforce priority is on your plan, it may be useful to compare UKG Pro and Dimensions.",
          },
        },
        {
          id: "m6",
          from: "agent",
          kind: "draft",
          draftLabel: "Email note",
          artifact: {
            kind: "gmail",
            title: "Email draft",
            to: "Acme contact to verify",
            subject: "Acme workforce priorities",
            body: "Hi there,\n\nI pulled together a short note from Acme's public sources. If the confirmed workforce priority is on your plan, it may be useful to compare UKG Pro and Dimensions.\n\nBest,\nYour UKG team",
          },
        },
        {
          id: "m7",
          from: "agent",
          kind: "draft",
          draftLabel: "Account page",
          artifact: {
            kind: "one-pager",
            title: ACCOUNT_BRIEF.page.headline,
            eyebrow: "Acme",
            sections: [
              {
                heading: "Evidence",
                body: "Every point links back to a public source.",
              },
              {
                heading: "Open questions",
                body: "Unknowns stay visible until the rep confirms them.",
              },
              {
                heading: "UKG fit",
                body: ACCOUNT_BRIEF.page.body,
              },
            ],
          },
        },
        {
          id: "m8",
          from: "agent",
          kind: "system",
          body: "Brief and outreach are drafts. Nothing sent.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
