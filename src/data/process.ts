export type ProcessPhase = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type ProcessHighlight = {
  id: string;
  title: string;
  description: string;
};

export const processPhases: ProcessPhase[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We understand your business, goals, users, and challenges to define the right product strategy.",
  },
  {
    id: "planning",
    step: "02",
    title: "Research & Planning",
    description:
      "We analyze requirements, define scope, and create a clear roadmap for execution.",
  },
  {
    id: "design",
    step: "03",
    title: "UI/UX Design",
    description:
      "We design intuitive experiences and interfaces focused on usability and business goals.",
  },
  {
    id: "development",
    step: "04",
    title: "Development",
    description:
      "Engineers build scalable, secure software with modern technologies and solid practices.",
  },
  {
    id: "launch",
    step: "05",
    title: "Testing & Launch",
    description:
      "Thorough testing before deployment to ensure quality, reliability, and a smooth launch.",
  },
  {
    id: "growth",
    step: "06",
    title: "Growth & Support",
    description:
      "After launch, we keep optimizing, maintaining, and improving as your business evolves.",
  },
];

export const processHighlights: ProcessHighlight[] = [
  {
    id: "communication",
    title: "Transparent Communication",
    description:
      "Regular updates, milestone reviews, and full visibility throughout development.",
  },
  {
    id: "architecture",
    title: "Scalable Architecture",
    description:
      "Built for future growth, maintainability, and long-term performance.",
  },
  {
    id: "partnership",
    title: "Long-Term Partnership",
    description:
      "We stay on after launch—support, enhancements, and continuous improvement.",
  },
];
