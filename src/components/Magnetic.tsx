"use client";

import React, { useRef, useState, useEffect } from "react";

interface MagneticProps {
  children: React.ReactElement<{
    style?: React.CSSProperties;
    className?: string;
  }>;
  range?: number;      // Hover threshold radius in pixels
  strength?: number;   // Attraction strength factor (0 to 1)
}

export default function Magnetic({ children, range = 45, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);
      
      if (distance < range) {
        // Move element partially towards the mouse
        setPosition({
          x: distanceX * strength,
          y: distanceY * strength
        });
      } else {
        // Reset position when cursor moves outside range
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const el = ref.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [range, strength]);

  const child = React.Children.only(children) as React.ReactElement<any>;
  return React.cloneElement(child, {
    ref: ref,
    style: {
      ...child.props.style,
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      // Smooth snapping back to original location, slightly faster tracking when cursor moves
      transition: position.x === 0 && position.y === 0 
        ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" 
        : "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
      willChange: "transform",
    },
    className: `${child.props.className || ""} magnetic-wrap`
  });
}
