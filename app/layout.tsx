import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "../src/components/CustomCursor";
import WhatsAppButton from "../src/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.kalunatechnology.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kaluna Technology - Web, IoT & System Integration",
    template: "%s | Kaluna Technology",
  },
  description:
    "PT Sinergi Muda Arsa (Kaluna Technology) adalah penyedia layanan Web & Application Development, IoT System Development, dan ERP System Integration di Jakarta.",
  keywords: [
    "Kaluna Technology",
    "Web Development Jakarta",
    "IoT System Development",
    "ERP Integration",
    "PT Sinergi Muda Arsa",
    "digital transformation",
    "software house Jakarta",
  ],
  authors: [{ name: "Kaluna Technology", url: siteUrl }],
  creator: "Kaluna Technology",
  publisher: "PT Sinergi Muda Arsa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon-48x48.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Kaluna Technology",
    title: "Kaluna Technology - Web, IoT & System Integration",
    description:
      "PT Sinergi Muda Arsa (Kaluna Technology) adalah penyedia layanan Web & Application Development, IoT System Development, dan ERP System Integration di Jakarta.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaluna Technology - Solusi Digital Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaluna Technology - Web, IoT & System Integration",
    description:
      "Penyedia layanan Web Development, IoT System, dan ERP Integration terpercaya di Jakarta.",
    images: ["/og-image.png"],
  },
  verification: {
    google: undefined, // Isi dengan Google Search Console verification code jika ada
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <CustomCursor />
        <div style={{ zoom: 0.88 } as any} className="flex-1 flex flex-col">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
