export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  outcome: string;
};

/**
 * Client success stories — outcome-focused, no vanity metrics or hype language.
 */
export const testimonials: Testimonial[] = [
  {
    id: "edtech",
    quote:
      "They took time to understand how our instructors actually work. The platform we shipped reduced busywork and helped our team focus on teaching again.",
    name: "Priya Nair",
    role: "Head of Product",
    company: "Learnwell",
    industry: "EdTech",
    outcome: "Faster course delivery and clearer learner progress.",
  },
  {
    id: "hr",
    quote:
      "We replaced scattered spreadsheets with one HR system. Approvals are clearer, reporting is reliable, and our ops team finally has a single source of truth.",
    name: "Marcus Chen",
    role: "Director of People Operations",
    company: "Northline Group",
    industry: "Human Resources",
    outcome: "Fewer manual handoffs and shorter approval cycles.",
  },
  {
    id: "retail",
    quote:
      "Franchise owners needed shared visibility without complexity. The system gave us consistent operations across locations while keeping each store accountable.",
    name: "Elena Rossi",
    role: "COO",
    company: "Harbor Retail",
    industry: "Retail Operations",
    outcome: "Stronger operational consistency across locations.",
  },
  {
    id: "saas",
    quote:
      "Our analytics used to take days to assemble. Now product and leadership look at the same governed metrics and make decisions with confidence.",
    name: "Jordan Blake",
    role: "VP of Product",
    company: "Vertex Labs",
    industry: "B2B SaaS",
    outcome: "Reliable reporting for product and leadership teams.",
  },
];
