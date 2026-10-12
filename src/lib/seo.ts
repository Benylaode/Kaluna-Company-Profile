export const SITE_URL = "https://www.kalunatechnology.com";
export const SITE_NAME = "Kaluna Technology";

export type BreadcrumbItem = {
  name: string;
  /** Path relative to the site root, e.g. "/works". Use "/" for home. */
  path: string;
};

/** Builds a schema.org BreadcrumbList. Home is always prepended. */
export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const all: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
