"use client";

import React, { useState, useEffect } from "react";

interface Logo {
  name: string;
  src: string;
}

const slots = [
  [
    { name: "BSP", src: "/image/mitra/2.webp" },
    { name: "ASPROG Jateng", src: "/image/mitra/17.webp" },
    { name: "Aliansea", src: "/image/mitra/1.webp" },
  ],
  [
    { name: "Suara Merdeka Generation", src: "/image/mitra/13.webp" },
    { name: "Presstasi", src: "/image/mitra/7.webp" },
    { name: "Catatanesia", src: "/image/mitra/3.webp" },
  ],
  [
    { name: "TOP TOY", src: "/image/mitra/16.webp" },
    { name: "SemarGo", src: "/image/mitra/10.webp" },
    { name: "CityLabNews", src: "/image/mitra/4.webp" },
  ],
  [
    { name: "Queen City Mall", src: "/image/mitra/15.webp" },
    { name: "X-1 Tire", src: "/image/mitra/14.webp" },
    { name: "Jateng View", src: "/image/mitra/6.webp" },
  ],
  [
    { name: "Sinau Print", src: "/image/mitra/11.webp" },
    { name: "Aliansea", src: "/image/mitra/1.webp" },
    { name: "Presstasi", src: "/image/mitra/7.webp" },
  ],
];

const allLogosList = [
  { name: "BSP", src: "/image/mitra/2.webp" },
  { name: "Suara Merdeka Generation", src: "/image/mitra/13.webp" },
  { name: "TOP TOY", src: "/image/mitra/16.webp" },
  { name: "Queen City Mall", src: "/image/mitra/15.webp" },
  { name: "Sinau Print", src: "/image/mitra/11.webp" },
  { name: "ASPROG Jateng", src: "/image/mitra/17.webp" },
  { name: "SemarGo", src: "/image/mitra/10.webp" },
  { name: "X-1 Tire", src: "/image/mitra/14.webp" },
  { name: "Aliansea", src: "/image/mitra/1.webp" },
  { name: "Catatanesia", src: "/image/mitra/3.webp" },
  { name: "CityLabNews", src: "/image/mitra/4.webp" },
  { name: "Jateng View", src: "/image/mitra/6.webp" },
  { name: "Presstasi", src: "/image/mitra/7.webp" },
];

const getLogoSizingPercent = (name: string, src: string) => {
  const n = name.toLowerCase();
  const s = src.toLowerCase();

  // Explicit branding heights as percentages of 220px card height
  if (n.includes("top toy") || s.includes("16.webp")) return "52%";
  if (n.includes("queen city") || s.includes("15.webp")) return "57%";
  if (n.includes("bsp") || s.includes("2.webp")) return "36%";

  // Other logos from the new 13-logo list
  if (n.includes("sinau print") || s.includes("11.webp")) return "23%";
  if (n.includes("suara merdeka") || s.includes("13.webp")) return "27%";
  if (n.includes("asprog") || s.includes("17.webp")) return "39%";
  if (n.includes("semargo") || s.includes("10.webp")) return "30%";
  if (n.includes("x-1") || s.includes("14.webp")) return "32%";
  if (n.includes("aliansea") || s.includes("1.webp")) return "25%";
  if (n.includes("catatanesia") || s.includes("3.webp")) return "35%";
  if (n.includes("citylabnews") || s.includes("4.webp")) return "28%";
  if (n.includes("jateng view") || s.includes("6.webp")) return "28%";
  if (n.includes("presstasi") || s.includes("7.webp")) return "30%";

  return "32%";
};

