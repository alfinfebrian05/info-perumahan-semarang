import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  async redirects() {
    return [
      {
        source: "/",
        destination: "/titip-jual",
        permanent: true,
      }
    ]
  },

  images: {
    domains: ["images.unsplash.com"],
  }
};

export default nextConfig;
