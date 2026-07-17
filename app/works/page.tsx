"use client";

import { useState, useEffect, useRef } from "react";
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

const types = [
  "Web & Application Development",
  "IoT System Development",
  "ERP & System Integration",
  "Industrial & Automation Solutions",
  "Data Dashboard & Analytics",
  "IT Consulting & Digital Strategy"
];

const industries = [
  "Corporate",
  "Finance & Banking",
  "Government Organizations",
  "UMKM",
  "Agency/Studio",
  "Infrastructure & Engineering",
  "Other Industries"
];

const getProjectDetails = (slug: string, category: string) => {
  const s = slug.toLowerCase();
  
  if (s.includes("x-1-tire")) {
    return {
      type: "Web & Application Development",
      industry: "Corporate"
    };
  }
  if (s.includes("navicom")) {
    return {
      type: "IoT System Development",
      industry: "Infrastructure & Engineering"
    };
  }
  if (s.includes("sinau-print")) {
    return {
      type: "Web & Application Development",
      industry: "UMKM"
    };
  }
  if (s.includes("suara-merdeka")) {
    return {
      type: "Web & Application Development",
      industry: "Agency/Studio"
    };
  }
  if (s.includes("korlantas")) {
    return {
      type: "IoT System Development",
      industry: "Government Organizations"
    };
  }
  
  // Fallbacks based on category
  let type = "Web & Application Development";
  if (category.toLowerCase().includes("iot")) {
    type = "IoT System Development";
  }
  
  return {
    type,
    industry: "Other Industries"
  };
};

