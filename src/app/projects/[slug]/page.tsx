import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import {
  getAdjacentProjects,
  getShippedProject,
  shippedProjects,
} from "@/data/projects";
import { DeviceCluster } from "@/components/projects/device-cluster";
import { GrowthChart } from "@/components/projects/growth-chart";
import {
  ProjectsShell,
  ProjectsContainer,
} from "@/components/projects/projects-shell";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return shippedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getShippedProject(slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.name,
    description: project.promise,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getShippedProject(slug);
  if (!project) notFound();

  const { prev, next, more } = getAdjacentProjects(project.slug);
  const liveLabel = project.liveUrl ? "Live product" : "Product";

  return (
    <ProjectsShell variant="hero">
      <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-[var(--hero-bg)]/80 backdrop-blur-md">
        <ProjectsContainer className="flex h-14 items-center justify-between md:h-16">
          <SmoothAnchor
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[12px] font-medium text-neutral-950 shadow-sm"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            All projects
          </SmoothAnchor>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-3.5 py-2 text-[12px] font-medium text-white"
            >
              Open live site
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ) : (
            <span className="rounded-full bg-black/5 px-3.5 py-2 text-[12px] font-medium text-neutral-400">
              Case study
            </span>
          )}
        </ProjectsContainer>
      </header>

      <ProjectsContainer className="pb-28 pt-10 md:pt-14">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] font-semibold tracking-tight text-neutral-950">
            {project.name}
          </h1>
          <p className="mt-3 text-[13px] text-neutral-500">{project.category}</p>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-neutral-500">
            {project.promise}
          </p>
        </header>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 pb-10 md:grid-cols-2 md:pb-14">
          <article className="rounded-[22px] border border-black/8 bg-white/70 p-5 text-left md:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
              Live now
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-800">
              {project.whatItIs}
            </p>
          </article>
          <article className="rounded-[22px] border border-black/8 bg-white/70 p-5 text-left md:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
              Who it’s for
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-800">
              {project.whatItsFor}
            </p>
          </article>
        </div>

        <section className="pb-16 text-center md:pb-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
            {liveLabel}
          </p>
          <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.15rem)] font-semibold tracking-tight text-neutral-950">
            This is the product, running.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-neutral-500">
            The same screens people open. Not a deck.
          </p>
          <div className="mt-10">
            <DeviceCluster src={project.screenshot} alt={project.name} />
          </div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-neutral-700"
            >
              Visit {project.name}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ) : null}
        </section>

        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Experience
            </p>
            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.15rem)] font-semibold tracking-tight text-neutral-950">
              Inside the product.
            </h2>
            <p className="mt-3 text-[15px] text-neutral-500">
              What you see. What you do next. What changes.
            </p>
          </div>

          <div className="mt-12 space-y-16 md:space-y-20">
            {project.experience.map((item, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={item.index}
                  className="grid items-center gap-8 md:grid-cols-12 md:gap-10"
                >
                  <div
                    className={cn(
                      "md:col-span-7",
                      reverse && "md:order-2"
                    )}
                  >
                    <DeviceCluster src={item.image} alt="" />
                  </div>
                  <div
                    className={cn(
                      "md:col-span-5",
                      reverse && "md:order-1"
                    )}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-2.5 py-1 text-[12px] text-neutral-800 shadow-sm">
                      <span className="grid size-6 place-items-center rounded-full bg-neutral-950 text-[10px] font-semibold text-white">
                        {item.index}
                      </span>
                      {item.stage}
                    </span>
                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight text-neutral-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                      {item.copy}
                    </p>
                    <div className="mt-5 border-l border-neutral-300 pl-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                        Outcome
                      </p>
                      <p className="mt-1 text-[14px] text-neutral-800">
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <GrowthChart
          color={project.brand}
          label={project.growth.metricLabel}
          value={project.growth.metricValue}
          story={project.growth.story}
        />

        <div className="mt-16 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center md:mt-20">
          <p className="text-[15px] tracking-tight text-neutral-500">
            Want something like this for your brand?
          </p>
          <Link
            href={CTA_NAV.href}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-3.5 py-2 text-[12px] font-medium text-white"
          >
            Let’s build
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 pb-10 md:mt-12 md:pb-14">
          <Link
            href={`/projects/${prev.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-[12px] font-medium text-neutral-700 shadow-sm hover:text-neutral-950"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            {prev.name}
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-[12px] font-medium text-neutral-700 shadow-sm hover:text-neutral-950"
          >
            {next.name}
          </Link>
          <Link
            href={`/projects/${more.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-[12px] font-medium text-neutral-700 shadow-sm hover:text-neutral-950"
          >
            {more.name}
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </ProjectsContainer>
    </ProjectsShell>
  );
}
