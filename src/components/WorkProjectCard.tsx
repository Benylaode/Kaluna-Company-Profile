"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectData } from "./ProjectCarousel";

interface WorkProjectCardProps {
  projects: ProjectData[];
  /** Index default yang ditampilkan pertama kali. Default: 2 (index ke-3 = Sinau Print) */
  defaultIndex?: number;
}

export default function WorkProjectCard({
  projects,
  defaultIndex = 2,
}: WorkProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  if (!projects || projects.length === 0) return null;

  const pad = (num: number) => num < 10 ? `0${num}` : `${num}`;

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const currentProject = projects[currentIndex];

  return (
    <section className="w-full bg-[#FAFAFA] py-8 md:py-4">
      <div className="mx-auto max-w-[1440px] px-5 md:px-4">
        {/* Light-blue rounded card — same as original ProjectCarousel Figma design */}
        <div className="bg-[#EAF3FF] rounded-[24px] py-12 px-6 md:py-[96px] md:px-[60px] lg:px-[110px]">
          <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-[80px] xl:gap-[114px]">

            {/* Left Column: Typography and Controls */}
            <div className="relative flex flex-col justify-between py-4 lg:py-0">
              <div key={`text-${currentIndex}`} className="transition-all duration-500">
                {/* Pagination Indicator */}
                <div className="hidden md:flex mb-6 items-baseline text-[#A5A5A5] text-[16px] font-bold">
                  <span className="text-[#000000]">{pad(currentIndex + 1)}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span>{pad(projects.length)}</span>
                </div>

                {/* Project Title */}
                <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.015em] text-[#0E2A54] md:text-[36px] lg:text-[40px]">
                  {currentProject.title}
                </h2>

                {/* Project Description */}
                <p className="mt-5 max-w-[480px] text-sm leading-[1.6] tracking-[0.01em] text-[#555555] md:text-base">
                  {currentProject.desc}
                </p>
              </div>

              {/* Desktop-only Buttons and Navigation */}
              <div className="hidden md:flex mt-8 flex-col items-start gap-8">
                <Link href={`/works/${currentProject.slug}`} className="w-full sm:w-fit">
                  <button className="group flex h-12 w-full items-center justify-between gap-6 rounded-full bg-[#0E2A54] py-1.5 pl-6 pr-1.5 text-white transition hover:bg-[#163A70] sm:w-auto cursor-pointer border-0 shadow-md">
                    <span className="text-[15px] font-medium tracking-wide text-white">See Case Studies</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                </Link>

                {/* Slider Controls */}
                <div className="flex items-center gap-[34px] text-sm font-semibold tracking-wider text-gray-400">
                  <button
                    onClick={handlePrev}
                    className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-xs"
                  >
                    <span>&#8592;</span> PREVIOUS
                  </button>
                  <button
                    onClick={handleNext}
                    className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-xs"
                  >
                    NEXT PROJECT <span>&#8594;</span>
                  </button>
                </div>
              </div>

              {/* Mobile-only Slider Controls */}
              <div className="flex md:hidden items-center justify-between mt-6 w-full text-xs font-bold tracking-wider text-gray-400 border-b border-gray-100 pb-5">
                <button 
                  onClick={handlePrev} 
                  className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-[#0D2342]/70 font-semibold"
                >
                  <span>←</span> PREVIOUS
                </button>
                <button 
                  onClick={handleNext} 
                  className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-[#0D2342]/70 font-semibold"
                >
                  NEXT PROJECT <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Device Showcase Card */}
            <div className="relative w-full aspect-[979/711] overflow-hidden rounded-[24px] bg-[#0E2A54] shadow-lg">
              {projects.map((project, pIndex) => (
                <div
                  key={`work-project-${project.id}`}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${pIndex === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  {project.images?.[0] && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </div>
              ))}

              {/* Browser Window Controls (Top Left) */}
              <div className="absolute left-6 top-6 z-20 flex items-center gap-1.5 md:left-8 md:top-8">
                <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
              </div>

              {/* Client Indicator (Bottom Left) */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 md:bottom-8 md:left-8">
                <div className="h-4 w-[3px] bg-[#299EED] rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                  {projects[currentIndex].client}
                </span>
              </div>
            </div>

            {/* Mobile-only CTA Button */}
            <div className="flex md:hidden w-full mt-4">
              <Link href={`/works/${currentProject.slug}`} className="w-full">
                <button className="group flex h-14 w-full items-center justify-between gap-4 rounded-full bg-[#0E2A54] py-2 pl-8 pr-2 text-white transition hover:bg-[#163A70] cursor-pointer border-0 shadow-md">
                  <span className="text-sm font-medium tracking-[0.02em] text-white">See Detail Project</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
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