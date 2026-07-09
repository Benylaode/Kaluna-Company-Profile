"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hovered" | "hovered-card">("default");

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    // Initial check for touch capability
    const touchQuery = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(touchQuery.matches);

    const handleTouchChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    touchQuery.addEventListener("change", handleTouchChange);

    // Track cursor coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Dynamic hover styles selector
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isLink = target.closest("a, button, select, input, textarea, [role='button']");
      const isCard = target.closest("[data-hover-card]");

      if (isCard) {
        setCursorType("hovered-card");
      } else if (isLink) {
        setCursorType("hovered");
      } else {
        setCursorType("default");
      }
    };

    // Global Click Ripple Manager
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const clickable = target.closest("a, button, [role='button'], .clickable-element");
      if (!clickable) return;

      const rect = clickable.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      // Ensure target position is relative for absolute positioning of ripple
      const computedStyle = window.getComputedStyle(clickable);
      if (computedStyle.position === "static") {
        (clickable as HTMLElement).style.position = "relative";
      }

      let container = clickable.querySelector(".ripple-container") as HTMLElement;
      if (!container) {
        container = document.createElement("span");
        container.className = "ripple-container";
        clickable.appendChild(container);
      }

      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      container.appendChild(ripple);

      // Clean up ripple element
      setTimeout(() => {
        ripple.remove();
        if (container.children.length === 0) {
          container.remove();
        }
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleGlobalClick);

    // High performance animation loop
    const animateCursor = () => {
      // Dot tracking LERP
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.3;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.3;

      // Follower tracking LERP
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    requestRef.current = requestAnimationFrame(animateCursor);

    // Apply global stylesheet flag to hide system cursor
    if (!touchQuery.matches) {
      document.body.classList.add("custom-cursor-active");
    }

    return () => {
      touchQuery.removeEventListener("change", handleTouchChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleGlobalClick);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!mounted || isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor ${cursorType === "hovered" ? "hovered" : ""} ${
          cursorType === "hovered-card" ? "hidden" : ""
        }`}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-follower ${
          cursorType === "hovered" ? "hovered" : ""
        } ${cursorType === "hovered-card" ? "hovered-card" : ""}`}
      />
    </>
  );
}
