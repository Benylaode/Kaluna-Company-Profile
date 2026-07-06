"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface WorkData {
  id: number;
  title: string;
  category: string;
  image_url: string;
}

const worksData: WorkData[] = [
  { id: 1, title: "Discovery and Requirement Mapping", category: "Systems engineered to evolve with your growth", image_url: "/image/ourworkflow/1.png" },
  { id: 2, title: "Technical Analysis and Solution Planning", category: "Define integration scope & technology stack", image_url: "/image/ourworkflow/2.png" },
  { id: 3, title: "System Design and Prototyping", category: "Designing system flow before full deployment", image_url: "/image/ourworkflow/3.png" },
  { id: 4, title: "Development & System Integration", category: "Scalable & integrating platforms and devices", image_url: "/image/ourworkflow/4.png" },
  { id: 5, title: "Testing, Security and Performance", category: "Ensuring stability, security, and performance", image_url: "/image/ourworkflow/5.png" },
  { id: 6, title: "Deployment, Monitoring & Continuous Improvement", category: "Deploying, providing optimization and support", image_url: "/image/ourworkflow/6.png" }
];

export default function OurWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" });

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = ((scrollLeft + clientWidth) / scrollWidth) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section id="works-section" className="relative overflow-hidden bg-gradient-to-b from-[#0B1E36] to-[#0D2342] py-16 md:py-24 text-white">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rotate-45 bg-white"></div>
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rotate-45 bg-white"></div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        
        {/* Header */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
              <span className="h-4 w-1.5 rounded-full bg-[#1E88E5]"></span>
              OUR WORKS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight">
              Projects We've Delivered
            </h2>
          </div>

          {/* Navigation Arrows (Desktop) */}
          <div className="hidden md:flex gap-3">
            <button onClick={scrollLeft} className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#1E88E5] hover:border-[#1E88E5]">
              <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button onClick={scrollRight} className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#1E88E5] hover:border-[#1E88E5]">
              <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Cards */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 md:gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {worksData.map((item, index) => {
            const displayId = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={item.id}
                className="group relative flex-shrink-0 w-[280px] md:w-[340px] overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#1E88E5]/50 hover:bg-white/10 snap-start"
              >
                <div className="p-3 md:p-4">
                  <div className="overflow-hidden rounded-xl md:rounded-2xl relative">
                    <img
                      src={item.image_url} 
                      alt={item.title}
                      className="h-56 md:h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0D2342]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                <div className="relative px-5 md:px-6 pb-6 pt-2">
                  <div className="absolute right-5 -top-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/20 bg-[#0D2342] text-sm font-bold shadow-lg text-[#1E88E5]">
                    {displayId}
                  </div>
                  <h3 className="pr-10 text-lg md:text-xl font-bold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-xs md:text-sm font-medium line-clamp-2">
                    {item.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Progress Bar */}
        <div className="mt-4 md:mt-8">
          <div className="h-1.5 w-full max-w-md mx-auto overflow-hidden rounded-full bg-white/10 relative">
            <div 
              className="absolute left-0 top-0 h-full rounded-full bg-[#1E88E5] transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}