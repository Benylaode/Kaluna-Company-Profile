import type { Metadata } from "next";

const description =
  "Explore Kaluna Technology case studies in web development, IoT systems, ERP platforms, data dashboards, and enterprise system integration.";

export const metadata: Metadata = {
  title: "Our Works",

  description,

  alternates: {
    canonical: "/works",
  },

  openGraph: {
    type: "website",
    url: "/works",
    siteName: "Kaluna Technology",
    title: "Our Works | Kaluna Technology",
    description,
    images: [
      {
        url: "/seo/kaluna-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kaluna Technology Works and Case Studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Works | Kaluna Technology",
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
