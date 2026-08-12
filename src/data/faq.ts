export type HomeFaq = {
  id: string;
  question: string;
  answer: string;
};

export const homeFaqs: HomeFaq[] = [
  {
    id: "who",
    question: "Who’s behind Waleion?",
    answer:
      "Waleion is a digital product and software development company. We combine business understanding, digital experience, UI/UX design, and full-stack engineering to build websites, web applications, mobile apps, SaaS, and custom software for startups, SMEs, and enterprises in India and internationally.",
  },
  {
    id: "custom",
    question: "Do you accept custom requirements?",
    answer:
      "Yes. Every product is custom. SaaS platforms, AI workflows, marketplaces, internal tools — no templates. You bring the problem and the market; we shape the first version worth shipping.",
  },
  {
    id: "turnaround",
    question: "What is your turnaround time?",
    answer:
      "Most first releases ship in 6–10 weeks, not quarters. Discovery locks the scope, then you see regular builds. Speed comes from a senior team, not a hiring loop or a long agency bench.",
  },
  {
    id: "support",
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Launch isn’t the end. We stay for iteration, uptime, and the next version — a partnership after the product is live, not a handoff the day it ships.",
  },
  {
    id: "geo",
    question: "Can you work with teams outside India?",
    answer:
      "Yes. We are based around Indian working hours (Mon–Fri, 9:00 AM–6:00 PM IST) and work remotely with businesses across India and internationally. We typically reply within one business day.",
  },
  {
    id: "services",
    question: "What software development services does Waleion provide?",
    answer:
      "Custom software, website and web application development, mobile apps, UI/UX and product design, SaaS, e-commerce, APIs and integrations, automation, and ongoing maintenance. Scope follows the problem — not a fixed package.",
  },
  {
    id: "idea-to-launch",
    question: "Can Waleion build a product from idea to launch?",
    answer:
      "Yes. We take work from the first conversation through design, engineering, testing, and launch, then stay for iteration. You do not need a separate team for each stage.",
  },
  {
    id: "pricing",
    question: "How do you price custom software?",
    answer:
      "Transparent, scoped pricing — not a salary line, not an agency markup. You see the work, the timeline, and the number before we start. No surprise change-orders for the plan we already agreed.",
  },
];
