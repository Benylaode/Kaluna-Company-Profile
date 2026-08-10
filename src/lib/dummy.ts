// src/lib/dummy.ts
import db from './db';
// src/lib/dummy.ts

// HAPUS import db from './db'; 

export const testimonials = [
  {
    client_name: "Ibnu Sapto Adi",
    role: "General Manager",
    company_name: "PT Bahtera Sapta Permata",
    content:
      "We needed a site that could handle high traffic and complex product catalogs. Kaluna delivered a fast, stable platform that makes selling our products effortless. Their communication was top-tier.",
    avatar_url: "/image/mitra/persone/ibnu saptro.webp",
    logo_url: "/image/mitra/2.webp",
  },
  {
    client_name: "Goenawan Permadi",
    role: "Editor-in-Chief",
    company_name: "Suara Merdeka Network",
    content:
      "Kaluna Technology helped us develop a professional and informative enterprise company profile website. The development process was well managed, and communication with the team went smoothly.",
    avatar_url: "/image/mitra/persone/gunawan.webp",
    logo_url: "/image/mitra/13.webp",
  },
  {
    client_name: "Simon Agung Hoedoyo",
    role: "Project Leader – IoT & Digital Signage",
    company_name: "Top Toy",
    content:
      "Kaluna Technology supported the implementation of our videotron and digital signage system for Top Toy’s advertising needs. Their team understood the technical requirements and handled the installation process well.",
    avatar_url: "/image/mitra/persone/Simon Agung Hoedoyo.webp",
    logo_url: "/image/mitra/16.webp",
  },
  {
    client_name: "Ishaq Nfarara",
    role: "Building System Manager",
    company_name: "Queen City Mall",
    content:
      "Kaluna Technology helped us develop an IoT-based solution for our building management needs. The solution was practical and well suited to our day-to-day operations.",
    avatar_url: "/image/mitra/persone/Ishaq Nfarara.webp",
    logo_url: "/image/mitra/15.webp",
  },
  {
    client_name: "Anisa Apriani",
    role: "Business Development Manager",
    company_name: "Sinau Print",
    content:
      "Kaluna Technology didn’t just build us a website—they built us a digital headquarters. The design is modern, the backend is intuitive, and our clients constantly compliment the user experience.",
    avatar_url: "/image/mitra/persone/anisa.webp",
    logo_url: "/image/mitra/11.webp",
  },
  {
    client_name: "Sisca Kristina Dewi",
    role: "General Manager",
    company_name: "Mandiri Pribumi",
    content:
      "The company profile website developed by Kaluna Technology met our expectations. It looks professional, and the entire development process went smoothly.",
    avatar_url: "/image/mitra/persone/sisca.webp",
    logo_url: "/image/mitra/18.webp",
  },
  {
    client_name: "Mayakharta Siahaan",
    role: "Marketing Manager",
    company_name: "X1-Tire",
    content:
      "Our old site was clunky and hard to update. Kaluna built a beautiful, customizable web that lets my marketing team launch new campaigns and update content in minutes—not days.",
    avatar_url: "/image/mitra/persone/mayakarta.webp",
    logo_url: "/image/mitra/14.webp",
  },
];

