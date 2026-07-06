"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  description: string;
  image_url: string;
}

export default function OurServices({ services }: { services: ServiceData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  if (!services || services.length === 0) return null;

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-20 bg-[#F8FAFC] rounded-[24px] md:rounded-[40px] shadow-sm my-10">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#1E88E5] mb-3 uppercase">
            <span className="w-1.5 h-4 bg-[#1E88E5] block rounded-full"></span>
            OUR SERVICE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2342] tracking-tight">
            What We Actually Do
          </h2>
        </div>

        <div className="hidden md:flex gap-3">
          <button onClick={scrollLeft} className="p-3.5 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#0D2342] hover:text-white transition-colors duration-300 group">
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button onClick={scrollRight} className="p-3.5 rounded-full bg-[#0D2342] text-white shadow-md hover:bg-[#163A70] transition-colors duration-300 group">
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
        {services.map((service) => (
          <div key={service.id} className="relative flex-shrink-0 w-[280px] md:w-[310px] h-[360px] rounded-[24px] md:rounded-[32px] overflow-hidden group shadow-md snap-start">
            <img src={service.image_url} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col h-full justify-end">
              <h3 className="text-xl font-bold leading-snug mb-2 tracking-tight group-hover:-translate-y-2 transition-transform duration-300">
                {service.title}
              </h3>
              
              <Link 
                href={`/services/${service.slug}`}
                className="w-10 h-10 bg-[#1E88E5] rounded-full flex items-center justify-center hover:bg-white hover:text-[#1E88E5] transition-colors duration-300 absolute right-0 bottom-0 shadow-lg"
              >
                <ArrowRight size={18} strokeWidth={2.5} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}