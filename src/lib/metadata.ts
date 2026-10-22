import type { Metadata } from "next";

import heroImage from "@/assets/images/hero.webp";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title: string;
  /** Route path with trailing slash, e.g. "/services/". */
  path: string;
  description?: string;
};

/** Title, canonical URL and Open Graph tags for a page. */
export function pageMetadata({
  title,
  path,
  description = siteConfig.description,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url: path,
      images: [
        {
          url: heroImage.src,
          width: heroImage.width,
          height: heroImage.height,
        },
      ],
    },
  };
}
