import type { Metadata } from "next";

const description =
  "Explore conversion-driven website projects created by Kaluna Technology for modern enterprises and growing brands.";

export const metadata: Metadata = {
  title: "Our Works",

  description,

  keywords: [
    "Web Development Portfolio",
    "Enterprise Case Studies",
    "Portofolio Website Perusahaan",
    "Corporate Website Projects",
    "E-Commerce Case Study",
    "Member Portal Case Study",
    "Kaluna Technology Projects",
  ],

  alternates: {
    canonical: "/works",
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
