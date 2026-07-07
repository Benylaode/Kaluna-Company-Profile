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
      <section className="w-full bg-white pt-[100px]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-4">
          <div
            className="relative w-full h-[170px] md:h-[180px] rounded-[20px] overflow-hidden flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/image/works-banner-bg.svg')" }}
          >
            <h1 className="relative z-10 text-3xl md:text-[52px] font-bold text-white tracking-wide">Who We Are</h1>
          </div>
        </div>
      </section>

      {/* ── 2. About Us ─────────────────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1440px] px-5 md:px-12 py-16 md:py-24 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0D2342] leading-tight">
              Crafting Digital Solutions<br className="hidden md:block" /> For Your Needs
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
              Kaluna Technology is an enterprise-grade IT solutions company aimed at driving digital transformation. We integrate best-in-class engineering with strategic business planning to bring your vision into reality.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We empower businesses with seamless integrations, scalable architectures, and future-ready tech ecosystems. Your journey towards the digital forefront begins with us.
            </p>
          </div>

          <div className="w-full md:w-1/2 relative h-[250px] md:h-[380px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" alt="Kaluna Technology Office" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded">
                  <span className="text-[#0D2342] font-black text-3xl leading-none">K</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="font-bold text-3xl leading-none tracking-wider">KALUNA</span>
                  <span className="text-sm font-light tracking-widest mt-1">TECHNOLOGY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why Kaluna IT ────────────────────────────────────── */}
      <section className="w-full bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-12">
          <div className="text-left md:text-center mb-10 md:mb-16">
            <div className="flex items-center gap-2.5 mb-4 md:justify-center">
              <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Why Kaluna IT</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0D2342] leading-tight">
              Turning Complex Problems<br className="hidden md:block" /> Into Scalable Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyReasons.map((reason, idx) => (
              <div key={idx} className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#F0F7FF] rounded-lg flex items-center justify-center mb-6 text-[#299EED]">
                  {reason.icon}
                </div>
                <h3 className="font-bold text-[#0D2342] text-base mb-3 leading-snug">{reason.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Vision & Mission ─────────────────────────────────── */}
      <section className="w-full bg-[#0D2342] py-20 md:py-32 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2342] to-[#122c54]" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#1E88E5]/10 transform skew-x-[-35deg] translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#1E88E5]/5 transform skew-x-[-35deg] -translate-x-1/4" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-12">
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#299EED] uppercase">Our Vision</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-medium text-white mb-16 leading-snug md:leading-normal">
            To empower enterprises with reliable and<br className="hidden md:block" /> future-ready technology systems
          </h2>

          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#299EED] uppercase">Our Mission</span>
          </div>
          <p className="text-base md:text-xl text-gray-300 font-light">
            Deliver structured, scalable, and performance-driven IT solutions.
          </p>
        </div>
      </section>

      {/* ── 5. Expertise ────────────────────────────────────────── */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Expertise</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-[#0D2342]">Our Technology Expertise</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
      <section className="w-full bg-white pb-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Our Team</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-12 text-[#0D2342]">Expert Behind The Works</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-12">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col">
                <div className="w-full aspect-[3/4] md:aspect-[4/5] rounded-[16px] md:rounded-[20px] overflow-hidden mb-4 bg-gray-200">
                  <img
                    src={member.image_url}
                    alt={member.full_name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-sm md:text-base text-[#0D2342] leading-tight">{member.full_name}</h4>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase mt-1 tracking-wide">{member.position}</span>
                  </div>
                  <a href={member.linkedin_url} target="_blank" rel="noreferrer" className="w-7 h-7 md:w-8 md:h-8 shrink-0 bg-[#0D2342] text-white rounded-full flex items-center justify-center hover:bg-[#299EED] transition-colors mt-1">
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
      <CTAC />
      <Footer />
    </main>
  );
}