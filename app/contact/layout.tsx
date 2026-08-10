import type { Metadata } from "next";

const description =
  "Get in touch with Kaluna Technology. Schedule a consultation for custom corporate website engineering, e-commerce development, client portals, and bespoke web applications.";

export const metadata: Metadata = {
  title: "Contact Us",

  description,

  keywords: [
    "Konsultasi Pembuatan Website",
    "Schedule Web Development Consultation",
    "Contact Kaluna Technology",
    "Hubungi Web Agency Jakarta",
    "Web Engineering Consultation",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Kaluna Technology",
    title: "Contact Us | Kaluna Technology",
    description,
    images: [
      {
        url: "/seo/kaluna-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Kaluna Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Kaluna Technology",
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
