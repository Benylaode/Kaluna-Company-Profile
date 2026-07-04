"use client";

import React, { useState, useEffect } from 'react';

// 1. Kita buat sub-komponen khusus untuk masing-masing "Kotak/Slot"
const LogoSlot = ({ logos, delay }: { logos: any[], delay: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Jika logo di kotak ini hanya 1, tidak perlu ada animasi
    if (logos.length <= 1) return;

    // setTimeout pertama ini berfungsi sebagai "delay awal" agar 
    // animasi tiap kotak tidak terjadi bersamaan (efek bergelombang)
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        // Mulai memudar
        setIsFading(true);
        
        // Tunggu 500ms (durasi CSS transisi), lalu ganti logo dan munculkan lagi
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % logos.length);
          setIsFading(false);
        }, 500);
        
      }, 4000); // Ganti logo setiap 4 detik

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [logos.length, delay]);

  const currentLogo = logos[currentIndex];

  return (
    // Penambahan scale-95 agar saat memudar terlihat sedikit mengecil (lebih halus)
    <div 
      className={`flex-shrink-0 w-32 md:w-40 h-24 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out ${
        isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {/* Jika Anda sudah memasukkan file gambar asli ke folder public, aktifkan baris ini: */}
      {/* <img src={currentLogo.src} alt={currentLogo.name} className="max-h-12 w-auto object-contain" /> */}
      
      {/* Placeholder sementara selama belum memakai gambar asli: */}
      <div className="text-lg md:text-xl font-bold text-gray-400 text-center">{currentLogo.name}</div>
    </div>
  );
};

export default function Clients() {
  // 2. Kita membagi kelompok logo berdasarkan "Kotak" (Slot) nya masing-masing.
  // Misalnya, kotak pertama akan bergantian antara "Sinau Print" dan "LogoIpsum 1"
  const slot1 = [
    { name: "Sinau Print", src: "/clients/sinau-print.png" },
    { name: "LogoIpsum 1", src: "/clients/logo1.png" }
  ];
  const slot2 = [
    { name: "Plaza Ambarrukmo", src: "/clients/plaza.png" },
    { name: "LogoIpsum 2", src: "/clients/logo2.png" }
  ];
  const slot3 = [
    { name: "Miniso", src: "/clients/miniso.png" },
    { name: "LogoIpsum 3", src: "/clients/logo3.png" }
  ];
  const slot4 = [
    { name: "Artic Analytica", src: "/clients/artic.png" },
    { name: "LogoIpsum 4", src: "/clients/logo4.png" }
  ];
  const slot5 = [
    { name: "Queen City", src: "/clients/queen-city.png" },
    { name: "LogoIpsum 5", src: "/clients/logo5.png" }
  ];

  // Kumpulan dari ke-5 slot di atas
  const slots = [slot1, slot2, slot3, slot4, slot5];

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-10 mb-8">
        <p className="text-center text-sm font-semibold tracking-wider text-[#0D2342]">
          <span className="w-1 h-4 bg-[#1E88E5] inline-block align-middle mr-2"></span>
          OUR CLIENTS
        </p>
        <h2 className="text-center text-3xl font-bold text-[#0D2342] mt-2">
          Companies That Trust Our Solutions
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-10 min-h-[120px] flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center w-full gap-6 md:gap-8">
          {slots.map((slotLogos, index) => (
            // Kita panggil komponen LogoSlot. 
            // Delay dikalikan 800ms agar perubahannya menjalar (Slot 1 berubah, 0.8 detik kemudian Slot 2 berubah, dst)
            <LogoSlot 
              key={index} 
              logos={slotLogos} 
              delay={index * 800} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}