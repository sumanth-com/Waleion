/**
 * Visible marker for draft legal copy pending qualified review.
 */
export function LegalReviewBanner() {
  return (
    <p className="rounded-2xl border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-950 dark:border-amber-200/15 dark:bg-amber-200/10 dark:text-amber-100">
      <span className="font-semibold tracking-tight">REQUIRES LEGAL REVIEW.</span>{" "}
      This page is a technical draft based on the current website implementation.
      It is not a legal certification, and it is not legal advice.
    </p>
  );
}
