import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "absoluteglobal.in",
        pathname: "/images/absoluteGlobal.jpg",
      },
    ],
  },
};

export default nextConfig;
