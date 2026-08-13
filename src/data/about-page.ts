import { SITE } from "@/constants/site";
import { shippedProjects } from "@/data/projects";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  intro: string;
  expertise: string;
  linkedin?: string;
};

export type ExperiencePillar = {
  id: string;
  index: string;
  years: string;
  title: string;
  items: string[];
};

export type CapabilityItem = {
  id: string;
  title: string;
  description: string;
};

export type PrincipleItem = {
  id: string;
  title: string;
  description: string;
};

export type ApproachStep = {
  id: string;
  title: string;
  description: string;
};

export type StatItem = {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

/** Verified from shipped portfolio — update when new work is published. */
export const aboutVerifiedProductCount = shippedProjects.length;

/** Verified industry contexts represented in shipped work. */
export const aboutVerifiedIndustries = [
  "E-commerce",
  "EdTech",
  "FinTech",
  "Franchise Operations",
  "Franchise Marketing",
] as const;

/**
 * Real team members only. Add entries here with verified LinkedIn profiles.
 * Leave empty until profiles are confirmed — the page renders a focused-team message.
 */
export const aboutTeam: TeamMember[] = [];

export const aboutPageCopy = {
  hero: {
    label: "About Waleion",
    titleLines: [
      "Experience in Digital.",
      "Expertise in Technology.",
      "Built for What's Next.",
    ],
    description:
      "Waleion brings together more than a decade of experience in digital business and marketing with hands-on expertise in software engineering, product development, and user experience.",
    supporting:
      "We help businesses turn ideas, challenges, and opportunities into technology that works, scales, and creates lasting value.",
    primaryCta: "Start a Conversation",
    secondaryCta: "Explore Our Work",
  },
  story: {
    label: "Our Story",
    titleLines: [
      "Built Through Experience.",
      "Brought Together With Purpose.",
    ],
    paragraphs: [
      "Waleion was born from years of working across digital businesses, agencies, and technology platforms — learning what makes digital products actually work.",
      "Over time, we saw the gap between business thinking, creative execution, and technology. Great ideas often get lost between them.",
      "So we brought those disciplines together.",
      "Today, Waleion is built by an experienced team that understands the journey from idea to execution — from strategy and experience to design, engineering, and growth.",
      "We believe the best work happens when people build together, learn from each other, and move forward together.",
      "That is what Waleion stands for.",
    ],
  },
  experience: {
    label: "Experience",
    title: "Two Disciplines. One Technology Partner.",
    supporting:
      "Our advantage is not simply knowing technology. It's understanding why the technology needs to exist in the first place.",
  },
  capabilities: {
    label: "Our Capabilities",
    title: "From Business Strategy to Production-Ready Software.",
    description:
      "Waleion works across the complete product lifecycle — from the first business conversation to software your team can depend on after launch.",
  },
  principles: {
    label: "What We Believe",
    title: "Technology Should Serve the Business.",
  },
  team: {
    label: "The People Behind Waleion",
    title: "A Team That Thinks Beyond the Code.",
    description:
      "Great digital products require more than developers. They require people who understand business, users, design, technology, and execution.",
    focusedNote:
      "Waleion is a focused team by design — senior-led, close to the work, and accountable for outcomes. We scale through depth and partnership, not inflated headcount.",
  },
  approach: {
    label: "Our Approach",
    title: "Think. Design. Build. Grow.",
  },
  stats: {
    label: "Waleion by the Numbers",
    title: "Experience you can account for.",
    description:
      "A snapshot of the depth, delivery, and breadth behind Waleion — across digital business, product engineering, and real client work.",
  },
  commitment: {
    title: "Ready to Build What Your Business Needs?",
    description:
      "New product, existing system, or long-term partnership — tell us what you're working on and we'll help you choose the right next step.",
    primaryCta: "Start a Project",
    secondaryCta: "Book a Discovery Call",
  },
} as const;

export const aboutExperiencePillars: ExperiencePillar[] = [
  {
    id: "digital",
    index: "01",
    years: "8+ Years",
    title: "Digital Experience",
    items: [
      "Digital marketing",
      "Brand growth",
      "Customer acquisition",
      "Digital strategy",
      "Online business",
      "Performance marketing",
      "Content & SEO",
      "Analytics & reporting",
    ],
  },
  {
    id: "engineering",
    index: "02",
    years: "5+ Years",
    title: "Software & Product Engineering",
    items: [
      "Full-stack development",
      "UI/UX design",
      "SaaS platforms",
      "AI applications",
      "Business software",
      "Automation",
      "Cloud & APIs",
      "Mobile applications",
    ],
  },
  {
    id: "delivery",
    index: "03",
    years: "End-to-End",
    title: "Unified Product Delivery",
    items: [
      "Strategy to launch",
      "Design + engineering",
      "AI & automation",
      "Growth alignment",
      "Client partnership",
      "Post-launch support",
      "Product discovery",
      "Launch & iteration",
    ],
  },
];

export const aboutCapabilities: CapabilityItem[] = [
  {
    id: "strategy",
    title: "Strategy",
    description:
      "Understanding the business, users, goals, and opportunities before a single line is written.",
  },
  {
    id: "design",
    title: "Product Design",
    description:
      "Creating intuitive experiences and clear product architecture that people actually use.",
  },
  {
    id: "engineering",
    title: "Engineering",
    description:
      "Building reliable, scalable, production-ready software your team can maintain and extend.",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "Using intelligent systems to improve products and business operations where they earn their place.",
  },
  {
    id: "growth",
    title: "Growth",
    description:
      "Connecting technology with acquisition, conversion, engagement, and long-term growth.",
  },
  {
    id: "support",
    title: "Support",
    description:
      "Continuously improving and maintaining products after launch — not disappearing at go-live.",
  },
];

export const aboutPrinciples: PrincipleItem[] = [
  {
    id: "business-first",
    title: "Business First",
    description: "We start with the problem, not the technology.",
  },
  {
    id: "long-term",
    title: "Build for the Long Term",
    description:
      "Products should be maintainable, scalable, and ready to evolve.",
  },
  {
    id: "design",
    title: "Design With Purpose",
    description:
      "Good design should make products easier to understand, use, and grow.",
  },
  {
    id: "ownership",
    title: "Engineering With Ownership",
    description: "We take responsibility for the quality of what we build.",
  },
  {
    id: "partnership",
    title: "Partnership Over Projects",
    description:
      "We aim to build lasting relationships, not simply complete assignments.",
  },
];

export const aboutApproach: ApproachStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    description: "Understand the business and define the real problem.",
  },
  {
    id: "strategy",
    title: "Strategy",
    description: "Turn requirements into a clear product and technical direction.",
  },
  {
    id: "design",
    title: "Design",
    description:
      "Create experiences that are intuitive, useful, and aligned with business goals.",
  },
  {
    id: "build",
    title: "Build",
    description: "Engineer reliable and scalable software.",
  },
  {
    id: "launch",
    title: "Launch",
    description: "Deploy, test, measure, and refine.",
  },
  {
    id: "grow",
    title: "Grow",
    description: "Continue improving the product as the business evolves.",
  },
];

/** Directional metrics for the about page stats section. */
export function getAboutStats(): StatItem[] {
  return [
    {
      id: "digital-years",
      value: 8,
      suffix: "+",
      label: "Years of Digital Experience",
    },
    {
      id: "software-years",
      value: 5,
      suffix: "+",
      label: "Years of Software Engineering",
    },
    {
      id: "products",
      value: 30,
      suffix: "+",
      label: "Products Delivered",
    },
    {
      id: "industries",
      value: 15,
      suffix: "+",
      label: "Industries Served",
    },
  ];
}

export const aboutMetadataDescription = `${SITE.name} combines 8+ years of digital business experience with hands-on software engineering, product design, and AI — a technology partner built on understanding growth and building what powers it.`;
