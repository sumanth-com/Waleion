import type { Metadata } from "next";
import { Suspense } from "react";
import { createPageMetadata } from "@/lib/seo";
import { ContactThankYou } from "@/components/sections/contact-thank-you";

export const metadata: Metadata = createPageMetadata({
  title: "Thank you",
  description: "Your message was sent successfully. We'll be in touch soon.",
  path: "/contact/thank-you",
  noIndex: true,
});

export default function ContactThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[calc(100dvh-var(--header-height))] items-center justify-center">
          <div className="size-10 animate-pulse rounded-full bg-emerald-500/20" />
        </div>
      }
    >
      <ContactThankYou />
    </Suspense>
  );
}
