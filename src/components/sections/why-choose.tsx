"use client";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { WhyChooseIcon } from "@/components/sections/why-choose-icons";
import { whyChooseItems } from "@/data/why";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Why Choose — clean icon grid, not emoji art.
 */
export function WhyChoose() {
  return (
    <PageSection id="why-choose" spacing="sm" containerClassName="space-y-8">
      <SectionHeader
        label={`Why ${SITE.name}`}
        title={`Why Choose ${SITE.name}?`}
        description="The advantages of partnering with a product studio built for results and long-term client success."
      />

      <Stagger className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
        {whyChooseItems.map((item) => (
          <StaggerItem
            key={item.id}
            className="flex flex-col items-center px-4 text-center"
          >
            <WhyChooseIcon id={item.id} />
            <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp className="flex justify-center">
        <SmoothAnchor
          href="/contact"
          className={cn(
            "inline-flex items-center rounded-full bg-neutral-950 px-7 py-3 text-sm font-medium text-white",
            "shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300",
            "hover:-translate-y-0.5 hover:bg-neutral-800",
            "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
          )}
        >
          Reserve Your Slot
        </SmoothAnchor>
      </FadeUp>
    </PageSection>
  );
}
