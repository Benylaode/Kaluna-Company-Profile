"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  shimmerClassName?: string;
  fallbackClassName?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  style,
  shimmerClassName = "",
  fallbackClassName = "",
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached/loaded on mount or src change
  useEffect(() => {
    if (!src) return;
    
    // Reset states
    setIsLoaded(false);
    setHasError(false);

    const img = imgRef.current;
    if (img && img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (props.onLoad) props.onLoad(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    if (props.onError) props.onError(e);
  };

  // Smart splitting of layout and styling classes
  const classes = className.split(/\s+/);
  const wrapperClasses = ["relative", "overflow-hidden"];
  const imgClasses: string[] = ["w-full", "h-full"];

  classes.forEach((c) => {
    const cls = c.trim();
    if (!cls) return;

    // Sizing, positioning, layout, rounded corners, and shadows go to the outer wrapper
    if (
      cls === "absolute" ||
      cls === "relative" ||
      cls === "fixed" ||
      cls.startsWith("inset-") ||
      cls.startsWith("top-") ||
      cls.startsWith("bottom-") ||
      cls.startsWith("left-") ||
      cls.startsWith("right-") ||
      cls.startsWith("w-") ||
      cls.startsWith("h-") ||
      cls.startsWith("z-") ||
      cls.startsWith("rounded-") ||
      cls.startsWith("shadow-") ||
      cls === "flex-shrink-0" ||
      cls === "shrink-0"
    ) {
      wrapperClasses.push(cls);
    } else {
      imgClasses.push(cls);
    }
  });

  return (
    <div className={wrapperClasses.join(" ")}>
      {/* Premium Shimmer Skeleton Loader */}
      {!isLoaded && !hasError && (
        <div
          className={`absolute inset-0 w-full h-full bg-gradient-to-r from-[#EAF3FF] via-[#F4F9FF] to-[#EAF3FF] bg-[length:200%_100%] animate-shimmer ${shimmerClassName}`}
          style={{
            animation: "skeleton-shimmer 1.8s infinite linear",
          }}
        />
      )}

      {/* Modern, Aesthetic Error Fallback State */}
      {hasError && (
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400 p-4 border border-dashed border-gray-200 select-none ${fallbackClassName}`}
        >
          <svg
            className="w-10 h-10 mb-2 opacity-40 text-[#0E2A54]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0E2A54]/60">
            Image Offline
          </span>
        </div>
      )}

      {/* Actual Image Element with Premium Blur-up & Scale Transitions */}
      {src && !hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`${imgClasses.join(" ")} transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) ${
            isLoaded 
              ? "opacity-100 scale-100 blur-0" 
              : "opacity-0 scale-[1.02] blur-[8px]"
          }`}
          style={{
            ...style,
            willChange: "transform, opacity, filter",
          }}
          {...props}
        />
      )}
    </div>
  );
}
