import type { JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gmail"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const docs = { id: "docs", host: "docs.google.com", label: "Docs" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const sources = {
  id: "sources",
  host: "workspace.local",
  label: "Sources",
};
const accountPage = {
  id: "page",
  host: "workspace.local",
  label: "Account page",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening live notes",
      host: "granola.app",
      path: "/notes/customer-discovery",
      title: "Customer discovery",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m2: {
      pill: "Separating confirmed points from open questions",
      host: "granola.app",
      path: "/notes/customer-discovery",
      title: "Customer discovery",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m3: {
      pill: "Building the follow-up deck",
      host: "figma.com",
      path: "/file/ukg-customer-follow-up",
      title: "UKG customer follow-up",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m4: {
      pill: "Parking the draft for review",
      host: "figma.com",
      path: "/file/ukg-customer-follow-up",
      title: "UKG customer follow-up",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Checking approved UKG content",
      host: "www.ukg.com",
      path: "/products",
      title: "UKG product content",
      site: "research",
      tabs: [sources, docs, gmail],
    },
    m2: {
      pill: "Linking each answer to a source",
      host: "docs.google.com",
      path: "/document/d/customer-questions",
      title: "Customer questions",
      site: "gdoc",
      tabs: [sources, docs, gmail],
    },
    m3: {
      pill: "Marking the open item",
      host: "docs.google.com",
      path: "/document/d/customer-questions",
      title: "Customer questions",
      site: "gdoc",
      tabs: [sources, docs, gmail],
    },
    m4: {
      pill: "Drafting the reply, not sending",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [sources, docs, gmail],
    },
    m5: {
      pill: "Waiting for rep approval",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [sources, docs, gmail],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Opening public sources",
      host: "workspace.local",
      path: "/research/sample-account",
      title: "Sample account sources",
      site: "research",
      tabs: [sources, docs, linkedin, gmail],
    },
    m2: {
      pill: "Separating evidence from open questions",
      host: "workspace.local",
      path: "/research/sample-account",
      title: "Sample account sources",
      site: "research",
      tabs: [sources, docs, linkedin, gmail],
    },
    m3: {
      pill: "Building the account brief",
      host: "docs.google.com",
      path: "/document/d/account-brief",
      title: "Account brief",
      site: "gdoc",
      tabs: [sources, docs, linkedin, gmail],
    },
    m4: {
      pill: "Checking the reason to reach out",
      host: "docs.google.com",
      path: "/document/d/account-brief",
      title: "First-touch check",
      site: "gdoc",
      tabs: [sources, docs, linkedin, gmail],
    },
    m5: {
      pill: "Drafting LinkedIn, not sending",
      host: "www.linkedin.com",
      path: "/messaging/compose",
      title: "Message",
      site: "linkedin",
      tabs: [sources, docs, linkedin, gmail],
    },
    m6: {
      pill: "Drafting email, not sending",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [sources, docs, linkedin, gmail],
    },
    m7: {
      pill: "Building a private account page",
      host: "workspace.local",
      path: "/pages/sample-account",
      title: "Sample account brief",
      site: "page",
      tabs: [sources, docs, accountPage, gmail],
    },
    m8: {
      pill: "Drafts parked, nothing sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [sources, docs, linkedin, gmail],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
