import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,   
    remotePatterns: [
      {
        protocol: "http",
        hostname: "admin.iaamonline.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
