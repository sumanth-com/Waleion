export type SolutionGridItem = {
  id: string;
  title: string;
  images: [string, string];
};

export const solutionGridItems: SolutionGridItem[] = [
  {
    id: "web",
    title: "Web Development",
    images: ["/images/solutions/web.png", "/images/solutions/saas.png"],
  },
  {
    id: "app",
    title: "App Development",
    images: ["/images/solutions/app.png", "/images/solutions/mvp.png"],
  },
  {
    id: "ai",
    title: "AI Applications",
    images: ["/images/solutions/ai.png", "/images/solutions/data.png"],
  },
  {
    id: "data",
    title: "Data Driven Products",
    images: ["/images/solutions/data.png", "/images/solutions/enterprise.png"],
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    images: ["/images/solutions/saas.png", "/images/solutions/web.png"],
  },
  {
    id: "uiux",
    title: "UI/UX",
    images: ["/images/solutions/uiux.png", "/images/solutions/app.png"],
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    images: ["/images/solutions/enterprise.png", "/images/solutions/automation.png"],
  },
  {
    id: "mvp",
    title: "Rapid Prototyping and MVPs",
    images: ["/images/solutions/mvp.png", "/images/solutions/uiux.png"],
  },
  {
    id: "automation",
    title: "Automation & Workflows",
    images: ["/images/solutions/automation.png", "/images/solutions/ai.png"],
  },
];
