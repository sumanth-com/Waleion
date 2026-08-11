export type SolutionCategory = {
  id: string;
  title: string;
  description: string;
  href: string;
};

/**
 * Product categories for the What We Build / Expertise section.
 */
export const solutionCategories: SolutionCategory[] = [
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    description:
      "Secure, scalable cloud software tailored to your business and customers.",
    href: "/work",
  },
  {
    id: "ai-applications",
    title: "AI Applications",
    description:
      "AI-powered products, assistants, automation tools, and custom workflows.",
    href: "/work",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "High-performance sites that generate leads, build trust, and support growth.",
    href: "/work",
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software",
    description:
      "Internal systems, dashboards, HRMS, ERP, CRM, and management platforms.",
    href: "/work",
  },
  {
    id: "marketplace-platforms",
    title: "Marketplace Platforms",
    description:
      "Multi-vendor marketplaces, booking systems, and digital commerce ecosystems.",
    href: "/work",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description:
      "Native and cross-platform apps with seamless, product-grade experiences.",
    href: "/work",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Automate workflows, approvals, operations, reporting, and customer interactions.",
    href: "/work",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Research, wireframes, design systems, and interfaces built around real users.",
    href: "/work",
  },
];
