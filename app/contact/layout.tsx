import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";

const siteUrl = "https://www.kalunatechnology.com";
const description =
  "Hubungi Kaluna Technology untuk konsultasi website perusahaan, e-commerce, portal pelanggan, custom web application, dan kebutuhan digital engineering.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
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
    url: "/contact",
    siteName: "Kaluna Technology",
    title: "Contact Us | Kaluna Technology",
    description,
    images: [{ url: "/seo/kaluna-og.jpg", width: 1200, height: 630, alt: "Contact Kaluna Technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Kaluna Technology",
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${siteUrl}/contact`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Contact Us", item: canonicalUrl },
        ],
      },
      {
        "@type": ["ContactPage", "WebPage"],
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Contact Us | Kaluna Technology",
        description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        mainEntity: { "@id": `${siteUrl}/#organization` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <>
      <JsonLd id="contact-schema" data={data} />
      {children}
    </>
  );
}
