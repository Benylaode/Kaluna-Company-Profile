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
const siteTitle = "Kaluna Technology | Web Engineering & Digital Solutions";
const siteDescription =
  "Kaluna Technology adalah web engineering agency & penyedia jasa pembuatan website perusahaan profesional. Kami merancang dan membangun website company profile berkinerja tinggi, platform e-commerce, portal member, serta custom web application untuk bisnis dan perusahaan modern.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Kaluna Technology",
  },

  description: siteDescription,

  keywords: [
    // Brand & Company Identifiers
    "Kaluna Technology",
    "kalunatechnology",
    "kaluna",
    "Kaluna Tech",
    "Kaluna Technology Arsalynk",
    
    // Core Indonesian Web Builder & Development Keywords
    "Jasa Pembuatan Website",
    "Jasa Web Builder",
    "Jasa Pembuatan Website Perusahaan",
    "Jasa Bikin Website Jakarta",
    "Jasa Pembuatan Website Company Profile",
    "Jasa Web Application",
    "Jasa Pembuatan Toko Online E-Commerce",
    "Jasa Pembuatan Landing Page",
    "Jasa Web Developer Indonesia",
    "Software House Jakarta",
    "Web Agency Jakarta",
    "Jasa Website Bisnis Profesional",
    
    // English & International Keywords
    "Custom Web Development Agency",
    "Enterprise Web Engineering",
    "Corporate Website Builder",
    "Custom Web Application Development",
    "E-Commerce Platform Engineering",
    "Member Portal Development",
    "B2B Digital Web Agency",
    "Full-Stack Web Development Indonesia",
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
      inLanguage: "id-ID",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
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
      telephone: "+6282342939843",
      parentOrganization: {
        "@type": "Organization",
        "@id": "https://www.arsalynk.com/#organization",
        name: "Arsalynk",
        legalName: "PT Sinergi Muda Arsa",
        url: "https://www.arsalynk.com/",
      },
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
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
      hasPart: [
        { "@type": "WebPage", name: "Services", url: `${siteUrl}/services` },
        { "@type": "WebPage", name: "Our Works", url: `${siteUrl}/works` },
        { "@type": "WebPage", name: "Who We Are", url: `${siteUrl}/who-we-are` },
        { "@type": "WebPage", name: "Contact Us", url: `${siteUrl}/contact` },
      ],
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
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

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