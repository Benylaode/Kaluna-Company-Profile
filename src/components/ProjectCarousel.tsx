"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Ditambahkan untuk navigasi dinamis

// Definisikan tipe data sesuai skema database yang sudah di-update
export interface ProjectData {
  id: number;
  slug: string;
  client: string;
  title: string;
  desc: string;
  category: string;
  image_url: string;
}

export default function ProjectCarousel({ projects }: { projects: ProjectData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mencegah error jika data dari backend belum siap atau kosong
  console.log(projects)
  if (!projects || projects.length === 0) return null;

  const totalProjects = projects.length < 10 ? `0${projects.length}` : projects.length.toString();
  
  // Membuat ID dengan format "01", "02" berdasarkan urutan index array
  const displayId = (currentIndex + 1) < 10 ? `0${currentIndex + 1}` : (currentIndex + 1).toString();

  // Fungsi untuk tombol Next
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Fungsi untuk tombol Previous
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="mx-auto max-w-[1440px] px-8 lg:px-10 bg-white py-28">
      
      {/* Keyframes untuk efek fade-in halus saat berganti slide */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-scale {
          animation: scaleIn 0.8s ease-out forwards;
        }
      `}</style>

      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.9fr]">

        {/* ================= LEFT (Teks & Navigasi) ================= */}
        <div className="flex h-full flex-col">
          
          {/* Menggunakan property 'key' agar React me-render ulang elemen ini dan memicu animasi CSS setiap index berubah */}
          <div key={`text-${currentIndex}`} className="animate-fade">
            {/* Counter */}
            <div className="mb-12 flex items-center gap-4 text-sm font-semibold tracking-wide">
              <span className="text-black">
                {displayId}
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400">
                {totalProjects}
              </span>
            </div>

            {/* Title */}
            <h2
              className="
                max-w-[520px]
                text-[46px] md:text-[52px]
                font-semibold
                leading-[1.05]
                tracking-[-0.03em]
                text-[#111827]
              "
            >
              {projects[currentIndex].title}
            </h2>

            {/* Description */}
            <p
              className="
                mt-10
                max-w-[520px]
                text-[20px] md:text-[22px]
                leading-[1.8]
                text-[#4B5563]
              "
            >
              {projects[currentIndex].desc}
            </p>
          </div>

          {/* Button: Dibungkus Link Next.js untuk menuju route detail menggunakan slug */}
          <Link href={`/works/${projects[currentIndex].slug}`}>
            <button
              className="
                mt-12
                flex
                w-fit
                items-center
                rounded-full
                bg-[#102A52]
                py-2
                pl-8
                pr-2
                text-white
                shadow-lg
                transition
                hover:bg-[#18386b]
              "
            >
              <span className="mr-6 text-xl font-medium">
                See Case Studies
              </span>
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#2D8CFF]
                "
              >
                <ArrowRight size={18} />
              </div>
            </button>
          </Link>

          {/* Bottom Navigation */}
          <div className="mt-auto pt-24 flex gap-12">
            <button
              onClick={handlePrev}
              className="
                text-lg
                font-semibold
                uppercase
                tracking-wide
                text-gray-400
                hover:text-[#102A52]
                transition-colors
              "
            >
              &lt; Previous
            </button>
            <button
              onClick={handleNext}
              className="
                text-lg
                font-semibold
                uppercase
                tracking-wide
                text-gray-400
                hover:text-[#102A52]
                transition-colors
              "
            >
              Next Project &gt;
            </button>
          </div>

        </div>

        {/* ================= RIGHT (IMAGE & INDICATORS) ================= */}
        <div className="relative w-full h-[500px] lg:h-[650px] overflow-hidden rounded-[34px] shadow-xl bg-[#0D2342]">
          
          {/* Gambar Transisi */}
          {projects.map((project, index) => (
             <img
              key={`img-${project.id}`}
              src={project.image_url} 
              alt={project.title}
              className={`
                absolute inset-0 
                w-full h-full 
                object-cover 
                transition-all duration-1000 ease-in-out
                ${index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"}
              `}
            />
          ))}

          {/* Overlay Gradasi agar Dots & Teks Klien selalu terbaca */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none"></div>

          {/* 1. Dots Pagination (Kiri Atas) */}
          <div className="absolute top-8 left-8 flex items-center gap-2 z-20">
            {projects.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-4 h-4 bg-white border-[3px] border-[#2D8CFF]" 
                    : "w-3.5 h-3.5 bg-gray-400/80 hover:bg-gray-300"    
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* 2. Label Klien (Kiri Bawah) */}
          <div className="absolute bottom-6 left-8 flex items-center gap-3 z-20">
            <span className="w-1 h-4 bg-[#2D8CFF]"></span>
            <span className="text-white font-bold tracking-widest text-sm uppercase drop-shadow-md">
              {projects[currentIndex].client}
            </span>
          </div>

          {/* 3. Garis Progress Bar Biru (Tepi Bawah) */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20 z-20">
            <div 
              className="h-full bg-[#2D8CFF] transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}