export type InsightTopic = {
  id: string;
  category: string;
  audience: string;
  title: string;
  summary: string;
  takeaways: readonly [string, string, string];
  readTime: string;
};

/**
 * Decision guides — listed topics only, not published articles.
 */
export const insightTopics: InsightTopic[] = [
  {
    id: "software-cost-india",
    category: "Cost",
    audience: "Founders & SMEs",
    title: "How much does custom software development cost in India?",
    summary:
      "What actually drives cost: scope, integrations, team shape, and what “done” means for a first release.",
    takeaways: [
      "Typical ranges for MVP vs production software",
      "What inflates quotes after kickoff",
      "How to budget without a vague “it depends”",
    ],
    readTime: "6 min",
  },
  {
    id: "web-app-timeline",
    category: "Timeline",
    audience: "Operators",
    title: "How long does it take to build a web application?",
    summary:
      "A realistic timeline from discovery to launch, and what slows teams down.",
    takeaways: [
      "Discovery → build → launch phases",
      "What actually causes delays",
      "A timeline you can plan around",
    ],
    readTime: "5 min",
  },
  {
    id: "website-vs-web-app",
    category: "Product",
    audience: "Business owners",
    title: "Website vs web application: what does a business need?",
    summary:
      "When a marketing site is enough, and when you need software people log into.",
    takeaways: [
      "Clear differences in purpose and cost",
      "Signals you’ve outgrown a brochure site",
      "What to commission first",
    ],
    readTime: "5 min",
  },
  {
    id: "choose-dev-company",
    category: "Hiring",
    audience: "Buyers",
    title: "How to choose a software development company in India",
    summary:
      "Questions to ask about ownership, communication, and what happens after launch.",
    takeaways: [
      "Red flags in proposals and portfolios",
      "Who owns code, data, and access",
      "Support after the first release",
    ],
    readTime: "7 min",
  },
  {
    id: "mvp-before-you-build",
    category: "MVP",
    audience: "Startups",
    title: "What should a startup consider before building an MVP?",
    summary:
      "How to pick the smallest product that can be used, learned from, and grown.",
    takeaways: [
      "What belongs in v1 vs later",
      "How to validate without overbuilding",
      "A scope that can actually ship",
    ],
    readTime: "6 min",
  },
  {
    id: "saas-vs-custom",
    category: "Build vs buy",
    audience: "Operators",
    title: "When should a business build custom software instead of buying SaaS?",
    summary:
      "Where off-the-shelf tools stop fitting, and when a custom system is the cheaper path.",
    takeaways: [
      "True cost of stacked subscriptions",
      "When process is the product",
      "A simple build-vs-buy checklist",
    ],
    readTime: "5 min",
  },
  {
    id: "ai-for-business",
    category: "AI",
    audience: "Founders",
    title: "Where does AI actually help a business — and where is it hype?",
    summary:
      "Practical uses of AI in products and operations, without a science-project that never ships.",
    takeaways: [
      "Use cases that save time or money",
      "Data you need before you start",
      "How to scope an AI feature for v1",
    ],
    readTime: "6 min",
  },
  {
    id: "after-launch",
    category: "Operations",
    audience: "Operators",
    title: "What happens after software launches?",
    summary:
      "Hosting, fixes, small changes, and who owns the product once the first release is live.",
    takeaways: [
      "What “support” should include",
      "How change requests stay sane",
      "A simple operating rhythm after launch",
    ],
    readTime: "5 min",
  },
  {
    id: "internal-tools",
    category: "Internal tools",
    audience: "Teams",
    title: "When should a company replace spreadsheets with an internal tool?",
    summary:
      "Signs that ops have outgrown Google Sheets, and what a first internal system should do.",
    takeaways: [
      "Bottlenecks sheets can’t hide",
      "What to automate first",
      "How to roll out without disrupting the team",
    ],
    readTime: "5 min",
  },
];
