import Image from "next/image";
import { SITE } from "@/constants/site";
import { BrandMarquee } from "@/components/sections/brand-marks";
import { workShowcase, type WorkShowcaseItem } from "@/data/work-showcase";
import { cn } from "@/lib/utils";

function ShowcaseCard({ item }: { item: WorkShowcaseItem }) {
  return (
    <article
      className={cn(
        "group/card flex w-[min(82vw,21rem)] shrink-0 flex-col rounded-[1.75rem] border border-black/[0.06] bg-white/90 p-3",
        "shadow-[0_8px_30px_rgba(0,0,0,0.05)]",
        "transition-[box-shadow,border-color] duration-300",
        "hover:border-black/10 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
        "dark:border-white/10 dark:bg-white/[0.07] dark:hover:border-white/20"
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-neutral-100 dark:bg-white/5">
        <Image
          src={item.image}
          alt={`${item.name} product screenshot`}
          fill
          sizes="336px"
          className="object-cover"
        />
      </div>

      <div className="relative mt-3 pb-8">
        <p className="rounded-2xl bg-neutral-100/90 px-4 pb-9 pt-3.5 text-[13px] leading-relaxed text-foreground/80 dark:bg-white/[0.08] dark:text-white/80">
          {item.quote}
          <span className="mt-2.5 block text-[12px] text-muted-foreground/55">
            {item.name}
          </span>
        </p>

        <p
          className={cn(
            "absolute right-1.5 bottom-0 max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
            "bg-white text-foreground shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
            "transition-[background-color,color,box-shadow,transform] duration-300",
            "group-hover/card:-translate-y-0.5 group-hover/card:bg-neutral-950 group-hover/card:text-white group-hover/card:shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
            "dark:bg-white/12 dark:text-white/90 dark:group-hover/card:bg-white dark:group-hover/card:text-neutral-950"
          )}
        >
          {item.reply}
          <span className="mt-1 block text-right text-[11px] text-current/45">
            {SITE.name}
          </span>
        </p>
      </div>

      <div className="mt-2 flex items-center gap-2.5 px-1 pb-1">
        <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-black/5 dark:border-white/10">
          <Image
            src={item.avatar}
            alt=""
            fill
            sizes="36px"
            className="object-cover"
          />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-foreground">
            {item.name}
          </p>
          <p className="truncate text-[11px] text-muted-foreground">
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function ShowcaseRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex gap-5 pr-5" aria-hidden={hidden || undefined}>
      {workShowcase.map((item) => (
        <ShowcaseCard key={item.id} item={item} />
      ))}
    </div>
  );
}

/**
 * Continuous left-moving work cards + brand strip under the hero.
 */
export function WorkShowcase() {
  return (
    <div
      role="region"
      aria-label="Recent client work"
      className="work-marquee relative overflow-hidden bg-transparent pb-8 pt-2 md:pb-10 md:pt-4"
    >
      <div className="work-marquee-viewport">
        <div className="work-marquee-track flex w-max">
          <ShowcaseRow />
          <ShowcaseRow hidden />
        </div>
      </div>
      <BrandMarquee />
    </div>
  );
}
