"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import LazyImage from "./LazyImage";

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  description: string;
  image_url: string;
  content_json?: string;
}

export default function OurServices({ services }: { services: ServiceData[] }) {
  const [activeIndex, setActiveIndex] = useState(services.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  
  // Card & Gap Dinamis Berdasarkan Breakpoint
  const [cardConfig, setCardConfig] = useState({
    cardWidth: 436,
    gap: 24,
    viewportOffset: 48, // Menentukan jarak awal kartu pertama dari tepi kiri kontainer
  });

  const isResetting = useRef(false);

  // Triple clone data untuk infinite loop
  const extendedServices = [...services, ...services, ...services];

  // Kalkulasi dimensi responsif dan offsetnya agar sejajar dengan konten header
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        // Desktop XL (sejajar dengan lg:px-12 yang bernilai 48px)
        setCardConfig({ cardWidth: 436, gap: 24, viewportOffset: 48 });
      } else if (width >= 1024) {
        // Desktop Standard (sejajar dengan lg:px-12 / 48px)
        setCardConfig({ cardWidth: 400, gap: 20, viewportOffset: 48 });
      } else if (width >= 768) {
        // Tablet (sejajar dengan md:px-6 / 24px)
        setCardConfig({ cardWidth: 340, gap: 20, viewportOffset: 24 });
      } else {
        // Mobile (sejajar dengan px-5 / 20px)
        setCardConfig({ cardWidth: 290, gap: 16, viewportOffset: 20 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const itemWidth = cardConfig.cardWidth + cardConfig.gap;

  // Track position sekarang murni digeser berdasarkan kalkulasi offset dinamis
  const trackPosition = -(activeIndex * itemWidth) + cardConfig.viewportOffset;

  const nextSlide = useCallback(() => {
    if (isResetting.current) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  const prevSlide = () => {
    if (isResetting.current) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex >= services.length * 2) {
      isResetting.current = true;
      setIsTransitioning(false);
      setActiveIndex(services.length);
      setTimeout(() => {
        isResetting.current = false;
      }, 50);
    } else if (activeIndex < services.length) {
      isResetting.current = true;
      setIsTransitioning(false);
      setActiveIndex(services.length * 2 - 1);
      setTimeout(() => {
        isResetting.current = false;
      }, 50);
    }
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [paused, nextSlide]);

  if (!services || services.length === 0) return null;

  return (
    <section className="bg-[#FAFAFA] py-20 md:py-0 overflow-hidden w-full">
      <div className="kaluna-wide-container">
        {/* 
          Container Utama diselaraskan dengan kelengkungan CTA (rounded-[24px]).
          PENTING: Di sini kita hanya menggunakan padding vertikal (py), sedangkan padding horizontal (px) 
          dihapus agar slider bisa meluncur menembus kontainer biru ke arah kanan tanpa terpotong.
        */}
        <div className="relative overflow-visible rounded-[24px] bg-[#EAF3FF] py-8 md:py-12 lg:py-16">
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          {/* Header tetap diberi padding manual agar sejajar sempurna dengan konten halaman */}
          <div className="mb-10 md:mb-14 px-5 md:px-[min(5vw,72px)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full"></span>
                  <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">
                    Our Service
                  </span>
                </div>
                <h2 className="text-[28px] md:text-[32px] font-medium lg:text-[32px] text-[#0D0D0D] tracking-tight leading-[1.15]">
                  What We Actually Do
                </h2>
              </div>

              {/* Tombol Navigasi Desktop */}
              <div className="hidden md:flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-[52px] h-[52px] rounded-full bg-white border border-[#D7E6F8] shadow-sm hover:bg-[#0E2A54] hover:text-white transition-colors duration-300 flex items-center justify-center group cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-[52px] h-[52px] rounded-full bg-[#0E2A54] text-white shadow-md hover:bg-[#163A70] transition-colors duration-300 flex items-center justify-center group cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* SLIDER VIEWPORT (Menggunakan overflow-visible agar card bisa keluar meluncur ke kanan layar) */}
          <div
            className="relative w-full pb-4 overflow-visible"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  : ""
              }`}
              style={{ 
                transform: `translateX(${trackPosition}px)`,
                gap: `${cardConfig.gap}px`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedServices.map((service, index) => {
                return (
                  <div
                    key={`${service.id}-${index}`}
                    onClick={() => {
                      setIsTransitioning(true);
                      setActiveIndex(index);
                    }}
                    className="relative flex-shrink-0 rounded-[18px] overflow-hidden group cursor-pointer"
                    style={{
                      width: `${cardConfig.cardWidth}px`,  
                      height: "386px",
                      boxShadow: "0 20px 60px rgba(14, 42, 84, 0.08)",
                    }}
                  >
                    <LazyImage
                      src={service.image_url}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/82 via-[#0A192F]/28 to-transparent" />

                    <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col h-full justify-end">
                      <h3 className="text-lg md:text-xl font-semibold leading-[1.15] mb-2 tracking-tight pr-14 group-hover:-translate-y-1.5 transition-transform duration-300">
                        {service.title.trim()}
                      </h3>

                      <Link
                        href={`/services/${service.slug}`}
                        className="w-11 h-11 bg-[#299EED] rounded-full flex items-center justify-center hover:bg-white hover:text-[#299EED] transition-all duration-300 absolute right-0 bottom-0 shadow-lg group-hover:-translate-y-1 group-hover:translate-x-[-2px]"
                      >
                        <ArrowRight size={18} strokeWidth={2.5} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kontrol Navigasi Mobile tetap memiliki padding agar tidak menempel di pojok layar */}
          <div className="flex md:hidden justify-center gap-4 mt-8 px-5">
            <button
              onClick={prevSlide}
              className="p-3.5 rounded-full bg-white border border-[#D7E6F8] shadow-sm text-[#0E2A54] hover:bg-[#0E2A54] hover:text-white transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3.5 rounded-full bg-[#0E2A54] text-white shadow-md hover:bg-[#163A70] transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}