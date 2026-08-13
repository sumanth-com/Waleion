"use client";

import Image from "next/image";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import {
  solutionGridItems,
  type SolutionGridItem,
} from "@/data/solutions-grid";
import { cn } from "@/lib/utils";

function PreviewFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
        "dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="160px"
        className="object-cover object-top"
      />
    </div>
  );
}

function SolutionPreview({ item }: { item: SolutionGridItem }) {
  const [back, front] = item.images;

  return (
    <div className="relative h-[5.6rem] w-[8.15rem] sm:h-[7.25rem] sm:w-[10.5rem]">
      <PreviewFrame
        src={back}
        alt=""
        className={cn(
          "left-0 top-4 h-[3.75rem] w-[4.9rem] -rotate-[8deg] sm:top-5 sm:h-[4.9rem] sm:w-[6.4rem]",
          "origin-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:-translate-y-1.5 group-hover:-rotate-[12deg]"
        )}
      />
      <PreviewFrame
        src={front}
        alt={`${item.title} product interface`}
        className={cn(
          "right-0 top-1.5 h-[3.75rem] w-[4.9rem] rotate-[8deg] sm:top-2 sm:h-[4.9rem] sm:w-[6.4rem]",
          "origin-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:-translate-y-2 group-hover:rotate-[12deg]"
        )}
      />
    </div>
  );
}

/**
 * Solutions grid — two product images per item from kept assets.
 */
export function SolutionsGrid() {
  return (
    <PageSection id="expertise" spacing="sm" containerClassName="space-y-8">
      <SectionHeader
        label="Our Expertise"
        title="Solutions Tailored for Your Growth"
        description="Full-service software for startups and enterprises—custom SaaS, AI products, and business platforms built for reliability, scalability, and lasting results."
        className="max-w-3xl"
      />

      <Stagger className="mx-auto grid max-w-4xl grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-8 sm:gap-y-7 lg:grid-cols-3">
        {solutionGridItems.map((item, index) => {
          const isLastOnTwoCol =
            index === solutionGridItems.length - 1 &&
            solutionGridItems.length % 2 === 1;

          return (
            <StaggerItem
              key={item.id}
              className={cn(
                isLastOnTwoCol && "col-span-2 flex justify-center lg:col-span-1"
              )}
            >
              <article className="group flex flex-col items-center text-center">
                <SolutionPreview item={item} />
                <h3 className="mt-1.5 max-w-[9.5rem] text-balance text-[12px] font-medium leading-snug tracking-tight text-foreground sm:mt-2 sm:max-w-none sm:text-[13px] md:text-sm">
                  {item.title}
                </h3>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </PageSection>
  );
}
