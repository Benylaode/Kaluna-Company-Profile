"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ContactPopup from "./ContactPopup";

export interface WhoWeAreProblemItem {
  id: number;
  title: string;
  description: string;
  iconImg: string;
  tag: string;
}

const problemItems: WhoWeAreProblemItem[] = [
  {
    id: 1,
    title: "Integrated Management Platform",
    description:
      "Building unified management platforms that integrate core business processes into a single, reliable source of truth.",
    iconImg: "/image/Problem/1.svg",
    tag: "Core Architecture",
  },
  {
    id: 2,
    title: "Workflow Automation",
    description:
      "Eliminating manual data entry and administrative bottlenecks with automated, error-free cross-departmental workflows.",
    iconImg: "/image/Problem/2.svg",
    tag: "Process Automation",
  },
  {
    id: 3,
    title: "System Integration",
    description:
      "Connecting legacy software, databases, hardware, and APIs into one cohesive ecosystem for seamless communication.",
    iconImg: "/image/Problem/3.svg",
    tag: "Ecosystem Sync",
  },
  {
    id: 4,
    title: "Data-Driven Operations",
    description:
      "Converting operational data into real-time executive dashboards to enable proactive, insight-driven decision making.",
    iconImg: "/image/Problem/4.svg",
    tag: "Executive Analytics",
  },
];

