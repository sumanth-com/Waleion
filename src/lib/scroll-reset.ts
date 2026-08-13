type LenisLike = {
  scrollTo: (target: number | HTMLElement, options?: { immediate?: boolean }) => void;
  resize: () => void;
};

function getLenis() {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { __lenis?: LenisLike }).__lenis;
}

/** Reset native scroll + Lenis after route changes. */
export function resetPageScroll() {
  if (typeof window === "undefined") return;

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const lenis = getLenis();
  lenis?.scrollTo(0, { immediate: true });
  lenis?.resize();
}
