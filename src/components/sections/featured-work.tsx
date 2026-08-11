import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { PageSection } from "@/components/layout/page-section";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { WorkSlideshow } from "@/components/projects/work-slideshow";
import { shippedProjects } from "@/data/projects";
import { CTA_NAV } from "@/constants/navigation";

/**
 * Homepage work — clean white project cards.
 */
export function FeaturedWork() {
  return (
    <PageSection id="work" spacing="sm" containerClassName="space-y-8">
      <SectionHeader
        label="Our Works"
        title="Our Work Speaks for Itself"
        description="Still confused about us? These aren’t concept decks — they’re live products. Open a project for the full story."
        className="max-w-3xl"
      />

      <div className="space-y-5">
        <WorkSlideshow projects={shippedProjects} />

        <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <p className="text-[15px] font-medium tracking-tight text-foreground">
            Ship your project next.
          </p>
          <ArrowRight
            className="hidden size-4 text-foreground sm:block"
            aria-hidden
          />
          <SmoothAnchor
            href={CTA_NAV.href}
            className="inline-flex rounded-full bg-neutral-950 px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
          >
            Contact us
          </SmoothAnchor>
        </div>
      </div>
    </PageSection>
  );
}
