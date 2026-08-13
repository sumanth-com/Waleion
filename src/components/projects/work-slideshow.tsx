"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FolderCard } from "@/components/projects/folder-card";
import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/use-media-query";
import type { ShippedProject } from "@/data/projects";
import { cn } from "@/lib/utils";

type WorkSlideshowProps = {
  projects: ShippedProject[];
};

function wrapOffset(index: number, active: number, length: number) {
  let offset = index - active;
  const half = Math.floor(length / 2);
  if (offset > half) offset -= length;
  if (offset < -half) offset += length;
  return offset;
}

export function WorkSlideshow({ projects }: WorkSlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const count = projects.length;
  const shift = isDesktop ? 250 : 0;

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((current) => (current + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (reduceMotion || paused || count < 2) return;
    const id = window.setInterval(() => go(1), 1000);
    return () => window.clearInterval(id);
  }, [go, paused, reduceMotion, count]);

  const arrowClass = cn(
    "absolute top-1/2 z-20 grid -translate-y-1/2 place-items-center",
    "size-9 sm:size-11",
    "rounded-full border border-black/[0.06] bg-white/95 text-neutral-600 shadow-[0_6px_20px_rgba(0,0,0,0.08)]",
    "transition-colors hover:text-neutral-950"
  );

  return (
    <div
      className="relative mx-auto w-full max-w-[62rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        aria-label="Previous project"
        onClick={() => go(-1)}
        className={cn(arrowClass, "left-2 sm:left-0")}
      >
        <ChevronLeft className="size-4" strokeWidth={1.75} />
      </button>

      <div className="relative h-[22.5rem] overflow-hidden sm:mx-12 sm:h-[28rem]">
        {projects.map((project, index) => {
          const offset = wrapOffset(index, active, count);
          const isCenter = offset === 0;
          const visible = isDesktop ? Math.abs(offset) <= 1 : isCenter;

          return (
            <div
              key={project.slug}
              className={cn(
                "absolute left-1/2 top-1/2 will-change-transform",
                "w-full px-0 sm:w-[min(92vw,30rem)] sm:px-0",
                reduceMotion
                  ? "transition-opacity duration-300"
                  : "transition-[transform,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
              )}
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * shift}px) scale(${isCenter ? 1 : 0.92})`,
                zIndex: isCenter ? 8 : 4 - Math.abs(offset),
                opacity: visible ? (isCenter ? 1 : 0.72) : 0,
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              <FolderCard
                project={project}
                wide
                onSelect={isCenter ? undefined : () => setActive(index)}
                className="w-full hover:!translate-y-0 sm:w-[min(92vw,30rem)]"
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Next project"
        onClick={() => go(1)}
        className={cn(arrowClass, "right-2 sm:right-0")}
      >
        <ChevronRight className="size-4" strokeWidth={1.75} />
      </button>
    </div>
  );
}
