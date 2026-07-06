// app/services/[slug]/page.tsx
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import CTA from "../../../src/components/CTA";
import Portfolio from "../../../src/components/Portofolio";

// Import fungsi backend
import { getWorks } from "../../../src/lib/actions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  // Mengurai params secara asinkron di Server Component
  const { slug } = await params;
  
  // Fetch data dari backend (Database)
  const worksData = await getWorks();

  // Data statis layanan
  const serviceData = {
    title: "Website Development",
    heroDesc: "Building High-Performance Websites with Exceptional User Experience",
    heroSub: "We build fast, secure, and fully responsive websites tailored to your specific business operations, enabling smooth customer acquisition and brand representation.",
    packages: [
      { name: "Basic", price: "Rp 3.000.000", desc: "Suitable for landing pages and simple business identity profiles.", features: ["1 Page Website Design", "Responsive Layout (Mobile Ready)", "Domain & Hosting 1 Year", "Basic SEO Setup", "Standard Security"], isPopular: false },
      { name: "Business", price: "Rp 7.000.000", desc: "Best for growing companies requiring detailed services and showcase.", features: ["Up to 5 Pages Website", "CMS Panel (WordPress/Custom)", "Advanced SEO Optimization", "Speed Performance Tuning", "1 Month Free Maintenance"], isPopular: true },
      { name: "Custom", price: "Chat Admin", desc: "For complex web architectures, SaaS platforms, or custom web systems.", features: ["Tailored Web Architecture", "Custom Backend & API", "Advanced Database System", "High-level Security Setup", "Scalable Cloud Server"], isPopular: false },
    ],
    challenges: [
      "Outdated website design that ruins brand reputation",
      "Poor load performance causing high user bounce rate",
      "Hard-to-manage backends that waste time",
      "Inability to scale software infrastructure as you grow"
    ],
    capabilities: [
      { title: "User-Centric UI/UX Design", desc: "We design intuitive websites that guide users effortlessly towards conversion goals." },
      { title: "Responsive & Mobile-Ready", desc: "Flawless experience across all devices, from desktop monitors to smartphones." },
      { title: "SEO-Friendly Structure", desc: "Built with best practices to help you rank higher on search engines organically." },
      { title: "Fast Loading Speed", desc: "Optimized code and assets to ensure your website loads in under 3 seconds." },
      { title: "Easy Content Management", desc: "Empower your team to update text and images easily without coding knowledge." },
      { title: "Robust Security", desc: "Implementation of SSL, firewalls, and secure coding to protect your data." },
    ],
    processes: [
      { step: "01", title: "Requirement Gathering", desc: "We begin by understanding your business goals, target audience, and specific technical requirements." },
      { step: "02", title: "UI/UX Design & Prototyping", desc: "Creating wireframes and high-fidelity designs for your approval before development starts." },
      { step: "03", title: "Development & Integration", desc: "Transforming the design into a fully functional, responsive, and secure website." },
      { step: "04", title: "Testing & Deployment", desc: "Rigorous testing for performance and bugs, followed by a smooth launch to your domain." }
    ],
    faqs: [
      { q: "How long does it take to build a website?", a: "A standard corporate website takes around 2 to 4 weeks. E-commerce or custom web applications may take 6 to 12 weeks depending on the complexity." },
      { q: "Do you provide maintenance services?", a: "Yes, we offer ongoing maintenance and support packages to ensure your website remains updated, secure, and running smoothly." },
      { q: "Can I update the content on my own?", a: "Absolutely. We integrate user-friendly Content Management Systems (CMS) so you can edit text, images, and posts easily." },
      { q: "Do I need to pay for domain and hosting?", a: "Our packages generally include domain and hosting for the first year. For custom projects, we will outline these costs transparently." }
    ]
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342] overflow-x-hidden">
      <Navbar />

      {/* Floating WhatsApp Icon */}
      <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

      {/* 1. HERO HEADER */}
      <section className="pt-24 md:pt-32 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="relative w-full h-[180px] md:h-[220px] rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#0D2342] flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2342] to-[#163a6f]"></div>
          <div className="absolute top-0 right-0 w-3/4 h-full bg-[#1E88E5]/10 transform skew-x-[-35deg] translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#1E88E5]/5 transform skew-x-[-35deg] -translate-x-10"></div>
          
          <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white tracking-wide capitalize">
            {serviceData.title}
          </h1>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-[11px] font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| OVERVIEW</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight text-[#0D2342]">{serviceData.heroDesc}</h2>
          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">{serviceData.heroSub}</p>
        </div>
        <div className="order-1 lg:order-2 w-full aspect-video lg:aspect-square lg:h-[400px] rounded-[24px] overflow-hidden shadow-xl relative">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" alt="Website Mockup" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 3. PRICING PACKAGES */}
      <section className="w-full bg-[#0a1930] py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| PRICING</span>
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">Ideal Packages Tailored to<br className="hidden md:block"/> Your Business Needs</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {serviceData.packages.map((pkg, idx) => (
              <div key={idx} className={`bg-white p-8 lg:p-10 rounded-[32px] shadow-xl flex flex-col justify-between relative transform transition-transform hover:-translate-y-2 ${pkg.isPopular ? 'border-2 border-[#1E88E5] z-10 md:-mt-4 md:mb-[-1rem]' : 'border border-transparent'}`}>
                {pkg.isPopular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff4a4a] text-white text-[11px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-md">Popular</span>}
                <div>
                  <div className="inline-block bg-[#F0F7FF] text-[#1E88E5] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">{pkg.name}</div>
                  <h4 className="text-3xl md:text-4xl font-black mb-3 text-[#0D2342]">{pkg.price}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 border-b border-gray-100 pb-6 min-h-[70px]">{pkg.desc}</p>
                  <ul className="space-y-4 text-sm font-medium text-gray-700 mb-10">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-[#EBF3FF] text-[#1E88E5] flex items-center justify-center">✓</div>
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${pkg.isPopular ? 'bg-[#1E88E5] text-white hover:bg-[#156cb8]' : 'bg-[#0a1930] text-white hover:bg-[#0D2342]'}`}>
                  {pkg.name === "Custom" ? "Chat Admin" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMON CHALLENGES */}
      <section className="w-full bg-white py-16 md:py-24 px-0 md:px-10 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 md:px-0 text-left md:text-center mb-10 md:mb-16">
            <span className="text-[11px] font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| CHALLENGES</span>
            <h3 className="text-2xl md:text-4xl font-bold text-[#0D2342] leading-tight">Addressing Common Challenges</h3>
          </div>
          <div className="flex overflow-x-auto px-6 md:px-0 pb-8 md:pb-0 gap-4 md:gap-6 md:grid md:grid-cols-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {serviceData.challenges.map((ch, idx) => (
              <div key={idx} className="min-w-[260px] md:min-w-0 h-[160px] md:h-[180px] bg-[#0D2342] text-white p-6 md:p-8 rounded-[20px] shadow-md bg-gradient-to-br from-[#0D2342] to-[#183e75] relative overflow-hidden snap-center shrink-0 flex items-end">
                <p className="text-sm md:text-base font-medium leading-snug tracking-wide relative z-10">{ch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ESSENTIAL CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <span className="text-[11px] font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| FEATURES</span>
        <h3 className="text-2xl md:text-4xl font-bold mb-12 text-[#0D2342]">Essential Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {serviceData.capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-5">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#F0F7FF] flex items-center justify-center text-[#1E88E5]">✓</div>
              <div>
                <h4 className="font-bold text-[#0D2342] text-lg mb-2">{cap.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ (MENGGUNAKAN NATIVE HTML DETAILS & SUMMARY) */}
      <section className="bg-[#F8FAFC] py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| FAQ</span>
            <h3 className="text-2xl md:text-4xl font-bold text-[#0D2342]">Frequently Asked Question</h3>
          </div>
          
          <div className="space-y-4">
            {serviceData.faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="w-full px-6 py-5 flex justify-between items-center outline-none">
                  <span className="font-bold text-[#0D2342] text-sm md:text-base pr-4">{faq.q}</span>
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#F0F7FF] text-[#1E88E5] transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURED WORKS (PORTFOLIO DINAMIS) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-10">
          <span className="text-[11px] font-bold tracking-widest text-[#1E88E5] uppercase block mb-3">| PORTFOLIO</span>
          <h3 className="text-2xl md:text-4xl font-bold text-[#0D2342]">Featured Website Development Works</h3>
        </div>
        
        {/* Menggunakan data dari backend `worksData` ke dalam komponen presentasional */}
        <Portfolio projects={worksData} />
      </section>

      <CTA />
      <Footer />
    </main>
  );
}