"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ContactPopup from "./ContactPopup";

export interface ValueItem {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  highlights: string[];
}

const valueItems: ValueItem[] = [
  {
    id: 1,
    title: "Tailored Business-First Architecture",
    subtitle: "Engineered Around Your Proven Workflows",
    desc: "We do not force rigid off-the-shelf software onto your business. We engineer custom ERP workflows around your existing, proven operational model.",
    image: "/image/service/1.svg",
    highlights: [
      "Custom business logic & module mapping",
      "Zero compromise on your core operations",
      "Tailored user permissions & roles",
    ],
  },
  {
    id: 2,
    title: "Seamless Legacy & Third-Party Integration",
    subtitle: "Unified Platform Without Breaking Historical Data",
    desc: "We bridge your new ERP with existing tools, databases, and hardware—ensuring a unified platform without breaking historical data.",
    image: "/image/service/2.svg",
    highlights: [
      "REST & SOAP API gateways",
      "Bi-directional database sync",
      "Hardware, IoT & POS device links",
    ],
  },
  {
    id: 3,
    title: "Enterprise-Grade Security & Governance",
    subtitle: "Strict RBAC, Encryption & Full Audit Trail",
    desc: "Built with strict role-based access control (RBAC), end-to-end encryption, and full audit logs to keep sensitive business records protected.",
    image: "/image/service/3.svg",
    highlights: [
      "Granular RBAC down to field-level",
      "AES-256 data encryption at rest & in transit",
      "Immutable system audit logs",
    ],
  },
  {
    id: 4,
    title: "High Scalability without Licensing Lock-In",
    subtitle: "Grow Effortlessly Without Per-User Fees",
    desc: "As your order volume, user count, or locations grow, our modular system scales effortlessly without per-user penalty fees.",
    image: "/image/service/4.svg",
    highlights: [
      "100% IP ownership for your business",
      "Zero per-user monthly licensing fees",
      "Cloud-native microservice architecture",
    ],
  },
  {
    id: 5,
    title: "Real-Time Operational Analytics",
    subtitle: "Actionable Executive Dashboards & Insights",
    desc: "Built-in reporting dashboards convert scattered operational metrics into actionable insights for instant executive decision-making.",
    image: "/image/service/5.svg",
    highlights: [
      "Real-time cash flow & inventory metrics",
      "Automated automated KPI reports",
      "Customizable executive widgets",
    ],
  },
  {
    id: 6,
    title: "Dedicated Ongoing Support",
    subtitle: "Continuous Optimization & Long-Term Partnership",
    desc: "We stay by your side long after go-live with continuous maintenance, performance optimization, and custom module developments.",
    image: "/image/service/6.webp",
    highlights: [
      "SLA-backed technical support",
      "Proactive cloud health monitoring",
      "Ongoing feature & module upgrades",
    ],
  },
];

export default function ServiceValueSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const slideDuration = 4000;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? valueItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === valueItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === valueItems.length - 1 ? 0 : prev + 1));
    }, slideDuration);
    return () => clearInterval(timer);
  }, []);

  const activeItem = valueItems[activeIndex];

  return (
    <>
      <section className="relative overflow-hidden bg-[#0E2A54] py-14 md:py-20 text-white">
        <style>{`
          @keyframes fillProgress { 0% { width: 0%; } 100% { width: 100%; } }
          @keyframes floatUp { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
          @keyframes heroReveal {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .kaluna-solution-animate-title {
            animation: heroReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .kaluna-solution-animate-text {
            animation: heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
            opacity: 0;
          }
        `}</style>

        {/* Full Background Card Layout matching reference (16:9 Aspect Ratio) */}
        <div className="kaluna-container">
          <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-[#0E2A54]">
            
            {/* Full background images */}
            {valueItems.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                  index === activeIndex ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
                }`}
              />
            ))}

            {/* Subtle left-side dark gradient overlay for text readability */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(14,42,84,0.85)_0%,rgba(14,42,84,0.45)_50%,rgba(14,42,84,0)_80%)] md:w-[65%]"
            />

            {/* Content Container: Left-Aligned Text */}
            <div className="relative z-10 max-w-[680px] lg:w-[55%]">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
                <span className="h-4 w-[2.5px] bg-[#299EED] rounded-full" />
                <span className="text-xs font-semibold tracking-wider text-[#D6ECFF] uppercase">
                  The Kaluna Solution
                </span>
              </div>

              <h2
                key={`title-${activeIndex}`}
                className="kaluna-solution-animate-title text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold leading-[1.1] tracking-[-0.035em] text-white"
              >
                {activeItem.title}
              </h2>

              <p
                key={`desc-${activeIndex}`}
                className="kaluna-solution-animate-text mt-4 sm:mt-6 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.55] text-white/90 max-w-[540px]"
              >
                {activeItem.desc}
              </p>
            </div>

            {/* Bottom Controls & Slide Counter */}
            <div className="relative z-10 mt-10 sm:mt-12 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-[13px] font-bold tracking-[0.08em] text-white/70">
                <button
                  onClick={handlePrev}
                  className="transition-colors hover:text-white cursor-pointer flex items-center gap-2 uppercase text-[12px] py-1"
                >
                  <span className="font-mono">&lt;</span> PREVIOUS
                </button>
                <button
                  onClick={handleNext}
                  className="transition-colors hover:text-white cursor-pointer flex items-center gap-2 uppercase text-[12px] py-1"
                >
                  NEXT SOLUTION <span className="font-mono">&gt;</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-white/80 tracking-widest font-mono">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(valueItems.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex h-[4px] w-full bg-white/20">
              {valueItems.map((_, index) => (
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
        </div>

        {/* Sub-banner CTA Box */}
        <div className="kaluna-container mt-8 md:mt-12">
          <div className="rounded-[20px] bg-gradient-to-r from-[#299EED] to-[#0E2A54] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/20">
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Ready to modernize your business operations?
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-blue-100 font-normal">
                Connect with our lead system architect for a tailored ERP roadmap.
              </p>
            </div>

            <button
              onClick={() => setIsContactOpen(true)}
              className="flex-shrink-0 group inline-flex items-center gap-3 bg-white text-[#0E2A54] hover:bg-[#0E2A54] hover:text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>Schedule an ERP Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
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
