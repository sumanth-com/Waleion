export type ProjectStage = {
  index: string;
  stage:
    | "Acquisition"
    | "Conversion"
    | "Growth"
    | "Retention"
    | "Engagement"
    | "Differentiation";
  title: string;
  copy: string;
  outcome: string;
  image: string;
};

export type ShippedProject = {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  promise: string;
  status: "Shipped";
  liveUrl?: string;
  cover: string;
  screenshot: string;
  whatItIs: string;
  whatItsFor: string;
  brand: string;
  experience: ProjectStage[];
  growth: {
    story: string;
    metricLabel: string;
    metricValue: string;
  };
};

export const shippedProjects: ShippedProject[] = [
  {
    slug: "protronics",
    name: "Protronics",
    subtitle: "Refurbished electronics",
    category: "Refurbished Electronics E-commerce Platform",
    promise:
      "Certified refurbished electronics. Warranty on. Doorstep next. Feels new — costs like it shouldn’t.",
    status: "Shipped",
    liveUrl: "https://www.protronics.store/",
    cover: "/images/projects/procover.png",
    screenshot: "/images/projects/pro1.png",
    brand: "#e11d2e",
    whatItIs:
      "A live store for certified refurbished appliances. Inspected, warrantied, delivered. You pick it. It shows up.",
    whatItsFor:
      "People who want the real machine — fridge, washer, TV — without paying first-owner money.",
    experience: [
      {
        index: "01",
        stage: "Acquisition",
        title: "It already looks like a yes.",
        copy: "You land on the product, the warranty, and the next tap. Refurbished doesn’t feel second. It feels chosen.",
        outcome: "You start browsing before you start doubting.",
        image: "/images/projects/pro1.png",
      },
      {
        index: "02",
        stage: "Conversion",
        title: "New vs refurbished. Side by side.",
        copy: "Price. Checks. Warranty. Delivery. The cheaper path is the smarter one, and it’s sitting right there.",
        outcome: "Hesitation runs out of room.",
        image: "/images/projects/pro2.png",
      },
      {
        index: "03",
        stage: "Growth",
        title: "Ask. Get a human.",
        copy: "Location, hours, one inquiry. Bengaluru buyers don’t fill a form into the void — someone picks it up.",
        outcome: "Interest becomes a conversation the same day.",
        image: "/images/projects/pro3.png",
      },
    ],
    growth: {
      story:
        "Trust is on the first screen. The comparison is honest. The ask is short. Buyers move — and the store is growing with them.",
      metricLabel: "Conversion rate",
      metricValue: "400%",
    },
  },
  {
    slug: "suprabase",
    name: "Suprabase",
    subtitle: "AI learning platform",
    category: "Full Stack & AI Engineering Learning Platform",
    promise:
      "Become the developer companies actually hire. Real projects. An AI mentor. Proof they can open.",
    status: "Shipped",
    liveUrl: "https://www.suprabase.in/",
    cover: "/images/projects/sucover.png",
    screenshot: "/images/projects/su1.png",
    brand: "#e24a3b",
    whatItIs:
      "A live school for Full Stack, AI, system design, and DevOps. One profile. One mentor in the module. A credential a hiring manager can verify.",
    whatItsFor:
      "Developers done collecting unfinished courses — and ready to show work that survives a screen.",
    experience: [
      {
        index: "01",
        stage: "Acquisition",
        title: "The job is the first line.",
        copy: "You don’t open a syllabus. You open the hire. Then the path: projects, an AI mentor, a seat you can reserve tonight.",
        outcome: "The right people stay. Everyone else is gone in a scroll.",
        image: "/images/projects/su1.png",
      },
      {
        index: "02",
        stage: "Conversion",
        title: "Bootcamp math, without the theater.",
        copy: "Price. Mentorship. Projects. Proof. Lined up against the usual path until the smarter one is the only one left.",
        outcome: "You enroll because the comparison already did the work.",
        image: "/images/projects/su2.png",
      },
      {
        index: "03",
        stage: "Engagement",
        title: "Stuck? Stay in the module.",
        copy: "The AI mentor is already in the lesson — the bug, the architecture, the next decision. No tab. No wait. No reset.",
        outcome: "You keep shipping instead of starting over.",
        image: "/images/projects/su3.png",
      },
      {
        index: "04",
        stage: "Differentiation",
        title: "A credential you can send.",
        copy: "It only issues after a timed skill test. Public ID. Anyone can check it. Not a PDF of attendance — a signal.",
        outcome: "You walk into the screen with proof, not a story.",
        image: "/images/projects/su4.png",
      },
    ],
    growth: {
      story:
        "Learn. Ship. Get unstuck. Certify. That’s the loop 700+ developers are still in.",
      metricLabel: "Learner retention",
      metricValue: "240%",
    },
  },
  {
    slug: "zentra",
    name: "Zentra",
    subtitle: "Personal finance",
    category: "Personal Finance Operating System",
    promise:
      "Your money, in one quiet view. Balances, spend, the next move — already on screen.",
    status: "Shipped",
    cover: "/images/projects/zencover.png",
    screenshot: "/images/projects/zen1.png",
    brand: "#3b82f6",
    whatItIs:
      "A live finance surface. Net worth first. Spend underneath. The next decision sitting in the same place you already are.",
    whatItsFor:
      "People tired of apps that report and spreadsheets that never decide.",
    experience: [
      {
        index: "01",
        stage: "Acquisition",
        title: "The number that earns the next minute.",
        copy: "Net worth. Trajectory. Honest, on arrival. If the picture is true, you stay. If it isn’t, you wouldn’t have anyway.",
        outcome: "You trust the product before you give it more.",
        image: "/images/projects/zen1.png",
      },
      {
        index: "02",
        stage: "Conversion",
        title: "A habit, caught early.",
        copy: "Filters, spend, the next action — one surface. You see the pattern before it becomes a problem.",
        outcome: "You act while it’s still small.",
        image: "/images/projects/zen2.png",
      },
      {
        index: "03",
        stage: "Growth",
        title: "Come back. It’s still true.",
        copy: "Balances, goals, the next move — still here, still quiet. You return because the picture didn’t start lying.",
        outcome: "Clarity turns into a daily open.",
        image: "/images/projects/zen3.png",
      },
    ],
    growth: {
      story:
        "Less dashboard. More signal. People come back because the next money decision is already on the page.",
      metricLabel: "Weekly return",
      metricValue: "180%",
    },
  },
  {
    slug: "harbor",
    name: "Harbor",
    subtitle: "Franchise operations",
    category: "Multi-Location Franchise Operations Platform",
    promise:
      "Every location. One view. Inventory, tasks, performance — without the spreadsheet fog.",
    status: "Shipped",
    cover: "/images/solutions/saas.png",
    screenshot: "/images/solutions/enterprise.png",
    brand: "#171717",
    whatItIs:
      "The live ops board for a franchise network. Stores run the day. HQ sees the rollup. Permissions stay by location.",
    whatItsFor:
      "Operators running more than one roof who need the same truth in every store — without forcing the same screen.",
    experience: [
      {
        index: "01",
        stage: "Acquisition",
        title: "The network, in one glance.",
        copy: "Locations. Exceptions. What needs a human today. HQ opens Harbor and the pile of files is already gone.",
        outcome: "Leadership sees the system, not the inbox.",
        image: "/images/solutions/saas.png",
      },
      {
        index: "02",
        stage: "Conversion",
        title: "The shift has a list.",
        copy: "Tasks, inventory, status — where the manager already stands. Local control. Shared standards. The day starts on the first screen.",
        outcome: "Nobody hunts for the work. It’s waiting.",
        image: "/images/solutions/enterprise.png",
      },
      {
        index: "03",
        stage: "Retention",
        title: "HQ can see. Stores still run.",
        copy: "Permissions by location. Autonomy downstairs, honesty upstairs. The network stays because nobody got boxed in.",
        outcome: "Consistency without the revolt.",
        image: "/images/solutions/data.png",
      },
    ],
    growth: {
      story:
        "Ops left the inbox. Shared visibility first — then the habits that keep every location on the same page.",
      metricLabel: "Ops cycle time",
      metricValue: "3.2×",
    },
  },
];

export function getShippedProject(slug: string) {
  return shippedProjects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = shippedProjects.findIndex((project) => project.slug === slug);
  const prev = shippedProjects[(index - 1 + shippedProjects.length) % shippedProjects.length];
  const next = shippedProjects[(index + 1) % shippedProjects.length];
  return { prev, next };
}
