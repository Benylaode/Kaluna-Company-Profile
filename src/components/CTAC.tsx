// components/CTA.tsx
export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-10 pb-5">
      <div className="relative w-full bg-[#0D2342] rounded-3xl p-8 md:p-14 overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-lg">
        
        {/* Ornamen Geometris Latar Belakang */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 bottom-0 top-0 w-2/3 bg-gradient-to-l from-white to-transparent transform skew-x-12 origin-bottom-right"></div>
          <div className="absolute right-1/4 bottom-0 top-0 w-1/3 bg-gradient-to-l from-white to-transparent transform skew-x-12 origin-bottom-right opacity-50"></div>
        </div>

        {/* Teks Konten */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Not sure yet? Take a look at our work 
          </h2>
          <p className="text-xl md:text-2xl font-bold text-[#A5C7EE] mt-2 tracking-tight">
            and see what we've built
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="relative z-10 flex-shrink-0">
          <a
            href="/works" 
            className="inline-flex items-center gap-4 bg-white hover:bg-gray-50 text-[#0D2342] font-semibold px-6 py-4 rounded-full shadow-md transition-all group"
          >
            <span className="text-sm md:text-base tracking-wide pl-2">See Our Work</span>
            <div className="w-8 h-8 rounded-full bg-[#1E88E5] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}