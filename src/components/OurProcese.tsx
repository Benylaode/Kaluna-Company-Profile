"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LazyImage from "./LazyImage";

export interface ProcessStep {
  id?: number | string;
  step?: string;
  title: string;
  desc?: string;
  category?: string;
  image_url?: string;
}

interface OurProceseProps {
  steps?: ProcessStep[];
  title?: string;
}

const DEFAULT_IMAGES = [
  "/image/proses-service/1.jpg",
  "/image/proses-service/2.jpg",
  "/image/proses-service/3.jpg",
  "/image/proses-service/4.jpg",
  "/image/proses-service/5.jpg",
];

const DEFAULT_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Business Architecture & Blueprinting",
    category:
      "Defining business objectives, gathering requirements, analyzing workflows, and creating a strategic solution blueprint.",
    image_url: "/image/proses-service/1.webp"
  },
  {
    id: 2,
    title: "UX/UI & System Workflow Prototyping",
    category:
      "Designing intuitive user experiences, visual interfaces, and interactive system workflows before development.",
    image_url: "/image/proses-service/2.webp"
  },
  {
    id: 3,
    title: "Agile Development & Integration",
    category:
      "Developing the solution using agile methodologies while integrating required systems, APIs, and business processes.",
    image_url: "/image/proses-service/3.webp"
  },
  {
    id: 4,
    title: "Security Audit, UAT & Quality Assurance",
    category:
      "Conducting security assessments, user acceptance testing, and comprehensive quality assurance to ensure reliability.",
    image_url: "/image/proses-service/4.webp"
  },
  {
    id: 5,
    title: "Deployment, Staff Training & Continuous Support",
    category:
      "Deploying the solution to production, training users, and providing ongoing maintenance, monitoring, and continuous support.",
    image_url: "/image/proses-service/5.webp"
  }
];

const SLIDE_INTERVAL_MS = 2500;
const CARD_WIDTH_PX = 320; // 300px card width + 20px gap

export default function OurProcese({ steps, title = "HOW WE DELIVER" }: OurProceseProps) {
  const stepsToUse = (steps && steps.length > 0)
    ? steps.map((s, idx) => ({
        id: s.id || idx + 1,
        title: s.title,
        category: s.desc || s.category || "",
        image_url: s.image_url || DEFAULT_IMAGES[idx % DEFAULT_IMAGES.length],
        step: s.step || String(idx + 1).padStart(2, "0")
      }))
    : DEFAULT_STEPS.map((s, idx) => ({
        id: s.id || idx + 1,
        title: s.title,
        category: s.desc || s.category || "",
        image_url: s.image_url || DEFAULT_IMAGES[idx % DEFAULT_IMAGES.length],
        step: s.step || String(idx + 1).padStart(2, "0")
      }));

  const totalStepsCount = stepsToUse.length;
  const [activeIndex, setActiveIndex] = useState(totalStepsCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const isResetting = useRef(false);

  const extendedSteps = [...stepsToUse, ...stepsToUse, ...stepsToUse];

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
  }, [paused, activeIndex, totalStepsCount]);

  const realActiveIndex = ((activeIndex % totalStepsCount) + totalStepsCount) % totalStepsCount;
  const stepWidth = 100 / totalStepsCount;
  const progress = realActiveIndex * stepWidth + stepWidth / 2;

  return (
    <section id="works-section" className="bg-[#FAFAFA] py-10 md:py-14 overflow-hidden">
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
          left: calc(300px + 20px);
          background: linear-gradient(270deg, #0E2A54 0%, rgba(14, 42, 84, 0) 100%);
          pointer-events: none;
          z-index: 20;
        }

        @keyframes fillProgress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }
      `}</style>

      <div className="kaluna-wide-container">
        <div className="relative overflow-hidden rounded-[24px] kaluna-diagonal px-5 py-7 text-white sm:px-8 sm:py-10 md:px-12 md:py-12">
          <div className="kaluna-graphic-k">
            <span />
          </div>

          <div className="kaluna-right-linear" />

          {/* HEADER */}
          <div className="relative z-20 mb-5 sm:mb-6 flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2.5 text-xs sm:text-xs font-semibold uppercase tracking-wider">
              <span className="h-4 w-[3px] bg-[#299EED] rounded-full" />
              {title}
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
                  className="group flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#299EED] hover:border-[#299EED] transition duration-300"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-4 sm:w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next step"
                  className="group flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#299EED] hover:border-[#299EED] transition duration-300"
                >
                  <ArrowRight className="h-4 w-4 sm:h-4 sm:w-4" />
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
              className={`flex gap-5 ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
              style={{
                transform: `translateX(-${activeIndex * CARD_WIDTH_PX}px)`,
              }}
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
                      flex h-[350px] w-[300px] flex-shrink-0 flex-col
                      overflow-hidden
                      rounded-[20px]
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
                    <div className="relative h-[175px] shrink-0 overflow-hidden rounded-[14px]">
                      <LazyImage
                        src={item.image_url}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />

                      {!isActive && (
                        <div className="absolute inset-0 bg-black/50" />
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-start px-2.5 pb-3 pt-3.5">
                      <div>
                        <div className="flex items-start justify-between gap-2.5">
                          <h3
                            className={`text-[16px] sm:text-[17px] leading-[1.35] ${
                              isActive
                                ? "font-semibold text-[#0E2A54]"
                                : "font-medium text-[#0E2A54]"
                            }`}
                          >
                            {item.title}
                          </h3>

                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0E2A54] text-[9.5px] font-medium text-white self-start mt-0.5">
                            {displayId}
                          </span>
                        </div>

                        <p className="mt-2 text-[12px] sm:text-[12.5px] leading-[1.55] text-[#4A4A4A]">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Progress bar tepat di sisi bawah card */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 z-20 h-[4px] bg-[#DCE3EA]">
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

          {/* PROGRESS BAR KESELURUHAN DENGAN PANAH PROGRES DI BAWAH SLIDER */}
          <div className="relative z-20 mt-7 max-w-3xl">
            {/* Jalur Progress - Lebar bar biru berubah mengikuti slide aktif */}
            <div className="h-[4px] rounded-full bg-[#304674]">
              <div
                className="h-full rounded-full bg-[#299EED] transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* Indikator Segitiga (Statis di bawah tengah-tengah card pertama) */}
            <div
              className="absolute -top-[10px]"
              style={{
                left: "144px", // (Lebar Card 300px / 2) - 6px radius segitiga
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