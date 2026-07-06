"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 4000;
  const router = useRouter();

  const slides = [
    { id: 1, image: "/image/Hero/Default.png", tags: ["Company Profile", "Website Development"] },
    { id: 2, image: "/image/Hero/1.png", tags: ["Marketplace", "Point Of Sales"] },
    { id: 3, image: "/image/Hero/2.png", tags: ["AI Integration", "Data Analytics"] },
    { id: 4, image: "/image/Hero/3.png", tags: ["Mobile App", "UI/UX Design"] }
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
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-28 md:pt-40 lg:pt-48 pb-10 bg-white">
      <style>{`
        @keyframes fillProgress { 0% { width: 0%; } 100% { width: 100%; } }
        @keyframes floatUp { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="grid lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-8">
        
        {/* LEFT SECTION */}
        <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="w-1 h-4 bg-[#1E88E5]" />
            <span className="tracking-[0.2em] text-xs font-bold text-[#1E88E5] uppercase">
              KALUNA TECHNOLOGY
            </span>
          </div>
          
          <h1 className="text-[#0D2342] font-extrabold leading-[1.15] tracking-tight text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
            Your Scalable<br className="hidden lg:block" />
            IT Solutions Partner<br className="hidden lg:block" />
            for Modern Enterprises
          </h1>

          <p className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 max-w-2xl mx-auto lg:mx-0">
            We design, build, and integrate intelligent software systems that drive operational efficiency and long-term growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button 
              onClick={() => router.push("/contact")}
              className="group flex items-center rounded-full bg-[#0D2342] py-2 pl-6 pr-2 text-white transition hover:bg-[#163A70] shadow-xl shadow-blue-900/10 w-full sm:w-auto justify-between sm:justify-start"
            >
              <span className="mr-4 text-sm font-medium">Start a Consultation</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E88E5] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </button>

            <button 
              onClick={scrollToWorks}
              className="flex items-center gap-2 text-[#0D2342] font-semibold text-sm hover:text-[#1E88E5] transition-colors"
            >
              Explore Our Works <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (SLIDER) */}
        <div className="order-1 lg:order-2 w-full">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[24px] md:rounded-[40px] bg-gray-100 shadow-2xl shadow-[#1E88E5]/10">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={`Kaluna Tech Portfolio ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex flex-wrap gap-2 md:gap-3 z-20">
              {slides[currentSlide].tags.map((tag, index) => (
                <span
                  key={`tag-${currentSlide}-${index}`}
                  className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white text-[#0D2342] font-bold text-[11px] md:text-[12px] shadow-sm uppercase tracking-wide"
                  style={{ animation: `floatUp 0.5s ease-out forwards`, animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1.5 md:h-2 bg-black/20 flex z-20">
              {slides.map((_, index) => (
                <div key={index} onClick={() => setCurrentSlide(index)} className="flex-1 h-full relative cursor-pointer">
                  {index === currentSlide && (
                    <div
                      className="absolute top-0 left-0 h-full bg-[#1E88E5]"
                      style={{ animation: `fillProgress ${slideDuration}ms linear forwards` }}
                    />
                  )}
                  {index < currentSlide && (
                    <div className="absolute top-0 left-0 h-full w-full bg-[#1E88E5]" />
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