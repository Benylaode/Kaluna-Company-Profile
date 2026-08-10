"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

export interface HeroProjectData {
  id: number;
  slug?: string;
  client: string;
  title: string;
  category: string;
  images: string[];
}

export default function Hero({ projects }: { projects?: HeroProjectData[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 4000;
  const router = useRouter();

  // Pemetaan poin-poin fitur ke gambar proyek yang sesuai
  const featurePoints = [
    {
      id: 1,
      image: "/image/projects/X-Tire/1.webp",
      tags: ["Corporate Website"],
      slug: "x-tire-company-profile",
    },
    {
      id: 2,
      image: "/image/projects/sinau-print-erp/1.webp",
      tags: ["Responsive Web Experience"],
      slug: "sinau-print-platform",
    },
    {
      id: 3,
      image: "/image/projects/web-media-profile/1.webp",
      tags: ["Conversion-Focused Design"],
      slug: "10-media-publishing-portal",
    },
    {
      id: 4,
      image: "/image/projects/arsalynk/1.webp",
      tags: ["Integrated Digital Platform"],
      slug: "arsalynk-enterprise-platform",
    },
    {
      id: 5,
      image: "/image/projects/aspoo/1.webp",
      tags: ["Custom Web Application"],
      slug: "aspoo-asset-management",
    },
    {
      id: 6,
      image: "/image/projects/artic-complex-web/1.webp",
      tags: ["Data-Driven Analytics Engine"],
      slug: "artic-analytical-science",
    },
  ];

  // Menggunakan featurePoints dengan gambar proyek yang mewakilinya
  const slides = featurePoints;

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
        .hero-animate-title,
        .hero-animate-text,
        .hero-animate-buttons {
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
        }

        @keyframes fillHeroProgress {
          0% {
            transform: scaleX(0);
            -webkit-transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
            -webkit-transform: scaleX(1);
          }
        }

        @-webkit-keyframes fillHeroProgress {
          0% {
            -webkit-transform: scaleX(0);
          }
          100% {
            -webkit-transform: scaleX(1);
          }
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
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding={index === 0 ? "sync" : "async"}
              className={`absolute left-1/2 top-0 h-full w-auto min-w-full -translate-x-1/2 object-cover object-center transition-opacity duration-300 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 h-[200px] sm:h-[250px] bg-gradient-to-b from-[#0E2A54]/0 to-[#0E2A54]" />
        </div>

        {/* Animated Progress Bar Mobile */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex h-[5px] w-full bg-[#D6ECFF] overflow-hidden">
          {slides.map((_, index) => (
            <div key={index} onClick={() => setCurrentSlide(index)} className="relative h-full flex-1 cursor-pointer">
              {index === currentSlide && (
                <div
                  key={`hero-mobile-progress-${currentSlide}`}
                  className="absolute left-0 top-0 h-full w-full bg-[#299EED]"
                  style={{
                    transformOrigin: "left",
                    WebkitTransformOrigin: "left",
                    animation: `fillHeroProgress ${slideDuration}ms linear forwards`,
                    WebkitAnimation: `fillHeroProgress ${slideDuration}ms linear forwards`,
                    willChange: "transform",
                  }}
                />
              )}
              {index < currentSlide && (
                <div className="absolute left-0 top-0 h-full w-full bg-[#299EED]" />
              )}
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-[300px] sm:top-[360px] px-5">
          <h1 className="hero-animate-title text-[28px] sm:text-[36px] font-semibold leading-[1.14] tracking-[-0.02em] text-white">
            Your Digital Growth Partner for Modern Enterprises.
          </h1>
          <p className="hero-animate-text mt-3 sm:mt-4 text-sm sm:text-base leading-[1.6] tracking-[0.01em] text-white/95">
            We build high-performance websites that blend stunning design with intelligent functionality, so you can scale your brand without technical bottlenecks.
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
      <div className="kaluna-container hidden md:grid min-h-[520px] lg:min-h-[580px] grid-cols-2 items-center gap-8 lg:gap-12 pt-3 pb-3 md:pt-4 md:pb-4 lg:pt-6 lg:pb-6">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-2.5">
            <span className="h-4 w-[2.5px] bg-[#299EED] rounded-full"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.12em] text-[#0E2A54] uppercase">
              Kaluna Technology
            </span>
          </div>

          <h1 className="hero-animate-title text-[34px] md:text-[42px] lg:text-[50px] xl:text-[54px] font-semibold leading-[1.12] tracking-[-0.025em] text-[#0E2A54]">
            Your Digital Growth<br />
            Partner<br />
            for Modern Enterprises
          </h1>

          <p className="hero-animate-text max-w-[500px] text-base lg:text-[17px] leading-[1.6] text-[#4B5563]">
            We build high-performance websites that blend stunning design with intelligent functionality, so you can scale your brand without technical bottlenecks.
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
                // Slide pertama = LCP element utama pada desktop
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding={index === 0 ? "sync" : "async"}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}

            {/* Static Tags */}
            <div className="absolute bottom-5 left-6 z-20 flex flex-wrap gap-3">
              {slides[currentSlide].tags.map((tag, index) => (
                <span
                  key={`tag-${currentSlide}-${index}`}
                  className="rounded-full bg-[#FFFFFF] px-6 py-3.5 text-xs lg:text-sm font-semibold tracking-[0.01em] text-[#0E2A54] shadow-lg opacity-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Animated Progress Bar Desktop */}
            <div className="absolute bottom-0 left-0 z-20 flex h-[5px] w-full bg-[#D6ECFF] overflow-hidden">
              {slides.map((_, index) => (
                <div key={index} onClick={() => setCurrentSlide(index)} className="relative h-full flex-1 cursor-pointer">
                  {index === currentSlide && (
                    <div
                      key={`hero-progress-${currentSlide}`}
                      className="absolute left-0 top-0 h-full w-full bg-[#299EED]"
                      style={{
                        transformOrigin: "left",
                        WebkitTransformOrigin: "left",
                        animation: `fillHeroProgress ${slideDuration}ms linear forwards`,
                        WebkitAnimation: `fillHeroProgress ${slideDuration}ms linear forwards`,
                        willChange: "transform",
                      }}
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
