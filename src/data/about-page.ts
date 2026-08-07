import { SITE } from "@/constants/site";

export type BeliefItem = {
  id: string;
  title: string;
};

export type ValueItem = {
  id: string;
  title: string;
  description: string;
};

export type HowWeWorkStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  intro: string;
  expertise: string;
};

export type TrustPoint = {
  id: string;
  title: string;
  description: string;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};

export const aboutWhoWeAre = {
  who: `${SITE.name} is a product engineering company that partners with startups, growing businesses, and enterprises to design and build software that supports real business goals.`,
  believe:
    "We believe technology should reduce friction, clarify operations, and create lasting value—not add complexity for its own sake.",
  workWith:
    "Founders, product teams, operators, and leadership teams who need a partner that understands both software and business outcomes.",
  products:
    "SaaS platforms, AI products, enterprise systems, websites, mobile apps, automation, and internal tools.",
  approach:
    "Every engagement starts with discovery, continues with clear collaboration, and extends into long-term improvement after launch.",
};

export const aboutMission =
  "Build technology that empowers businesses to innovate, scale, and compete with confidence.";

export const aboutVision =
  "To become a trusted global product engineering company known for building software that creates lasting business impact.";

export const aboutBeliefs: BeliefItem[] = [
  { id: "business", title: "Business before technology" },
  { id: "simple", title: "Simple solutions outperform complex ones" },
  { id: "quality", title: "Quality is never optional" },
  { id: "problem", title: "Every product should solve a real problem" },
  { id: "collab", title: "Great software comes from collaboration" },
  { id: "improve", title: "Continuous improvement is part of every project" },
];

export const aboutValues: ValueItem[] = [
  {
    id: "ownership",
    title: "Ownership",
    description:
      "We treat outcomes as our responsibility—not just completed tickets.",
  },
  {
    id: "transparency",
    title: "Transparency",
    description:
      "Clear updates, honest tradeoffs, and no black-box delivery.",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We apply modern approaches when they improve the product—not for novelty.",
  },
  {
    id: "craftsmanship",
    title: "Craftsmanship",
    description:
      "Careful design and engineering details that hold up in production.",
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We recommend what serves the business, even when it means a smaller scope.",
  },
  {
    id: "curiosity",
    title: "Curiosity",
    description:
      "We ask better questions to understand workflows before we build.",
  },
  {
    id: "reliability",
    title: "Reliability",
    description:
      "Consistent delivery, stable systems, and communication you can plan around.",
  },
  {
    id: "long-term",
    title: "Long-Term Thinking",
    description:
      "We design for maintainability, growth, and partnership after launch.",
  },
];

export const aboutHowWeWork: HowWeWorkStep[] = [
  {
    id: "understand",
    step: "01",
    title: "Understand the business",
    description: "Goals, constraints, users, and what success looks like.",
  },
  {
    id: "validate",
    step: "02",
    title: "Validate ideas",
    description: "Pressure-test scope so we build the right thing first.",
  },
  {
    id: "design",
    step: "03",
    title: "Design intuitive experiences",
    description: "Interfaces and flows shaped around real tasks.",
  },
  {
    id: "build",
    step: "04",
    title: "Build scalable software",
    description: "Secure, maintainable systems ready for growth.",
  },
  {
    id: "deliver",
    step: "05",
    title: "Deliver measurable outcomes",
    description: "Ship with clarity on the business value created.",
  },
  {
    id: "support",
    step: "06",
    title: "Support long-term growth",
    description: "Improve, maintain, and evolve after go-live.",
  },
];

