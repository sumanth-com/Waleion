type LenisLike = {
  scrollTo: (target: number | HTMLElement, options?: { immediate?: boolean }) => void;
  resize: () => void;
};

/** Reset native scroll + Lenis after route changes. */
export function resetPageScroll() {
  if (typeof window === "undefined") return;

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
  lenis?.scrollTo(0, { immediate: true });
  lenis?.resize();
}

/** Routes that need a hard scroll reset and no dock transition. */
export function shouldSkipPageTransition(pathname: string) {
  return pathname === "/about" || pathname.startsWith("/contact");
}
