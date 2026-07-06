"use client";

import { useState, useEffect } from "react";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!projects || projects.length === 0) return null;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    const currentProject = projects[currentIndex];
    if (!currentProject || !currentProject.images || currentProject.images.length <= 1) return;
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => prev === currentProject.images.length - 1 ? 0 : prev + 1);
    }, 3000);
    return () => clearInterval(imageTimer);
  }, [currentIndex, projects]);

  const totalProjects = projects.length < 10 ? `0${projects.length}` : projects.length.toString();
  const displayId = (currentIndex + 1) < 10 ? `0${currentIndex + 1}` : (currentIndex + 1).toString();

  const handleNext = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-10 md:py-20 bg-white">
      <div className="grid lg:grid-cols-[1fr_1.3fr] items-center gap-10 lg:gap-16">
        
        {/* LEFT SECTION (TEXT) */}
        <div className="flex h-full flex-col order-2 lg:order-1 relative">
          <div key={`text-${currentIndex}`} className="animate-fade-in transition-all duration-500">
            <div className="mb-6 flex items-center gap-4 text-xs font-bold tracking-widest text-[#0D2342]">
              <span>{displayId}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400">{totalProjects}</span>
            </div>

            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold leading-[1.1] tracking-tight text-[#0D2342]">
              {projects[currentIndex].title}
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-500">
              {projects[currentIndex].desc}
            </p>
          </div>

          <Link href={`/works/${projects[currentIndex].slug}`} className="mt-10 md:mt-12 w-fit">
            <button className="group flex items-center rounded-full bg-[#0D2342] py-2 pl-6 pr-2 text-white transition hover:bg-[#163A70] shadow-lg">
              <span className="mr-4 text-sm font-medium">See Case Studies</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E88E5] group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </button>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex mt-auto pt-24 gap-8">
            <button onClick={handlePrev} className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-[#0D2342] transition-colors">
              &lt; Previous
            </button>
            <button onClick={handleNext} className="text-sm font-bold uppercase tracking-wider text-[#0D2342] hover:text-[#1E88E5] transition-colors">
              Next Project &gt;
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (IMAGE) */}
        <div className="order-1 lg:order-2 w-full h-[300px] sm:h-[450px] lg:h-[550px] relative rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#0D2342] shadow-2xl">
          {projects.map((project, pIndex) => (
            <div
              key={`project-${project.id}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                pIndex === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {project.images.map((imgUrl, iIndex) => (
                <img
                  key={`img-${project.id}-${iIndex}`}
                  src={imgUrl}
                  alt={`${project.title} - ${iIndex}`}
                  className={`absolute inset-0 w-full h-full object-cover md:object-contain p-0 md:p-8 transition-opacity duration-700 ${
                    pIndex === currentIndex && iIndex === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          ))}

          {/* Overlays & Indicators */}
          <div className="absolute top-6 left-6 flex items-center gap-2 z-20">
            {projects.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-3 h-3 bg-white" : "w-2.5 h-2.5 bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-6 left-6 z-20">
            <span className="text-white font-bold tracking-widest text-xs uppercase bg-[#0D2342]/50 px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/10">
              {projects[currentIndex].client}
            </span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden order-3 justify-between w-full mt-4">
          <button onClick={handlePrev} className="text-xs font-bold uppercase tracking-wider text-gray-500">
            &lt; Prev
          </button>
          <button onClick={handleNext} className="text-xs font-bold uppercase tracking-wider text-[#0D2342]">
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}