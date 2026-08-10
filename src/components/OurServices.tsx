"use client";

import React, { useId, useMemo, useState, useRef } from "react";
import { Building2, ShoppingCart } from "lucide-react";

export interface ServiceData {
  id?: number;
  slug?: string;
  title?: string;
  description?: string;
  image_url?: string;
  content_json?: string;
}

// Sparkle Icon (4-point diamond star with smaller accent stars) matching input_file_0.png
function SparkleIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M32 4C32 19.464 19.464 32 4 32C19.464 32 32 44.536 32 60C32 44.536 44.536 32 60 32C44.536 32 32 19.464 32 4Z"
        fill="#38A0FF"
      />
      <path
        d="M50 8C50 12.418 46.418 16 42 16C46.418 16 50 19.582 50 24C50 19.582 53.582 16 58 16C53.582 16 50 12.418 50 8Z"
        fill="#75C8FF"
      />
      <path
        d="M16 42C16 44.761 13.761 47 11 47C13.761 47 16 49.239 16 52C16 49.239 18.239 47 21 47C18.239 47 16 44.761 16 42Z"
        fill="#75C8FF"
      />
    </svg>
  );
}

function BackgroundArtwork({ idPrefix }: { idPrefix: string }) {
  const backgroundGradientId = `${idPrefix}-bg`;
  const diagonalGradientId = `${idPrefix}-diag`;


  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1830 889"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={backgroundGradientId}
          x1="915"
          y1="0"
          x2="915"
          y2="889"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#004A7C" />
          <stop offset="1" stopColor="#003456" />
        </linearGradient>

        <linearGradient
          id={diagonalGradientId}
          x1="783"
          y1="-210"
          x2="783"
          y2="1407"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2EDFF" stopOpacity="0" />
          <stop offset="1" stopColor="#003F69" />
        </linearGradient>

      </defs>

      <rect width="1830" height="889" rx="24" fill={`url(#${backgroundGradientId})`} />

      <path
        d="M696.287 521.085L-21.7188 -196.872C-26.5781 -201.731 -23.168 -210 -16.2625 -210H763.978C772.674 -210 781.029 -206.505 787.252 -200.367L1586.76 599.172C1588.81 601.218 1590 604.031 1590 606.929V1401.52C1590 1406.38 1584.12 1408.86 1580.62 1405.36L1184.11 1008.87L1183.94 1008.7L777.875 602.582L696.287 521V521.085Z"
        fill={`url(#${diagonalGradientId})`}
        opacity="0.45"
      />

      <path
        d="M797.656 506.68L1556.59 -252.125C1561.73 -257.26 1558.12 -266 1550.82 -266H726.106C716.914 -266 708.083 -262.306 701.505 -255.819L-143.576 589.21C-145.738 591.372 -147 594.346 -147 597.409V1437.21C-147 1442.35 -140.782 1444.96 -137.088 1441.27L282.029 1022.22L282.209 1022.04L711.418 592.814L797.656 506.59V506.68Z"
        fill="#2791D8"
        opacity="0.14"
      />
    </svg>
  );
}

