// app/services/[slug]/page.tsx
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import CTA from "../../../src/components/CTA";
import Portfolio from "../../../src/components/Portofolio";
import { getWorks, getServiceBySlug } from "../../../src/lib/actions";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface PackageData { name: string; price: string; desc: string; features: string[]; isPopular: boolean; }
interface CapabilityData { title: string; desc: string; }
interface ProcessData { step: string; title: string; desc: string; }
interface FaqData { q: string; a: string; }

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const worksData = await getWorks();

  const dbService = await getServiceBySlug(slug);
  if (!dbService) {
    notFound();
  }

  const parsedJson = dbService.content_json ? JSON.parse(dbService.content_json) : {};
  const serviceData = {
    title: dbService.title,
    heroDesc: parsedJson.heroDesc || "Premium Service",
    heroSub: parsedJson.heroSub || "Description of our premium service offering.",
    packages: (parsedJson.packages as PackageData[]) || [],
    challenges: (parsedJson.challenges as string[]) || [],
    capabilities: (parsedJson.capabilities as CapabilityData[]) || [],
    processes: (parsedJson.processes as ProcessData[]) || [],
    faqs: (parsedJson.faqs as FaqData[]) || []
  };

  // Filter works dynamically to match category
  let filteredWorks = worksData;
  if (slug === "web-application-development") {
    filteredWorks = worksData.filter(
      (w) => w.category === "Website Development" || w.category === "Software Development"
    );
  } else if (slug === "iot-system-development") {
    filteredWorks = worksData.filter(
      (w) => w.category === "IoT System" || w.category === "Backend & IoT"
    );
  }
  if (filteredWorks.length === 0) {
    filteredWorks = worksData;
  }

  // Dynamically resolve showcaseImage and clientName from dummy (database) works data
  let showcaseImage = "/image/empty-work.svg";
  let clientName = serviceData.title;

  if (slug === "web-application-development") {
    // Specifically find Website Development project that shows web murni (like suara-merdeka-refresh)
    const matchingWork = worksData.find(w => w.category === "Website Development" && w.slug === "suara-merdeka-refresh") || worksData.find(w => w.category === "Website Development");
    if (matchingWork) {
      showcaseImage = matchingWork.images[0];
      clientName = matchingWork.client;
    }
  } else if (slug === "iot-system-development") {
    const matchingWork = worksData.find(w => w.category === "IoT System" || w.category === "Backend & IoT");
    if (matchingWork) {
      showcaseImage = matchingWork.images[0];
      clientName = matchingWork.client;
    }
  } else {
    // General fallback finding the first work in the filtered category
    const matchingWork = filteredWorks[0];
    if (matchingWork) {
      showcaseImage = matchingWork.images[0];
      clientName = matchingWork.client;
    }
  }

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342] overflow-x-hidden">
      <Navbar />

      {/* Floating WA Button */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 group"
      >
        <img 
          src="/Frame WA.webp" 
          alt="WhatsApp" 
          className="w-14 h-14 md:w-16 md:h-16 drop-shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300" 
        />
      </a>

      {/* 1. HERO HEADER — standardized banner layout without overlays */}
      <section className="w-full bg-white pt-[100px]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-4">
          <div
            className="relative w-full h-[170px] md:h-[180px] rounded-[20px] overflow-hidden flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/image/works-banner-bg.svg')" }}
          >
            <h1 className="relative z-10 text-3xl md:text-[52px] font-bold text-white tracking-wide text-center px-4">
              {serviceData.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION — WorkProjectCard-style showcase layout */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-12 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-[80px] xl:gap-[114px] items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Overview</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight text-[#0D2342]">
              {serviceData.heroDesc}
            </h2>
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">{serviceData.heroSub}</p>
          </div>

          {/* Device Showcase Card exactly mimicking WorkProjectCard styling */}
          <div className="order-1 lg:order-2 relative w-full aspect-[979/711] overflow-hidden rounded-[24px] bg-[#0E2A54] shadow-lg">
            <img
              src={showcaseImage}
              alt={`${serviceData.title} Preview`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Browser Window Controls (Top Left) */}
            <div className="absolute left-6 top-6 z-20 flex items-center gap-1.5 md:left-8 md:top-8">
              <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
            </div>
            {/* Client Indicator (Bottom Left) */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 md:bottom-8 md:left-8">
              <div className="h-4 w-[3px] bg-[#299EED] rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                {clientName}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRICING PACKAGES — standardized layout */}
      <section className="w-full bg-[#0E2A54] py-20 md:py-28 relative">
        <div className="mx-auto max-w-[1440px] px-5 md:px-4 relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center gap-2.5 mb-4 justify-center">
              <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#299EED] uppercase">Pricing</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Ideal Packages Tailored to
              <br className="hidden md:block" /> Your Business Needs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {serviceData.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 lg:p-10 rounded-[32px] shadow-xl flex flex-col justify-between relative transform transition-transform hover:-translate-y-2 ${pkg.isPopular ? "border-2 border-[#299EED] z-10 md:-mt-4 md:mb-[-1rem]" : "border border-transparent"
                  }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff4a4a] text-white text-[11px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    Popular
                  </span>
                )}
                <div>
                  <div className="inline-block bg-[#F0F7FF] text-[#299EED] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    {pkg.name}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black mb-3 text-[#0D2342]">{pkg.price}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 border-b border-gray-100 pb-6 min-h-[70px]">
                    {pkg.desc}
                  </p>
                  <ul className="space-y-4 text-sm font-medium text-gray-700 mb-10">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-[#EBF3FF] text-[#299EED] flex items-center justify-center font-bold">
                          ✓
                        </div>
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${pkg.isPopular ? "bg-[#299EED] text-white hover:bg-[#1f87cc]" : "bg-[#0E2A54] text-white hover:bg-[#1f3a60]"
                    }`}
                >
                  {pkg.name === "Custom" ? "Chat Admin" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMON CHALLENGES — standardized layout */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-gray-50">
        <div className="mx-auto max-w-[1440px] px-5 md:px-4">
          <div className="text-left md:text-center mb-10 md:mb-16">
            <div className="flex items-center gap-2.5 mb-4 md:justify-center">
              <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Challenges</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-[#0D2342] leading-tight">Addressing Common Challenges</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceData.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="bg-[#0E2A54] text-white p-7 rounded-[20px] shadow-md bg-gradient-to-br from-[#0E2A54] to-[#163a6f] flex items-end min-h-[160px] md:min-h-[180px]"
              >
                <p className="text-sm md:text-base font-medium leading-snug tracking-wide relative z-10">{ch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ESSENTIAL CAPABILITIES — standardized layout */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-4">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Features</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-[#0D2342]">Essential Capabilities</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {serviceData.capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#F0F7FF] flex items-center justify-center text-[#299EED] font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-[#0D2342] text-lg mb-2">{cap.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ — standardized layout */}
      <section className="w-full bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center gap-2.5 mb-4 justify-center">
                <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
                <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Faq</span>
              </div>
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
                    <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#F0F7FF] text-[#299EED] transition-transform duration-300 group-open:rotate-180">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
                    </div>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED WORKS (PORTFOLIO DINAMIS) — standardized layout */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
              <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">Portfolio</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-[#0D2342]">Featured {serviceData.title} Works</h3>
          </div>

          <Portfolio projects={filteredWorks} />
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}