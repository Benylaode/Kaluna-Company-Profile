import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

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

        {/* SEO Brand Overview & Navigation: Visually hidden via sr-only so it remains accessible and crawlable by Googlebot without displaying visually on screen */}
        <section
          aria-labelledby="kaluna-brand-overview"
          className="sr-only"
        >
          <div>
            <p>Kaluna Technology</p>
            <h2 id="kaluna-brand-overview">
              Web engineering & digital solutions for modern businesses.
            </h2>
            <p>
              Kaluna Technology membantu perusahaan membangun website perusahaan, platform e-commerce,
              portal pelanggan, dan custom web application yang cepat, terukur, serta siap berkembang.
            </p>
          </div>

          <nav aria-label="Explore Kaluna Technology">
            {[
              ["Services", "/services"],
              ["Our Works", "/works"],
              ["Who We Are", "/who-we-are"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
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