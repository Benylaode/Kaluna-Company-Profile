"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "primary-white" | "secondary";
  label: string;
  className?: string;
  iconClassName?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", label, className = "", iconClassName = "", disabled, ...props }, ref) => {
    // 1. Base style for the button layout (pill shape, padding, alignment, micro-scales)
    const baseStyle =
      "group relative inline-flex items-center justify-between rounded-full pl-7 pr-2.5 py-2.5 font-sans font-medium text-[15px] tracking-wide select-none outline-none overflow-hidden transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) hover:scale-[1.02] active:scale-[0.97] disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed";

    // 2. Mapping styling variants and hover state colors
    let variantStyle = "";
    let iconCircleStyle = "";
    let arrowIconStyle = "";

    switch (variant) {
      case "primary":
        // Default: bg-[#0E2A54] (Dark Blue), text-white, icon bg-[#299EED] with white arrow
        // Hover: bg-[#304674] (Blue 400), text-white, icon bg-white with [#0E2A54] arrow
        // Disabled: bg-[#CCCCCC] (Grey 300), text-white, icon bg-[#9D9D9D] with white arrow
        variantStyle =
          "bg-[#0E2A54] text-white hover:bg-[#304674] active:bg-[#203560] disabled:bg-[#CCCCCC] disabled:text-white";
        iconCircleStyle =
          "bg-[#299EED] text-white group-hover:bg-white group-hover:text-[#0E2A54] disabled:bg-[#9D9D9D] disabled:text-white";
        arrowIconStyle =
          "text-white group-hover:text-[#0E2A54] disabled:text-white transition-colors duration-300";
        break;

      case "primary-white":
        // Default: bg-transparent, text-[#0E2A54], icon bg-[#299EED] with white arrow
        // Hover: bg-[#DDEEFF] (Sea 50), text-[#0E2A54], icon bg-white with [#0E2A54] arrow
        // Disabled: bg-[#CCCCCC] (Grey 300), text-white, icon bg-[#9D9D9D] with white arrow
        variantStyle =
          "bg-transparent text-[#0E2A54] hover:bg-[#DDEEFF] active:bg-[#B3D9F7] disabled:bg-[#CCCCCC] disabled:text-white";
        iconCircleStyle =
          "bg-[#299EED] text-white group-hover:bg-white group-hover:text-[#0E2A54] disabled:bg-[#9D9D9D] disabled:text-white";
        arrowIconStyle =
          "text-white group-hover:text-[#0E2A54] disabled:text-white transition-colors duration-300";
        break;

      case "secondary":
        // Default: bg-transparent, border border-[#0E2A54], text-[#0E2A54] (No icon)
        // Hover: bg-[#90D3F5] (Sea 200) (or #B3D9F7), text-[#0E2A54], border border-transparent
        // Disabled: bg-[#CCCCCC] (Grey 300), border border-transparent, text-white
        variantStyle =
          "bg-transparent border border-[#0E2A54] text-[#0E2A54] hover:bg-[#90D3F5] hover:border-transparent active:bg-[#77C7F3] disabled:bg-[#CCCCCC] disabled:border-transparent disabled:text-white pr-7";
        iconCircleStyle = "hidden"; // No icon circle container for secondary buttons
        arrowIconStyle = "hidden";
        break;
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...props}
      >
        {/* Button Label */}
        <span className="mr-6 transition-colors duration-300 leading-none">{label}</span>

        {/* Round Icon Container with slide-in & shift animations */}
        {variant !== "secondary" && (
          <span
            className={`flex items-center justify-center w-8 h-8 rounded-full shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 active:scale-95 ${iconCircleStyle} ${iconClassName}`}
          >
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 ${arrowIconStyle}`}
            />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
