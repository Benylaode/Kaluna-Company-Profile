import type { MetadataRoute } from "next";

const siteUrl = "https://www.kalunatechnology.com";

const primaryRoutes = [
  { path: "", lastModified: "2026-10-07", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/services", lastModified: "2026-10-07", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/works", lastModified: "2026-10-07", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/who-we-are", lastModified: "2026-10-07", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", lastModified: "2026-10-07", changeFrequency: "monthly" as const, priority: 0.8 },
];

const workRoutes = [
  "/works/x-tire-company-profile",
  "/works/sinau-print-platform",
  "/works/10-media-publishing-portal",
  "/works/arsalynk-enterprise-platform",
  "/works/aspoo-asset-management",
  "/works/artic-analytical-science",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...primaryRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: new Date(route.lastModified),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...workRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
