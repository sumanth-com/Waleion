import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/typography";
import { Reveal } from "@/components/animations/reveal";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Constrain copy width */
  narrow?: boolean;
};

/**
 * Shared section intro: small label · large heading · short paragraph.
 * Required hierarchy for every post-hero homepage section.
 */
export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
  narrow = true,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        align === "left" && "items-start text-left",
        narrow && "max-w-2xl",
        className
      )}
    >
      <Eyebrow>{label}</Eyebrow>
      <h2 className="text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.65rem,3.4vw,2.75rem)] leading-[1.12] text-foreground">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]",
            align === "center" && "max-w-xl",
            align === "left" && "max-w-lg"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
