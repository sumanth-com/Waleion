import Image from "next/image";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { clientLogos, trustAchievements } from "@/data/trust";

type LogoMarkProps = {
  name: string;
  src?: string;
};

function LogoMark({ name, src }: LogoMarkProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={120}
        height={32}
        className="h-6 w-auto object-contain opacity-55 grayscale transition-opacity duration-300 hover:opacity-100"
      />
    );
  }

  return (
    <span className="text-[13px] font-medium tracking-tight text-muted-foreground/65 transition-colors duration-300 hover:text-foreground">
      {name}
    </span>
  );
}

/**
 * Trust & Credibility — continuous with hero, shared homepage language.
 */
export function Trust() {
  return (
    <PageSection
      id="trust"
      spacing="default"
      containerClassName="flex flex-col items-center"
    >
      <SectionHeader
        label="Trusted by Businesses Worldwide"
        title="Trusted by Startups, Growing Businesses, and Enterprise Teams."
        description="We partner with ambitious companies to build AI solutions, SaaS platforms, websites, and enterprise software that solve real problems—and support long-term growth."
      />

      <FadeUp className="mt-10 w-full max-w-3xl">
        <ul
          aria-label="Clients and partners"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-10"
        >
          {clientLogos.map((logo) => (
            <li key={logo.id}>
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center"
                  aria-label={logo.name}
                >
                  <LogoMark name={logo.name} src={logo.src} />
                </a>
              ) : (
                <LogoMark name={logo.name} src={logo.src} />
              )}
            </li>
          ))}
        </ul>
      </FadeUp>

      <Stagger className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
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

      <FadeUp className="mt-10 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
        Built to help businesses launch faster, operate smarter, and grow with
        confidence.
      </FadeUp>
    </PageSection>
  );
}
