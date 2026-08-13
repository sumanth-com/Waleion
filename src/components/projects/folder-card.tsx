"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ShippedProject } from "@/data/projects";
import { cn } from "@/lib/utils";

type FolderCardProps = {
  project: ShippedProject;
  className?: string;
  onSelect?: () => void;
  wide?: boolean;
};

export function FolderCard({
  project,
  className,
  onSelect,
  wide = false,
}: FolderCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      onClick={
        onSelect
          ? (event) => {
              event.preventDefault();
              onSelect();
            }
          : undefined
      }
      className={cn(
        "group flex w-full flex-col overflow-hidden rounded-[26px]",
        "border border-black/[0.06] bg-white",
        "shadow-[0_8px_28px_rgba(0,0,0,0.045)]",
        "transition-[transform,box-shadow,border-color] duration-300",
        "hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_14px_36px_rgba(0,0,0,0.07)]",
        "font-[family-name:var(--font-inter)] tracking-tight",
        wide
          ? "w-full max-w-none sm:w-[min(100%,30rem)]"
          : "max-w-[260px]",
        className
      )}
    >
      <span className="relative block w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image
          src={project.cover}
          alt={`${project.name} product`}
          width={1600}
          height={1000}
          sizes={wide ? "(min-width: 768px) 30rem, 100vw" : "260px"}
          className="h-auto w-full object-contain object-top"
        />
        <span className="absolute inset-x-3 bottom-3 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium text-neutral-950 shadow-sm">
            View proof
          </span>
        </span>
      </span>

      <span className="relative flex flex-1 flex-col px-5 pb-4 pt-3.5">
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400">
          {project.status}
        </span>
        <span className="mt-1 text-[1.15rem] font-semibold text-neutral-950">
          {project.name}
        </span>
        <span className="mt-0.5 truncate pr-10 text-[12px] text-neutral-500">
          {project.subtitle}
        </span>

        <span className="absolute right-3.5 bottom-3.5 grid size-8 place-items-center rounded-full border border-black/[0.08] bg-white text-neutral-950 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:text-white">
          <ArrowUpRight className="size-3.5" aria-hidden />
        </span>
      </span>
    </Link>
  );
}

export function FolderCardRow({
  projects,
  className,
}: {
  projects: ShippedProject[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-stretch justify-center gap-5 md:gap-6",
        className
      )}
    >
      {projects.map((project) => (
        <FolderCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
