import { basePath } from "@/lib/basePath";

export type Project = {
  slug: string;
  title: string;
  company: string;
  oneLiner: string;
  role: string;
  duration: string;
  season: string;
  teamSize?: string;
  thumbnail?: string;
  tags: string[];
  featured: boolean;
  heroAspectRatio: "16/9" | "4/3" | "1/1" | "3/4";
  metrics: { label: string; value: string }[];
  problem: string;
  process: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "mythweave",
    title: "Teamfight Tactics: Mythweave",
    company: "Personal Project",
    oneLiner:
      "A speculative TFT set concept: a mythic, hand-illustrated card frame redesign for the game's Augment system.",
    role: "Visual Designer",
    duration: "Personal project",
    season: "2026",
    thumbnail: `${basePath}/images/work/mythweave-thumbnail.png`,
    tags: ["Visual Design", "Game UI", "Illustration"],
    featured: true,
    heroAspectRatio: "16/9",
    metrics: [],
    problem:
      "Wanted to explore what a fully realized visual identity for a TFT set could look like, from mood to a shipped-feeling card frame.",
    process:
      "Researched past TFT set art direction, then designed and iterated on an original Augment card frame across two rounds before finalizing gold and silver tiers.",
    outcome: "A cohesive card system spanning research, iteration, and final art across two augment tiers.",
  },
  {
    slug: "warframe-referral-page",
    title: "Warframe Referral Page",
    company: "Digital Extremes",
    oneLiner:
      "A redesigned referral program page for Warframe, making it clearer for players to share the game and track rewards.",
    role: "UI Designer",
    duration: "Professional project",
    season: "2026",
    thumbnail: `${basePath}/images/work/warframe-thumbnail.png`,
    tags: ["UI Design", "Web", "Growth"],
    featured: true,
    heroAspectRatio: "16/9",
    metrics: [],
    problem:
      "Warframe's referral program was hard to find and harder to understand, so most players never used it.",
    process:
      "Redesigned the referral page's flow and visual hierarchy to make sharing a link and tracking rewards immediately clear.",
    outcome: "A clearer, more inviting referral page ready to ship on the Warframe website.",
  },
  {
    slug: "panasonic-kds-ui",
    title: "Panasonic Kitchen Display System Redesign",
    company: "ITSP",
    oneLiner:
      "Redesigned a configurable kitchen display platform's order flow, card system, and alert states for Panasonic.",
    role: "Product Design Intern",
    duration: "6-month project",
    season: "2025",
    teamSize: "5 People",
    thumbnail: `${basePath}/images/work/panasonic-thumbnail.png`,
    tags: ["UX/UXR", "UI Design", "Configurable Systems", "B2B"],
    featured: true,
    heroAspectRatio: "16/9",
    metrics: [],
    problem:
      "The existing kitchen display used a single fixed layout that couldn't be configured per restaurant brand or store.",
    process:
      "Owned the ticket information hierarchy, card system, and alert-state design across a 5-person team.",
    outcome: "Shipped to production.",
  },
  {
    slug: "awowogei-arts",
    title: "Awowogei Arts",
    company: "Founder",
    oneLiner:
      "A self-built, user-focused storefront for custom prints, grown through community and data-driven marketing.",
    role: "Founder",
    duration: "Independent business",
    season: "Ongoing",
    teamSize: "Solo",
    tags: ["Founder", "Growth", "Community"],
    featured: false,
    heroAspectRatio: "1/1",
    metrics: [
      { label: "ARR", value: "$6,000/mo" },
      { label: "Organic search", value: "+60%" },
      { label: "Followers", value: "+500%" },
    ],
    problem:
      "Building an audience and a store from scratch, with no existing brand or traffic.",
    process:
      "Built a self-developed storefront, started a Discord community for direct feedback, and used search-query and trend analytics to guide growth.",
    outcome:
      "Grew to $6,000/month ARR, +60% organic search results, and +500% followers to 100k+ in one month.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
