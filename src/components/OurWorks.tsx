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
    title: "Discovery and Requirement Mapping",
    category: "Systems engineered to evolve with your growth",
    image_url: "/image/ourworkflow/1.webp"
  },
  {
    id: 2,
    title: "Technical Analysis and Solution Planning",
    category: "Define integration scope & technology stack",
    image_url: "/image/ourworkflow/2.webp"
  },
  {
    id: 3,
    title: "System Design and Prototyping",
    category: "Designing system flow before full deployment",
    image_url: "/image/ourworkflow/3.webp"
  },
  {
    id: 4,
    title: "Development & System Integration",
    category: "Scalable & integrating platforms and devices",
    image_url: "/image/ourworkflow/4.webp"
  },
  {
    id: 5,
    title: "Testing, Security and Performance",
    category: "Ensuring stability, security, and performance",
    image_url: "/image/ourworkflow/5.webp"
  },
  {
    id: 6,
    title: "Deployment, Monitoring & Continuous Improvement",
    category: "Deploying, providing optimization and support",
    image_url: "/image/ourworkflow/6.webp"
  }
];

const SLIDE_INTERVAL_MS = 2500;
const CARD_WIDTH_PX = 324; // 300px card width + 24px gap

export default function OurWorks() {
  const totalStepsCount = WORK_STEPS.length;
  const [activeIndex, setActiveIndex] = useState(totalStepsCount);
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
    if (activeIndex >= totalStepsCount * 2) {
      isResetting.current = true;
      setIsTransitioning(false);
      setActiveIndex(totalStepsCount);
      setTimeout(() => {
        isResetting.current = false;
      }, 50);
    } else if (activeIndex < totalStepsCount) {
      isResetting.current = true;
      setIsTransitioning(false);
      setActiveIndex(totalStepsCount * 2 - 1);
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

  const realActiveIndex = ((activeIndex % totalStepsCount) + totalStepsCount) % totalStepsCount;
  const stepWidth = 100 / totalStepsCount;
  const progress = realActiveIndex * stepWidth + stepWidth / 2;

  return (
    <section id="works-section" className="bg-[#FAFAFA] py-12 md:py-16 overflow-hidden">
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

        @keyframes fillProgress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
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
        <div className="relative overflow-hidden rounded-[24px] kaluna-diagonal px-5 py-8 text-white sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div className="kaluna-graphic-k">
            <span />
          </div>

          <div className="kaluna-right-linear" />

          {/* HEADER */}
          <div className="relative z-20 mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2.5 text-xs sm:text-xs font-normal uppercase tracking-wider">
              <span className="h-4 w-[3px] bg-[#299EED] rounded-full" />
              HOW WE DELIVER TECHNOLOGY
            </span>

            {/* Stepper info & Navigation Arrows */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-white/80 tracking-widest hidden sm:inline-block">
                {String(realActiveIndex + 1).padStart(2, "0")} / {String(totalStepsCount).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous step"
                  className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#299EED] hover:border-[#299EED] transition duration-300"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next step"
                  className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#299EED] hover:border-[#299EED] transition duration-300"
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
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
                const realIndex = index % totalStepsCount;
                const isActive = index === activeIndex;
                const displayId = String(realIndex + 1).padStart(2, "0");

                return (
                  <div
                    key={`${item.id}-${index}`}
                    onClick={() => {
                      setIsTransitioning(true);
                      setActiveIndex(index);
                    }}
                    className={`
                      group relative
                      flex h-[360px] w-[300px] flex-shrink-0 flex-col
                      overflow-hidden
                      rounded-[24px]
                      p-3
                      transition-all duration-500
                      cursor-pointer
                      ${
                        isActive
                          ? "z-30 bg-white text-[#0D0D0D] shadow-xl"
                          : "z-10 bg-white/50 text-[#0E2A54]"
                      }
                    `}
                  >
                    {/* IMAGE */}
                    <div className="relative h-[180px] shrink-0 overflow-hidden rounded-[16px]">
                      <LazyImage
                        src={item.image_url}
                        alt={item.title}
                        className="
                          h-full w-full object-cover
                          transition duration-700
                          group-hover:scale-105
                        "
                      />

                      {!isActive && (
                        <div className="absolute inset-0 bg-black/50" />
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col justify-between px-2 pb-3 pt-4">
                      <div>
                        <div className="flex justify-between gap-3">
                          <h3
                            className={`
                              text-[20px] leading-[1.3]
                              ${
                                isActive
                                  ? "font-semibold text-[#0E2A54]"
                                  : "font-normal text-[#0E2A54]"
                              }
                            `}
                          >
                            {item.title}
                          </h3>

                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E2A54] text-[10px] font-medium text-white">
                            {displayId}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-[1.5] text-[#3F3F3F]">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Progress bar tepat di sisi bawah card */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 z-20 h-[5px] bg-[#DCE3EA]">
                        <div
                          key={`progress-${activeIndex}`}
                          className="h-full bg-[#299EED]"
                          style={{
                            animation: `fillProgress ${SLIDE_INTERVAL_MS}ms linear forwards`,
                            animationPlayState: paused ? "paused" : "running"
                          }}
                        />
                      </div>
                    )}
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
                left: "144px", // (Lebar Card 300px / 2) - 6px radius segitiga agar simetris
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