"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LazyImage from "./LazyImage";

export interface ProjectData {
  id: number;
  slug: string;
  client: string;
  title: string;
  desc: string;
  category: string;
  images: string[];
}

export default function ProjectCarousel({ projects }: { projects: ProjectData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  if (!projects || projects.length === 0) return null;

  const handleNext = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  useEffect(() => {
    setProgress(0);
    const interval = 50;
    const duration = 5000;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          setCurrentIndex((curr) => (curr === projects.length - 1 ? 0 : curr + 1));
          return 0;
        }
        return prev + step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, projects.length]);

  const currentProject = projects[currentIndex];

  return (
    <section className="w-full bg-white py-16 md:pb-24 md:pt-12">
      <div className="kaluna-container">
        
        {/* 
          Parent Grid dengan `items-stretch` agar tinggi kolom kiri dan kanan 100% sama.
          Menggunakan `min-w-0` pada grid child menjamin tidak ada layout yang bocor keluar kontainer.
        */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20 w-full items-stretch">

          {/* 
            KOLOM KIRI (Typography & Controls)
            - Menghapus padding vertikal (`py-2`, `lg:py-4`) agar posisinya murni 
              menempel di ujung atas dan bawah sejajar dengan gambar di kanan.
          */}
          <div className="relative flex flex-col pl-0 pr-6 lg:pr-12 lg:col-span-5">
            <div key={`text-${currentIndex}`} className="animate-fade-in flex flex-col h-full justify-between flex-1">
              
              <div>
                {/* 
                  PAGING INDICATOR (Sejajar ujung atas gambar)
                  - Menghilangkan margin-top/padding-top agar menempel tepat di garis batas atas grid.
                */}
                <div className="hidden md:flex mb-8 items-baseline text-[#C7C7CC] font-medium text-[16px]">
                  <span className="text-[#000000]">{currentIndex + 1}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-[#C7C7CC]">{projects.length}</span>
                </div>

                {/* Project Title */}
                <h2 className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] tracking-[-0.03em] font-medium text-[#0D0D0D]">
                  {currentProject.title}
                </h2>

                {/* Project Description */}
                <p className="mt-6 max-w-[520px] text-sm md:text-[16px] leading-[1.75] tracking-[0.02em] text-[#0D0D0D]">
                  {currentProject.desc}
                </p>

                {/* CTA Button */}
                <div className="hidden md:block mt-8">
                  <Link href={`/works/${currentProject.slug}`} className="w-full sm:w-fit">
                    <button className="group flex h-[60px] w-full sm:w-[250px] items-center justify-between gap-4 rounded-full bg-[#0E2A54] py-2 pl-8 pr-2.5 text-white transition hover:bg-[#163A70] cursor-pointer border-0 shadow-none">
                      <span className="text-sm font-medium tracking-[0.02em] md:text-base text-white">See Case Studies</span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={18} />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              {/* 
                NAVIGATION CONTROLS (Sejajar ujung bawah gambar)
                - `mt-auto` mendorong elemen ini jatuh tepat ke baris terbawah grid penyeimbang gambar.
              */}
              <div className="hidden md:flex mt-auto pt-8 items-center gap-[34px] text-[13px] font-bold tracking-[0.08em] text-[#C7C7CC]">
                <button
                  onClick={handlePrev}
                  className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-2 uppercase text-[12px] text-gray-400"
                >
                  <span className="font-mono">&lt;</span> PREVIOUS
                </button>
                <button
                  onClick={handleNext}
                  className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-2 uppercase text-[12px] text-gray-400"
                >
                  NEXT PROJECT <span className="font-mono">&gt;</span>
                </button>
              </div>

              {/* Mobile-only Slider Controls */}
              <div className="flex md:hidden items-center justify-between mt-6 w-full text-xs font-bold tracking-wider text-gray-400 border-b border-gray-100 pb-5">
                <button
                  onClick={handlePrev}
                  className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-[#0D2342]/70 font-semibold"
                >
                  <span className="font-mono">&lt;</span> PREVIOUS
                </button>
                <button
                  onClick={handleNext}
                  className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-[#0D2342]/70 font-semibold"
                >
                  NEXT PROJECT <span className="font-mono">&gt;</span>
                </button>
              </div>

            </div>
          </div>

          {/* KOLOM KANAN (Sebagai patokan tinggi utama) */}
          <div className="w-full min-w-0 overflow-hidden lg:col-span-7">
            <div className="relative w-full aspect-[979/711] overflow-hidden rounded-[24px] bg-[#0E2A54] shadow-lg">
              {projects.map((project, pIndex) => (
                <div
                  key={`project-${project.id}`}
                  className={`absolute inset-0 h-full w-full transition-all duration-700 ease-out transform ${
                    pIndex === currentIndex ? "opacity-100 translate-y-0 z-10" : "opacity-0 -translate-y-8 z-0"
                  }`}
                >
                  {project.images?.[0] && (
                    <LazyImage
                      src={project.images[0]}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  )}
                </div>
              ))}

              {/* Dinamis Slider Dots / Pagination */}
              <div className="absolute left-8 top-8 z-20 flex items-center gap-3 md:left-10 md:top-10 drop-shadow-md">
                {projects.map((_, pIndex) => (
                  <button
                    key={`dot-${pIndex}`}
                    onClick={() => setCurrentIndex(pIndex)}
                    className={`h-4 w-4 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${
                      pIndex === currentIndex
                        ? "bg-white border-[3.5px] border-[#299EED]"
                        : "bg-[#8E9CAD]/90 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${pIndex + 1}`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-black/20 w-full z-20 overflow-hidden">
                <div 
                  className="h-full bg-[#299EED] transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Client Indicator */}
              <div className="absolute bottom-6 left-8 z-20 flex items-center gap-2 md:bottom-8 md:left-10 drop-shadow-md">
                <div className="h-5 w-[3px] bg-[#299EED] rounded-full" />
                <span 
                  key={`client-${currentIndex}`} 
                  className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white animate-[slideRight_0.5s_ease-out_forwards] opacity-0"
                >
                  <style>{`
                    @keyframes slideRight {
                      from { opacity: 0; transform: translateX(-15px); }
                      to { opacity: 1; transform: translateX(0); }
                    }
                  `}</style>
                  {projects[currentIndex].client}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile-only CTA Button */}
          <div className="flex md:hidden w-full mt-4">
            <Link href={`/works/${currentProject.slug}`} className="w-full">
              <button className="group flex h-[60px] w-full items-center justify-between gap-4 rounded-full bg-[#0E2A54] py-2 pl-8 pr-2.5 text-white transition hover:bg-[#163A70] cursor-pointer border-0 shadow-none">
                <span className="text-sm font-medium tracking-[0.02em] text-white">See Detail Project</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}