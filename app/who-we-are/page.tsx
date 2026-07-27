import Image from "next/image";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTAW from "../../src/components/CTAW";
import { getTeam } from "../../src/lib/actions";
import { BackgroundArtwork } from "@/src/components/ServiceHeroBanner";
import WhoWeAreProblemWeSolve from "@/src/components/WhoWeAreProblemWeSolve";

export interface ExpertiseItem {
  id: string;
  name: string;
  category: string;
  img: string;
  function: string;
  impact: string;
  tags: string[];
  badge?: string;
}

export default async function WhoWeArePage() {
  const team = await getTeam();

  const whyReasons = [
    {
      title: "Fragmented Business Systems",
      desc: "Many enterprises struggle with siloed legacy systems that slow down operations and make data exchange difficult.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line><line x1="8" y1="9" x2="16" y2="15"></line></svg>
      )
    },
    {
      title: "Lack of Real-Time Operations Visibility",
      desc: "Without unified dashboards, management lacks real-time insights, delaying critical business decisions and lowering agility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle><line x1="3" y1="3" x2="21" y2="21"></line></svg>
      )
    },
    {
      title: "Businesses Struggle to Turn Data Into Insights",
      desc: "Vast amounts of data are generated, but without proper analytics infrastructure, businesses fail to leverage it for growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
      )
    },
    {
      title: "Outdated or Inefficient Digital Platforms",
      desc: "Relying on outdated applications slows down processes and creates poor experiences for both employees and customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      )
    }
  ];

