"use client";

import { useState, useEffect, useRef } from "react";
import { testimonials as dummyTestimonials } from "../lib/dummy";

export interface TestimonialData {
  id: number;
  client_name: string;
  role: string;
  company_name: string;
  content: string;
  avatar_url: string;
  logo_url?: string;
}

const getCompanyLogo = (companyName: string) => {
  const name = companyName.toLowerCase();
  if (name.includes("sinau print")) return "/image/mitra/11.webp";
  if (name.includes("aspoo")) return "/image/mitra/17.webp";
  if (name.includes("top toy") || name.includes("aliansea")) return "/image/mitra/16.webp";
  if (name.includes("queen city") || name.includes("queen") || name.includes("semarang center")) return "/image/mitra/15.webp";
  if (name.includes("bsp") || name.includes("bahtera sapta")) return "/image/mitra/2.webp";
  if (name.includes("x-1 tire") || name.includes("x1 tire")) return "/image/mitra/14.webp";
  if (name.includes("suara merdeka")) return "/image/mitra/13.webp";
  return null;
};

export default function Deliver({ testimonials }: { testimonials?: TestimonialData[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(280);
  const isResetting = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const displayTestimonials = testimonials && testimonials.length > 0
    ? testimonials.map((item, idx) => ({
      id: item.id || idx + 1,
      client_name: item.client_name,
      role: item.role,
      company_name: item.company_name,
      content: item.content,
      avatar_url: item.avatar_url || "/image/default-avatar.svg",
      logo_url: item.logo_url
    }))
    : dummyTestimonials.map((item, idx) => ({
      id: idx + 1,
      client_name: item.client_name,
      role: item.role,
      company_name: item.company_name,
      content: item.content,
      avatar_url: item.avatar_url || "/image/default-avatar.svg",
      logo_url: item.logo_url
    }));

  // Triple clone data to construct seamless infinite scroll loops
  const extendedTestimonials = [...displayTestimonials, ...displayTestimonials, ...displayTestimonials];

  // Initialize activeIndex to the middle copy
  useEffect(() => {
    setActiveIndex(displayTestimonials.length);
  }, [displayTestimonials.length]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else setItemsPerView(2);
      
      if (cardRef.current) {
        const gap = window.innerWidth < 768 ? 20 : 32;
        setCardWidth(cardRef.current.offsetWidth + gap);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    setTimeout(handleResize, 100);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isResetting.current) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isResetting.current) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex >= displayTestimonials.length * 2) {
      isResetting.current = true;
      setIsTransitioning(false);
      setActiveIndex(displayTestimonials.length);
      setTimeout(() => {
        isResetting.current = false;
      }, 50);
    } else if (activeIndex < displayTestimonials.length) {
      isResetting.current = true;
      setIsTransitioning(false);
      setActiveIndex(displayTestimonials.length * 2 - 1);
      setTimeout(() => {
        isResetting.current = false;
      }, 50);
    }
  };

  // Autoplay handler with cleanup
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [paused, activeIndex, displayTestimonials.length]);

  if (!displayTestimonials || displayTestimonials.length === 0) return null;

  const progressIndex = ((activeIndex % displayTestimonials.length) + displayTestimonials.length) % displayTestimonials.length;
  const slideOffset = `${activeIndex * cardWidth}px`;

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-20 md:py-28">
      <div className="kaluna-container mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:mb-10">
        <div className="flex items-start gap-6 md:gap-8 lg:gap-10">
          {/* Label */}
          <div className="flex items-center gap-3 pt-2 shrink-0">
            <span className="h-2.5 w-[2.5px] rounded-full bg-[#299EED]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#173A69]">
              Testimonials
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[1.15] tracking-normal text-[#171717]">
            What They Say About Kaluna
          </h2>
        </div>

        <div className="flex items-center gap-1.5 mb-2">
          <button onClick={prevSlide} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0E2A54] text-[#0E2A54] transition-colors hover:bg-[#0E2A54] hover:text-white md:h-[46px] md:w-[46px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={nextSlide} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E2A54] text-white transition-colors hover:bg-[#163A70] md:h-[46px] md:w-[46px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>

      <div
        className="kaluna-container relative z-10 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`flex gap-5 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""} md:gap-8`}
          style={{ transform: `translateX(-${slideOffset})` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTestimonials.map((item, index) => (
            <div ref={index === 0 ? cardRef : null} key={`${item.id}-${index}`} className="w-[260px] shrink-0 md:w-[calc(50%_-_16px)]">
              <div className="flex h-[280px] flex-col justify-between rounded-[24px] bg-[#F5F5F5] p-6 md:h-[340px] md:p-8">
                <div>
                  <div className="mb-4 flex h-8 items-center md:mb-5">
                    {item.logo_url ? (
                      <img
                        src={item.logo_url}
                        alt={item.company_name}
                        className="h-7 md:h-8 object-contain"
                      />
                    ) : getCompanyLogo(item.company_name) ? (
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
                  <p className="line-clamp-4 text-[13px] leading-[1.6] tracking-[0.01em] text-[#3F3F3F] md:line-clamp-5 md:text-[17px] md:leading-[1.6]">
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
                    <span className="text-sm font-semibold tracking-wide text-[#171717] md:text-[17px]">
                      {item.client_name}
                    </span>
                    <span className="mt-1 text-[11px] uppercase tracking-wider text-[#3F3F3F] md:text-[13px]">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="kaluna-container mt-6 flex items-center justify-start">
        <div className="flex items-center gap-2">
          {displayTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setActiveIndex(displayTestimonials.length + idx);
              }}
              className={`flex items-center justify-center transition-all duration-300 ${progressIndex === idx
                  ? "h-5 w-5 rounded-full border border-[#299EED] bg-[#299EED]/10"
                  : "h-2 w-2 rounded-full bg-gray-200 hover:bg-gray-300"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {progressIndex === idx && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#299EED]" />
              )}
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}

