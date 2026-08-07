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
  { id: "aurora", name: "Aurora" },
  { id: "northline", name: "Northline" },
  { id: "vertex", name: "Vertex" },
  { id: "lumen", name: "Lumen" },
  { id: "cascade", name: "Cascade" },
  { id: "harbor", name: "Harbor" },
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
