# Waleion SEO foundation

Technical SEO, GEO/AEO, and crawlability added without changing the visual design.

## Entity

Waleion is a digital product and software development company serving businesses in India and internationally. Positioning in copy and schema uses 10+ years of digital business experience plus focused software engineering — never “10+ years of software development.”

No LocalBusiness schema and no street address: the site is remote-first. LinkedIn is the only `sameAs` profile (official company page).

## What was implemented

- Central page metadata in `src/constants/seo.ts` and `createPageMetadata()`
- Unique titles and descriptions for Home, About, Contact, Industries, Get started, Insights, Privacy, Terms, thank-you (noindex), project and case-study pages
- Canonical URLs from `NEXT_PUBLIC_SITE_URL` (never localhost in production if the env var is set)
- Open Graph, Twitter, robots, icons, language (`html lang="en"`)
- JSON-LD: Organization + WebSite graph; WebPage; BreadcrumbList; FAQPage; OfferCatalog of services (not thin city/service doorway pages)
- Dynamic `sitemap.xml` of canonical public URLs only
- `robots.txt` allowing public pages; disallowing `/api/`, `/admin/`, `/dashboard/`, `/private/`, thank-you
- `/insights` foundation (topic list only — no fake articles)
- `/privacy` and `/terms` (footer links were previously 404)
- Custom 404
- `trailingSlash: false`
- Descriptive alt text on product screenshots; decorative images stay empty alt
- One H1 on the homepage (hero); Get started page uses H1 when it is the page title

## What was not created

- City landing pages (`/software-development-company-bangalore`, etc.)
- Duplicate `/services/*` pages with swapped keywords
- Fake offices, reviews, certifications, or Google Business address
- Review schema for illustrative quotes

## Production checklist

1. Set `NEXT_PUBLIC_SITE_URL=https://waleion.com` (or the live domain) in Vercel. Do not ship with `http://localhost:3000`.
2. Add a 1200×630 image at `public/og/default.png` when a brand OG asset is ready.
3. Search Console: submit `https://<domain>/sitemap.xml`.
4. Rich Results Test: Organization, WebSite, FAQPage, BreadcrumbList.
5. Confirm thank-you is noindex.
6. Confirm `/work` and `/expertise` rewrite to the homepage and are **not** listed as extra sitemap URLs (they canonicalise via the homepage).
7. When publishing a real insight article, add a page under `/insights/[slug]`, unique copy, Article JSON-LD, and include it in the sitemap.

## Adding a new indexable page

```ts
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Full title including Waleion",
  description: "Unique description based on the page content.",
  path: "/your-path",
});
```

Add the path to `src/app/sitemap.ts`. Add WebPage + Breadcrumb JSON-LD with `JsonLd` if the page should appear in AI/search graphs.
