import type { MetadataRoute } from "next";

const baseUrl = "https://www.kalunatechnology.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/data/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/image/", "/seo/", "/*.jpg", "/*.jpeg", "/*.png", "/*.webp", "/*.svg"],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
