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

  const imagePosition: Record<string, string> = {
    "x-1-tire-company-profile": "center 40%",
    "navicom-smart-home": "center 35%",
    "sinau-print-pos-system": "center center",
    "suara-merdeka-refresh": "center 30%",
    "korlantas-polri-edrives": "center center",
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-sans overflow-x-hidden">
      <Navbar />

      {/* 1. Hero Banner Section */}
      <section className="w-full bg-white pt-[100px] sm:pt-[110px] md:pt-[120px]">
        <div className="kaluna-wide-container">
          <div
            className="
              relative
              w-full
              h-[150px]
              sm:h-[180px]
              md:h-[240px]
              rounded-[12px]
              sm:rounded-[16px]
              overflow-hidden
              flex
              items-center
              justify-center
              bg-cover
              bg-center
              bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)]
            "
            style={{
              backgroundImage: "url('/image/banner-title.svg')",
            }}
          >
            {/* Color blend overlay spreading from #02184d to #08297d */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)] opacity-75 mix-blend-multiply z-[1]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)] opacity-25 z-[1]" />

            <h1 className="relative z-10 text-[28px] sm:text-[36px] md:text-[52px] lg:text-[60px] font-normal md:font-light tracking-[-0.02em] text-white text-center px-4">
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
      <section className="relative bg-white pt-[72px] md:pt-[80px] pb-[120px] md:pb-[140px]">
{/* Title & Filter Pills */}
<div className="kaluna-container mb-12 md:mb-16">
  <div
    className="
      flex
      flex-col
      gap-8
      lg:grid
      lg:grid-cols-[2fr_3fr]
      lg:items-center
      lg:gap-10
    "
  >
    {/* Section Heading — 40% */}
    <div className="w-full">
      <h2
        className="
          max-w-[600px]
          text-[32px]
          md:text-[38px]
          lg:text-[44px]
          leading-[1.08]
          font-medium
          text-[#0D0D0D]
          tracking-[-0.025em]
        "
      >
        Create Meaningful Digital Solutions
      </h2>
    </div>

    {/* Filters — 60% */}
    <div
      className="
        flex
        w-full
        flex-wrap
        items-center
        gap-2
        overflow-visible
        lg:justify-end
      "
    >
      {/* All Works */}
      <button
        type="button"
        onClick={() => {
          setSelectedType(null);
          setSelectedIndustry(null);
          setIsTypeOpen(false);
          setIsIndustryOpen(false);
        }}
        className={`
          flex
          h-[40px]
          min-w-[124px]
          shrink-0
          cursor-pointer
          items-center
          justify-center
          gap-2
          whitespace-nowrap
          rounded-full
          border
          px-4
          text-[13px]
          font-normal
          transition-all
          duration-300
          md:h-[42px]
          md:min-w-[132px]
          md:px-5
          md:text-[14px]
          ${
            !selectedType && !selectedIndustry
              ? `
                border-[#299EED]
                bg-[#EAF3FF]
                text-[#299EED]
              `
              : `
                border-[#E4E7EC]
                bg-white
                text-[#8C929D]
                hover:border-[#BFD9FA]
                hover:bg-[#F8FBFF]
                hover:text-[#299EED]
              `
          }
        `}
      >
        <span>All Works</span>

      </button>

      {/* Select Type */}
      <div className="relative" ref={typeDropdownRef}>
        <button
          type="button"
          onClick={() => {
            setIsTypeOpen((prev) => !prev);
            setIsIndustryOpen(false);
          }}
          className={`
            flex
            h-[40px]
            min-w-[142px]
            shrink-0
            cursor-pointer
            items-center
            justify-between
            gap-2
            whitespace-nowrap
            rounded-full
            border
            px-4
            text-[13px]
            font-normal
            transition-all
            duration-300
            md:h-[42px]
            md:min-w-[150px]
            md:px-5
            md:text-[14px]
            ${
              selectedType
                ? `
                  border-[#299EED]
                  bg-[#EAF3FF]
                  text-[#299EED]
                `
                : `
                  border-[#E4E7EC]
                  bg-white
                  text-[#969BA4]
                  hover:border-[#BFD9FA]
                  hover:bg-[#F8FBFF]
                  hover:text-[#299EED]
                `
            }
          `}
        >
          <span className="max-w-[112px] truncate">
            {selectedType || "Select Type"}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`
              h-3
              w-3
              shrink-0
              transition-transform
              duration-300
              ${isTypeOpen ? "rotate-180" : ""}
            `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {/* Type Dropdown */}
        {isTypeOpen && (
          <div
            className="
              absolute
              left-0
              top-full
              z-50
              mt-2
              w-[270px]
              max-w-[calc(100vw-40px)]
              overflow-hidden
              rounded-[12px]
              border
              border-[#E8ECF2]
              bg-white
              py-2.5
              shadow-[0_16px_40px_rgba(14,42,84,0.12)]
              md:w-[300px]
            "
          >
            <button
              type="button"
              onClick={() => {
                setSelectedType(null);
                setIsTypeOpen(false);
              }}
              className={`
                mx-2
                block
                w-[calc(100%-16px)]
                cursor-pointer
                rounded-[9px]
                px-4
                py-2.5
                text-left
                text-[13px]
                font-normal
                transition-all
                duration-200
                md:text-[14px]
                ${
                  !selectedType
                    ? 'bg-[#EAF3FF] text-[#299EED]'
                    : 'text-[#17366A] hover:bg-[#F4F8FD] hover:text-[#299EED]'
                }
              `}
            >
              All Type
            </button>
            {types.map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setIsTypeOpen(false);
                }}
                className={`
                  mx-2
                  block
                  w-[calc(100%-16px)]
                  cursor-pointer
                  rounded-[9px]
                  px-4
                  py-2.5
                  text-left
                  text-[13px]
                  font-normal
                  transition-all
                  duration-200
                  md:text-[14px]
                  ${
                    selectedType === type
                      ? `
                        bg-[#EAF3FF]
                        text-[#299EED]
                      `
                      : `
                        text-[#17366A]
                        hover:bg-[#F4F8FD]
                        hover:text-[#299EED]
                      `
                  }
                `}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Select Industry */}
      <div className="relative" ref={industryDropdownRef}>
        <button
          type="button"
          onClick={() => {
            setIsIndustryOpen((prev) => !prev);
            setIsTypeOpen(false);
          }}
          className={`
            flex
            h-[40px]
            min-w-[158px]
            shrink-0
            cursor-pointer
            items-center
            justify-between
            gap-2
            whitespace-nowrap
            rounded-full
            border
            px-4
            text-[13px]
            font-normal
            transition-all
            duration-300
            md:h-[42px]
            md:min-w-[166px]
            md:px-5
            md:text-[14px]
            ${
              selectedIndustry
                ? `
                  border-[#299EED]
                  bg-[#EAF3FF]
                  text-[#299EED]
                `
                : `
                  border-[#E4E7EC]
                  bg-white
                  text-[#969BA4]
                  hover:border-[#BFD9FA]
                  hover:bg-[#F8FBFF]
                  hover:text-[#299EED]
                `
            }
          `}
        >
          <span className="max-w-[128px] truncate">
            {selectedIndustry || "Select Industry"}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`
              h-3
              w-3
              shrink-0
              transition-transform
              duration-300
              ${isIndustryOpen ? "rotate-180" : ""}
            `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {/* Industry Dropdown */}
        {isIndustryOpen && (
          <div
            className="
              absolute
              right-0
              top-full
              z-50
              mt-2
              w-[270px]
              max-w-[calc(100vw-40px)]
              overflow-hidden
              rounded-[12px]
              border
              border-[#E8ECF2]
              bg-white
              py-2.5
              shadow-[0_16px_40px_rgba(14,42,84,0.12)]
              md:w-[290px]
            "
          >
            <button
              type="button"
              onClick={() => {
                setSelectedIndustry(null);
                setIsIndustryOpen(false);
              }}
              className={`
                mx-2
                block
                w-[calc(100%-16px)]
                cursor-pointer
                rounded-[9px]
                px-4
                py-2.5
                text-left
                text-[13px]
                font-normal
                transition-all
                duration-200
                md:text-[14px]
                ${
                  !selectedIndustry
                    ? 'bg-[#EAF3FF] text-[#299EED]'
                    : 'text-[#17366A] hover:bg-[#F4F8FD] hover:text-[#299EED]'
                }
              `}
            >
              All Industry
            </button>
            {industries.map((industry) => (
              <button
                type="button"
                key={industry}
                onClick={() => {
                  setSelectedIndustry(industry);
                  setIsIndustryOpen(false);
                }}
                className={`
                  mx-2
                  block
                  w-[calc(100%-16px)]
                  cursor-pointer
                  rounded-[9px]
                  px-4
                  py-2.5
                  text-left
                  text-[13px]
                  font-normal
                  transition-all
                  duration-200
                  md:text-[14px]
                  ${
                    selectedIndustry === industry
                      ? `
                        bg-[#EAF3FF]
                        text-[#299EED]
                      `
                      : `
                        text-[#17366A]
                        hover:bg-[#F4F8FD]
                        hover:text-[#299EED]
                      `
                  }
                `}
              >
                {industry}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</div>

        {/* Projects Content */}
        <div className="kaluna-container">
          {isLoading ? (
            <div className="flex min-h-[320px] items-center justify-center text-[#8A94A6] font-medium">
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
                    className="w-[180px] md:w-[200px] h-auto"
                  />

                  <h3 className="mt-6 text-[24px] md:text-[26px] font-semibold text-[#0D2342] tracking-[-0.02em]">
                    No Project Found
                  </h3>

                  <p className="mt-4 max-w-md text-[14px] md:text-[15px] text-[#667085] leading-[1.65]">
                    It looks like there are no projects under the current filter
                    selection. Try another category or clear the filters to see all
                    our work.
                  </p>

                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="
                      mt-8
                      h-[48px]
                      px-8
                      bg-[#299EED]
                      text-white
                      hover:bg-[#1E88E5]
                      font-semibold
                      text-[14px]
                      rounded-full
                      transition-all
                      duration-300
                      cursor-pointer
                      border-0
                    "
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Featured Large Card */}
              {featuredProject && (
                <Link
                  href={`/works/${featuredProject.slug}`}
                  className="block"
                >
                  <article
                    className="
                      relative
                      w-full
                      aspect-[4/3]
                      md:aspect-[1700/712]
                      rounded-[12px]
                      overflow-hidden
                      mb-[64px]
                      md:mb-[72px]
                      group
                      cursor-pointer
                      bg-[#F5F5F5]
                      transition-all
                      duration-500
                      hover:shadow-[0_24px_70px_rgba(14,42,84,0.14)]
                    "
                  >
                    {/* Featured Image */}
                    <img
                      src={featuredProject.images[0]}
                      alt={featuredProject.title}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-1000
                        ease-out
                        group-hover:scale-[1.025]
                      "
                      style={{
                        objectPosition:
                          imagePosition[featuredProject.slug] || "center center",
                      }}
                    />

                    {/* Global Dark Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        z-10
                        bg-[#071A35]/10
                        transition-colors
                        duration-500
                        group-hover:bg-[#071A35]/5
                        pointer-events-none
                      "
                    />

                    {/* Bottom Gradient */}
                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-[48%]
                        md:h-[44%]
                        bg-gradient-to-t
                        from-[#0E2A54]/95
                        via-[#0E2A54]/50
                        to-transparent
                        z-20
                        pointer-events-none
                        transition-opacity
                        duration-500
                        group-hover:opacity-90
                      "
                    />

                    {/* Featured Content */}
                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        z-30
                        flex
                        flex-col
                        items-start
                        justify-end
                        p-6
                        md:p-10
                        lg:p-[56px]
                        pointer-events-none
                      "
                    >
                      {/* Featured Categories */}
                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2.5
                          mb-4
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                        "
                      >
                        {(getMockupData(featuredProject.slug).category.length > 0
                          ? getMockupData(featuredProject.slug).category
                          : [featuredProject.category]
                        ).map((category, index) => (
                          <span
                            key={`${category}-${index}`}
                            className="
                              flex
                              h-[40px]
                              md:h-[46px]
                              items-center
                              justify-center
                              rounded-full
                              bg-white
                              px-5
                              md:px-7
                              text-[13px]
                              md:text-[15px]
                              font-medium
                              text-[#0E2A54]
                              whitespace-nowrap
                            "
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      {/* Featured Title */}
                      <h3
                        className="
                          max-w-[860px]
                          text-[30px]
                          md:text-[40px]
                          lg:text-[48px]
                          font-medium
                          text-white
                          tracking-[-0.025em]
                          leading-[1.08]
                          transition-transform
                          duration-500
                          group-hover:-translate-y-1
                        "
                      >
                        {getMockupData(featuredProject.slug).title ||
                          featuredProject.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              )}

              {/* Two-Column Project Grid */}
              {gridProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] lg:gap-x-[24px] gap-y-[32px] md:gap-y-[40px]">
                  {gridProjects.map((project) => {
                    const mockup = getMockupData(project.slug);
                    const displayTitle = mockup.title || project.title;

                    const displayCategories =
                      mockup.category.length > 0
                        ? mockup.category
                        : [project.category];

                    return (
                      <Link
                        key={project.id}
                        href={`/works/${project.slug}`}
                        className="block h-full"
                      >
                        <article className="group/card flex h-full w-full cursor-pointer flex-col">
                          {/* Image Card */}
                          <div
                            className="
                              relative
                              w-full
                              aspect-[835/421]
                              shrink-0
                              overflow-hidden
                              rounded-[12px]
                              bg-[#F5F5F5]
                              mb-6
                              transition-shadow
                              duration-500
                              ease-out
                              group-hover/card:shadow-[0_18px_45px_rgba(14,42,84,0.12)]
                            "
                          >
                            {/* Project Image */}
                            <img
                              src={project.images[0]}
                              alt={project.title}
                              className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-[900ms]
                                ease-out
                                will-change-transform
                                group-hover/card:scale-[1.025]
                              "
                              style={{
                                objectPosition:
                                  imagePosition[project.slug] || "center center",
                              }}
                            />

                            {/* Bottom Gradient Overlay */}
                            <div
                              className="
                                absolute
                                inset-x-0
                                bottom-0
                                z-[15]
                                h-[38%]
                                bg-gradient-to-t
                                from-[#0E2A54]/45
                                via-[#0E2A54]/10
                                to-transparent
                                pointer-events-none
                                transition-all
                                duration-500
                                ease-out
                                group-hover/card:h-[58%]
                                group-hover/card:from-[#0E2A54]/70
                                group-hover/card:via-[#0E2A54]/25
                              "
                            />

                            {/* Category Tags */}
                            <div
                              className="
                                absolute
                                bottom-[24px]
                                left-[24px]
                                md:bottom-[28px]
                                md:left-[28px]
                                z-20
                                flex
                                max-w-[calc(100%-100px)]
                                flex-wrap
                                gap-2
                                pointer-events-none
                              "
                            >
                              {displayCategories.map((category, index) => (
                                <span
                                  key={`${category}-${index}`}
                                  className="
                                    flex
                                    h-[24px]
                                    md:h-[30px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    px-4
                                    md:px-5
                                    text-[6px]
                                    md:text-[14px]
                                    text-[#0E2A54]
                                    whitespace-nowrap
                                    shadow-[0_2px_8px_rgba(14,42,84,0.05)]
                                  "
                                >
                                  {category}
                                </span>
                              ))}
                            </div>

                            {/* Arrow Button */}
                            <div
                              className="
                                absolute
                                bottom-[24px]
                                right-[24px]
                                md:bottom-[28px]
                                md:right-[28px]
                                z-20
                                flex
                                h-8
                                w-8
                                md:h-8
                                md:w-8
                                items-center
                                justify-center
                                rounded-full
                                bg-[#299EED]
                                text-white
                                pointer-events-none
                                transition-all
                                duration-300
                                ease-out
                                group-hover/card:bg-white
                                group-hover/card:text-[#0E2A54]
                                overflow-hidden 
                              "
                            >
                              {/* 1 PANAH BERSIH: Menggunakan utility custom keyframe saat card di-hover */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.2}
                                stroke="currentColor"
                                className="
                                  h-2
                                  w-2
                                  md:h-3
                                  md:w-3
                                  group-hover/card:animate-[slideOutIn_0.35s_ease-in-out_forwards]
                                "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Project Information */}
                          <div className="flex flex-1 flex-col">
                            <h4
                              className="
                                pr-4
                                mb-3
                                text-[24px]
                                md:text-[28px]
                                lg:text-[30px]
                                font-medium
                                text-[#0D2342]
                                tracking-[-0.02em]
                                leading-[1.18]
                                line-clamp-2
                                transition-colors
                                duration-300
                                ease-out
                              "
                            >
                              {displayTitle}
                            </h4>

                            <p
                              className="
                                pr-4
                                text-[14px]
                                md:text-[16px]
                                font-normal
                                text-[#525866]
                                leading-[1.55]
                                line-clamp-2
                              "
                            >
                              {project.desc}
                            </p>
                          </div>
                        </article>
                      </Link>
                    );
                  })}
                </div>
              )} 
            </>
          )}

          {/* Load More Button */}
          {!isLoading && hasMore && (
            <div className="flex justify-center mt-24">
              <button
                onClick={handleLoadMore}
                className="px-10 py-3 md:px-12 md:py-3.5 border border-[#0E2A54] text-[#0E2A54] hover:bg-[#0E2A54]/5 font-semibold text-sm rounded-full transition-all bg-white cursor-pointer"
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