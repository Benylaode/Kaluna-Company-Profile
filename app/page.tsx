import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Clients from '../src/components/Client';
import WhyKaluna from '../src/components/WhyKaluna';
import OurServices from '../src/components/OurServices';
import OurWorks from '../src/components/OurWorks';
import Deliver from '../src/components/Deliver';
import Footer from '../src/components/Footer';
import ProjectCarousel from '../src/components/ProjectCarousel';
import CTA from '../src/components/CTA';
import HashScroll from '../src/components/HashScroll';
import ScrollReveal from '../src/components/ScrollReveal';

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