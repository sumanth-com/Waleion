"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp } from "@/components/animations/reveal";
import { homeFaqs } from "@/data/faq";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { easings } from "@/lib/animations";

const MOBILE_FAQ_COUNT = 5;

function TypingDots() {
  return (
    <span className="flex items-center gap-1 px-1 py-0.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 rounded-full bg-neutral-400"
          style={{
            animation: "faq-dot 1s ease-in-out infinite",
            animationDelay: `${i * 0.16}s`,
          }}
        />
      ))}
    </span>
  );
}

function StudioMark() {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-neutral-950 text-[13px] font-semibold text-white dark:bg-white dark:text-neutral-950">
      {SITE.name.charAt(0)}
    </span>
  );
}

function AnswerBody({
  text,
  typing,
  reduceMotion,
}: {
  text: string;
  typing: boolean;
  reduceMotion: boolean;
}) {
  const [shown, setShown] = useState(reduceMotion || !typing ? text : "");

  useEffect(() => {
    if (reduceMotion || typing) {
      setShown(typing ? "" : text);
      return;
    }

    setShown("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 8);

    return () => window.clearInterval(id);
  }, [text, typing, reduceMotion]);

  return (
    <div className="relative">
      <p className="invisible text-[16px] leading-relaxed" aria-hidden>
        {text}
      </p>
      <div className="absolute inset-0 overflow-hidden">
        {typing ? (
          <TypingDots />
        ) : (
          <p className="text-[16px] leading-relaxed text-neutral-700 dark:text-white/80">
            {shown}
            {shown.length < text.length ? (
              <span className="ml-0.5 inline-block h-[1em] w-px translate-y-0.5 bg-neutral-400" />
            ) : null}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * FAQ — accordion cards on mobile, chat-style replies on desktop.
 */
export function FaqChat() {
  const reduceMotion = usePrefersReducedMotion();
  const [openId, setOpenId] = useState<string | null>(homeFaqs[0]?.id ?? null);
  const [phase, setPhase] = useState<"idle" | "typing" | "done">("done");
  const typingTimer = useRef<number>(0);

  const open = (id: string, withTyping: boolean) => {
    window.clearTimeout(typingTimer.current);

    if (openId === id) {
      setOpenId(null);
      setPhase("idle");
      return;
    }

    setOpenId(id);
    if (reduceMotion || !withTyping) {
      setPhase("done");
      return;
    }
    setPhase("typing");
    typingTimer.current = window.setTimeout(() => setPhase("done"), 720);
  };

  const mobileFaqs = homeFaqs.slice(0, MOBILE_FAQ_COUNT);

  return (
    <PageSection id="faq" spacing="sm" containerClassName="space-y-10">
      <SectionHeader
        label="FAQ"
        title="Frequently asked questions"
        description="Curiosity is a good sign. Here are the questions teams ask before they start a product with us."
        className="max-w-3xl"
      />

      <FadeUp className="mx-auto w-full max-w-5xl">
        <div className="space-y-3 md:hidden">
          {mobileFaqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-[1.35rem] border border-black/[0.06] bg-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-white/[0.06]"
              >
                <button
                  type="button"
                  onClick={() => open(item.id, false)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-mobile-${item.id}`}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                >
                  <span className="text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-mobile-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: easings.outExpo }}
                      className="overflow-hidden"
                    >
                      <div className="mx-4 h-px bg-black/[0.08] dark:bg-white/10" />
                      <p className="px-4 pb-4 pt-3 text-[14px] leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        <div className="hidden rounded-[1.75rem] border border-black/[0.06] bg-white/85 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] md:block sm:p-5">
          <div className="flex flex-col gap-3">
            {homeFaqs.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="flex flex-col gap-2.5">
                  <div className="ml-auto flex w-fit max-w-[92%] items-center gap-2">
                    <button
                      type="button"
                      onClick={() => open(item.id, true)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${item.id}`}
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-xl transition-colors",
                        isOpen
                          ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                          : "bg-neutral-100 text-neutral-600 dark:bg-white/12 dark:text-white/70"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="size-3.5" strokeWidth={2.2} />
                      ) : (
                        <Plus className="size-3.5" strokeWidth={2.2} />
                      )}
                      <span className="sr-only">
                        {isOpen ? "Hide answer" : "Show answer"}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => open(item.id, true)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-left text-[16px] font-medium tracking-tight transition-colors",
                        isOpen
                          ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                          : "bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-white/80"
                      )}
                    >
                      {item.question}
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-${item.id}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.28, ease: easings.springSoft }}
                        className="mr-auto flex w-[88%] items-center gap-2"
                      >
                        <StudioMark />
                        <div className="min-w-0 flex-1 rounded-2xl rounded-bl-md bg-neutral-50 px-3.5 py-3 dark:bg-white/8">
                          <AnswerBody
                            text={item.answer}
                            typing={phase === "typing"}
                            reduceMotion={Boolean(reduceMotion)}
                          />
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </PageSection>
  );
}
