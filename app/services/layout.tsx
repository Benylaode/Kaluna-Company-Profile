import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Web Development Services",
  description:
    "Custom high-performance websites, e-commerce platforms, member portals, and web applications engineered to solve specific enterprise business challenges.",
  keywords: [
    "Enterprise Web Development",
    "Custom Website Services",
    "E-Commerce Engineering",
    "Client Portal Development",
    "Web Application Agency",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "/services",
    siteName: "Kaluna Technology",
    title: "Enterprise Web Development Services | Kaluna Technology",
    description:
      "Custom high-performance websites, e-commerce platforms, member portals, and web applications engineered to solve specific enterprise business challenges.",
    images: [
      {
        url: "/seo/kaluna-og.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Web Development Services | Kaluna Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Web Development Services | Kaluna Technology",
    description:
      "Custom high-performance websites, e-commerce platforms, member portals, and web applications engineered to solve specific enterprise business challenges.",
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