export const aboutTeam: TeamMember[] = [
  {
    id: "founder",
    name: "Alex Rivera",
    role: "Founder",
    intro:
      "Leads company vision and client partnerships with a focus on durable product outcomes.",
    expertise: "Product strategy · Client partnerships · Delivery leadership",
  },
  {
    id: "engineering",
    name: "Jordan Lee",
    role: "Engineering",
    intro:
      "Owns architecture and delivery standards across web, backend, and cloud systems.",
    expertise: "Platform architecture · Backend · Cloud infrastructure",
  },
  {
    id: "design",
    name: "Sam Okonkwo",
    role: "Design",
    intro:
      "Shapes product experiences that stay clear under real operational pressure.",
    expertise: "Product design · Design systems · Research",
  },
  {
    id: "product",
    name: "Morgan Ellis",
    role: "Product",
    intro:
      "Connects business goals to roadmaps, scope, and measurable release outcomes.",
    expertise: "Discovery · Roadmapping · Stakeholder alignment",
  },
  {
    id: "ai",
    name: "Riley Chen",
    role: "AI",
    intro:
      "Builds practical AI features that improve workflows without unnecessary complexity.",
    expertise: "Applied AI · Automation · Evaluation",
  },
  {
    id: "operations",
    name: "Casey Brooks",
    role: "Operations",
    intro:
      "Keeps delivery, communication, and client success running with consistency.",
    expertise: "Delivery ops · Quality · Client success",
  },
];

export const aboutCulture = [
  {
    id: "learning",
    title: "Learning",
    description: "We stay current so clients benefit from proven, modern practice.",
  },
  {
    id: "sharing",
    title: "Knowledge sharing",
    description: "Decisions and context are shared so teams move faster together.",
  },
  {
    id: "clean",
    title: "Clean engineering",
    description: "Readable systems that are easier to extend and safer to change.",
  },
  {
    id: "docs",
    title: "Documentation",
    description: "Clear handovers so ownership stays with your business.",
  },
  {
    id: "improve",
    title: "Continuous improvement",
    description: "Every release is a chance to refine quality and outcomes.",
  },
  {
    id: "product",
    title: "Product thinking",
    description: "We optimize for usefulness and adoption, not feature count.",
  },
  {
    id: "success",
    title: "Customer success",
    description: "We measure ourselves by whether the product helps your team.",
  },
];

export const aboutTrustPoints: TrustPoint[] = [
  {
    id: "communication",
    title: "Transparent communication",
    description: "Structured updates and honest conversations throughout delivery.",
  },
  {
    id: "business",
    title: "Business-focused solutions",
    description: "Software shaped around goals, constraints, and real workflows.",
  },
  {
    id: "engineering",
    title: "Scalable engineering",
    description: "Architectures designed for growth, integrations, and change.",
  },
  {
    id: "modern",
    title: "Modern technologies",
    description: "Reliable tools your team can hire for and maintain.",
  },
  {
    id: "delivery",
    title: "Reliable delivery",
    description: "Clear milestones and steady shipping without surprises.",
  },
  {
    id: "support",
    title: "Long-term support",
    description: "Partnership continues after launch with care and improvement.",
  },
];

/** Qualitative / directional stats — no fake vanity precision */
export const aboutStats: StatItem[] = [
  { id: "projects", value: "30+", label: "Projects Delivered" },
  { id: "industries", value: "12+", label: "Industries Served" },
  { id: "countries", value: "Global", label: "Countries Supported" },
  { id: "tech", value: "40+", label: "Technologies Used" },
  { id: "satisfaction", value: "Long-term", label: "Client Partnerships" },
  { id: "experience", value: "50+", label: "Years of Combined Experience" },
];

export const aboutPageCopy = {
  hero: {
    label: `About ${SITE.name}`,
    title: "We're Building More Than Software.\nWe're Building Long-Term Partnerships.",
    description: `${SITE.name} is a software engineering company helping startups, growing businesses, and enterprises transform ideas into scalable digital products. We combine strategy, design, and engineering to create technology that drives measurable business growth.`,
  },
  commitment: {
    lead: "Every product we build reflects our commitment to quality, performance, security, and long-term success.",
    close: "We don't just deliver software. We build technology that businesses can confidently rely on.",
  },
  finalCta: {
    title: "Let's Build Something Meaningful Together.",
    description:
      "Whether you're starting from an idea or scaling an existing platform, we'd love to become your technology partner.",
  },
} as const;
