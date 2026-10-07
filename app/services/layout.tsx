import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";

const siteUrl = "https://www.kalunatechnology.com";
const description =
  "Kaluna Technology menyediakan layanan web engineering, website perusahaan, e-commerce, custom web application, dan integrasi sistem digital untuk bisnis modern.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
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
    url: "/services",
    siteName: "Kaluna Technology",
    title: "Services | Kaluna Technology",
    description,
    images: [{ url: "/seo/kaluna-og.jpg", width: 1200, height: 630, alt: "Kaluna Technology Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Kaluna Technology",
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function ServiceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${siteUrl}/services`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: canonicalUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Services | Kaluna Technology",
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
      <JsonLd id="services-schema" data={data} />
      {children}
    </>
  );
}
