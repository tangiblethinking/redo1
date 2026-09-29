export const PRICING = {
  title: "Pricing",
  kicker: "Engagements",
  headline: "Pay for citations, not decks.",
  dek: "Every engagement starts with measurement. Retainers exist to defend the citation after we win it.",
  tiers: [
    {
      name: "Discovery Audit",
      price: "$8,500–$22,000",
      period: "30–45 days",
      points: ["AI Share of Voice across engines", "Prompt mining and competitor adjacency", "Technical + content blueprint"],
      href: "/audit",
      cta: "Start audit",
    },
    {
      name: "Build",
      price: "Scoped",
      period: "per surface",
      points: ["Entity and schema engineering", "Fact-density page rebuilds", "Fetch and Core Web Vitals"],
      href: "/contact",
      cta: "Talk scope",
    },
    {
      name: "Defend",
      price: "Retainer",
      period: "monthly",
      points: ["Citation monitoring", "Prompt and competitor drift", "Monthly readout on AI-referred demand"],
      href: "/contact",
      cta: "Request retainer",
    },
  ],
} as const;
