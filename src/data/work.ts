export type CaseStudy = {
  id: string;
  name: string;
  industry: string;
  clientType: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  stack: string[];
  outcome: string;
  duration: string;
  services: string[];
  research: string;
  design: string;
  development: string;
  features: string[];
  results: string[];
  lessons: string[];
  feedback: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };
  href: string;
};

/**
 * Featured work — business case studies, not a portfolio gallery.
 * Qualitative outcomes preferred when exact metrics are unavailable.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "ai-learning-platform",
    name: "AI Learning Platform",
    industry: "EdTech",
    clientType: "Growing education startup",
    category: "AI Applications",
    overview:
      "Adaptive learning product that personalizes coursework for growing education teams.",
    challenge:
      "Instructors spent hours assigning content manually, and learners got a one-size-fits-all path that limited outcomes.",
    solution:
      "Built an AI-assisted platform that recommends lessons, tracks progress, and frees instructors to focus on teaching.",
    stack: ["Next.js", "Python", "PostgreSQL", "OpenAI"],
    outcome: "Faster course delivery and clearer learner progress across cohorts.",
    duration: "16 weeks",
    services: ["AI Development", "UI/UX Design", "SaaS Development"],
    research:
      "Interviewed instructors and learners, mapped assignment workflows, and identified where personalization would reduce the most manual work.",
    design:
      "Designed instructor dashboards and learner paths with clear progress states and simple recommendation explanations.",
    development:
      "Shipped a multi-tenant web app with recommendation pipelines, progress tracking, and role-based access for schools and teams.",
    features: [
      "Personalized lesson recommendations",
      "Instructor assignment and progress views",
      "Cohort-level reporting",
      "Secure multi-tenant access",
    ],
    results: [
      "Reduced manual course assignment work",
      "Clearer learner progress visibility",
      "Faster onboarding for new instructor cohorts",
    ],
    lessons: [
      "Explainability matters—instructors trust AI more when recommendations are transparent.",
      "Start with one high-friction workflow before expanding automation.",
    ],
    feedback: {
      quote:
        "They took time to understand how our instructors actually work. The platform reduced busywork and helped our team focus on teaching again.",
      name: "Priya Nair",
      role: "Head of Product",
      company: "Learnwell",
    },
    href: "/work/ai-learning-platform",
  },
  {
    id: "enterprise-hrms",
    name: "Enterprise HRMS",
    industry: "Human Resources",
    clientType: "Multi-location enterprise",
    category: "Enterprise Platforms",
    overview:
      "Centralized HR system for leave, attendance, payroll handoffs, and employee records.",
    challenge:
      "HR processes lived in spreadsheets and disconnected tools, slowing approvals and making reporting unreliable.",
    solution:
      "Designed and shipped a unified HRMS with role-based workflows, audit trails, and manager dashboards.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcome: "Reduced manual operations and shortened internal approval cycles.",
    duration: "20 weeks",
    services: ["Enterprise Software", "UI/UX Design", "Cloud & DevOps"],
    research:
      "Mapped leave, attendance, and approval paths across HR, managers, and finance stakeholders.",
    design:
      "Built calm, task-focused interfaces for employees and managers with clear status and audit visibility.",
    development:
      "Implemented workflow engines, role-based permissions, payroll export hooks, and cloud deployment with monitoring.",
    features: [
      "Leave and attendance workflows",
      "Manager approval queues",
      "Audit trails and reporting",
      "Payroll handoff exports",
    ],
    results: [
      "Fewer manual handoffs between HR and managers",
      "Shorter approval cycles",
      "Single source of truth for employee records",
    ],
    lessons: [
      "Enterprise adoption depends on matching real approval politics, not just schemas.",
      "Auditability builds trust with HR and leadership.",
    ],
    feedback: {
      quote:
        "We replaced scattered spreadsheets with one HR system. Approvals are clearer and reporting is finally reliable.",
      name: "Marcus Chen",
      role: "Director of People Operations",
      company: "Northline Group",
    },
    href: "/work/enterprise-hrms",
  },
  {
    id: "franchise-management",
    name: "Franchise Management System",
    industry: "Retail Operations",
    clientType: "Franchise network operator",
    category: "Internal Dashboards",
    overview:
      "Operations platform for multi-location franchise owners to run stores from one place.",
    challenge:
      "Franchisees lacked a shared view of inventory, performance, and daily store tasks across locations.",
    solution:
      "Delivered a cloud system for store ops, reporting, and location-level access controls.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    outcome: "Improved operational efficiency across locations with shared visibility.",
    duration: "14 weeks",
    services: ["Custom Web Development", "UI/UX Design", "API Development"],
    research:
      "Studied store-manager routines and franchise HQ reporting needs to define shared vs local controls.",
    design:
      "Designed location switchers, task lists, and HQ rollups that stay simple under daily use.",
    development:
      "Built multi-location data models, permissions, ops dashboards, and lightweight reporting APIs.",
    features: [
      "Multi-location operations console",
      "Inventory and task tracking",
      "Franchise performance rollups",
      "Role-based location access",
    ],
    results: [
      "Shared visibility across franchise locations",
      "More consistent day-to-day store operations",
      "Clearer accountability for location managers",
    ],
    lessons: [
      "Franchise tools fail when HQ and store needs are forced into one rigid view.",
      "Permissions by location are a product feature, not an afterthought.",
    ],
    feedback: {
      quote:
        "The system gave us consistent operations across locations while keeping each store accountable.",
      name: "Elena Rossi",
      role: "COO",
      company: "Harbor Retail",
    },
    href: "/work/franchise-management",
  },
  {
    id: "ecommerce-platform",
    name: "E-Commerce Platform",
    industry: "Retail",
    clientType: "Direct-to-consumer brand",
    category: "E-Commerce",
    overview:
      "Custom storefront and admin suite built for catalog growth and reliable order handling.",
    challenge:
      "Off-the-shelf commerce tools limited catalog flexibility and slowed merchandising changes.",
    solution:
      "Built a tailored commerce platform with product ops, checkout flows, and admin tooling.",
    stack: ["Next.js", "Stripe", "Shopify APIs", "Redis"],
    outcome: "Improved customer experience from browse to purchase with cleaner product ops.",
    duration: "18 weeks",
    services: ["Custom Web Development", "UI/UX Design", "Cloud & DevOps"],
    research:
      "Reviewed merchandising bottlenecks, checkout drop-off points, and admin tooling gaps.",
    design:
      "Designed a conversion-focused storefront and an admin that supports fast catalog updates.",
    development:
      "Implemented catalog services, checkout, payments, and caching for high-traffic product pages.",
    features: [
      "Flexible product catalog",
      "Checkout and payments",
      "Merchandising admin",
      "Order operations views",
    ],
    results: [
      "Faster catalog and campaign updates",
      "Smoother browse-to-purchase experience",
      "Clearer order handling for ops teams",
    ],
    lessons: [
      "Commerce admins need speed as much as storefronts need polish.",
      "Integrate where it helps; custom-build where flexibility matters.",
    ],
    feedback: {
      quote:
        "We finally have a storefront and admin that match how our merchandising team actually works.",
      name: "Ava Thompson",
      role: "Head of Digital",
      company: "Lumen Goods",
    },
    href: "/work/ecommerce-platform",
  },
  {
    id: "healthcare-dashboard",
    name: "Healthcare Dashboard",
    industry: "Healthcare",
    clientType: "Clinic network",
    category: "Internal Dashboards",
    overview:
      "Clinical operations dashboard for care teams to monitor cases and prioritize follow-ups.",
    challenge:
      "Patient and case data were scattered, making it hard to act quickly during busy clinic hours.",
    solution:
      "Created a secure dashboard that consolidates case status, alerts, and team assignments.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcome: "Faster internal workflows and clearer case ownership for care teams.",
    duration: "15 weeks",
    services: ["Enterprise Software", "UI/UX Design", "Security"],
    research:
      "Shadowed care coordinators and mapped case handoffs between clinical and admin staff.",
    design:
      "Prioritized triage views, alerts, and assignment clarity over decorative dashboards.",
    development:
      "Delivered secure case aggregation, role-based access, and alerting with careful audit logging.",
    features: [
      "Case triage board",
      "Assignment and ownership",
      "Priority alerts",
      "Secure access controls",
    ],
    results: [
      "Faster follow-up prioritization",
      "Clearer case ownership",
      "Less time switching between tools",
    ],
    lessons: [
      "In healthcare, clarity and trust beat dense analytics walls.",
      "Security and audit trails must be designed with the workflow.",
    ],
    feedback: {
      quote:
        "Care teams can see what needs attention without hunting through multiple systems.",
      name: "Dr. Samir Patel",
      role: "Clinical Operations Lead",
      company: "Cascade Health",
    },
    href: "/work/healthcare-dashboard",
  },
  {
    id: "analytics-platform",
    name: "Analytics Platform",
    industry: "B2B SaaS",
    clientType: "Series B SaaS company",
    category: "SaaS Products",
    overview:
      "Product analytics workspace that turns product usage into decisions leadership can act on.",
    challenge:
      "Teams relied on fragmented reports that were slow to produce and hard to trust.",
    solution:
      "Shipped a scalable analytics platform with governed metrics, dashboards, and exportable insights.",
    stack: ["Next.js", "ClickHouse", "dbt", "AWS"],
    outcome: "Reliable reporting for product and ops teams on scalable infrastructure.",
    duration: "22 weeks",
    services: ["SaaS Development", "Cloud & DevOps", "API Development"],
    research:
      "Audited existing metric definitions with product, growth, and leadership stakeholders.",
    design:
      "Designed dashboards around governed metrics and decision workflows—not vanity charts.",
    development:
      "Built ingestion pipelines, metric models, dashboarding, and export APIs with cloud autoscaling.",
    features: [
      "Governed metric catalog",
      "Product and leadership dashboards",
      "Exportable insights",
      "Scalable event storage",
    ],
    results: [
      "Shared trusted metrics across teams",
      "Faster reporting cycles",
      "Infrastructure ready for higher event volume",
    ],
    lessons: [
      "Metric governance is a product problem, not only a data problem.",
      "Dashboards only help when they answer recurring decisions.",
    ],
    feedback: {
      quote:
        "Product and leadership now look at the same governed metrics and make decisions with confidence.",
      name: "Jordan Blake",
      role: "VP of Product",
      company: "Vertex Labs",
    },
    href: "/work/analytics-platform",
  },
  {
    id: "field-automation",
    name: "Field Service Automation",
    industry: "Operations",
    clientType: "Regional service company",
    category: "Automation Systems",
    overview:
      "Automation system that coordinates scheduling, technician updates, and customer notifications.",
    challenge:
      "Dispatchers spent hours coordinating jobs manually, creating delays and missed updates for customers.",
    solution:
      "Automated job assignment flows, status sync, and customer notifications across existing tools.",
    stack: ["Node.js", "n8n", "PostgreSQL", "Twilio"],
    outcome: "Reduced manual coordination and improved customer communication reliability.",
    duration: "10 weeks",
    services: ["Business Automation", "API Development", "Mobile Apps"],
    research:
      "Mapped dispatcher, technician, and customer touchpoints to find repeatable automation opportunities.",
    design:
      "Kept technician mobile flows minimal and focused on status accuracy over feature volume.",
    development:
      "Connected scheduling, messaging, and status systems with monitored automation workflows.",
    features: [
      "Automated job assignment rules",
      "Technician status sync",
      "Customer notification flows",
      "Dispatcher exception queue",
    ],
    results: [
      "Less manual dispatch coordination",
      "More reliable customer updates",
      "Clearer exception handling for urgent jobs",
    ],
    lessons: [
      "Automate the happy path first; keep humans in the loop for exceptions.",
      "Status accuracy beats complex optimization early on.",
    ],
    feedback: {
      quote:
        "Dispatchers finally spend time on exceptions instead of rewriting the same updates all day.",
      name: "Noah Kim",
      role: "Operations Director",
      company: "Fieldline Services",
    },
    href: "/work/field-automation",
  },
  {
    id: "founder-mvp",
    name: "Marketplace MVP",
    industry: "Marketplace",
    clientType: "Early-stage founders",
    category: "SaaS Products",
    overview:
      "Two-sided marketplace MVP for service bookings, built to validate demand before heavy investment.",
    challenge:
      "Founders needed a credible product to test supply and demand without overbuilding.",
    solution:
      "Shipped a focused MVP with listings, booking flows, payments, and basic admin tools.",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
    outcome: "Faster product launch with a foundation ready for the next iteration.",
    duration: "8 weeks",
    services: ["MVP Development", "UI/UX Design", "Web Development"],
    research:
      "Prioritized the smallest booking loop that could validate both sides of the marketplace.",
    design:
      "Designed simple supply and demand flows with clear empty states and trust cues.",
    development:
      "Built listings, booking, payments, and admin moderation with deployment ready for pilots.",
    features: [
      "Service listings and search",
      "Booking and payments",
      "Basic admin moderation",
      "Pilot-ready analytics events",
    ],
    results: [
      "Faster path from idea to pilot users",
      "Clear learning loop for marketplace fit",
      "Architecture ready for post-MVP expansion",
    ],
    lessons: [
      "MVPs should prove the transaction loop, not every roadmap idea.",
      "Founders move faster when scope is brutally clear.",
    ],
    feedback: {
      quote:
        "We launched a real booking loop fast enough to learn—without painting ourselves into a corner.",
      name: "Sofia Alvarez",
      role: "Co-founder",
      company: "Bookwell",
    },
    href: "/work/founder-mvp",
  },
];

/** Homepage and listing cards use this alias */
export const featuredProjects = caseStudies;

