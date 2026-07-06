"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTA from "../../src/components/CTA";
import ProjectCarousel, { ProjectData } from '../../src/components/ProjectCarousel';
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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </>
  );
};

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Works");
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
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

  const filteredProjects = activeFilter === "All Works" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const featuredProject = visibleProjects.length > 0 && activeFilter === "All Works" ? visibleProjects[0] : null;
  const gridProjects = activeFilter === "All Works" ? visibleProjects.slice(1) : visibleProjects;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
    
      <section className="pt-24 md:pt-32 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="relative w-full h-[180px] md:h-[260px] rounded-[20px] md:rounded-[32px] overflow-hidden shadow-lg bg-[#0a1930] flex items-center justify-center">
          {/* Abstract Diagonal Background simulating reference */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0D2342] to-[#12305a]"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#1E88E5]/10 transform skew-x-[-45deg] translate-x-20 md:translate-x-40"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#1E88E5]/5 transform skew-x-[-45deg] -translate-x-10 md:-translate-x-20"></div>
          
          <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white tracking-wide"> Our Works</h1>
        </div>
      </section>

      
      {/* Project Carousel Section */}
      {!isLoading && projects.length > 0 && (
        <ProjectCarousel projects={projects} />
      )}

      {/* Main Grid Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-20">
        
        {/* Title & Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0D2342] tracking-tight max-w-md leading-tight">
            Create Meaningful Digital Solutions
          </h2>
          
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center justify-between gap-2 px-5 py-2 md:py-2.5 bg-[#EEF4FF] text-[#1E88E5] text-xs md:text-sm font-semibold rounded-full border border-blue-100 transition-colors shadow-sm">
              <span>{activeFilter}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </button>
            
            <button className="flex items-center justify-between gap-2 px-5 py-2 md:py-2.5 bg-white text-gray-500 text-xs md:text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <span>Type</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </button>
            
            <button className="flex items-center justify-between gap-2 px-5 py-2 md:py-2.5 bg-white text-gray-500 text-xs md:text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <span>Select Industry</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </button>
          </div>
        </div>

        {isLoading ? (
           <div className="flex justify-center items-center py-24 text-gray-400 font-medium">Loading works...</div>
        ) : (
          <>
            {/* Featured Large Project (Top) */}
            {featuredProject && activeFilter === "All Works" && (
              <Link href={`/ourworks/${featuredProject.slug}`}>
                <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] rounded-[24px] md:rounded-[32px] overflow-hidden mb-10 md:mb-16 shadow-lg group cursor-pointer block">
                  <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <ImageSlider images={featuredProject.images} title={featuredProject.title} />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2342]/95 via-[#0D2342]/40 to-transparent z-20 pointer-events-none"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 flex flex-col items-start justify-end z-30 pointer-events-none w-full">
                    <span className="bg-white text-[#0D2342] text-[11px] md:text-xs font-bold px-4 py-2 rounded-full mb-3 shadow-sm pointer-events-auto">
                      {featuredProject.category}
                    </span>
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl drop-shadow-md">
                      {featuredProject.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )}

            {/* Grid Projects (2 Columns Desktop, 1 Column Mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14">
              {gridProjects.map((project) => (
                <Link key={project.id} href={`/ourworks/${project.slug}`}>
                  <div className="flex flex-col group cursor-pointer h-full">
                    <div className="relative w-full h-[240px] md:h-[320px] bg-gray-100 rounded-[20px] md:rounded-[28px] overflow-hidden mb-5 md:mb-6 shadow-sm border border-gray-100">
                      
                      <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                        <ImageSlider images={project.images} title={project.title} />
                      </div>
                      
                      {/* Gradient Overlay for bottom text/buttons */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>

                      {/* Tag Category (Bottom Left inside Image) */}
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 pointer-events-none">
                        <span className="bg-white text-[#0D2342] text-[11px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md pointer-events-auto">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Circle Arrow Button (Bottom Right inside Image) */}
                      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#1E88E5] text-white flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45 z-20 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                    
                    <h4 className="text-xl md:text-[22px] font-bold text-[#0D2342] mb-2 md:mb-3 tracking-tight leading-snug group-hover:text-[#1E88E5] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-medium line-clamp-2 md:line-clamp-3 pr-4">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Load More Button */}
        {!isLoading && hasMore && (
          <div className="flex justify-center mt-12 md:mt-20">
            <button 
              onClick={handleLoadMore}
              className="px-10 py-3 md:px-12 md:py-3.5 border border-gray-300 text-[#0D2342] hover:border-[#1E88E5] hover:text-[#1E88E5] font-semibold text-sm rounded-full shadow-sm transition-all bg-white"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      <CTA />
      <Footer />
    </main>
  );
}