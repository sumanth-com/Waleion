export type SolutionCategory = {
  id: string;
  title: string;
  description: string;
  href: string;
};

/**
 * Product categories for the What We Build section.
 * Framed as business solutions — not a service menu.
 */
export const solutionCategories: SolutionCategory[] = [
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    description:
      "Secure, scalable cloud software tailored to your business and customers.",
    href: "/capabilities#saas-platforms",
  },
  {
    id: "ai-applications",
    title: "AI Applications",
    description:
      "AI-powered products, assistants, automation tools, and custom workflows.",
    href: "/capabilities#ai-applications",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "High-performance sites that generate leads, build trust, and support growth.",
    href: "/capabilities#business-websites",
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software",
    description:
      "Internal systems, dashboards, HRMS, ERP, CRM, and management platforms.",
    href: "/capabilities#enterprise-software",
  },
  {
    id: "marketplace-platforms",
    title: "Marketplace Platforms",
    description:
      "Multi-vendor marketplaces, booking systems, and digital commerce ecosystems.",
    href: "/capabilities#marketplace-platforms",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description:
      "Native and cross-platform apps with seamless, product-grade experiences.",
    href: "/capabilities#mobile-applications",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Automate workflows, approvals, operations, reporting, and customer interactions.",
    href: "/capabilities#business-automation",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Research, wireframes, design systems, and interfaces built around real users.",
    href: "/capabilities#ui-ux-design",
  },
];
