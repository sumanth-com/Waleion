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
  /** Heading element. Keep h2 on the homepage; use h1 when this is the page title. */
  headingAs?: "h1" | "h2";
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
  headingAs = "h2",
}: SectionHeaderProps) {
  const headingClassName =
    "text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.65rem,3.4vw,2.75rem)] leading-[1.12] text-foreground";

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
      {headingAs === "h1" ? (
        <h1 className={headingClassName}>{title}</h1>
      ) : (
        <h2 className={headingClassName}>{title}</h2>
      )}
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
