// app/services/[slug]/page.tsx
"use client";

import { use } from "react";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import CTA from "../../../src/components/CTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Komponen Client Component HARUS berupa fungsi biasa (bukan async function)
export default function ServiceDetailPage({ params }: PageProps) {
  
  // Menggunakan React.use() untuk menguraikan Promise params di sisi client secara aman
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Mock data yang disesuaikan berdasarkan isi konten image_c0595b.jpg
  const serviceData = {
    title: "Website Development",
    heroDesc: "Building High-Performance Websites with Exceptional User Experience",
    heroSub: "We build fast, secure, and fully responsive websites tailored to your specific business operations, enabling smooth customer acquisition and brand representation.",
    packages: [
      { name: "Basic", price: "Rp 3.000.000", desc: "Suitable for landing pages and simple business identity profiles.", features: ["1 Page Design", "Responsive Layout", "Contact Form Integration", "Domain & Hosting 1 Year"] },
      { name: "Business", price: "Rp 7.000.000", desc: "Best for growing companies requiring detailed services and showcase.", features: ["Up to 5 Pages", "CMS Panel (WordPress/Custom)", "SEO Optimization Basic", "Speed Performance Tuning"], isPopular: true },
      { name: "Custom", price: "Chat Admin", desc: "For complex web architectures, SaaS platforms, or custom web systems.", features: ["Tailored Architecture", "Advanced Database Integration", "Dedicated Support", "API Core Scalability"] },
    ],
    challenges: [
      "Outdated website design that ruins brand reputation",
      "Poor load performance causing high user bounce rate",
      "Hard-to-manage backends that waste time",
      "Inability to scale software infrastructure as you grow"
    ],
    techStack: ["HTML5", "CSS3", "MySQL", "Git"]
  };

  // Fungsi untuk scroll otomatis ke Footer
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342]">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="pt-28 px-6 md:px-10">
        <div className="relative w-full h-[240px] bg-[#0D2342] rounded-[32px] overflow-hidden flex items-center justify-center shadow-md">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute right-0 w-2/3 h-full bg-gradient-to-l from-white to-transparent transform skew-x-12"></div>
          </div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-black text-white tracking-tight text-center capitalize">
            {serviceData.title}
          </h1>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| Core Values</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">{serviceData.heroDesc}</h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">{serviceData.heroSub}</p>
        </div>
        <div className="w-full h-[320px] rounded-[32px] overflow-hidden shadow-md bg-[#F4F5F7] flex items-center justify-center border border-gray-100">
          <div className="text-center p-6">
            <div className="text-4xl mb-2">💻📱</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Interactive Web Application Display</span>
          </div>
        </div>
      </section>

      {/* 3. PRICING PACKAGES */}
      <section className="bg-[#EBF3FF] py-16 px-6 md:px-10 rounded-[40px] max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#1E88E5] uppercase block mb-2">| Pricing</span>
          <h3 className="text-2xl md:text-3xl font-bold">Ideal Packages Tailored to Your Business Needs</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.packages.map((pkg, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-[32px] shadow-sm border flex flex-col justify-between relative ${pkg.isPopular ? 'border-[#1E88E5] ring-2 ring-[#1E88E5]/20' : 'border-gray-100'}`}>
              {pkg.isPopular && <span className="absolute -top-3 left-6 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</span>}
              <div>
                <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">{pkg.name}</span>
                <h4 className="text-2xl font-black mt-2 mb-3 text-[#1E88E5]">{pkg.price}</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 border-b pb-4">{pkg.desc}</p>
                <ul className="space-y-3 text-xs font-medium text-gray-600">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#1E88E5]">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                className={`w-full py-3 rounded-full font-bold text-xs mt-8 transition-colors ${pkg.isPopular ? 'bg-[#1E88E5] text-white hover:bg-[#0D2342]' : 'border border-[#0D2342] text-[#0D2342] hover:bg-[#0D2342] hover:text-white'}`}
              >
                {pkg.name === "Custom" ? "Contact Us" : "Choose Us"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COMMON CHALLENGES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 text-center">
        <span className="text-xs font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| Challenges</span>
        <h3 className="text-2xl md:text-3xl font-bold mb-10">Addressing Common Challenges in Modern Business Website</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {serviceData.challenges.map((ch, idx) => (
            <div key={idx} className="bg-[#0D2342] text-white p-6 rounded-[24px] shadow-sm bg-gradient-to-br from-[#0D2342] to-[#163A70]">
              <p className="text-sm font-semibold leading-snug tracking-tight">{ch}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TECH STACKS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 text-center border-t border-gray-100 mt-10">
        <h3 className="text-xl font-bold mb-8">Modern Tools and Frameworks for Reliable Development</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center max-w-3xl mx-auto">
          {serviceData.techStack.map((tech, idx) => (
            <div key={idx} className="border border-gray-200 py-4 px-6 rounded-2xl bg-gray-50 text-xs font-bold tracking-wider uppercase text-gray-500">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED WORKS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 mb-10">
        <h3 className="text-2xl font-bold mb-8">Featured Website Development Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Company Profile Revamp for X-1 Tire", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" },
            { title: "Website Refresh for Suara Merdeka", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400" },
            { title: "Point of Sales System for Sinau Print", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400" }
          ].map((w, idx) => (
            <div key={idx} className="relative h-[220px] rounded-[24px] overflow-hidden shadow-sm bg-gray-900 group cursor-pointer">
              <img src={w.img} alt={w.title} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-5 inset-x-5">
                <h5 className="font-bold text-white text-sm leading-snug">{w.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}