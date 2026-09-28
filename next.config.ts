import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for the GitHub Pages project site (bachidev.github.io/my-portfolio).
  // NOTE: `images.unoptimized` is required because Pages serves static files
  // only, so Next's image optimizer is unavailable.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
