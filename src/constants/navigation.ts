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
  label: "Book a Call",
  href: "/contact",
};

export const FOOTER_NAV = {
  company: [
    { label: "About", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "Contact", href: "/contact" },
  ],
  work: [
    { label: "Selected work", href: "/work" },
    { label: "Get started", href: "/get-started" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
