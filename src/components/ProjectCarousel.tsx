"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

  if (!projects || projects.length === 0) return null;

  const handleNext = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const currentProject = projects[currentIndex];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="kaluna-container">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16 xl:gap-20">
          
          {/* Left Column: Typography and Controls */}
          <div className="relative flex flex-col justify-between py-4 lg:py-0 min-h-[400px] md:min-h-[454px]">
            <div key={`text-${currentIndex}`} className="transition-all duration-500">
              {/* Pagination/Paging Indicator */}
              <div className="mb-6 flex items-baseline text-[#C7C7CC] text-[16px] font-bold">
                <span className="text-[#000000]">{String(currentIndex + 1).padStart(1, "0")}</span>
                <span className="mx-2 text-gray-300">/</span>
                <span className="text-[#C7C7CC]">{String(projects.length).padStart(1, "0")}</span>
              </div>
 
              {/* Project Title */}
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.015em] text-[#0E2A54]">
                {currentProject.title}
              </h2>
 
              {/* Project Description */}
              <p className="mt-6 max-w-[633px] text-sm md:text-[18px] leading-[1.5] tracking-[0.02em] text-[#3F3F3F]">
                {currentProject.desc}
              </p>
            </div>
 
            {/* Buttons and Navigation */}
            <div className="mt-8 flex flex-col items-start gap-8">
              <Link href={`/works/${currentProject.slug}`} className="w-full sm:w-fit">
                <button className="group flex h-14 w-full sm:w-[240px] items-center justify-between gap-4 rounded-full bg-[#0E2A54] py-2 pl-8 pr-2 text-white transition hover:bg-[#163A70] cursor-pointer border-0 shadow-md">
                  <span className="text-sm font-medium tracking-[0.02em] md:text-base text-white">View Case Study</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </Link>
 
              {/* Slider Controls */}
              <div className="flex items-center gap-[34px] text-sm font-semibold tracking-wider text-gray-400">
                <button 
                  onClick={handlePrev} 
                  className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-xs"
                >
                  <span>←</span> PREVIOUS
                </button>
                <button 
                  onClick={handleNext} 
                  className="transition-colors hover:text-[#0E2A54] cursor-pointer flex items-center gap-1.5 uppercase text-xs"
                >
                  NEXT PROJECT <span>→</span>
                </button>
              </div>
            </div>
          </div>
 
          {/* Right Column: Device Showcase Card (Aspect ratio 979:711 matching Figma) */}
          <div className="relative w-full aspect-[979/711] overflow-hidden rounded-[24px] bg-[#0E2A54] shadow-lg">
            {projects.map((project, pIndex) => (
              <div
                key={`project-${project.id}`}
                className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
                  pIndex === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
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

            {/* Browser Window Controls Mockup (Top Left) */}
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

        </div>
      </div>
    </section>
  );
}