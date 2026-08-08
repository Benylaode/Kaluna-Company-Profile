"use client";

import React, {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Box,
  Building2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  ShoppingCart,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  iconName?: string;
}

const defaultServicesData: ServiceItem[] = [
  {
    id: 1,
    slug: "system-integration",
    title: "System Integration",
    description:
      "We build end-to-end System Integration solutions that unify your core operations into a single, intelligent platform.",
    iconName: "building",
  },
];

interface ServiceHeroBannerProps {
  services?: ServiceItem[];
  activeServiceSlug?: string;
  title?: string;
  description?: string;
  className?: string;
}

interface BackgroundArtworkProps {
  idPrefix: string;
}

interface PodiumArtworkProps {
  idPrefix: string;
  activeItem: ServiceItem;
  secondaryItem: ServiceItem;
  activeIcon: LucideIcon;
  secondaryIcon: LucideIcon;
  parallaxX: number;
  parallaxY: number;
  onSelectSecondary: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  cart: ShoppingCart,
  users: Users,
  card: CreditCard,
  box: Box,
  truck: Truck,
};

function getIconComponent(iconName?: string): LucideIcon {
  if (!iconName) return Building2;
  return iconMap[iconName.toLowerCase()] ?? Building2;
}

export function BackgroundArtwork({ idPrefix }: BackgroundArtworkProps) {
  const backgroundGradientId = `${idPrefix}-hero-background`;
  const diagonalGradientId = `${idPrefix}-diagonal-gradient`;

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

      <rect
        width="1830"
        height="889"
        rx="24"
        fill={`url(#${backgroundGradientId})`}
      />

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
  activeItem,
  secondaryItem,
  activeIcon: ActiveIcon,
  secondaryIcon: SecondaryIcon,
  parallaxX,
  parallaxY,
  onSelectSecondary,
}: PodiumArtworkProps) {
  const backBodyGradientId = `${idPrefix}-back-body`;
  const backTopGradientId = `${idPrefix}-back-top`;
  const frontBodyGradientId = `${idPrefix}-front-body`;
  const frontTopGradientId = `${idPrefix}-front-top`;
  const backIconGradientId = `${idPrefix}-back-icon`;
  const frontIconGradientId = `${idPrefix}-front-icon`;
  const backGlowId = `${idPrefix}-back-glow`;
  const frontGlowId = `${idPrefix}-front-glow`;
  const iconShadowId = `${idPrefix}-icon-shadow`;

  const handleSecondaryKeyDown = (
    event: React.KeyboardEvent<SVGGElement>,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectSecondary();
    }
  };

  return (
    <svg
      className="h-full w-full overflow-visible"
      viewBox="950 180 880 709"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${activeItem.title} active service illustration`}
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
        {/* Back podium: exact body and ellipse proportions from the reference SVG. */}
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
          <ellipse
            cx="1228"
            cy="560.5"
            rx="87"
            ry="18.5"
            fill="#2791D8"
          />
        </g>

        {/* Dynamic secondary icon. It uses the same visual footprint as the building icon in the reference. */}
        <g
          role="button"
          tabIndex={0}
          aria-label={`Show ${secondaryItem.title}`}
          onClick={onSelectSecondary}
          onKeyDown={handleSecondaryKeyDown}
          className="service-podium-icon service-podium-icon--secondary cursor-pointer outline-none"
        >
          <title>{`Show ${secondaryItem.title}`}</title>

          <SecondaryIcon
            x="1136"
            y="346"
            width="210"
            height="210"
            stroke="#003F69"
            strokeWidth={1.45}
            opacity={0.55}
            aria-hidden="true"
          />

          <SecondaryIcon
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

        {/* Front podium: exact body, top ellipse and 23% horizontal overlap from the reference SVG. */}
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

        {/* Dynamic active icon. It follows the cart icon footprint from the reference. */}
        <g className="service-podium-icon service-podium-icon--active">
          <title>{activeItem.title}</title>

          <ActiveIcon
            x="1495"
            y="240"
            width="235"
            height="235"
            stroke="#004A7C"
            strokeWidth={1.35}
            opacity={0.62}
            aria-hidden="true"
          />

          <ActiveIcon
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

export default function ServiceHeroBanner({
  services = defaultServicesData,
  activeServiceSlug,
  title,
  description,
  className,
}: ServiceHeroBannerProps) {
  const activeServicesList = useMemo(
    () => (services.length > 0 ? services : defaultServicesData),
    [services],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const reactId = useId();
  const idPrefix = useMemo(
    () => `service-hero-${reactId.replace(/:/g, "")}`,
    [reactId],
  );

  useEffect(() => {
    if (activeServicesList.length === 0) return;

    if (activeServiceSlug) {
      const matchedIndex = activeServicesList.findIndex(
        (service) => service.slug === activeServiceSlug,
      );

      if (matchedIndex !== -1) {
        setActiveIndex(matchedIndex);
        return;
      }
    }

    setActiveIndex((currentIndex) =>
      Math.min(currentIndex, activeServicesList.length - 1),
    );
  }, [activeServiceSlug, activeServicesList]);

  const activeItem =
    activeServicesList[activeIndex] ?? activeServicesList[0];
  const secondaryIndex =
    activeServicesList.length > 1
      ? (activeIndex + 1) % activeServicesList.length
      : activeIndex;
  const secondaryItem =
    activeServicesList[secondaryIndex] ?? activeItem;

  const ActiveIcon = getIconComponent(activeItem?.iconName);
  const SecondaryIcon = getIconComponent(secondaryItem?.iconName);

  const displayTitle = title || "Trusted Partner for Your Enterprise.";
  const displayDescription =
    description ||
    activeItem?.description ||
    "We build end-to-end System Integration solutions that unify your core operations into a single, intelligent platform.";

  const selectSlide = (index: number) => {
    if (activeServicesList.length === 0) return;

    const normalizedIndex =
      ((index % activeServicesList.length) + activeServicesList.length) %
      activeServicesList.length;

    setActiveIndex(normalizedIndex);
  };

  const nextSlide = () => selectSlide(activeIndex + 1);
  const previousSlide = () => selectSlide(activeIndex - 1);

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
    <section
      ref={sectionRef}
      className={`relative mx-auto w-full max-w-[1830px] select-none overflow-hidden rounded-[16px] bg-[#003456] sm:rounded-[20px] lg:rounded-[24px] ${
        className || "min-h-[760px] sm:min-h-[800px] lg:aspect-[1830/889] lg:min-h-0"
      }`}
      aria-roledescription="hero banner"
      aria-label="System Integration services"
    >
      <BackgroundArtwork idPrefix={idPrefix} />

      {/* Soft contrast layer so the text remains readable over every viewport. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,36,64,0.18)_0%,rgba(0,36,64,0.06)_46%,rgba(0,36,64,0)_72%)]"
      />

      {/* Desktop podium placement follows the original SVG crop exactly:
          x = 950 / 1830, y = 180 / 889, width = 880, height = 709. */}
      <div className="pointer-events-auto absolute bottom-0 left-[51.9126%] right-0 top-[20.2475%] z-10 hidden lg:block">
        <PodiumArtwork
          idPrefix={`${idPrefix}-desktop`}
          activeItem={activeItem}
          secondaryItem={secondaryItem}
          activeIcon={ActiveIcon}
          secondaryIcon={SecondaryIcon}
          parallaxX={parallaxX}
          parallaxY={parallaxY}
          onSelectSecondary={() => selectSlide(secondaryIndex)}
        />
      </div>

      <div className="relative z-20 flex h-full flex-col px-6 pb-6 pt-8 sm:px-10 sm:pt-10 lg:absolute lg:inset-0 lg:px-[6.5574%] lg:py-0">
        <div className="flex flex-1 flex-col items-start justify-start lg:w-[50%] lg:justify-center lg:pb-[1%]">
          <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3.5">
            <span className="h-3.5 w-[2.5px] rounded-full bg-[#299EED] sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#75C8FF]">
              {activeItem?.title || "System Integration"}
            </span>
          </div>

          <h1
            className="max-w-[760px] text-left font-semibold leading-[1.12] tracking-[-0.025em] text-white"
            style={{
              fontSize: "clamp(28px, 3.4vw, 52px)",
            }}
          >
            {displayTitle.includes("For Your Needs") ? (
              <>
                Crafting Digital<br />
                Solutions<br />
                <span className="bg-gradient-to-r from-[#299EED] via-[#5DBCF5] to-[#75C8FF] bg-clip-text text-transparent">
                  For Your Needs
                </span>
              </>
            ) : (
              displayTitle
            )}
          </h1>

          <p
            key={activeItem?.id ?? 1}
            className="service-description-enter mt-3.5 max-w-[640px] text-left font-normal leading-[1.6] text-white/90 sm:mt-4"
            style={{
              fontSize: "clamp(14px, 1.15vw, 17px)",
            }}
          >
            {displayDescription}
          </p>

          {activeServicesList.length > 1 && (
            <div className="mt-5 flex flex-wrap items-center gap-3.5 sm:mt-6">
              <div className="flex items-center rounded-full border border-white/15 bg-white/[0.08] p-1 backdrop-blur-md">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous service"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C8FF] sm:h-9 sm:w-9"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-[16px] sm:w-[16px]" />
                </button>

                <span
                  className="min-w-[60px] px-2 text-center text-[11px] font-medium tabular-nums text-white/90 sm:text-[12px]"
                  aria-live="polite"
                >
                  {String(activeIndex + 1).padStart(2, "0")} / {" "}
                  {String(activeServicesList.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next service"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C8FF] sm:h-9 sm:w-9"
                >
                  <ChevronRight className="h-4 w-4 sm:h-[16px] sm:w-[16px]" />
                </button>
              </div>

              <div className="flex items-center gap-2" aria-label="Select service">
                {activeServicesList.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => selectSlide(index)}
                      aria-label={`Show ${service.title}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#003456] ${
                        isActive
                          ? "w-7 bg-[#299EED]"
                          : "w-1.5 bg-white/35 hover:bg-white/70"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Mobile/tablet podium crop. Desktop uses exact reference placement above. */}
        <div className="relative mt-6 h-[240px] w-full shrink-0 sm:h-[280px] lg:hidden">
          <PodiumArtwork
            idPrefix={`${idPrefix}-mobile`}
            activeItem={activeItem}
            secondaryItem={secondaryItem}
            activeIcon={ActiveIcon}
            secondaryIcon={SecondaryIcon}
            parallaxX={0}
            parallaxY={0}
            onSelectSecondary={() => selectSlide(secondaryIndex)}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes servicePodiumFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes servicePodiumFloatActive {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes serviceDescriptionEnter {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-podium-icon {
          transform-box: fill-box;
          transform-origin: center;
          transition: opacity 300ms ease, filter 300ms ease;
        }

        .service-podium-icon--secondary,
        .service-podium-icon--active {
          animation: none !important;
          transform: none !important;
          filter: none !important;
        }

        .service-description-enter {
          animation: serviceDescriptionEnter 420ms ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-podium-icon--secondary,
          .service-podium-icon--active,
          .service-description-enter {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}