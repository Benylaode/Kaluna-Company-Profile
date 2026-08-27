import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Jasa Pembuatan Website & Web Engineering",
  description:
    "Solusi jasa pembuatan website perusahaan, platform e-commerce, portal member, dan custom web application berkinerja tinggi oleh Kaluna Technology.",
  keywords: [
    "Jasa Pembuatan Website",
    "Jasa Web Builder",
    "Jasa Pembuatan Website Perusahaan",
    "Jasa Website Company Profile",
    "Jasa Web Application",
    "Jasa Pembuatan Toko Online E-Commerce",
    "Jasa Bikin Web Jakarta",
    "Enterprise Web Development",
    "Custom Website Services",
    "E-Commerce Engineering",
    "Client Portal Development",
    "Web Application Agency",
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
    title: "Layanan Jasa Pembuatan Website & Web Engineering | Kaluna Technology",
    description:
      "Solusi jasa pembuatan website perusahaan, platform e-commerce, portal member, dan custom web application berkinerja tinggi oleh Kaluna Technology.",
    images: [
      {
        url: "/seo/kaluna-og.jpg",
        width: 1200,
        height: 630,
        alt: "Layanan Jasa Pembuatan Website | Kaluna Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Jasa Pembuatan Website & Web Engineering | Kaluna Technology",
    description:
      "Solusi jasa pembuatan website perusahaan, platform e-commerce, portal member, dan custom web application berkinerja tinggi oleh Kaluna Technology.",
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
