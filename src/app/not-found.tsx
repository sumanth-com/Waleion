import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="relative bg-transparent">
      <Container
        size="narrow"
        className="relative z-10 flex min-h-[70svh] flex-col items-center justify-center py-[calc(var(--header-height)+2.5rem)] pb-16 text-center"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-3 text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.12] text-foreground">
          This page isn’t here.
        </h1>
        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          The link may be outdated. Head home, see selected work, or start a
          project conversation.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6"
            )}
          >
            Start a project
          </Link>
        </div>
      </Container>
    </section>
  );
}
