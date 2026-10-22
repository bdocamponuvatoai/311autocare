/**
 * Build-time deployment settings read from environment variables.
 * Import only from server code (metadata, robots, sitemap, structured data).
 */

function resolveSiteUrl(): string {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/+$/, "");
  // Set automatically on Vercel builds.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

/** Public origin without a trailing slash, e.g. "https://www.example.com". */
export const siteUrl = resolveSiteUrl();

/** Whether search engines may index the site (`SITE_INDEXABLE=true`). */
export const isIndexable = process.env.SITE_INDEXABLE === "true";

if (isIndexable && siteUrl.startsWith("http://localhost")) {
  throw new Error(
    "SITE_INDEXABLE=true requires SITE_URL to be set to the public origin.",
  );
}
