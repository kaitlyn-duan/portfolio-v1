export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  type: "work" | "founder";
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "ITSP",
    role: "Product Design Intern",
    timeframe: "2024",
    type: "work",
    bullets: [
      "Led UX research and homepage redesign for ONroute's new website, boosting usability by 27% and cutting service search times by 50%+.",
      "Directed the redesign of Kensington Tours' customer database, introducing role-based views that reduced search time by 57% and improved cross-team efficiency.",
      "Delivered a configurable UI for Panasonic's Kitchen Display System, streamlining workflows and reducing order errors by 30%+.",
      "Built scalable design systems across projects, reducing design-to-dev handoff time by 40% and enabling future product adaptability.",
      "Championed iterative testing with stakeholders, uncovering workflow gaps early and ensuring high adoption rates post-launch.",
    ],
  },
  {
    company: "ITSP",
    role: "UI/UX Design Intern",
    timeframe: "2023",
    type: "work",
    bullets: [
      "Integrated AI-assisted prototyping and research tools, reducing research synthesis time by 35% and accelerating design iterations.",
      "Collaborated with engineers to embed AI-driven design system validation, cutting rework cycles by 30% and improving accessibility compliance.",
      "Conducted AI-supported user testing and data clustering, uncovering behavioral patterns that increased task completion rates by 20%.",
    ],
  },
  {
    company: "Awowogei Arts",
    role: "Founder",
    timeframe: "Ongoing",
    type: "founder",
    bullets: [
      "Founded an online business selling custom prints on a self-developed user-focused website.",
      "Started a Discord community to better understand users and collect feedback, growing ARR to $6,000/month.",
      "Applied search query analytics to optimize discoverability, increasing organic search results by 60%.",
      "Used trend analytics to identify growth opportunities, increasing followers by 500%+ to 100k+ in one month.",
    ],
  },
];

export const education = {
  school: "University of Waterloo",
  program: "Statistics Major, Economics Minor",
  detail:
    "Coursework in statistics and data analysis, building a strong foundation in user behavior modeling, decision-making, and data-driven design.",
};
