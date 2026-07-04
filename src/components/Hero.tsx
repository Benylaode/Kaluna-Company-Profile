"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 4000; // 4 detik per slide
  const router = useRouter();

  // Data slide
  const slides = [
    {
      id: 1,
      image: "/layout/section/banner.png", 
      tags: ["Marketplace", "Point Of Sales"],
    },
    {
      id: 2,
      image: "/layout/section/banner2.png", 
      tags: ["Company Profile", "Website Development"],
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, slideDuration); 
    
    return () => clearInterval(timer);
  }, [slides.length]);

  // Fungsi untuk scroll otomatis ke Footer
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fungsi opsional untuk scroll ke Our Works
  const scrollToWorks = () => {
    const worksElement = document.getElementById("works-section");
    if (worksElement) {
      worksElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mx-auto max-w-[1500px] px-8 lg:px-12 pt-36 pb-24 bg-[#F7FAFF]">
      
      {/* Keyframes untuk Progress Bar & Tag Float */}
      <style>{`
        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="grid lg:grid-cols-[56%_44%] items-center gap-8">
        
        {/* ================= LEFT SECTION ================= */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-6 bg-[#2D8CFF]" />
            <span className="tracking-[0.25em] text-sm font-bold text-[#163A70]">
              KALUNA TECHNOLOGY
            </span>
          </div>
          
          <h1
            className="
              max-w-[650px]
              text-[#102A52]
              font-bold
              leading-[1.08]
              tracking-[-0.03em]
              text-[38px]
              md:text-[42px]
              lg:text-[46px]
              xl:text-[50px]
              2xl:text-[54px]
            "
          >
            Your Scalable
            <br />
            IT Solutions Partner
            <br />
            for Modern Enterprises
          </h1>

          <p
            className="
              mt-8
              max-w-[560px]
              text-lg
              xl:text-xl
              leading-9
              text-slate-600
            "
          >
            We design, build, and integrate intelligent software systems that
            drive operational efficiency and long-term growth.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            {/* Tombol Start a Consultation dipasang onClick */}
            <button 
              onClick={() => router.push("/contact")}
              className="group flex items-center rounded-full bg-[#102A52] py-2 pl-7 pr-2 text-white transition hover:bg-[#163A70] shadow-lg shadow-blue-900/20"
            >
              <span className="mr-5 text-sm font-medium">Start a Consultation</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2D8CFF] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </button>

            {/* Tombol Explore Our Works dipasang onClick */}
            <button 
              onClick={scrollToWorks}
              className="rounded-full border-2 border-[#102A52] px-10 py-3 text-lg font-medium text-[#102A52] hover:bg-[#102A52] hover:text-white transition-all duration-300"
            >
              Explore Our Works
            </button>
          </div>
        </div>

        {/* ================= RIGHT SECTION (SLIDER) ================= */}
        <div className="flex justify-end w-full">
          
          <div className="relative w-full max-w-[760px] aspect-[4/3] overflow-hidden rounded-[36px] bg-gray-100 shadow-2xl">
            
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={`Kaluna Tech Portfolio ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? "opacity-100 z-10" 
                    : "opacity-0 z-0"
                }`}
              />
            ))}

            <div className="absolute bottom-8 left-8 flex flex-wrap gap-3 z-20">
              {slides[currentSlide].tags.map((tag, index) => (
                <span
                  key={`tag-${currentSlide}-${index}`}
                  className="px-5 py-2.5 rounded-full bg-white text-[#102A52] font-semibold text-[13px] shadow-sm"
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

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#9BD3FF] flex z-20">
              {slides.map((_, index) => (
                <div 
                  key={index} 
                  onClick={() => setCurrentSlide(index)}
                  className="flex-1 h-full relative cursor-pointer"
                >
                  {index === currentSlide && (
                    <div
                      key={`progress-${currentSlide}`}
                      className="absolute top-0 left-0 h-full bg-[#2D8CFF]"
                      style={{ 
                        animation: `fillProgress ${slideDuration}ms linear forwards` 
                      }}
                    />
                  )}
                  {index < currentSlide && (
                    <div className="absolute top-0 left-0 h-full w-full bg-[#2D8CFF]" />
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