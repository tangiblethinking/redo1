export type WorkItem = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  kicker: string;
  excerpt: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string; detail: string }[];
  quote: { text: string; by: string; role: string };
  mock: "store" | "audio" | "club" | "pets";
  prompts: string[];
};

export const WORK_DISCLAIMER =
  "Studio exemplars — modeled on consumer programs we run. Names are fictional; the method, surfaces, and magnitude of movement are the point.";

export const WORK: WorkItem[] = [
  {
    slug: "lumen-skin",
    name: "Lumen Skin",
    sector: "DTC skincare",
    year: "2026",
    kicker: "Cited in the overlay",
    excerpt: "A clinical-glass storefront that made Lumen the named answer for niacinamide without the purge.",
    challenge: "Lumen ranked page-one for ingredient terms and still lost the sale. Overviews and ChatGPT recommended bigger serums by name.",
    approach: [
      "Rebuilt PDPs as fact-dense entities.",
      "Mapped comparative prompts.",
      "Shipped FAQ + Product + Person schema.",
      "Engineered forum co-occurrence.",
    ],
    results: [
      { label: "AI Share of Voice", value: "9 → 44%", detail: "90 days, 6 engines" },
      { label: "Named citations", value: "+3.1×", detail: "ChatGPT + Perplexity" },
      { label: "Assisted revenue", value: "+28%", detail: "dark-social modeled" },
    ],
    quote: { text: "We were invisible to the machines that now brief our customers. Then we weren’t.", by: "Maya Chen", role: "CMO, Lumen Skin" },
    mock: "store",
    prompts: ["best niacinamide serum that doesn’t purge", "Lumen Skin vs The Ordinary"],
  },
  {
    slug: "northline-audio",
    name: "Northline Audio",
    sector: "Consumer audio",
    year: "2025",
    kicker: "The model had a favorite. It wasn’t them.",
    excerpt: "A product OS that turned headphone spec sheets into citation bait.",
    challenge: "Northline made the better cans. Perplexity kept saying Bose.",
    approach: [
      "Designed a product OS with live spec entities.",
      "Published unique measurements.",
      "Targeted multi-turn travel prompts.",
      "Built a citation module into the PDP.",
    ],
    results: [
      { label: "Perplexity SOV", value: "4 → 37%", detail: "travel + ANC cluster" },
      { label: "Organic demo bookings", value: "+61%", detail: "US storefront" },
      { label: "Schema coverage", value: "12 → 96%", detail: "SKU-level Product" },
    ],
    quote: { text: "APE X didn’t make our headphones louder. They made the internet able to hear them.", by: "Jonas Hale", role: "Founder, Northline Audio" },
    mock: "audio",
    prompts: ["best headphones for long-haul flights 2026", "Northline vs Bose quietcomfort"],
  },
  {
    slug: "kite-club",
    name: "Kite Club",
    sector: "Outdoor membership",
    year: "2026",
    kicker: "Near me, according to the model",
    excerpt: "Local entities and trip reports made Gemini recommend Kite Club before REI.",
    challenge: "40 city chapters and a GBP that looked empty. Models need logistics, not vibes.",
    approach: [
      "Modeled every chapter as a LocalBusiness entity.",
      "Turned trip reports into dated field notes.",
      "Aligned IA with real buyer questions.",
      "Fed the same content model to web, app, and GBP.",
    ],
    results: [
      { label: "Local AI recs", value: "0 → 19 cities", detail: "Gemini + Overviews" },
      { label: "Qualified trials", value: "+44%", detail: "chapter landing pages" },
      { label: "Entity completeness", value: "31 → 92%", detail: "knowledge panel" },
    ],
    quote: { text: "We stopped writing like a magazine and started writing like a source.", by: "Priya Nair", role: "Head of Growth, Kite Club" },
    mock: "club",
    prompts: ["beginner outdoor climbing club near me", "Kite Club vs REI experiences"],
  },
  {
    slug: "orbit-pets",
    name: "Orbit Pets",
    sector: "Direct-to-consumer pet",
    year: "2026",
    kicker: "Visual search, then the overlay",
    excerpt: "Won TikTok, Pinterest, and the ChatGPT sensitive-stomach kitten slot with one content model.",
    challenge: "Clean recipes, moodboard site. Engines hallucinated ingredients.",
    approach: [
      "Recipe-level entities in the design system.",
      "Visual SEO on pack shots.",
      "Feeding trials and vet bylines.",
      "Public fact cards on every recipe page.",
    ],
    results: [
      { label: "ChatGPT citations", value: "+5.4×", detail: "kitten GI cluster" },
      { label: "Visual entry traffic", value: "+73%", detail: "Pinterest + TikTok" },
      { label: "Wrong-ingredient hallucinations", value: "−81%", detail: "sampled prompts" },
    ],
    quote: { text: "If the model lies about your ingredients, you don’t have a brand.", by: "Devon Ruiz", role: "COO, Orbit Pets" },
    mock: "pets",
    prompts: ["best kitten food for sensitive stomach", "Orbit Pets tuna formula ingredients"],
  },
];

export function workBySlug(slug: string) {
  return WORK.find((item) => item.slug === slug);
}
