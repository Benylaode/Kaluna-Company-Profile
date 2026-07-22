import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
const siteTitle = "Kaluna Technology | Web, IoT, ERP & System Integration";
const siteDescription =
  "Kaluna Technology develops scalable websites, applications, IoT systems, ERP platforms, data dashboards, and system integrations for modern enterprises.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Kaluna Technology",
  },

  description: siteDescription,

  applicationName: "Kaluna Technology",

  authors: [
    {
      name: "Kaluna Technology",
      url: siteUrl,
    },
  ],

  creator: "Kaluna Technology",
  publisher: "PT SINERGI MUDA ARSA (ARSALYNK)",

  alternates: {
    canonical: "/",
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
    url: "/",
    siteName: "Kaluna Technology",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/seo/kaluna-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kaluna Technology - Web, IoT, ERP and System Integration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/seo/kaluna-og.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Kaluna Technology",
      alternateName: ["Kaluna Tech", "kalunatechnology.com"],
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Kaluna Technology",
      legalName: "PT SINERGI MUDA ARSA (ARSALYNK)",
      url: `${siteUrl}/`,
      description: siteDescription,
      email: "corporate@kalunatechnology.com",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/seo/kaluna-logo-square.png`,
        contentUrl: `${siteUrl}/seo/kaluna-logo-square.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://www.instagram.com/kalunatechnology/",
        "https://www.linkedin.com/company/pt-sinergi-muda-arsa-arsalynk/",
        "https://x.com/arsalynk",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Menara Rajawali, 26th Floor, Kuningan Business District",
        addressLocality: "South Jakarta",
        addressRegion: "DKI Jakarta",
        addressCountry: "ID",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
