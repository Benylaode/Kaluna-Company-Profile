import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design & Development | Kaluna Technology",
  description:
    "Custom, high-performance websites that unify your brand, content, customer experience, and marketing ecosystem.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "/services",
    siteName: "Kaluna Technology",
    title: "Website Design & Development | Kaluna Technology",
    description:
      "Custom, high-performance websites that unify your brand, content, customer experience, and marketing ecosystem.",
    images: [
      {
        url: "/image/service/erp-integration.png",
        width: 1200,
        height: 630,
        alt: "Website Design & Development | Kaluna Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development | Kaluna Technology",
    description:
      "Custom, high-performance websites that unify your brand, content, customer experience, and marketing ecosystem.",
    images: ["/image/service/erp-integration.png"],
  },
};

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
