import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Lock Turbopack root to current project folder to fix parent lockfile detection
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  outputFileTracingRoot: path.resolve(process.cwd()),

  // Compression untuk semua response
  compress: true,

  // Strict mode untuk development
  reactStrictMode: true,

  // Tree-shaking & WebKit module optimization
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },

  images: {
    // Format modern: AVIF lebih kecil 50% dari WebP, WebP lebih kecil 30% dari JPEG
    formats: ["image/avif", "image/webp"],

    // Cache gambar di server selama 30 hari (default hanya 60 detik)
    minimumCacheTTL: 2592000,

    // Breakpoint ukuran device yang sesuai dengan desain Kaluna
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1440, 1920],

    // Ukuran gambar kecil (inline/thumbnail)
    imageSizes: [16, 32, 48, 64, 96, 128, 256],

    // Remote patterns yang diizinkan
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "kalunatechnology.com",
          },
        ],
        destination: "https://www.kalunatechnology.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;