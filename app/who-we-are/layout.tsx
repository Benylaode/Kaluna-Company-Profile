import type { Metadata } from "next";

const description =
  "Learn about Kaluna Technology, our technology expertise, development team, vision, and approach to building scalable digital systems.";

export const metadata: Metadata = {
  title: "Who We Are",

  description,

  alternates: {
    canonical: "/who-we-are",
  },

  openGraph: {
    type: "website",
    url: "/who-we-are",
    siteName: "Kaluna Technology",
    title: "Who We Are | Kaluna Technology",
    description,
    images: [
      {
        url: "/seo/kaluna-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Kaluna Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Kaluna Technology",
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function WhoWeAreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
