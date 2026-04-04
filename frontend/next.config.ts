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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/*',
      }
    ],
  }
};

export default nextConfig;
