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
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (logos.length <= 1) return;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIsFading(true);

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % logos.length);
          setIsFading(false);
        }, 500);
      }, 4000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [logos.length, delay]);

  const currentLogo = logos[currentIndex];

  return (
    <div
      className={`group flex-shrink-0 w-[150px] sm:w-[180px] md:w-[220px] h-[90px] md:h-[110px] flex items-center justify-center overflow-hidden transition-all duration-500 ${
        isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <img
        src={currentLogo.src}
        alt={currentLogo.name}
        className="
          w-[90%]
          h-[90%]
          object-contain
          transition-all
          duration-300
          ease-out
          group-hover:scale-110
          group-hover:-translate-y-1
          group-hover:drop-shadow-[0_8px_20px_rgba(30,136,229,0.18)]
        "
      />
    </div>
  );
};

export default function Clients() {
  const slot1 = [
    { name: "Mitra 1", src: "/image/mitra/1.png" },
    { name: "Mitra 6", src: "/image/mitra/6.png" },
  ];

  const slot2 = [
    { name: "Mitra 2", src: "/image/mitra/2.png" },
    { name: "Mitra 7", src: "/image/mitra/7.png" },
  ];

  const slot3 = [
    { name: "Mitra 3", src: "/image/mitra/3.png" },
  ];

  const slot4 = [
    { name: "Mitra 4", src: "/image/mitra/4.png" },
  ];

  const slot5 = [
    { name: "Mitra 5", src: "/image/mitra/5.png" },
  ];

  const slots = [slot1, slot2, slot3, slot4, slot5];

  return (
    <section className="bg-white py-12 md:py-16">
      {/* Heading */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-10 md:mb-14">
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#1E88E5] mb-3">
          <span className="w-1.5 h-4 rounded-full bg-[#1E88E5]" />
          OUR CLIENTS
        </div>

        <h2 className="text-center text-2xl md:text-3xl lg:text-[36px] font-bold text-[#0D2342] tracking-tight">
          Companies That Trust Our Solutions
        </h2>

        <p className="mt-3 text-center text-sm md:text-base text-gray-500 font-medium">
          We have collaborated with forward-thinking organizations across
          industries
        </p>
      </div>

      {/* Logo List */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 md:gap-x-14 md:gap-y-12">
          {slots.map((slotLogos, index) => (
            <LogoSlot
              key={index}
              logos={slotLogos}
              delay={index * 800}
            />
          ))}
        </div>
      </div>
    </section>
  );
}