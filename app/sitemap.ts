import type { MetadataRoute } from "next";

const siteUrl = "https://www.kalunatechnology.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModDate = new Date();

  const routes = [
    // Main Pages
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      path: "/works",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/services",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/who-we-are",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    // Case Studies & Works
    {
      path: "/works/x-tire-company-profile",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/sinau-print-platform",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/10-media-publishing-portal",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/arsalynk-enterprise-platform",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/aspoo-asset-management",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/artic-analytical-science",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: lastModDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}