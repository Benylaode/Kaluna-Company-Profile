// src/lib/dummy.ts
import db from './db';

const seedDatabase = () => {
  console.log('🔄 Memulai proses pengisian data dummy...');

  // ==========================================
  // 1. DATA LAYANAN (SERVICES)
  // ==========================================
  const services = [
    { 
      slug: "system-development", 
      title: "System Development", 
      description: "Building High-Performance Websites with Exceptional User Experience for modern enterprises.", 
      image_url: "/section/service1.jpg" 
    },
    { 
      slug: "erp-system-integration", 
      title: "ERP & System Integration", 
      description: "Seamlessly connect your business processes with custom ERP solutions to drive operational efficiency.", 
      image_url: "/section/service2.jpg" 
    },
    { 
      slug: "industrial-automation", 
      title: "Industrial and Automation Solutions", 
      description: "Automate your industrial workflow for better efficiency, accuracy, and long-term growth.", 
      image_url: "/section/service3.jpg" 
    },
    { 
      slug: "data-dashboard-analytics", 
      title: "Data Dashboard & Analytics", 
      description: "Turn your raw data into actionable insights with our interactive dashboard visualization.", 
      image_url: "/section/service4.jpg" 
    }
  ];

  // ==========================================
  // 2. DATA PORTOFOLIO (WORKS)
  // ==========================================
  const works = [
    { 
      slug: "x-1-tire-company-profile",
      client: "X-1 TIRE",
      title: "Company Profile Revamp for X-1 Tire", 
      desc: "A modern company profile website designed to present X-1 Tire's brand, services, and core initiatives with an integrated product presentation module.",
      category: "Website Development", 
      image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800" 
    },
    { 
      slug: "navicom-smart-home",
      client: "NAVICOM INDONESIA",
      title: "Smart Home System for Navicom", 
      desc: "Smart home system managing 3,800+ devices across 240 units, delivering real-time control of lighting, AC, and safety through tablets and mobile apps.",
      category: "IoT System", 
      image_url: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800" 
    },
    { 
      slug: "sinau-print-pos-system",
      client: "SINAU PRINT",
      title: "POS System for Sinau Print", 
      desc: "Improved transaction efficiency, enabled real-time stock control to prevent overselling, and increased user engagement for Sinau Print, successfully achieving all KPIs.",
      category: "Software Development", 
      image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
      content_json: JSON.stringify({
        overview: "Digitalizing printing services through a custom marketplace platform, transforming manual order processing into a seamless digital experience.",
        features: [
            { title: "Online Inventory", desc: "Real-time tracking of paper and ink supplies." },
            { title: "Automated Workflow", desc: "Streamlined order submission and status updates." },
            { title: "User Dashboard", desc: "Intuitive interface for customers and staff." }
        ],
        tech_stack: ["Next.js", "PostgreSQL", "Node.js", "Docker"]
      })
    },
    { 
      slug: "suara-merdeka-refresh",
      client: "SUARA MERDEKA",
      title: "Website Refresh Suara Merdeka", 
      desc: "Modern website refresh to maintain journalism values with an elegant and user-friendly interface.",
      category: "Website Development", 
      image_url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800" 
    },
    { 
      slug: "korlantas-polri-edrives",
      client: "KORLANTAS POLRI",
      title: "E-Drives for Korlantas Polri", 
      desc: "Backend and IoT integration system for E-Drives to support law enforcement and traffic management.",
      category: "Backend & IoT", 
      image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" 
    }
  ];

  // ==========================================
  // 3. DATA TESTIMONI (TESTIMONIALS)
  // ==========================================
  const testimonials = [
    { 
      client_name: "John Doe", 
      role: "Operations Director", 
      company_name: "SINAU PRINT", 
      content: "Saya selaku pemilik Sinau Print sangat puas dengan hasil kerja PT. Kaluna Teknologi Digital. Website yang dibuat memudahkan pelanggan kami melakukan pemesanan online. Proses profesional, komunikasi lancar, dan hasil sesuai harapan. Terima kasih atas kerja samanya.", 
      avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" 
    },
    { 
      client_name: "Anna Karenina", 
      role: "IT Manager", 
      company_name: "SUARA MERDEKA", 
      content: "Sebagai media berpengalaman, kami membutuhkan website modern yang tetap menjaga nilai jurnalisme. PT. Kaluna Teknologi Digital berhasil mewujudkannya dengan baik. Sistem mudah digunakan, tampilannya elegan, dan sangat kami rekomendasikan.", 
      avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80" 
    },
    { 
      client_name: "Budi Santoso", 
      role: "CEO", 
      company_name: "X-1 TIRE", 
      content: "Transformasi digital yang dilakukan oleh Kaluna sangat membantu operasional bisnis kami. Sistem inventori terintegrasi dengan baik dan sangat minim error. Sangat direkomendasikan untuk enterprise.", 
      avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" 
    },
    { 
      client_name: "Siti Aminah", 
      role: "Data Lead", 
      company_name: "NAVICOM", 
      content: "Pengembangan dashboard analitik data kami berjalan sangat lancar. Visualisasi datanya sangat interaktif dan membantu kami mengambil keputusan krusial dengan jauh lebih cepat dan akurat.", 
      avatar_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80" 
    }
  ];

  // ==========================================
  // 4. DATA TIM
  // ==========================================
  const team = [
    { full_name: "Ryan Destianto", position: "CHIEF EXECUTIVE OFFICER", image_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200", linkedin_url: "#" },
    { full_name: "Ayunina Zenti", position: "OPERATIONAL MANAGER", image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200", linkedin_url: "#" },
    { full_name: "Ponco Adi Nugroho", position: "ASSISTANT OPERATIONAL MANAGER", image_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200", linkedin_url: "#" },
    { full_name: "Ahmad Arof Fudin", position: "LEGAL & GENERAL AFFAIRS", image_url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200", linkedin_url: "#" },
  ];

  // ==========================================
  // EKSEKUSI DATABASE (Satu pintu eksekusi agar tidak bentrok)
  // ==========================================
  try {
    const insertServices = db.transaction((data) => {
      db.prepare("DELETE FROM services").run(); 
      const stmt = db.prepare("INSERT INTO services (slug, title, description, image_url) VALUES (?, ?, ?, ?)");
      for (const item of data) stmt.run(item.slug, item.title, item.description, item.image_url);
    });

    const insertWorks = db.transaction((data) => {
      db.prepare("DELETE FROM works").run();
      const stmt = db.prepare(`
        INSERT INTO works (slug, client, title, desc, category, image_url, content_json) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      for (const item of data) {
        stmt.run(
          item.slug,
          item.client, 
          item.title, 
          item.desc, 
          item.category, 
          item.image_url, 
          item.content_json || null
        );
      }
    });

    const insertTestimonials = db.transaction((data) => {
      db.prepare("DELETE FROM testimonials").run();
      const stmt = db.prepare("INSERT INTO testimonials (client_name, role, company_name, content, avatar_url) VALUES (?, ?, ?, ?, ?)");
      for (const item of data) stmt.run(item.client_name, item.role, item.company_name, item.content, item.avatar_url);
    });

    const insertTeam = db.transaction((data) => {
      db.prepare("DELETE FROM team_members").run(); 
      const stmt = db.prepare("INSERT INTO team_members (full_name, position, image_url, linkedin_url) VALUES (?, ?, ?, ?)");
      for (const m of data) stmt.run(m.full_name, m.position, m.image_url, m.linkedin_url);
    });

    // Jalankan semua transaksi secara berurutan
    insertServices(services);
    insertWorks(works);
    insertTestimonials(testimonials);
    insertTeam(team);

    console.log('✅ Data dummy berhasil dimasukkan ke SQLite!');
  } catch (error) {
    console.error('❌ Terjadi kesalahan saat mengisi data:', error);
  }
};

// Panggil fungsi eksekusi utama
seedDatabase();