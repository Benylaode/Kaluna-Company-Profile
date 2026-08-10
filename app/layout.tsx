import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "../src/components/WhatsAppButton";
import WebKitBackgroundPreloader from "../src/components/WebKitBackgroundPreloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = "https://www.kalunatechnology.com";
const siteTitle = "Kaluna Technology | Enterprise Web Development & Digital Engineering Agency";
const siteDescription =
  "Kaluna Technology is a premier web engineering agency. We design and build high-performance corporate websites, e-commerce platforms, member portals, and custom web applications for modern enterprises.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Kaluna Technology",
  },

  description: siteDescription,

  keywords: [
    "Kaluna Technology",
    "Custom Web Development Agency",
    "Enterprise Web Engineering",
    "Corporate Website Builder",
    "Jasa Pembuatan Website Enterprise",
    "E-Commerce Platform Engineering",
    "Member Portal Development",
    "Custom Web Application",
    "B2B Digital Agency",
    "PT SINERGI MUDA ARSA",
    "ARSALYNK",
  ],

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
        alt: "Kaluna Technology - Enterprise Web Development Agency",
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
      { url: "/seo/kaluna-logo-square.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/seo/kaluna-logo-square.png",
    apple: [
      { url: "/seo/kaluna-logo-square.png", sizes: "180x180", type: "image/png" },
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
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "Kaluna Technology",
      legalName: "PT SINERGI MUDA ARSA (ARSALYNK)",
      url: `${siteUrl}/`,
      image: `${siteUrl}/seo/kaluna-logo-square.png`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/seo/kaluna-logo-square.png`,
        contentUrl: `${siteUrl}/seo/kaluna-logo-square.png`,
        width: 512,
        height: 512,
      },
      description: siteDescription,
      email: "corporate@kalunatechnology.com",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Enterprise Web Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand & Corporate Website Engineering",
              description: "Custom high-performance corporate websites built to establish market authority and drive B2B inquiries.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce & Retail Platform Development",
              description: "Scalable digital retail storefronts with seamless checkout flows and automated product catalog management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Marketing & Landing Page Hubs",
              description: "Campaign-focused landing page hubs engineered for maximum lead conversion and speed.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise Member & Client Portals",
              description: "Secure role-based member portals for exclusive service distribution and partner engagement.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Applications & Analytics Dashboards",
              description: "Interactive data dashboards and bespoke web apps tailored to enterprise operational needs.",
            },
          },
        ],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} style={{ backgroundColor: "#ffffff", color: "#171717" }}>
      <head>
        {/* Explicit Square Logo Favicons for Google Search & Browsers */}
        <link rel="icon" href="/seo/kaluna-logo-square.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="apple-touch-icon" href="/seo/kaluna-logo-square.png" sizes="180x180" />

        {/* Preload LCP image: hero slide pertama agar browser segera fetch sebelum parse JS */}
        <link
          rel="preload"
          as="image"
          href="/image/projects/X-Tire/1.webp"
          fetchPriority="high"
        />
        {/* DNS prefetch untuk domain eksternal yang digunakan */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <script
          id="apple-webkit-safe-mode"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var ua = navigator.userAgent || '';
                var platform = navigator.platform || '';

                var isiOS =
                  /iPad|iPhone|iPod/.test(ua) ||
                  (platform === 'MacIntel' && navigator.maxTouchPoints > 1);

                var isMacSafari =
                  /Macintosh/.test(ua) &&
                  /Safari/.test(ua) &&
                  !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS/.test(ua);

                if (isiOS || isMacSafari) {
                  document.documentElement.classList.add('apple-webkit-safe');
                }
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col relative" style={{ backgroundColor: "#ffffff", color: "#171717" }}>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <WhatsAppButton />
        <WebKitBackgroundPreloader />
      </body>
    </html>
  );
}
