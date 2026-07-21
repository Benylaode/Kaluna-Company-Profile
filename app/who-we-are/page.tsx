import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTAW from "../../src/components/CTAW";
import { getTeam } from "../../src/lib/actions";

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
    name: "IoT\nSystems",
    img: "image/Expertise/1.svg",
  },
  {
    name: "ERP & System\nIntegration",
    img: "image/Expertise/2.svg",
  },
  {
    name: "Web & Application\nDevelopment",
    img: "image/Expertise/3.svg",
  },
  {
    name: "Data Dashboard\n& Analytics",
    img: "image/Expertise/4.svg",
  },
];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342] overflow-x-hidden">
      <Navbar />

      {/* ── 1. Hero Banner — same design as Our Works ────────────── */}
      <section className="w-full bg-white pt-[80px] sm:pt-[100px] md:pt-[80px]">
        <div className="kaluna-wide-container">
          <div
            className="
              relative
              w-full
              h-[150px]
              sm:h-[180px]
              md:h-[240px]
              rounded-[12px]
              sm:rounded-[16px]
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

            <h1 className="relative z-10 text-[28px] sm:text-[36px] md:text-[52px] lg:text-[60px] font-normal md:font-light tracking-[-0.02em] text-white text-center px-4">
              Who We Are
            </h1>
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
          Crafting Digital Solutions
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          For Your Needs
        </h2>

        {/* Description */}
        <div
          className="
            mt-8
            max-w-[510px]
            space-y-6
            text-[12px]
            md:text-[14px]
            leading-[1.6]
            text-[#4A4A4A]
          "
        >
          <p>
            Kaluna Technology is a technology and digital solutions company
            under PT. Sinergi Mulia Arsa, focused on developing integrated
            systems, custom software, and scalable technology infrastructures
            to support business digital transformation.
          </p>

          <p>
            We help organizations overcome operational challenges, disconnected
            systems, inefficient manual processes, and the growing need for
            structured, scalable digital ecosystems.
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
<section className="w-full overflow-hidden bg-[#FAFAFA] py-20 md:py-28">
  <div className="kaluna-wide-container">
    <div
      className="
        relative
        overflow-hidden
        rounded-[24px]
        bg-[#EAF3FF]
        px-[10px]
        py-10
        md:px-[calc(min(6.3vw,121px)-min(2.5vw,48px))]
        md:py-16
      "
    >
      <div className="w-full">
        {/* Header */}
        <div className="mx-auto max-w-[680px] text-center">
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <span className="h-3.5 w-[2.5px] rounded-full bg-[#299EED]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#0E2A54]
                md:text-[11px]
              "
            >
              Problem We Solve
            </span>
          </div>

          <h2
            className="
              text-[26px]
              font-medium
              leading-[1.16]
              tracking-[-0.02em]
              text-[#0D0D0D]
              sm:text-[28px]
              md:text-[32px]
              lg:text-[34px]
            "
          >
            Turning Complex Problems
            <br />
            Into Scalable Solutions
          </h2>
        </div>

        {/* Problem Cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            md:mt-12
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {/* Card 1 */}
          <div
            className="
              min-h-[250px]
              rounded-[18px]
              bg-white
              p-6
              shadow-[0_12px_35px_rgba(14,42,84,0.05)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_45px_rgba(14,42,84,0.08)]
              md:p-8
            "
          >
            <div
              className="
                mb-6
                flex
                h-[50px]
                w-[50px]
                items-center
                justify-center
                rounded-[11px]
                bg-[#A3D9F733]
              "
            >
              <img
                src="/image/Problem/1.svg"
                alt="Fragmented Business Systems"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>

            <h3
              className="
                text-[16px]
                leading-[1.35]
                tracking-[-0.01em]
                text-[#0E2A54]
                md:text-[20px]
              "
            >
              Fragmented Business Systems
            </h3>

            <p
              className="
                mt-3
                text-[11px]
                leading-[1.6]
                text-[#737373]
                md:text-[12px]
              "
            >
              Integrates systems through ERP and System Integration, connecting
              departments into one unified platform for efficient workflows and
              accurate data.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              min-h-[250px]
              rounded-[18px]
              bg-white
              p-6
              shadow-[0_12px_35px_rgba(14,42,84,0.05)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_45px_rgba(14,42,84,0.08)]
              md:p-8
            "
          >
            <div
              className="
                mb-6
                flex
                h-[50px]
                w-[50px]
                items-center
                justify-center
                rounded-[11px]
                bg-[#A3D9F733]
              "
            >
              <img
                src="/image/Problem/2.svg"
                alt="Lack of Real-Time Operational Visibility"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>

            <h3
              className="
                text-[16px]
                leading-[1.35]
                tracking-[-0.01em]
                text-[#0E2A54]
                md:text-[20px]
              "
            >
              Lack of Real-Time Operational Visibility
            </h3>

            <p
              className="
                mt-3
                text-[11px]
                leading-[1.6]
                text-[#737373]
                md:text-[12px]
              "
            >
              Using IoT System Development and Industrial Automation, Kaluna
              builds connected systems that provide real-time monitoring and
              automated alerts.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              min-h-[250px]
              rounded-[18px]
              bg-white
              p-6
              shadow-[0_12px_35px_rgba(14,42,84,0.05)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_45px_rgba(14,42,84,0.08)]
              md:p-8
            "
          >
            <div
              className="
                mb-6
                flex
                h-[50px]
                w-[50px]
                items-center
                justify-center
                rounded-[11px]
                bg-[#A3D9F733]
              "
            >
              <img
                src="/image/Problem/3.svg"
                alt="Businesses Struggle to Turn Data into Insights"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>

            <h3
              className="
                text-[16px]
                leading-[1.35]
                tracking-[-0.01em]
                text-[#0E2A54]
                md:text-[20px]
              "
            >
              Businesses Struggle to Turn Data into Insights
            </h3>

            <p
              className="
                mt-3
                text-[11px]
                leading-[1.6]
                text-[#737373]
                md:text-[12px]
              "
            >
              Kaluna develops Data Dashboards and Analytics platforms that
              transform raw data into clear visual insights for faster and smarter
              business decisions.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="
              min-h-[250px]
              rounded-[18px]
              bg-white
              p-6
              shadow-[0_12px_35px_rgba(14,42,84,0.05)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_45px_rgba(14,42,84,0.08)]
              md:p-8
            "
          >
            <div
              className="
                mb-6
                flex
                h-[50px]
                w-[50px]
                items-center
                justify-center
                rounded-[11px]
                bg-[#A3D9F733]
              "
            >
              <img
                src="/image/Problem/4.svg"
                alt="Outdated or Inefficient Digital Platforms"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>

            <h3
              className="
                text-[16px]
                leading-[1.35]
                tracking-[-0.01em]
                text-[#0E2A54]
                md:text-[20px]
              "
            >
              Outdated or Inefficient Digital Platforms
            </h3>

            <p
              className="
                mt-3
                text-[11px]
                leading-[1.6]
                text-[#737373]
                md:text-[12px]
              "
            >
              Through Web and Application Development, Kaluna builds modern,
              scalable digital platforms tailored to business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ── 4. Vision & Mission ─────────────────────────────────── */}
<section
  className="
    relative
    h-[300px]
    w-full
    overflow-hidden
    sm:h-[340px]
    md:h-[420px]
    lg:h-[450px]
    xl:h-[470px]
  "
>
  {/* ========================================================
      BACKGROUND
      Menggunakan path asli dari vision.svg
  ======================================================== */}
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

    {/* Main gradient */}
    <rect width="1920" height="634" fill="url(#vision-gradient)" />

    {/* K graphic — exact paths from vision.svg */}
    <g opacity="0.5">
      {/* Small lower-right triangle */}
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

      {/* Main lower diagonal of K */}
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

      {/* Main upper diagonal of K */}
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

  {/* ========================================================
      CONTENT
  ======================================================== */}
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
      <div className="mb-[20px] flex items-center gap-[12px]">
        <span className="h-[15px] w-[4px] bg-[#299EED]" />

        <span
          className="
            text-[11px]
            uppercase
            leading-none
            tracking-[0.02em]
            text-white
            md:text-[12px]
          "
        >
          Our Vision
        </span>
      </div>

      <h2
        className="
          max-w-[1080px]
          text-[30px]
          font-normal
          leading-[1.08]
          tracking-[-0.025em]
          text-white
          sm:text-[28px]
          md:text-[34px]
          lg:text-[40px]
          xl:text-[42px]
        "
      >
        To empower enterprises with reliable and
        <br className="hidden sm:block" />
        future-ready technology systems
      </h2>
    </div>

    {/* Mission */}
    <div
      className="
        mt-[42px]
        flex
        flex-col
        items-center
        md:mt-[46px]
        lg:mt-[50px]
      "
    >
      <div className="mb-[19px] flex items-center gap-[12px]">
        <span className="h-[15px] w-[4px] bg-[#299EED]" />

        <span
          className="
            text-[11px]
            uppercase
            leading-none
            tracking-[0.02em]
            text-white
            md:text-[12px]
          "
        >
          Our Mission
        </span>
      </div>

      <p
        className="
          max-w-[1000px]
          text-[17px]
          leading-[1.3]
          tracking-[-0.02em]
          text-white
          font-light
          sm:text-[19px]
          md:text-[22px]
          lg:text-[24px]
        "
      >
        Deliver structured, scalable, and performance-driven IT solutions.
      </p>
    </div>
  </div>
</section>

      {/* ── 5. Expertise ────────────────────────────────────────── */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="kaluna-container">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="font-semibold text-[10px] tracking-[0.08em] text-[#0E2A54] uppercase">Our Expertise</span>
          </div>
          <h2 className="text-[24px] md:text-[30px] font-[550] mb-6 md:mb-8 text-[#0D0D0D]">Our Technology Expertise</h2>

<div
  className="
    grid
    w-full
    grid-cols-1
    gap-4
    sm:grid-cols-2
    lg:grid-cols-4
  "
>
  {expertise.map((item, idx) => {
    const titleLines = item.name.split("\n").slice(0, 2);
    const firstBaseline = titleLines.length === 1 ? 216 : 175;
    const gradientId = `expertise-gradient-${idx}`;

    return (
      <article
        key={idx}
        className="
          group
          relative
          aspect-[402/266]
          w-full
          cursor-pointer
          overflow-hidden
          rounded-[18px]
          bg-[#EAF3FF]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <img
          src={item.img}
          alt={item.name.replace(/\n/g, " ")}
          className="absolute max-w-none object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            width: "127.363072%",
            height: "131.579%",
            left: "-13.6816%",
            top: "-15.7895%",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-[#299EED]/15 transition-colors duration-500 group-hover:bg-[#0E2A54]/40" />

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 402 266"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="201"
              y1="24"
              x2="180.5"
              y2="277.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E2A54" stopOpacity="0" />
              <stop offset="1" stopColor="#0E2A54" />
            </linearGradient>
          </defs>

          <rect
            width="402"
            height="266"
            fill={`url(#${gradientId})`}
          />

          <text
            x="24"
            y={firstBaseline}
            fill="white"
            fontSize="33.2"
            fontWeight="400"
            letterSpacing="0"
            fontFamily="inherit"
          >
            {titleLines.map((line, lineIndex) => (
              <tspan
                key={`${line}-${lineIndex}`}
                x="24"
                y={firstBaseline + lineIndex * 41}
              >
                {line}
              </tspan>
            ))}
          </text>
        </svg>
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

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {team.map((member) => (
              <div 
                key={member.id} 
                className="flex flex-col w-[calc(50%-8px)] md:w-[calc(25%-18px)] lg:w-[calc(25%-24px)]"
              >
                <div className="w-full aspect-[3/4] rounded-[12px] overflow-hidden mb-3 bg-gray-200 shadow-sm">
                  <img
                    src={member.image_url}
                    alt={member.full_name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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