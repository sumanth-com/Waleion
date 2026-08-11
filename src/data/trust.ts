export type ClientLogo = {
  id: string;
  name: string;
  /** Optional path under /public — when omitted, a text mark is shown */
  src?: string;
  href?: string;
};

export type TrustAchievement = {
  id: string;
  title: string;
  description: string;
};

/**
 * Client / partner logos for the Trust section.
 * Add entries here as assets become available.
 */
export const clientLogos: ClientLogo[] = [
  { id: "learnwell", name: "Learnwell" },
  { id: "northline", name: "Northline" },
  { id: "harbor", name: "Harbor" },
  { id: "lumen", name: "Lumen" },
  { id: "cascade", name: "Cascade" },
  { id: "vertex", name: "Vertex" },
  { id: "fieldline", name: "Fieldline" },
  { id: "bookwell", name: "Bookwell" },
  { id: "aurora", name: "Aurora" },
];

export const trustAchievements: TrustAchievement[] = [
  {
    id: "projects",
    title: "30+ Projects Delivered",
    description: "Reliable software across industries.",
  },
  {
    id: "end-to-end",
    title: "End-to-End Development",
    description: "From discovery to long-term support.",
  },
  {
    id: "stack",
    title: "Modern Technology Stack",
    description: "AI, cloud, and scalable architectures.",
  },
  {
    id: "partner",
    title: "Long-Term Partner",
    description: "Improve, maintain, and scale with you.",
  },
];
