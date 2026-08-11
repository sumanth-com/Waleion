export type GetStartedStep = {
  id: "vision" | "collaborate" | "build";
  step: string;
  title: string;
  description: string;
  visualLabel: string;
};

export const getStartedSteps: GetStartedStep[] = [
  {
    id: "vision",
    step: "Step 1",
    title: "Share Your Vision",
    description:
      "Tell us about your goals and project requirements—reach out for a focused discovery conversation.",
    visualLabel: "Tell us the Goal",
  },
  {
    id: "collaborate",
    step: "Step 2",
    title: "Collaborate on a Solution",
    description:
      "We work together to define the scope and strategy. You review and approve the plan before we begin.",
    visualLabel: "Shape The Plan, Together",
  },
  {
    id: "build",
    step: "Step 3",
    title: "Watch Your Idea Come to Life",
    description:
      "Our team designs, builds, and ships with regular updates—so you see progress, not surprises.",
    visualLabel: "From idea to product",
  },
];
