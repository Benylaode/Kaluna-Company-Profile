// app/who-we-are/page.tsx
// HAPUS "use client" - Ini sekarang Server Component

import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTA from "../../src/components/CTA";
import { getTeam } from "../../src/lib/actions";

export default async function WhoWeArePage() {
  const team = await getTeam();

  // Data expertise tetap bisa statis atau dibuatkan tabel sendiri nanti
  const expertise = [
    { name: "IoT Systems", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=300" },
    { name: "Enterprise Software Development", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=300" },
    { name: "System Integration", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300" },
    { name: "Data Infrastructure", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=300" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342]">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-28 px-6 md:px-10">
        <div className="relative w-full h-[220px] bg-[#0D2342] rounded-[32px] overflow-hidden flex items-center justify-center shadow-md">
          <h1 className="relative z-10 text-4xl md:text-5xl font-black text-white tracking-tight">Who We Are</h1>
        </div>
      </section>

      {/* Team Members Section - Data dari SQLite */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 mb-10">
        <span className="text-xs font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| Our Team</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Expert Behind The Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col">
              <div className="w-full h-[240px] rounded-[24px] overflow-hidden mb-4 bg-gray-200 shadow-sm">
                <img src={member.image_url} alt={member.full_name} className="w-full h-full object-cover filter grayscale" />
              </div>
              <h4 className="font-bold text-base text-[#0D2342]">{member.full_name}</h4>
              <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mt-0.5 mb-3">{member.position}</span>
              <a href={member.linkedin_url} target="_blank" className="w-7 h-7 bg-[#0D2342] text-white rounded-full flex items-center justify-center hover:bg-[#1E88E5] transition-colors">
                <span className="text-xs font-bold leading-none">in</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section lainnya tetap sama ... */}
      <CTA />
      <Footer />
    </main>
  );
}