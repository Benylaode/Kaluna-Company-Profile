// src/lib/dummy.ts
import db from './db';
// src/lib/dummy.ts

// HAPUS import db from './db'; 

// Tambahkan parameter db: any ke dalam fungsi
export const seedDatabase = (db: any) => {
  console.log('🔄 Memulai proses pengisian data dummy secara Synchronous...');

  const services = [
    { slug: "iot-system-development", title: "IoT System Development", description: "Connected systems for real-time monitoring and automation", image_url: "/image/service/1.png" },
    { slug: "web-application-development", title: "Web & Application Development", description: "Scalable web and mobile platform built for complex operations", image_url: "/image/service/2.png" },
    { slug: "erp-system-integration", title: "ERP & System Integration", description: "Seamless integration across platforms, APIs, and devices", image_url: "/image/service/3.png" },
    { slug: "industrial-automation-solutions", title: "Industrial & Automation Solutions", description: "Smart systems to optimize operational workflows", image_url: "/image/service/4.png" },
    { slug: "data-dashboard-analytics", title: "Data Dashboard & Analytics", description: "Transforming raw data into actionable insights", image_url: "/image/service/5.png" },
    { slug: "it-strategy-consulting", title: "IT Strategy & Consulting", description: "Strategic planning for scalable and future-ready IT infrastructure", image_url: "/image/service/6.png" }
  ];

  const works = [
    { 
      slug: "x-1-tire-company-profile",
      client: "X-1 TIRE",
      title: "Company Profile Revamp for X-1 Tire", 
      desc: "A modern company profile website designed to present X-1 Tire's brand, services, and core initiatives with an integrated product presentation module.",
      category: "Website Development", 
      images: [
        "/image/projects/x-1-tire-company-profile/1.png",
        "/image/projects/x-1-tire-company-profile/2.png",
        "/image/projects/x-1-tire-company-profile/3.png"
      ] 
    },
    { 
      slug: "navicom-smart-home",
      client: "NAVICOM INDONESIA",
      title: "Smart Home System for Navicom", 
      desc: "Smart home system managing 3,800+ devices across 240 units, delivering real-time control of lighting, AC, and safety through tablets and mobile apps.",
      category: "IoT System", 
      images: [
        "/image/projects/navicom-smart-home/1.png",
        "/image/projects/navicom-smart-home/2.png",
        "/image/projects/navicom-smart-home/3.png"
      ] 
    },
    { 
      slug: "sinau-print-pos-system",
      client: "SINAU PRINT",
      title: "POS System for Sinau Print", 
      desc: "Improved transaction efficiency, enabled real-time stock control to prevent overselling, and increased user engagement for Sinau Print, successfully achieving all KPIs.",
      category: "Software Development", 
      images: [
        "/image/projects/sinau-print-pos-system/1.png",
        "/image/projects/sinau-print-pos-system/2.png",
        "/image/projects/sinau-print-pos-system/3.png"
      ],
      content_json: JSON.stringify({
        overview: "Digitalizing printing services through a custom marketplace platform, transforming manual order processing into a seamless digital experience.",
        features: [
            { title: "Online Inventory", desc: "Real-time tracking of paper and ink supplies." },
            { title: "Automated Workflow", desc: "Streamlined order submission and status updates." },
            { title: "User Dashboard", desc: "Intuitive interface for customers and staff." },
            { title: "Payment Integration", desc: "Secure and fast digital payment gateways for seamless transactions." }
        ],
        tech_stack: ["HTML5", "CSS3", "JavaScript", "Next.js", "PostgreSQL", "Git"],
        result: {
          title: "Improving Transaction Efficiency and Customer Engagement",
          desc: "By integrating a custom digital platform, Sinau Print successfully automated their manual workflow, resulting in faster processing times and a much smoother customer experience.",
          points: [
            "Reduced manual order processing time by 40%",
            "Increased overall customer engagement by 25%",
            "Real-time inventory sync eliminated overselling issues"
          ],
          image_url: "/image/projects/sinau-print-pos-system/1.png"
        },
        bottom_image: "/image/projects/sinau-print-pos-system/2.png"
      })
    },
    { 
      slug: "suara-merdeka-refresh",
      client: "SUARA MERDEKA",
      title: "Website Refresh Suara Merdeka", 
      desc: "Modern website refresh to maintain journalism values with an elegant and user-friendly interface.",
      category: "Website Development", 
      images: [
        "/image/projects/suara-merdeka-refresh/1.png",
        "/image/projects/suara-merdeka-refresh/2.png",
        "/image/projects/suara-merdeka-refresh/3.png"
      ] 
    },
    { 
      slug: "korlantas-polri-edrives",
      client: "KORLANTAS POLRI",
      title: "E-Drives for Korlantas Polri", 
      desc: "Backend and IoT integration system for E-Drives to support law enforcement and traffic management.",
      category: "Backend & IoT", 
      images: [
        "/image/projects/korlantas-polri-edrives/1.png",
        "/image/projects/korlantas-polri-edrives/2.png",
        "/image/projects/korlantas-polri-edrives/3.png"
      ] 
    }
  ];

  const testimonials = [
    { client_name: "John Doe", role: "Operations Director", company_name: "ABC Manufacturing", content: "Saya selaku pemilik Sinau Print sangat puas dengan hasil kerja PT. Kaluna Teknologi Digital...", avatar_url: "/image/default-avatar.svg" },
    { client_name: "Anna Karenina", role: "IT Manager", company_name: "Sentul City Mall", content: "Sebagai media berpengalaman, kami membutuhkan website modern...", avatar_url: "/image/default-avatar.svg" },
    { client_name: "Sarah Wijaya", role: "IT Manager", company_name: "Nusantara Logistics", content: "Kami berterima kasih kepada PT. Kaluna Teknologi Digital atas pengembangan website...", avatar_url: "/image/default-avatar.svg" },
    { client_name: "Sarah Wijaya", role: "IT Manager", company_name: "Nusantara Logistics", content: "Website yang dibuat oleh Kaluna meningkatkan citra perusahaan kami...", avatar_url: "/image/default-avatar.png" }
  ];

  const team = [
    { full_name: "Ryan Destianto", position: "CHIEF EXECUTIVE OFFICER", image_url: "/image/team/ryan-destianto.png", linkedin_url: "#" },
    { full_name: "Ayunina Zenti", position: "OPERATIONAL MANAGER", image_url: "/image/team/ayunina-zenti.png", linkedin_url: "#" },
    { full_name: "Ponco Adi Nugroho", position: "ASSISTANT OPERATIONAL MANAGER", image_url: "/image/team/ponco-adi-nugroho.png", linkedin_url: "#" },
    { full_name: "Ahmad Arof Fudin", position: "LEGAL & GENERAL AFFAIRS", image_url: "/image/team/ahmad-arof-fudin.png", linkedin_url: "#" },
    { full_name: "Ilyas Kurnia Ramadhan", position: "LEAD SOFTWARE ENGINEER", image_url: "/image/team/ilyas-kurnia-ramadhan.png", linkedin_url: "#" },
    { full_name: "Intan Nur Fadhilah", position: "FINANCE", image_url: "/image/team/intan-nur-fadhilah.png", linkedin_url: "#" }
  ];

  try {
    const runAllSeeds = db.transaction(() => {
      // 1. Eksekusi Services
      db.prepare("DELETE FROM services").run(); 
      const stmtServices = db.prepare("INSERT INTO services (slug, title, description, image_url) VALUES (?, ?, ?, ?)");
      for (const item of services) stmtServices.run(item.slug, item.title, item.description, item.image_url);

      // 2. Eksekusi Works
      db.prepare("DELETE FROM works").run();
      const stmtWorks = db.prepare(`
        INSERT INTO works (slug, client, title, desc, category, images, content_json) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      for (const item of works) {
        stmtWorks.run(
          item.slug, item.client, item.title, item.desc, item.category, 
          JSON.stringify(item.images), item.content_json || null
        );
      }

      // 3. Eksekusi Testimonials
      db.prepare("DELETE FROM testimonials").run();
      const stmtTestimonials = db.prepare("INSERT INTO testimonials (client_name, role, company_name, content, avatar_url) VALUES (?, ?, ?, ?, ?)");
      for (const item of testimonials) stmtTestimonials.run(item.client_name, item.role, item.company_name, item.content, item.avatar_url);

      // 4. Eksekusi Team
      db.prepare("DELETE FROM team_members").run(); 
      const stmtTeam = db.prepare("INSERT INTO team_members (full_name, position, image_url, linkedin_url) VALUES (?, ?, ?, ?)");
      for (const m of team) stmtTeam.run(m.full_name, m.position, m.image_url, m.linkedin_url);
    });

    runAllSeeds();
    console.log('✅ Data dummy berhasil di-reset dan dimasukkan ke SQLite secara atomik!');
  } catch (error) {
    console.error('❌ Terjadi kesalahan saat mengisi data:', error);
  }
};