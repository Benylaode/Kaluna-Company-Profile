"use client";

import Magnetic from "./Magnetic";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate-wa-float">
      <Magnetic range={60} strength={0.4}>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block rounded-full focus:outline-none group focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
          aria-label="Contact Kaluna on WhatsApp"
        >
          {/* Animated pulse back ring */}
          <div className="absolute inset-0 rounded-full animate-wa-pulse bg-[#25D366]/30 z-0" />
          
          <img
            src="/Frame WA.webp"
            alt="WhatsApp"
            className="relative z-10 w-14 h-14 md:w-16 md:h-16 drop-shadow-2xl select-none pointer-events-none transition-transform duration-300 group-hover:scale-105 active:scale-95"
          />
        </a>
      </Magnetic>
    </div>
  );
}
