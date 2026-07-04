"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTA from "../../src/components/CTA";
import ProjectCarousel, { ProjectData } from '../../src/components/ProjectCarousel';
import { getWorks } from "../../src/lib/actions";

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Works");
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const filteredProjects = activeFilter === "All Works" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const featuredProject = projects.length > 0 ? projects[0] : null;

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {!isLoading && projects.length > 0 && (
        <ProjectCarousel projects={projects} />
      )}

      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D2342] tracking-tight max-w-md leading-tight">
            Create Meaningful Digital Solutions
          </h1>
          
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#EBF3FF] text-[#1E88E5] text-sm font-bold rounded-full border border-blue-100 transition-colors">
              <span>{activeFilter}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </button>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-400 text-sm font-semibold rounded-full border border-gray-200">
              <span>Select Type</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-400 text-sm font-semibold rounded-full border border-gray-200">
              <span>Select Industry</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </button>
          </div>
        </div>

        {isLoading ? (
           <div className="flex justify-center py-20 text-gray-400">Loading works...</div>
        ) : (
          <>
            {featuredProject && activeFilter === "All Works" && (
              <Link href={`/ourworks/${featuredProject.slug}`}>
                <div className="relative w-full h-[480px] rounded-[32px] overflow-hidden mb-16 shadow-md group cursor-pointer block">
                  <img src={featuredProject.image_url} alt={featuredProject.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/40 to-transparent"></div>
                  <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 flex flex-col items-start justify-end h-full">
                    <span className="bg-white/90 text-[#0D2342] text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-sm">{featuredProject.category}</span>
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl">{featuredProject.title}</h3>
                  </div>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {filteredProjects.slice(activeFilter === "All Works" ? 1 : 0).map((project) => (
                <Link key={project.id} href={`/ourworks/${project.slug}`}>
                  <div className="flex flex-col group cursor-pointer h-full">
                    <div className="relative w-full h-[320px] bg-gray-100 rounded-[32px] overflow-hidden mb-6 shadow-sm">
                      <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102" />
                      <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                        <span className="bg-white text-[#0D2342] text-xs font-bold px-4 py-2.5 rounded-full shadow-md">{project.category}</span>
                      </div>
                      <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#A5C7EE]/90 text-[#0D2342] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </div>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#0D2342] mb-3 tracking-tight leading-snug group-hover:text-[#1E88E5] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[#4A5568] text-[15px] leading-relaxed font-medium">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {!isLoading && filteredProjects.length > 0 && (
          <div className="flex justify-center mt-16">
            <button className="px-12 py-4 border border-[#0D2342] text-[#0D2342] hover:bg-[#0D2342] hover:text-white font-bold text-sm rounded-full shadow-sm transition-all">
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