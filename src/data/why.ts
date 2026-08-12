export type WhyChooseItem = {
  id: WhyChooseIconId;
  title: string;
  description: string;
};

export type WhyChooseIconId =
  | "impact"
  | "delivery"
  | "pricing"
  | "experts"
  | "collaboration"
  | "talent";

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "impact",
    title: "Impact-Driven Solutions",
    description:
      "Every product we build is custom-crafted to create real business impact.",
  },
  {
    id: "delivery",
    title: "Fast & Reliable Delivery",
    description: "Get high-quality results in weeks, not months.",
  },
  {
    id: "pricing",
    title: "Transparent & Fair Pricing",
    description: "Honest, customized pricing with no hidden fees or surprises.",
  },
  {
    id: "experts",
    title: "Expert Problem Solvers",
    description:
      "We tackle technical and creative challenges with innovative solutions.",
  },
  {
    id: "collaboration",
    title: "Seamless Collaboration",
    description:
      "Clear communication and feedback at every stage of the project.",
  },
  {
    id: "talent",
    title: "Direct Access to Senior Talent",
    description:
      "Work directly with the people building your product—no layers in between.",
  },
];

export type WhyPrinciple = {
  id: string;
  title: string;
  description: string;
};

export type ComparisonRow = {
  id: string;
  criterion: string;
  waleion: string;
  freelancers: string;
  agencies: string;
};

export const whyPrinciples: WhyPrinciple[] = [
  {
    id: "business-first",
    title: "Business Before Technology",
    description:
      "Every decision starts with your business objectives—not a preferred tech stack.",
  },
  {
    id: "built-for-scale",
    title: "Built for Scale",
    description:
      "Products are designed for growth, so expanding, maintaining, and evolving stays practical.",
  },
  {
    id: "transparent",
    title: "Transparent Collaboration",
    description:
      "Clear communication, structured milestones, and full visibility from start to ship.",
  },
  {
    id: "modern-engineering",
    title: "Modern Engineering",
    description:
      "Reliable technologies, scalable architectures, and practices built to last.",
  },
  {
    id: "long-term",
    title: "Long-Term Partnership",
    description:
      "Work continues after launch—improvement, maintenance, and ongoing support.",
  },
  {
    id: "quality",
    title: "Quality Without Compromise",
    description:
      "From interface to architecture, every detail is crafted for lasting value.",
  },
];

/**
 * Comparison: Waleion as the complete long-term technology partner.
 */
export const whyComparison: ComparisonRow[] = [
  {
    id: "business",
    criterion: "Business Understanding",
    waleion: "Deep, ongoing",
    freelancers: "Limited",
    agencies: "Often surface-level",
  },
  {
    id: "communication",
    criterion: "Communication",
    waleion: "Structured & clear",
    freelancers: "Inconsistent",
    agencies: "Layered / slow",
  },
  {
    id: "scalability",
    criterion: "Scalability",
    waleion: "Designed in",
    freelancers: "Often overlooked",
    agencies: "Varies by team",
  },
  {
    id: "support",
    criterion: "Long-Term Support",
    waleion: "Built into partnership",
    freelancers: "Rare after handoff",
    agencies: "Retainer-dependent",
  },
  {
    id: "quality",
    criterion: "Code Quality",
    waleion: "Product-grade standards",
    freelancers: "Uneven",
    agencies: "Depends on bench",
  },
  {
    id: "docs",
    criterion: "Documentation",
    waleion: "Clear & maintained",
    freelancers: "Often missing",
    agencies: "Inconsistent",
  },
  {
    id: "security",
    criterion: "Security",
    waleion: "By design",
    freelancers: "Ad hoc",
    agencies: "Process-heavy",
  },
  {
    id: "performance",
    criterion: "Performance",
    waleion: "Measured & tuned",
    freelancers: "Secondary",
    agencies: "Checklist-driven",
  },
  {
    id: "maintenance",
    criterion: "Maintenance",
    waleion: "Continuous",
    freelancers: "Usually ends",
    agencies: "Scoped separately",
  },
  {
    id: "ownership",
    criterion: "Project Ownership",
    waleion: "You own everything",
    freelancers: "Unclear risk",
    agencies: "Contract-bound",
  },
];
