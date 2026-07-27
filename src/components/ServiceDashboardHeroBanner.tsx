"use client";

import React from "react";
import Image from "next/image";

interface ServiceDashboardHeroBannerProps {
  title?: string;
  description?: string;
}

export default function ServiceDashboardHeroBanner({
  title,
  description
}: ServiceDashboardHeroBannerProps) {
  const displayDesc =
    description ||
    "We build end-to-end Enterprise Resource Planning solutions that unify your core operations into a single, intelligent platform.";

  return (
    <section
      className="group relative w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden select-none h-[60vh] min-h-[500px] max-h-[700px] lg:h-[60vh]"
      style={{
        background: "linear-gradient(180deg, #075B8C 0%, #064F7C 45%, #003B63 100%)",
      }}
    >
      {/* z-1: Diagonal Translucent Overlay Lines & Fields (Pure CSS) */}
      <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden">
        {/* Top Left Diagonal Accent Line */}
        <div className="absolute left-[-15%] top-[-45%] h-[1100px] w-[700px] rotate-45 border-r border-[#6BC4FF]/30" />

        {/* Center Diagonal Gradient Field */}
        <div className="absolute left-[38%] top-[-55%] h-[1200px] w-[520px] rotate-[-42deg] bg-gradient-to-b from-[#D2EDFF]/20 to-transparent blur-[1px]" />

        {/* Accent Soft Blue Fill Field */}
        <div className="absolute left-[20%] top-[5%] h-[900px] w-[500px] rotate-45 bg-[#2791D8]/10" />

        {/* Ambient Top Glow Filter */}
        <div className="absolute right-[20%] top-[-10%] w-[350px] h-[350px] bg-[#2791D8]/20 blur-[80px] rounded-full" />
      </div>

      {/* z-5: Large Transparent Decorative Panel behind Dashboard */}
      <div
        className={`
          pointer-events-none
          absolute
          right-[5%]
          top-[18%]
          z-5
          h-[90%]
          w-[58%]
          rounded-[36px]
          sm:rounded-[48px]
          lg:rounded-[55px]
          border
          border-[#9CD8FF]/25
          bg-[#00406C]/22
          backdrop-blur-[2px]
          panel-float
        `}
      />

      {/* z-10: Light Blue Rounded Panel coming from Bottom Right */}
      <div
        className={`
          pointer-events-none
          absolute
          bottom-[-15%]
          right-[-10%]
          z-10
          h-[220px]
          sm:h-[260px]
          w-[48%]
          rounded-[36px]
          sm:rounded-[48px]
          lg:rounded-[55px]
          border
          border-white/10
          bg-gradient-to-b
          from-[#D4EEFF]/90
          via-[#72AED3]/70
          to-[#07507F]/90
          blur-[0.3px]
          shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        `}
      />

      {/* z-20: ERP Dashboard Image (/image/banner-service.svg) */}
      <div
        className={`
          absolute
          right-[-6%]
          top-[6%]
          z-20
          h-[88%]
          w-[63%]
          hidden
          md:block
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.015]
          group-hover:-translate-x-3
          dashboard-float
        `}
      >
        <Image
          src="/image/benner/service.webp"
          alt="ERP dashboard interface"
          fill
          priority
          className="object-contain object-right-top"
        />
      </div>

      {/* z-30: Left Text & Info Content */}
      <div className="relative z-30 w-full h-full min-h-[380px] lg:min-h-0 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-7 sm:py-9 lg:py-10">
        <div className="flex flex-col justify-center items-start text-left max-w-[650px] w-full lg:w-[46%]">
          {/* Category Tag */}
          <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
            <span className="h-3 w-1 rounded-full bg-[#5DBCF5]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#5DBCF5] uppercase">
              Enterprise ERP Services
            </span>
          </div>

          {/* Main H1 Heading with Gradient Sub-text */}
          <h1
            className="font-bold text-white text-left tracking-[-0.04em] leading-[1.05]"
            style={{
              fontFamily: "Inter, Geist, Helvetica Neue, sans-serif",
              fontSize: "clamp(26px, 3.2vw, 50px)",
            }}
          >
            Trusted ERP
            <br />
            Partner for
            <br />
            <span className="bg-gradient-to-b from-[#C9EBFF] via-[#5DBCF5] to-[#1B9AED] bg-clip-text text-transparent">
              Your Enterprise.
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-white/95 font-normal mt-3.5 sm:mt-4 text-left leading-[1.3] max-w-[580px]"
            style={{
              fontSize: "clamp(13px, 1.15vw, 17px)",
            }}
          >
            {displayDesc}
          </p>
        </div>

        {/* Mobile Dashboard Image Display */}
        <div className="relative z-20 w-[115%] -ml-[7.5%] h-[240px] mt-6 md:hidden">
          <Image
            src="/image/benner/service.webp"
            alt="ERP dashboard interface"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* Embedded CSS Animations */}
      <style jsx global>{`
        @keyframes dashboardFloat {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-3px, -8px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes panelFloat {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-2px, -4px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .dashboard-float {
          animation: dashboardFloat 8s ease-in-out infinite alternate;
        }
        .panel-float {
          animation: panelFloat 10s ease-in-out infinite alternate;
        }
        @media (prefers-reduced-motion: reduce) {
          .dashboard-float,
          .panel-float {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
