import type { Metadata } from "next";

// Root layout applies the "%s | Kaluna Technology" title template, so the
// page title below must NOT repeat the brand name.
const title = "Enterprise Technology Services & Digital Engineering";
const description =
  "Kaluna Technology delivers enterprise ERP systems, system integration, web applications, and digital engineering solutions for businesses in Indonesia.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Enterprise Technology Services",
    "ERP System Integration",
    "Custom ERP Development",
    "Enterprise Web Applications",
    "Digital Engineering",
    "Kaluna Technology Services",
  ],
  alternates: {
    canonical: "/services",
  },
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
    // OG/Twitter titles are not run through the title template.
    title: `${title} | Kaluna Technology`,
    description,
    images: [
      {
        url: "/seo/kaluna-og.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Technology Services | Kaluna Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Kaluna Technology`,
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