export default function WhoWeAreProblemWeSolve() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const slideDuration = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === problemItems.length - 1 ? 0 : prev + 1));
    }, slideDuration);
    return () => clearInterval(timer);
  }, []);

  const activeItem = problemItems[activeIndex];

  return (
    <>
      <section className="w-full bg-[#FAFAFA] py-14 sm:py-20 lg:py-24 border-t border-gray-100">
        <style>{`
          @keyframes fillProgress { 0% { width: 0%; } 100% { width: 100%; } }
          @keyframes heroReveal {
            0% { opacity: 0; transform: translateY(16px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .problem-animate-title {
            animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .problem-animate-text {
            animation: heroReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
            opacity: 0;
          }
        `}</style>

        <div className="kaluna-container">
          {/* Section Header */}
          <div className="mx-auto max-w-[800px] text-center mb-10 lg:mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[15px] w-[3px] shrink-0 rounded-full bg-[#299EED]" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.035em] text-[#0E2A54]">
                PROBLEM WE SOLVE
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-medium text-[#111111] tracking-[-0.025em] leading-[1.15]">
              Optimizing Business Workflows<br className="hidden sm:block" /> Through Integrated ERP Solutions
            </h2>
          </div>

          {/* Featured Dark Vector Artwork Card (Exact Match to Our Services design) */}
          <div className="relative rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl overflow-hidden min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-[#000000]">
            
            {/* SVG Vector Backdrop */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <svg
                className="h-full w-full object-cover"
                viewBox="0 0 1600 800"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="whoweare-problem-bg-grad"
                    x1="800"
                    y1="0"
                    x2="800"
                    y2="800"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#002843" />
                    <stop offset="1" stopColor="#000000" />
                  </linearGradient>

                  <linearGradient
                    id="whoweare-problem-diag-grad"
                    x1="800"
                    y1="-200"
                    x2="800"
                    y2="1000"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#299EED" stopOpacity="0.18" />
                    <stop offset="0.6" stopColor="#002843" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#000000" />
                  </linearGradient>

                  <filter
                    id="whoweare-problem-shadow-1"
                    x="-320"
                    y="-1200"
                    width="2350"
                    height="2350"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="30" dy="4" />
                    <feGaussianBlur stdDeviation="30" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0039 0 0 0 0 0.1568 0 0 0 0 0.2627 0 0 0 1 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>

                  <filter
                    id="whoweare-problem-shadow-2"
                    x="600"
                    y="-230"
                    width="1250"
                    height="1200"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="20" />
                    <feGaussianBlur stdDeviation="30" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0.1568 0 0 0 0 0.2627 0 0 0 1 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>
                </defs>

                <rect width="1600" height="800" fill="url(#whoweare-problem-bg-grad)" />

                <g opacity="0.85" filter="url(#whoweare-problem-shadow-1)">
                  <path
                    d="M956.593 84.215L1946.85 1073.9C1953.56 1080.6 1948.85 1092 1939.33 1092H863.234C851.241 1092 839.719 1087.18 831.135 1078.72L-271.532 -23.4261C-274.354 -26.2465 -276 -30.1244 -276 -34.1198V-1129.45C-276 -1136.15 -267.887 -1139.56 -263.066 -1134.74L283.799 -588.19L284.034 -587.955L844.069 -28.1266L956.593 84.3325V84.215Z"
                    fill="url(#whoweare-problem-diag-grad)"
                  />
                </g>

                <g filter="url(#whoweare-problem-shadow-2)">
                  <path
                    d="M1175.13 415.498L683.562 907.012C680.235 910.339 682.57 916 687.297 916H1221.48C1227.43 916 1233.15 913.607 1237.41 909.405L1784.78 362.04C1786.18 360.639 1787 358.714 1787 356.729V-187.251C1787 -190.578 1782.97 -192.27 1780.58 -189.877L1509.11 81.5584L1509 81.675L1230.99 359.706L1175.13 415.557V415.498Z"
                    fill="#002843"
                    fillOpacity="0.45"
                  />
                </g>
              </svg>

              {/* Left Text Contrast Mask */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,40,67,0.35)_50%,rgba(0,0,0,0)_80%)]"
              />
            </div>

            {/* Content Area */}
            <div className="relative z-10 max-w-[680px] lg:w-[55%]">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
                <span className="h-4 w-[2.5px] bg-[#299EED] rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#75C8FF]">
                  {activeItem.tag}
                </span>
              </div>

              <h3
                key={`title-${activeItem.id}`}
                className="problem-animate-title text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold leading-[1.1] tracking-[-0.035em] text-white"
              >
                {activeItem.title}
              </h3>

              <p
                key={`desc-${activeItem.id}`}
                className="problem-animate-text mt-4 sm:mt-6 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.55] text-white/90 max-w-[540px]"
              >
                {activeItem.description}
              </p>
            </div>

            {/* Bottom Action Bar */}
            <div className="relative z-10 mt-8 sm:mt-10 flex items-center justify-between">
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-3 text-sm sm:text-base font-semibold text-white hover:text-[#75C8FF] transition-all cursor-pointer group"
              >
                <span className="h-4 w-[2.5px] bg-white group-hover:bg-[#299EED] rounded-full group-hover:scale-y-125 transition-transform" />
                <span>Learn more &gt;</span>
              </button>

              <span className="text-xs font-medium text-white/80 tracking-widest font-mono">
                0{activeIndex + 1} / 0{problemItems.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex h-[4px] w-full bg-white/20">
              {problemItems.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative h-full flex-1 cursor-pointer"
                >
                  {index === activeIndex && (
                    <div
                      className="absolute left-0 top-0 h-full bg-[#299EED]"
                      style={{ animation: `fillProgress ${slideDuration}ms linear forwards` }}
                    />
                  )}
                  {index < activeIndex && (
                    <div className="absolute left-0 top-0 h-full w-full bg-[#299EED]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Cards Grid below main banner */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {problemItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group text-left rounded-[20px] p-6 transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#0E2A54] text-white border-[#299EED] shadow-xl scale-[1.01]"
                      : "bg-[#EAF3FF] text-[#0E2A54] border-[#DCEEFF] hover:bg-white hover:shadow-lg hover:border-[#299EED]/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-[12px] transition-colors ${
                          isActive
                            ? "bg-[#299EED] text-white"
                            : "bg-white text-[#0E2A54] group-hover:bg-[#0E2A54] group-hover:text-white"
                        }`}
                      >
                        <img
                          src={item.iconImg}
                          alt={item.title}
                          className="h-[22px] w-[22px] object-contain"
                        />
                      </div>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          isActive
                            ? "bg-white/10 text-[#75C8FF] border-white/20"
                            : "bg-white/80 text-[#0E2A54] border-[#D7E6F8]"
                        }`}
                      >
                        Solution 0{idx + 1}
                      </span>
                    </div>

                    <h4
                      className={`text-[16px] sm:text-[17px] font-semibold leading-[1.3] tracking-tight ${
                        isActive ? "text-white" : "text-[#0E2A54] group-hover:text-[#299EED]"
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-semibold opacity-80">
                    <span>Problem 0{idx + 1}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View Detail</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
