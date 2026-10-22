import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/deployment";
import { servicePath, services } from "@/content/services";

// Generated once at build time (required by the static export).
export const dynamic = "force-static";

const paths = [
  "/",
  "/services/",
  ...services.map((service) => servicePath(service.id)),
  "/about/",
  "/contact/",
  "/request/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}
