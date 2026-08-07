/**
 * Static content and structured data for pages.
 * Keep CMS-ready shapes even while content is local.
 */

export const studioPrinciples = [
  {
    id: "product-first",
    title: "Product-first engineering",
    description:
      "We ship software as products — clear systems, durable architecture, and measurable outcomes.",
  },
  {
    id: "calm-craft",
    title: "Calm craft",
    description:
      "Interfaces stay quiet. Complexity lives in the system, not the surface.",
  },
  {
    id: "continuous",
    title: "Continuous delivery",
    description:
      "From discovery to production, we keep momentum without sacrificing quality.",
  },
] as const;

export type StudioPrinciple = (typeof studioPrinciples)[number];

export { clientLogos, trustAchievements } from "./trust";
export type { ClientLogo, TrustAchievement } from "./trust";
export { solutionCategories } from "./solutions";
export type { SolutionCategory } from "./solutions";
export {
  solutionDetails,
  whoWeHelp,
  whyChooseSolutions,
  techStackGroups,
  solutionsFaqs,
  solutionsPageCopy,
} from "./solutions-page";
export type {
  SolutionDetail,
  AudienceItem,
  WhyChooseItem,
  TechStackGroup,
  FaqItem,
} from "./solutions-page";
export { featuredProjects, caseStudies, getCaseStudy } from "./work";
export type { FeaturedProject, CaseStudy } from "./work";
export {
  workCategories,
  workImpactItems,
  workCapabilities,
  workPrinciples,
  workPageCopy,
} from "./work";
export {
  industryDetails,
  industryBenefits,
  crossIndustryExpertise,
  industryStories,
  industryFaqs,
  industriesPageCopy,
} from "./industries-page";
export type {
  IndustryDetail,
  IndustryBenefit,
  IndustryFaq,
  IndustryStory,
} from "./industries-page";
export {
  aboutWhoWeAre,
  aboutMission,
  aboutVision,
  aboutBeliefs,
  aboutValues,
  aboutHowWeWork,
  aboutTeam,
  aboutCulture,
  aboutTrustPoints,
  aboutStats,
  aboutPageCopy,
} from "./about-page";
export { whyPrinciples, whyComparison } from "./why";
export type { WhyPrinciple, ComparisonRow } from "./why";
export { processPhases, processHighlights } from "./process";
export type { ProcessPhase, ProcessHighlight } from "./process";
export { testimonials } from "./testimonials";
export type { Testimonial } from "./testimonials";
export { finalCtaSteps } from "./final-cta";
export type { NextStep } from "./final-cta";
