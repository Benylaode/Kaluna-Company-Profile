import type { MetadataRoute } from "next";
import { getWorks } from "../src/lib/actions";
import { SITE_URL } from "../src/lib/seo";

// Update this date when the static pages' content meaningfully changes.
const STATIC_LAST_MODIFIED = new Date("2026-10-12");

type StaticRoute = Pick<
  MetadataRoute.Sitemap[number],
  "url" | "changeFrequency" | "priority"
>;

const staticRouteDefs: StaticRoute[] = [
  { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/works`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/who-we-are`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
];

const staticRoutes: MetadataRoute.Sitemap = staticRouteDefs.map((route) => ({
  ...route,
  lastModified: STATIC_LAST_MODIFIED,
}));

// Regenerate hourly so newly added works show up without a redeploy.
export const revalidate = 3600;

function toAbsoluteUrl(src: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let workRoutes: MetadataRoute.Sitemap = [];

  try {
    const works = await getWorks();
    workRoutes = works
      .filter((work) => Boolean(work.slug))
      .map((work) => {
        const parsed = work.created_at ? new Date(work.created_at) : null;
        return {
          url: `${SITE_URL}/works/${work.slug}`,
          lastModified:
            parsed && !Number.isNaN(parsed.getTime())
              ? parsed
              : STATIC_LAST_MODIFIED,
          changeFrequency: "monthly" as const,
          priority: 0.8,
          images: (work.images ?? []).slice(0, 10).map(toAbsoluteUrl),
        };
      });
  } catch {
    // If the DB is unavailable at build time, still ship the static routes.
  }

  return [...staticRoutes, ...workRoutes];
}
