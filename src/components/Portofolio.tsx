"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export default function Portfolio({
  projects,
}: {
  projects: ProjectData[];
}) {
  const [current, setCurrent] = useState(0);

  if (!projects || projects.length === 0) return null;

  const visibleCards = 3;

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= projects.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? Math.max(projects.length - visibleCards, 0) : prev - 1
    );
  };

  return (
    <section className="relative">
      {/* Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-105 transition"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-105 transition"
      >
        <ChevronRight size={22} />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${current * (100 / visibleCards)}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-full md:min-w-[33.3333%] flex-shrink-0"
            >
              <Link href={`/works/${project.slug}`}>
                <div className="relative h-[220px] rounded-[24px] overflow-hidden shadow-sm bg-gray-900 group cursor-pointer">
                  <LazyImage
                    src={project.images[0]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute bottom-5 inset-x-5">
                    <h5 className="font-bold text-white text-sm md:text-base leading-snug">
                      {project.title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}