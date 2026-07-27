import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP & System Integration | Kaluna Technology",
  description:
    "Custom ERP development and enterprise system integration for unified workflows, inventory, finance, operations, and data synchronization.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "/services",
    siteName: "Kaluna Technology",
    title: "ERP & System Integration | Kaluna Technology",
    description:
      "Custom ERP development and enterprise system integration for unified workflows, inventory, finance, operations, and data synchronization.",
    images: [
      {
        url: "/image/service/erp-integration.png",
        width: 1200,
        height: 630,
        alt: "ERP & System Integration | Kaluna Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP & System Integration | Kaluna Technology",
    description:
      "Custom ERP development and enterprise system integration for unified workflows, inventory, finance, operations, and data synchronization.",
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
