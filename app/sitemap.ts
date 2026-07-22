import type { MetadataRoute } from "next";

const siteUrl = "https://www.kalunatechnology.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      path: "/works",
      changeFrequency: "weekly" as const,
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

    // Services
    {
      path: "/services/web-application-development",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/services/iot-system-development",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/services/erp-system-integration",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/services/industrial-automation-solutions",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services/data-dashboard-analytics",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services/it-strategy-consulting",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    // Works
    {
      path: "/works/myboss-iot-system",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/sinau-print-erp",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/web-media-profile",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/artic-complex-web",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/works/altatic-analytic",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
