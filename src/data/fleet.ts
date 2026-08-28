import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
};

export const FLEET: FleetBot[] = [
  {
    id: "moss",
    name: "Moss",
    blurb: "Keeps live call notes on its computer and prepares the follow-up.",
    jobId: "standardize-room",
    color: "#007f72",
    mark: "M",
  },
  {
    id: "kite",
    name: "Kite",
    blurb: "Checks approved product and internal sources before it drafts an answer.",
    jobId: "legal-redlines",
    color: "#ff704d",
    mark: "K",
  },
  {
    id: "scout",
    name: "Scout",
    blurb: "Researches public sources and builds a brief with links, not guesses.",
    jobId: "attach-engine",
    color: "#e8ff71",
    mark: "S",
  },
];
