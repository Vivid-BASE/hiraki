import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/hiraki',
  assetPrefix: '/hiraki',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/hiraki',
  },
};

export default nextConfig;
