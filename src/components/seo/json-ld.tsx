import { serializeJsonLd } from "@/lib/seo";

type JsonLdProps = {
  data: object;
};

/** Server-rendered JSON-LD. Does not affect layout or styling. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
