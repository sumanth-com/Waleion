import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import type { ContainerSize } from "@/types";

type SectionProps = {
  as?: "section" | "div" | "article" | "aside";
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: ContainerSize;
  spacing?: "default" | "sm" | "none";
  contain?: boolean;
  children: ReactNode;
};

/**
 * Continuous page section. Prefer soft rhythm over hard visual breaks.
 */
export function Section({
  as = "section",
  id,
  className,
  containerClassName,
  size = "default",
  spacing = "default",
  contain = true,
  children,
}: SectionProps) {
  const Comp = as;
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
    <Comp id={id} className={cn(spacingClass, className)}>
      {content}
    </Comp>
  );
}
