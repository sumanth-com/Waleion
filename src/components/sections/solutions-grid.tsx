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
    <div className="relative h-[7.25rem] w-[10.5rem]">
      <PreviewFrame
        src={back}
        alt=""
        className={cn(
          "left-0 top-5 h-[4.9rem] w-[6.4rem] -rotate-[8deg]",
          "origin-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:-translate-y-1.5 group-hover:-rotate-[12deg]"
        )}
      />
      <PreviewFrame
        src={front}
        alt={`${item.title} product interface`}
        className={cn(
          "right-0 top-2 h-[4.9rem] w-[6.4rem] rotate-[8deg]",
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

      <Stagger className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {solutionGridItems.map((item) => (
          <StaggerItem key={item.id}>
            <article className="group flex flex-col items-center text-center">
              <SolutionPreview item={item} />
              <h3 className="mt-2 text-[13px] font-medium tracking-tight text-foreground md:text-sm">
                {item.title}
              </h3>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