export default function WorksPage() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dropdown filter state
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);

  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const industryDropdownRef = useRef<HTMLDivElement>(null);

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
  }, [selectedType, selectedIndustry]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTypeOpen(false);
      }
      if (
        industryDropdownRef.current &&
        !industryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsIndustryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    const details = getProjectDetails(p.slug, p.category);
    const matchesType = selectedType ? details.type === selectedType : true;
    const matchesIndustry = selectedIndustry ? details.industry === selectedIndustry : true;
    return matchesType && matchesIndustry;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const isDefaultFilter = !selectedType && !selectedIndustry;
  const featuredProject = visibleProjects.length > 0 && isDefaultFilter ? visibleProjects[0] : null;
  const gridProjects = featuredProject ? visibleProjects.slice(1) : visibleProjects;

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);
  const handleResetFilters = () => {
    setSelectedType(null);
    setSelectedIndustry(null);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans overflow-x-hidden">
      <Navbar />

{/* 1. Hero Banner Section */}
<section className="w-full bg-white pt-[100px]">
  <div className="mx-auto max-w-[1640px] px-5 md:px-4">
  <div
    className="
      relative
      w-full
      h-[240px]
      md:h-[260px]
      rounded-[20px]
      overflow-hidden
      flex
      items-center
      justify-center
      bg-cover
      bg-center
    "
    style={{
      backgroundImage: "url('/image/works-banner-bg.svg')",
    }}
  >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-[#0E2A54]/15"></div>

      <h1 className="relative z-10 text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.02em] text-white">
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
        <div className="mx-auto w-full max-w-[1700px] px-10 xl:px-[110px] mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-3xl md:text-4xl lg:text-[54px] font-medium text-[#0D2342] tracking-[-0.01em] max-w-xl leading-[110%]">
              Create Meaningful Digital Solutions
            </h2>
            <div className="flex flex-wrap items-center gap-3 overflow-visible whitespace-nowrap -mx-5 px-5 pb-2">
              {/* 1. All Works Button */}
              <button
                onClick={() => {
                  setSelectedType(null);
                  setSelectedIndustry(null);
                  setIsTypeOpen(false);
                  setIsIndustryOpen(false);
                }}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-full border transition-all text-xs md:text-[18px] font-semibold cursor-pointer shrink-0 ${
                  !selectedType && !selectedIndustry
                    ? "bg-[#EAF3FF] text-[#299EED] border-[#DCEBFF]"
                    : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                All Works
              </button>

              {/* 2. Select Type Dropdown */}
              <div className="relative" ref={typeDropdownRef}>
                <button
                  onClick={() => {
                    setIsTypeOpen(!isTypeOpen);
                    setIsIndustryOpen(false);
                  }}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-full border transition-all text-xs md:text-[18px] font-semibold cursor-pointer shrink-0 ${
                    selectedType
                      ? "bg-[#EAF3FF] text-[#299EED] border-[#299EED]"
                      : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  {selectedType || "Select Type"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {isTypeOpen && (
                  <div className="absolute left-0 mt-2 w-[280px] bg-white border border-[#E9E9E9] rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-2 z-50 overflow-hidden">
                    {types.map((type) => (
                      <div
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setIsTypeOpen(false);
                        }}
                        className={`px-5 py-3 text-sm md:text-[18px] font-semibold text-[#0E2A54] hover:bg-[#F5F9FF] cursor-pointer transition-colors ${
                          selectedType === type ? "bg-[#EAF3FF]/40 text-[#299EED]" : ""
                        }`}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Select Industry Dropdown */}
              <div className="relative" ref={industryDropdownRef}>
                <button
                  onClick={() => {
                    setIsIndustryOpen(!isIndustryOpen);
                    setIsTypeOpen(false);
                  }}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-full border transition-all text-xs md:text-[18px] font-semibold cursor-pointer shrink-0 ${
                    selectedIndustry
                      ? "bg-[#EAF3FF] text-[#299EED] border-[#299EED]"
                      : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  {selectedIndustry || "Select Industry"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {isIndustryOpen && (
                  <div className="absolute right-0 md:right-auto md:left-0 mt-2 w-[280px] bg-white border border-[#E9E9E9] rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-2 z-50 overflow-hidden">
                    {industries.map((ind) => (
                      <div
                        key={ind}
                        onClick={() => {
                          setSelectedIndustry(ind);
                          setIsIndustryOpen(false);
                        }}
                        className={`px-5 py-3 text-sm md:text-[18px] font-semibold text-[#0E2A54] hover:bg-[#F5F9FF] cursor-pointer transition-colors ${
                          selectedIndustry === ind ? "bg-[#EAF3FF]/40 text-[#299EED]" : ""
                        }`}
                      >
                        {ind}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Projects content — own independent container */}
        <div className="mx-auto w-full max-w-[1700px] px-10 xl:px-[110px]">
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
                  <div className="relative w-full aspect-[4/3] md:aspect-[1700/712] rounded-[24px] overflow-hidden mb-[64px] group cursor-pointer block bg-[#F5F5F5]">
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={featuredProject.images[0]}
                        alt={featuredProject.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div
                      className="
                        absolute inset-x-0 bottom-0
                        h-[58%]
                        bg-gradient-to-t
                        from-[#0E2A54]
                        via-[#0E2A54]/55
                        to-transparent
                        z-20
                        pointer-events-none
                      "
                    />

                    <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-[110px] pb-6 md:pb-10 lg:pb-[110px] flex flex-col items-start justify-end z-30 pointer-events-none w-full">
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                        {(getMockupData(featuredProject.slug).category.length > 0
                          ? getMockupData(featuredProject.slug).category
                          : [featuredProject.category]
                        ).map((cat, idx) => (
                          <span
                            key={idx}
                            className="bg-white text-[#299EED] text-xs md:text-base font-normal px-4 md:px-8 h-8 md:h-[54px] flex items-center justify-center rounded-full shadow-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-3xl lg:text-[54px] font-medium text-white tracking-[-0.01em] leading-[110%] max-w-3xl drop-shadow-md">
                        {getMockupData(featuredProject.slug).title || featuredProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              )}

              {/* 2-Column Grid */}
              {gridProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[64px]">
                  {gridProjects.map((project) => {
                    const mockup = getMockupData(project.slug);
                    const displayTitle = mockup.title || project.title;
                    const displayCategories = mockup.category.length > 0 ? mockup.category : [project.category];

                    return (
                      <Link key={project.id} href={`/works/${project.slug}`}>
                        <div className="flex flex-col group cursor-pointer w-full h-auto md:h-[547px] overflow-hidden">
                          <div className="relative w-full aspect-[835/421] bg-[#F5F5F5] rounded-[24px] overflow-hidden mb-7">
                            <img
                              src={project.images[0]}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

                            {/* Category tag — bottom left */}
                            <div className="absolute bottom-[33px] left-[33px] z-20 flex flex-wrap gap-2">
                              {displayCategories.map((cat, idx) => (
                                <span
                                  key={idx}
                                  className="bg-white text-[#299EED] text-xs md:text-base font-normal px-4 md:px-8 h-8 md:h-[54px] flex items-center justify-center rounded-full shadow-sm"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>

                            {/* Arrow button — bottom right */}
                            <div className="absolute bottom-[33px] right-[33px] w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#299EED] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 z-20 shadow-lg">
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

                          <h4 className="text-xl md:text-[32px] font-semibold text-[#0D2342] mb-3 tracking-tight leading-[120%] group-hover:text-[#299EED] transition-colors line-clamp-2 pr-4">
                            {displayTitle}
                          </h4>
                          <p className="text-gray-500 text-sm md:text-[16px] leading-[150%] font-medium line-clamp-2 pr-4">
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
