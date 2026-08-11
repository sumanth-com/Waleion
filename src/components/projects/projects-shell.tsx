import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ProjectsShell({
  children,
  className,
  variant = "grid",
}: {
  children: ReactNode;
  className?: string;
  variant?: "grid" | "hero";
}) {
  if (variant === "hero") {
    return (
      <div className={cn("relative isolate min-h-dvh bg-transparent", className)}>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div className={cn("projects-canvas -mt-[var(--header-height)] pt-[var(--header-height)]", className)}>
      {children}
    </div>
  );
}

export function ProjectsContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-10", className)}>
      {children}
    </div>
  );
}
