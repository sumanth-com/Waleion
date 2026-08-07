import type { ReactNode } from "react";
import { SectionAtmosphere } from "@/components/sections/hero-atmosphere";
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
  /** Soft hero-like glow + particles (default true). */
  atmosphere?: boolean;
  children: ReactNode;
};

/**
 * Continuous homepage section on the shared hero canvas.
 * Uses whitespace rhythm — no colored band breaks by default.
 */
export function PageSection({
  id,
  className,
  containerClassName,
  size = "wide",
  spacing = "default",
  contain = true,
  atmosphere = true,
  children,
}: PageSectionProps) {
  const spacingClass =
    spacing === "default"
      ? "section-space"
      : spacing === "sm"
        ? "section-space-sm"
        : undefined;

  const content = contain ? (
    <Container
      size={size}
      className={cn("relative z-[1]", containerClassName)}
    >
      {children}
    </Container>
  ) : (
    <div className="relative z-[1]">{children}</div>
  );

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden bg-[var(--hero-bg)]",
        spacingClass,
        className
      )}
    >
      {atmosphere ? <SectionAtmosphere /> : null}
      {content}
    </section>
  );
}
