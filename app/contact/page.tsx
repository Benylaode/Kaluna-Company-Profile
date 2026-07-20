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

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  async function action(formData: FormData) {
    const result = await submitLead(formData);

    if (result.success) {
      setShowPopup(true);
    } else {
      alert("Terjadi kesalahan, silakan coba lagi.");
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

      {/* Hero Banner Section */}
       <section className="w-full bg-white pt-[100px] md:pt-[80px]">
        <div className="kaluna-wide-container">
          <div
            className="
              relative
              w-full
              h-[200px]
              md:h-[240px]
              rounded-[16px]
              overflow-hidden
              flex
              items-center
              justify-center
              bg-cover
              bg-center
              bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)]
            "
            style={{
              backgroundImage: "url('/image/banner-title.svg')",
            }}
          >
            {/* Color blend overlay spreading from #02184d to #08297d */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)] opacity-75 mix-blend-multiply z-[1]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)] opacity-25 z-[1]" />

            <h1 className="relative z-10 text-[36px] md:text-[52px] lg:text-[60px] font-normal md:font-light tracking-[-0.02em] text-white text-center px-4">
              Contacts Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full bg-white py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-[48px] lg:px-[80px]">
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
                  PT Sinergi Muda Arsa Office
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
                  title="PT Sinergi Muda Arsa Office Location"
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
                  transition-colors
                  duration-200
                  hover:bg-[#123768]
                  sm:w-[183px]
                "
              >
                <span className="whitespace-nowrap">
                  Submit Inquiry
                </span>

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
                  <ArrowRight
                    className="h-[15px] w-[15px]"
                    strokeWidth={1.8}
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTAC />
      <Footer />

      {/* Success Popup */}
      {showPopup && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/50
            p-4
            backdrop-blur-sm
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[500px]
              rounded-[24px]
              bg-white
              px-7
              py-10
              text-center
              shadow-2xl
              md:px-12
              md:py-12
            "
          >
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
              className="
                absolute
                right-5
                top-5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-[#8A8A8A]
                transition-colors
                duration-200
                hover:bg-[#F2F5F9]
                hover:text-[#0E2A54]
              "
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className="
                mx-auto
                mb-7
                flex
                h-[84px]
                w-[84px]
                items-center
                justify-center
                rounded-full
                bg-[#0E2A54]
              "
            >
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2
              className="
                mb-4
                text-[28px]
                font-semibold
                leading-[1.2]
                tracking-[-0.02em]
                text-[#0E2A54]
                md:text-[32px]
              "
            >
              Thank You for Reaching Out!
            </h2>

            <p
              className="
                mx-auto
                mb-8
                max-w-[400px]
                text-[15px]
                font-normal
                leading-[1.7]
                text-[#5A5A5A]
                md:text-[16px]
              "
            >
              Your form has been successfully submitted. Our team will get back
              to you as soon as possible. Don&apos;t forget to check your inbox
              and spam folder for our response.
            </p>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="
                group
                mx-auto
                flex
                h-[58px]
                items-center
                gap-[18px]
                rounded-full
                bg-[#0E2A54]
                py-2
                pl-7
                pr-2
                text-[15px]
                font-normal
                text-white
                transition-colors
                duration-200
                hover:bg-[#123768]
              "
            >
              <span>Back to Home</span>

              <span
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#299EED]
                  transition-transform
                  duration-300
                  group-hover:translate-x-[2px]
                "
              >
                <ArrowRight
                  className="h-[18px] w-[18px]"
                  strokeWidth={1.8}
                />
              </span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}