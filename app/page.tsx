import Link from "next/link";
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';
import HashScroll from '../src/components/HashScroll';
import ScrollReveal from '../src/components/ScrollReveal';

import ProjectCarousel from '../src/components/ProjectCarousel';
import OurServices from '../src/components/OurServices';
import WhyKaluna from '../src/components/WhyKaluna';
import OurWorks from '../src/components/OurWorks';
import Clients from '../src/components/Client';
import Deliver from '../src/components/Deliver';
import CTA from '../src/components/CTA';

import { getWorks, getTestimonials } from '../src/lib/actions';

export default async function Home() {
  const worksData = await getWorks();
  const testimonialsData = await getTestimonials();

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <HashScroll />
      <Navbar />
      
      {/* Wrapper diubah: Menghilangkan gap agar jarak murni dari padding (py) masing-masing komponen */}
      <div className="flex flex-col w-full">
        <Hero projects={worksData} />

        <section
          aria-labelledby="kaluna-brand-overview"
          className="border-b border-[#E7EEF7] bg-white"
        >
          <div className="kaluna-container grid gap-7 py-8 md:grid-cols-[1.2fr_1fr] md:items-center md:py-10">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#299EED]">
                Kaluna Technology
              </p>
              <h2
                id="kaluna-brand-overview"
                className="text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#0E2A54] md:text-[30px]"
              >
                Web engineering & digital solutions for modern businesses.
              </h2>
              <p className="mt-3 max-w-[760px] text-[14px] leading-[1.75] text-[#4B5563] md:text-[15px]">
                Kaluna Technology membantu perusahaan membangun website perusahaan, platform e-commerce,
                portal pelanggan, dan custom web application yang cepat, terukur, serta siap berkembang.
              </p>
            </div>

            <nav
              aria-label="Explore Kaluna Technology"
              className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2"
            >
              {[
                ["Services", "/services"],
                ["Our Works", "/works"],
                ["Who We Are", "/who-we-are"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-[#DCE8F6] bg-[#F8FBFF] px-4 py-3 text-[13px] font-medium text-[#0E2A54] transition hover:border-[#299EED] hover:text-[#299EED]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
        
        <div data-nosnippet>
          <ScrollReveal>
            <ProjectCarousel projects={worksData} />
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <OurServices />
        </ScrollReveal>
        
        <WhyKaluna />
        
        <ScrollReveal>
          <OurWorks />
        </ScrollReveal>
        
        <ScrollReveal>
          <Clients />
        </ScrollReveal>
        
        <ScrollReveal>
          <Deliver testimonials={testimonialsData} />
        </ScrollReveal>
        
        <ScrollReveal>
          <CTA />
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
}