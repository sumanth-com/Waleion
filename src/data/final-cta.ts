export type NextStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export const finalCtaSteps: NextStep[] = [
  {
    id: "idea",
    step: "01",
    title: "Tell us about your idea.",
    description: "Share your business goals, challenges, and vision.",
  },
  {
    id: "strategy",
    step: "02",
    title: "Strategy Session.",
    description:
      "We'll discuss the best approach, timeline, technology, and execution plan.",
  },
  {
    id: "build",
    step: "03",
    title: "Start Building.",
    description:
      "Once everything is aligned, our team begins designing and developing your product.",
  },
];