export function getCaseStudy(id: string) {
  return caseStudies.find((project) => project.id === id);
}

export const workCategories = [
  "SaaS Products",
  "AI Applications",
  "Enterprise Platforms",
  "Business Websites",
  "Mobile Apps",
  "Automation Systems",
  "Internal Dashboards",
  "E-Commerce",
] as const;

export const workImpactItems = [
  {
    id: "efficiency",
    title: "Improved operational efficiency",
    description: "Teams spend less time on fragmented tools and manual coordination.",
  },
  {
    id: "manual",
    title: "Reduced manual work",
    description: "Repeatable workflows move into software with clear ownership.",
  },
  {
    id: "launch",
    title: "Faster product launch",
    description: "Focused scopes get credible products in front of users sooner.",
  },
  {
    id: "legacy",
    title: "Modernized legacy systems",
    description: "Older platforms become maintainable without reckless rewrites.",
  },
  {
    id: "experience",
    title: "Improved customer experience",
    description: "Clearer journeys from first visit to completed task or purchase.",
  },
  {
    id: "scale",
    title: "Built scalable architecture",
    description: "Foundations that support growth, integrations, and ongoing change.",
  },
] as const;

export const workCapabilities = [
  "UI/UX Design",
  "Frontend Engineering",
  "Backend Engineering",
  "Cloud Infrastructure",
  "Artificial Intelligence",
  "Automation",
  "API Development",
  "Performance Optimization",
  "Security",
  "Deployment",
] as const;

