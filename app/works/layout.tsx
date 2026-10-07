import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";

const siteUrl = "https://www.kalunatechnology.com";
const description =
  "Jelajahi portofolio dan case studies Kaluna Technology untuk website perusahaan, e-commerce, portal pelanggan, dan custom web application.";

export const metadata: Metadata = {
  title: "Our Works",
  description,
  alternates: { canonical: "/works" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/works",
    siteName: "Kaluna Technology",
    title: "Our Works | Kaluna Technology",
    description,
    images: [{ url: "/seo/kaluna-og.jpg", width: 1200, height: 630, alt: "Kaluna Technology Works and Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Works | Kaluna Technology",
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function WorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${siteUrl}/works`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Our Works", item: canonicalUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Our Works | Kaluna Technology",
        description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <>
      <JsonLd id="works-schema" data={data} />
      {children}
    </>
  );
}
