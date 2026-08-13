import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#fafaf9",
    lang: "en",
    icons: [
      {
        src: SITE.logo,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
