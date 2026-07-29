"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 700, // Dikurangi dari 800ms → 700ms agar terasa lebih responsif
  direction = "up",
  distance = 24, // Dikurangi dari 30px → 24px agar lebih subtle
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing setelah visible
        }
      },
      // threshold 0.05 = mulai animate saat 5% elemen terlihat (lebih awal, lebih smooth)
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const getTranslate = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`;
        case "down":
          return `translateY(-${distance}px)`;
        case "left":
          return `translateX(${distance}px)`;
        case "right":
          return `translateX(-${distance}px)`;
        default:
          return "none";
      }
    }
    return "translate(0, 0)";
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTranslate(),
        WebkitTransform: getTranslate(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        WebkitTransition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), -webkit-transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
        /* Safari WebKit optimization: backfaceVisibility removed to prevent tile memory drop black blocks */
      }}
    >
      {children}
    </div>
  );
}
