"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); 
      }
    }
  }, []);

  return null; 
}