export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[]; pull?: string };
export type Article = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  updated: string;
  readMinutes: number;
  kicker: string;
  answer: string;
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "what-is-aeo",
    title: "What is Answer Engine Optimization (AEO)?",
    dek: "Becoming the named answer when a buyer asks a machine.",
    date: "2026-04-12",
    updated: "2026-09-02",
    readMinutes: 8,
    kicker: "Definition",
    answer: "AEO is structuring brand, content, and entity so AI engines cite and recommend you in the response itself.",
    sections: [{ heading: "The short version", paragraphs: ["Search used to end on a list of links. It now often ends in a paragraph with citations."] }],
    faqs: [{ q: "Is AEO just SEO with a new acronym?", a: "No. SEO optimizes for rank and click. AEO optimizes for being quoted inside an answer." }],
  },
  {
    slug: "geo-vs-seo-vs-aeo",
    title: "GEO vs SEO vs AEO — what actually moves revenue",
    dek: "Three overlapping crafts. One pipeline.",
    date: "2026-05-28",
    updated: "2026-08-19",
    readMinutes: 7,
    kicker: "Framework",
    answer: "SEO makes you fetchable. GEO makes generative models use your material. AEO makes the buyer hear your name.",
    sections: [{ heading: "Stop buying three strategies", paragraphs: ["The prompt is the new homepage."] }],
    faqs: [{ q: "Do I still need classic SEO?", a: "Yes." }],
  },
  {
    slug: "get-cited-in-chatgpt-perplexity",
    title: "How brands get cited in ChatGPT and Perplexity",
    dek: "A field guide to named citations.",
    date: "2026-06-14",
    updated: "2026-09-08",
    readMinutes: 9,
    kicker: "Playbook",
    answer: "Brands get cited when they are a resolvable entity and publish unique attributable facts.",
    sections: [{ heading: "Four gates", paragraphs: ["Fetch, entity, information gain, corroboration."] }],
    faqs: [{ q: "Can you guarantee a ChatGPT citation?", a: "No." }],
  },
  {
    slug: "schema-entity-architecture",
    title: "Schema and entity architecture for AI retrieval",
    dek: "JSON-LD is how you translate a brand into something a model can hold.",
    date: "2026-07-22",
    updated: "2026-09-01",
    readMinutes: 8,
    kicker: "Technical",
    answer: "Entity architecture means Organization, products, authors, and FAQs are expressed in JSON-LD that matches the visible page.",
    sections: [{ heading: "Visible copy is the source of truth", paragraphs: ["If schema and the page disagree, the model distrusts you."] }],
    faqs: [{ q: "Is FAQ schema still worth it?", a: "For AI retrieval, well-written Q&A still helps." }],
  },
  {
    slug: "discovery-audit-what-we-measure",
    title: "The Discovery Audit: what APE X actually measures",
    dek: "A 30-to-45 day blueprint.",
    date: "2026-08-04",
    updated: "2026-09-12",
    readMinutes: 6,
    kicker: "Offer",
    answer: "The Discovery Audit baselines Share of Voice across AI engines and hands you a technical and content blueprint.",
    sections: [{ heading: "Why we refuse cold calls", paragraphs: ["If we have not measured you, we do not get to talk about you."] }],
    faqs: [{ q: "How much is the blueprint?", a: "Typically $8,500–$22,000." }],
  },
];

export function articleBySlug(slug: string) {
  return ARTICLES.find((item) => item.slug === slug);
}
