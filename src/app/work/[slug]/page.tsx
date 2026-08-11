import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { caseStudies, getCaseStudy } from "@/data/work";
import { Container } from "@/components/layout/container";
import { PageSection } from "@/components/layout/page-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.name,
    description: project.overview,
    path: `/work/${project.id}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const sections = [
    { title: "Project Overview", body: project.overview },
    { title: "Business Challenge", body: project.challenge },
    { title: "Research & Discovery", body: project.research },
    { title: "Design Process", body: project.design },
    { title: "Development", body: project.development },
  ] as const;

  return (
    <>
      <section className="relative bg-transparent">
        <Container
          size="wide"
          className="relative z-[1] py-[calc(var(--header-height)+2.5rem)] pb-12 md:pb-16"
        >
          <SmoothAnchor
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            All work
          </SmoothAnchor>

          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-border/70 bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {project.industry}
              </span>
              <span className="rounded-full border border-border/70 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                {project.clientType}
              </span>
              <span className="rounded-full border border-border/70 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                {project.category}
              </span>
            </div>

            <h1 className="mt-5 text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.12] text-foreground">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
              {project.overview}
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  Duration
                </dt>
                <dd className="mt-1 text-sm text-foreground">{project.duration}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  Services
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  {project.services.join(" · ")}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <PageSection spacing="sm" containerClassName="max-w-3xl space-y-12">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-base font-medium tracking-tight text-foreground md:text-lg">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
              {section.body}
            </p>
          </article>
        ))}

        <article>
          <h2 className="text-base font-medium tracking-tight text-foreground md:text-lg">
            Technology Stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-foreground/[0.04] px-2.5 py-1 text-xs text-muted-foreground dark:bg-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>

        <article>
          <h2 className="text-base font-medium tracking-tight text-foreground md:text-lg">
            Key Features
          </h2>
          <ul className="mt-3 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {feature}
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h2 className="text-base font-medium tracking-tight text-foreground md:text-lg">
            Business Results
          </h2>
          <ul className="mt-3 space-y-2">
            {project.results.map((result) => (
              <li
                key={result}
                className="text-sm leading-relaxed text-foreground/90"
              >
                {result}
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h2 className="text-base font-medium tracking-tight text-foreground md:text-lg">
            Lessons Learned
          </h2>
          <ul className="mt-3 space-y-2">
            {project.lessons.map((lesson) => (
              <li
                key={lesson}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {lesson}
              </li>
            ))}
          </ul>
        </article>

        <blockquote className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft-sm md:p-8">
          <p className="text-sm leading-relaxed text-foreground/90 md:text-[0.9875rem]">
            “{project.feedback.quote}”
          </p>
          <footer className="mt-4 text-sm">
            <p className="font-medium text-foreground">{project.feedback.name}</p>
            <p className="text-xs text-muted-foreground">
              {project.feedback.role}, {project.feedback.company}
            </p>
          </footer>
        </blockquote>

        <div className="flex flex-wrap gap-3 border-t border-border/50 pt-8">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-6 dark:bg-white dark:text-neutral-950"
            )}
          >
            Start a similar project
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
          <SmoothAnchor
            href="/work"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6"
            )}
          >
            Back to all work
          </SmoothAnchor>
        </div>
      </PageSection>
    </>
  );
}
