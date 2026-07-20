"use client";

import { useState } from "react";
import ContactPopup from "./ContactPopup";

interface PackageContactButtonProps {
  packageName: string;
  buttonText: string;
  isPopular: boolean;
}

export default function PackageContactButton({ packageName, buttonText, isPopular }: PackageContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
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
        packageName={packageName}
      />
    </>
  );
}
