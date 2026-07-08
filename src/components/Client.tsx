"use client";

import React, { useState, useEffect } from "react";

interface Logo {
  name: string;
  src: string;
}

const LogoSlot = ({
  logos,
  delay,
}: {
  logos: Logo[];
  delay: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    if (logos.length <= 1) return;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setFadeState("out");

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % logos.length);
          setFadeState("in");
        }, 1000); // 1 second fade out duration
      }, 5000); // switch every 5 seconds

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [logos.length, delay]);

  const currentLogo = logos[currentIndex];
  const hasImage = currentLogo.src && currentLogo.src.trim() !== "" && currentLogo.src !== "#";

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div
        className={`w-full h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${fadeState === "in"
          ? "opacity-100 scale-100 blur-0"
          : "opacity-0 scale-95 blur-[2px]"
          }`}
      >
        {hasImage ? (
          <img
            src={currentLogo.src}
            alt={currentLogo.name}
            className="max-h-[38px] lg:max-h-[44px] max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
            style={{
              filter: "drop-shadow(0px 0px 1.5px rgba(0,0,0,0.4)) drop-shadow(0px 6px 20px rgba(0,0,0,0.16))",
            }}
          />
        ) : (
          <span className="text-xs md:text-sm font-semibold text-[#0E2A54]/80 tracking-wide text-center uppercase">
            {currentLogo.name}
          </span>
        )}
      </div>
    </div>
  );
};

export default function Clients() {
  const slot1 = [
    { name: "Sinau Print", src: "/image/mitra/1.webp" },
    { name: "Suara Merdeka", src: "/image/mitra/6.webp" },
    { name: "Mitra 11", src: "/image/mitra/11.webp" },
  ];

  const slot2 = [
    { name: "Mitra 7", src: "/image/mitra/2.webp" },
    { name: "Mitra 7 Alternate", src: "/image/mitra/7.webp" },
    { name: "Mitra 12", src: "/image/mitra/12.webp" },
  ];

  const slot3 = [
    { name: "Plaza Ambarrukmo", src: "/image/mitra/3.webp" },
    { name: "Mitra 8", src: "/image/mitra/8.webp" },
    { name: "Mitra 13", src: "/image/mitra/13.webp" },
  ];

  const slot4 = [
    { name: "Miniso", src: "/image/mitra/4.webp" },
    { name: "Mitra 9", src: "/image/mitra/9.webp" },
    { name: "Mitra 14", src: "/image/mitra/14.webp" },
  ];

  const slot5 = [
    { name: "Artic Analytica", src: "/image/mitra/5.webp" },
    { name: "Mitra 10", src: "/image/mitra/10.webp" },
  ];

  const slots = [slot1, slot2, slot3, slot4, slot5];

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="kaluna-container mb-12 text-center flex flex-col items-center">
        <div className="flex items-center gap-2.5 mb-4 justify-center">
          <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full"></span>
          <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">
            Our Clients
          </span>
        </div>

        <h2 className="mt-2 text-[28px] font-bold leading-[1.2] tracking-[-0.015em] text-[#0E2A54] md:text-[36px] lg:text-[44px]">
          Companies That Trust Our Solutions
        </h2>

        <p className="mt-3 text-sm leading-[1.5] text-gray-500 md:text-base max-w-xl mx-auto">
          We have collaborated with forward-thinking organizations across industries
        </p>
      </div>

      <div className="w-full px-4 md:px-8">
        <div className="flex w-full gap-4 md:gap-6 overflow-x-auto hide-scrollbar justify-center items-center py-2">
          {slots.map((slotLogos, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[180px] sm:w-[200px] lg:w-[220px] h-[80px] sm:h-[90px] lg:h-[100px] flex items-center justify-center transition-all duration-300"
            >
              <LogoSlot
                logos={slotLogos}
                delay={index * 800}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}