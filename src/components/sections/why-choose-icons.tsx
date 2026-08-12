import type { LucideIcon } from "lucide-react";
import {
  CircleDollarSign,
  Lightbulb,
  Rocket,
  Target,
  UserCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { WhyChooseIconId } from "@/data/why";

const icons: Record<WhyChooseIconId, LucideIcon> = {
  impact: Target,
  delivery: Rocket,
  pricing: CircleDollarSign,
  experts: Lightbulb,
  collaboration: Users,
  talent: UserCheck,
};

export type { WhyChooseIconId };

export function WhyChooseIcon({
  id,
  className,
}: {
  id: WhyChooseIconId;
  className?: string;
}) {
  const Icon = icons[id];

  return (
    <span
      className={cn(
        "grid size-16 place-items-center rounded-full",
        "border border-black/[0.06] bg-white",
        "shadow-[0_6px_18px_rgba(0,0,0,0.04)]",
        "dark:border-white/10 dark:bg-white/[0.07]",
        className
      )}
    >
      <Icon
        className={cn(
          "size-6 text-neutral-950 dark:text-white",
          "why-alive",
          `why-alive-${id}`
        )}
        strokeWidth={1.6}
        absoluteStrokeWidth
        aria-hidden
      />
    </span>
  );
}
