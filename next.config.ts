import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves directories more reliably with trailing slashes
  trailingSlash: true,
};

export default nextConfig;
