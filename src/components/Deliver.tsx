"use client";

import { useState, useEffect } from "react";
import { testimonials as dummyTestimonials } from "../lib/dummy";

export interface TestimonialData {
  id: number;
  client_name: string;
  role: string;
  company_name: string;
  content: string;
  avatar_url: string;
}

const getCompanyLogo = (companyName: string) => {
  const name = companyName.toLowerCase();
  if (name.includes("sinau print")) return "/image/mitra/1.png";
  if (name.includes("suara merdeka")) return "/image/mitra/6.png";
  if (name.includes("plaza kamera") || name.includes("plaza")) return "/image/mitra/2.png";
  if (name.includes("atc")) return "/image/mitra/4.png";
  if (name.includes("queen city") || name.includes("queen")) return "/image/mitra/5.png";
  return null;
};

export default function Deliver({ testimonials }: { testimonials?: TestimonialData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  const displayTestimonials = dummyTestimonials.map((item, idx) => ({
    id: idx + 1,
    client_name: item.client_name,
    role: item.role,
    company_name: item.company_name,
    content: item.content,
    avatar_url: item.avatar_url || "/image/default-avatar.svg"
  }));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else setItemsPerView(2);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!displayTestimonials || displayTestimonials.length === 0) return null;

  const maxIndex = Math.max(0, displayTestimonials.length - itemsPerView);
  const slideOffset = itemsPerView === 1 ? `${currentIndex * 280}px` : `${currentIndex * 50}%`;

  const handleNext = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-28">
      <div className="kaluna-container mb-8 flex items-end justify-between gap-4 md:mb-10">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full"></span>
            <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="mt-3 max-w-[560px] text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] tracking-[-0.015em] text-[#0E2A54]">
            What They Say About Kaluna
          </h2>
        </div>

        <div className="flex items-center gap-1.5">
          <button onClick={handlePrev} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0E2A54] text-[#0E2A54] transition-colors hover:bg-[#0E2A54] hover:text-white md:h-[46px] md:w-[46px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={handleNext} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E2A54] text-white transition-colors hover:bg-[#163A70] md:h-[46px] md:w-[46px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>

      <div className="kaluna-container relative z-10 overflow-hidden">
        <div 
          className="flex gap-5 transition-transform duration-500 ease-in-out md:gap-8"
          style={{ transform: `translateX(-${slideOffset})` }}
        >
          {displayTestimonials.map((item) => (
            <div key={item.id} className="w-[260px] shrink-0 md:w-[calc(50%_-_16px)]">
              <div className="flex h-[280px] flex-col justify-between rounded-[24px] bg-[#F5F5F5] p-6 md:h-[310px] md:p-8">
                <div>
                  <div className="mb-4 flex h-8 items-center md:mb-5">
                    {getCompanyLogo(item.company_name) ? (
                      <img 
                        src={getCompanyLogo(item.company_name)!} 
                        alt={item.company_name} 
                        className="h-7 md:h-8 object-contain"
                      />
                    ) : (
                      <span className="text-sm font-semibold uppercase tracking-wide text-[#0E2A54] md:text-lg">
                        {item.company_name}
                      </span>
                    )}
                  </div>
                  <p className="line-clamp-4 text-sm leading-[1.4] tracking-[0.01em] text-[#3F3F3F] md:line-clamp-5 md:text-base md:leading-[1.5]">
                    {item.content}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3 md:gap-4">
                  <img 
                    src={item.avatar_url} 
                    alt={item.client_name} 
                    className="h-12 w-12 rounded-xl bg-gray-200 object-cover md:h-14 md:w-14"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold tracking-[0.02em] text-[#299EED]">{item.client_name}</span>
                    <span className="mt-0.5 text-xs leading-[1.3] tracking-[0.02em] text-[#555555] md:text-sm">{item.role}, {item.company_name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="kaluna-container mt-6 flex items-center justify-start">
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center justify-center transition-all duration-300 ${
                currentIndex === idx
                  ? "h-5 w-5 rounded-full border border-[#299EED] bg-[#299EED]/10"
                  : "h-2 w-2 rounded-full bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {currentIndex === idx && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#299EED]" />
              )}
            </button>
          ))}
        </div>
      </div>
      
    </section>
  );
}

