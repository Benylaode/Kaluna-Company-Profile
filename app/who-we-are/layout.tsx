import type { Metadata } from "next";

const description =
  "Kenali Kaluna Technology (PT Kaluna Teknologi / ARSALYNK), agency jasa pembuatan website perusahaan, corporate web engineering, dan mitra transformasi digital modern di Jakarta.";

export const metadata: Metadata = {
  title: "Tentang Kami (Who We Are)",

  description,

  keywords: [
    "Kaluna Technology",
    "PT Kaluna Teknologi",
    "Tentang Kaluna Technology",
    "Web Engineering Agency",
    "Jasa Pembuatan Website Jakarta",
    "Jasa Web Builder Perusahaan",
    "Digital Growth Partner",
    "Enterprise Web Developers",
    "Tim Pembuat Website Perusahaan",
    "B2B Digital Agency Jakarta",
    "PT SINERGI MUDA ARSA",
    "ARSALYNK",
  ],

  alternates: {
    canonical: "/who-we-are",
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
    url: "/who-we-are",
    siteName: "Kaluna Technology",
    title: "Who We Are | Kaluna Technology",
    description,
    images: [
      {
        url: "/seo/kaluna-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Kaluna Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Kaluna Technology",
    description,
    images: ["/seo/kaluna-og.jpg"],
  },
};

export default function WhoWeAreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
