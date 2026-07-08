"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTA from "../../src/components/CTA";
import ProjectCarousel, { ProjectData } from '../../src/components/ProjectCarousel';
import WorkProjectCard from '../../src/components/WorkProjectCard';
import { getWorks } from "../../src/lib/actions";

// Sub-komponen ImageSlider untuk efek pergantian gambar otomatis di dalam kartu
const ImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        />
      ))}
    </>
  );
};

export default function WorksPage() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter state (matches Figma pills: All Works, Web & App, IoT System)
  const [activeFilter, setActiveFilter] = useState<"All Works" | "Web & App" | "IoT System">("All Works");

  // State untuk mengatur Load More (Default tampilkan 5: 1 Besar + 4 Grid)
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getWorks();
        setProjects(data as unknown as ProjectData[]);
      } catch (error) {
        console.error("Gagal mengambil data works:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    setVisibleCount(5);
  }, [activeFilter]);

  // Helper mapping untuk filter
  const getProjectType = (category: string) => {
    if (category === "Website Development" || category === "Software Development") {
      return "Web & App";
    }
    if (category === "IoT System" || category === "Backend & IoT") {
      return "IoT System";
    }
    return "Web & App";
  };

  // Mockup data mapping
  const getMockupData = (slug: string) => {
    const s = slug.toLowerCase();
    if (s.includes("x-1-tire")) {
      return { title: "Company Profile Revamp for X-1 Tire", category: ["Website Development"] };
    }
    if (s.includes("navicom")) {
      return { title: "Smart Home System for Navicom Indonesia", category: ["IoT"] };
    }
    if (s.includes("sinau-print")) {
      return { title: "Point of Sales System for Sinau Print", category: ["Software"] };
    }
    if (s.includes("suara-merdeka")) {
      return { title: "Website Refresh for Suara Merdeka Generation", category: ["Website Development"] };
    }
    if (s.includes("korlantas")) {
      return { title: "E-Drives Development for Korlantas Polri", category: ["IoT", "Software"] };
    }
    return { title: "", category: [] };
  };

  // Filter Logic
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All Works") return true;
    if (activeFilter === "Web & App") {
      return p.category === "Website Development" || p.category === "Software Development";
    }
    if (activeFilter === "IoT System") {
      return p.category === "IoT System" || p.category === "Backend & IoT";
    }
    return true;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const isDefaultFilter = activeFilter === "All Works";
  const featuredProject = visibleProjects.length > 0 && isDefaultFilter ? visibleProjects[0] : null;
  const gridProjects = featuredProject ? visibleProjects.slice(1) : visibleProjects;

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);
  const handleResetFilters = () => setActiveFilter("All Works");

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans overflow-x-hidden">
      <Navbar />

      {/* 1. Hero Banner Section */}
      <section className="w-full bg-white pt-[100px]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-4">
          <div
            className="relative w-full h-[170px] md:h-[180px] rounded-[20px] overflow-hidden flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/image/works-banner-bg.svg')" }}
          >
            <h1 className="relative z-10 text-3xl md:text-[52px] font-bold text-white tracking-wide">
              Our Works
            </h1>
          </div>
        </div>
      </section>

      {/* Featured WorkProjectCard — shows Sinau Print with interactive prev/next */}
      {!isLoading && projects.length > 2 && isDefaultFilter && (
        <WorkProjectCard projects={projects} defaultIndex={2} />
      )}

      {/* Main Projects Section */}
      <section className="relative bg-white pt-[100px] pb-[120px]">
        {/* Title & Filter Pills — own independent container, decoupled from CTA padding */}
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] font-semibold text-[#0D2342] tracking-tight max-w-md leading-tight">
              Create Meaningful Digital Solutions
            </h2>
            <div className="flex md:flex-wrap items-center gap-3 overflow-x-auto hide-scrollbar whitespace-nowrap -mx-5 px-5 pb-2">
              {(["All Works", "Web & App", "IoT System"] as const).map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2.5 rounded-full border transition-all text-xs md:text-sm font-semibold cursor-pointer shrink-0 ${isActive
                      ? "bg-[#EAF3FF] text-[#299EED] border-[#DCEBFF]"
                      : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700"
                      }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects content — own independent container */}
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12">
          {isLoading ? (
            <div className="flex justify-center items-center py-24 text-gray-400 font-medium">
              Loading works...
            </div>
          ) : (
            <>
              {/* Empty State */}
              {filteredProjects.length === 0 && (
                <div className="w-full flex flex-col items-center justify-center text-center py-16 md:py-24">
                  <img
                    src="/image/empty-work.svg"
                    alt="No Project Found Illustration"
                    className="w-[200px] h-[166px]"
                  />
                  <h3 className="text-[26px] font-semibold text-[#0D2342] mt-6 tracking-tight">
                    No Project Found
                  </h3>
                  <p className="mt-4 text-sm md:text-[15px] text-gray-500 max-w-md leading-relaxed">
                    It looks like there are no projects under the current filter selection. Try another category or clear the filters to see all our work.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-8 px-8 py-3 bg-[#299EED] text-white hover:bg-[#1E88E5] font-semibold text-sm rounded-full transition-all cursor-pointer border-0"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Featured Large Card (full-width, only on All Works) */}
              {featuredProject && (
                <Link href={`/works/${featuredProject.slug}`}>
                  <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] rounded-[20px] overflow-hidden mb-16 group cursor-pointer block bg-[#F5F5F5]">
                    <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                      <img
                        src={featuredProject.images[0]}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2342]/95 via-[#0D2342]/40 to-transparent z-20 pointer-events-none" />

                    <div className="absolute bottom-0 left-0 p-6 md:p-10 flex flex-col items-start justify-end z-30 pointer-events-none w-full">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {(getMockupData(featuredProject.slug).category.length > 0
                          ? getMockupData(featuredProject.slug).category
                          : [featuredProject.category]
                        ).map((cat, idx) => (
                          <span
                            key={idx}
                            className="bg-white text-[#299EED] text-[11px] md:text-xs font-semibold px-4 py-2 rounded-full shadow-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl drop-shadow-md">
                        {getMockupData(featuredProject.slug).title || featuredProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              )}

              {/* 2-Column Grid */}
              {gridProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                  {gridProjects.map((project) => {
                    const mockup = getMockupData(project.slug);
                    const displayTitle = mockup.title || project.title;
                    const displayCategories = mockup.category.length > 0 ? mockup.category : [project.category];

                    return (
                      <Link key={project.id} href={`/works/${project.slug}`}>
                        <div className="flex flex-col group cursor-pointer h-full">
                          <div className="relative w-full h-[180px] sm:h-[240px] md:h-[280px] bg-[#F5F5F5] rounded-[20px] overflow-hidden mb-5 md:mb-6">
                            <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                              <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Gradient bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

                            {/* Category tag — bottom left */}
                            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 flex flex-wrap gap-2">
                              {displayCategories.map((cat, idx) => (
                                <span
                                  key={idx}
                                  className="bg-white text-[#299EED] text-[11px] md:text-xs font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>

                            {/* Arrow button — bottom right */}
                            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#299EED] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 z-20 shadow-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-4 h-4 md:w-5 md:h-5"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                              </svg>
                            </div>
                          </div>

                          <h4 className="text-xl md:text-[22px] font-semibold text-[#0D2342] mb-2 md:mb-3 tracking-tight leading-snug group-hover:text-[#299EED] transition-colors">
                            {displayTitle}
                          </h4>
                          <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-medium line-clamp-2 md:line-clamp-3 pr-4">
                            {project.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* Load More Button */}
          {!isLoading && hasMore && (
            <div className="flex justify-center mt-[100px]">
              <button
                onClick={handleLoadMore}
                className="px-10 py-3 md:px-12 md:py-3.5 border border-[#299EED] text-[#299EED] hover:bg-[#299EED]/5 font-semibold text-sm rounded-full transition-all bg-white cursor-pointer"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
