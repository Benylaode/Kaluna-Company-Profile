"use client";

import { useState, useEffect } from "react";

export interface TestimonialData {
  id: number;
  client_name: string;
  role: string;
  company_name: string;
  content: string;
  avatar_url: string;
}

export default function Deliver({ testimonials }: { testimonials: TestimonialData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else setItemsPerView(2);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!testimonials || testimonials.length === 0) return null;

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handleNext = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10 md:py-20 bg-white relative overflow-hidden">
      
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#1E88E5] mb-3 uppercase">
            <span className="w-1.5 h-4 bg-[#1E88E5] block rounded-full"></span>
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold text-[#0D2342] leading-tight">
            What They Say About Kaluna
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={handlePrev} className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-[#0D2342] hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={handleNext} className="w-11 h-11 rounded-full bg-[#0D2342] flex items-center justify-center text-white hover:bg-[#163A70] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out -mx-3 md:-mx-4"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {testimonials.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 shrink-0 px-3 md:px-4">
              <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[24px] md:rounded-[32px] flex flex-col justify-between min-h-[320px] md:min-h-[360px] h-full">
                <div>
                  <div className="mb-6 h-10 flex items-center">
                    <span className="font-extrabold text-lg md:text-xl tracking-wide text-[#0D2342] uppercase">
                      {item.company_name}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                    "{item.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img 
                    src={item.avatar_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"} 
                    alt={item.client_name} 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-[14px] object-cover bg-gray-200"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#1E88E5] font-bold text-sm md:text-base">{item.client_name}</span>
                    <span className="text-gray-500 text-xs mt-0.5">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Pagination & Controls */}
      <div className="flex md:hidden items-center justify-between mt-8">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-6 bg-[#1E88E5]" : "w-2 bg-gray-200"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0D2342]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={handleNext} className="w-10 h-10 rounded-full bg-[#0D2342] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>
      
    </section>
  );
}