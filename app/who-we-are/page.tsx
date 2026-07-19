import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTAC from "../../src/components/CTAC";
import { getTeam } from "../../src/lib/actions";

export default async function WhoWeArePage() {
  const team = await getTeam();

  const expertise = [
    { name: "IoT Systems", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600" },
    { name: "Enterprise Software Development", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600" },
    { name: "System Integration", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600" },
    { name: "Data Infrastructure", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600" },
  ];

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

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342] overflow-x-hidden">
      <Navbar />

      {/* ── 1. Hero Banner — same design as Our Works ────────────── */}
      <section className="w-full bg-white pt-[72px] md:pt-[82px]">
        <div className="kaluna-wide-container">
          <div
            className="
              relative
              w-full
              h-[240px]
              md:h-[260px]
              rounded-[12px]
              overflow-hidden
              flex
              items-center
              justify-center
              bg-cover
              bg-center
            "
            style={{
              backgroundImage: "url('/image/works-banner-bg.svg')",
            }}
          >
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-[#0E2A54]/15"></div>

            <h1 className="relative z-10 text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.02em] text-white">
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
      max-w-[1600px]
      px-5
      md:px-10
      lg:px-[72px]
      xl:px-[88px]
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

{/* ── 3. Why Kaluna ───────────────────────────────────────── */}
<section className="w-full bg-[#F6F9FC]">
  <div
    className="
      mx-auto
      max-w-[1600px]
      px-5
      md:px-10
      lg:px-[72px]
      xl:px-[88px]
      pt-[72px]
      pb-[74px]
      md:pt-[84px]
      md:pb-[88px]
    "
  >
    {/* Heading */}
    <div className="mx-auto max-w-[760px] text-center">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-[15px] w-[3px] rounded-full bg-[#299EED]" />

        <span
          className="
            text-[11px]
            md:text-[12px]
            font-semibold
            uppercase
            tracking-[0.07em]
            text-[#0E2A54]
          "
        >
          Why Kaluna IT
        </span>
      </div>

      <h2
        className="
          text-[30px]
          sm:text-[34px]
          md:text-[38px]
          lg:text-[42px]
          font-bold
          leading-[1.2]
          tracking-[-0.025em]
          text-[#0E2A54]
        "
      >
        Turning Complex Problems
        <br />
        Into Scalable Solutions
      </h2>
    </div>

    {/* Cards */}
    <div
      className="
        mt-14
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        lg:mt-16
        lg:grid-cols-4
        lg:gap-5
      "
    >
      {/* Card 1 */}
      <div
        className="
          min-h-[280px]
          rounded-[20px]
          border
          border-[#E5EAF0]
          bg-white
          p-7
          shadow-[0_2px_8px_rgba(14,42,84,0.06)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_25px_rgba(14,42,84,0.09)]
          md:p-8
        "
      >
        <div
          className="
            mb-5
            flex
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-[12px]
            bg-[#EEF6FF]
          "
        >
          <img
            src="/image/why/1.svg"
            alt=""
            className="h-[28px] w-[28px] object-contain"
          />
        </div>

        <h3
          className="
            text-[18px]
            md:text-[19px]
            font-semibold
            leading-[1.3]
            tracking-[-0.015em]
            text-[#0E2A54]
          "
        >
          Fragmented Business Systems
        </h3>

        <p
          className="
            mt-4
            text-[14px]
            md:text-[15px]
            leading-[1.65]
            text-[#667085]
          "
        >
          Many enterprises struggle with siloed legacy systems that slow down
          operations and make data exchange difficult.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="
          min-h-[280px]
          rounded-[20px]
          border
          border-[#E5EAF0]
          bg-white
          p-7
          shadow-[0_2px_8px_rgba(14,42,84,0.06)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_25px_rgba(14,42,84,0.09)]
          md:p-8
        "
      >
        <div
          className="
            mb-5
            flex
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-[12px]
            bg-[#EEF6FF]
          "
        >
          <img
            src="/image/why/2.svg"
            alt=""
            className="h-[28px] w-[28px] object-contain"
          />
        </div>

        <h3
          className="
            text-[18px]
            md:text-[19px]
            font-semibold
            leading-[1.3]
            tracking-[-0.015em]
            text-[#0E2A54]
          "
        >
          Lack of Real-Time Operations Visibility
        </h3>

        <p
          className="
            mt-4
            text-[14px]
            md:text-[15px]
            leading-[1.65]
            text-[#667085]
          "
        >
          Without unified dashboards, management lacks real-time insights,
          delaying critical business decisions and lowering agility.
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="
          min-h-[280px]
          rounded-[20px]
          border
          border-[#E5EAF0]
          bg-white
          p-7
          shadow-[0_2px_8px_rgba(14,42,84,0.06)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_25px_rgba(14,42,84,0.09)]
          md:p-8
        "
      >
        <div
          className="
            mb-5
            flex
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-[12px]
            bg-[#EEF6FF]
          "
        >
          <img
            src="/image/why/3.svg"
            alt=""
            className="h-[28px] w-[28px] object-contain"
          />
        </div>

        <h3
          className="
            text-[18px]
            md:text-[19px]
            font-semibold
            leading-[1.3]
            tracking-[-0.015em]
            text-[#0E2A54]
          "
        >
          Businesses Struggle to Turn Data Into Insights
        </h3>

        <p
          className="
            mt-4
            text-[14px]
            md:text-[15px]
            leading-[1.65]
            text-[#667085]
          "
        >
          Vast amounts of data are generated, but without proper analytics
          infrastructure, businesses fail to leverage it for growth.
        </p>
      </div>

      {/* Card 4 */}
      <div
        className="
          min-h-[280px]
          rounded-[20px]
          border
          border-[#E5EAF0]
          bg-white
          p-7
          shadow-[0_2px_8px_rgba(14,42,84,0.06)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_25px_rgba(14,42,84,0.09)]
          md:p-8
        "
      >
        <div
          className="
            mb-5
            flex
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-[12px]
            bg-[#EEF6FF]
          "
        >
          <img
            src="/image/why/4.svg"
            alt=""
            className="h-[28px] w-[28px] object-contain"
          />
        </div>

        <h3
          className="
            text-[18px]
            md:text-[19px]
            font-semibold
            leading-[1.3]
            tracking-[-0.015em]
            text-[#0E2A54]
          "
        >
          Outdated or Inefficient Digital Platforms
        </h3>

        <p
          className="
            mt-4
            text-[14px]
            md:text-[15px]
            leading-[1.65]
            text-[#667085]
          "
        >
          Relying on outdated applications slows down processes and creates poor
          experiences for both employees and customers.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* ── 4. Vision & Mission ─────────────────────────────────── */}
<section className="relative overflow-hidden bg-[linear-gradient(182.26deg,#0E2A54_14.5%,#1F5DBA_98.1%)] py-24 md:py-28 lg:py-32">

  {/* Background Graphics */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* Dark Shape */}
    <div
      className="absolute opacity-40"
      style={{
        width: "1100px",
        height: "900px",
        background: "#203560",
        clipPath: "polygon(42% 0%,100% 0%,68% 100%,8% 100%)",
        top: "-520px",
        right: "-120px",
      }}
    />

    {/* Blue Shape */}
    <div
      className="absolute opacity-35"
      style={{
        width: "950px",
        height: "950px",
        background: "#375CA9",
        clipPath: "polygon(38% 0%,100% 0%,62% 100%,0% 100%)",
        top: "-180px",
        right: "-90px",
      }}
    />

    {/* Small Triangle */}
    <div
      className="absolute opacity-80"
      style={{
        width: "180px",
        height: "180px",
        background: "#2C9FDD",
        clipPath: "polygon(100% 0%,0% 100%,100% 100%)",
        right: "110px",
        bottom: "70px",
      }}
    />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center gap-16">

    {/* Vision */}
    <div className="flex flex-col items-center gap-6">

      <div className="flex items-center gap-3">
        <span className="w-[4px] h-[15px] bg-[#299EED]" />
        <span className="text-[12px] font-semibold tracking-[0.05em] uppercase text-white">
          OUR VISION
        </span>
      </div>

      <h2
        className="
          max-w-5xl
          text-center
          text-[38px]
          md:text-[32px]
          lg:text-[46px]
          font-medium
          leading-[110%]
          tracking-[-0.01em]
          text-white
        "
      >
        To empower enterprises with reliable and
        <br className="hidden md:block" />
        future-ready technology systems
      </h2>

    </div>

    {/* Mission */}
    <div className="flex flex-col items-center gap-6">

      <div className="flex items-center gap-3">
        <span className="w-[4px] h-[15px] bg-[#299EED]" />
        <span className="text-[12px] font-semibold tracking-[0.05em] uppercase text-white">
          OUR MISSION
        </span>
      </div>

      <p
        className="
          max-w-4xl
          text-center
          text-xl
          md:text-2xl
          lg:text-[25px]
          leading-[120%]
          font-normal
          text-white/90
        "
      >
        Deliver structured, scalable, and performance-driven IT solutions.
      </p>

    </div>

  </div>

</section>

      {/* ── 5. Expertise ────────────────────────────────────────── */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-[48px] lg:px-[80px]">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Expertise</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-[#0D2342]">Our Technology Expertise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {expertise.map((item, idx) => (
              <div key={idx} className="relative w-full h-[160px] md:h-[220px] rounded-[16px] overflow-hidden group cursor-pointer">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2342]/90 via-[#0D2342]/50 to-transparent flex items-end p-4 md:p-6">
                  <h4 className="text-white font-semibold text-sm md:text-base leading-snug w-full">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Team Members ─────────────────────────────────────── */}
      <section className="w-full bg-white pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-[48px] lg:px-[80px]">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Our Team</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-[#0D2342]">Expert Behind The Works</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 md:gap-3 lg:gap-4">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col">
                <div className="w-full aspect-[3/4] rounded-[12px] overflow-hidden mb-2 bg-gray-200">
                  <img
                    src={member.image_url}
                    alt={member.full_name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-between items-start gap-1">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-xs md:text-xs lg:text-sm text-[#0D2342] leading-tight">{member.full_name}</h4>
                    <span className="text-[9px] font-semibold text-gray-500 uppercase mt-1 tracking-wide">{member.position}</span>
                  </div>
                  <a href={member.linkedin_url} target="_blank" rel="noreferrer" className="w-5 h-5 shrink-0 bg-[#0D2342] text-white rounded-full flex items-center justify-center hover:bg-[#299EED] transition-colors mt-0.5">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
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
      <CTAC />
      <Footer />
    </main>
  );
}