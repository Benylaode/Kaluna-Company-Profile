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
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" });

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      const totalScrollable = scrollWidth - clientWidth;
      const progress = totalScrollable > 0 ? (scrollLeft / totalScrollable) * 100 : 0;
      setScrollProgress(progress);

      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 240 + 24 : 300 + 40;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(index, worksData.length - 1)));
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section id="works-section" className="bg-[#FAFAFA] py-20 md:py-28">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .kaluna-diagonal {
          background: linear-gradient(135deg, #0B1E36 0%, #0D2342 40%, #1a3a6e 100%);
        }
        /* Masking gradual blur dari transparan ke penuh */
        .blur-mask-extended {
          backdrop-filter: blur(4px);
          mask-image: linear-gradient(to right, transparent 0%, black 40px);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 40px);
        }
      `}</style>

      <div className="kaluna-wide-container">
        <div className="relative overflow-hidden rounded-[24px] kaluna-diagonal px-6 py-10 text-white md:px-12 md:py-16 lg:px-16 lg:py-20">

          {/* Header Section */}
          <div className="mb-6 flex items-center justify-between md:mb-10">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-white/90">
                <span className="h-4 w-[2.5px] bg-[#299EED] rounded-full" />
                IMPLEMENTATION PROCESS
              </span>
            </div>

            <div className="hidden gap-3 md:flex">
              <button onClick={scrollLeft} className="group flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#299EED] hover:bg-[#299EED] cursor-pointer">
                <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={scrollRight} className="group flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#299EED] hover:bg-[#299EED] cursor-pointer">
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Wrapper Utama Container Slider */}
          <div className="relative w-full">

            {/* CARDS CONTAINER */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="hide-scrollbar flex gap-6 overflow-x-auto pb-6 scroll-smooth md:pb-12"
            >
              {worksData.map((item, index) => {
                const displayId = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      const isMobile = window.innerWidth < 768;
                      const cardTotalWidth = isMobile ? (240 + 24) : (300 + 40);
                      scrollRef.current?.scrollTo({ left: index * cardTotalWidth, behavior: 'smooth' });
                    }}
                    className={`group cursor-pointer relative flex h-[320px] w-[240px] flex-shrink-0 flex-col overflow-hidden rounded-[24px] p-3 md:p-3.5 transition-all duration-500 hover:-translate-y-1 md:h-[360px] md:w-[300px] border ${isActive
                      ? "bg-white text-[#0D0D0D] shadow-xl border-transparent"
                      : "bg-[#253F69]/60 text-white border-white/10"
                      }`}
                  >
                    <div className="relative h-[160px] w-full overflow-hidden rounded-[16px] md:h-[180px]">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      {!isActive && (
                        <div className="absolute inset-0 bg-[#0B1E36]/10 transition-all duration-500"></div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between pt-4 px-1 md:px-2 pb-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className={`flex-1 text-[17px] leading-[1.3] tracking-[-0.015em] md:text-[20px] ${isActive ? "font-semibold text-[#0D0D0D]" : "font-normal text-white"
                          }`}>
                          {item.title}
                        </h3>
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-medium md:h-7 md:w-7 md:text-xs ${isActive ? "bg-[#0E2A54] text-white" : "border border-white/20 text-white/80"
                          }`}>
                          {displayId}
                        </span>
                      </div>
                      <p className={`text-xs leading-[1.4] md:text-sm mt-2 ${isActive ? "text-[#555555]" : "text-white/60"
                        }`}>
                        {item.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MEKANISME OVERLAY BLUR TOTAL YANG DIMULAI TEPAT DI BELAKANG KOTAK PERTAMA */}
            {/* Menggunakan kalkulasi lebar Tailwind agar pas di sela antara kotak pertama dan kedua */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 z-10 hidden rounded-r-[24px] md:block"
              style={{ left: "calc(300px + 24px)", right: 0 }} // Lebar kotak pertama (300px) + gap-6 (24px)
            >
              {/* Layer 1: Gradasi warna background untuk mematangkan transisi gelap menyesuaikan dengan gradient parent (#1a3a6e ke #0D2342) */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#1a3a6e] via-[#0D2342]/70 to-transparent opacity-80" />

              {/* Layer 2: Efek blur merata ke kanan yang melumatkan teks & gambar */}
              <div className="blur-mask-extended absolute inset-0 rounded-r-[24px]" />
            </div>

            {/* Versi Mobile Overlay Blur (Disesuaikan dengan w-[240px]) */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 z-10 block rounded-r-[24px] md:hidden"
              style={{ left: "calc(240px + 24px)", right: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-[#1a3a6e] via-[#0D2342]/70 to-transparent opacity-80" />
              <div className="blur-mask-extended absolute inset-0 rounded-r-[24px]" />
            </div>

          </div>

          {/* Progress Bar Section */}
          <div className="mt-8 md:mt-10 mb-2">
            <div className="relative h-1 w-full max-w-[260px] bg-white/20 md:max-w-3xl rounded-full">
              {/* Triangle pointer */}
              <div
                className="absolute -top-[14px] ml-[-6px] transition-all duration-300 ease-out"
                style={{ left: `${scrollProgress}%` }}
              >
                <div className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#299EED]"></div>
              </div>

              {/* Progress line */}
              <div
                className="absolute left-0 top-0 h-full bg-[#299EED] transition-all duration-300 ease-out rounded-full"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}