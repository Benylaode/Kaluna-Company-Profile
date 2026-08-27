import type { Metadata } from "next";

const description =
  "Hubungi Kaluna Technology untuk konsultasi jasa pembuatan website perusahaan, toko online e-commerce, portal member, dan custom web application.";

export const metadata: Metadata = {
  title: "Hubungi Kami (Contact Us)",

  description,

  keywords: [
    "Konsultasi Pembuatan Website",
    "Jasa Pembuatan Website Jakarta",
    "Jasa Web Builder",
    "Schedule Web Development Consultation",
    "Contact Kaluna Technology",
    "Hubungi Web Agency Jakarta",
    "Web Engineering Consultation",
    "Software House Jakarta",
  ],

  alternates: {
    canonical: "/contact",
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
