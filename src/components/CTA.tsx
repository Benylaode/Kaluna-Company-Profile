"use client"
import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();
  
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-12">
      <div className="relative w-full bg-[#0D2342] rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 shadow-xl shadow-[#0D2342]/10">
        
        {/* Background Overlay Geometris */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 bottom-0 top-0 w-full md:w-2/3 bg-gradient-to-l from-white to-transparent transform md:skew-x-12 md:origin-bottom-right"></div>
          <div className="absolute right-1/4 bottom-0 top-0 w-full md:w-1/3 bg-gradient-to-l from-white to-transparent transform md:skew-x-12 md:origin-bottom-right opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            Let's Build Intelligent Systems
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-[#A5C7EE] mt-2 tracking-tight">
            That Scale With You
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
          <button
            type="button"
            onClick={() => router.push("/contact")}
            className="inline-flex items-center gap-4 bg-white hover:bg-gray-50 text-[#0D2342] font-semibold px-6 py-3 md:py-4 rounded-full shadow-lg transition-all group w-full md:w-auto justify-center"
          >
            <span className="text-sm md:text-base tracking-wide pl-2">Start a Consultation</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1E88E5] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}