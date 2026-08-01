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