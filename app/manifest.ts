import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kaluna Technology - Smart IoT System & Industrial Telemetry",
    short_name: "Kaluna Technology",
    description:
      "Smart IoT System, fleet telemetry, otomasi industri, dan manajemen sensor real-time untuk bisnis modern.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0E2A54",
    lang: "id",
    dir: "ltr",
    categories: ["business", "productivity", "technology"],
    icons: [
      { src: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { src: "/seo/kaluna-logo-square.png", sizes: "512x512", type: "image/png" },
    ],
    shortcuts: [
      {
        name: "Services",
        short_name: "Services",
        description: "Layanan Kaluna Technology",
        url: "/services",
        icons: [{ src: "/seo/kaluna-logo-square.png", sizes: "512x512" }],
      },
      {
        name: "Our Works",
        short_name: "Works",
        description: "Portofolio dan case studies Kaluna Technology",
        url: "/works",
        icons: [{ src: "/seo/kaluna-logo-square.png", sizes: "512x512" }],
      },
      {
        name: "Contact Us",
        short_name: "Contact",
        description: "Hubungi Kaluna Technology",
        url: "/contact",
        icons: [{ src: "/seo/kaluna-logo-square.png", sizes: "512x512" }],
      },
    ],
  };
}
