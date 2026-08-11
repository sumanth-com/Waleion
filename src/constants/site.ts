export const SITE = {
  name: "Waleion",
  legalName: "Waleion",
  tagline: "We build software that grows businesses",
  description:
    "Waleion is a software product studio for startups and enterprises. We design and build custom SaaS platforms, AI products, and business software—from idea to launch.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://waleion.com",
  locale: "en_US",
  twitter: "@waleion",
  email: "hello@waleion.com",
  linkedin: "https://www.linkedin.com/company/waleion",
  location: "Remote-first · Serving clients worldwide",
  businessHours: "Mon–Fri, 9:00–18:00 IST",
  responseTime: "We typically reply within 1 business day",
  ogImage: "/og/default.png",
} as const;

export const CAPABILITIES = [
  "SaaS Platforms",
  "AI Products",
  "Enterprise Software",
  "Automation Systems",
  "Marketplaces",
  "Internal Business Tools",
] as const;
