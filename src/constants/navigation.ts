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
    label: "Solutions",
    href: "/capabilities",
    children: [
      {
        label: "AI Development",
        href: "/capabilities#ai-development",
        description: "AI products, assistants, and custom workflows",
      },
      {
        label: "SaaS Development",
        href: "/capabilities#saas-development",
        description: "Secure, scalable cloud platforms",
      },
      {
        label: "Web Development",
        href: "/capabilities#web-development",
        description: "High-performance business websites",
      },
      {
        label: "Mobile Apps",
        href: "/capabilities#mobile-apps",
        description: "Native and cross-platform applications",
      },
      {
        label: "Enterprise Software",
        href: "/capabilities#enterprise-software",
        description: "Internal systems, ERP, CRM, and dashboards",
      },
      {
        label: "UI/UX Design",
        href: "/capabilities#ui-ux-design",
        description: "Research, systems, and product interfaces",
      },
      {
        label: "Automation",
        href: "/capabilities#automation",
        description: "Workflows, approvals, and operations",
      },
      {
        label: "Cloud & DevOps",
        href: "/capabilities#cloud-devops",
        description: "Reliable infrastructure and delivery",
      },
    ],
  },
  {
    label: "Work",
    href: "/work",
    description: "Case studies and selected products",
  },
  {
    label: "About",
    href: "/about",
    description: "Story, team, values, and mission",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Book a project or request a proposal",
  },
];

export const CTA_NAV: NavLink = {
  label: "Book a Discovery Call",
  href: "/contact",
};

export const FOOTER_NAV = {
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  work: [
    { label: "Case studies", href: "/work" },
    { label: "Solutions", href: "/capabilities" },
    { label: "Insights", href: "/insights" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
