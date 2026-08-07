import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ContainerSize } from "@/types";

const sizeClass: Record<ContainerSize, string> = {
  default: "container-site",
  wide: "container-wide",
  narrow: "container-narrow",
  full: "w-full px-[var(--container-padding)]",
};

type ContainerProps = {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "aside";
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
};

export function Container({
  as = "div",
  size = "default",
  className,
  children,
}: ContainerProps) {
  const Comp = as;

  return <Comp className={cn(sizeClass[size], className)}>{children}</Comp>;
}
