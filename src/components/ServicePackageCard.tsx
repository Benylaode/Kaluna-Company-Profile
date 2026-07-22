"use client";

import { useState } from "react";
import ContactPopup from "./ContactPopup";

export interface PackageCardData {
  name: string;
  price?: string;
  desc?: string;
  features: string[];
  isPopular?: boolean;
  renewal?: string;
  popularLabel?: string;
  buttonLabel?: string;
}

interface ServicePackageCardProps {
  pkg: PackageCardData;
  idx: number;
}

export default function ServicePackageCard({ pkg, idx }: ServicePackageCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isBtnPressed, setIsBtnPressed] = useState(false);

  const isPopular = Boolean(pkg.isPopular);
  const renewalText = pkg.renewal || "Annual Renewal: $450,000 / year (Domain & Hosting)";
  const popularText = pkg.popularLabel || "Best";
  const buttonText = pkg.buttonLabel || "Contact Us";
  const displayPrice = pkg.price || (pkg.name.toLowerCase() === "custom" ? "Chat Admin" : "Contact Us");

  const isHighlighted = isBtnHovered || isBtnPressed;

  return (
    <article
      key={`${pkg.name}-${idx}`}
      className={`
        relative
        flex
        w-full
        max-w-[547px]
        flex-col
        justify-between
        overflow-hidden
        rounded-[24px]
        px-6
        py-7
        sm:px-8
        sm:py-8
        transition-all
        duration-300
        ease-out
        ${
          isPopular
            ? "bg-[#299EED]/50 text-white z-10"
            : "bg-white text-[#0D0D0D]"
        }
        ${
          isHighlighted
            ? isPopular
              ? "scale-[1.045] -translate-y-2 shadow-[0_25px_60px_rgba(41,158,237,0.65)] ring-4 ring-white"
              : "scale-[1.03] -translate-y-2 shadow-[0_20px_50px_rgba(41,158,237,0.4)] ring-2 ring-[#299EED]"
            : isPopular
            ? "scale-[1.02] shadow-2xl"
            : "shadow-md"
        }
      `}
    >
      <div className="flex flex-col flex-1">
        {/* Package badge */}
        <div className="flex min-h-[42px] flex-wrap items-center gap-2">
          <span
            className={`
              inline-flex
              h-[42px]
              items-center
              justify-center
              whitespace-nowrap
              rounded-full
              border
              bg-[#EAF3FF]
              px-[20px]
              text-[15px]
              font-normal
              leading-none
              text-[#0E2A54]
              ${isPopular ? "border-[#62BFF1]" : "border-[#299EED]"}
            `}
          >
            {pkg.name}
          </span>

          {isPopular && (
            <span
              className="
                inline-flex
                h-[42px]
                items-center
                justify-center
                gap-1.5
                whitespace-nowrap
                rounded-full
                border
                border-[#FF993A]
                bg-[#FF2B2B]
                px-[18px]
                text-[14px]
                font-normal
                leading-none
                text-white
              "
            >
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M13.662 7.248c-.341-.768-.837-1.458-1.457-2.025l-.512-.47a.143.143 0 0 0-.228.058l-.229.656c-.142.411-.404.832-.775 1.245-.025.026-.053.033-.072.035-.019.002-.049-.002-.076-.027a.11.11 0 0 1-.035-.084c.065-1.058-.251-2.252-.944-3.551C8.761 2.006 7.965 1.164 6.97.577L6.244.15a.143.143 0 0 0-.211.128l.039.844c.026.576-.041 1.086-.199 1.51a6.19 6.19 0 0 1-.826 1.432c-.247.301-.527.573-.835.811a6.208 6.208 0 0 0-1.763 2.135 6.12 6.12 0 0 0-.636 2.713c0 .829.163 1.633.486 2.39a6.21 6.21 0 0 0 1.328 1.95 6.148 6.148 0 0 0 1.967 1.313 6.222 6.222 0 0 0 2.406.481 6.222 6.222 0 0 0 2.406-.479 6.2 6.2 0 0 0 1.967-1.313 6.21 6.21 0 0 0 1.328-1.95 6.108 6.108 0 0 0 .487-2.391 6.151 6.151 0 0 0-.526-2.476Z"
                />
              </svg>

              <span>{popularText}</span>
            </span>
          )}
        </div>

        {/* Package description */}
        <p
          className={`
            mt-5
            text-[14px]
            font-normal
            leading-relaxed
            ${isPopular ? "text-white" : "text-[#333333]"}
          `}
        >
          {pkg.desc}
        </p>

        {/* Price section */}
        <div className="mt-5">
          <p
            className={`
              text-[13px]
              font-normal
              uppercase
              leading-none
              tracking-[0.02em]
              ${isPopular ? "text-white/90" : "text-[#7A7A7A]"}
            `}
          >
            START FROM
          </p>

          <h3
            className={`
              mt-1.5
              whitespace-nowrap
              text-[34px]
              sm:text-[40px]
              lg:text-[44px]
              font-normal
              leading-tight
              tracking-[-0.03em]
              ${isPopular ? "text-white" : "text-[#0E2A54]"}
            `}
          >
            {displayPrice}
          </h3>

          <p
            className={`
              mt-1.5
              text-[13px]
              font-normal
              leading-normal
              ${isPopular ? "text-white/80" : "text-[#7A7A7A]"}
            `}
          >
            {renewalText}
          </p>
        </div>

        {/* Thin Divider */}
        <div
          className={`
            mt-5
            h-[1px]
            w-full
            ${isPopular ? "bg-white/40" : "bg-[#E3E3E3]"}
          `}
        />

        {/* Feature list */}
        <ul className="mt-5 space-y-3">
          {pkg.features.map((feature, featureIndex) => (
            <li
              key={`${feature}-${featureIndex}`}
              className="flex items-center gap-2.5"
            >
              <span
                className={`
                  flex
                  h-[20px]
                  w-[20px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  ${
                    isPopular
                      ? "bg-white text-[#299EED]"
                      : "bg-[#299EED] text-white"
                  }
                `}
              >
                <svg
                  aria-hidden="true"
                  className="h-2.5 w-2.5"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.8 7.2 5.2 10.5 12.1 2.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span
                className={`
                  text-[14px]
                  font-normal
                  leading-normal
                  ${isPopular ? "text-white" : "text-[#222222]"}
                `}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={() => {
          setIsBtnPressed(true);
          setIsOpen(true);
          setTimeout(() => setIsBtnPressed(false), 300);
        }}
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
        onMouseDown={() => setIsBtnPressed(true)}
        onMouseUp={() => setIsBtnPressed(false)}
        className={`
          group
          mt-6
          flex
          h-[46px]
          w-full
          shrink-0
          cursor-pointer
          items-center
          justify-between
          rounded-full
          pl-5
          pr-1.5
          text-left
          text-[14px]
          md:text-[15px]
          font-normal
          leading-none
          transition-all
          duration-300
          hover:scale-[1.015]
          active:scale-[0.98]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#62BFF1]
          focus-visible:ring-offset-2
          ${
            isPopular
              ? "bg-white text-[#0E2A54] hover:bg-[#F0F7FF] shadow-sm"
              : "bg-[#0E2A54] text-white hover:bg-[#163B70] shadow-sm"
          }
        `}
      >
        <span>{buttonText}</span>

        <span
          className={`
            flex
            h-[34px]
            w-[34px]
            shrink-0
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-105
            ${
              isPopular
                ? "bg-[#299EED] text-white group-hover:bg-[#0E2A54]"
                : "bg-[#299EED] text-white group-hover:bg-white group-hover:text-[#0E2A54]"
            }
          `}
        >
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3 10h13M10.5 4.5 16 10l-5.5 5.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <ContactPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        packageName={pkg.name}
      />
    </article>
  );
}
