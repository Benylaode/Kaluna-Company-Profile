"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Web & Application Development", href: "/services/web-application-development" },
    { name: "IoT System Development", href: "/services/iot-system-development" },
    { name: "ERP & System Integration", href: "/services/erp-system-integration" },
    { name: "Industrial & Automation Solutions", href: "/services/industrial-automation-solutions" },
    { name: "Data Dashboard & Analytics", href: "/services/data-dashboard-analytics" },
    { name: "IT Consulting & Digital Strategy", href: "/services/it-strategy-consulting" },
  ];

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const isHome = pathname === "/";

  // Mobile (< md): always solid white — burger icon must be readable
  // Desktop (md+): transparent on homepage before scroll, white otherwise
  const headerBgClass = isHome && isScrolled
    ? "bg-white"
    : isHome
    ? "bg-white md:bg-transparent"
    : "bg-white";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBgClass}`}>
        <nav className="mx-auto max-w-[1920px] px-5 md:px-[min(6.3vw,121px)] py-4 relative">
          <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">

            {/* Logo */}
            <div className="flex justify-start">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Kaluna Logo"
                  width={32}
                  height={32}
                  className="w-[26px] h-[26px] md:w-[32px] md:h-[32px] transition hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center">
              <div className="flex items-center rounded-full border border-gray-100 bg-white/70 p-1.5 backdrop-blur-xl">
                <Link
                  href="/"
                  className={`rounded-full px-5 py-1.5 text-sm font-normal transition-all ${pathname === "/" ? "bg-[#EFF6FF] text-[#1E88E5]" : "text-[#0D2342] hover:bg-gray-50"
                    }`}
                >
                  Home
                </Link>
                <Link
                  href="/works"
                  className={`rounded-full px-5 py-1.5 text-sm font-normal transition-all ${pathname === "/works" ? "bg-[#EFF6FF] text-[#1E88E5]" : "text-[#0D2342] hover:bg-gray-50"
                    }`}
                >
                  Our Works
                </Link>

                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex items-center gap-1.5 rounded-full px-5 py-1.5 text-sm font-normal transition-all ${isDropdownOpen || pathname.startsWith("/services")
                      ? "bg-[#EFF6FF] text-[#1E88E5]"
                      : "text-[#0D2342] hover:bg-gray-50"
                      }`}
                  >
                    Our Service
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[320px] bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-50">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block text-[#4A5568] text-sm font-normal py-3 px-4 rounded-xl hover:bg-[#F4F5F7] hover:text-[#1E88E5] transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/who-we-are"
                  className={`rounded-full px-5 py-1.5 text-sm font-normal transition-all ${pathname === "/who-we-are" ? "bg-[#EFF6FF] text-[#1E88E5]" : "text-[#0D2342] hover:bg-gray-50"
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
                className="group flex items-center rounded-full bg-[#0D2342] py-1 pl-4 pr-1 text-white transition-all duration-300 hover:bg-[#163A70]"
              >
                <span className="mr-2.5 text-[13px] font-normal">Contact Us</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E88E5] group-hover:scale-105 transition-transform">
                  <ArrowRight size={12} strokeWidth={2} />
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#0D2342] p-2 outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer (Full-page slide-over matching user image) */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-[#F4F9FF] flex flex-col justify-between p-6 overflow-y-auto transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
          }`}
      >

        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/logo.svg"
                alt="Kaluna Logo"
                width={22}
                height={22}
                className="w-[22px] h-[22px]"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#0D2342] hover:text-[#299EED] transition-colors p-1 outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#0D2342] text-[#0D2342] hover:border-[#299EED] hover:text-[#299EED] transition-all">
                <X size={14} strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <div className="mt-8 flex flex-col gap-2.5">
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center w-full px-5 py-3 rounded-xl text-base font-semibold transition-all ${pathname === "/"
                ? "bg-[#EAF3FF] text-[#299EED]"
                : "text-[#0D2342] hover:bg-gray-100/50"
                }`}
            >
              Home
            </Link>

            {/* Our Works Link */}
            <Link
              href="/works"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center w-full px-5 py-3 rounded-xl text-base font-semibold transition-all ${pathname === "/works"
                ? "bg-[#EAF3FF] text-[#299EED]"
                : "text-[#0D2342] hover:bg-gray-100/50"
                }`}
            >
              Our Works
            </Link>

            {/* Our Service (With Dropdown Accordion) */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                className={`flex items-center justify-between w-full px-5 py-3 rounded-xl text-base font-semibold transition-all outline-none focus:outline-none [-webkit-tap-highlight-color:transparent] ${pathname.startsWith("/services")
                  ? "bg-[#EAF3FF] text-[#299EED]"
                  : "text-[#0D2342] hover:bg-gray-100/50"
                  }`}
              >
                <span>Our Service</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isServicesExpanded ? "rotate-180 text-[#299EED]" : "text-gray-400"}`}
                />
              </button>

              {isServicesExpanded && (
                <div className="mt-1.5 pl-6 pr-2 flex flex-col gap-1 transition-all">
                  {services.map((service, index) => {
                    const isServiceActive = pathname === service.href;
                    return (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${isServiceActive
                          ? "bg-[#EAF3FF]/60 text-[#299EED]"
                          : "text-[#3F3F3F]/85 hover:bg-gray-100/30"
                          }`}
                      >
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Who We Are Link */}
            <Link
              href="/who-we-are"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center w-full px-5 py-3 rounded-xl text-base font-semibold transition-all ${pathname === "/who-we-are"
                ? "bg-[#EAF3FF] text-[#299EED]"
                : "text-[#0D2342] hover:bg-gray-100/50"
                }`}
            >
              Who We Are
            </Link>
          </div>
        </div>

        {/* Bottom Actions & Contacts */}
        <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6">
          {/* Contact Us Button */}
          <button
            onClick={scrollToFooter}
            className="group flex h-14 w-full items-center justify-between gap-4 rounded-full bg-[#0E2A54] py-2 pl-8 pr-2 text-white shadow-md transition hover:bg-[#163A70]"
          >
            <span className="text-sm font-medium tracking-[0.02em] text-white">Contact Us</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={18} />
            </div>
          </button>

          {/* Email Box */}
          <a
            href="mailto:kalunatechnology@gmail.com"
            className="flex items-center justify-between w-full h-12 px-6 rounded-full border border-gray-200 bg-white text-sm font-semibold text-[#0E2A54] hover:bg-gray-50 transition-colors"
          >
            <span>kalunatechnology@gmail.com</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#299EED] text-white">
              <Mail size={14} />
            </div>
          </a>

          {/* Telephone/Chat Box */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between w-full h-12 px-6 rounded-full border border-gray-200 bg-white text-sm font-semibold text-[#0E2A54] hover:bg-gray-50 transition-colors"
          >
            <span>Chat CS</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#299EED] text-white">
              <Phone size={14} />
            </div>
          </a>

          {/* Footer copyright */}
          <div className="text-center text-[10px] font-bold tracking-widest text-gray-400 mt-4 uppercase">
            &copy; 2026 PT KALUNA TEKNOLOGI
          </div>
        </div>

      </div>
    </>
  );
}