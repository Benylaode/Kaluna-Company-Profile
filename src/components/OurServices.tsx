"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Definisikan tipe data sesuai dengan skema SQLite yang kita buat
export interface ServiceData {
  id: number;
  slug: string; // Digunakan untuk URL dinamis (/services/[slug])
  title: string;
  description: string;
  image_url: string;
}

export default function OurServices({ services }: { services: ServiceData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fungsi scroll diatur sesuai dengan lebar kartu (300px) + gap (24px) = 324px
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -324,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 324,
      behavior: "smooth",
    });
  };

  // Jika data kosong, tampilkan fallback atau tidak render apa-apa
  if (!services || services.length === 0) return null;

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-20 bg-[#F1F5F9] rounded-[32px] my-10 shadow-sm"
    >
      {/* CSS untuk menyembunyikan scrollbar bawaan browser */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest text-[#2563EB] mb-3 uppercase">
            <span className="w-1.5 h-4 bg-[#2563EB] block rounded-full"></span>
            OUR SERVICE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2342] tracking-tight">
            What We Actually Do
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="p-3.5 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#0D2342] hover:text-white transition-colors duration-300 group"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={scrollRight}
            className="p-3.5 rounded-full bg-[#0D2342] text-white shadow-md hover:bg-[#163A70] transition-colors duration-300 group"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Carousel Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 scroll-smooth hide-scrollbar snap-x snap-mandatory"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex-shrink-0 w-[300px] h-[360px] rounded-[32px] overflow-hidden group shadow-md snap-start"
          >
            {/* Background Image (ditarik dari database) dengan efek Zoom */}
            <img
              src={service.image_url}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Overlay gradasi agar teks tetap terbaca */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/40 to-transparent transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold leading-snug mb-2 tracking-tight">
                {service.title}
              </h3>
              
              {/* Deskripsi singkat layanan dari database */}
              <p className="text-sm text-gray-300 mb-6 line-clamp-2">
                {service.description}
              </p>

              {/* Tombol yang mengarah ke halaman detail layanan */}
              <Link 
                href={`/services/${service.slug}`}
                className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center hover:bg-white hover:text-[#2563EB] transition-all duration-300 cursor-pointer"
                aria-label={`View details for ${service.title}`}
              >
                <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}