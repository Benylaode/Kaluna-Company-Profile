"use client";
// components/Testimonials.tsx
import { useState, useEffect } from "react";

// Definisikan tipe data sesuai dengan skema tabel 'testimonials' di SQLite
export interface TestimonialData {
  id: number;
  client_name: string;
  role: string;
  company_name: string;
  content: string;
  avatar_url: string;
}

export default function Testimonials({ testimonials }: { testimonials: TestimonialData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Mengatur jumlah card yang tampil berdasarkan ukuran layar (Responsive)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: tampil 1 card
      } else {
        setItemsPerView(2); // Desktop: tampil 2 card
      }
    };
    
    handleResize(); // Cek saat pertama kali render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Jika data belum ada, jangan render komponen agar tidak error
  if (!testimonials || testimonials.length === 0) return null;

  // Menghitung maksimal indeks yang bisa digeser
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Fungsi navigasi geser
  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-10 py-20 bg-white relative overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#1E88E5]"></div>
            <span className="text-xs font-bold tracking-widest text-[#0D2342] uppercase">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2342]">What They Say About Kaluna</h2>
        </div>

        {/* Navigation Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Tombol Kiri */}
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-[#0D2342] hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          {/* Tombol Kanan */}
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#0D2342] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
        <a 
          href="https://wa.me/6281234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-l-2xl flex items-center justify-center text-white shadow-lg hover:bg-[#20ba59] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.482 8.42-.003 6.597-5.336 11.948-11.888 11.948-2.008-.002-3.98-.51-5.732-1.472L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.405.002 9.808-4.397 9.811-9.803.001-2.618-1.02-5.08-2.871-6.934C16.4 1.993 13.939 1.029 11.326 1.029c-5.41 0-9.813 4.397-9.815 9.804-.001 1.637.433 3.237 1.256 4.65l-.993 3.627 3.71-.973c1.378.751 2.849 1.15 4.316 1.153z"/>
          </svg>
        </a>
      </div>

      {/* Slider Container Testimonials */}
      <div className="relative z-10 overflow-hidden">
        {/* Track Slider */}
        <div 
          className="flex transition-transform duration-500 ease-in-out -mx-4"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {testimonials.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 shrink-0 px-4">
              <div className="bg-[#F4F5F7] p-10 rounded-[32px] flex flex-col justify-between min-h-[380px] h-full shadow-sm">
                <div>
                  {/* Client Company Name (Teks dinamis dari DB) */}
                  <div className="mb-8 h-12 flex items-center">
                    <span className="font-black text-xl tracking-wider text-[#0D2342] uppercase">
                      {item.company_name}
                    </span>
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-[#4A5568] text-[15px] leading-relaxed font-medium line-clamp-5">
                    {item.content}
                  </p>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-4 mt-8">
                  {/* Fallback image jika avatar_url kosong */}
                  <img 
                    src={item.avatar_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"} 
                    alt={item.client_name} 
                    className="w-14 h-14 rounded-2xl object-cover bg-gray-200"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#1E88E5] font-bold text-base">{item.client_name}</span>
                    <span className="text-gray-500 text-xs mt-0.5">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots (Dinamis mengikuti halaman) */}
      <div className="flex items-center justify-start gap-2 mt-10">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-8 bg-[#1E88E5]" : "w-3 bg-gray-200"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}