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
const siteTitle = "Kaluna Technology | Jasa Pembuatan Website & Custom Web Builder Agency";
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
    "PT Kaluna Teknologi",
    "PT SINERGI MUDA ARSA",
    "ARSALYNK",
    "arsalynk",
    
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
        alt: "Kaluna Technology - Jasa Pembuatan Website & Custom Web Builder Agency",
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
      alternateName: [
        "kalunatechnology",
        "kaluna",
        "Kaluna Tech",
        "PT Kaluna Teknologi",
        "kalunatechnology.com",
        "Kaluna Web Agency",
      ],
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
      alternateName: ["Kaluna Tech", "PT Kaluna Teknologi", "kalunatechnology"],
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
      telephone: "+6281234567890",
      priceRange: "$$",
      areaServed: [
        {
          "@type": "Country",
          name: "Indonesia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
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
      knowsAbout: [
        "Jasa Pembuatan Website",
        "Jasa Web Builder & Custom Web Engineering",
        "Jasa Pembuatan Website Perusahaan & Company Profile",
        "E-Commerce & Digital Retail Platform Development",
        "Client & Member Portal Architecture",
        "Custom Web Applications & Analytics Dashboards",
        "UI/UX Design & Next.js Development",
        "SEO Optimization & Core Web Vitals",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Jasa Pembuatan Website & Web Engineering",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Website Perusahaan (Corporate Website Builder)",
              description: "Custom high-performance corporate websites built to establish market authority, present company credibility, and drive qualified B2B inquiries.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Toko Online & E-Commerce Platform",
              description: "Scalable digital retail storefronts with seamless checkout flows, real-time product calculators, and automated payment gateway integrations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Landing Page & Marketing Web Hubs",
              description: "Campaign-focused landing page hubs engineered for maximum lead conversion, high speed, and flawless mobile responsiveness.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Portal Member & Client Portal",
              description: "Secure role-based member portals for exclusive service distribution, customer accounts, and partner engagement.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Custom Web Application & Dashboard Analytics",
              description: "Bespoke full-stack web applications, operational management portals, and interactive business analytics dashboards.",
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