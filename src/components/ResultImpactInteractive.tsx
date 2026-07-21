"use client";

import { useState } from "react";
import Image from "next/image";

interface ResultHighlight {
  title: string;
  desc?: string;
  image_url?: string;
}

interface ResultImpactInteractiveProps {
  label?: string;
  title: string;
  description?: string;
  highlights: ResultHighlight[];
  defaultImage: string;
  projectImages?: string[];
}

export default function ResultImpactInteractive({
  label = "RESULTS AND IMPACT",
  title,
  description,
  highlights,
  defaultImage,
  projectImages = [],
}: ResultImpactInteractiveProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Pool of images for dynamic switching
  const getCurrentImage = () => {
    if (highlights[activeIndex]?.image_url) {
      return highlights[activeIndex].image_url;
    }
    if (projectImages.length > 0) {
      return projectImages[activeIndex % projectImages.length] || defaultImage;
    }
    return defaultImage;
  };

  const activeImage = getCurrentImage();

  return (
    <section className="pb-[72px] md:pb-[110px] lg:pb-[140px]">
      <div className="w-full px-5 md:px-[min(5vw,86px)]">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.08fr] md:gap-12 lg:gap-[90px]">
          {/* Left Column: Interactive Highlights List */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[15px] w-[3px] shrink-0 bg-[#299EED]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#0E2A54]">
                {label.toUpperCase()}
              </span>
            </div>

            <h2 className="mt-5 max-w-[570px] text-[24px] font-medium leading-[1.17] tracking-[-0.025em] text-[#111111] sm:text-[30px] md:text-[36px] lg:text-[44px]">
              {title}
            </h2>

            {description && (
              <p className="mt-4 text-[13px] font-normal leading-[1.7] text-[#626262] md:text-[14px] lg:text-[15px]">
                {description}
              </p>
            )}

            {/* Mobile image preview between title and list */}
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-[#E6EAF0] shadow-sm md:hidden">
              <Image
                src={activeImage}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover transition-opacity duration-300 ease-in-out"
              />
            </div>

            {highlights.length > 0 && (
              <div className="mt-7 md:mt-9">
                {highlights.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={`${item.title}-${index}`}
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`
                        group
                        cursor-pointer
                        border-l-[3px]
                        pl-4
                        py-2.5
                        transition-all
                        duration-200
                        ${
                          index < highlights.length - 1
                            ? "border-b border-b-[#E8E8E8] pb-5 mb-4 md:pb-6 md:mb-5"
                            : ""
                        }
                        ${
                          isActive
                            ? "border-l-[#299EED]"
                            : "border-l-[#D9EDFF] hover:border-l-[#94C9F5]"
                        }
                      `}
                    >
                      <h3
                        className={`
                          text-[14px]
                          font-medium
                          leading-[1.35]
                          transition-colors
                          duration-200
                          sm:text-[15px]
                          md:text-[16px]
                          lg:text-[17px]
                          ${isActive ? "text-[#111111] font-semibold" : "text-[#555555] group-hover:text-[#111111]"}
                        `}
                      >
                        {item.title}
                      </h3>

                      {item.desc && (
                        <p
                          className={`
                            mt-2
                            text-[12px]
                            font-normal
                            leading-[1.65]
                            transition-colors
                            duration-200
                            sm:text-[13px]
                            ${isActive ? "text-[#555555]" : "text-[#777777]"}
                          `}
                        >
                          {item.desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Image Display — hidden on mobile (shown inline above instead) */}
          <div className="relative hidden aspect-[1.12/1] w-full overflow-hidden rounded-[20px] bg-[#E6EAF0] shadow-sm md:block lg:rounded-[24px]">
            <Image
              src={activeImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 52vw"
              className="object-cover transition-opacity duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