const expertise = [
  {
    name: "Point of Sale (POS)\n& Retail Management",
    img: "/image/expertise/pos-retail.webp",
  },
  {
    name: "HR & Talent\nManagement Engine",
    img: "/image/expertise/hrms.webp",
  },
  {
    name: "Financial & Accounting\nAutomation Hub",
    img: "/image/expertise/financial-accounting.webp",
  },
  {
    name: "Supply Chain &\nInventory Control",
    img: "/image/expertise/supply-chain.webp",
  },
  {
    name: "Logistics & Fleet\nOperations Tracker",
    img: "/image/expertise/logistics-fleet.webp",
  },
];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342] overflow-x-hidden">
      <Navbar />

      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <section className="w-full bg-white pt-[72px] sm:pt-[76px] md:pt-[80px]">
        <div className="kaluna-wide-container">
          <div
            className="
              group
              relative
              w-full
              h-[60vh]
              min-h-[500px]
              max-h-[700px]
              lg:h-[60vh]
              rounded-[20px]
              sm:rounded-[24px]
              overflow-hidden
              flex
              flex-col
              lg:flex-row
              items-stretch
              justify-between
              px-6
              sm:px-10
              md:px-14
              lg:pl-[76px]
              lg:pr-[20px]
              xl:pl-[88px]
              xl:pr-[28px]
              py-7
              sm:py-9
              lg:py-10
              select-none
              bg-[#003456]
            "
          >
            <BackgroundArtwork idPrefix="who-we-are-hero" />

            {/* Soft contrast layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,36,64,0.18)_0%,rgba(0,36,64,0.06)_46%,rgba(0,36,64,0)_72%)]"
            />

            {/* Subtle ambient light glow behind photo area */}
            <div className="pointer-events-none absolute top-[15%] right-[8%] w-[45%] h-[70%] rounded-full bg-[#2791D8]/15 blur-3xl opacity-60 z-[1]" />

            {/* ── TRANSPARENT PANEL BEHIND PHOTO (z-5) ───────────── */}
            <div
              className="
                pointer-events-none
                hidden
                lg:block
                absolute
                right-[4.5%]
                top-[18%]
                z-[5]
                h-[90%]
                w-[58%]
                rounded-[44px]
                border
                border-[#8DD0F5]/30
                bg-[#00406C]/25
                who-we-are-panel-float
              "
            />

            {/* ── PHOTO TIM WRAPPER (whoweare.webp) (z-10) ────────── */}
            <div
              className="
                relative
                w-full
                mt-6
                lg:mt-0
                h-[240px]
                sm:h-[300px]
                md:h-[340px]
                lg:absolute
                lg:right-[2.5%]
                lg:top-[12%]
                lg:z-[10]
                lg:w-[52%]
                lg:h-[76%]
                rounded-[20px]
                sm:rounded-[24px]
                overflow-hidden
                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                who-we-are-float
                transition-transform
                duration-700
                ease-out
                group-hover:-translate-x-[4px]
                group-hover:scale-[1.01]
                order-3
                lg:order-none
              "
            >
              {/* Image tag langsung memastikan foto tampil 100% tanpa delay loader */}
              <img
                src="/image/whoweare.webp"
                alt="Kaluna Technology team"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "48% center",
                  filter: "grayscale(1) contrast(1.03) brightness(0.92)",
                }}
              />

              {/* Overlay Biru-Keabu-abuan (z-15) */}
              <div
                className="pointer-events-none absolute inset-0 z-[15]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(190, 220, 238, 0.18), rgba(8, 67, 105, 0.12))",
                }}
              />

              {/* Diagonal Detail Overlay Atas Foto (z-25) */}
              <div
                className="pointer-events-none absolute inset-0 z-[25] opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.45), transparent 60%)",
                  clipPath: "polygon(0 0, 35% 0, 0 70%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 z-[25] opacity-25"
                style={{
                  background:
                    "linear-gradient(225deg, #2791D8, transparent 70%)",
                  clipPath: "polygon(100% 0, 100% 70%, 62% 32%)",
                }}
              />
            </div>

            {/* ── PANEL KANAN BAWAH (z-20) ────────────────────────── */}
            <div
              className="
                pointer-events-none
                hidden
                lg:block
                absolute
                bottom-[-16%]
                right-[-5%]
                z-[20]
                h-[240px]
                w-[38%]
                rounded-[48px]
                border
                border-white/15
                bg-gradient-to-b
                from-[#D2EBFB]/85
                via-[#82B4D3]/70
                to-[#07507F]/90
                backdrop-blur-md
                shadow-xl
                who-we-are-bottom-panel-float
              "
            />

            {/* ── KONTEN TEKS KIRI (z-30) ─────────────────────────── */}
            <div className="relative z-[30] w-full lg:w-[44%] xl:w-[45%] flex flex-col justify-center my-auto order-1 lg:order-none">
              {/* Heading */}
              <h1
                className="
                  max-w-[680px]
                  text-[26px]
                  sm:text-[34px]
                  md:text-[42px]
                  lg:text-[48px]
                  xl:text-[50px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-white
                  font-sans
                "
                style={{
                  fontSize: "clamp(26px, 3.2vw, 50px)",
                }}
              >
                Crafting Digital
                <br />
                Solutions
                <br />
                <span
                  className="
                    bg-gradient-to-b
                    from-[#C9EBFF]
                    via-[#79C8F7]
                    to-[#299EED]
                    bg-clip-text
                    text-transparent
                    inline-block
                  "
                >
                  For Your Needs.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-3.5
                  lg:mt-4
                  max-w-[580px]
                  text-[13px]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[17px]
                  xl:text-[18px]
                  font-normal
                  leading-[1.3]
                  text-white/92
                  order-2
                  lg:order-none
                "
                style={{ fontSize: "clamp(13px, 1.15vw, 17px)", color: "rgba(255, 255, 255, 0.92)" }}
              >
                We build end-to-end Enterprise Resource Planning solutions that unify your core operations into a single, intelligent platform.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* ── 2. About Us ─────────────────────────────────────────── */}
<section className="w-full bg-white">
  <div
    className="
      mx-auto
      max-w-[1920px]
      px-5
      kaluna-container
      pt-12
      pb-14
      md:pt-16
      md:pb-20
      lg:pt-[52px]
      lg:pb-[72px]
    "
  >
    <div
      className="
        flex
        flex-col
        lg:grid
        lg:grid-cols-[40%_60%]
        items-start
        gap-10
        lg:gap-12
        xl:gap-16
      "
    >
      {/* Left Content */}
      <div className="w-full lg:pt-[52px]">
        {/* Section Label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-[14px] w-[3px] shrink-0 rounded-full bg-[#299EED]" />

          <span
            className="
              text-[8px]
              md:text-[10px]
              font-semibold
              uppercase
              tracking-[0.06em]
              text-[#0E2A54]
            "
          >
            Overview
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            max-w-[550px]
            text-[32px]
            sm:text-[36px]
            md:text-[40px]
            lg:text-[42px]
            font-medium
            leading-[1.12]
            tracking-[-0.025em]
            text-[#0D0D0D]
          "
        >
          Engineering the Digital Backbone of  
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Modern Enterprises
        </h2>

        {/* Description */}
        <div
          className="
            mt-6
            max-w-[520px]
            space-y-4
            text-[13px]
            md:text-[14px]
            leading-[1.7]
            text-[#4A4A4A]
          "
        >
          <p>
            Kaluna Technology is a trusted technology partner specializing in enterprise digitalization and workflow automation.
          </p>

          <p>
            We empower growing organizations to replace disjointed tools and fragmented operations with custom, high-performance Enterprise Resource Planning (ERP) systems.
          </p>

          <p>
            In today’s fast-moving business environment, operational efficiency is a necessity. At Kaluna, we bridge the gap between complex operational challenges and modern software—enabling enterprises to scale efficiently, protect margins, and unlock full operational transparency.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="
          relative
          h-[300px]
          w-full
          overflow-hidden
          rounded-[20px]
          bg-[#EAF3FF]
          sm:h-[400px]
          md:h-[480px]
          lg:h-[540px]
          xl:h-[560px]
        "
      >
        <img
          src="image/kaluna-office.webp"
          alt="Kaluna Technology Office"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</section>
{/* ── Problem We Solve ───────────────────────────────────── */}
<WhoWeAreProblemWeSolve />
{/* ── 4. Vision & Mission ─────────────────────────────────── */}
<section
  className="
    relative
    min-h-[360px]
    w-full
    overflow-hidden
    py-12
    md:py-16
    lg:py-20
  "
>
  {/* BACKGROUND */}
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 1920 634"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="vision-gradient"
        x1="977"
        y1="83.2328"
        x2="969.81"
        y2="634.128"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0E2A54" />
        <stop offset="1" stopColor="#1F5DBA" />
      </linearGradient>
    </defs>

    <rect width="1920" height="634" fill="url(#vision-gradient)" />

    <g opacity="0.5">
      <path
        d="
          M1599.1 558.413
          H1801.98
          C1806.27 558.413 1809.75 554.935 1809.75 550.642
          V347.615
          C1809.75 345.312 1806.96 344.149 1805.33 345.777
          L1597.27 553.992
          C1595.64 555.621 1596.79 558.413 1599.1 558.413
          Z
        "
        fill="#2C9FDD"
      />
      <path
        d="
          M83.8965 1599
          L2640.36 -958.187
          H3023
          L467.705 1599
          H83.8965
          Z
        "
        fill="#375CA9"
      />
      <path
        d="
          M-65.9999 -1121
          H317.832
          L1519.66 81.7133
          C1520.67 82.7253 1520.67 84.3654 1519.66 85.3775
          L1335.05 270.094
          C1332.01 273.131 1327.09 273.131 1324.06 270.094
          L-65.9999 -1121
          Z
        "
        fill="#203560"
      />
    </g>
  </svg>

  {/* CONTENT */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      h-full
      w-full
      max-w-[1920px]
      flex-col
      items-center
      justify-center
      px-5
      text-center
      kaluna-container
    "
  >
    {/* Vision */}
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-3.5 w-[3px] bg-[#299EED] rounded-full" />

        <span
          className="
            text-[10px]
            md:text-[11px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-white
          "
        >
          Our Vision
        </span>
      </div>

      <h2
        className="
          max-w-[900px]
          text-[18px]
          sm:text-[22px]
          md:text-[26px]
          lg:text-[28px]
          font-normal
          leading-snug
          tracking-[-0.02em]
          text-white
        "
      >
        To be the most trusted custom ERP partner, 
        <br className="hidden sm:block" />
        driving peak operational efficiency through practical, scalable software. 
      </h2>
    </div>

    {/* Mission */}
    <div
      className="
        mt-8
        md:mt-10
        flex
        flex-col
        items-center
      "
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="h-3.5 w-[3px] bg-[#299EED] rounded-full" />

        <span
          className="
            text-[10px]
            md:text-[11px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-white
          "
        >
          Our Mission
        </span>
      </div>

      <p
        className="
          max-w-[850px]
          text-[13px]
          sm:text-[15px]
          md:text-[17px]
          lg:text-[18px]
          leading-relaxed
          tracking-[-0.01em]
          text-white/90
          font-light
        "
      >
      To empower businesses with purpose-built ERP solutions that automate core operations, deliver enterprise reliability, and drive continuous growth through dedicated partnership. 
      </p>
    </div>
  </div>
</section>

{/* ── 5. Our Expertise ─────────────────────────────────────── */}
<section className="w-full bg-white py-12 md:py-16">
  <div className="kaluna-container">
    <div className="mb-3 flex items-center gap-2.5">
      <span className="h-3.5 w-[2.5px] rounded-full bg-[#299EED]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0E2A54]">
        Our Expertise
      </span>
    </div>

    <h2 className="mb-6 text-[24px] font-[550] text-[#0D0D0D] md:mb-8 md:text-[30px]">
      Our Technology Expertise
    </h2>

    <div
      className="
        grid
        w-full
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-5
        gap-6
        items-stretch
      "
    >
      {expertise.map((item, idx) => {
        const titleLines = item.name.split("\n");

        return (
          <article
            key={idx}
            className="
              group
              relative
              aspect-[3/2]
              w-full
              min-w-0
              cursor-pointer
              overflow-hidden
              rounded-[16px]
              bg-[#0E2A54]
              shadow-md
              transition-all
              duration-500
              hover:-translate-y-1.5
              hover:shadow-2xl
              hover:shadow-[#0E2A54]/25
            "
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.name.replace(/\n/g, " ")}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* Overlay Linear Gradient: #0E2A54 (Tebal di Bawah, Tipis di Atas) */}
            <div
              className="
                absolute
                inset-0
                pointer-events-none
                transition-opacity
                duration-500
                bg-[linear-gradient(to_top,#0E2A54_0%,#0E2A54_35%,rgba(14,42,84,0.75)_65%,rgba(14,42,84,0.15)_100%)]
                group-hover:bg-[linear-gradient(to_top,#0E2A54_0%,#0E2A54_40%,rgba(14,42,84,0.85)_70%,rgba(14,42,84,0.2)_100%)]
              "
            />

            {/* Title Content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-medium leading-[1.25] text-white transition-colors">
                {titleLines.map((line, lIdx) => (
                  <span key={lIdx} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>
      {/* ── 6. Team Members ─────────────────────────────────────── */}
      <section className="w-full bg-white pb-12 md:pb-16">
        <div className="kaluna-container">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="font-semibold text-[10px] tracking-[0.08em] text-[#0E2A54] uppercase">Our Team</span>
          </div>
          <h2 className="text-[24px] md:text-[30px] font-[550] mb-6 md:mb-8 text-[#0D0D0D]">Expert Behind The Works</h2>

          <div className="flex flex-wrap justify-start gap-4 md:gap-6 lg:gap-8">
            {team.map((member) => (
              <div 
                key={member.id} 
                className="flex flex-col w-[calc(50%-8px)] md:w-[calc(25%-18px)] lg:w-[calc(25%-24px)]"
              >
                <div className="w-full aspect-[3/2] rounded-[12px] overflow-hidden mb-3 bg-gray-200 shadow-sm">
                  <img
                    src={member.image_url}
                    alt={member.full_name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: "top center" }}
                  />
                </div>
                <div className="flex justify-between items-start gap-1">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-sm md:text-base text-[#0D2342] leading-tight mb-1">{member.full_name}</h4>
                    <span className="text-[10px] md:text-[11px] font-semibold text-gray-500 uppercase tracking-wide">{member.position}</span>
                  </div>
                  <a href={member.linkedin_url} target="_blank" rel="noreferrer" className="w-6 h-6 md:w-7 md:h-7 shrink-0 bg-[#0D2342] text-white rounded-full flex items-center justify-center hover:bg-[#299EED] transition-colors mt-0.5 shadow-sm">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA & Footer ─────────────────────────────────────── */}
      <CTAW />
      <Footer />
    </main>
  );
}