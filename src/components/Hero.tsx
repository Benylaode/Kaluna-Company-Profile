"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 4000;
  const router = useRouter();

const slides = [
  {
    id: 1,
    image: "/image/Hero/Default.webp",
    tags: ["Web & Application Development"]
  },
  {
    id: 2,
    image: "/image/Hero/1.webp",
    tags: ["IoT System Development"]
  },
  {
    id: 3,
    image: "/image/Hero/2.webp",
    tags: ["ERP & System Integration"]
  },
  {
    id: 4,
    image: "/image/Hero/3.webp",
    tags: ["Industrial & Automation Solutions"]
  },
  {
    id: 5,
    image: "/image/Hero/4.webp",
    tags: ["Data Dashboard & Analytics"]
  },
  {
    id: 6,
    image: "/image/Hero/5.webp",
    tags: ["IT Consulting & Digital Strategy"]
  }
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
    <section className="relative overflow-hidden bg-[linear-gradient(312deg,#f3f8ff_58%,#fff_92%)] pt-6 pb-6 md:pt-8 md:pb-8 lg:pt-12 lg:pb-12">
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
      <div className="md:hidden relative min-h-[680px] sm:min-h-[780px] bg-[linear-gradient(185deg,#0E2A54_62%,#1F5DBA_115%)]">
        <div className="absolute inset-x-0 top-16 sm:top-20 h-[360px] sm:h-[420px] overflow-hidden">
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={`Kaluna portfolio ${index + 1}`}
              className={`absolute left-1/2 top-0 h-full w-auto min-w-full -translate-x-1/2 object-cover object-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 h-[200px] sm:h-[250px] bg-gradient-to-b from-[#0E2A54]/0 to-[#0E2A54]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[5px] bg-[#D6ECFF]">
          <div className="h-full bg-[#299EED]" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
        </div>

        <div className="absolute inset-x-0 top-[300px] sm:top-[360px] px-5">
          <h1 className="hero-animate-title text-[30px] sm:text-[36px] font-medium leading-[1.1] tracking-[-0.01em] text-white">
            Your Scalable IT Solutions Partner for Modern Enterprises
          </h1>
          <p className="hero-animate-text mt-3 sm:mt-4 text-[13px] sm:text-sm leading-[1.5] tracking-[0.02em] text-white">
            We design, build, and integrate intelligent software systems that drive operational efficiency and long-term growth.
          </p>

          <div className="hero-animate-buttons mt-5 flex flex-col gap-3">
            <Button
              variant="primary-white"
              label="Start a Consultation"
              onClick={() => router.push("/contact")}
              className="w-full bg-white hover:bg-[#DDEEFF] text-[#0E2A54] border-0"
            />

            <Button
              variant="secondary"
              label="Explore Our Work"
              onClick={scrollToWorks}
              className="w-full border-white text-white hover:bg-white/10 hover:text-white active:bg-white/20"
            />
          </div>
        </div>
      </div>

     {/* Desktop Layout (Perfected Grid Ratio & Slighly Wider Slider) */}
{/* Desktop Layout (Perfect 50:50 Balanced Grid & Wider Slider) */}
      <div className="kaluna-container hidden md:grid min-h-[520px] lg:min-h-[580px] grid-cols-2 items-center gap-10 lg:gap-16 pt-3 pb-3 md:pt-4 md:pb-4 lg:pt-6 lg:pb-6">
        
        {/* Left Column: Text Content */}
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
            <Button
              variant="primary"
              label="Start a Consultation"
              onClick={() => router.push("/contact")}
            />

            <Button
              variant="secondary"
              label="Explore Our Work"
              onClick={scrollToWorks}
            />
          </div>
        </div>

        {/* Right Column: Slider Container (Expanded to perfect 50% width) */}
        <div className="w-full">
          {/* Height remains tall & premium: h-[420px] (md) -> lg:h-[560px] (lg) -> xl:h-[580px] (xl) */}
          <div className="relative ml-auto h-[420px] lg:h-[560px] xl:h-[580px] w-full overflow-hidden rounded-[32px] bg-[#0E2A54] shadow-xl">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={`Kaluna Tech Portfolio ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}

            {/* Premium Tags */}
            <div className="absolute bottom-5 left-6 z-20 flex flex-wrap gap-3">
              {slides[currentSlide].tags.map((tag, index) => (
                <span
                  key={`tag-${currentSlide}-${index}`}
                  className="rounded-full bg-white px-6 py-3.5 text-xs lg:text-sm font-semibold tracking-[0.01em] text-[#0E2A54] shadow-lg"
                  style={{
                    animation: `floatUp 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Modern Progress Bar */}
            <div className="absolute bottom-0 left-0 z-20 flex h-[5px] w-full bg-[#D6ECFF]">
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