import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import type { ContainerSize } from "@/types";

type PageSectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: ContainerSize;
  /** default = 120–180px rhythm; sm = tighter; none = custom */
  spacing?: "default" | "sm" | "none";
  contain?: boolean;
  /** @deprecated Atmosphere is site-wide — ignored for continuous canvas */
  atmosphere?: boolean;
  children: ReactNode;
};

/**
 * Continuous homepage section — transparent on the shared page canvas.
 * Rhythm via whitespace only; no background bands or borders.
 */
export function PageSection({
  id,
  className,
  containerClassName,
  size = "wide",
  spacing = "default",
  contain = true,
  children,
}: PageSectionProps) {
  const spacingClass =
    spacing === "default"
      ? "section-space"
      : spacing === "sm"
        ? "section-space-sm"
        : undefined;

  const content = contain ? (
    <Container size={size} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(
        "relative bg-transparent",
        id && "scroll-mt-[calc(var(--header-height)+1rem)]",
        spacingClass,
        className
      )}
    >
      {content}
    </section>
  );
}
