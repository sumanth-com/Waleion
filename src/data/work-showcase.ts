export type WorkShowcaseItem = {
  id: string;
  image: string;
  quote: string;
  reply: string;
  name: string;
  role: string;
  avatar: string;
};

/**
 * Homepage hero marquee — short client notes on shipped products.
 */
export const workShowcase: WorkShowcaseItem[] = [
  {
    id: "ai-learning-platform",
    image: "/images/solutions/ai.png",
    quote:
      "Waleion built our AI learning platform with personalized lesson paths and live progress for instructors.",
    reply: "Loved building it with you.",
    name: "Priya Nair",
    role: "Head of Product at Learnwell",
    avatar: "/images/reviews/1.png",
  },
  {
    id: "enterprise-hrms",
    image: "/images/solutions/enterprise.png",
    quote:
      "Waleion replaced scattered HR tools with one system for leave, attendance, and approvals.",
    reply: "A system your ops team can trust.",
    name: "Marcus Chen",
    role: "Director of People Ops, Northline",
    avatar: "/images/reviews/2.png",
  },
  {
    id: "franchise-management",
    image: "/images/solutions/saas.png",
    quote:
      "Waleion built our franchise ops platform so every location runs from one shared view.",
    reply: "Excited to support your impact.",
    name: "Elena Rossi",
    role: "COO of Harbor Retail",
    avatar: "/images/reviews/3.png",
  },
  {
    id: "ecommerce-platform",
    image: "/images/solutions/web.png",
    quote:
      "Waleion built a custom storefront and admin that finally match how our team merchandises.",
    reply: "Proud of this one with you.",
    name: "Ava Thompson",
    role: "Head of Digital, Lumen Goods",
    avatar: "/images/reviews/1.png",
  },
  {
    id: "healthcare-dashboard",
    image: "/images/solutions/data.png",
    quote:
      "Waleion built a clinical dashboard that helps care teams see what needs attention first.",
    reply: "Built for the people who use it daily.",
    name: "Dr. Samir Patel",
    role: "Clinical Operations, Cascade Health",
    avatar: "/images/reviews/2.png",
  },
  {
    id: "analytics-platform",
    image: "/images/solutions/app.png",
    quote:
      "Waleion shipped our analytics workspace so product and leadership share the same metrics.",
    reply: "Clearer decisions, together.",
    name: "Jordan Blake",
    role: "VP of Product at Vertex Labs",
    avatar: "/images/reviews/3.png",
  },
  {
    id: "field-automation",
    image: "/images/solutions/automation.png",
    quote:
      "Waleion automated dispatch, technician updates, and customer notifications for our field teams.",
    reply: "Less busywork. More signal.",
    name: "Noah Kim",
    role: "Operations Director, Fieldline",
    avatar: "/images/reviews/1.png",
  },
  {
    id: "founder-mvp",
    image: "/images/solutions/mvp.png",
    quote:
      "Waleion launched our marketplace MVP with listings, bookings, and payments—fast enough to learn.",
    reply: "A strong foundation to grow from.",
    name: "Sofia Alvarez",
    role: "Co-founder of Bookwell",
    avatar: "/images/reviews/2.png",
  },
];
