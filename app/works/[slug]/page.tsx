import { notFound } from "next/navigation";
import Image from "next/image";
import Footer from "../../../src/components/Footer";
import Navbar from "../../../src/components/Navbar";
import CTA from "../../../src/components/CTA";
import db from "../../../src/lib/db"; 

interface Feature {
  title: string;
  desc: string;
}

interface ContentJson {
  overview?: string;
  features?: Feature[];
  tech_stack?: string[]; 
}

async function getProjectBySlug(slug: string) {
  const project = db.prepare('SELECT * FROM works WHERE slug = ?').get(slug) as any;
  
  if (!project) return null;

  let content: ContentJson = {};
  if (project.content_json) {
    try {
      content = JSON.parse(project.content_json);
    } catch (e) {
      console.error("Gagal melakukan parse JSON:", e);
    }
  }

  return {
    ...project,
    ...content, 
  };
}

// PERBAIKAN: Tipe params menggunakan Promise dan di-await di dalam komponen
export default async function CaseStudyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-[52px] font-bold text-[#0D2342] leading-[1.1] mb-8 max-w-4xl">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium mb-12">
          <span className="bg-gray-100 px-4 py-1.5 rounded-full text-[#0D2342]">
            Client: {project.client}
          </span>
          <span className="text-gray-300">|</span>
          <span className="bg-gray-100 px-4 py-1.5 rounded-full text-[#0D2342]">
            Service: {project.category}
          </span>
        </div>
        
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl bg-gray-100">
          <Image 
            src={project.image_url} 
            alt={project.title} 
            fill
            className="object-cover" 
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[1fr_0.8fr] gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#2D8CFF] uppercase mb-4">
              Overview
            </h2>
            <h3 className="text-3xl font-bold text-[#0D2342] mb-6 leading-tight">
              Digitalizing Services Through a Custom Platform
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.overview || project.desc}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-blue-50 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100"></div>
            <div className="aspect-square bg-blue-50 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100"></div>
          </div>
        </div>
      </section>

      {project.features && project.features.length > 0 && (
        <section className="bg-[#F7FAFF] py-20 mt-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0D2342] mb-4">
                Accelerating Business Efficiency
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Key features implemented to streamline the workflow and enhance user experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {project.features.map((feat: Feature, index: number) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-[#2D8CFF] font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-[#0D2342] mb-3">{feat.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-10">
            Technology Used
          </h3>
          
          {project.tech_stack && project.tech_stack.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {project.tech_stack.map((tech: string) => (
                <div 
                  key={tech} 
                  className="bg-white px-8 py-4 rounded-full shadow-sm border border-gray-100 font-semibold text-[#0D2342] hover:border-[#2D8CFF] hover:text-[#2D8CFF] transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No specific technology stack listed.</p>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}