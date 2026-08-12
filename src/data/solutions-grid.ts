export type SolutionGridItem = {
  id: string;
  title: string;
  images: [string, string];
};

export const solutionGridItems: SolutionGridItem[] = [
  {
    id: "web",
    title: "Web Development",
    images: ["/images/solutions/web-1.jpg", "/images/solutions/web-2.jpg"],
  },
  {
    id: "app",
    title: "App Development",
    images: ["/images/solutions/app-1.jpg", "/images/solutions/app-2.jpg"],
  },
  {
    id: "ai",
    title: "AI Applications",
    images: ["/images/solutions/ai-1.jpg", "/images/solutions/ai-2.jpg"],
  },
  {
    id: "data",
    title: "Data Driven Products",
    images: ["/images/solutions/data-1.jpg", "/images/solutions/data-2.jpg"],
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    images: ["/images/solutions/saas-1.jpg", "/images/solutions/saas-2.jpg"],
  },
  {
    id: "uiux",
    title: "UI/UX",
    images: ["/images/solutions/uiux-1.jpg", "/images/solutions/uiux-2.jpg"],
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    images: [
      "/images/solutions/enterprise-1.jpg",
      "/images/solutions/enterprise-2.jpg",
    ],
  },
  {
    id: "mvp",
    title: "Rapid Prototyping and MVPs",
    images: ["/images/solutions/mvp-1.jpg", "/images/solutions/mvp-2.jpg"],
  },
  {
    id: "automation",
    title: "Automation & Workflows",
    images: [
      "/images/solutions/automation-1.jpg",
      "/images/solutions/automation-2.jpg",
    ],
  },
];
