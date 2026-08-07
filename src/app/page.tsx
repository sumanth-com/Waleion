import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyWaleion } from "@/components/sections/why-waleion";
import { OurProcess } from "@/components/sections/our-process";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <WhatWeBuild />
      <FeaturedWork />
      <WhyWaleion />
      <OurProcess />
      <Testimonials />
      <FinalCta />
    </>
  );
}
