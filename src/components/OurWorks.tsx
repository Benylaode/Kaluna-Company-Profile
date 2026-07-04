"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Tipe data dipertahankan, namun disesuaikan untuk data hardcode
export interface WorkData {
  id: number;
  title: string;
  category: string; // Digunakan untuk menampung deskripsi agar desain tidak berubah
  image_url: string;
}

// Data hardcode dimasukkan langsung ke sini
const worksData: WorkData[] = [
  {
    id: 1,
    title: "Discovery and Requirement Analysis",
    category: "Understanding business goals, target audience, and technical requirements",
    image_url: "/images/discovery.jpg" // Sesuaikan nama file gambar Anda
  },
  {
    id: 2,
    title: "Strategy and Information Architecture",
    category: "Structuring the website's content, user flow, and key features to ensure a clear navigation",
    image_url: "/images/strategy.jpg"
  },
  {
    id: 3,
    title: "Designing The User Interface & Experience",
    category: "Designing interfaces & visual layouts that reflect the brand, ensuring usability in all devices",
    image_url: "/images/uiux.jpg"
  },
  {
    id: 4,
    title: "Development and Integration",
    category: "Building product using modern stack, integrating systems, and ensuring performance",
    image_url: "/images/development.jpg"
  },
  {
    id: 5,
    title: "Testing and Deployment",
    category: "Testing to ensure functionality & performance before deploying the website to live",
    image_url: "/images/testing.jpg"
  }
];

// Props { works } dihapus karena data sudah hardcode
export default function OurWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fungsi untuk menggeser ke kiri dan kanan
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 380, behavior: "smooth" });
  };

  // Fungsi untuk menghitung progres scroll bar
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Menghitung persentase lebar layar yang sudah discroll
      const progress = ((scrollLeft + clientWidth) / scrollWidth) * 100;
      setScrollProgress(progress);
    }
  };

  // Set progres awal saat komponen pertama kali dimuat
  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section
      id="works-section"
      className="relative overflow-hidden bg-gradient-to-br from-[#12386D] via-[#0D2C57] to-[#081F3D] py-24 text-white"
    >
      {/* CSS untuk menyembunyikan scrollbar bawaan browser */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-40 top-0 h-[700px] w-[700px] rotate-45 bg-blue-500"></div>
        <div className="absolute left-72 top-0 h-[700px] w-[700px] rotate-45 bg-sky-400"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-8 lg:px-10">
        
        {/* ================= Header ================= */}
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-sky-400"></span>
              <span className="text-sm font-semibold uppercase tracking-[3px] text-sky-300">
                OUR WORKS
              </span>
            </div>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Projects We've Delivered
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden gap-4 md:flex">
            <button 
              onClick={scrollLeft}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-[#12386D]"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollRight}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-[#12386D]"
            >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ================= Carousel Cards ================= */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {/* Mapping diganti menggunakan worksData */}
          {worksData.map((item, index) => {
            // Membuat ID format "01", "02" dari index array agar selalu berurutan
            const displayId = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={item.id}
                className="group relative flex-shrink-0 w-[340px] md:w-[380px] overflow-hidden rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/20 snap-start cursor-pointer"
              >
                {/* Image Container */}
                <div className="p-4">
                  <div className="overflow-hidden rounded-2xl relative">
                    <img
                      src={item.image_url} 
                      alt={item.title}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay Gelap */}
                    <div className="absolute inset-0 bg-[#0D2C57]/0 group-hover:bg-[#0D2C57]/40 transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="relative px-6 pb-8 pt-2">
                  <div className="absolute right-6 -top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#12386D] font-semibold shadow-lg">
                    {displayId}
                  </div>
                  <h3 className="pr-12 text-2xl font-semibold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sky-200 text-sm font-medium">
                    {item.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= Dynamic Progress Bar ================= */}
        <div className="mt-10 md:mt-16">
          <div className="h-[6px] w-full max-w-2xl mx-auto overflow-hidden rounded-full bg-white/10 relative">
            <div 
              className="absolute left-0 top-0 h-full rounded-full bg-sky-400 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}