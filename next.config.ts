import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site has no server-side features, so it ships as plain static files
  // to `out/` and can be hosted anywhere (including Vercel).
  output: "export",
  // Keep the original directory-style URLs: /services/ -> /services/index.html
  trailingSlash: true,
  images: {
    // Images are pre-optimized WebP files; static exports cannot use the
    // default on-demand optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
