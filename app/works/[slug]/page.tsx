import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../src/components/Footer";
import Navbar from "../../../src/components/Navbar";
import CTA from "../../../src/components/CTA";
import db from "../../../src/lib/db"; 
import { getWorks } from "../../../src/lib/actions"; 

// ==========================================
// 1. INTERFACE DATA
// ==========================================
interface Feature {
  title: string;
  desc: string;
}

interface ResultData {
  title: string;
  desc: string;
  points: string[];
  image_url: string;
}

interface ContentJson {
  overview?: string;
  features?: Feature[];
  tech_stack?: string[]; 
  result?: ResultData;
  bottom_image?: string;
}

// ==========================================
// 2. FUNGSI FETCHING DATA
// ==========================================
async function getProjectBySlug(slug: string) {
  const project = db.prepare('SELECT * FROM works WHERE slug = ?').get(slug) as any;
  if (!project) return null;

  let content: ContentJson = {};
  if (project.content_json) {
    try { content = JSON.parse(project.content_json); } catch (e) { console.error("Parse JSON error:", e); }
  }

  let imagesArray: string[] = [];
  if (project.images) {
    try { imagesArray = JSON.parse(project.images); } catch (e) { console.error("Parse Images error:", e); }
  }

  return { ...project, ...content, images: imagesArray };
}

function renderTechIcon(techName: string) {
  const name = techName.toLowerCase();
  if (name.includes("html")) return "🌐";
  if (name.includes("css")) return "🎨";
  if (name.includes("js") || name.includes("javascript")) return "📜";
  if (name.includes("react") || name.includes("next")) return "⚛️";
  if (name.includes("node")) return "🟢";
  if (name.includes("sql") || name.includes("postgre")) return "🗄️";
  return "💻";
}

// ==========================================
// 3. KOMPONEN UTAMA
// ==========================================
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
const techLogos: Record<string, string> = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

  next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",

  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",

  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",

  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",

  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",

  flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",

  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",

  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

  django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",

  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",

  laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",

  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",

  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
};

  if (!project) notFound();

  const allWorks = await getWorks();
  const otherWorks = allWorks.filter((w) => w.slug !== slug).slice(0, 2);

  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* HEADER & HERO */}
      <section className="pt-32 pb-16 px-6 max-w-[1440px] mx-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-[60px] font-bold text-[#0D2342] leading-[1.1] mb-8">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium mb-12">
            <span className="bg-gray-100 px-5 py-2 rounded-full text-[#0D2342] font-semibold">Client: {project.client}</span>
            <span className="text-gray-300">|</span>
            <span className="bg-gray-100 px-5 py-2 rounded-full text-[#0D2342] font-semibold">Service: {project.category}</span>
          </div>
        </div>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-xl bg-gray-100 mt-8">
          {project.images?.[0] && <Image src={project.images[0]} alt={project.title} fill className="object-cover" priority />}
        </div>
      </section>

      {/* OVERVIEW & DETAIL IMAGES */}
      <section className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#2D8CFF] uppercase mb-4">Overview</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0D2342] mb-6 leading-tight">Digitalizing Services Through a Custom Platform</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{project.overview || project.desc}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative shadow-md">
              {project.images?.[1] && <Image src={project.images[1]} alt="Detail 1" fill className="object-cover" />}
            </div>
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative shadow-md mt-8">
              {project.images?.[2] && <Image src={project.images[2]} alt="Detail 2" fill className="object-cover" />}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES (4 Grid) */}
      {project.features && (
        <section className="bg-[#F4F9FF] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2342] mb-16 text-center">Accelerating Business Efficiency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.features.map((feat: Feature, i: number) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50">
                  <div className="w-12 h-12 bg-[#EBF3FF] rounded-xl mb-6 flex items-center justify-center text-[#2D8CFF] font-bold">{i + 1}</div>
                  <h4 className="text-lg font-bold text-[#0D2342] mb-3">{feat.title}</h4>
                  <p className="text-gray-500 text-sm">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOW WE WORK (Inlined, no external component) */}
      <section className="bg-[#051124] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">How We Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-lg">
                <img src={`/image/ourworkflow/${i}.png`} alt={`Step ${i}`} className="w-full h-32 object-cover rounded-lg mb-4" />
                <div className="text-xs font-bold text-[#0D2342]">Step {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* TECHNOLOGY USED */}
<section className="py-24 border-b border-gray-100">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h3 className="text-sm font-bold text-gray-400 uppercase mb-12">
      Technology Used
    </h3>

    <div className="flex flex-wrap justify-center gap-10">
      {project.tech_stack?.map((tech: string) => {
        const key = tech.toLowerCase();

        // Cari logo berdasarkan nama teknologi
        const logoUrl =
          techLogos[key] ||
          Object.entries(techLogos).find(([name]) => key.includes(name))?.[1];

        return (
          <div key={tech} className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 relative flex items-center justify-center">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={tech}
                  fill
                  className="object-contain"
                />
              ) : (
                <span className="text-4xl">
                  {renderTechIcon(tech)}
                </span>
              )}
            </div>

            <span className="text-sm font-bold text-[#0D2342]">
              {tech}
            </span>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* THE RESULT */}
      {project.result && (
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#2D8CFF] uppercase mb-4">The Result</h2>
              <h3 className="text-3xl font-bold text-[#0D2342] mb-6">{project.result.title}</h3>
              <p className="text-lg text-gray-600 mb-8">{project.result.desc}</p>
              <ul className="space-y-4">
                {project.result.points.map((p: string, i: number) => <li key={i} className="flex gap-3"><span>✔</span>{p}</li>)}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
              <Image src={project.result.image_url} alt="Result" fill className="object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* EXPLORE OTHER WORKS */}
      {otherWorks.length > 0 && (
        <section className="bg-[#F4F9FF] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#0D2342] mb-12">Explore Other Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherWorks.map((work) => (
                <Link key={work.id} href={`/ourworks/${work.slug}`}>
                  <div className="group">
                    <div className="relative h-[300px] bg-gray-200 rounded-[28px] overflow-hidden mb-6">
                      <Image src={work.images?.[0] || '/placeholder.jpg'} alt={work.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D2342]">{work.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </main>
  );
}