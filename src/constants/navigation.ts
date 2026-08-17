export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const MAIN_NAV: NavItem[] = [
  {
    label: "Expertise",
    href: "/expertise",
    description: "Custom SaaS, AI products, and software development services",
  },
  {
    label: "Work",
    href: "/work",
    description: "Selected software projects and case studies",
  },
  {
    label: "About",
    href: "/about",
    description: "About Waleion — our story, experience, and approach",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Contact Waleion to start a project or ask a question",
  },
];

export const CTA_NAV: NavLink = {
  label: "Book a Call",
  href: "/contact",
  description: "Schedule a free discovery call with Waleion",
};

export const FOOTER_NAV = {
  company: [
    { label: "About", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "Contact", href: "/contact" },
  ],
  work: [
    { label: "Selected work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Get started", href: "/get-started" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Data rights", href: "/privacy/data-rights" },
  ],
} as const;
