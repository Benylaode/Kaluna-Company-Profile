import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
const siteTitle = "Kaluna Technology | Jasa Pembuatan Website & Web Engineering";
const siteDescription =
  "Kaluna Technology adalah web engineering agency di Jakarta. Jasa pembuatan website perusahaan, e-commerce, portal member, dan custom web application.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Kaluna Technology",
  },

  description: siteDescription,

  keywords: [
    "Kaluna Technology",
    "Web Engineering Jakarta",
    "Jasa Pembuatan Website Perusahaan",
    "Custom Web Applications",
    "Software House Jakarta",
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

  // NOTE: no canonical here. A root-level canonical is inherited by every
  // child route that does not override it and would point it to the homepage.
  // The homepage canonical lives in app/page.tsx.

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
        alt: "Kaluna Technology - Web Engineering & Digital Solutions",
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
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/seo/kaluna-logo-square.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const sitelinksNavigation = [
  {
    name: "Our Works",
    url: `${siteUrl}/works`,
    description: "Portofolio proyek, studi kasus, dan hasil rekayasa web Kaluna Technology.",
  },
  {
    name: "Our Services",
    url: `${siteUrl}/services`,
    description: "Layanan web engineering, sistem enterprise ERP, dan custom web application.",
  },
  {
    name: "Who We Are",
    url: `${siteUrl}/who-we-are`,
    description: "Profil Kaluna Technology, visi, tim software engineering, dan ekosistem Arsalynk.",
  },
  {
    name: "Contact Us",
    url: `${siteUrl}/contact`,
    description: "Konsultasi teknis, penawaran harga, dan diskusi kebutuhan proyek website bisnis.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#navigation`,
      name: "Kaluna Technology Main Navigation",
      numberOfItems: sitelinksNavigation.length,
      itemListElement: sitelinksNavigation.map((item, index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: item.name,
        url: item.url,
        description: item.description,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Kaluna Technology",
      alternateName: ["Kaluna Tech", "kalunatechnology.com", "Kaluna"],
      description: siteDescription,
      inLanguage: "id-ID",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      hasPart: sitelinksNavigation.map((item) => ({
        "@type": "WebPage",
        "@id": `${item.url}#webpage`,
        name: item.name,
        url: item.url,
        description: item.description,
      })),
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Kaluna Technology",
      alternateName: ["Kaluna Tech", "kalunatechnology.com"],
      url: `${siteUrl}/`,
      image: `${siteUrl}/seo/kaluna-logo-square.png`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/seo/kaluna-logo-square.png`,
        contentUrl: `${siteUrl}/seo/kaluna-logo-square.png`,
        width: 512,
        height: 512,
        caption: "Kaluna Technology",
      },
      description: siteDescription,
      email: "corporate@kalunatechnology.com",
      parentOrganization: {
        "@type": "Organization",
        "@id": "https://www.arsalynk.com/#organization",
        name: "Arsalynk",
        legalName: "PT Sinergi Muda Arsa",
        url: "https://www.arsalynk.com/",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Indonesia",
        },
      ],
      sameAs: [
        "https://www.instagram.com/kalunatechnology/",
        "https://www.linkedin.com/company/kalunatechnology/",
        "https://www.youtube.com/channel/UCovhihQGMo4m6IkkyUbU3bQ",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Menara Rajawali, 26th Floor, Jl. DR. Ide Anak Agung Gde Agung",
        addressLocality: "Jakarta Selatan",
        addressRegion: "DKI Jakarta",
        postalCode: "12950",
        addressCountry: "ID",
      },
      knowsAbout: [
        "Web Engineering",
        "Jasa Pembuatan Website Perusahaan",
        "E-Commerce Platform Development",
        "Member and Client Portal Development",
        "Custom Web Application Development",
        "Enterprise System Integration",
        "UI/UX Design",
        "SEO and Core Web Vitals",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Kaluna Technology Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Website Development",
              url: `${siteUrl}/services`,
              provider: { "@id": `${siteUrl}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Platform Development",
              url: `${siteUrl}/services`,
              provider: { "@id": `${siteUrl}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Application Development",
              url: `${siteUrl}/services`,
              provider: { "@id": `${siteUrl}/#organization` },
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      mainEntity: { "@id": `${siteUrl}/#organization` },
      inLanguage: "id-ID",
      hasPart: sitelinksNavigation.map((item) => ({
        "@type": "WebPage",
        "@id": `${item.url}#webpage`,
        name: item.name,
        url: item.url,
        description: item.description,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} style={{ backgroundColor: "#ffffff", color: "#171717" }}>
      <head>

        <link
          rel="preload"
          as="image"
          href="/image/projects/X-Tire/1.webp"
          fetchPriority="high"
        />
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
            `,
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