export default function Clients() {
  const [slotCurrentIndices, setSlotCurrentIndices] = useState([0, 0, 0, 0, 0]);
  const [isSlotLogoVisible, setIsSlotLogoVisible] = useState([true, true, true, true, true]);

  useEffect(() => {
    let isMounted = true;
    let timerId: NodeJS.Timeout;

    const runSequence = () => {
      // Step 1: Stay visible for 5 seconds (collectively)
      timerId = setTimeout(() => {
        if (!isMounted) return;

        // Step 2: Transition each slot sequentially from left to right (0 to 4)
        let currentSlot = 0;

        const transitionNextSlot = () => {
          if (currentSlot >= 5) {
            // End of sequence, repeat the cycle (stay visible for 5 seconds again)
            runSequence();
            return;
          }

          // 1. Fade out the current slot logo
          setIsSlotLogoVisible((prev) => {
            const next = [...prev];
            next[currentSlot] = false;
            return next;
          });

          // 2. Wait for fade-out (1s) + empty pause (2s) = 3s total
          timerId = setTimeout(() => {
            if (!isMounted) return;

            // Change the logo index for the current slot
            setSlotCurrentIndices((prev) => {
              const next = [...prev];
              next[currentSlot] = (next[currentSlot] + 1) % slots[currentSlot].length;
              return next;
            });

            // Start fade in for the new logo
            setIsSlotLogoVisible((prev) => {
              const next = [...prev];
              next[currentSlot] = true;
              return next;
            });

            // Wait for fade-in to complete (1s) before initiating transition for the next slot
            timerId = setTimeout(() => {
              if (!isMounted) return;

              currentSlot++;
              transitionNextSlot();

            }, 500); // 1s fade-in

          }, 1000); // 1s fade-out + 2s empty pause
        };

        transitionNextSlot();

      }, 5000); // 5 seconds stay time
    };

    runSequence();

    return () => {
      isMounted = false;
      clearTimeout(timerId);
    };
  }, []);

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20 overflow-hidden">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="kaluna-container mb-12 text-center flex flex-col items-center">
        <div className="flex items-center gap-2.5 mb-4 justify-center">
          <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full"></span>
          <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">
            Our Clients
          </span>
        </div>

        <h2 className="mt-2 text-[28px] font-medium leading-[1.2] tracking-[-0.015em] text-[#0E2A54] md:text-[36px] lg:text-[42px]">
          Companies That Trust Our Solutions
        </h2>

        <p className="mt-3 text-sm leading-[1.5] text-gray-500 md:text-[16px] max-w-xl mx-auto">
          We have collaborated with forward-thinking organizations across industries
        </p>
      </div>

      {/* Desktop & Tablet view: Slots transition layout with flexible non-wrapping horizontal saf */}
      <div className="hidden md:block w-full px-6 lg:px-8">
        <div className="flex flex-row justify-center items-center gap-4 lg:gap-5 w-full max-w-[1700px] mx-auto">
          {slots.map((slotLogos, index) => {
            const logoIndex = slotCurrentIndices[index];
            const logo = slotLogos[logoIndex];
            const hasImage = logo.src && logo.src.trim() !== "" && logo.src !== "#";
            const heightPercent = getLogoSizingPercent(logo.name, logo.src);
            const isVisible = isSlotLogoVisible[index];

            return (
              <div
                key={index}
                className="relative w-full aspect-[327/220] max-w-[327px] rounded-[18px] border border-[#EBEBEB] bg-white flex items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:border-[#299EED] hover:shadow-[0_10px_30px_rgba(41,158,237,0.08)]"
              >
                <div
                  className="absolute inset-0 m-auto flex items-center justify-center transition-opacity duration-[1000ms] ease-in-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {hasImage ? (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="object-contain"
                      style={{
                        height: heightPercent,
                        maxWidth: "85%",
                      }}
                    />
                  ) : (
                    <span className="text-xs md:text-sm font-semibold text-[#0E2A54]/80 tracking-wide text-center uppercase">
                      {logo.name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile view: Horizontal looping infinite marquee with mini-cards */}
      <div className="md:hidden w-full py-4 relative flex overflow-hidden">
        {/* Gradient blur effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        {/* Marquee Wrapper */}
        <div className="animate-marquee gap-12 items-center pl-12">
          {allLogosList.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 w-[160px] h-[100px] rounded-[12px] border border-[#EBEBEB] bg-white flex items-center justify-center px-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#299EED] hover:shadow-[0_5px_15px_rgba(41,158,237,0.08)]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="object-contain"
                style={{
                  height: `${getLogoSizingPercent(logo.name, logo.src)}`,
                  maxHeight: "50px",
                  maxWidth: "90%",
                }}
              />
            </div>
          ))}
          {allLogosList.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 w-[160px] h-[100px] rounded-[12px] border border-[#EBEBEB] bg-white flex items-center justify-center px-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#299EED] hover:shadow-[0_5px_15px_rgba(41,158,237,0.08)]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="object-contain"
                style={{
                  height: `${getLogoSizingPercent(logo.name, logo.src)}`,
                  maxHeight: "50px",
                  maxWidth: "90%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}