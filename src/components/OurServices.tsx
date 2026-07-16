"use client";

import { useState, useEffect, useRef } from "react";
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
  const [activeIndex, setActiveIndex] = useState(services.length); // Start at middle copy
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(330);
  const isResetting = useRef(false);

  // Triple clone data to construct seamless infinite scroll loops
  const extendedServices = [...services, ...services, ...services];

  useEffect(() => {
    const updateWidth = () => {
      const isMobile = window.innerWidth < 768;
      // mobile: 280px card + 20px gap. desktop: 310px card + 20px gap.
      setCardWidth(isMobile ? 280 + 20 : 310 + 20);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextSlide = () => {
    if (isResetting.current) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

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

  // Autoplay handler with cleanup
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, 2500);
    return () => clearInterval(timer);
  }, [paused, activeIndex, services.length]);

  if (!services || services.length === 0) return null;

  return (
    <section className="bg-[#EAF3FF] py-20 md:py-28">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="kaluna-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full"></span>
              <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">
                Our Service
              </span>
            </div>
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px]  text-[#0E2A54] tracking-tight leading-[1.15]">
              What We Actually Do
            </h2>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3.5 rounded-full bg-white border border-[#D7E6F8] shadow-sm hover:bg-[#0E2A54] hover:text-white transition-colors duration-300 group cursor-pointer"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3.5 rounded-full bg-[#0E2A54] text-white shadow-md hover:bg-[#163A70] transition-colors duration-300 group cursor-pointer"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* SLIDER VIEWPORT */}
        <div
          className="relative overflow-hidden w-full pb-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`flex gap-5 ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
            style={{ transform: `translateX(-${activeIndex * cardWidth}px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedServices.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={`${service.id}-${index}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setActiveIndex(index);
                  }}
                  className="relative flex-shrink-0 w-[280px] md:w-[310px] h-[360px] rounded-[24px] overflow-hidden group shadow-md cursor-pointer"
                >
                  <LazyImage
                    src={service.image_url}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col h-full justify-end">
                    <h3 className="text-xl font-bold leading-snug mb-2 tracking-tight pr-14 group-hover:-translate-y-2 transition-transform duration-300">
                      {service.title.trim()}
                    </h3>

                    <Link
                      href={`/services/${service.slug}`}
                      className="w-10 h-10 bg-[#299EED] rounded-full flex items-center justify-center hover:bg-white hover:text-[#299EED] transition-colors duration-300 absolute right-0 bottom-0 shadow-lg"
                    >
                      <ArrowRight size={18} strokeWidth={2.5} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden justify-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="p-3.5 rounded-full bg-white border border-[#D7E6F8] shadow-sm text-[#0E2A54] hover:bg-[#0E2A54] hover:text-white active:bg-[#0E2A54] active:text-white transition-colors duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3.5 rounded-full bg-[#0E2A54] text-white shadow-md hover:bg-[#163A70] active:bg-[#163A70] transition-colors duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}