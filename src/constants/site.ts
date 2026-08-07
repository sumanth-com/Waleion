export const SITE = {
  name: "Waleion",
  legalName: "Waleion",
  tagline: "Software product studio",
  description:
    "Waleion is a modern software product studio building SaaS platforms, AI products, enterprise software, automation systems, marketplaces, and internal business tools.",
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
