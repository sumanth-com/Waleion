import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { trustAchievements } from "@/data/trust";

/**
 * Trust & Credibility — lives on About.
 */
export function Trust() {
  return (
    <PageSection
      id="trusted-by"
      spacing="sm"
      containerClassName="flex flex-col items-center"
    >
      <SectionHeader
        label="Trusted by Businesses Worldwide"
        title={
          <>
            Trusted by Startups,
            <br className="hidden sm:block" /> Growing Businesses & Enterprises.
          </>
        }
        description="We partner with ambitious companies to build AI solutions, SaaS platforms, websites, and enterprise software that solve real problems—and support long-term growth."
        className="max-w-3xl"
      />

      <Stagger className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {trustAchievements.map((item) => (
          <StaggerItem key={item.id} className="text-center">
            <h3 className="text-sm font-medium tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp className="mt-6 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
        Built to help businesses launch faster, operate smarter, and grow with
        confidence.
      </FadeUp>
    </PageSection>
  );
}
