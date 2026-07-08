"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    image_url: "/image/ourworkflow/1.png"
  },
  {
    id: 2,
    title: "Technical Analysis and Solution Planning",
    category: "Define integration scope & technology stack",
    image_url: "/image/ourworkflow/2.png"
  },
  {
    id: 3,
    title: "System Design and Prototyping",
    category: "Designing system flow before full deployment",
    image_url: "/image/ourworkflow/3.png"
  },
  {
    id: 4,
    title: "Development & System Integration",
    category: "Scalable & integrating platforms and devices",
    image_url: "/image/ourworkflow/4.png"
  },
  {
    id: 5,
    title: "Testing, Security and Performance",
    category: "Ensuring stability, security, and performance",
    image_url: "/image/ourworkflow/5.png"
  },
  {
    id: 6,
    title: "Deployment, Monitoring & Continuous Improvement",
    category: "Deploying, providing optimization and support",
    image_url: "/image/ourworkflow/6.png"
  }
];

const SLIDE_INTERVAL_MS = 2500;
const CARD_WIDTH_PX = 324;

export default function OurWorks() {
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

  const progressIndex = ((activeIndex % WORK_STEPS.length) + WORK_STEPS.length) % WORK_STEPS.length;
  const progress = (progressIndex / (WORK_STEPS.length - 1)) * 100;

  return (
    <section id="works-section" className="bg-[#FAFAFA] py-20 md:py-28">
      <style>{`
        .kaluna-diagonal {
          background: linear-gradient(135deg, #0B1E36 0%, #0D2342 40%, #1a3a6e 100%);
        }
        .blur-mask-extended {
          backdrop-filter: blur(4px);
          mask-image: linear-gradient(to right, transparent 0%, black 40px);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 40px);
        }
      `}</style>

      <div className="kaluna-wide-container">
        <div className="relative overflow-hidden rounded-[24px] kaluna-diagonal px-6 py-10 text-white md:px-12 md:py-16 lg:px-16 lg:py-20">

          {/* HEADER */}
          <div className="mb-8 flex items-center justify-between">
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
            className="relative overflow-hidden"
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
                    className={`group relative flex-shrink-0 w-[300px] h-[360px] rounded-[24px] p-3 transition-all duration-500 ${isActive
                      ? "bg-white text-[#0D0D0D] shadow-xl"
                      : "bg-[#253F69]/60 text-white"
                      }`}
                  >
                    <div className="h-[180px] overflow-hidden rounded-[16px]">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between pt-4 px-2 pb-1">
                      <div className="flex justify-between gap-3">
                        <h3 className={`text-[20px] leading-[1.3] ${isActive ? "font-semibold" : "font-normal"}`}>
                          {item.title}
                        </h3>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs bg-[#0E2A54] text-white">
                          {displayId}
                        </span>
                      </div>

                      <p className={`text-sm mt-2 ${isActive ? "text-[#555]" : "text-white/60"}`}>
                        {item.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MEKANISME OVERLAY BLUR TOTAL YANG DIMULAI TEPAT DI BELAKANG KOTAK PERTAMA */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 z-10 hidden rounded-r-[24px] md:block"
              style={{ left: "calc(300px + 24px)", right: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-[#1a3a6e] via-[#0D2342]/70 to-transparent opacity-80" />
              <div className="blur-mask-extended absolute inset-0 rounded-r-[24px]" />
            </div>

            {/* Versi Mobile Overlay Blur */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 z-10 block md:hidden"
              style={{ left: "calc(240px + 24px)", right: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-[#1a3a6e] via-[#0D2342]/70 to-transparent opacity-80" />
              <div className="blur-mask-extended absolute inset-0 rounded-r-[24px]" />
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-10 h-1 max-w-3xl bg-white/20 rounded-full relative">
            <div
              className="absolute left-0 top-0 h-full bg-[#299EED] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute -top-[14px] transition-all duration-300"
              style={{ left: `${progress}%` }}
            >
              <div className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#299EED]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}