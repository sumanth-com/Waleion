import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { ContactThankYou } from "@/components/sections/contact-thank-you";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.thankYou);

export default function ContactThankYouPage() {
  return <ContactThankYou />;
}
