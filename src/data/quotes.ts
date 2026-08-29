import type { Quote } from "./types";

export const QUOTES = [
  {
    name: "Naval",
    handle: "@naval",
    date: "2026-08-20",
    quote:
      "Grok Bot is just cool. 😎\nOf course an agent should be persistent.\nOf course it should have its own computer.",
    source: "https://x.com/naval/status/2090497355649008059",
  },
  {
    name: "Austen Allred",
    handle: "@Austen",
    date: "2026-08-12",
    quote:
      "The form factor is so fun, especially when combined with text to speech. You can FLY.",
    source: "https://x.com/Austen/status/2087685264617406963",
  },
  {
    name: "Alex Finn",
    handle: "@AlexFinn",
    date: "2026-08-17",
    quote: "Grok Bot is the best AI agent right now.",
    source: "https://x.com/AlexFinn/status/2089505950470459659",
  },
  {
    name: "Lenny Rachitsky",
    handle: "@lennysan",
    date: "2026-08-11",
    quote:
      "I got early access to Grok Bot and I'm hooked.\nI haven't been this excited about a new AI product in a while.",
    source: "https://x.com/lennysan/status/2087241423792087518",
  },
  {
    name: "Gergely Orosz",
    handle: "@GergelyOrosz",
    date: "2026-08-20",
    quote:
      "I continue be surprised how Grok Bot is very good by doing so many things right.",
    source: "https://x.com/GergelyOrosz/status/2090353329771631080",
  },
  {
    name: "Yun-Ta Tsai",
    handle: "@yunta_tsai",
    date: "2026-08-12",
    quote: "Color me impressed.",
    source: "https://x.com/yunta_tsai/status/2087415205756391461",
  },
] as const satisfies readonly Quote[];
