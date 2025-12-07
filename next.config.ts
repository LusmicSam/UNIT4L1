import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/UNIT4L1',
  assetPrefix: '/UNIT4L1',
};

export default nextConfig;
