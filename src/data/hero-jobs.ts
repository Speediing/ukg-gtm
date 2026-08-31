export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJobId =
  | "sales-outbound"
  | "account-research"
  | "call-follow-up"
  | "deal-desk"
  | "pipeline-health"
  | "renewal-risk"
  | "competitive-intel"
  | "sales-chief-of-staff";

export type HeroJob = {
  id: HeroJobId;
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS = [
  {
    id: "sales-outbound",
    name: "Sales Outbound",
    icon: "outbound",
    account: "Acme",
    signal: "A new public account signal",
    work: "I checked the public source, recorded the link, and drafted a first-touch note. Product fit stays open until you review the evidence.",
    result: "Sourced UKG outreach draft ready",
    user: "keep the outreach in drafts for review",
    bot: "done. nothing has been sent.",
  },
  {
    id: "account-research",
    name: "Account Research",
    icon: "research",
    account: "Account review",
    signal: "An account entered the rep's list",
    work: "I checked public sources, mapped the team to verify, and kept every unknown visible in the account brief.",
    result: "UKG account brief and source list ready",
    user: "show me the sources before the call",
    bot: "they are linked in the brief. open questions are marked.",
  },
  {
    id: "call-follow-up",
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Customer discovery",
    signal: "The customer call ended",
    work: "I separated confirmed points from open questions, updated the recap in the customer's language, and prepared the follow-up as a draft.",
    result: "UKG recap and follow-up draft ready",
    user: "leave both for my review",
    bot: "ready. nothing leaves until you approve it.",
  },
  {
    id: "deal-desk",
    name: "Deal Desk",
    icon: "deal-desk",
    account: "Customer question",
    signal: "A product question arrived",
    work: "I checked approved UKG content and account notes, linked each source, and routed the unresolved item to an internal owner.",
    result: "Sourced response ready for review",
    user: "hold the open item and keep the reply in drafts",
    bot: "done. the unresolved item is still marked.",
  },
  {
    id: "pipeline-health",
    name: "Pipeline Health",
    icon: "pipeline",
    account: "Opportunity review",
    signal: "A deal has no confirmed next step",
    work: "I reviewed the latest activity and call notes, then summarized what is confirmed, what is missing, and who should verify the next action.",
    result: "UKG opportunity check ready",
    user: "leave the check for the account owner",
    bot: "ready in the review queue.",
  },
  {
    id: "renewal-risk",
    name: "Renewal Risk",
    icon: "renewal",
    account: "Account review",
    signal: "Recent account activity changed",
    work: "I compared the latest notes with the agreed outcomes, marked every assumption, and prepared questions for the account team.",
    result: "UKG account review brief ready",
    user: "keep the assumptions visible",
    bot: "they are marked. the brief is ready for review.",
  },
  {
    id: "competitive-intel",
    name: "Competitive Intel",
    icon: "competitive",
    account: "Call preparation",
    signal: "A competitor was mentioned",
    work: "I pulled approved UKG content, linked each source, and drafted a comparison around the buyer's stated priorities without unsupported claims.",
    result: "Source-linked UKG talk track ready",
    user: "add it to the call brief",
    bot: "added as a draft with the sources attached.",
  },
  {
    id: "sales-chief-of-staff",
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Weekly operating review",
    signal: "Open decisions need owners",
    work: "I gathered the latest opportunity changes, outstanding questions, and owner updates, then separated confirmed facts from follow-up.",
    result: "UKG sales operating brief ready",
    user: "put it in the review queue",
    bot: "ready. open decisions still show their owners.",
  },
] as const satisfies readonly HeroJob[];
