export type { NavItem } from "@/constants/navigation";

export type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export type ContainerSize = "default" | "wide" | "narrow" | "full";

export type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4";

export type OrganizationJsonLd = {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  email?: string;
  sameAs?: string[];
};

export type WebSiteJsonLd = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  publisher?: {
    "@type": "Organization";
    name: string;
  };
};
