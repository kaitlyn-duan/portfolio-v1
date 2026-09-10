export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  type: "work" | "founder";
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Digital Extremes",
    role: "Product Designer",
    timeframe: "Jan 2026 to Aug 2026",
    type: "work",
    bullets: [
      "Increased Warframe referral activity by 23% by redesigning the referral program experience and improving reward, progression, and CTA clarity.",
      "Designed and shipped 7+ live webpages across Warframe and Soulframe, from early concepts and wireframes to polished, production-ready interfaces.",
      "Created responsive UI systems, reusable components, and interaction patterns while maintaining consistency with established Warframe and Soulframe visual identities.",
      "Designed a charity campaign webpage that generated 700K+ visits in its first month and was featured to 70K+ live viewers on Warframe's Twitch stream.",
      "Collaborated across 6+ multidisciplinary teams and 40+ contributors, including developers, artists, marketing, community, and product stakeholders.",
    ],
  },
  {
    company: "ITSP",
    role: "Product Designer",
    timeframe: "May 2025 to Aug 2025",
    type: "work",
    bullets: [
      "Led end-to-end UX research and homepage redesign for ONroute's website, increasing usability by 27% and improving task completion for key service flows by 48%.",
      "Restructured product information architecture using data-driven user jobs across a 1.9M+ user dataset, collaborating with the data team and stakeholders.",
      "Designed an internal customer search interface for Kensington Tours, introducing role-based views that reduced search time by 57% and supported faster operational decision-making across teams.",
      "Delivered a configurable UI for Panasonic's Kitchen Display System, streamlining workflows and reducing order errors by 30%+.",
      "Conducted user interviews, moderated testing, and market research to understand pain points and validate design usability, resulting in streamlined client-advisor experiences.",
      "Facilitated design thinking workshop activities to educate stakeholders and brainstorm product vision.",
    ],
  },
  {
    company: "ITSP",
    role: "UI/UX Designer",
    timeframe: "2024",
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
    timeframe: "2020 to 2022",
    type: "founder",
    bullets: [
      "Built and scaled an art account to 100k+ followers through consistent content strategy and audience engagement.",
      "Founded an online business selling custom prints on a self-developed user-focused website, generating ARR of $6,000/month.",
      "Started a Discord community to better understand users and collect feedback.",
      "Applied search query analytics to optimize discoverability, increasing organic search results by 60%.",
      "Used trend analytics to identify growth opportunities, increasing followers by 500%+ to 100k+ in one month.",
    ],
  },
];

export const education = {
  school: "University of Waterloo",
  program: "Statistics Major, Economics Minor",
  timeframe: "2024 to 2029",
  detail:
    "Coursework in statistics and data analysis, focused on user behavior modeling, decision-making, and data-driven design.",
};
