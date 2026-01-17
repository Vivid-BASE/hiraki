import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/hiraki',
  assetPrefix: '/hiraki',
};

export default nextConfig;