function PodiumArtwork({
  idPrefix,
  parallaxX = 0,
  parallaxY = 0,
}: {
  idPrefix: string;
  parallaxX?: number;
  parallaxY?: number;
}) {
  const backBodyGradientId = `${idPrefix}-back-body`;
  const backTopGradientId = `${idPrefix}-back-top`;
  const frontBodyGradientId = `${idPrefix}-front-body`;
  const frontTopGradientId = `${idPrefix}-front-top`;
  const backIconGradientId = `${idPrefix}-back-icon`;
  const frontIconGradientId = `${idPrefix}-front-icon`;
  const backGlowId = `${idPrefix}-back-glow`;
  const frontGlowId = `${idPrefix}-front-glow`;
  const iconShadowId = `${idPrefix}-icon-shadow`;

  return (
    <svg
      className="h-full w-full overflow-visible"
      viewBox="950 180 880 709"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="3D ERP podium artwork"
      role="img"
    >
      <defs>
        <linearGradient
          id={backBodyGradientId}
          x1="1249.5"
          y1="577.158"
          x2="1249.5"
          y2="1126"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002741" />
          <stop offset="1" stopColor="#005188" />
        </linearGradient>

        <linearGradient
          id={backTopGradientId}
          x1="1249.29"
          y1="475.925"
          x2="1249.29"
          y2="678.415"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#005188" />
          <stop offset="1" stopColor="#002741" />
        </linearGradient>

        <linearGradient
          id={frontBodyGradientId}
          x1="1601.5"
          y1="488"
          x2="1601.5"
          y2="1028"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#299EED" />
          <stop offset="1" stopColor="#003F69" />
        </linearGradient>

        <linearGradient
          id={frontTopGradientId}
          x1="1601.29"
          y1="386"
          x2="1601.29"
          y2="590.024"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#299EED" />
          <stop offset="1" stopColor="#003F69" />
        </linearGradient>

        <linearGradient
          id={backIconGradientId}
          x1="1190"
          y1="330"
          x2="1260"
          y2="555"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#299EED" />
        </linearGradient>

        <linearGradient
          id={frontIconGradientId}
          x1="1570"
          y1="205"
          x2="1640"
          y2="475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#299EED" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>

        <filter
          id={backGlowId}
          x="1110.8"
          y="511.8"
          width="234.4"
          height="97.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="15.1" />
        </filter>

        <filter
          id={frontGlowId}
          x="1486.19"
          y="421.856"
          width="231.467"
          height="109.205"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="15.1" />
        </filter>

        <filter
          id={iconShadowId}
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow
            dx="12"
            dy="14"
            stdDeviation="10"
            floodColor="#002A47"
            floodOpacity="0.56"
          />
        </filter>
      </defs>

      <g
        transform={`translate(${parallaxX} ${parallaxY})`}
        className="transition-transform duration-500 ease-out"
      >
        {/* Back podium: Left cylinder with Building icon */}
        <rect
          x="1021"
          y="577.158"
          width="457"
          height="548.842"
          fill={`url(#${backBodyGradientId})`}
        />

        <ellipse
          cx="1249.286"
          cy="577.17"
          rx="228.286"
          ry="101.245"
          fill={`url(#${backTopGradientId})`}
        />

        <g filter={`url(#${backGlowId})`}>
          <ellipse cx="1228" cy="560.5" rx="87" ry="18.5" fill="#2791D8" />
        </g>

        <g className="service-podium-icon service-podium-icon--secondary">
          <Building2
            x="1136"
            y="346"
            width="210"
            height="210"
            stroke="#003F69"
            strokeWidth={1.45}
            opacity={0.55}
            aria-hidden="true"
          />
          <Building2
            x="1122"
            y="332"
            width="210"
            height="210"
            stroke={`url(#${backIconGradientId})`}
            strokeWidth={1.45}
            filter={`url(#${iconShadowId})`}
            aria-hidden="true"
          />
        </g>

        {/* Front podium: Right cylinder with ShoppingCart icon */}
        <rect
          x="1373"
          y="488"
          width="457"
          height="540"
          fill={`url(#${frontBodyGradientId})`}
        />

        <ellipse
          cx="1601.286"
          cy="488.012"
          rx="228.286"
          ry="102.012"
          fill={`url(#${frontTopGradientId})`}
        />

        <g filter={`url(#${frontGlowId})`}>
          <ellipse
            cx="1601.93"
            cy="476.458"
            rx="87"
            ry="18.5"
            transform="rotate(-10.7887 1601.93 476.458)"
            fill="#004A7C"
          />
        </g>

        <g className="service-podium-icon service-podium-icon--active">
          <ShoppingCart
            x="1495"
            y="240"
            width="235"
            height="235"
            stroke="#004A7C"
            strokeWidth={1.35}
            opacity={0.62}
            aria-hidden="true"
          />
          <ShoppingCart
            x="1478"
            y="222"
            width="235"
            height="235"
            stroke={`url(#${frontIconGradientId})`}
            strokeWidth={1.35}
            filter={`url(#${iconShadowId})`}
            aria-hidden="true"
          />
        </g>
      </g>
    </svg>
  );
}

