import { SITE } from "@/constants/site";

export type SolutionDetail = {
  id: string;
  title: string;
  overview: string;
  problems: string[];
  deliverables: string[];
  technologies: string[];
  industries: string[];
  outcome: string;
};

export type AudienceItem = {
  id: string;
  title: string;
  description: string;
};

export type WhyChooseItem = {
  id: string;
  title: string;
  description: string;
};

export type TechStackGroup = {
  id: string;
  title: string;
  items: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const solutionDetails: SolutionDetail[] = [
  {
    id: "ai-development",
    title: "AI Development",
    overview:
      "Custom AI products, assistants, and workflows that automate work and improve decisions—built around your data and operations.",
    problems: [
      "Manual processes that don't scale with growth",
      "Scattered knowledge locked in tools and teams",
      "Slow decision cycles without reliable insights",
    ],
    deliverables: [
      "AI assistants and internal copilots",
      "Custom model workflows and integrations",
      "Evaluation, monitoring, and handoff documentation",
    ],
    technologies: ["Python", "OpenAI", "LangChain", "Vector DBs", "Next.js"],
    industries: ["SaaS", "Education", "Healthcare", "Operations"],
    outcome:
      "Teams reclaim time, reduce repetitive work, and ship AI features that map to real business goals.",
  },
  {
    id: "saas-development",
    title: "SaaS Product Development",
    overview:
      "Multi-tenant SaaS platforms designed for reliability, billing readiness, and growth from day one.",
    problems: [
      "Products that can't support multiple customers cleanly",
      "Fragile auth, roles, or subscription flows",
      "Architecture that blocks new features and markets",
    ],
    deliverables: [
      "Product architecture and MVP or platform build",
      "Auth, roles, billing hooks, and admin tools",
      "Observability and deployment pipeline",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    industries: ["B2B SaaS", "Fintech", "Marketplaces", "Startups"],
    outcome:
      "A product foundation you can sell, onboard customers onto, and extend without rebuilding.",
  },
  {
    id: "web-development",
    title: "Custom Web Development",
    overview:
      "High-performance websites and web applications that support credibility, lead generation, and core business workflows.",
    problems: [
      "Sites that look fine but don't convert or perform",
      "Content and marketing teams blocked by slow updates",
      "Outdated stacks that are costly to maintain",
    ],
    deliverables: [
      "Marketing sites and product web apps",
      "CMS or content workflows when needed",
      "Performance, SEO foundations, and analytics setup",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Headless CMS"],
    industries: ["Services", "Retail", "Healthcare", "B2B"],
    outcome:
      "A fast, maintainable web presence that supports growth—not another rebuild cycle.",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    overview:
      "Native and cross-platform mobile apps with clear UX, reliable APIs, and release processes your team can sustain.",
    problems: [
      "Customer journeys stuck on web-only experiences",
      "Apps that feel slow or inconsistent across devices",
      "Release and update processes that create risk",
    ],
    deliverables: [
      "iOS and Android apps (native or cross-platform)",
      "Backend APIs and push/notification flows",
      "Store submission support and release docs",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Node.js"],
    industries: ["Consumer", "Healthcare", "Logistics", "Retail"],
    outcome:
      "Mobile products customers can rely on—and teams can ship updates to with confidence.",
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software",
    overview:
      "Internal systems, dashboards, HRMS, ERP, CRM, and operations platforms tailored to how your organization works.",
    problems: [
      "Critical work trapped in spreadsheets and email",
      "Tools that don't match real approval or reporting needs",
      "Poor visibility across teams and locations",
    ],
    deliverables: [
      "Custom internal platforms and admin consoles",
      "Role-based access, audit trails, and integrations",
      "Training materials and handover support",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "SSO"],
    industries: ["Enterprise", "Manufacturing", "HR", "Operations"],
    outcome:
      "Clearer operations, faster internal workflows, and systems your teams actually use.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    overview:
      "Research-led product design—from flows and wireframes to design systems and high-fidelity interfaces.",
    problems: [
      "Interfaces that confuse users or slow adoption",
      "Inconsistent UI across product surfaces",
      "Engineering blocked by incomplete design decisions",
    ],
    deliverables: [
      "User research synthesis and journey maps",
      "Wireframes, prototypes, and UI kits",
      "Design systems ready for implementation",
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Accessibility"],
    industries: ["SaaS", "Healthcare", "Finance", "Consumer"],
    outcome:
      "Clearer product decisions, faster build cycles, and interfaces that support real user tasks.",
  },
  {
    id: "automation",
    title: "Business Automation",
    overview:
      "Automate repetitive workflows, approvals, reporting, and customer interactions across your stack.",
    problems: [
      "Teams spending hours on repeatable tasks",
      "Handoffs that create delays and errors",
      "Disconnected tools without reliable orchestration",
    ],
    deliverables: [
      "Workflow automation and approval systems",
      "Integrations between core business tools",
      "Monitoring and exception handling",
    ],
    technologies: ["n8n", "Node.js", "Zapier", "APIs", "Queues"],
    industries: ["Operations", "Finance", "Support", "Retail"],
    outcome:
      "Fewer manual steps, fewer errors, and operations that keep pace with growth.",
  },
  {
    id: "api-development",
    title: "API Development",
    overview:
      "Secure, well-documented APIs that connect products, partners, and internal systems reliably.",
    problems: [
      "Integrations that break or lack clear contracts",
      "Partner and product teams blocked on data access",
      "Security and rate-limit gaps in existing APIs",
    ],
    deliverables: [
      "REST or GraphQL API design and implementation",
      "Auth, versioning, and documentation",
      "SDKs or integration guides when needed",
    ],
    technologies: ["Node.js", "GraphQL", "OpenAPI", "PostgreSQL", "Redis"],
    industries: ["Platforms", "Fintech", "Marketplaces", "Enterprise"],
    outcome:
      "Stable integrations and a clear contract for internal teams and external partners.",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    overview:
      "Infrastructure, CI/CD, and observability so your product stays reliable as traffic and teams grow.",
    problems: [
      "Fragile deploys and unclear ownership of environments",
      "Outages without useful signals or runbooks",
      "Cloud spend without matching reliability",
    ],
    deliverables: [
      "Cloud architecture and environment setup",
      "CI/CD pipelines and infrastructure as code",
      "Monitoring, alerting, and operational docs",
    ],
    technologies: ["AWS", "GCP", "Docker", "Terraform", "GitHub Actions"],
    industries: ["SaaS", "Enterprise", "Startups", "Data platforms"],
    outcome:
      "Safer releases, clearer operations, and infrastructure that supports the product—not the other way around.",
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    overview:
      "Focused first versions that validate demand quickly without painting you into a corner later.",
    problems: [
      "Ideas stuck in planning without a shippable product",
      "Overbuilt MVPs that delay learning",
      "Technical choices that block the next funding or sales milestone",
    ],
    deliverables: [
      "Scoped MVP roadmap and architecture",
      "Working product ready for users or pilots",
      "Handover plan for iteration after launch",
    ],
    technologies: ["Next.js", "React Native", "PostgreSQL", "Vercel", "AWS"],
    industries: ["Startups", "Founders", "Innovation teams"],
    outcome:
      "A credible first product you can put in front of users, investors, or early customers.",
  },
  {
    id: "product-modernization",
    title: "Product Modernization",
    overview:
      "Upgrade legacy platforms carefully—improving performance, maintainability, and UX without risky big-bang rewrites.",
    problems: [
      "Legacy systems that slow every new feature",
      "Security and compliance gaps in older stacks",
      "Teams afraid to change brittle production software",
    ],
    deliverables: [
      "Modernization assessment and migration plan",
      "Incremental rewrites or strangler patterns",
      "Performance and UX improvements in production",
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "AWS", "PostgreSQL"],
    industries: ["Enterprise", "Finance", "Healthcare", "Retail"],
    outcome:
      "A platform your team can extend again—with less risk and clearer long-term cost.",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    overview:
      "Ongoing improvement, monitoring, and support so your product stays healthy after launch.",
    problems: [
      "Products that stall once the build team moves on",
      "Bugs and debt that accumulate quietly",
      "No clear owner for updates, security, or uptime",
    ],
    deliverables: [
      "Retainer or milestone-based support plans",
      "Monitoring, patching, and release management",
      "Feature enhancements aligned to roadmap",
    ],
    technologies: ["Your stack", "Observability", "CI/CD", "Security updates"],
    industries: ["All industries"],
    outcome:
      "Continuous improvement and a partner who stays accountable after go-live.",
  },
];

export const whoWeHelp: AudienceItem[] = [
  {
    id: "startups",
    title: "Startups",
    description: "Ship an MVP or first platform with a path to scale.",
  },
  {
    id: "small-businesses",
    title: "Small Businesses",
    description: "Modern websites and tools that support day-to-day growth.",
  },
  {
    id: "growing-companies",
    title: "Growing Companies",
    description: "Replace spreadsheets with systems that match how you operate.",
  },
  {
    id: "enterprises",
    title: "Enterprises",
    description: "Secure internal platforms and modernization with clear ownership.",
  },
  {
    id: "agencies",
    title: "Agencies",
    description: "Reliable engineering partners for complex client delivery.",
  },
  {
    id: "founders",
    title: "Founders",
    description: "A product team that understands business milestones, not just tickets.",
  },
  {
    id: "product-teams",
    title: "Product Teams",
    description: "Extend capacity with senior design and engineering support.",
  },
];

export const whyChooseSolutions: WhyChooseItem[] = [
  {
    id: "scale",
    title: "Scalable Architecture",
    description: "Designed for growth, maintenance, and change—not just launch day.",
  },
  {
    id: "strategy",
    title: "Business-Focused Strategy",
    description: "We start with outcomes and constraints, then choose the stack.",
  },
  {
    id: "delivery",
    title: "Fast Delivery",
    description: "Clear scope, structured milestones, and steady shipping cadence.",
  },
  {
    id: "support",
    title: "Long-Term Support",
    description: "Partnership continues after launch with improvements and care.",
  },
  {
    id: "security",
    title: "Security",
    description: "Access control, secure defaults, and practices that hold up in production.",
  },
  {
    id: "modern",
    title: "Modern Technologies",
    description: "Reliable, widely supported tools your team can hire for and maintain.",
  },
  {
    id: "communication",
    title: "Transparent Communication",
    description: "Visible progress, honest tradeoffs, and no black-box delivery.",
  },
];

export const techStackGroups: TechStackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Python", "Go", "GraphQL", "REST"],
  },
  {
    id: "mobile",
    title: "Mobile",
    items: ["React Native", "Swift", "Kotlin"],
  },
  {
    id: "cloud",
    title: "Cloud",
    items: ["AWS", "GCP", "Vercel", "Azure"],
  },
  {
    id: "database",
    title: "Database",
    items: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse"],
  },
  {
    id: "devops",
    title: "DevOps",
    items: ["Docker", "Terraform", "GitHub Actions", "Kubernetes"],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    items: ["OpenAI", "LangChain", "Vector databases", "Custom pipelines"],
  },
  {
    id: "automation",
    title: "Automation",
    items: ["n8n", "Workflow engines", "Queues", "Webhooks"],
  },
];

export const solutionsFaqs: FaqItem[] = [
  {
    id: "start",
    question: "How do we start a project with you?",
    answer:
      "We begin with a discovery call to understand goals, constraints, and timeline. From there we propose scope, approach, and next steps—before any build commitment.",
  },
  {
    id: "timeline",
    question: "How long does a typical engagement take?",
    answer:
      "It depends on scope. Focused MVPs often ship in weeks; larger platforms are planned in milestones. We share a clear roadmap before work begins.",
  },
  {
    id: "ownership",
    question: "Who owns the code and IP?",
    answer: `You do. ${SITE.name} delivers work under terms that leave product ownership with your business, including source code and documentation.`,
  },
  {
    id: "team",
    question: "Will we work with a dedicated team?",
    answer:
      "Yes. You'll have clear points of contact across product, design, and engineering, with structured updates throughout the engagement.",
  },
  {
    id: "existing",
    question: "Can you work with our existing product or codebase?",
    answer:
      "Absolutely. We regularly modernize, extend, and stabilize existing systems—after an assessment of architecture, risk, and priorities.",
  },
  {
    id: "support",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, monitoring, and feature work so the product keeps improving after go-live.",
  },
];

export const solutionsPageCopy = {
  hero: {
    label: "Solutions",
    title: "Software Solutions Built Around Your Business Goals.",
    description: `Whether you're launching a startup, modernizing an existing platform, or building enterprise software, ${SITE.name} delivers custom digital solutions designed for long-term growth.`,
  },
  finalCta: {
    title: "Have a project in mind?",
    description:
      "Let's build software that creates real business value.",
  },
} as const;
