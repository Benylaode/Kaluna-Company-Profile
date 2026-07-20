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
    // 1. Base style for the button layout (sleek pill shape, refined height ~46px, elegant padding)
    const baseStyle =
      "group relative inline-flex items-center justify-between rounded-full pl-5 pr-1.5 h-[46px] font-sans font-normal text-[14px] md:text-[15px] tracking-wide select-none outline-none overflow-hidden transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) hover:scale-[1.015] active:scale-[0.98] disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed";

    // 2. Mapping styling variants and hover state colors
    let variantStyle = "";
    let iconCircleStyle = "";
    let arrowIconStyle = "";

    switch (variant) {
      case "primary":
        // Solid Navy: bg-[#0E2A54], text-white, icon bg-[#299EED]
        variantStyle =
          "bg-[#0E2A54] text-white hover:bg-[#163B70] active:bg-[#0B2142] shadow-sm disabled:bg-[#CCCCCC] disabled:text-white";
        iconCircleStyle =
          "bg-[#299EED] text-white group-hover:bg-white group-hover:text-[#0E2A54] disabled:bg-[#9D9D9D] disabled:text-white";
        arrowIconStyle =
          "text-white group-hover:text-[#0E2A54] disabled:text-white transition-colors duration-300";
        break;

      case "primary-white":
        // Counter "bening" / clear / white variant: elegant translucent glass or crisp white with subtle border
        variantStyle =
          "bg-white/90 backdrop-blur-md border border-[#0E2A54]/15 text-[#0E2A54] hover:bg-white hover:border-[#299EED]/40 active:bg-[#F0F7FF] shadow-sm disabled:bg-[#CCCCCC] disabled:text-white";
        iconCircleStyle =
          "bg-[#299EED] text-white group-hover:bg-[#0E2A54] group-hover:text-white disabled:bg-[#9D9D9D] disabled:text-white";
        arrowIconStyle =
          "text-white transition-colors duration-300";
        break;

      case "secondary":
        // Outline variant: thin border, elegant
        variantStyle =
          "bg-transparent border border-[#0E2A54]/30 text-[#0E2A54] hover:bg-[#299EED]/10 hover:border-[#299EED] active:bg-[#299EED]/20 disabled:bg-[#CCCCCC] disabled:border-transparent disabled:text-white pr-5";
        iconCircleStyle = "hidden";
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
        <span className="mr-4 transition-colors duration-300 leading-none">{label}</span>

        {/* Round Icon Container with slide-in & shift animations */}
        {variant !== "secondary" && (
          <span
            className={`flex items-center justify-center w-[34px] h-[34px] shrink-0 rounded-full shadow-xs transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 active:scale-95 ${iconCircleStyle} ${iconClassName}`}
          >
            <ArrowRight
              className={`w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 ${arrowIconStyle}`}
            />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
