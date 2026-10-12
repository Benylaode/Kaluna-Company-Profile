import type { MetadataRoute } from "next";
import { SITE_URL } from "../src/lib/seo";

/**
 * Nothing that Google needs to render or index the site is blocked:
 * pages, /_next/static (JS/CSS), /_next/image and all image folders are open.
 *
 * - There is no /api route in this project, but the rule is kept as a guard
 *   so future route handlers are never crawled.
 * - /products/* is intentionally NOT disallowed: those pages are `noindex`,
 *   and Google can only honor a noindex tag on a URL it is allowed to crawl.
 *
 * A single `*` group is used on purpose. A crawler-specific group (e.g.
 * Googlebot) *replaces* the `*` group instead of adding to it, so duplicating
 * rules per bot only creates room for drift.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
