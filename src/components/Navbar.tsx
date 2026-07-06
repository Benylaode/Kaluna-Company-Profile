"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none transition-all">
      <nav className="mx-auto max-w-[1440px] px-6 lg:px-10 py-4 relative">
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">

          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Kaluna Logo"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 transition hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center rounded-full border border-gray-200/60 bg-white/70 p-1.5 backdrop-blur-xl shadow-sm">
              <Link
                href="/"
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  pathname === "/" ? "bg-[#EFF6FF] text-[#1E88E5]" : "text-[#0D2342] hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/works"
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  pathname === "/works" ? "bg-[#EFF6FF] text-[#1E88E5]" : "text-[#0D2342] hover:bg-gray-50"
                }`}
              >
                Our Works
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-1.5 rounded-full px-6 py-2 text-sm font-medium transition-all ${
                    isDropdownOpen || pathname.startsWith("/services")
                      ? "bg-[#EFF6FF] text-[#1E88E5]"
                      : "text-[#0D2342] hover:bg-gray-50"
                  }`}
                >
                  Our Service
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[320px] bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-50">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block text-[#4A5568] text-sm font-medium py-3 px-4 rounded-xl hover:bg-[#F4F5F7] hover:text-[#1E88E5] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/who-we-are"
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  pathname === "/who-we-are" ? "bg-[#EFF6FF] text-[#1E88E5]" : "text-[#0D2342] hover:bg-gray-50"
                }`}
              >
                Who We Are
              </Link>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex justify-end">
            <button
              onClick={scrollToFooter}
              className="group flex items-center rounded-full bg-[#0D2342] py-1.5 pl-5 pr-1.5 text-white shadow-md transition-all duration-300 hover:bg-[#163A70]"
            >
              <span className="mr-3 text-sm font-medium">Contact Us</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E88E5] group-hover:scale-105 transition-transform">
                <ArrowRight size={14} strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#0D2342] p-2">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 gap-4 z-40">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[#0D2342] font-semibold text-lg">Home</Link>
            <Link href="/works" onClick={() => setIsMobileMenuOpen(false)} className="text-[#0D2342] font-semibold text-lg">Our Works</Link>
            <div className="flex flex-col gap-3">
              <span className="text-[#0D2342] font-semibold text-lg">Our Service</span>
              <div className="pl-4 flex flex-col gap-3 border-l-2 border-blue-100">
                {services.map((service, index) => (
                  <Link key={index} href={service.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-sm">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/who-we-are" onClick={() => setIsMobileMenuOpen(false)} className="text-[#0D2342] font-semibold text-lg">Who We Are</Link>
            <button
              onClick={scrollToFooter}
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-full bg-[#0D2342] py-3 text-white text-base font-medium"
            >
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}