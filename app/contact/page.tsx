"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  X,
} from "lucide-react";

import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTAC from "../../src/components/CTAC";
import { submitLead } from "../../src/lib/actions";
import { BackgroundArtwork } from "@/src/components/ServiceHeroBanner";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function action(formData: FormData) {
    setIsLoading(true);
    try {
      const result = await submitLead(formData);
      if (result.success) {
        setShowPopup(true);
      } else {
        alert("Terjadi kesalahan, silakan coba lagi.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  /*
   * Ukuran form dibuat sekitar 80% dari versi sebelumnya:
   * - Tinggi input: 56px → 45px
   * - Font input: 16px → 13px
   * - Padding horizontal: 22px → 18px
   * - Radius: 8px → 7px
   */
  const inputClassName = `
    block
    h-[45px]
    w-full
    rounded-[7px]
    border
    border-[#E3E3E3]
    bg-white
    px-[18px]
    text-[13px]
    font-normal
    text-[#0D0D0D]
    outline-none
    transition-colors
    duration-200
    placeholder:text-[#CCCCCC]
    focus:border-[#299EED]
  `;

  const labelClassName = `
    mb-[7px]
    block
    text-[12px]
    font-normal
    leading-[16px]
    text-[#3F3F3F]
    md:text-[13px]
  `;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0E2A54]">
      <Navbar />

      {/* Hero Banner Section matching reference image & Work page background */}
      <section className="w-full bg-white pt-[72px] sm:pt-[76px] md:pt-[80px]">
        <div className="kaluna-wide-container">
          <section className="relative mx-auto w-full max-w-[1830px] select-none overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#003456] h-[60vh] min-h-[500px] max-h-[700px] lg:h-[60vh]">
            {/* Work Page Background Vector Artwork */}
            <BackgroundArtwork idPrefix="contact-hero-bg" />

            {/* Soft Contrast Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,36,64,0.22)_0%,rgba(0,36,64,0.08)_50%,rgba(0,36,64,0)_75%)]"
            />

            {/* Left Column: Text Overlay */}
            <div className="relative z-20 flex h-full flex-col justify-center px-6 sm:px-10 lg:px-16 lg:w-[52%]">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.06] tracking-[-0.04em] text-white">
                Crafting Digital<br />
                Solutions<br />
                <span className="bg-gradient-to-r from-[#299EED] via-[#5DBCF5] to-[#75C8FF] bg-clip-text text-transparent">
                  For Your Needs
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-[17px] font-normal leading-[1.4] text-white/90 max-w-[560px]">
                We build end-to-end Enterprise Resource Planning solutions that unify your core operations into a single, intelligent platform.
              </p>
            </div>

            {/* Right Column: 3D Artwork Composition matching Reference Image 100% */}
            <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[48%] items-center justify-center pointer-events-none z-10">
              {/* Glassmorphism Background Panel 1 (Tall Vertical Glass Card) */}
              <div className="absolute right-[10%] top-[12%] h-[76%] w-[58%] rounded-[40px] border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl" />

              {/* Glassmorphism Background Panel 2 (Bottom Right Rounded Card) */}
              <div className="absolute right-[3%] bottom-[8%] h-[35%] w-[42%] rounded-[28px] border border-white/15 bg-white/10 backdrop-blur-md shadow-xl" />

              {/* Central Logo & 3D Icons Composition Container */}
              <div className="relative flex items-center justify-center">
                {/* Main White Emblem Circle */}
                <div className="relative w-[260px] h-[260px] xl:w-[300px] xl:h-[300px] rounded-full bg-gradient-to-b from-white via-white to-[#E4F4FF] shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex items-center justify-center border-4 border-white/90">
                  {/* Kaluna K Logo Emblem */}
                  <svg
                    className="w-[120px] h-[120px] xl:w-[140px] xl:h-[140px]"
                    viewBox="0 0 42 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="#0b2450" d="M 19.5,-0.5 C 26.8333,-0.5 34.1667,-0.5 41.5,-0.5C 41.5,-0.166667 41.5,0.166667 41.5,0.5C 27.8066,13.8607 14.14,27.1941 0.5,40.5C 0.166667,40.5 -0.166667,40.5 -0.5,40.5C -0.5,33.1667 -0.5,25.8333 -0.5,18.5C 6.5913,12.6197 13.258,6.28633 19.5,-0.5 Z" />
                    <path fill="#259be8" d="M -0.5,-0.5 C -0.166667,-0.5 0.166667,-0.5 0.5,-0.5C 2.96192,2.46387 5.62859,5.2972 8.5,8 C 5.63064,11.0379 2.63064,13.8712 -0.5,16.5C -0.5,10.8333 -0.5,5.16667 -0.5,-0.5 Z" />
                    <path fill="#259ce7" d="M 41.5,3.5 C 41.5,14.5 41.5,25.5 41.5,36.5C 35.6365,31.1355 29.9698,25.6355 24.5,20C 29.9698,14.3645 35.6365,8.86447 41.5,3.5 Z" />
                    <path fill="#0b2450" d="M 41.5,39.5 C 41.5,39.8333 41.5,40.1667 41.5,40.5C 34.1667,40.5 26.8333,40.5 19.5,40.5C 17.0381,37.5361 14.3714,34.7028 11.5,32C 15.0152,28.3176 18.6819,24.8176 22.5,21.5C 28.8538,27.5216 35.1871,33.5216 41.5,39.5 Z" />
                  </svg>

                  {/* Overlapping 3D Headset Icon on Left of Circle */}
                  <div className="absolute -left-12 xl:-left-16 top-1/2 -translate-y-1/2 w-[110px] h-[110px] xl:w-[130px] xl:h-[130px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <defs>
                        <linearGradient id="contact_headset_grad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#82D2FF" />
                          <stop offset="0.6" stopColor="#299EED" />
                          <stop offset="1" stopColor="#0B4B75" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M18 55 C 18 24, 82 24, 82 55"
                        stroke="url(#contact_headset_grad)"
                        strokeWidth="13"
                        strokeLinecap="round"
                      />
                      <rect x="12" y="44" width="16" height="30" rx="8" fill="url(#contact_headset_grad)" />
                      <rect x="72" y="44" width="16" height="30" rx="8" fill="url(#contact_headset_grad)" />
                      <path
                        d="M20 68 Q 30 84, 52 84 H 60"
                        stroke="url(#contact_headset_grad)"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Overlapping 3D Question Bubble ('?') on Top-Right of Circle */}
                  <div className="absolute -top-5 -right-5 xl:-top-7 xl:-right-7 w-[85px] h-[85px] xl:w-[100px] xl:h-[100px] drop-shadow-[0_15px_30px_rgba(41,158,237,0.45)]">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <defs>
                        <linearGradient id="contact_bubble_grad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#E3F4FF" />
                          <stop offset="0.7" stopColor="#75C8FF" />
                          <stop offset="1" stopColor="#299EED" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="46" r="38" fill="url(#contact_bubble_grad)" />
                      <path d="M30 74 L42 66 L25 58 Z" fill="url(#contact_bubble_grad)" />
                      <text
                        x="50"
                        y="58"
                        textAnchor="middle"
                        fill="#0B2450"
                        fontSize="44"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                      >
                        ?
                      </text>
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full bg-white py-10 md:py-14 lg:py-16">
        <div className="w-full px-5 md:px-[min(6.3vw,121px)]">
          <div
            className="
              grid
              grid-cols-1
              gap-y-10
              lg:grid-cols-[1fr_1.3fr]
              lg:gap-x-12
              xl:gap-x-16
              items-start
            "
          >
            {/* Left Information */}
            <div className="min-w-0">
              <h2
                className="
                  text-[26px]
                  font-medium
                  leading-[1.2]
                  tracking-[-0.025em]
                  text-[#0E2A54]
                  md:text-[30px]
                  lg:text-[34px]
                "
              >
                Let&apos;s Discuss Your
                <br />
                Technology Needs
              </h2>

              {/* Office Information */}
              <div className="mt-7 md:mt-8">
                <h3
                  className="
                    text-[13px]
                    font-bold
                    uppercase
                    leading-[1.3]
                    tracking-[0.04em]
                    text-[#0E2A54]
                    md:text-[14px]
                  "
                >
                  Our Office
                </h3>

                <p
                  className="
                    mt-2.5
                    text-[13px]
                    font-normal
                    leading-relaxed
                    text-[#4B5563]
                    md:text-[14px]
                  "
                >
                  PT SINERGI MUDA ARSA (ARSALYNK) Office
                  <br />
                  Menara Rajawali, 26th Floor
                  <br />
                  Kuningan Business District, South Jakarta, Indonesia
                </p>
              </div>

              {/* Google Maps */}
              <div
                className="
                  mt-4
                  aspect-[547/274]
                  w-full
                  overflow-hidden
                  rounded-[12px]
                  bg-[#F2F2F2]
                "
              >
                <iframe
                  src="https://maps.google.com/maps?q=Menara%20Rajawali%2C%20Jl.%20DR.%20Ide%20Anak%20Agung%20Gde%20Agung%2C%20Jakarta%20Selatan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  title="PT SINERGI MUDA ARSA (ARSALYNK) Office Location"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Email Information */}
              <div className="mt-6 md:mt-7">
                <h3
                  className="
                    text-[13px]
                    font-bold
                    uppercase
                    leading-[1.3]
                    tracking-[0.04em]
                    text-[#0E2A54]
                    md:text-[14px]
                  "
                >
                  Email
                </h3>

                <a
                  href="mailto:kalunatechnology@gmail.com"
                  className="
                    mt-2.5
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[13px]
                    font-normal
                    text-[#4B5563]
                    transition-colors
                    duration-200
                    hover:text-[#299EED]
                    md:text-[14px]
                  "
                >
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span>kalunatechnology@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form action={action} className="min-w-0">
              {/* Name and Company */}
              <div
                className="
                  mb-[27px]
                  grid
                  grid-cols-1
                  gap-x-[24px]
                  gap-y-[22px]
                  md:grid-cols-2
                "
              >
                <div>
                  <label htmlFor="name" className={labelClassName}>
                    <span className="mr-[3px] text-[#FF2B2B]">*</span>
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClassName}>
                    <span className="mr-[3px] text-[#FF2B2B]">*</span>
                    Company Name
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="PT ABC, Tbk"
                    autoComplete="organization"
                    className={inputClassName}
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div
                className="
                  mb-[27px]
                  grid
                  grid-cols-1
                  gap-x-[24px]
                  gap-y-[22px]
                  md:grid-cols-2
                "
              >
                <div>
                  <label htmlFor="email" className={labelClassName}>
                    <span className="mr-[3px] text-[#FF2B2B]">*</span>
                    E-mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="youremail@example.com"
                    autoComplete="email"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClassName}>
                    <span className="mr-[3px] text-[#FF2B2B]">*</span>
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+62"
                    autoComplete="tel"
                    className={inputClassName}
                    required
                  />
                </div>
              </div>

              {/* Inquiry */}
              <div className="mb-[27px]">
                <label htmlFor="inquiry" className={labelClassName}>
                  <span className="mr-[3px] text-[#FF2B2B]">*</span>
                  Inquiry
                </label>

                <div className="relative">
                  <select
                    id="inquiry"
                    name="inquiry"
                    defaultValue=""
                    className={`
                      ${inputClassName}
                      appearance-none
                      pr-[45px]
                      text-[#3F3F3F]
                    `}
                    required
                  >
                    <option value="" disabled>
                      Select Inquiry
                    </option>

                    <option value="web-application">
                      Web &amp; Application Development
                    </option>

                    <option value="iot">
                      IoT System Development
                    </option>

                    <option value="erp">
                      ERP &amp; System Integration
                    </option>

                    <option value="automation">
                      Industrial &amp; Automation Solutions
                    </option>

                    <option value="dashboard">
                      Data Dashboard &amp; Analytics
                    </option>

                    <option value="consulting">
                      IT Strategy &amp; Consulting
                    </option>
                  </select>

                  <ChevronDown
                    className="
                      pointer-events-none
                      absolute
                      right-[17px]
                      top-1/2
                      h-[15px]
                      w-[15px]
                      -translate-y-1/2
                      text-[#7A7A7A]
                    "
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClassName}>
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Input your message here..."
                  className="
                    block
                    h-[176px]
                    w-full
                    resize-none
                    rounded-[7px]
                    border
                    border-[#E3E3E3]
                    bg-white
                    px-[18px]
                    py-[15px]
                    text-[13px]
                    font-normal
                    leading-[1.6]
                    text-[#0D0D0D]
                    outline-none
                    transition-colors
                    duration-200
                    placeholder:text-[#CCCCCC]
                    focus:border-[#299EED]
                    md:h-[192px]
                    xl:h-[211px]
                  "
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="
                  group
                  mt-[24px]
                  flex
                  h-[52px]
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  bg-[#0E2A54]
                  py-[9px]
                  pl-[22px]
                  pr-[9px]
                  text-[13px]
                  font-normal
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#123768]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  sm:w-[183px]
                "
              >
                {isLoading ? (
                  <>
                    <span className="whitespace-nowrap">Mengirim...</span>
                    {/* Spinner */}
                    <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#299EED]">
                      <svg
                        className="h-[16px] w-[16px] animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12" cy="12" r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <path
                          className="opacity-90"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="whitespace-nowrap">Submit Inquiry</span>
                    <span
                      className="
                        flex
                        h-[34px]
                        w-[34px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#299EED]
                        transition-transform
                        duration-300
                        group-hover:translate-x-[2px]
                      "
                    >
                      <ArrowRight className="h-[15px] w-[15px]" strokeWidth={1.8} />
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTAC />
      <Footer />

      {/* Keyframe Styles */}
      <style>{`
        @keyframes popupIn {
          0% { opacity: 0; transform: scale(0.88) translateY(18px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes overlayIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes checkDraw {
          0% { stroke-dashoffset: 40; opacity: 0; }
          40% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes ringPulse {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .popup-overlay { animation: overlayIn 0.25s ease forwards; }
        .popup-card { animation: popupIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .popup-ring { animation: ringPulse 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
        .popup-check { stroke-dasharray: 40; stroke-dashoffset: 40; animation: checkDraw 0.5s ease 0.35s forwards; opacity: 0; }
      `}</style>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[6px]">
          <div className="popup-card relative w-full max-w-[480px] overflow-hidden rounded-[28px] bg-white px-7 py-10 text-center shadow-[0_32px_80px_rgba(14,42,84,0.22)] md:px-12 md:py-12">

            {/* Decorative top accent */}
            <div className="absolute inset-x-0 top-0 h-[5px] bg-[linear-gradient(90deg,#02184d,#299EED,#08297d)]" />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-[#8A8A8A] transition-colors duration-200 hover:bg-[#F2F5F9] hover:text-[#0E2A54]"
            >
              <X className="h-[18px] w-[18px]" />
            </button>

            {/* Animated success ring + checkmark */}
            <div className="popup-ring mx-auto mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#0E2A54_0%,#1F5DBA_100%)] shadow-[0_8px_28px_rgba(14,42,84,0.28)]">
              <svg
                className="h-[42px] w-[42px] text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path
                  className="popup-check"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Badge label */}
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6ECFF] bg-[#EAF3FF] px-4 py-1.5">
              <span className="h-[6px] w-[6px] rounded-full bg-[#299EED]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#0E2A54]">
                Inquiry Submitted
              </span>
            </div>

            <h2 className="mb-3 text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0E2A54] md:text-[28px]">
              Thank You for Reaching Out!
            </h2>

            <p className="mx-auto mb-8 max-w-[380px] text-[13px] font-normal leading-[1.75] text-[#5A5A5A] md:text-[14px]">
              Pesan Anda telah berhasil terkirim. Tim kami akan segera menghubungi Anda. Jangan lupa cek folder Inbox dan Spam untuk respons dari kami.
            </p>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="group mx-auto flex h-[52px] items-center gap-[16px] rounded-full bg-[#0E2A54] py-2 pl-6 pr-2 text-[13px] font-normal text-white transition-colors duration-200 hover:bg-[#123768]"
            >
              <span>Kembali ke Beranda</span>
              <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#299EED] transition-transform duration-300 group-hover:translate-x-[2px]">
                <ArrowRight className="h-[15px] w-[15px]" strokeWidth={1.8} />
              </span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}