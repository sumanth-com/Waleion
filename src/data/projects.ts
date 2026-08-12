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
    cover: "/images/projects/protronicscover.png",
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
    cover: "/images/projects/supracover.png",
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
    cover: "/images/projects/zentracover.png",
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
    cover: "/images/projects/harborcover.png",
    screenshot: "/images/projects/ha1.png",
    brand: "#7c3aed",
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
        image: "/images/projects/ha1.png",
      },
      {
        index: "02",
        stage: "Conversion",
        title: "The pitch is the product.",
        copy: "Revenue. Location health. Activity — already on the first marketing screen. Operators don’t imagine Harbor. They see it running.",
        outcome: "The demo starts before the call.",
        image: "/images/projects/ha2.png",
      },
      {
        index: "03",
        stage: "Engagement",
        title: "Every store has a place.",
        copy: "Map. Status. Recent locations. Add one more without losing the rollup. The network stays honest as it grows.",
        outcome: "Scale doesn’t erase the signal.",
        image: "/images/projects/ha3.png",
      },
      {
        index: "04",
        stage: "Retention",
        title: "Help without the ticket maze.",
        copy: "Phone. Email. Live chat. A message that lands with the team. Support sits inside the product — not on another domain.",
        outcome: "Operators stay because help stays close.",
        image: "/images/projects/ha4.png",
      },
    ],
    growth: {
      story:
        "Ops left the inbox. Shared visibility first — then the habits that keep every location on the same page.",
      metricLabel: "Ops cycle time",
      metricValue: "3.2×",
    },
  },
  {
    slug: "emori",
    name: "Emori",
    subtitle: "Landing page",
    category: "Franchise Landing Page · Lab-Grown Diamonds",
    promise:
      "A Shark Tank-backed franchise story, clear numbers, and a path to talk — built to convert serious investors.",
    status: "Shipped",
    cover: "/images/projects/emoricover.png",
    screenshot: "/images/projects/lp1.png",
    brand: "#b8956a",
    whatItIs:
      "A live franchise landing page for EMORI Lab-Grown Diamonds. Investment, stores, proof, and eligibility — one calm surface.",
    whatItsFor:
      "Investors weighing a premium retail franchise who need the deal, the footprint, and a real next step — not a brochure maze.",
    experience: [
      {
        index: "01",
        stage: "Acquisition",
        title: "The deal is on the first screen.",
        copy: "Franchise opportunity. Shark Tank-backed. Guarantee and fee, already visible. The hero doesn’t explain jewelry — it earns the scroll.",
        outcome: "Serious buyers stay. Browsers leave clean.",
        image: "/images/projects/lp1.png",
      },
      {
        index: "02",
        stage: "Conversion",
        title: "Proof before the pitch.",
        copy: "Founder. Equity deal. Named sharks. The trust stack sits where doubt usually lives — so the ask doesn’t have to shout.",
        outcome: "Credibility does the heavy lift.",
        image: "/images/projects/lp2.png",
      },
      {
        index: "03",
        stage: "Engagement",
        title: "Stores you can picture.",
        copy: "Gurugram. Noida. Dwarka. Real interiors, real sizes. The next city feels like a continuation — not a leap of faith.",
        outcome: "Presence turns abstract into place.",
        image: "/images/projects/lp3.png",
      },
      {
        index: "04",
        stage: "Differentiation",
        title: "Numbers without fog.",
        copy: "2.3 Cr breakdown. 15% guarantee or revenue share. CapEx, deposit, fee — lined up so the math can be argued with, not guessed at.",
        outcome: "The conversation starts with a model, not a rumor.",
        image: "/images/projects/lp4.png",
      },
      {
        index: "05",
        stage: "Retention",
        title: "Eligibility, one form.",
        copy: "Name, city, budget, preference. WhatsApp and email sitting next to it. The close is a product conversation — not another brochure download.",
        outcome: "Interest becomes a lead the same session.",
        image: "/images/projects/lp5.png",
      },
    ],
    growth: {
      story:
        "Hero. Proof. Stores. Numbers. Ask. The page does the sales call before the call — and qualified leads keep coming through.",
      metricLabel: "Qualified leads",
      metricValue: "3.8×",
    },
  },
];

export function getShippedProject(slug: string) {
  return shippedProjects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = shippedProjects.findIndex((project) => project.slug === slug);
  const len = shippedProjects.length;
  const prev = shippedProjects[(index - 1 + len) % len];
  const next = shippedProjects[(index + 1) % len];
  const more = shippedProjects[(index + 2) % len];
  return { prev, next, more };
}