export const workPrinciples = [
  {
    id: "business-first",
    title: "Business-first thinking",
    description: "Start with outcomes and constraints, then choose the build path.",
  },
  {
    id: "scale",
    title: "Scalable architecture",
    description: "Design for change, growth, and maintainability from the first release.",
  },
  {
    id: "engineering",
    title: "Modern engineering",
    description: "Reliable practices and technologies teams can hire for and sustain.",
  },
  {
    id: "communication",
    title: "Transparent communication",
    description: "Visible progress, honest tradeoffs, and shared decision-making.",
  },
  {
    id: "partnership",
    title: "Long-term partnership",
    description: "Support continues after launch with improvements and accountability.",
  },
  {
    id: "qa",
    title: "Quality assurance",
    description: "Testing and review baked into delivery—not bolted on at the end.",
  },
  {
    id: "improve",
    title: "Continuous improvement",
    description: "Ship, learn, and refine with a clear roadmap after go-live.",
  },
] as const;

export const workPageCopy = {
  hero: {
    label: "Our Work",
    title: "Building Products That Deliver Business Results.",
    description:
      "Every project is built with a clear objective—solve meaningful problems, create exceptional user experiences, and help businesses grow through technology.",
  },
  cta: {
    title: "Ready to build your success story?",
    description:
      "Whether you're starting with an idea or improving an existing product, we'll help you build software that delivers measurable business value.",
  },
} as const;

export type FeaturedProject = CaseStudy;
