import { getWorkBySlug } from "../../../src/lib/actions";
import JsonLd from "@/src/components/JsonLd";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/src/lib/seo";

export default async function WorkDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) return children;

  const path = `/works/${slug}`;
  const image = work.images?.[0];
  const absoluteImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`
    : `${SITE_URL}/seo/kaluna-og.jpg`;

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Our Works", path: "/works" },
    { name: work.title, path },
  ]);

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}${path}#project`,
    url: `${SITE_URL}${path}`,
    name: work.title,
    description: work.desc,
    image: absoluteImage,
    genre: work.category,
    dateCreated: work.created_at,
    creator: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/works#webpage` },
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={creativeWork} />
      {children}
    </>
  );
}
