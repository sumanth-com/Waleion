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
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
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
