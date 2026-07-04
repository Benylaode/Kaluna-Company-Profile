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

// Import fungsi dari database backend
import { getWorks, getTestimonials, getServices } from '../src/lib/actions';

export default async function Home() {
  // Ambil data dari SQLite secara aman di sisi server
  const worksData = await getWorks();
  const testimonialsData = await getTestimonials();
  const servicesData = await getServices();

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <HashScroll />
      
      <Navbar />
      <Hero />
      
      <ProjectCarousel projects={worksData} />
      
      <OurServices services={servicesData} />
      
      <WhyKaluna />
      
      {/* OurWorks MURNI HARDCODE (Tidak pakai props works={...} lagi!) */}
      <OurWorks />
      
      <Clients />
      
      <Deliver testimonials={testimonialsData} />
      
      <CTA />
      <Footer />
      
      {/* Floating WA Button */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50"
      >
        <img 
          src="/Frame WA.png" 
          alt="WhatsApp" 
          className="w-14 h-14 drop-shadow-lg cursor-pointer hover:scale-105 transition-transform" 
        />
      </a>
    </main>
  );
}