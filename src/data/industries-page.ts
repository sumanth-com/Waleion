import { SITE } from "@/constants/site";

export type IndustryDetail = {
  id: string;
  name: string;
  overview: string;
  challenges: string[];
  opportunities: string[];
  solutions: string[];
  outcomes: string[];
  technologies: string[];
};

export type IndustryBenefit = {
  id: string;
  title: string;
  description: string;
};

export type IndustryFaq = {
  id: string;
  question: string;
  answer: string;
};

export type IndustryStory = {
  id: string;
  industry: string;
  project: string;
  challenge: string;
  solution: string;
  outcome: string;
  href: string;
};

export const industryDetails: IndustryDetail[] = [
  {
    id: "startups",
    name: "Startups",
    overview:
      "We help founders move from idea to credible product—scoped tightly, built to learn, and ready for the next stage of growth.",
    challenges: [
      "Limited time and budget to validate demand",
      "Unclear scope that leads to overbuilding",
      "Need for investor- and customer-ready product quality",
    ],
    opportunities: [
      "Launch a focused MVP that proves the core transaction or workflow",
      "Establish product foundations that can scale after product-market fit",
      "Ship faster with a partner that understands startup milestones",
    ],
    solutions: [
      "MVP and early SaaS platforms",
      "Marketplace and booking products",
      "Founder dashboards and admin tools",
      "Launch-ready web and mobile apps",
    ],
    outcomes: [
      "Faster path from idea to real users",
      "Clearer learning loops for product decisions",
      "Architecture that supports post-MVP growth",
    ],
    technologies: ["Next.js", "React Native", "PostgreSQL", "Stripe", "Vercel"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    overview:
      "Secure, usable software for clinics and care teams—built around real workflows, privacy requirements, and operational clarity.",
    challenges: [
      "Manual patient and case workflows",
      "Disconnected clinical and admin systems",
      "Data security and access control requirements",
      "Appointment and follow-up management friction",
    ],
    opportunities: [
      "Unify case status and ownership in one operational view",
      "Improve scheduling and patient communication",
      "Reduce tool-switching during busy clinic hours",
    ],
    solutions: [
      "Healthcare portals",
      "Patient and case management systems",
      "Scheduling platforms",
      "Clinical analytics dashboards",
    ],
    outcomes: [
      "Improved operational efficiency",
      "Better patient and care-team experience",
      "Secure, auditable data management",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "SSO"],
  },
  {
    id: "finance",
    name: "Finance & FinTech",
    overview:
      "Reliable platforms for financial workflows, customer experiences, and internal operations—with security and clarity designed in.",
    challenges: [
      "Complex compliance and audit expectations",
      "Fragile integrations between money-movement systems",
      "Customer experiences that feel slow or unclear",
    ],
    opportunities: [
      "Modernize customer-facing financial products",
      "Strengthen internal controls and reporting",
      "Integrate partners and ledgers through stable APIs",
    ],
    solutions: [
      "Customer portals and onboarding flows",
      "Internal finance operations tools",
      "Reporting and reconciliation dashboards",
      "Secure API platforms",
    ],
    outcomes: [
      "Clearer operational control",
      "Faster, more trustworthy customer journeys",
      "Integrations that hold up in production",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "OpenAPI"],
  },
  {
    id: "education",
    name: "Education",
    overview:
      "Learning products and school operations software that reduce admin load and improve learning experiences.",
    challenges: [
      "One-size-fits-all learning paths",
      "Heavy manual assignment and tracking work",
      "Fragmented tools for instructors and administrators",
    ],
    opportunities: [
      "Personalize learning with practical AI assistance",
      "Give instructors clearer progress visibility",
      "Connect content, cohorts, and outcomes in one product",
    ],
    solutions: [
      "Learning platforms",
      "Instructor and cohort dashboards",
      "AI-assisted course tools",
      "Student progress analytics",
    ],
    outcomes: [
      "Less manual instructional busywork",
      "Clearer learner progress",
      "Products schools and teams can actually operate",
    ],
    technologies: ["Next.js", "Python", "PostgreSQL", "OpenAI"],
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    overview:
      "Commerce and retail operations software that supports merchandising speed, reliable checkout, and multi-location visibility.",
    challenges: [
      "Catalog and merchandising tools that slow teams down",
      "Inconsistent customer journeys across channels",
      "Limited visibility across stores or franchise locations",
    ],
    opportunities: [
      "Tailor storefronts and admin tools to how teams sell",
      "Improve browse-to-purchase experience",
      "Connect inventory, orders, and location performance",
    ],
    solutions: [
      "Custom e-commerce platforms",
      "Merchandising admin suites",
      "Franchise and store operations consoles",
      "Order and inventory workflows",
    ],
    outcomes: [
      "Faster catalog and campaign updates",
      "Improved customer purchase experience",
      "Clearer multi-location operations",
    ],
    technologies: ["Next.js", "Stripe", "Redis", "Shopify APIs"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    overview:
      "Internal systems that bring visibility to production, quality, and operations without forcing awkward off-the-shelf fits.",
    challenges: [
      "Production and quality data trapped in spreadsheets",
      "Slow handoffs between plant, warehouse, and office teams",
      "Limited real-time visibility into operations",
    ],
    opportunities: [
      "Digitize shop-floor and back-office workflows",
      "Improve reporting for leadership and plant managers",
      "Integrate machines, inventory, and ERP systems carefully",
    ],
    solutions: [
      "Operations dashboards",
      "Quality and maintenance workflows",
      "Inventory and production tracking",
      "ERP and system integrations",
    ],
    outcomes: [
      "Better operational visibility",
      "Fewer manual coordination loops",
      "Systems teams can trust on the floor",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "APIs", "Cloud"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    overview:
      "Software for listings, transactions, property operations, and client communication—built around how brokers and operators work.",
    challenges: [
      "Lead and listing workflows spread across tools",
      "Slow client updates and document handoffs",
      "Limited visibility into pipeline and property status",
    ],
    opportunities: [
      "Unify CRM-style workflows with listings and transactions",
      "Improve client portals and communication",
      "Give teams a clearer view of pipeline and inventory",
    ],
    solutions: [
      "Property and listing platforms",
      "Client portals",
      "Transaction and document workflows",
      "Broker and operator dashboards",
    ],
    outcomes: [
      "Faster client communication",
      "Clearer pipeline visibility",
      "Less administrative friction",
    ],
    technologies: ["Next.js", "PostgreSQL", "Cloud storage", "APIs"],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    overview:
      "Operational software that coordinates jobs, status updates, and exceptions across dispatch, field teams, and customers.",
    challenges: [
      "Manual scheduling and dispatch coordination",
      "Unreliable status updates for customers",
      "Exception handling that depends on tribal knowledge",
    ],
    opportunities: [
      "Automate routine assignment and notification flows",
      "Give dispatchers exception queues instead of chaos",
      "Connect field status with customer communication",
    ],
    solutions: [
      "Dispatch and scheduling systems",
      "Field service mobile apps",
      "Customer notification workflows",
      "Operations analytics",
    ],
    outcomes: [
      "Less manual coordination",
      "More reliable customer updates",
      "Clearer handling of urgent exceptions",
    ],
    technologies: ["Node.js", "React Native", "Queues", "Twilio", "PostgreSQL"],
  },
  {
    id: "hospitality",
    name: "Travel & Hospitality",
    overview:
      "Booking, guest, and operations products that keep experiences smooth for customers and staff.",
    challenges: [
      "Fragmented booking and guest communication tools",
      "Staff workflows that don't match real service operations",
      "Seasonal demand that stresses brittle systems",
    ],
    opportunities: [
      "Simplify booking and guest journeys",
      "Give staff clearer operational tools",
      "Build systems that hold up under peak demand",
    ],
    solutions: [
      "Booking platforms",
      "Guest portals and apps",
      "Property operations dashboards",
      "Integrations with payments and channels",
    ],
    outcomes: [
      "Smoother guest experiences",
      "Clearer staff operations",
      "More reliable peak-season performance",
    ],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Cloud"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    overview:
      "Client delivery, proposals, and internal operations software for firms that sell expertise.",
    challenges: [
      "Project delivery tracked across email and spreadsheets",
      "Inconsistent client portals and reporting",
      "Slow onboarding and proposal workflows",
    ],
    opportunities: [
      "Standardize delivery and reporting without bureaucracy",
      "Improve client visibility and trust",
      "Automate repeatable firm operations",
    ],
    solutions: [
      "Client portals",
      "Project and resource tools",
      "Proposal and onboarding workflows",
      "Internal knowledge systems",
    ],
    outcomes: [
      "Clearer client communication",
      "More consistent delivery operations",
      "Less admin load on practitioners",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Automation"],
  },
  {
    id: "enterprise",
    name: "Enterprise Organizations",
    overview:
      "Secure internal platforms and modernization programs that match how large organizations actually operate.",
    challenges: [
      "Legacy systems that slow every new initiative",
      "Fragmented ownership across departments",
      "Security, access, and audit requirements",
    ],
    opportunities: [
      "Modernize incrementally without reckless rewrites",
      "Unify critical workflows with clear permissions",
      "Give leadership trustworthy operational visibility",
    ],
    solutions: [
      "Internal business platforms",
      "HRMS, CRM, and operations systems",
      "Legacy modernization programs",
      "SSO-secured dashboards and APIs",
    ],
    outcomes: [
      "Faster internal workflows",
      "Maintainable platforms teams can extend",
      "Stronger security and ownership clarity",
    ],
    technologies: ["React", "Node.js", "AWS", "SSO", "PostgreSQL"],
  },
  {
    id: "government",
    name: "Government & Public Sector",
    overview:
      "Practical digital services and internal tools designed for clarity, accessibility, and long-term maintainability.",
    challenges: [
      "Paper-heavy or outdated citizen-facing processes",
      "Systems that are hard to maintain or secure",
      "Need for accessible, transparent digital services",
    ],
    opportunities: [
      "Digitize high-friction public service journeys",
      "Improve staff tools for case and request handling",
      "Build maintainable platforms with clear documentation",
    ],
    solutions: [
      "Citizen service portals",
      "Case and request management systems",
      "Internal operations dashboards",
      "Secure document workflows",
    ],
    outcomes: [
      "Faster service delivery",
      "Clearer staff operations",
      "More maintainable public digital systems",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Cloud", "Accessibility"],
  },
];

export const industryBenefits: IndustryBenefit[] = [
  {
    id: "business-first",
    title: "Business-first approach",
    description:
      "We start with industry workflows and outcomes—not a preferred tech stack.",
  },
  {
    id: "scale",
    title: "Scalable architecture",
    description:
      "Systems designed to grow with demand, teams, and changing regulations.",
  },
  {
    id: "secure",
    title: "Secure development",
    description:
      "Access control, secure defaults, and practices suited to sensitive environments.",
  },
  {
    id: "ux",
    title: "Modern user experiences",
    description:
      "Interfaces that match how people actually work in clinics, plants, stores, and offices.",
  },
  {
    id: "support",
    title: "Long-term support",
    description:
      "Partnership continues after launch with improvements, maintenance, and guidance.",
  },
  {
    id: "collaboration",
    title: "Transparent collaboration",
    description:
      "Clear milestones, shared decisions, and visibility throughout delivery.",
  },
];

export const crossIndustryExpertise = [
  "Artificial Intelligence",
  "Automation",
  "Cloud Infrastructure",
  "Data Analytics",
  "Enterprise Integrations",
  "Mobile Applications",
  "Web Platforms",
  "APIs",
] as const;

export const industryStories: IndustryStory[] = [
  {
    id: "healthcare-story",
    industry: "Healthcare",
    project: "Healthcare Dashboard",
    challenge:
      "Case data was scattered, slowing follow-ups during busy clinic hours.",
    solution:
      "A secure dashboard consolidating case status, alerts, and assignments.",
    outcome: "Faster workflows and clearer case ownership for care teams.",
    href: "/work/healthcare-dashboard",
  },
  {
    id: "education-story",
    industry: "Education",
    project: "AI Learning Platform",
    challenge:
      "Instructors spent hours on manual assignments with little personalization.",
    solution:
      "An AI-assisted learning platform with progress tracking and recommendations.",
    outcome: "Faster course delivery and clearer learner progress.",
    href: "/work/ai-learning-platform",
  },
  {
    id: "retail-story",
    industry: "Retail & E-Commerce",
    project: "E-Commerce Platform",
    challenge:
      "Off-the-shelf commerce tools limited catalog flexibility and slowed merchandising.",
    solution:
      "A tailored storefront and admin suite for catalog growth and order handling.",
    outcome: "Improved purchase experience and cleaner product operations.",
    href: "/work/ecommerce-platform",
  },
  {
    id: "enterprise-story",
    industry: "Enterprise Organizations",
    project: "Enterprise HRMS",
    challenge:
      "HR processes lived in spreadsheets, slowing approvals and reporting.",
    solution:
      "A unified HRMS with workflows, audit trails, and manager dashboards.",
    outcome: "Reduced manual operations and shorter approval cycles.",
    href: "/work/enterprise-hrms",
  },
  {
    id: "logistics-story",
    industry: "Logistics & Supply Chain",
    project: "Field Service Automation",
    challenge:
      "Dispatchers coordinated jobs manually, creating delays and missed updates.",
    solution:
      "Automated assignment, status sync, and customer notification flows.",
    outcome: "Less manual coordination and more reliable customer updates.",
    href: "/work/field-automation",
  },
  {
    id: "startup-story",
    industry: "Startups",
    project: "Marketplace MVP",
    challenge:
      "Founders needed a credible booking product to validate demand quickly.",
    solution:
      "A focused MVP with listings, bookings, payments, and basic admin tools.",
    outcome: "Faster launch with a foundation ready for iteration.",
    href: "/work/founder-mvp",
  },
];

export const industryFaqs: IndustryFaq[] = [
  {
    id: "experience",
    question: "Do you have experience in our industry?",
    answer: `We work across startups, healthcare, finance, education, retail, manufacturing, logistics, and enterprise environments. Even when your sector is new to us, we start with discovery so the product matches your real workflows—not generic assumptions.`,
  },
  {
    id: "modernize",
    question: "Can you modernize existing systems?",
    answer:
      "Yes. We assess architecture, risk, and priorities, then modernize incrementally so teams keep operating while the platform improves.",
  },
  {
    id: "integrate",
    question: "Can you integrate with our current software?",
    answer:
      "Yes. We design and build APIs and integrations with ERPs, CRMs, payment providers, messaging tools, and internal systems—with clear contracts and documentation.",
  },
  {
    id: "nda",
    question: "Do you sign NDAs?",
    answer: `Yes. ${SITE.name} regularly works under NDA and handles sensitive product, customer, and operational information with care.`,
  },
  {
    id: "scale",
    question: "Can you scale with our business?",
    answer:
      "That's a core part of how we build. We design for growth, maintainability, and ongoing partnership—so the product can evolve as your organization does.",
  },
];

export const industriesPageCopy = {
  hero: {
    label: "Industries",
    title: "Software Solutions Built for Every Industry.",
    description:
      "Every industry has unique challenges. We combine product thinking, engineering expertise, and modern technologies to build software that solves real business problems across multiple sectors.",
  },
  finalCta: {
    lines: [
      "Every industry evolves.",
      "Your software should evolve with it.",
    ],
    description:
      "Let's build technology that supports your next stage of growth.",
  },
} as const;