// Tambahkan parameter db: any ke dalam fungsi
export const seedDatabase = (db: any) => {
  console.log('🔄 Memulai proses pengisian data dummy secara Synchronous...');



// ==========================================
// WORKS / PROJECT DATA
// ==========================================

const works = [
  // 1. X-TIRE — Brand & Corporate Websites
  {
    slug: "x-tire-company-profile",
    client: "X-TIRE",
    title: "Brand & Corporate Website for X-Tire",
    desc: "A high-performance corporate website designed to build trust, establish authority, and showcase X-Tire to global customers.",
    category: "Brand & Corporate Websites",
    images: [
      "/image/projects/X-Tire/1.webp",
      "/image/projects/X-Tire/2.webp",
      "/image/projects/X-Tire/3.webp",
    ],
    content_json: JSON.stringify({
      year: "2026",
      overview: {
        label: "Project Overview",
        title: "Elevating Brand Presence Through a Custom Corporate Platform",
        description: "Kaluna designed and built a fast, SEO-optimized corporate website for X-Tire to showcase product lines, establish authority, and streamline customer inquiries.",
        gallery: [
          "/image/projects/X-Tire/2.webp",
          "/image/projects/X-Tire/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Modernizing Corporate Experience & Product Showcase",
        items: [
          { icon: "responsive", title: "Outdated Web Infrastructure", desc: "The legacy site was slow and difficult to update across mobile devices." },
          { icon: "conversion", title: "Low Conversion Rates", desc: "Visitors struggled to find catalog information and contact sales." },
          { icon: "brand", title: "Fragmented Catalog", desc: "Product specs lacked structured presentation and clear search." },
          { icon: "analytics", title: "No Performance Insights", desc: "Marketing lacked analytics integration for tracking visitor engagement." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna delivered a custom corporate website solution with high performance and interactive catalog navigation.",
        background_image: "/image/projects/X-Tire/1.webp",
        items: [
          { title: "Custom Responsive Architecture", desc: "Fast page loads and seamless viewing on mobile and desktop.", image_url: "/image/projects/X-Tire/1.webp" },
          { title: "Interactive Product Showcase", desc: "Structured searching and filtering for product specifications.", image_url: "/image/projects/X-Tire/2.webp" },
          { title: "Lead Generation Flows", desc: "Optimized call-to-action forms connecting visitors directly to sales.", image_url: "/image/projects/X-Tire/3.webp" },
        ],
      },
      tech_stack: [
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Git", icon: "git" },
      ],
      workflow: {
        label: "Our Development Process",
        title: "How We Built X-Tire's Corporate Website",
        items: [
          { step: "01", title: "Discovery & Strategy", desc: "Mapping target audience, product catalog hierarchy, and branding goals.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "UX/UI Design", desc: "Crafting modern wireframes and high-fidelity visual design prototypes.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Full Stack Development", desc: "Building fast frontend components and integrating content management.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Launch & SEO Optimization", desc: "Rigorous performance audits, SEO tuning, and deployment.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "Higher Conversion Rates and Enhanced Brand Reputation",
        description: "The new platform boosted online customer inquiries and provided X-Tire with an intuitive, scalable web presence.",
        highlights: [
          { title: "+140% Lead Inquiries", desc: "Simplified contact paths generated more customer leads." },
          { title: "< 1s Load Speed", desc: "Optimized assets delivered near-instant page transitions." },
          { title: "Mobile First Design", desc: "Flawless UX across all smartphones and tablet devices." },
        ],
        image_url: "/image/projects/X-Tire/1.webp",
      },
      showcase: {
        image_url: "/image/projects/X-Tire/2.webp",
        alt: "X-Tire corporate website interface",
      },
    }),
  },

  // 2. SINAU PRINT — E-Commerce & Retail Platforms
  {
    slug: "sinau-print-platform",
    client: "SINAU PRINT",
    title: "E-Commerce & Retail Platform for Sinau Print",
    desc: "An intuitive e-commerce platform designed to drive sales with custom printing product catalogs, automated pricing, and smooth checkouts.",
    category: "E-Commerce & Retail Platforms",
    images: [
      "/image/projects/sinau-print-erp/1.webp",
      "/image/projects/sinau-print-erp/2.webp",
      "/image/projects/sinau-print-erp/3.webp",
    ],
    content_json: JSON.stringify({
      year: "2025",
      overview: {
        label: "About the Project",
        title: "Digitizing Retail & E-Commerce Through a Scalable Platform",
        description: "Sinau Print needed an e-commerce platform capable of presenting custom printing products, facilitating customer orders, and driving online retail sales.",
        gallery: [
          "/image/projects/sinau-print-erp/2.webp",
          "/image/projects/sinau-print-erp/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Streamlining Online Ordering & Product Customization",
        items: [
          { icon: "order", title: "Manual Order Processing", desc: "Customer orders were taken via fragmented messaging channels." },
          { icon: "inventory", title: "Unclear Product Specs", desc: "Customers needed standard specification options before ordering." },
          { icon: "customer", title: "Unstructured Checkout", desc: "Lack of a streamlined shopping cart and automated invoice generation." },
          { icon: "workflow", title: "Inefficient Communication", desc: "Staff spent extra time clarifying print requirements with buyers." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna engineered an end-to-end e-commerce and retail platform customized for printing services.",
        background_image: "/image/projects/sinau-print-erp/1.webp",
        items: [
          { title: "User-Centered E-Commerce Interface", desc: "An intuitive web layout for browsing products and selecting print specs.", image_url: "/image/projects/sinau-print-erp/2.webp" },
          { title: "Automated Price Estimator", desc: "Real-time cost calculations based on dimensions and paper stock.", image_url: "/image/projects/sinau-print-erp/3.webp" },
          { title: "Smooth Checkout Flow", desc: "Centralized panel for tracking customer orders from checkout to fulfillment.", image_url: "/image/projects/sinau-print-erp/1.webp" },
        ],
      },
      tech_stack: [
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Node.js", icon: "nodejs" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Git", icon: "git" },
      ],
      workflow: {
        label: "Our Development Process",
        title: "How We Developed Sinau Print's E-Commerce Platform",
        items: [
          { step: "01", title: "Requirement Mapping", desc: "Analyzing printing products, pricing logic, and user checkout flows.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "Architecture & Wireframes", desc: "Designing clean user interfaces and database relationships.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Platform Development", desc: "Coding custom e-commerce features and automated pricing engines.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Deployment & Training", desc: "Testing payment flows and deploying the live platform.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "Faster Order Processing & Modernized Retail Storefront",
        description: "The new digital storefront helped Sinau Print capture more online sales while simplifying order intake.",
        highlights: [
          { title: "3x Faster Checkout", desc: "Digital ordering reduced manual intake overhead." },
          { title: "Centralized Dashboard", desc: "All incoming orders managed in one structured portal." },
          { title: "Scalable Architecture", desc: "Easily supports new product lines and expansion." },
        ],
        image_url: "/image/projects/sinau-print-erp/1.webp",
      },
      showcase: {
        image_url: "/image/projects/sinau-print-erp/2.webp",
        alt: "Sinau Print e-commerce portal interface",
      },
    }),
  },

  // 3. 10 MEDIA — Marketing & Landing Page Hubs
  {
    slug: "10-media-publishing-portal",
    client: "10 MEDIA",
    title: "High-Impact Media & Landing Page Hub for 10 Media",
    desc: "A high-performance digital publishing and campaign hub engineered to capture reader leads and convert high-volume visitors.",
    category: "Marketing & Landing Page Hubs",
    images: [
      "/image/projects/web-media-profile/1.webp",
      "/image/projects/web-media-profile/2.webp",
      "/image/projects/web-media-profile/3.webp",
    ],
    content_json: JSON.stringify({
      year: "2025",
      overview: {
        label: "Project Overview",
        title: "Empowering Digital Journalism With High-Impact Landing Hubs",
        description: "Kaluna engineered a modern campaign and media hub for 10 Media, enabling rapid article delivery, high lead conversion, and clean reader experiences.",
        gallery: [
          "/image/projects/web-media-profile/2.webp",
          "/image/projects/web-media-profile/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Handling High Traffic Spikes & Campaign Conversions",
        items: [
          { icon: "brand", title: "High Traffic Spikes", desc: "Breaking news events created traffic surges that slowed the old platform." },
          { icon: "content", title: "Cluttered Editorial Layout", desc: "Ads and legacy scripts degraded reader engagement and page load times." },
          { icon: "responsive", title: "Mobile Readability", desc: "Mobile readers needed clean typography and fast image loading." },
          { icon: "conversion", title: "Lead Conversion", desc: "Ad units and campaign pages needed optimized placement." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna deployed a custom landing page and media hub with server-side rendering, CDN caching, and modern UI.",
        background_image: "/image/projects/web-media-profile/1.webp",
        items: [
          { title: "High Speed SSR Architecture", desc: "Server-side rendering for instant page loads and maximum SEO visibility.", image_url: "/image/projects/web-media-profile/1.webp" },
          { title: "Clean Editorial Layout", desc: "Typography optimized for long-form reading on desktop and mobile.", image_url: "/image/projects/web-media-profile/2.webp" },
          { title: "Campaign Lead Capture", desc: "High-impact landing sections capturing visitor interest effortlessly.", image_url: "/image/projects/web-media-profile/3.webp" },
        ],
      },
      tech_stack: [
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Git", icon: "git" },
      ],
      workflow: {
        label: "Our Development Process",
        title: "How We Built 10 Media's Campaign Hub",
        items: [
          { step: "01", title: "Media Workflow Mapping", desc: "Analyzing editorial routines, category structure, and ad placement goals.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "UX/UI Editorial Design", desc: "Designing typography scales, article templates, and dark mode reading.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "SSR & Caching Setup", desc: "Building fast SSR pages and edge caching for high traffic bursts.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Launch & Traffic Audit", desc: "Load testing concurrent traffic and deploying to production.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "Blazing Fast Reading Experience & Higher Lead Conversions",
        description: "10 Media achieved record readership engagement and seamless performance during breaking news events.",
        highlights: [
          { title: "10x Traffic Capacity", desc: "Edge caching handled peak breaking news surges easily." },
          { title: "+65% Time on Page", desc: "Clean editorial layout kept readers engaged longer." },
          { title: "Top SEO Rankings", desc: "SSR architecture boosted article indexing speed." },
        ],
        image_url: "/image/projects/web-media-profile/1.webp",
      },
      showcase: {
        image_url: "/image/projects/web-media-profile/2.webp",
        alt: "10 Media publishing portal interface",
      },
    }),
  },

  // 4. ARSALYNK — Member & Client Portals
  {
    slug: "arsalynk-enterprise-platform",
    client: "ARSALYNK",
    title: "Enterprise Member & Client Portal for Arsalynk",
    desc: "A secure client portal delivering exclusive services, managing partner interactions, and engaging business communities.",
    category: "Member & Client Portals",
    images: [
      "/image/projects/arsalynk/1.webp",
      "/image/projects/arsalynk/2.webp",
      "/image/projects/arsalynk/3.webp",
    ],
    content_json: JSON.stringify({
      year: "2026",
      overview: {
        label: "Project Overview",
        title: "Building an Integrated Member & Client Portal for Arsalynk",
        description: "Kaluna engineered a state-of-the-art client portal for Arsalynk, enabling secure partner access, content distribution, and service management.",
        gallery: [
          "/image/projects/arsalynk/2.webp",
          "/image/projects/arsalynk/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Delivering Exclusive Content & Client Workflows",
        items: [
          { icon: "brand", title: "Secure Access", desc: "Arsalynk needed role-based access control for enterprise clients." },
          { icon: "responsive", title: "Service Management", desc: "Multiple service offerings needed clear, structured portal navigation." },
          { icon: "conversion", title: "Client Interaction", desc: "Streamlining client inquiries and service request workflows." },
          { icon: "analytics", title: "Security & Speed", desc: "Ensuring top-tier security standards and instant data retrieval." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna built a custom member portal solution with modern UI aesthetics and robust access control architecture.",
        background_image: "/image/projects/arsalynk/1.webp",
        items: [
          { title: "Role-Based Member Access", desc: "Granular permissions for clients, partners, and administrators.", image_url: "/image/projects/arsalynk/1.webp" },
          { title: "Service & Resource Hub", desc: "Exclusive content repository and project status tracking.", image_url: "/image/projects/arsalynk/2.webp" },
          { title: "Secure Portal Dashboard", desc: "Direct, secure messaging and request management for clients.", image_url: "/image/projects/arsalynk/3.webp" },
        ],
      },
      tech_stack: [
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Node.js", icon: "nodejs" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Git", icon: "git" },
      ],
      workflow: {
        label: "Our Development Process",
        title: "How We Built Arsalynk's Client Portal",
        items: [
          { step: "01", title: "Portal Architecture", desc: "Mapping user roles, security standards, and client journeys.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "High-Fidelity UI", desc: "Designing premium UI components for client dashboards.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Full Stack Build", desc: "Coding fast Next.js frontend and secure authentication endpoints.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Optimization & Audit", desc: "Security penetration testing, speed tuning, and go-live.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "Seamless Partner Engagement & Streamlined Client Services",
        description: "The new Arsalynk client portal established a secure digital gateway, driving partner engagement and client satisfaction.",
        highlights: [
          { title: "100% Secure Access", desc: "Multi-factor role-based access for all enterprise partners." },
          { title: "Fast Performance", desc: "Sub-second response times across portal dashboards." },
          { title: "Scalable Architecture", desc: "Built to support thousands of active members seamlessly." },
        ],
        image_url: "/image/projects/arsalynk/1.webp",
      },
      showcase: {
        image_url: "/image/projects/arsalynk/2.webp",
        alt: "Arsalynk client portal interface",
      },
    }),
  },

  // 5. ASPOO — Custom Web Applications
  {
    slug: "aspoo-asset-management",
    client: "ASPOO",
    title: "Custom Web Application & Asset Dashboard for Aspoo",
    desc: "An interactive web application built to monitor operational assets, device statuses, and data-driven workflows in real time.",
    category: "Custom Web Applications",
    images: [
      "/image/projects/aspoo/1.webp",
      "/image/projects/aspoo/2.webp",
      "/image/projects/aspoo/3.webp",
    ],
    content_json: JSON.stringify({
      year: "2026",
      overview: {
        label: "Project Overview",
        title: "Digitizing Operational Workflows With Custom Web Apps",
        description: "Kaluna developed a custom web application enabling Aspoo to monitor equipment assets and operational activity from a centralized data-driven dashboard.",
        gallery: [
          "/image/projects/aspoo/2.webp",
          "/image/projects/aspoo/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Addressing Fragmented Asset Tracking & Visibility",
        items: [
          { icon: "monitoring", title: "Manual Logs", desc: "Asset conditions and usage logs were recorded across offline spreadsheets." },
          { icon: "device", title: "Lack of Central Visibility", desc: "Management lacked a unified view of operational hardware." },
          { icon: "alert", title: "Maintenance Delays", desc: "Issues were reported late due to decentralized tracking." },
          { icon: "analytics", title: "Data Isolation", desc: "Historical asset data was not easily accessible for audits." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna designed an interactive custom web application for real-time asset tracking and data visualization.",
        background_image: "/image/projects/aspoo/1.webp",
        items: [
          { title: "Real-Time Status Dashboard", desc: "Live overview of asset usage, status, and health indicators.", image_url: "/image/projects/aspoo/1.webp" },
          { title: "Automated Maintenance Alerts", desc: "Notifications triggered when assets require routine service.", image_url: "/image/projects/aspoo/2.webp" },
          { title: "Centralized Audit Trail", desc: "Complete historical log of asset movements and updates.", image_url: "/image/projects/aspoo/3.webp" },
        ],
      },
      tech_stack: [
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Git", icon: "git" },
      ],
      workflow: {
        label: "Our Development Process",
        title: "How We Built Aspoo's Custom Web Application",
        items: [
          { step: "01", title: "Asset Workflow Mapping", desc: "Identifying asset categories, statuses, and reporting needs.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "System Architecture", desc: "Designing secure database schemas and user role access.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Full Stack Development", desc: "Building responsive dashboards, tables, and search tools.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Testing & Go-Live", desc: "Conducting user acceptance testing and production launch.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "Improved Operational Control and Data-Driven Insights",
        description: "The web application provided Aspoo with complete visibility over operational assets, reducing downtime and administrative effort.",
        highlights: [
          { title: "100% Asset Visibility", desc: "All equipment cataloged and tracked in one system." },
          { title: "Faster Maintenance", desc: "Automated alerts sped up issue resolution times." },
          { title: "Auditable Logs", desc: "Complete historical record available on demand." },
        ],
        image_url: "/image/projects/aspoo/1.webp",
      },
      showcase: {
        image_url: "/image/projects/aspoo/2.webp",
        alt: "Aspoo asset management dashboard interface",
      },
    }),
  },

  // 6. ARTIC ANALYTICA — Custom Web Applications
  {
    slug: "artic-analytical-science",
    client: "ARTIC ANALYTICA",
    title: "Data-Driven Analytical Science Platform for Artic Analytica",
    desc: "A custom web application engineered to process complex datasets, render interactive dashboards, and automate research parameters.",
    category: "Custom Web Applications",
    images: [
      "/image/projects/artic-complex-web/1.webp",
      "/image/projects/artic-complex-web/2.webp",
      "/image/projects/artic-complex-web/3.webp",
    ],
    content_json: JSON.stringify({
      year: "2026",
      overview: {
        label: "Project Overview",
        title: "Building Interactive Data Tools for Analytical Science",
        description: "Artic Analytica required a high-performance custom web application capable of processing complex data models and rendering interactive scientific dashboards.",
        gallery: [
          "/image/projects/artic-complex-web/2.webp",
          "/image/projects/artic-complex-web/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Complex Scientific Calculations & Fragmented Datasets",
        items: [
          { icon: "database", title: "Disparate Research Data", desc: "Scientific logs were stored in separate files across research departments." },
          { icon: "analytics", title: "Manual Calculations", desc: "Heavy mathematical models required manual compilation." },
          { icon: "report", title: "Unstandardized Outputs", desc: "Reporting formats varied between different research units." },
          { icon: "scale", title: "Performance Constraints", desc: "Legacy desktop scripts struggled with multi-user access." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna engineered a modern custom web application with automated analytical routines and interactive data visualization.",
        background_image: "/image/projects/artic-complex-web/1.webp",
        items: [
          { title: "Automated Data Engines", desc: "High-speed backend algorithms for processing analytical parameters.", image_url: "/image/projects/artic-complex-web/1.webp" },
          { title: "Interactive Dashboards", desc: "Dynamic charts and graphs rendering multi-dimensional datasets.", image_url: "/image/projects/artic-complex-web/2.webp" },
          { title: "Centralized Science Hub", desc: "A unified platform connecting multi-branch research teams.", image_url: "/image/projects/artic-complex-web/3.webp" },
        ],
      },
      tech_stack: [
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Git", icon: "git" },
      ],
      workflow: {
        label: "Our Development Process",
        title: "How We Built Artic Analytica's Custom Web App",
        items: [
          { step: "01", title: "Scientific Discovery", desc: "Analyzing data structures, computational logic, and research workflows.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "UI & Architecture", desc: "Designing clean web layouts and data pipelines for scientific models.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Full Stack Build", desc: "Developing analytical components and interactive visualizers.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Testing & Deployment", desc: "Validating computational accuracy and deploying to production.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "Accelerating Research Collaboration & Data Precision",
        description: "The new web application enabled faster data processing, standardized reporting, and effortless team collaboration.",
        highlights: [
          { title: "High Speed Computations", desc: "Automated algorithms drastically reduced processing duration." },
          { title: "Unified Platform", desc: "All research data securely accessible in one web hub." },
          { title: "Standardized Reports", desc: "Export compliance-ready reports with one click." },
        ],
        image_url: "/image/projects/artic-complex-web/1.webp",
      },
      showcase: {
        image_url: "/image/projects/artic-complex-web/2.webp",
        alt: "Artic Analytica web application interface",
      },
    }),
  },
];

  const team = [
    { full_name: "Laode Hidayat", position: "FULL STACK DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Ilyas Kurnia", position: "FULL STACK DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Irfan Zidni", position: "FRONT END DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "M. Afifudin", position: "BACK END DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Jundy Isham", position: "UI UX DESIGNER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Teguh Bhagaskara", position: "UI UX DESIGNER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Ahmad Arof", position: "PROJECT MANAGER", image_url: "/image/default-avatar.svg", linkedin_url: "#" }
  ];

  try {
    const runAllSeeds = db.transaction(() => {
      // 1. Eksekusi Works
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
      const stmtTestimonials = db.prepare("INSERT INTO testimonials (client_name, role, company_name, content, avatar_url, logo_url) VALUES (?, ?, ?, ?, ?, ?)");
      for (const item of testimonials) stmtTestimonials.run(item.client_name, item.role, item.company_name, item.content, item.avatar_url, item.logo_url);

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