export default function OurServices({ services }: { services?: ServiceData[] }) {
  const reactId = useId();
  const idPrefix = useMemo(
    () => `our-services-${reactId.replace(/:/g, "")}`,
    [reactId]
  );

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const parallaxX = 0;
  const parallaxY = 0;

  return (
    <section className="w-full bg-[#FAFAFA] py-10 md:py-14 overflow-hidden">
      <div className="kaluna-wide-container">
        <section
          ref={sectionRef}
          className="relative mx-auto w-full max-w-[1830px] select-none overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#003456] min-h-[640px] sm:min-h-[720px] lg:aspect-[1830/889] lg:min-h-0"
        >
          <BackgroundArtwork idPrefix={idPrefix} />

          {/* Contrast layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,36,64,0.22)_0%,rgba(0,36,64,0.08)_50%,rgba(0,36,64,0)_75%)]"
          />

          {/* Desktop podium artwork placement */}
          <div className="pointer-events-auto absolute bottom-0 left-[51.9126%] right-0 top-[15%] z-10 hidden lg:block">
            <PodiumArtwork
              idPrefix={`${idPrefix}-desktop`}
              parallaxX={parallaxX}
              parallaxY={parallaxY}
            />
          </div>

          {/* Banner content */}
          <div className="relative z-20 flex flex-col justify-center gap-5 sm:gap-6 md:gap-7 h-full min-h-[640px] px-6 py-8 sm:px-10 sm:py-12 md:px-14 lg:px-16 lg:py-14">
            {/* Top Left Heading & Subtitle */}
            <div className="max-w-[720px] lg:w-[50%]">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span className="h-3.5 w-[2.5px] rounded-full bg-[#299EED]" />
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white">
                  What We Do
                </span>
              </div>

              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-[1.12] tracking-[-0.025em] text-white">
                Helping<br />
                enterprises<br />
                to grow{" "}
                <span className="bg-gradient-to-r from-[#299EED] via-[#5DBCF5] to-[#75C8FF] bg-clip-text text-transparent">
                  digitally
                </span>
              </h2>

              <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] md:text-[19px] font-normal leading-[1.35] text-white/90 max-w-[560px]">
                We create cohesive, high-performance web experiences that help modern enterprises grow their brands online.
              </p>
            </div>

            {/* Bottom Left Floating White Card matching input_file_0.png */}
            <div className="mt-1 sm:mt-2 bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 md:p-7 shadow-2xl flex items-center gap-4 sm:gap-6 max-w-[760px] w-full">
              <div className="shrink-0 flex items-center justify-center">
                <SparkleIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <p className="text-[#0E2A54] text-[13px] sm:text-[15px] md:text-[16px] font-medium leading-[1.45]">
                We streamline digital brand experiences, unifying design, content, and functionality across your website, and building a cohesive online presence that serves every customer touchpoint.
              </p>
            </div>

            {/* Mobile Podium artwork placement */}
            <div className="relative mt-8 h-[300px] w-full shrink-0 lg:hidden">
              <PodiumArtwork
                idPrefix={`${idPrefix}-mobile`}
                parallaxX={0}
                parallaxY={0}
              />
            </div>
          </div>

          <style jsx global>{`
            .service-podium-icon {
              transform-box: fill-box;
              transform-origin: center;
            }
            .service-podium-icon--secondary,
            .service-podium-icon--active {
              animation: none !important;
              transform: none !important;
            }
          `}</style>
        </section>
      </div>
    </section>
  );
}
