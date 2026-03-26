import type { MetadataRoute } from "next";

const BASE_URL = process.env.SITE_URL || "https://www.infoperumahansemarang.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/admin"], // optional
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}