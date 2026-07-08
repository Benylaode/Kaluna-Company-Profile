"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 4000;
  const router = useRouter();

  const slides = [
    { id: 1, image: "/image/Hero/Default.webp", tags: ["Company Profile", "Website Development"] },
    { id: 2, image: "/image/Hero/1.webp", tags: ["Marketplace", "Point Of Sales"] },
    { id: 3, image: "/image/Hero/2.webp", tags: ["AI Integration", "Data Analytics"] },
    { id: 4, image: "/image/Hero/3.webp", tags: ["Mobile App", "UI/UX Design"] }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, slideDuration);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToWorks = () => {
    const worksElement = document.getElementById("works-section");
    if (worksElement) worksElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(312deg,#f3f8ff_58%,#fff_92%)] pt-12 pb-12 md:pt-12 md:pb-20 lg:pt-12 lg:pb-24">
      <style>{`
        @keyframes fillProgress { 0% { width: 0%; } 100% { width: 100%; } }
        @keyframes floatUp { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes heroReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-animate-title {
          animation: heroReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-animate-text {
          animation: heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
        }
        .hero-animate-buttons {
          animation: heroReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Mobile Layout */}
      <div className="md:hidden relative min-h-[847px] bg-[linear-gradient(185deg,#0E2A54_62%,#1F5DBA_115%)]">
        <div className="absolute inset-x-0 top-20 h-[444px] overflow-hidden">
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={`Kaluna portfolio ${index + 1}`}
              className={`absolute left-1/2 top-[-26px] h-[461px] w-[614px] max-w-none -translate-x-[55%] object-cover transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 h-[296px] bg-gradient-to-b from-[#0E2A54]/0 to-[#0E2A54]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#299EED]/20">
          <div className="h-full bg-[#299EED]" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
        </div>

        <div className="absolute inset-x-0 top-[377px] px-5">
          <h1 className="hero-animate-title text-[36px] font-medium leading-[1.1] tracking-[-0.01em] text-white">
            Your Scalable IT Solutions Partner for Modern Enterprises
          </h1>
          <p className="hero-animate-text mt-4 text-sm leading-[1.4] tracking-[0.02em] text-white">
            We design, build, and integrate intelligent software systems that drive operational efficiency and long-term growth.
          </p>

          <div className="hero-animate-buttons mt-4 flex flex-col gap-3">
            <button
              onClick={() => router.push("/contact")}
              className="group flex h-14 w-full items-center justify-between rounded-full bg-white py-2 pl-8 pr-2 text-[#0E2A54]"
            >
              <span className="text-base font-medium tracking-[0.02em]">Start a Consultation</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>

            <button
              onClick={scrollToWorks}
              className="group flex h-14 w-full items-center justify-between rounded-full border border-white py-3 pl-8 pr-2 text-white transition hover:bg-white/5"
            >
              <span className="text-base font-medium tracking-[0.02em]">Learn Our Work</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="kaluna-container hidden md:grid min-h-[600px] lg:min-h-[640px] grid-cols-[1.1fr_1fr] items-center gap-10 lg:gap-16 pt-2">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-2.5">
            <span className="h-4 w-[2.5px] bg-[#299EED] rounded-full"></span>
            <span className="text-xs font-semibold tracking-wider text-[#0E2A54] uppercase">
              Kaluna Technology
            </span>
          </div>

          <h1 className="hero-animate-title text-[36px] md:text-[44px] lg:text-[54px] font-medium leading-[1.15] tracking-[-0.02em] text-[#0E2A54]">
            Your Scalable<br />
            IT Solutions Partner<br />
            for Modern Enterprises
          </h1>

          <p className="hero-animate-text max-w-[500px] text-base leading-[1.6] text-[#4B5563]">
            We design, build, and integrate intelligent software systems that drive operational efficiency and long-term growth.
          </p>

          <div className="hero-animate-buttons flex items-center gap-4">
            <button
              onClick={() => router.push("/contact")}
              className="group flex h-14 items-center rounded-full bg-[#0E2A54] py-2 pl-8 pr-2 text-white transition hover:bg-[#163A70]"
            >
              <span className="mr-6 text-sm font-medium tracking-[0.02em] md:text-base">Start a Consultation</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>

            <button
              onClick={scrollToWorks}
              className="group flex h-14 items-center rounded-full border border-[#0E2A54] py-2 pl-8 pr-2 text-[#0E2A54] transition hover:bg-[#0E2A54]/5"
            >
              <span className="mr-6 text-sm font-medium tracking-[0.02em] md:text-base">Learn Our Work</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0E2A54] text-[#0E2A54] transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>

        <div className="w-full">
          <div className="relative ml-auto h-[380px] w-full max-w-[620px] overflow-hidden rounded-[24px] bg-[#0E2A54] lg:h-[460px] xl:h-[500px]">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={`Kaluna Tech Portfolio ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              />
            ))}

            <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2.5 md:bottom-8 md:left-8">
              {slides[currentSlide].tags.map((tag, index) => (
                <span
                  key={`tag-${currentSlide}-${index}`}
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-medium tracking-[0.01em] text-[#0E2A54] shadow-md md:px-6 md:py-3 md:text-sm"
                  style={{ animation: `floatUp 0.5s ease-out forwards`, animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 z-20 flex h-1 w-full bg-[#299EED]/20">
              {slides.map((_, index) => (
                <div key={index} onClick={() => setCurrentSlide(index)} className="relative h-full flex-1 cursor-pointer">
                  {index === currentSlide && (
                    <div
                      className="absolute left-0 top-0 h-full bg-[#299EED]"
                      style={{ animation: `fillProgress ${slideDuration}ms linear forwards` }}
                    />
                  )}
                  {index < currentSlide && (
                    <div className="absolute left-0 top-0 h-full w-full bg-[#299EED]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}