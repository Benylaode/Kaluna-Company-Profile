// src/components/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Menutup dropdown jika pengguna mengklik di luar area menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { name: "Web & Application Development", href: "/services/web-development" },
    { name: "IoT System Development", href: "/services/iot" },
    { name: "ERP & System Integration", href: "/services/erp-integration" },
    { name: "Industrial & Automation Solutions", href: "/services/automation" },
    { name: "Data Dashboard & Analytics", href: "/services/analytics" },
    { name: "IT Consulting & Digital Strategy", href: "/services/it-consulting" },
  ];

  const scrollToFooter = () => {
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    footerElement.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-[1440px] px-8 lg:px-10 py-3 relative">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">

          {/* ================= Logo ================= */}
        <div className="flex justify-start">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Kaluna Logo"
              width={48}
              height={48}
              className="transition hover:scale-105"
              priority
            />
          </Link>
        </div>

          {/* ================= Navigation ================= */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center rounded-full border border-white/60 bg-white/70 p-1.5 backdrop-blur-xl shadow-md relative">

              {/* Menu Home */}
              <Link
                href="/"
                className={`rounded-full px-6 py-2.5 text-base font-medium transition-all ${
                  pathname === "/" 
                    ? "bg-[#EFF6FF] text-[#2563EB]" 
                    : "text-[#102A52] hover:bg-white"
                }`}
              >
                Home
              </Link>

              {/* Menu Our Works */}
              <Link
                href="/works"
                className={`rounded-full px-6 py-2.5 text-base font-medium transition-all ${
                  pathname === "/works"
                    ? "bg-[#EFF6FF] text-[#2563EB]" 
                    : "text-[#102A52] hover:bg-white"
                }`}
              >
                Our Works
              </Link>

              {/* Menu Our Service dengan Dropdown (Sesuai image_5356fa.jpg) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-1.5 rounded-full px-6 py-2.5 text-base font-medium transition-all ${
                    isDropdownOpen || pathname.startsWith("/services")
                      ? "bg-[#EFF6FF] text-[#2563EB]"
                      : "text-[#102A52] hover:bg-white"
                  }`}
                >
                  Our Service
                  <ChevronDown 
                    size={16} 
                    strokeWidth={2.5} 
                    className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Floating Dropdown Card */}
                {isDropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[320px] bg-white rounded-3xl p-6 shadow-xl border border-gray-100/50 z-50 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-[#4A5568] text-[15px] font-medium py-3 px-4 rounded-xl hover:bg-[#F4F5F7] hover:text-[#1E88E5] transition-colors text-left block"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/who-we-are"
                className={`rounded-full px-6 py-2.5 text-base font-medium transition-all ${
                  pathname === "/who-we-are"
                    ? "bg-[#EFF6FF] text-[#2563EB]"
                    : "text-[#102A52] hover:bg-white"
                }`}
              >
                Who We Are
              </Link>

            </div>
          </div>

          {/* ================= Contact Button ================= */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={scrollToFooter}
              className="flex items-center rounded-full bg-[#102A52] py-1.5 pl-6 pr-2 text-white shadow-lg transition-all duration-300 hover:bg-[#163A70]"
            >
              <span className="mr-4 text-base font-medium">Contact Us</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2D8CFF]">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}