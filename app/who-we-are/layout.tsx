import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";

const siteUrl = "https://www.kalunatechnology.com";
const description =
  "Kenali Kaluna Technology, web engineering dan digital solutions agency dalam ekosistem Arsalynk yang membantu perusahaan membangun platform digital modern.";

export const metadata: Metadata = {
  title: "Who We Are",
  description,
  alternates: { canonical: "/who-we-are" },
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
    url: "/who-we-are",
    siteName: "Kaluna Technology",
    title: "Who We Are | Kaluna Technology",
    description,
    images: [{ url: "/seo/kaluna-og.jpg", width: 1200, height: 630, alt: "About Kaluna Technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Kaluna Technology",
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function WhoWeAreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${siteUrl}/who-we-are`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Who We Are", item: canonicalUrl },
        ],
      },
      {
        "@type": ["AboutPage", "WebPage"],
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Who We Are | Kaluna Technology",
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
      <JsonLd id="who-we-are-schema" data={data} />
      {children}
    </>
  );
}
