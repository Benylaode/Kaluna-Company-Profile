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
    role: "Project Leader – Digital Media & Web Systems",
    company_name: "Top Toy",
    content:
      "Kaluna Technology supported the implementation of our digital marketing display portal and interactive web system for Top Toy’s brand expansion. Their engineering and delivery were outstanding.",
    avatar_url: "/image/mitra/persone/Simon Agung Hoedoyo.webp",
    logo_url: "/image/mitra/16.webp",
  },
  {
    client_name: "Ishaq Nfarara",
    role: "Building Operations Manager",
    company_name: "Queen City Mall",
    content:
      "Kaluna Technology helped us develop a modern web management system for our facility operations. The platform is responsive, intuitive, and perfectly suited to our daily commercial workflows.",
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
    title: "Brand & Corporate Website Engineering for X-Tire",
    desc: "A high-performance corporate web platform engineered to elevate market presence, showcase premium tire product lines, and drive qualified B2B customer inquiries globally.",
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
        title: "Elevating Global Brand Authority Through Modern Web Engineering",
        description: "X-Tire required a enterprise-grade corporate platform to modernize its legacy digital footprint, present detailed tire technical specifications, and capture B2B wholesale inquiries. Kaluna engineered a lightning-fast, custom corporate website built on Next.js, featuring interactive product filtering, localized multi-region support, and seamless lead routing to executive sales teams.",
        gallery: [
          "/image/projects/X-Tire/2.webp",
          "/image/projects/X-Tire/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Overcoming Legacy Infrastructure & Unstructured Product Catalogs",
        items: [
          { icon: "responsive", title: "Outdated Web Architecture", desc: "Legacy monolithic CMS suffered from 4.2s page load times and broken layouts across mobile devices." },
          { icon: "conversion", title: "Frictionful Lead Routing", desc: "Wholesale buyer inquiries were lost due to unvalidated static contact forms lacking CRM integration." },
          { icon: "brand", title: "Fragmented Product Specifications", desc: "Technical tire metrics, rim sizes, and tread patterns lacked structured filtering and search capabilities." },
          { icon: "analytics", title: "Zero Visitor Analytics Visibility", desc: "Marketing leadership had no empirical telemetry tracking visitor engagement or conversion drop-offs." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna delivered a custom high-performance web platform with real-time product specification search and automated lead dispatch.",
        background_image: "/image/projects/X-Tire/1.webp",
        items: [
          { title: "Next.js Static Generation & Edge CDN", desc: "Delivered sub-second page rendering across global geographic regions with automated WebP image optimization.", image_url: "/image/projects/X-Tire/1.webp" },
          { title: "Interactive Technical Catalog Filtering", desc: "Custom faceted search engine enabling wholesale buyers to instantly filter products by rim size, tread type, and application.", image_url: "/image/projects/X-Tire/2.webp" },
          { title: "Automated B2B Lead Conversion Engine", desc: "Optimized multi-step inquiry workflows integrated directly with client sales dashboards and email alerts.", image_url: "/image/projects/X-Tire/3.webp" },
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
        title: "Engineering X-Tire's Digital Brand Platform",
        items: [
          { step: "01", title: "Brand & Architecture Strategy", desc: "Mapped buyer personas, technical product taxonomies, and high-converting inquiry pathways.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "Corporate UI/UX Design System", desc: "Designed premium dark-mode corporate component design system with responsive typography.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Full Stack Engineering", desc: "Coded modular React components with TypeScript type-safety and server-side optimization.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Performance Audit & Deployment", desc: "Achieved 98+ Lighthouse performance score, automated XML sitemaps, and live production launch.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "Measurable Growth in International Wholesale Inquiries and Market Authority",
        description: "The new X-Tire digital platform established an authoritative global market presence, significantly increasing qualified B2B lead conversion while delivering near-instant page load performance.",
        highlights: [
          { title: "+140% B2B Lead Inquiries", desc: "Streamlined inquiry flows increased wholesale customer conversion rates dramatically." },
          { title: "< 0.8s Global Page Load", desc: "Edge CDN caching delivered blazing fast responsiveness on mobile and desktop." },
          { title: "99.9% Core Web Vitals Score", desc: "Flawless technical SEO ranking indicators driving organic search visibility." },
        ],
        image_url: "/image/projects/X-Tire/1.webp",
      },
      showcase: {
        image_url: "/image/projects/X-Tire/2.webp",
        alt: "X-Tire corporate website interface showcase",
      },
    }),
  },

  // 2. SINAU PRINT — E-Commerce & Retail Platforms
  {
    slug: "sinau-print-platform",
    client: "SINAU PRINT",
    title: "E-Commerce & Retail Printing Platform for Sinau Print",
    desc: "An end-to-end digital storefront designed to streamline custom print orders, automate real-time price estimation, and facilitate seamless retail checkout.",
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
        title: "Digitizing Retail Printing Through an Automated E-Commerce Platform",
        description: "Sinau Print needed to transition from offline order intake to an automated online retail platform. Customers previously faced manual messaging queues to calculate custom print specifications, paper GSM, and volume pricing. Kaluna engineered a bespoke e-commerce platform equipped with an instant price calculator, structured product selection, and streamlined digital checkout.",
        gallery: [
          "/image/projects/sinau-print-erp/2.webp",
          "/image/projects/sinau-print-erp/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Eliminating Manual Order Bottlenecks & Unstructured Specifications",
        items: [
          { icon: "order", title: "Manual Order Intake Overhead", desc: "Customer service staff spent over 4 hours daily calculating print dimensions and pricing via messaging apps." },
          { icon: "inventory", title: "Complex Pricing Matrix", desc: "Dynamic pricing variations based on paper weight, finishing, and quantity caused customer confusion." },
          { icon: "customer", title: "High Cart Abandonment", desc: "Lack of a unified digital cart and automated invoice generation reduced order completion rates." },
          { icon: "workflow", title: "Order Fulfillment Errors", desc: "Unclear file uploads and missing specification details resulted in re-printing overhead." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna engineered an automated e-commerce web platform custom-tailored for retail print services.",
        background_image: "/image/projects/sinau-print-erp/1.webp",
        items: [
          { title: "Real-Time Print Pricing Engine", desc: "Algorithmic calculator instantly computing total costs based on dimensions, paper GSM, and quantity tier.", image_url: "/image/projects/sinau-print-erp/2.webp" },
          { title: "Streamlined Retail Shopping Flow", desc: "Intuitive mobile-first product builder guiding buyers step-by-step from specification to file upload.", image_url: "/image/projects/sinau-print-erp/3.webp" },
          { title: "Integrated Order Management Portal", desc: "Centralized operational dashboard tracking order status from intake to production and shipping.", image_url: "/image/projects/sinau-print-erp/1.webp" },
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
        title: "Building Sinau Print's E-Commerce Ecosystem",
        items: [
          { step: "01", title: "Pricing & Print Logic Discovery", desc: "Analyzed material costs, finishing rules, and multi-tier pricing algorithms.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "Storefront UX/UI Design", desc: "Created a modern visual retail interface focused on clarity and effortless order placement.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "E-Commerce Core Engineering", desc: "Built dynamic reactive state management and REST API endpoints for inventory and checkout.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Payment & Launch Audits", desc: "End-to-end testing of checkout security, payment gateway webhooks, and live deployment.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "3x Acceleration in Order Intake & Expanded Digital Sales Revenue",
        description: "The digital storefront transformed Sinau Print's operational efficiency, automating customer order calculations and driving online retail revenue growth.",
        highlights: [
          { title: "3x Faster Order Placement", desc: "Automated pricing eliminated manual messaging queues for customers." },
          { title: "+85% Online Sales Conversion", desc: "Intuitive product customizer drove higher order completion rates." },
          { title: "Zero Pricing Calculation Errors", desc: "Algorithmic pricing engine ensured 100% billing accuracy." },
        ],
        image_url: "/image/projects/sinau-print-erp/1.webp",
      },
      showcase: {
        image_url: "/image/projects/sinau-print-erp/2.webp",
        alt: "Sinau Print e-commerce storefront interface showcase",
      },
    }),
  },

  // 3. 10 MEDIA — Marketing & Landing Page Hubs
  {
    slug: "10-media-publishing-portal",
    client: "10 MEDIA",
    title: "High-Impact Media & Campaign Hub for 10 Media",
    desc: "A high-performance digital publishing platform and landing page hub engineered to deliver rapid content, capture reader leads, and scale under massive traffic spikes.",
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
        title: "Scaling Digital Media & Campaign Conversions With Edge Rendering",
        description: "10 Media required a modern publishing hub and high-conversion landing page ecosystem capable of serving millions of concurrent readers without latency. Kaluna architected a Server-Side Rendered (SSR) web platform featuring edge caching, clean editorial typography, and high-impact lead capture units designed for maximum ad conversion.",
        gallery: [
          "/image/projects/web-media-profile/2.webp",
          "/image/projects/web-media-profile/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Handling Traffic Spikes & Optimizing Editorial Reader Experience",
        items: [
          { icon: "brand", title: "Traffic Surge Bottlenecks", desc: "Breaking news events caused server crashes on legacy database infrastructure." },
          { icon: "content", title: "Cluttered Reading Layout", desc: "Unoptimized scripts and ad blocks slowed down page rendering and frustrated readers." },
          { icon: "responsive", title: "Mobile Performance Degradation", desc: "Over 75% of mobile traffic suffered from cumulative layout shifts (CLS) and slow image loading." },
          { icon: "conversion", title: "Low Sponsor Lead Conversion", desc: "Campaign landing pages lacked optimized call-to-action placement and fast form validation." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna deployed an edge-cached digital publishing platform with instant article rendering and campaign lead capture hubs.",
        background_image: "/image/projects/web-media-profile/1.webp",
        items: [
          { title: "Next.js SSR & Edge Content Caching", desc: "Server-side rendering paired with CDN distribution ensuring instant loading during viral traffic bursts.", image_url: "/image/projects/web-media-profile/1.webp" },
          { title: "Clean Editorial UI & Typography", desc: "Typography scales optimized for readability, dark mode reading, and zero cumulative layout shift.", image_url: "/image/projects/web-media-profile/2.webp" },
          { title: "High-Conversion Campaign Hubs", desc: "Integrated lead generation modules capturing reader subscriptions and sponsor inquiries.", image_url: "/image/projects/web-media-profile/3.webp" },
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
        title: "Engineering 10 Media's Publishing Ecosystem",
        items: [
          { step: "01", title: "Editorial Workflow Audit", desc: "Mapped publishing pipelines, category structures, and ad revenue placements.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "High-Speed Editorial UI Design", desc: "Created clean visual layouts, article card hierarchies, and distraction-free reader views.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "SSR & Edge Infrastructure", desc: "Coded dynamic routing, automatic webp compression, and Redis caching layers.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Concurrency Testing & Launch", desc: "Simulated 50,000 concurrent reader requests, optimized core web vitals, and launched live.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "10x Traffic Capacity Burst & Unprecedented Reader Engagement",
        description: "10 Media achieved record readership retention, instant article indexing on Google News, and flawless performance during major news events.",
        highlights: [
          { title: "10x Traffic Burst Scalability", desc: "Edge architecture handled over 50k concurrent readers seamlessly." },
          { title: "+65% Increase in Session Duration", desc: "Distraction-free editorial layout kept readers engaged longer." },
          { title: "Top 1% Google News Indexing", desc: "SSR architecture enabled instant article crawling by search engines." },
        ],
        image_url: "/image/projects/web-media-profile/1.webp",
      },
      showcase: {
        image_url: "/image/projects/web-media-profile/2.webp",
        alt: "10 Media publishing portal interface showcase",
      },
    }),
  },

  // 4. ARSALYNK — Member & Client Portals
  {
    slug: "arsalynk-enterprise-platform",
    client: "ARSALYNK",
    title: "Enterprise Member & Client Portal for Arsalynk",
    desc: "A secure role-based client portal engineered to deliver exclusive digital services, streamline partner interactions, and manage enterprise community workflows.",
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
        title: "Architecting a Secure Digital Gateway for Enterprise Clients",
        description: "Arsalynk required a centralized client portal to provide enterprise partners with secure access to confidential project deliverables, service requests, and exclusive member resources. Kaluna engineered a bank-grade role-based portal built on Next.js and PostgreSQL, featuring granular permission control, encrypted document distribution, and real-time client communication channels.",
        gallery: [
          "/image/projects/arsalynk/2.webp",
          "/image/projects/arsalynk/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Protecting Data Confidentiality & Streamlining Partner Communication",
        items: [
          { icon: "brand", title: "Unsecured File Exchange", desc: "Client deliverables were previously shared via unencrypted email attachments lacking access control." },
          { icon: "responsive", title: "Fragmented Service Requests", desc: "Client support tickets were scattered across separate chat and spreadsheet systems." },
          { icon: "conversion", title: "Lack of Member Hierarchy", desc: "Different client tiers required tailored portal dashboards and resource visibility." },
          { icon: "analytics", title: "Compliance & Security Risk", desc: "Enterprise corporate clients required strict audit logs and multi-tenant security isolation." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna engineered a custom enterprise member portal combining state-of-the-art security with intuitive dashboard aesthetics.",
        background_image: "/image/projects/arsalynk/1.webp",
        items: [
          { title: "Granular Role-Based Access Control (RBAC)", desc: "Multi-tenant permission engine isolating client assets by organization and user privilege level.", image_url: "/image/projects/arsalynk/1.webp" },
          { title: "Encrypted Document & Resource Hub", desc: "Secure digital repository delivering project status reports and confidential deliverables instantly.", image_url: "/image/projects/arsalynk/2.webp" },
          { title: "Real-Time Client Service Dashboard", desc: "Unified portal interface for submitting inquiries, tracking milestones, and receiving executive alerts.", image_url: "/image/projects/arsalynk/3.webp" },
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
        title: "Building Arsalynk's Enterprise Client Portal",
        items: [
          { step: "01", title: "Security & RBAC Architecture", desc: "Defined tenant isolation rules, encryption standards, and user access matrix.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "Dashboard UI/UX Prototyping", desc: "Designed sleek dark-themed portal dashboards with clean data hierarchy.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Secure Portal Core Build", desc: "Coded authenticated API routes, JWT token security, and reactive state dashboards.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Penetration Testing & Deployment", desc: "Rigorous vulnerability audits, data leak prevention checks, and live portal launch.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "100% Secure Client Data Isolation & Elevated Partner Trust",
        description: "The Arsalynk client portal established a gold-standard digital gateway, strengthening enterprise client relationships and streamlining service operations.",
        highlights: [
          { title: "100% Encrypted Data Isolation", desc: "Bank-grade tenant security protecting confidential enterprise assets." },
          { title: "4x Faster Support Resolution", desc: "Centralized portal ticketing reduced client request turnaround time." },
          { title: "Zero Un-Authorized Access Incidents", desc: "Flawless audit record across all enterprise client accounts." },
        ],
        image_url: "/image/projects/arsalynk/1.webp",
      },
      showcase: {
        image_url: "/image/projects/arsalynk/2.webp",
        alt: "Arsalynk client portal interface showcase",
      },
    }),
  },

  // 5. ASPOO — Custom Web Applications
  {
    slug: "aspoo-asset-management",
    client: "ASPOO",
    title: "Custom Web Application & Asset Dashboard for Aspoo",
    desc: "An interactive custom web application built to monitor operational equipment, track device maintenance statuses, and render real-time telemetry dashboards.",
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
        title: "Transforming Industrial Operations With Custom Web Applications",
        description: "Aspoo needed a custom web application to consolidate asset management across multiple operational sites. Managing hardware assets via offline spreadsheets created operational blind spots and delayed routine maintenance. Kaluna developed an interactive, data-driven web app featuring real-time telemetry charts, automated maintenance alerts, and centralized asset audit logs.",
        gallery: [
          "/image/projects/aspoo/2.webp",
          "/image/projects/aspoo/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Eliminating Operational Blind Spots & Offline Tracking",
        items: [
          { icon: "monitoring", title: "Manual Offline Spreadsheets", desc: "Asset logs were maintained in disconnected Excel files causing version conflicts." },
          { icon: "device", title: "Lack of Central Visibility", desc: "Operations leaders could not inspect real-time equipment status across regional sites." },
          { icon: "alert", title: "Unpredictable Equipment Downtime", desc: "Maintenance schedules were reactive rather than preventative, increasing repair costs." },
          { icon: "analytics", title: "Inaccessible Compliance Audits", desc: "Retrieving historical asset maintenance records for safety audits took days." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna engineered an interactive web app with dynamic telemetry visualization and automated preventative maintenance alerts.",
        background_image: "/image/projects/aspoo/1.webp",
        items: [
          { title: "Real-Time Telemetry & Status Dashboard", desc: "Interactive UI displaying asset operational health, location, and maintenance readiness.", image_url: "/image/projects/aspoo/1.webp" },
          { title: "Automated Preventative Alert Engine", desc: "System triggers automated notifications before asset service thresholds are exceeded.", image_url: "/image/projects/aspoo/2.webp" },
          { title: "Centralized Digital Audit Log", desc: "Historical asset record tracking every service update, movement, and inspection event.", image_url: "/image/projects/aspoo/3.webp" },
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
        title: "Engineering Aspoo's Asset Management App",
        items: [
          { step: "01", title: "Operational Workflow Mapping", desc: "Cataloged asset taxonomies, lifecycle metrics, and alert threshold rules.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "Data Architecture & UI Wireframes", desc: "Designed reactive dashboard layouts, data tables, and filtering UI components.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Web App Core Development", desc: "Coded dynamic WebSockets for live status updates and fast SQL queries.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Field Testing & Deployment", desc: "Validated live data feeds with site operators and deployed production web app.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "100% Real-Time Asset Visibility & Reduced Operational Downtime",
        description: "The Aspoo web application transformed equipment lifecycle management, providing operational leaders with complete control and preventative maintenance alerts.",
        highlights: [
          { title: "100% Real-Time Asset Visibility", desc: "Unified operational view across all regional equipment sites." },
          { title: "-45% Reduction in Downtime", desc: "Preventative alerts resolved equipment issues before breakdown." },
          { title: "Instant Audit Compliance", desc: "Compliance reports generated in seconds instead of days." },
        ],
        image_url: "/image/projects/aspoo/1.webp",
      },
      showcase: {
        image_url: "/image/projects/aspoo/2.webp",
        alt: "Aspoo asset management application interface showcase",
      },
    }),
  },

  // 6. ARTIC ANALYTICA — Custom Web Applications
  {
    slug: "artic-analytical-science",
    client: "ARTIC ANALYTICA",
    title: "Data-Driven Analytical Science Platform for Artic Analytica",
    desc: "A bespoke web application engineered to compute complex scientific datasets, automate multi-variable research models, and render interactive analytical dashboards.",
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
        title: "Accelerating Scientific Discovery Through High-Performance Web Tools",
        description: "Artic Analytica required an advanced web application to process multi-variable scientific data and render multi-dimensional analytical charts for research teams. Legacy desktop tools were slow and unable to facilitate multi-user collaboration. Kaluna engineered a web application equipped with server-side computation routines, interactive chart visualizers, and standardized export compliance engines.",
        gallery: [
          "/image/projects/artic-complex-web/2.webp",
          "/image/projects/artic-complex-web/3.webp",
        ],
      },
      challenges: {
        label: "The Challenge",
        title: "Processing Massive Scientific Datasets & Multi-Department Isolation",
        items: [
          { icon: "database", title: "Disparate Research Data Logs", desc: "Scientific data files were isolated across local research workstations." },
          { icon: "analytics", title: "Heavy Manual Compilation", desc: "Researchers spent hours manually aggregating raw data into analytical spreadsheets." },
          { icon: "report", title: "Unstandardized Scientific Exports", desc: "Formatting discrepancies between research units delayed peer validation." },
          { icon: "scale", title: "Desktop Application Limits", desc: "Legacy desktop software crashed when rendering datasets exceeding 1,000,000 data points." },
        ],
      },
      solutions: {
        label: "Our Solution",
        title: "Kaluna engineered a cloud-native custom web application with automated scientific computation engines and interactive data visualization.",
        background_image: "/image/projects/artic-complex-web/1.webp",
        items: [
          { title: "High-Speed Analytical Calculation Engine", desc: "Server-side routines computing complex mathematical parameters in milliseconds.", image_url: "/image/projects/artic-complex-web/1.webp" },
          { title: "Multi-Dimensional Interactive Dashboards", desc: "Dynamic Canvas and SVG charting components rendering complex data trends effortlessly.", image_url: "/image/projects/artic-complex-web/2.webp" },
          { title: "Centralized Scientific Knowledge Hub", desc: "Unified web environment enabling multi-unit research collaboration and instant report export.", image_url: "/image/projects/artic-complex-web/3.webp" },
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
        title: "Engineering Artic Analytica's Science App",
        items: [
          { step: "01", title: "Mathematical Model Mapping", desc: "Analyzed formulas, variable dependencies, and research compliance needs.", image_url: "/image/ourworkflow/1.webp" },
          { step: "02", title: "Data Visualization UI Design", desc: "Designed clean dark-mode charting interfaces with precision controls.", image_url: "/image/ourworkflow/2.webp" },
          { step: "03", title: "Core Web App & Algorithm Build", desc: "Coded fast calculation pipelines and responsive dashboard components.", image_url: "/image/ourworkflow/3.webp" },
          { step: "04", title: "Accuracy Verification & Launch", desc: "Cross-verified mathematical outputs against scientific benchmarks and deployed live.", image_url: "/image/ourworkflow/4.webp" },
        ],
      },
      result: {
        label: "Result and Impact",
        title: "10x Faster Scientific Data Processing & Seamless Team Collaboration",
        description: "The Artic Analytica web platform accelerated scientific analysis, enabling research teams to process millions of data points and export compliant reports effortlessly.",
        highlights: [
          { title: "10x Faster Data Processing", desc: "Server-side algorithms reduced calculation time from hours to seconds." },
          { title: "1,000,000+ Data Points Rendered", desc: "Interactive charts rendering massive datasets without browser lag." },
          { title: "100% Standardized Reporting", desc: "One-click export of peer-review compliant analytical documentation." },
        ],
        image_url: "/image/projects/artic-complex-web/1.webp",
      },
      showcase: {
        image_url: "/image/projects/artic-complex-web/2.webp",
        alt: "Artic Analytica web application interface showcase",
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
