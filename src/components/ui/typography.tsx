import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { HeadingLevel } from "@/types";

const headingClass: Record<HeadingLevel, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

const defaultTag: Record<HeadingLevel, HeadingTag> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

type HeadingProps = {
  level?: HeadingLevel;
  as?: HeadingTag;
  className?: string;
  balance?: boolean;
  children: ReactNode;
};

export function Heading({
  level = "h2",
  as,
  className,
  balance = true,
  children,
}: HeadingProps) {
  const Comp = as ?? defaultTag[level];

  return (
    <Comp
      className={cn(
        headingClass[level],
        "text-foreground",
        balance && "text-balance",
        className
      )}
    >
      {children}
    </Comp>
  );
}

type TextTag = "p" | "span" | "div" | "li";

type TextProps = {
  as?: TextTag;
  size?: "body" | "lg" | "sm" | "xs";
  muted?: boolean;
  className?: string;
  children: ReactNode;
};

const textSizeClass = {
  body: "text-base",
  lg: "text-body-lg",
  sm: "text-sm",
  xs: "text-xs",
} as const;

export function Text({
  as = "p",
  size = "body",
  muted = false,
  className,
  children,
}: TextProps) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        textSizeClass[size],
        "text-pretty leading-[var(--leading-body)]",
        muted ? "text-muted-foreground" : "text-foreground",
        className
      )}
    >
      {children}
    </Comp>
  );
}

type EyebrowProps = {
  className?: string;
  children: ReactNode;
};

export function Eyebrow({ className, children }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
