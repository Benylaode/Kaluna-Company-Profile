// components/Footer.tsx
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="footer" className="bg-[#EBF3FF] text-[#4A5568] pt-16 pb-6 px-6 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-300 pb-12 mb-6">
        
        {/* Kolon 1: Logo */}
      <div className="md:col-span-4 flex items-start gap-3">
        <Image
          src="/logo.svg"
          alt="Kaluna Technology"
          width={64}
          height={64}
          className="w-16 h-16 flex-shrink-0"
        />

        <div className="flex flex-col">
          <span className="text-3xl font-black tracking-wider text-[#0D2342] leading-none">
            KALUNA
          </span>
          <span className="text-sm font-bold tracking-[0.22em] text-[#0D2342] mt-1">
            TECHNOLOGY
          </span>
        </div>
      </div>

        {/* Kolon 2: Our Service */}
        <div className="md:col-span-3">
          <h4 className="text-[#0D2342] font-bold text-sm tracking-wider uppercase mb-5">Our Service</h4>
          <ul className="space-y-3 text-sm font-medium text-gray-600">
            <li><a href="#" className="hover:text-[#1E88E5] transition">Web & Application Development</a></li>
            <li><a href="#" className="hover:text-[#1E88E5] transition">IoT System Development</a></li>
            <li><a href="#" className="hover:text-[#1E88E5] transition">System Integration</a></li>
            <li><a href="#" className="hover:text-[#1E88E5] transition">Industrial & Automation Solutions</a></li>
            <li><a href="#" className="hover:text-[#1E88E5] transition">Data Dashboard & Analytics</a></li>
            <li><a href="#" className="hover:text-[#1E88E5] transition">IT Strategy & Consulting</a></li>
          </ul>
        </div>

        {/* Kolon 3: Company */}
        <div className="md:col-span-2">
          <h4 className="text-[#0D2342] font-bold text-sm tracking-wider uppercase mb-5">Company</h4>
          <ul className="space-y-3 text-sm font-medium text-gray-600">
            <li><a href="#" className="hover:text-[#1E88E5] transition">Our Works</a></li>
            <li><a href="#" className="hover:text-[#1E88E5] transition">Who We Are</a></li>
            <li><a href="#" className="hover:text-[#1E88E5] transition">Contact Us</a></li>
            <li>
              <a href="#" className="hover:text-[#1E88E5] transition inline-flex items-center gap-1">
                Download Compro <span className="text-xs">→</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Kolon 4: Visit Our Office */}
        <div className="md:col-span-3">
          <h4 className="text-[#0D2342] font-bold text-sm tracking-wider uppercase mb-5">Visit Our Office</h4>
          <p className="text-sm font-medium text-gray-600 leading-relaxed mb-4">
            MG Setos, Jl. Inspeksi, 3rd Floor Kembangsari Subdistrict, Semarang Tengah District, Semarang City, Central Java 50133, Indonesia
          </p>
          <a href="#" className="text-[#1E88E5] font-bold text-sm hover:underline inline-flex items-center gap-1">
            Open in Maps <span className="text-xs">&gt;</span>
          </a>
        </div>
      </div>

      {/* Baris Bawah: Social Media & Action Buttons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6">
        {/* Social Media Links */}
        <div className="flex flex-col gap-3">
          <span className="text-[#0D2342] font-bold text-xs tracking-wider uppercase">Follow Us</span>
          <div className="flex items-center gap-2">
            {[
              { 
                // Instagram SVG
                icon: (
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                ), 
                href: "#" 
              },
              { 
                // YouTube SVG
                icon: (
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                ), 
                href: "#" 
              },
              { 
                // LinkedIn SVG
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                ), 
                href: "#" 
              },
              { 
                // X (Twitter) SVG
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ), 
                href: "#" 
              },
              { 
                // Facebook SVG
                icon: (
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                ), 
                href: "#" 
              },
              { 
                // TikTok SVG
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.4a6.27 6.27 0 0 0-3.11-.3A6.34 6.34 0 0 0 1.5 15.46a6.34 6.34 0 0 0 6.55 6.31 6.33 6.33 0 0 0 6.18-5.38V8.66a8.27 8.27 0 0 0 5.36 1.8V7a4.34 4.34 0 0 1-.4-.31z"/>
                  </svg>
                ), 
                href: "#" 
              }
            ].map((soc, idx) => (
              <a 
                key={idx} 
                href={soc.href} 
                className="w-9 h-9 rounded-full bg-[#0D2342] text-white flex items-center justify-center hover:bg-[#1E88E5] transition-colors"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* 1. Email Button (Sudah benar menggunakan mailto:) */}
          <a 
            href="mailto:corporate@kalunatechnology.com" 
            className="inline-flex items-center gap-4 bg-[#0D2342] text-white pl-5 pr-2 py-2 rounded-full shadow-sm hover:opacity-95 transition-opacity"
          >
            <span className="text-xs font-medium tracking-wide">corporate@kalunatechnology.com</span>
            <div className="w-8 h-8 rounded-full bg-[#1E88E5] flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </a>

          {/* 2. Chat CS Button (Diarahkan ke WhatsApp) */}
          {/* Ganti 6281234567890 dengan nomor WhatsApp asli CS Kaluna (Gunakan 62 sebagai pengganti 0) */}
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#0D2342] text-white pl-5 pr-2 py-2 rounded-full shadow-sm hover:opacity-95 transition-opacity"
          >
            <span className="text-xs font-medium tracking-wide">Chat CS</span>
            <div className="w-8 h-8 rounded-full bg-[#1E88E5] flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </a>
          
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[11px] font-bold text-gray-500 tracking-wider pt-4 border-t border-gray-200">
        © 2026 PT. KALUNA TEKNOLOGI DIGITAL
      </div>
    </footer>
  );
}
