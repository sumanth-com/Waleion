import type { ReactNode, SVGProps } from "react";
import { clientLogos } from "@/data/trust";
import { cn } from "@/lib/utils";

function Mark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("size-5 shrink-0", className)}
      {...props}
    />
  );
}

const MARKS: Record<string, () => ReactNode> = {
  learnwell: () => (
    <Mark>
      <path d="M4 19V6.5a1 1 0 0 1 .7-.95L12 3.5l7.3 2.05a1 1 0 0 1 .7.95V19" />
      <path d="M4 19c2.2-1.2 4.4-1.2 8 0s5.8 1.2 8 0" />
      <path d="M12 3.5V19" />
    </Mark>
  ),
  northline: () => (
    <Mark>
      <path d="M12 4v16" />
      <path d="M7 9l5-5 5 5" />
      <path d="M6 20h12" />
    </Mark>
  ),
  harbor: () => (
    <Mark>
      <path d="M4 16c1.6-1.4 3.2-2.1 8-2.1s6.4.7 8 2.1" />
      <path d="M5 19c1.4-1 2.8-1.5 7-1.5s5.6.5 7 1.5" />
      <path d="M12 4v10" />
      <path d="M8 8h8" />
    </Mark>
  ),
  lumen: () => (
    <Mark>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2" />
      <path d="M6.2 6.2l1.6 1.6M16.2 16.2l1.6 1.6M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6" />
    </Mark>
  ),
  cascade: () => (
    <Mark>
      <path d="M12 4c-3 3.2-4.5 5.6-4.5 8.2A4.5 4.5 0 0 0 12 16.7a4.5 4.5 0 0 0 4.5-4.5C16.5 9.6 15 7.2 12 4Z" />
      <path d="M8 18.5h8" />
      <path d="M9.5 20.5h5" />
    </Mark>
  ),
  vertex: () => (
    <Mark>
      <path d="M12 4.5 20 19H4L12 4.5Z" />
    </Mark>
  ),
  fieldline: () => (
    <Mark>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 10h16M4 14h16M10 4v16M14 4v16" />
    </Mark>
  ),
  bookwell: () => (
    <Mark>
      <path d="M7 4.5h8.5a1.5 1.5 0 0 1 1.5 1.5v13l-4.2-2.2L8.6 19.5V6A1.5 1.5 0 0 1 10 4.5H7Z" />
      <path d="M7 4.5v13" />
    </Mark>
  ),
  aurora: () => (
    <Mark>
      <path d="M4 16c2.4-4.5 5-7.2 8-8.5 3 1.3 5.6 4 8 8.5" />
      <path d="M7 19c1.6-2.6 3.2-4 5-4.8 1.8.8 3.4 2.2 5 4.8" />
    </Mark>
  ),
};

function BrandMark({ id, name }: { id: string; name: string }) {
  const Icon = MARKS[id];

  return (
    <span className="inline-flex items-center gap-2.5 text-foreground/45">
      {Icon ? <Icon /> : null}
      <span className="text-[15px] font-medium tracking-[0.04em]">{name}</span>
    </span>
  );
}

function BrandRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {clientLogos.map((logo) => (
        <BrandMark key={logo.id} id={logo.id} name={logo.name} />
      ))}
    </div>
  );
}

/**
 * Clean, muted brand strip — keeps moving on hover.
 */
export function BrandMarquee() {
  return (
    <div className="brand-marquee relative mt-8 pt-2 md:mt-10">
      <div className="brand-marquee-viewport">
        <div className="brand-marquee-track flex w-max items-center">
          <BrandRow />
          <BrandRow hidden />
        </div>
      </div>
    </div>
  );
}
