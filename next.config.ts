import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: {
    compilationMode: "annotation"
  },
  allowedDevOrigins: ["192.168.0.109"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**"
      }
    ]
  }
};

export default nextConfig;
