"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LazyImage from "./LazyImage";

export interface WorkData {
  id: number;
  title: string;
  category: string;
  image_url: string;
}

const WORK_STEPS: WorkData[] = [
  {
    id: 1,
    title: "Discovery and Requirement Analysis",
    category: "Understanding business goals, target audience, and technical requirements",
    image_url: "/image/proses-service/1.jpg"
  },
  {
    id: 2,
    title: "Strategy and Information Architecture",
    category: "Structuring the website's content, user flow, and key features to ensure a clear navigation",
    image_url: "/image/proses-service/2.jpg"
  },
  {
    id: 3,
    title: "Designing The User Interface & Experience",
    category: "Designing interfaces & visual layouts that reflect the brand, ensuring usability in all devices",
    image_url: "/image/proses-service/3.jpg"
  },
  {
    id: 4,
    title: "Development and Integration",
    category: "Building product using modern stack, integrating systems, and ensuring performance",
    image_url: "/image/proses-service/4.jpg"
  },
  {
    id: 5,
    title: "Testing and Deployment",
    category: "Testing to ensure functionality & performance before deploying the website to live",
    image_url: "/image/proses-service/5.jpg"
  }
];

const SLIDE_INTERVAL_MS = 2500;
const CARD_WIDTH_PX = 324;

export default function OurProcese() {
  const [activeIndex, setActiveIndex] = useState(WORK_STEPS.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const isResetting = useRef(false);

  const extendedSteps = [...WORK_STEPS, ...WORK_STEPS, ...WORK_STEPS];

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
    if (activeIndex >= WORK_STEPS.length * 2) {
      isResetting.current = true;
      setIsTransitioning(false);
      setActiveIndex(WORK_STEPS.length);
      setTimeout(() => {
        isResetting.current = false;
      }, 50);
    } else if (activeIndex < WORK_STEPS.length) {
      isResetting.current = true;
      setIsTransitioning(false);
      setActiveIndex(WORK_STEPS.length * 2 - 1);
      setTimeout(() => {
        isResetting.current = false;
      }, 50);
    }
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, activeIndex]);

  // Perhitungan persentase progress bar (hanya untuk mengisi bar biru)
  const progressIndex = ((activeIndex % WORK_STEPS.length) + WORK_STEPS.length) % WORK_STEPS.length;
  const stepWidth = 100 / WORK_STEPS.length;
  const progress = progressIndex * stepWidth + stepWidth / 2;

  return (
    <section id="works-section" className="bg-[#FAFAFA] py-20 md:py-0">
      <style>{`
        .kaluna-diagonal {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #0E2A54 0%, #1F5DBA 153.91%);
        }

        .kaluna-graphic-k {
          position: absolute;
          left: -20px;
          top: 0;
          width: 70%;
          height: 100%;
          opacity: 0.5;
          pointer-events: none;
          z-index: 0;
        }

        .kaluna-graphic-k::before {
          content: "";
          position: absolute;
          left: -9%;
          top: -62%;
          width: 78%;
          height: 170%;
          background: #203560;
          transform: rotate(45deg);
          transform-origin: center;
        }

        .kaluna-graphic-k::after {
          content: "";
          position: absolute;
          left: -7%;
          top: 16%;
          width: 18%;
          height: 28%;
          background: #2C87B8;
          transform: rotate(45deg);
          transform-origin: center;
        }

        .kaluna-graphic-k span {
          position: absolute;
          left: 20%;
          top: 50%;
          width: 70%;
          height: 38%;
          background: #203560;
          transform: rotate(45deg);
          transform-origin: center;
          display: block;
        }

        .kaluna-right-linear {
          position: absolute;
          top: 0;
          right: 0;
          width: 84%;
          height: 100%;
          background: linear-gradient(270deg, #0E2A54 0%, rgba(14, 42, 84, 0) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .kaluna-right-linear-slider {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: calc(300px + 24px);
          background: linear-gradient(270deg, #0E2A54 0%, rgba(14, 42, 84, 0) 100%);
          pointer-events: none;
          z-index: 20;
        }
      `}</style>

      <div className="kaluna-wide-container">
        <div className="relative overflow-hidden rounded-[24px] kaluna-diagonal px-6 py-10 text-white md:px-6 md:py-16 lg:px-12 lg:py-20">
          <div className="kaluna-graphic-k">
            <span />
          </div>

          <div className="kaluna-right-linear" />

          {/* HEADER */}
          <div className="relative z-20 mb-8 flex items-center justify-between">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider">
              <span className="h-4 w-[3px] bg-[#299EED] rounded-full" />
              IMPLEMENTATION PROCESS
            </span>

            <div className="hidden md:flex gap-3">
              <button
                onClick={prevSlide}
                className="group flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-[#299EED] transition duration-300"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="group flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-[#299EED] transition duration-300"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* SLIDER */}
          <div
            className="relative z-10 overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={`flex gap-6 ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${activeIndex * CARD_WIDTH_PX}px)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSteps.map((item, index) => {
                const realIndex = index % WORK_STEPS.length;
                const isActive = index === activeIndex;
                const displayId = String(realIndex + 1).padStart(2, "0");

                return (
                  <div
                    key={`${item.id}-${index}`}
                    onClick={() => {
                      setIsTransitioning(true);
                      setActiveIndex(index);
                    }}
                    className={`group relative flex-shrink-0 w-[300px] h-[360px] rounded-[24px] p-3 transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "z-30 bg-white text-[#0D0D0D] shadow-xl"
                        : "z-10 bg-white/50 text-[#0E2A54]"
                    }`}
                  >
                    <div className="relative h-[180px] overflow-hidden rounded-[16px]">
                      <LazyImage
                        src={item.image_url}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {!isActive && (
                        <div className="absolute inset-0 bg-black/50" />
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between pt-4 px-2 pb-1">
                      <div className="flex justify-between gap-3">
                        <h3
                          className={`text-[20px] leading-[1.3] ${
                            isActive ? "font-semibold text-[#0E2A54]" : "font-normal text-[#0E2A54]"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs bg-[#0E2A54] text-white">
                          {displayId}
                        </span>
                      </div>

                      <p className="text-sm mt-2 text-[#3F3F3F]">
                        {item.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="kaluna-right-linear-slider" />
          </div>

          {/* PROGRESS BAR DENGAN PANAH PROGRES YANG DIKUNCI (STATIS) */}
          <div className="relative z-20 mt-10 max-w-3xl">
            {/* Jalur Progress - Lebar bar biru berubah mengikuti slide aktif */}
            <div className="h-[4px] rounded-full bg-[#304674]">
              <div
                className="h-full rounded-full bg-[#299EED] transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* Indikator Segitiga (Mati/Statis di bawah tengah-tengah card pertama) */}
            <div
              className="absolute -top-[10px]"
              style={{
                left: "144px", // Didapat dari: (Lebar Card 300px / 2) - 6px radius segitiga agar simetris
              }}
            >
              <div className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#299EED]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}