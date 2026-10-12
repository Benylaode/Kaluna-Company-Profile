"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WebKitBackgroundPreloader() {
  const router = useRouter();

  useEffect(() => {
    // 1. Prefetch ketersediaan rute utama Next.js di background
    const routesToPrefetch = ["/services", "/works", "/who-we-are", "/contact"];

    // Jalankan prefetch saat browser dalam posisi idle
    const runIdlePrefetch = () => {
      routesToPrefetch.forEach((route) => {
        try {
          router.prefetch(route);
        } catch {
          // Ignore prefetch error
        }
      });

      // 2. Preload banner gambar untuk navigasi cepat halaman berikutnya
      const criticalImages = [
        "/image/whoweare.webp",
        "/image/benner/service.webp",
      ];

      criticalImages.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(runIdlePrefetch);
      } else {
        setTimeout(runIdlePrefetch, 1000);
      }
    }
  }, [router]);

  return null;
}
