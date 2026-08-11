export type CompareTone = "yes" | "no" | "mixed";

export type CompareCell = {
  text: string;
  tone: CompareTone;
};

export type CompareRow = {
  id: string;
  label: string;
  studio: CompareCell;
  hiring: CompareCell;
  agency: CompareCell;
};

export const compareColumns = {
  studio: "Waleion",
  hiring: "Hiring in-house",
  agency: "Other agencies",
} as const;

export const compareRows: CompareRow[] = [
  {
    id: "cost",
    label: "Cost",
    studio: { text: "Fair, transparent", tone: "yes" },
    hiring: { text: "Salary, benefits, overhead", tone: "no" },
    agency: { text: "Project markups", tone: "no" },
  },
  {
    id: "expertise",
    label: "Expertise",
    studio: { text: "Senior talent, mixed skills", tone: "yes" },
    hiring: { text: "Varies per hire", tone: "no" },
    agency: { text: "Varies by bench", tone: "no" },
  },
  {
    id: "turnaround",
    label: "Turnaround",
    studio: { text: "Fast, reliable", tone: "yes" },
    hiring: { text: "Weeks of onboarding", tone: "no" },
    agency: { text: "Often slower", tone: "no" },
  },
  {
    id: "flexibility",
    label: "Flexibility",
    studio: { text: "Scale up or down anytime", tone: "yes" },
    hiring: { text: "Contracts and headcount", tone: "no" },
    agency: { text: "Locked to the SOW", tone: "no" },
  },
  {
    id: "design",
    label: "Design",
    studio: { text: "Modern, original", tone: "yes" },
    hiring: { text: "Depends on the team", tone: "no" },
    agency: { text: "House style, reused", tone: "no" },
  },
  {
    id: "focus",
    label: "Client focus",
    studio: { text: "Built around your product", tone: "yes" },
    hiring: { text: "Internal priorities first", tone: "no" },
    agency: { text: "Split across clients", tone: "no" },
  },
  {
    id: "support",
    label: "Support",
    studio: { text: "Partnership after launch", tone: "yes" },
    hiring: { text: "If capacity exists", tone: "mixed" },
    agency: { text: "Usually ends at delivery", tone: "no" },
  },
];
