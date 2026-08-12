import { SITE } from "@/constants/site";

/** Strip trailing slash except for the origin root. */
export function absoluteUrl(path = "/"): string {
  const base = SITE.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return base;
  return `${base}${normalized.replace(/\/$/, "")}`;
}

export const SCHEMA_IDS = {
  organization: `${absoluteUrl()}/#organization`,
  website: `${absoluteUrl()}/#website`,
  logo: `${absoluteUrl()}/#logo`,
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/**
 * Page-specific titles and descriptions.
 * Titles are absolute (not passed through the layout template).
 */
export const PAGE_SEO = {
  home: {
    title: "Waleion | Software Development & Digital Product Agency in India",
    description:
      "Waleion is a software development and digital product agency in India, combining UI/UX design, full-stack development, web and mobile applications, SaaS, e-commerce and business technology solutions.",
    path: "/",
  },
  about: {
    title: "About Waleion | Digital & Software Product Development Company",
    description:
      "Waleion combines 10+ years of digital business experience with focused software engineering, product design, and full-stack development — a technology partner for businesses in India and internationally.",
    path: "/about",
  },
  contact: {
    title:
      "Start a Project with Waleion | Software & Digital Product Development",
    description:
      "Share a short brief to start a software or digital product project with Waleion. We typically reply within one business day.",
    path: "/contact",
  },
  thankYou: {
    title: "Thank you | Waleion",
    description: "Your message was sent successfully. We will be in touch soon.",
    path: "/contact/thank-you",
    noIndex: true,
  },
  industries: {
    title: "Industries We Serve | Software for Growing Businesses | Waleion",
    description:
      "Waleion builds custom software and digital products for startups, healthcare, finance, education, retail, manufacturing, logistics, and enterprise teams.",
    path: "/industries",
  },
  getStarted: {
    title: "How to Start a Software Project with Waleion",
    description:
      "Three clear steps from the first conversation to a live product — discovery, design and engineering, then launch and support.",
    path: "/get-started",
  },
  insights: {
    title: "Insights | Software Development Guides from Waleion",
    description:
      "Practical writing on custom software, web applications, SaaS, UI/UX, and choosing a development partner in India. New articles are published when they add real value.",
    path: "/insights",
  },
  privacy: {
    title: "Privacy Policy | Waleion",
    description:
      "Read how Waleion collects, uses, retains, and protects personal information submitted through our website and contact forms.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Use | Waleion",
    description:
      "Terms governing use of the Waleion website, inquiries, intellectual property, and limitations of liability.",
    path: "/terms",
  },
} as const satisfies Record<string, PageSeo>;

/** Offerings described in structured data — not separate thin landing pages. */
export const SCHEMA_SERVICES = [
  "Software Development",
  "Website Development",
  "Web Application Development",
  "Mobile Application Development",
  "Full-Stack Development",
  "UI/UX Design",
  "Product Design",
  "SaaS Development",
  "Custom Software Development",
  "E-commerce Development",
  "Enterprise Software Development",
  "API Development and Integration",
  "Automation Solutions",
  "Digital Product Development",
] as const;

export const INSIGHT_TOPICS = [
  {
    title: "How much does custom software development cost in India?",
    summary:
      "What actually drives cost: scope, integrations, team shape, and what “done” means for a first release.",
  },
  {
    title: "How long does it take to build a web application?",
    summary:
      "A realistic timeline from discovery to launch, and what slows teams down.",
  },
  {
    title: "Website vs web application: what does a business need?",
    summary:
      "When a marketing site is enough, and when you need software people log into.",
  },
  {
    title: "How to choose a software development company in India",
    summary:
      "Questions to ask about ownership, communication, and what happens after launch.",
  },
  {
    title: "What should a startup consider before building an MVP?",
    summary:
      "How to pick the smallest product that can be used, learned from, and grown.",
  },
] as const;
