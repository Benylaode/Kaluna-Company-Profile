"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectData } from "./ProjectCarousel";
import LazyImage from "./LazyImage";

interface WorkProjectCardProps {
  projects: ProjectData[];
  /** Index default yang ditampilkan pertama kali. Default: 2 */
  defaultIndex?: number;
}

export default function WorkProjectCard({
  projects,
  defaultIndex = 2,
}: WorkProjectCardProps) {
  // Memastikan defaultIndex tidak di luar jangkauan array saat inisialisasi awal
  const initialIndex = defaultIndex < projects.length ? defaultIndex : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sinkronisasi state jika data projects berubah dari parent
  useEffect(() => {
    if (projects && currentIndex >= projects.length) {
      setCurrentIndex(0);
    }
  }, [projects, currentIndex]);

  if (!projects || projects.length === 0) return null;

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  // Menjamin index selalu aman untuk mencegah crash runtime
  const safeIndex = currentIndex < projects.length ? currentIndex : 0;
  const currentProject = projects[safeIndex];

  return (
    <section className="w-full bg-[#FFFFFF] pb-16 pt-6 md:pb-16 md:pt-6">
      <div className="kaluna-wide-container">
        
        <div className="bg-[#EAF3FF] rounded-[24px] py-8 px-6 md:py-12 md:px-10 lg:py-14 lg:px-12">
          
          {/* Parent Grid dengan items-stretch seperti ProjectCarousel */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20 w-full items-stretch">

            {/* KOLOM KIRI (Typography & Controls) */}
            <div className="relative flex flex-col pl-0 pr-6 lg:pr-12 lg:col-span-5">
              <div className="flex flex-col h-full justify-between flex-1">
                
                {/* Animasi teks terisolasi agar tombol navigasi di bawah tidak ikut berkedip */}
                <div key={`text-${safeIndex}`} className="animate-fade-in">
                  
                  {/* Pagination Indicator - Menggunakan format bar/garis tegak | */}
                  <div className="hidden md:flex mb-8 items-baseline text-[#C7C7CC] font-medium text-[12px]">
                    <span className="text-[#000000]">{safeIndex + 1}</span>
                    <span className="mx-2 text-gray-300" aria-hidden="true">|</span>
                    <span className="text-[#C7C7CC]">{projects.length}</span>
                  </div>

                  {/* Project Title */}
                  <h2 className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] tracking-[-0.03em] font-medium text-[#0D0D0D]">
                    {currentProject.title}
                  </h2> 

                  {/* Project Description */}
                  <p className="mt-6 max-w-[520px] text-[6px] md:text-[14px] leading-[1.75] tracking-[0.02em] text-[#3F3F3F]">
                    {currentProject.desc}
                  </p>

                  {/* Desktop CTA Button */}
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

                {/* Slider Controls (Desktop) - Tetap kokoh tanpa re-mount */}
                <div className="hidden md:flex mt-auto pt-8 items-center gap-[34px] text-[13px] font-bold tracking-[0.08em] text-[#C7C7CC]">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-2 uppercase text-[12px] text-gray-400"
                  >
                    <span className="font-mono" aria-hidden="true">&lt;</span> PREVIOUS
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next project"
                    className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-2 uppercase text-[12px] text-gray-400"
                  >
                    NEXT PROJECT <span className="font-mono" aria-hidden="true">&gt;</span>
                  </button>
                </div>

                {/* Mobile-only Slider Controls */}
                <div className="flex md:hidden items-center justify-between mt-6 w-full text-xs font-bold tracking-wider text-gray-400 border-b border-gray-100 pb-5">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-[#0D2342]/70 font-semibold"
                  >
                    <span className="font-mono" aria-hidden="true">&lt;</span> PREVIOUS
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next project"
                    className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-[#0D2342]/70 font-semibold"
                  >
                    NEXT PROJECT <span className="font-mono" aria-hidden="true">&gt;</span>
                  </button>
                </div>

              </div>
            </div>

            {/* KOLOM KANAN (Showcase Gambar) */}
            <div className="w-full min-w-0 overflow-hidden lg:col-span-7">
              <div className="relative w-full aspect-[979/711] overflow-hidden rounded-[24px] bg-[#0E2A54] shadow-lg">
                {projects.map((project, pIndex) => (
                  <div
                    key={`work-project-${project.id}`}
                    className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-out ${
                      pIndex === safeIndex 
                        ? "opacity-100 z-10" 
                        : "opacity-0 z-0 pointer-events-none"
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

                {/* Dinamis Slider Dots / Pagination (Mengikuti ProjectCarousel) */}
                <div className="absolute left-8 top-8 z-20 flex items-center gap-3 md:left-10 md:top-10 drop-shadow-md">
                  {projects.map((_, pIndex) => (
                    <button
                      key={`dot-${pIndex}`}
                      onClick={() => setCurrentIndex(pIndex)}
                      className={`h-4 w-4 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${
                        pIndex === safeIndex
                          ? "bg-white border-[3.5px] border-[#299EED]"
                          : "bg-[#8E9CAD]/90 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${pIndex + 1}`}
                    />
                  ))}
                </div>

                {/* Client Indicator */}
                <div className="absolute bottom-6 left-8 z-20 flex items-center gap-2 md:bottom-8 md:left-10 drop-shadow-md">
                  <div className="h-5 w-[3px] bg-[#299EED] rounded-full" />
                  <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white">
                    {projects[safeIndex]?.client}
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
      </div>
    </section>
  );
}