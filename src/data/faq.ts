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
      "Waleion is a remote-first software product studio — designers, engineers, and operators who build custom SaaS, AI products, and business software. We work with startups and enterprises worldwide, with core hours in IST and overlap for US, UK, and EU teams.",
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
      "Yes. We’re remote-first and serve clients worldwide. Hours are Mon–Fri, 9:00 AM–6:00 PM IST, with peak weekend availability on Sat & Sun (high demand). We typically reply within one business day.",
  },
  {
    id: "pricing",
    question: "How do you price custom software?",
    answer:
      "Transparent, scoped pricing — not a salary line, not an agency markup. You see the work, the timeline, and the number before we start. No surprise change-orders for the plan we already agreed.",
  },
];
