import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';
import HashScroll from '../src/components/HashScroll';
import ScrollReveal from '../src/components/ScrollReveal';

// Dynamic Code Splitting for WebKit JavaScriptCore JSC optimization (<50KB chunk size)
const ProjectCarousel = dynamic(() => import('../src/components/ProjectCarousel'));
const OurServices = dynamic(() => import('../src/components/OurServices'));
const WhyKaluna = dynamic(() => import('../src/components/WhyKaluna'));
const OurWorks = dynamic(() => import('../src/components/OurWorks'));
const Clients = dynamic(() => import('../src/components/Client'));
const Deliver = dynamic(() => import('../src/components/Deliver'));
const CTA = dynamic(() => import('../src/components/CTA'));

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
        <Hero />
        
        <ScrollReveal>
          <ProjectCarousel projects={worksData} />
        </ScrollReveal>
        
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