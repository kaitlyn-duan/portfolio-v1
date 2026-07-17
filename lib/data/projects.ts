export type Project = {
  slug: string;
  title: string;
  company: string;
  oneLiner: string;
  role: string;
  duration: string;
  season: string;
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
    slug: "onroute-homepage-redesign",
    title: "ONroute Homepage Redesign",
    company: "ITSP",
    oneLiner:
      "UX research and homepage redesign for ONroute's website, built around how travelers actually search for service.",
    role: "Product Design Intern",
    duration: "Internship project",
    season: "2024",
    tags: ["UX Research", "Web", "Information Architecture"],
    featured: true,
    heroAspectRatio: "16/9",
    metrics: [
      { label: "Usability", value: "+27%" },
      { label: "Search time", value: "-50%+" },
    ],
    problem:
      "Travelers struggled to quickly find the service information they needed on ONroute's homepage.",
    process:
      "Led UX research to understand real search behavior, then redesigned the homepage information architecture around it.",
    outcome: "Usability improved by 27% and service search times dropped by more than 50%.",
  },
  {
    slug: "kensington-tours-database",
    title: "Kensington Tours Customer Database",
    company: "ITSP",
    oneLiner:
      "Redesigned Kensington Tours' internal customer database with role-based views for faster, clearer access.",
    role: "Product Design Intern",
    duration: "Internship project",
    season: "2024",
    tags: ["Internal Tools", "Systems Design"],
    featured: true,
    heroAspectRatio: "4/3",
    metrics: [
      { label: "Search time", value: "-57%" },
      { label: "Cross-team efficiency", value: "Improved" },
    ],
    problem:
      "A single, undifferentiated database view slowed down teams who each needed different information at a glance.",
    process:
      "Directed the redesign around role-based views, tailoring what each team sees and can act on.",
    outcome: "Search time dropped 57% and cross-team efficiency improved.",
  },
  {
    slug: "panasonic-kds-ui",
    title: "Panasonic Kitchen Display System UI",
    company: "ITSP",
    oneLiner:
      "A configurable UI for Panasonic's Kitchen Display System, built to streamline kitchen workflows under pressure.",
    role: "Product Design Intern",
    duration: "Internship project",
    season: "2024",
    tags: ["UI Design", "Configurable Systems"],
    featured: true,
    heroAspectRatio: "16/9",
    metrics: [{ label: "Order errors", value: "-30%+" }],
    problem:
      "Kitchen staff needed a fast, configurable display that reduced mistakes during high-volume service.",
    process:
      "Delivered a configurable UI and contributed to scalable design systems that cut design-to-dev handoff time by 40%.",
    outcome: "Order errors fell by more than 30%, with workflows streamlined kitchen-wide.",
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
