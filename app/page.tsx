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

import { getWorks, getTestimonials, getServices } from '../src/lib/actions';

export default async function Home() {
  const worksData = await getWorks();
  const testimonialsData = await getTestimonials();
  const servicesData = await getServices();

  return (
    <main className="min-h-screen bg-[#FAFAFA] scroll-smooth overflow-x-hidden">
      <HashScroll />
      <Navbar />
      
      {/* Wrapper diubah: Menghilangkan gap agar jarak murni dari padding (py) masing-masing komponen */}
      <div className="flex flex-col w-full">
        <Hero />
        <ProjectCarousel projects={worksData} />
        <OurServices services={servicesData} />
        <WhyKaluna />
        <OurWorks />
        <Clients />
        <Deliver testimonials={testimonialsData} />
        <CTA />
      </div>

      <Footer />
      
      {/* Floating WA Button */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 group"
      >
        <img 
          src="/Frame WA.png" 
          alt="WhatsApp" 
          className="w-14 h-14 md:w-16 md:h-16 drop-shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300" 
        />
      </a>
    </main>
  );
}