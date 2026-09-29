export type ServiceBucket = {
  slug: string;
  kicker: string;
  title: string;
  navLabel: string;
  href: string;
  dek: string;
  answer: string;
  bullets: string[];
};

export const SERVICE_BUCKETS: ServiceBucket[] = [
  {
    slug: "ai-search",
    kicker: "AEO · GEO · SEO",
    title: "AI Search",
    navLabel: "AI Search",
    href: "/services/ai-search",
    dek: "Show up when the model answers — not after the click is already gone.",
    answer: "APE X engineers fact-dense, structured, citation-ready surfaces so ChatGPT, Perplexity, Gemini, and Google AI Overviews name your brand instead of your competitor.",
    bullets: ["Generative knowledge graph & citation optimization", "Conversational intent and prompt mapping", "Share of Voice across AI engines", "PageRank sculpting & off-site authority"],
  },
  {
    slug: "technical-seo",
    kicker: "Indexability",
    title: "Technical SEO",
    navLabel: "Technical SEO",
    href: "/services/technical-seo",
    dek: "If the bot cannot fetch it, the model cannot cite it.",
    answer: "We make your architecture machine-legible: JS rendering, schema, Core Web Vitals, crawl budget, and entity JSON-LD.",
    bullets: ["Technical indexability & crawl optimization", "Advanced schema & entity architecture", "Headless CMS content modeling", "WCAG, semantic HTML, conversational UI"],
  },
  {
    slug: "content-architecture",
    kicker: "Information gain",
    title: "Content Architecture",
    navLabel: "Content Architecture",
    href: "/services/content-architecture",
    dek: "Models retrieve dense, unique, attributable facts. We write for that.",
    answer: "We expand pages with unique statistics, expert authorship, and high-density facts until they clear retrieval thresholds.",
    bullets: ["Information gain & fact-density expansion", "E-E-A-T and authorship optimization", "Search-first navigation architecture", "Visual search, ASO, and local entity feeds"],
  },
];

export const SERVICE_OFFERS = [
  { id: "graph", bucket: "ai-search", name: "Generative Knowledge Graph & Citation Optimization", copy: "Fact-dense structured content for citations in AI Overviews, Perplexity, ChatGPT, and Gemini." },
  { id: "intent", bucket: "ai-search", name: "Conversational Intent Mapping", copy: "Architecture aligned to multi-turn buyer prompts." },
  { id: "authority", bucket: "ai-search", name: "PageRank Sculpting & Off-Site Authority", copy: "Internal links and digital PR that drive domain trust." },
  { id: "schema", bucket: "technical-seo", name: "Advanced Schema & Entity Architecture", copy: "JSON-LD for FAQ, Business Entity, and Product." },
  { id: "crawl", bucket: "technical-seo", name: "Technical Indexability & Crawl Optimization", copy: "Rendering, site health, and Core Web Vitals." },
  { id: "density", bucket: "content-architecture", name: "Information Gain & Fact-Density Expansion", copy: "Unique statistics and expert quotes that clear LLM retrieval thresholds." },
] as const;
