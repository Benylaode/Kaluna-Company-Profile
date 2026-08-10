"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X, Mail, Phone } from "lucide-react";
import ContactPopup from "./ContactPopup";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "ERP & System Integration", href: "/services/erp-system-integration" },
    { name: "Point of Sale & Retail ERP", href: "/services/pos-retail-erp" },
    { name: "Human Resource & Payroll ERP", href: "/services/hr-payroll-erp" },
    { name: "Financial & Accounting ERP", href: "/services/financial-accounting-erp" },
    { name: "Supply Chain & Inventory ERP", href: "/services/supply-chain-inventory-erp" },
    { name: "Logistics & Fleet Management ERP", href: "/services/logistics-fleet-erp" },
    /*
    { name: "Industrial & Automation Solutions", href: "/services/industrial-automation-solutions" },
    { name: "Web & Application Development", href: "/services/web-application-development" },
    { name: "IoT System Development", href: "/services/iot-system-development" },
    { name: "Data Dashboard & Analytics", href: "/services/data-dashboard-analytics" },
    { name: "IT Consulting & Digital Strategy", href: "/services/it-strategy-consulting" },
    */
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
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBgClass}`}>
        <nav className="mx-auto max-w-[1920px] px-5 md:px-[min(6.3vw,121px)] py-3 relative">
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
              <div 
                className="flex items-center rounded-full border border-gray-100 bg-white p-1.5"
              >
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

                <Link
                  href="/services"
                  className={`rounded-full px-5 py-1.5 text-sm font-normal transition-all ${
                    pathname.startsWith("/services")
                      ? "bg-[#EFF6FF] text-[#1E88E5]"
                      : "text-[#0D2342] hover:bg-gray-50"
                  }`}
                >
                  Our Service
                </Link>

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
                onClick={() => setIsContactOpen(true)}
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

            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center w-full px-5 py-3 rounded-xl text-base font-semibold transition-all ${
                pathname.startsWith("/services")
                  ? "bg-[#EAF3FF] text-[#299EED]"
                  : "text-[#0D2342] hover:bg-gray-100/50"
              }`}
            >
              Our Service
            </Link>

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
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsContactOpen(true);
            }}
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
            href="https://wa.me/6282342939843"
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

      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}