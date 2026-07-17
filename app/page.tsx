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

import { getWorks, getTestimonials, getServices } from '../src/lib/actions';

export default async function Home() {
  const worksData = await getWorks();
  const testimonialsData = await getTestimonials();
  const servicesData = await getServices();

  return (
    <main className="min-h-screen bg-[#FFFFFF] scroll-smooth overflow-x-hidden">
      <HashScroll />
      <Navbar />
      
      {/* Wrapper diubah: Menghilangkan gap agar jarak murni dari padding (py) masing-masing komponen */}
      <div className="flex flex-col w-full">
        <Hero />
        
        <ScrollReveal duration={1000} direction="up" distance={40}>
          <ProjectCarousel projects={worksData} />
        </ScrollReveal>
        
        <ScrollReveal duration={1000} direction="up" distance={40}>
          <OurServices services={servicesData} />
        </ScrollReveal>
        
        <WhyKaluna />
        
        <ScrollReveal duration={1000} direction="up" distance={40}>
          <OurWorks />
        </ScrollReveal>
        
        <ScrollReveal duration={1000} direction="up" distance={40}>
          <Clients />
        </ScrollReveal>
        
        <ScrollReveal duration={1000} direction="up" distance={40}>
          <Deliver testimonials={testimonialsData} />
        </ScrollReveal>
        
        <ScrollReveal duration={1000} direction="up" distance={40}>
          <CTA />
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
}