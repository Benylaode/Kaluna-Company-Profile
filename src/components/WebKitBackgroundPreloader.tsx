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

      // 2. Preload gambar-gambar utama untuk WebKit / Safari di background
      const criticalImages = [
        "/image/whoweare.webp",
        "/image/benner/service.webp",
        "/image/Hero/Default.webp",
        "/image/Hero/1.webp",
        "/image/Hero/2.webp",
        "/image/Hero/3.webp",
      ];

      criticalImages.forEach((src) => {
        const img = new Image();
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
