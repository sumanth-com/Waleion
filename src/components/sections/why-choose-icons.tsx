import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

const svgClass =
  "h-14 w-14 text-foreground/85 dark:text-white/85 sm:h-16 sm:w-16";

function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn(svgClass, className)}
      aria-hidden
    >
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.6" />
      <ellipse
        cx="32"
        cy="32"
        rx="8"
        ry="20"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 32h40M16.5 22h31M16.5 42h31"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RocketIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn(svgClass, className)}
      aria-hidden
    >
      <path
        d="M32 10c6 8 8 16 8 24 0 4-1.5 7-4 9h-8c-2.5-2-4-5-4-9 0-8 2-16 8-24Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M24 39c-4 1.5-7 5-8 10 5-1 8.5-4 10-8M40 39c4 1.5 7 5 8 10-5-1-8.5-4-10-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 48v4M32 50v5M35 48v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="why-icon-flicker"
      />
    </svg>
  );
}

function PricingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn(svgClass, className)}
      aria-hidden
    >
      <rect
        x="14"
        y="18"
        width="36"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M14 26h36"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="22" cy="22" r="1.4" fill="currentColor" />
      <path
        d="M28 38h4.5c2 0 3.5-1.2 3.5-2.8S34.5 32.4 32.5 32.4H31c-2 0-3.5-1.1-3.5-2.7S29 27 31 27h4.5M32 25.5V41"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpertsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn(svgClass, className)}
      aria-hidden
    >
      <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M18 48c1.5-8 6.5-12 14-12s12.5 4 14 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M44 18l2-4M48 22l4-2M46 26l4 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="why-icon-spark"
      />
    </svg>
  );
}

function CollaborationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn(svgClass, className)}
      aria-hidden
    >
      <path
        d="M14 22a8 8 0 0 1 8-8h10a8 8 0 0 1 8 8v6a8 8 0 0 1-8 8H24l-10 7V22Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M34 30h8a8 8 0 0 1 8 8v6a8 8 0 0 1-8 8h-2l-8 6V38a8 8 0 0 1 8-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TalentIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn(svgClass, className)}
      aria-hidden
    >
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="11" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" />
      <path
        d="M32 10v5M32 49v5M10 32h5M49 32h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = {
  impact: GlobeIcon,
  delivery: RocketIcon,
  pricing: PricingIcon,
  experts: ExpertsIcon,
  collaboration: CollaborationIcon,
  talent: TalentIcon,
} as const;

export type WhyChooseIconId = keyof typeof icons;

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
        "grid size-[4.5rem] place-items-center sm:size-[5rem]",
        "why-icon-float",
        className
      )}
    >
      <Icon />
    </span>
  );
}
