// src/lib/dummy.ts
import db from './db';
// src/lib/dummy.ts

// HAPUS import db from './db'; 

export const testimonials = [
  { client_name: "Pak Hari", role: "Owner", company_name: "Sinau Print", content: "Sebagai pemilik Sinau Print, saya sangat puas dengan hasil kerja Kaluna dalam mendigitalisasi sistem kasir dan print order kami. Manajemen transaksi harian kini berjalan jauh lebih efisien, rapi, dan cepat.", avatar_url: "/image/default-avatar.svg", logo_url: "/image/mitra/12.webp" },
  { client_name: "Pak Asrofi", role: "Ketua Pengurus", company_name: "ASPOO Jateng", content: "Kaluna membangun portal database keanggotaan dan forum komunikasi untuk pengusaha sablon ASPOO Jateng. Koordinasi antar daerah kini jauh lebih terstruktur dan pendaftaran anggota baru dapat terverifikasi secara instan.", avatar_url: "/image/default-avatar.svg", logo_url: "/image/mitra/17.webp" },
  { client_name: "Ko Simon", role: "Founder", company_name: "Aliansea", content: "Sistem e-commerce retail mainan yang didevelop oleh Kaluna membantu bisnis kami menjangkau pasar nasional secara digital. Sinkronisasi stok produk fisik dengan toko online berjalan real-time dan bebas kendala.", avatar_url: "/image/default-avatar.svg", logo_url: "/image/mitra/16.webp" },
  { client_name: "Pak Ishaq", role: "Property Manager", company_name: "Semarang Center", content: "Integrasi sistem penagihan tenant dan manajemen utilitas gedung mall di Semarang Center berjalan sukses berkat ERP kustom dari Kaluna. Semua data operasional mall kini terpusat dan mudah diakses tim manajemen.", avatar_url: "/image/default-avatar.svg", logo_url: "/image/mitra/15.webp" },
  { client_name: "Pak Todi", role: "General Manager", company_name: "PT. BSP", content: "Otomasi sistem logistik dan pemantauan sensor pabrik (IoT) dari Kaluna membantu meningkatkan output produksi kami. Tim engineer Kaluna sangat ahli, solutif, dan profesional dalam mendampingi instalasi di lapangan.", avatar_url: "/image/default-avatar.svg", logo_url: "/image/mitra/2.webp" },
  { client_name: "Maya Kharta", role: "Marketing Director", company_name: "X-1 Tire", content: "Revitalisasi company profile website X-1 Tire oleh Kaluna sukses mendatangkan prospek B2B baru dari luar kota. Desain visualnya modern, performa load speed sangat kencang, dan sangat mobile-friendly.", avatar_url: "/image/default-avatar.svg", logo_url: "/image/mitra/14.webp" },
  { client_name: "Pak Hermawan", role: "Head of IT", company_name: "Suara Merdeka", content: "Kami mempercayakan refresh total website portal media harian Suara Merdeka kepada tim Kaluna. Hasilnya adalah portal berita yang sangat responsif, andal dalam menangani traffic tinggi, dan nyaman dibaca dari smartphone.", avatar_url: "/image/default-avatar.svg", logo_url: "/image/mitra/13.webp" }
];

// Tambahkan parameter db: any ke dalam fungsi
export const seedDatabase = (db: any) => {
  console.log('🔄 Memulai proses pengisian data dummy secara Synchronous...');

  const services = [
    {
      slug: "web-application-development",
      title: "Web & Application Development",
      description: "Scalable web and mobile platform built for complex operations",
      image_url: "/image/service/2.webp",
      content_json: JSON.stringify({
        heroDesc: "Building High-Performance Websites & Apps with Exceptional User Experience",
        heroSub: "We build fast, secure, and fully responsive websites and web applications tailored to your specific business operations, enabling smooth customer acquisition and brand representation.",
        packages: [
          { name: "Basic", price: "Rp 3.000.000", desc: "Suitable for landing pages and simple business identity profiles.", features: ["1 Page Website Design", "Responsive Layout (Mobile Ready)", "Domain & Hosting 1 Year", "Basic SEO Setup", "Standard Security"], isPopular: false },
          { name: "Business", price: "Rp 7.000.000", desc: "Best for growing companies requiring detailed services and showcase.", features: ["Up to 5 Pages Website", "CMS Panel (WordPress/Custom)", "Advanced SEO Optimization", "Speed Performance Tuning", "1 Month Free Maintenance"], isPopular: true },
          { name: "Custom", price: "Chat Admin", desc: "For complex web architectures, SaaS platforms, or custom web systems.", features: ["Tailored Web Architecture", "Custom Backend & API", "Advanced Database System", "High-level Security Setup", "Scalable Cloud Server"], isPopular: false },
        ],
        challenges: [
          "Outdated website design that ruins brand reputation",
          "Poor load performance causing high user bounce rate",
          "Hard-to-manage backends that waste time",
          "Inability to scale software infrastructure as you grow"
        ],
        capabilities: [
          { title: "User-Centric UI/UX Design", desc: "We design intuitive websites that guide users effortlessly towards conversion goals." },
          { title: "Responsive & Mobile-Ready", desc: "Flawless experience across all devices, from desktop monitors to smartphones." },
          { title: "SEO-Friendly Structure", desc: "Built with best practices to help you rank higher on search engines organically." },
          { title: "Fast Loading Speed", desc: "Optimized code and assets to ensure your website loads in under 3 seconds." },
          { title: "Easy Content Management", desc: "Empower your team to update text and images easily without coding knowledge." },
          { title: "Robust Security", desc: "Implementation of SSL, firewalls, and secure coding to protect your data." },
        ],
        processes: [
          { step: "01", title: "Requirement Gathering", desc: "We begin by understanding your business goals, target audience, and specific technical requirements." },
          { step: "02", title: "UI/UX Design & Prototyping", desc: "Creating wireframes and high-fidelity designs for your approval before development starts." },
          { step: "03", title: "Development & Integration", desc: "Transforming the design into a fully functional, responsive, and secure website." },
          { step: "04", title: "Testing & Deployment", desc: "Rigorous testing for performance and bugs, followed by a smooth launch to your domain." }
        ],
        faqs: [
          { q: "How long does it take to build a website?", a: "A standard corporate website takes around 2 to 4 weeks. E-commerce or custom web applications may take 6 to 12 weeks depending on the complexity." },
          { q: "Do you provide maintenance services?", a: "Yes, we offer ongoing maintenance and support packages to ensure your website remains updated, secure, and running smoothly." },
          { q: "Can I update the content on my own?", a: "Absolutely. We integrate user-friendly Content Management Systems (CMS) so you can edit text, images, and posts easily." },
          { q: "Do I need to pay for domain and hosting?", a: "Our packages generally include domain and hosting for the first year. For custom projects, we will outline these costs transparently." }
        ,
          { q: "Do you design the UI/UX as well?", a: "Yes, we provide end-to-end services starting from user research and wireframing to high-fidelity UI/UX design before development." },
          { q: "Is the website optimized for mobile devices?", a: "Absolutely. All our web applications are built with a mobile-first approach, ensuring seamless performance across all screen sizes." },
          { q: "Can you migrate our existing website?", a: "Yes, we can migrate your data, content, and SEO rankings to a new, modern tech stack without losing your existing progress." }]
      })
    },
    {
      slug: "iot-system-development",
      title: "IoT System Development",
      description: "Connected systems for real-time monitoring and automation",
      image_url: "/image/service/1.webp",
      content_json: JSON.stringify({
        heroDesc: "Connected Hardware and Software Systems for Real-Time Control & Analytics",
        heroSub: "Bridge the gap between physical objects and digital management. We develop robust IoT infrastructures connecting smart devices, microcontrollers, and analytics systems.",
        packages: [
          { name: "Starter Kit", price: "Rp 15.000.000", desc: "Ideal for basic sensor integration and monitoring dashboards.", features: ["Up to 5 Connected Sensors", "Real-time Dashboard UI", "Standard MQTT Connection", "Email/Telegram Alerts", "1 Year Data Storage"], isPopular: false },
          { name: "Enterprise", price: "Rp 35.000.000", desc: "Advanced telemetry and automation workflows for business operations.", features: ["Up to 50 Connected Devices", "Custom Automation Rules", "Edge Computing Support", "Cross-Platform Dashboard", "API Access & Integration"], isPopular: true },
          { name: "Custom Suite", price: "Chat Admin", desc: "Full-scale industrial automation or customized smart solutions.", features: ["Hardware Design Advisory", "Proprietary Protocol Support", "On-Premises Deployment", "High-Concurrency Broker", "24/7 Priority Support"], isPopular: false },
        ],
        challenges: [
          "Unreliable connectivity and data loss from sensors",
          "Security vulnerabilities in edge devices and telemetry",
          "High latency in real-time alert systems",
          "Difficulties in scaling database writes for telemetry data"
        ],
        capabilities: [
          { title: "Real-Time Telemetry", desc: "Fast and reliable streaming of sensor readings to high-performance cloud databases." },
          { title: "Edge & Cloud Automation", desc: "Establish rule engines that run locally or in the cloud to trigger alarms or actuators." },
          { title: "Secure Telemetry Channels", desc: "Encrypted data exchange via secure TLS connections preventing unauthorized eavesdropping." },
          { title: "Custom Interactive Dashboards", desc: "Stunning, easy-to-read dashboards featuring real-time charts, map locations, and logs." },
          { title: "Cross-Platform Control", desc: "Control smart actuators or systems seamlessly via mobile apps, tablets, or desktops." },
          { title: "OTA Firmware Updates", desc: "Over-the-air firmware update support to patch bugs and deploy features to deployed hardware." },
        ],
        processes: [
          { step: "01", title: "Hardware & Requirement Mapping", desc: "Specifying sensor list, transmission protocols (Wi-Fi, LoRa, cellular), and power constraints." },
          { step: "02", title: "Prototypes & Dashboard Design", desc: "Creating hardware mockup connections and real-time dashboard wireframes." },
          { step: "03", title: "Firmware & Platform Coding", desc: "Writing firmware scripts for microcontrollers and linking to broker services." },
          { step: "04", title: "Field Testing & Deployment", desc: "Simulating high load, physical device testing, and launching live broker server." }
        ],
        faqs: [
          { q: "What protocols do you support for device connectivity?", a: "We primarily support MQTT, HTTP REST, WebSockets, and Modbus depending on the project requirements." },
          { q: "Can we integrate existing legacy hardware?", a: "Yes, we can advise on adapters and edge controllers to bring legacy machinery into modern cloud portals." },
          { q: "How is telemetry data secured?", a: "We enforce device-specific tokens, TLS communication, and isolated virtual network groups." }
        ,
          { q: "What industries benefit most from your IoT solutions?", a: "Manufacturing, agriculture, logistics, and smart homes are the most common sectors, but our IoT systems are highly adaptable to any industry." },
          { q: "How secure is the data transmission?", a: "We employ end-to-end encryption, secure MQTT brokers, and robust authentication mechanisms to ensure your data remains protected." }]
      })
    },
    {
      slug: "erp-system-integration",
      title: "ERP & System Integration",
      description: "Seamless integration across platforms, APIs, and devices",
      image_url: "/image/service/3.webp",
      content_json: JSON.stringify({
        heroDesc: "Unified Enterprise Workflows and Seamless Cross-Platform Integrations",
        heroSub: "Eliminate manual data synchronization. We integrate your ERP systems, accounting softwares, customer relations systems, and payment portals into one cohesive system.",
        packages: [
          { name: "API Connector", price: "Rp 12.000.000", desc: "Connect two distinct platforms via custom secure API gateways.", features: ["Bidirectional Sync", "Error Handling & Retries", "Standard Authentication", "Logs & Auditing Dashboard", "1 Year Support"], isPopular: false },
          { name: "Business Hub", price: "Rp 28.000.000", desc: "Integrate multi-channel retail systems with standard ERP.", features: ["ERP / POS Syncing", "Multi-Warehouse Management", "Automated Invoice Generation", "Real-Time Stock Updates", "Priority Email Support"], isPopular: true },
          { name: "Custom Enterprise", price: "Chat Admin", desc: "Large enterprise migration, legacy systems wrapper, or complex sync chains.", features: ["Legacy Database Wrapper", "High-Throughput Queue", "On-Premises Gateway Setup", "Compliance & Audit Readiness", "Dedicated Support Engineer"], isPopular: false },
        ],
        challenges: [
          "Inconsistent inventory data across sales channels",
          "Manual invoice entry prone to human error",
          "Legacy softwares lacking open APIs for modern apps",
          "System bottlenecks during peak sales seasons"
        ],
        capabilities: [
          { title: "Bidirectional Data Sync", desc: "Synchronize inventory, pricing, and orders immediately across all linked channels." },
          { title: "Automated Invoice Creation", desc: "Generate and send professional tax invoices automatically upon successful payment." },
          { title: "Legacy System Wrappers", desc: "Expose secure REST APIs from legacy SQL databases, bridging the gap to new softwares." },
          { title: "Custom Dashboard Logs", desc: "Track synchronization tasks, view active links, and get alerts for failed triggers." },
          { title: "Robust Error Retries", desc: "Built-in queuing mechanisms that retry operations if external APIs are temporarily down." },
          { title: "Financial & Tax Audit Logs", desc: "Ensure compliance with comprehensive records of all integrated financial flows." },
        ],
        processes: [
          { step: "01", title: "API Audit & Schema Mapping", desc: "Auditing current platforms, checking API specs, and matching data schemas." },
          { step: "02", title: "Workflow Orchestration Design", desc: "Defining triggers, actions, fallback routines, and error-handling pipelines." },
          { step: "03", title: "Integration Development", desc: "Writing microservices, setting up database hooks, and hosting the integration hub." },
          { step: "04", title: "Staging Tests & Launch", desc: "Rigorous testing with mock data payloads, load simulation, and shifting to production." }
        ],
        faqs: [
          { q: "Can you integrate custom ERP systems?", a: "Yes, as long as we can access the underlying database or if the system exposes connection endpoints." },
          { q: "What happens if one of the linked systems goes offline?", a: "Our middleware queues the failed transactions and automatically retries them once the target system is back online." }
        ,
          { q: "Do you provide training for the new ERP system?", a: "Yes, we conduct comprehensive training sessions for your team to ensure a smooth transition and high adoption rate." },
          { q: "Can the ERP scale as our business grows?", a: "Our systems are built on scalable cloud architectures, meaning you can easily add new modules, users, or resources as your operations expand." }]
      })
    },
    {
      slug: "industrial-automation-solutions",
      title: "Industrial & Automation Solutions",
      description: "Smart systems to optimize operational workflows",
      image_url: "/image/service/4.webp",
      content_json: JSON.stringify({
        heroDesc: "Smart Automation to Optimize Manufacturing & Operational Workflows",
        heroSub: "Enhance throughput and reduce downtime. We build tailor-made automated pipelines, SCADA monitoring interfaces, and machine-to-machine control links.",
        packages: [
          { name: "PLC Monitor", price: "Rp 20.000.000", desc: "Get real-time readouts and simple controls from your PLC.", features: ["Modbus / OPC UA Integration", "Real-Time Web HMI Dashboard", "Critical Safety Alerts", "Historical Log Chart", "Standard Remote Control"], isPopular: false },
          { name: "Complete SCADA", price: "Rp 45.000.000", desc: "Comprehensive plant floor visualization and parameter setting.", features: ["Multi-PLC Integration", "Interactive Floorplan Mockup", "Recipe Management Module", "Automated Shift Reports", "Advanced Access Control"], isPopular: true },
          { name: "Custom Factory Suite", price: "Chat Admin", desc: "Full automation, custom sensors installation advisory, and custom interface development.", features: ["Custom protocol support", "Predictive Maintenance module", "Local server setup (On-Prem)", "High Availability failover", "On-site support"], isPopular: false },
        ],
        challenges: [
          "Unplanned machinery downtime causing massive losses",
          "Inefficient parameter settings limiting maximum throughput",
          "Lack of central visualization for factory floor status",
          "Safety compliance monitoring gaps"
        ],
        capabilities: [
          { title: "Real-time HMI/SCADA", desc: "Web-based SCADA system to check machinery telemetry from any authorized terminal." },
          { title: "Automated Report Generation", desc: "Receive summary reports on daily production, machine efficiency, and downtime logs." },
          { title: "Predictive Maintenance", desc: "Track temperature, vibrations, or cycles to schedule maintenance before breakdown." },
          { title: "Role-Based Access", desc: "Control who can change critical parameters, log operations, and acknowledge safety flags." },
          { title: "Multi-Protocol Support", desc: "Integrate with OPC UA, Modbus TCP/RTU, Siemens S7, and general TCP interfaces." },
          { title: "Safety Warning Triggers", desc: "Flash notifications and send urgent SMS/Email alerts when parameters exceed thresholds." },
        ],
        processes: [
          { step: "01", title: "Plant Floor Analysis", desc: "Inspecting machinery, PLC models, wiring paths, and specifying data points." },
          { step: "02", title: "Interface & HMI Prototyping", desc: "Designing visual layouts of factory lines, charts, and control knobs." },
          { step: "03", title: "PLC Setup & SCADA Coding", desc: "Setting up communication nodes, reading PLC tags, and programming web dashboard." },
          { step: "04", title: "Dry Runs & Integration", desc: "On-site testing under safe parameters, validating warning signs, and final hand-off." }
        ],
        faqs: [
          { q: "Is the control system safe from external cyber threats?", a: "Yes, SCADA portals are deployed behind dedicated VPNs and firewalls, with strict IP-address white-listing." },
          { q: "Do you supply the physical automation hardware?", a: "We act as the software integration partner. We can recommend and specify hardware suppliers to source the PLCs and sensors." }
        ,
          { q: "What kind of PLCs do you support?", a: "We work with major PLC brands including Siemens, Allen-Bradley, Mitsubishi, and Omron, depending on your factory standards." },
          { q: "How do you handle maintenance and downtime?", a: "We design systems with high availability and provide regular preventative maintenance schedules to minimize unexpected downtime." }]
      })
    },
    {
      slug: "data-dashboard-analytics",
      title: "Data Dashboard & Analytics",
      description: "Transforming raw data into actionable insights",
      image_url: "/image/service/5.webp",
      content_json: JSON.stringify({
        heroDesc: "Transforming Raw Data into Actionable Business Intel",
        heroSub: "Unlock insights from sales, operations, and customers. We design high-fidelity data pipelines and custom analytics dashboards to drive growth.",
        packages: [
          { name: "Single Source", price: "Rp 8.000.000", desc: "Best for simple dashboard linked to one primary database.", features: ["Up to 10 Visual Charts", "Google Sheets / PostgreSQL Link", "Auto-Refresh Daily", "User Access Control", "Mobile Layout Setup"], isPopular: false },
          { name: "Enterprise BI", price: "Rp 18.000.000", desc: "Combine multiple data sources with automated ETL pipelines.", features: ["ETL Processing Pipeline", "Multi-Database Support", "Real-Time Queries", "Automated PDF Reports", "Custom Metric Definitions"], isPopular: true },
          { name: "AI Analytics", price: "Chat Admin", desc: "Predictive modeling, automated forecasting, and custom machine learning tools.", features: ["Predictive Analysis Module", "Anomaly Detection System", "Custom Data Warehouse", "Big Data Architecture", "Dedicated Data Engineer"], isPopular: false },
        ],
        challenges: [
          "Siloed business datasets that cannot be cross-referenced",
          "Slow query times blocking urgent data reports",
          "Inability to forecast stock or sales trends reliably",
          "Complexity in creating custom reports manually"
        ],
        capabilities: [
          { title: "Dynamic Visual Charts", desc: "Beautiful charts including line trends, bar breakdowns, heatmaps, and funnel diagrams." },
          { title: "ETL Pipeline Automation", desc: "Extract, transform, and load data from APIs and databases into unified storage automatically." },
          { title: "Real-Time Analytics", desc: "Instantly query database transactions to see live sale tallies and active customer metrics." },
          { title: "Predictive Forecasting", desc: "Estimate upcoming sales, demand spikes, or seasonal changes using machine learning." },
          { title: "Secure User Access", desc: "Restrict specific graphs or datasets based on employee role (e.g. Sales vs Finance)." },
          { title: "Automated PDF Dispatch", desc: "Schedule daily/weekly email summaries with attached PDF reports for directors." },
        ],
        processes: [
          { step: "01", title: "Data Source Audit", desc: "Identifying all databases, CRM logs, excel sheets, and specifying key performance indicators." },
          { step: "02", title: "Dashboard Wireframing", desc: "Drafting the screen layout and deciding the ideal chart formats for each metric." },
          { step: "03", title: "Data Pipeline Programming", desc: "Writing ETL functions, setting up data warehouse, and implementing quick queries." },
          { step: "04", title: "Verification & Training", desc: "Verifying chart values against raw database queries and training management team." }
        ],
        faqs: [
          { q: "How frequently does the dashboard data update?", a: "Depending on your plan, it can update in real-time, hourly, or once per day." },
          { q: "Can we connect tools like Google Sheets or Shopify?", a: "Yes, we support API connectors for popular cloud platforms to pull data automatically." }
        ,
          { q: "Can we export the reports to PDF or Excel?", a: "Yes, our dashboards include built-in export features allowing you to download reports in various formats." },
          { q: "Do we own the data collected?", a: "100% yes. You retain full ownership of all data, and we ensure it is securely stored in your preferred cloud or on-premise servers." }]
      })
    },
    {
      slug: "it-strategy-consulting",
      title: "IT Strategy & Consulting",
      description: "Strategic planning for scalable and future-ready IT infrastructure",
      image_url: "/image/service/6.webp",
      content_json: JSON.stringify({
        heroDesc: "Strategic Technology Planning for Scalable Company Operations",
        heroSub: "Get a technology roadmap that matches your business objectives. We analyze your tech systems, recommend optimizations, and manage migrations.",
        packages: [
          { name: "Infrastructure Audit", price: "Rp 6.000.000", desc: "Full assessment of your current servers, codebases, and databases.", features: ["Performance Audit Report", "Security Vulnerability Scan", "Cost Optimization Guide", "Architectural Review", "1 Consultation Session"], isPopular: false },
          { name: "Strategy & Roadmap", price: "Rp 15.000.000", desc: "Create a complete step-by-step technological upgrade roadmap.", features: ["Audit + Upgrade Plan", "Software Stack Selection", "Scale & Capacity Planning", "Team Skill Gap Analysis", "3 Implementation Calls"], isPopular: true },
          { name: "Retainer Advisory", price: "Chat Admin", desc: "Part-time CTO consulting for ongoing projects and tech vendor management.", features: ["Weekly Sync Meetings", "Vendor Proposal Review", "Emergency Tech Support", "Architecture Approval", "Ongoing Stack Auditing"], isPopular: false },
        ],
        challenges: [
          "Uncontrolled server expenses draining company budget",
          "Confused software stack choices slowing down developers",
          "Lack of clear migration plans for cloud databases",
          "Inefficient engineering team structure"
        ],
        capabilities: [
          { title: "Server Cost Optimization", desc: "Identify unused cloud resources and configure auto-scaling to drop AWS/Azure bills." },
          { title: "Software Stack Selection", desc: "Pick the best programming languages, frameworks, and databases for your scale." },
          { title: "Database Migration Plans", desc: "Draft step-by-step, zero-downtime instructions to migrate datasets to modern systems." },
          { title: "Tech Team Structuring", desc: "Help define roles (e.g. Frontend vs Devops) and set workflow standards (CI/CD)." },
          { title: "Security Best Practices", desc: "Set encryption, token policies, firewall setups, and backup schemes." },
          { title: "Vendor Audit Support", desc: "Analyze code quality and agreements from third-party development teams." },
        ],
        processes: [
          { step: "01", title: "Discovery & Access Setup", desc: "Interviews with management, getting temporary access to server accounts." },
          { step: "02", title: "Analysis & Drafting", desc: "Performing security checks, cost tracking, and drafting migration schedules." },
          { step: "03", title: "Roadmap Presentation", desc: "Presenting the report to directors, discussing timelines, and selecting stacks." },
          { step: "04", title: "Review & Quality Control", desc: "Answering team questions and reviewing vendor bids for the roadmap steps." }
        ],
        faqs: [
          { q: "Can you help oversee our outsourced developers?", a: "Yes, we can serve as your tech advisors to perform code quality reviews and evaluate milestones." },
          { q: "How long does a standard audit take?", a: "A standard infrastructure audit takes between 1 to 2 weeks." }
        ,
          { q: "Do you offer implementation after consulting?", a: "Yes, we offer full-cycle services. We can seamlessly transition from the strategy phase directly into the implementation and development phase." },
          { q: "How do you price your consulting services?", a: "Pricing is typically project-based or via a retainer model, depending on the scope and duration of the strategic engagement." }]
      })
    }
  ];

// ==========================================
// WORKS / PROJECT DATA
// ==========================================

const works = [
  // ========================================
  // 1. MY BOSS — IoT SYSTEM
  // ========================================
  {
    slug: "myboss-iot-system",
    client: "MY BOSS",
    title: "IoT System for My Boss (Nasmoko)",
    desc: "A smart IoT system designed to monitor and manage automotive operational devices in real-time.",
    category: "IoT System Development",

    images: [
      "/image/projects/myboss-iot-system/1.webp",
      "/image/projects/myboss-iot-system/2.webp",
      "/image/projects/myboss-iot-system/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2026",

      overview: {
        label: "Project Overview",
        title:
          "Transforming Automotive Operations Through Connected IoT Technology",
        description:
          "Kaluna developed an integrated IoT platform that enables My Boss to monitor automotive equipment, operational activity, and device performance through one centralized system.",
        gallery: [
          "/image/projects/myboss-iot-system/2.webp",
          "/image/projects/myboss-iot-system/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title: "Addressing Limitations in Manual Device Monitoring",
        items: [
          {
            icon: "monitoring",
            title: "Limited Visibility",
            desc: "Operational device conditions could not be monitored continuously from one centralized platform.",
          },
          {
            icon: "device",
            title: "Disconnected Devices",
            desc: "Automotive devices operated independently without synchronized data communication.",
          },
          {
            icon: "alert",
            title: "Delayed Issue Detection",
            desc: "Technical problems were often identified only after they affected daily operations.",
          },
          {
            icon: "analytics",
            title: "Lack of Operational Data",
            desc: "Management had limited historical information for evaluating device performance.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title:
          "Kaluna designed a connected IoT ecosystem for monitoring and managing automotive operational devices.",
        background_image:
          "/image/projects/myboss-iot-system/1.webp",

        items: [
          {
            title: "Real-Time Device Monitoring",
            desc: "Live monitoring of connected equipment status, activity, and operational conditions.",
            image_url:
              "/image/projects/myboss-iot-system/1.webp",
          },
          {
            title: "Automated System Alerts",
            desc: "Instant notifications when devices experience abnormal conditions or operational issues.",
            image_url:
              "/image/projects/myboss-iot-system/2.webp",
          },
          {
            title: "Centralized IoT Dashboard",
            desc: "A unified dashboard for reviewing connected devices, activity history, and performance data.",
            image_url:
              "/image/projects/myboss-iot-system/3.webp",
          },
        ],
      },

      tech_stack: [
        {
          name: "Next.js",
          icon: "nextjs",
        },
        {
          name: "Node.js",
          icon: "nodejs",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
        {
          name: "MQTT",
          icon: "mqtt",
        },
        {
          name: "Git",
          icon: "git",
        },
      ],

      workflow: {
        label: "Our Development Process",
        title: "How We Built the IoT Monitoring System",

        items: [
          {
            step: "01",
            title: "Device Requirement Mapping",
            desc: "Identifying connected devices, monitoring requirements, and operational conditions.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "IoT Architecture Planning",
            desc: "Designing communication flows between devices, servers, and the monitoring dashboard.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "System Development",
            desc: "Developing device integrations, APIs, dashboards, and automated alerts.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Deployment and Testing",
            desc: "Testing device connections and deploying the system into the operational environment.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title: "Improving Device Visibility and Operational Response",
        description:
          "The IoT platform provides My Boss with better control over connected devices while improving operational responsiveness and maintenance planning.",

        highlights: [
          {
            title: "Real-Time Visibility",
            desc: "Device status and operational activity can be monitored from one dashboard.",
          },
          {
            title: "Faster Issue Response",
            desc: "Automated alerts help the operational team identify problems earlier.",
          },
          {
            title: "Centralized Device Data",
            desc: "Historical device information is available for performance evaluation.",
          },
        ],

        image_url:
          "/image/projects/myboss-iot-system/1.webp",
      },

      showcase: {
        image_url:
          "/image/projects/myboss-iot-system/2.webp",
        alt: "My Boss IoT monitoring system interface",
      },
    }),
  },

  // ========================================
  // 2. SINAU PRINT — ERP SYSTEM
  // ========================================
  {
    slug: "sinau-print-erp",
    client: "SINAU PRINT",
    title: "ERP System for Sinau Print",
    desc: "An integrated ERP solution designed to manage printing operations, inventory, customer orders, automated workflows, and financial records.",
    category: "ERP & System Integration",

    images: [
      "/image/projects/sinau-print-erp/1.webp",
      "/image/projects/sinau-print-erp/2.webp",
      "/image/projects/sinau-print-erp/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2025",

      overview: {
        label: "About the Project",
        title:
          "Digitizing Printing Services Through a Scalable ERP Platform",
        description:
          "Sinau Print needed a digital platform capable of managing printing services, customer orders, product information, inventory, billing, and internal operational processes through one integrated workflow.",
        gallery: [
          "/image/projects/sinau-print-erp/2.webp",
          "/image/projects/sinau-print-erp/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title:
          "Addressing Operational Bottlenecks in Manual Order Processing",

        items: [
          {
            icon: "order",
            title: "Overloaded Manual Entry",
            desc: "Customer orders and printing specifications were repeatedly recorded and processed manually.",
          },
          {
            icon: "inventory",
            title: "No Real-Time Tracking",
            desc: "Production progress and material availability were difficult to monitor accurately.",
          },
          {
            icon: "customer",
            title: "Unstructured Order Flow",
            desc: "Customers lacked a clear digital process for selecting and ordering printing products.",
          },
          {
            icon: "workflow",
            title: "Inefficient Workflow",
            desc: "Sales, production, inventory, and billing activities were managed through separate processes.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title:
          "Kaluna developed a custom ERP platform designed specifically for printing operations.",
        background_image:
          "/image/projects/sinau-print-erp/1.webp",

        items: [
          {
            title: "User-Centered Order Interface",
            desc: "A responsive interface that allows customers and staff to manage printing orders efficiently.",
            image_url:
              "/image/projects/sinau-print-erp/2.webp",
          },
          {
            title: "Real-Time Inventory Updates",
            desc: "Integrated stock monitoring for paper, ink, printing materials, and production supplies.",
            image_url:
              "/image/projects/sinau-print-erp/3.webp",
          },
          {
            title: "Modular ERP Architecture",
            desc: "A scalable architecture that supports additional products, services, and future integrations.",
            image_url:
              "/image/projects/sinau-print-erp/1.webp",
          },
        ],
      },

      tech_stack: [
        {
          name: "HTML5",
          icon: "html5",
        },
        {
          name: "CSS3",
          icon: "css3",
        },
        {
          name: "JavaScript",
          icon: "javascript",
        },
        {
          name: "MySQL",
          icon: "mysql",
        },
        {
          name: "Git",
          icon: "git",
        },
      ],

      workflow: {
        label: "Our Development Process",
        title: "How We Developed the Sinau Print Platform",

        items: [
          {
            step: "01",
            title: "Discovery and Requirement Mapping",
            desc: "Mapping printing services, customer journeys, inventory requirements, and internal workflows.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "Technical Analysis",
            desc: "Defining the ERP architecture, database structure, and system integration requirements.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "Interface and System Design",
            desc: "Designing customer-facing interfaces and internal operational management flows.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Development and Integration",
            desc: "Developing order, inventory, billing, reporting, and workflow automation features.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title:
          "Improving Transaction Efficiency and Inventory Control",
        description:
          "The ERP platform helps Sinau Print provide a more structured ordering experience while simplifying inventory, production, billing, and operational management.",

        highlights: [
          {
            title: "Faster Transaction Processing",
            desc: "Customer orders can be submitted and processed through a structured digital workflow.",
          },
          {
            title: "Real-Time Inventory Visibility",
            desc: "Material availability and stock movement can be monitored from one system.",
          },
          {
            title: "Centralized Order Management",
            desc: "Customer requests and printing orders can be managed through an integrated platform.",
          },
        ],

        image_url:
          "/image/projects/sinau-print-erp/1.webp",
      },

      showcase: {
        image_url:
          "/image/projects/sinau-print-erp/2.webp",
        alt: "Sinau Print ERP system interface",
      },
    }),
  },

  // ========================================
  // 3. WEB MEDIA — COMPANY PROFILE WEBSITE
  // ========================================
  {
    slug: "web-media-profile",
    client: "WEB MEDIA",
    title: "Company Profile Website for Web Media",
    desc: "An elegant and highly responsive company profile website created to strengthen brand presence and showcase digital media services.",
    category: "Web & Application Development",

    images: [
      "/image/projects/web-media-profile/1.webp",
      "/image/projects/web-media-profile/2.webp",
      "/image/projects/web-media-profile/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2025",

      overview: {
        label: "Project Overview",
        title:
          "Building a Stronger Digital Presence for a Modern Media Company",
        description:
          "Kaluna developed a responsive company profile website that presents Web Media's services, portfolio, company information, and brand identity through a clear and professional digital experience.",
        gallery: [
          "/image/projects/web-media-profile/2.webp",
          "/image/projects/web-media-profile/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title:
          "Creating a Clear and Professional Digital Brand Experience",

        items: [
          {
            icon: "brand",
            title: "Limited Brand Presence",
            desc: "The company did not have a centralized digital platform for presenting its capabilities.",
          },
          {
            icon: "content",
            title: "Unstructured Information",
            desc: "Service and company information was not presented through a consistent content structure.",
          },
          {
            icon: "responsive",
            title: "Inconsistent Experience",
            desc: "Digital information needed to remain accessible across desktop and mobile devices.",
          },
          {
            icon: "conversion",
            title: "Limited Lead Generation",
            desc: "Potential clients did not have a clear path to explore services and contact the company.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title:
          "Kaluna created a responsive company profile platform focused on clarity, credibility, and conversion.",
        background_image:
          "/image/projects/web-media-profile/1.webp",

        items: [
          {
            title: "Responsive Website Interface",
            desc: "A consistent browsing experience across desktop, tablet, and mobile devices.",
            image_url:
              "/image/projects/web-media-profile/1.webp",
          },
          {
            title: "Structured Service Presentation",
            desc: "Clear sections for company information, services, portfolio, and client communication.",
            image_url:
              "/image/projects/web-media-profile/2.webp",
          },
          {
            title: "Conversion-Oriented Navigation",
            desc: "Strategic calls to action that guide visitors toward contacting the company.",
            image_url:
              "/image/projects/web-media-profile/3.webp",
          },
        ],
      },

      tech_stack: [
        {
          name: "Next.js",
          icon: "nextjs",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
        },
        {
          name: "Figma",
          icon: "figma",
        },
        {
          name: "Git",
          icon: "git",
        },
      ],

      workflow: {
        label: "Our Development Process",
        title: "How We Built the Web Media Website",

        items: [
          {
            step: "01",
            title: "Brand Discovery",
            desc: "Understanding the company identity, target audience, services, and communication objectives.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "Content Architecture",
            desc: "Organizing company information and defining the visitor navigation journey.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "UI and UX Design",
            desc: "Creating responsive layouts aligned with the Web Media visual identity.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Website Development",
            desc: "Implementing the approved interface and optimizing website responsiveness and performance.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title:
          "Strengthening Brand Credibility and Digital Accessibility",
        description:
          "The new website provides Web Media with a professional digital platform for introducing its business, presenting services, and communicating with potential clients.",

        highlights: [
          {
            title: "Stronger Brand Presence",
            desc: "Company information and services are presented through a consistent visual identity.",
          },
          {
            title: "Improved Accessibility",
            desc: "Visitors can access the platform comfortably through different screen sizes.",
          },
          {
            title: "Clearer Customer Journey",
            desc: "Structured navigation helps visitors find information and contact the company.",
          },
        ],

        image_url:
          "/image/projects/web-media-profile/1.webp",
      },

      showcase: {
        image_url:
          "/image/projects/web-media-profile/2.webp",
        alt: "Web Media company profile website",
      },
    }),
  },

  // ========================================
  // 4. ARTIC — COMPLEX WEB APPLICATION
  // ========================================
  {
    slug: "artic-complex-web",
    client: "ARTIC",
    title: "Complex Web Application for Artic",
    desc: "A scalable web platform developed to support complex data processing, user management, reporting, and system integrations.",
    category: "Web & Application Development",

    images: [
      "/image/projects/artic-complex-web/1.webp",
      "/image/projects/artic-complex-web/2.webp",
      "/image/projects/artic-complex-web/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2026",

      overview: {
        label: "Project Overview",
        title:
          "Building a Scalable Platform for Complex Data and User Operations",
        description:
          "Artic required a reliable web application capable of handling structured datasets, multiple user roles, operational reporting, geographic information, and continuously evolving business requirements.",
        gallery: [
          "/image/projects/artic-complex-web/2.webp",
          "/image/projects/artic-complex-web/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title:
          "Managing Complex Data and Multi-Level User Operations",

        items: [
          {
            icon: "database",
            title: "Complex Data Structure",
            desc: "The platform needed to manage interconnected information across multiple operational categories.",
          },
          {
            icon: "users",
            title: "Multiple User Roles",
            desc: "Different users required distinct permissions, dashboards, and operational capabilities.",
          },
          {
            icon: "report",
            title: "Manual Reporting",
            desc: "Operational reports required significant manual compilation and verification.",
          },
          {
            icon: "scale",
            title: "Scalability Requirements",
            desc: "The application needed to support increasing users, data volume, and future features.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title:
          "Kaluna developed a modular web application designed for complex data management and scalable operations.",
        background_image:
          "/image/projects/artic-complex-web/1.webp",

        items: [
          {
            title: "Role-Based User Management",
            desc: "Dedicated permissions and interfaces for administrators, coordinators, and operational users.",
            image_url:
              "/image/projects/artic-complex-web/1.webp",
          },
          {
            title: "Integrated Data Management",
            desc: "Centralized data storage, validation, filtering, visualization, and operational processing.",
            image_url:
              "/image/projects/artic-complex-web/2.webp",
          },
          {
            title: "Automated Reporting System",
            desc: "Dynamic reports and exports generated directly from verified application data.",
            image_url:
              "/image/projects/artic-complex-web/3.webp",
          },
        ],
      },

      tech_stack: [
        {
          name: "Laravel",
          icon: "laravel",
        },
        {
          name: "PHP",
          icon: "php",
        },
        {
          name: "MySQL",
          icon: "mysql",
        },
        {
          name: "JavaScript",
          icon: "javascript",
        },
        {
          name: "Git",
          icon: "git",
        },
      ],

      workflow: {
        label: "Our Development Process",
        title: "How We Developed the Artic Platform",

        items: [
          {
            step: "01",
            title: "Requirement Analysis",
            desc: "Mapping user roles, data structures, reports, and operational requirements.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "System Architecture",
            desc: "Designing database relationships, access control, application modules, and data flows.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "Platform Development",
            desc: "Developing dashboards, data management features, visualization, and automated reports.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Testing and Deployment",
            desc: "Validating system functionality and deploying the application for operational use.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title:
          "Improving Data Accuracy and Operational Coordination",
        description:
          "The platform enables Artic to manage users, operational information, geographic coverage, monitoring activities, and reports through a unified digital system.",

        highlights: [
          {
            title: "Centralized Information",
            desc: "Operational data can be accessed and managed from one application.",
          },
          {
            title: "Faster Reporting",
            desc: "Reports can be generated automatically from structured and verified system data.",
          },
          {
            title: "Controlled User Access",
            desc: "Role-based permissions improve security and operational accountability.",
          },
        ],

        image_url:
          "/image/projects/artic-complex-web/1.webp",
      },

      showcase: {
        image_url:
          "/image/projects/artic-complex-web/2.webp",
        alt: "Artic complex web application dashboard",
      },
    }),
  },

  // ========================================
  // 5. ALTATIC ANALYTIC — DATA DASHBOARD
  // ========================================
  {
    slug: "altatic-analytic",
    client: "ALTATIC ANALYTIC",
    title: "K-Hub Data Dashboard for Altatic Analytic",
    desc: "An advanced data dashboard providing real-time analytics, performance tracking, and operational metrics for Altatic Analytic.",
    category: "Data Dashboard & Analytics",

    images: [
      "/image/projects/altatic-analytic/1.webp",
      "/image/projects/altatic-analytic/2.webp",
      "/image/projects/altatic-analytic/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2026",

      overview: {
        label: "Project Overview",
        title:
          "Turning Complex Operational Data into Actionable Information",
        description:
          "Kaluna developed K-Hub as a centralized analytics dashboard that helps Altatic Analytic monitor essential indicators, understand performance trends, and support faster decision-making.",
        gallery: [
          "/image/projects/altatic-analytic/2.webp",
          "/image/projects/altatic-analytic/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title:
          "Simplifying Fragmented Data and Operational Reporting",

        items: [
          {
            icon: "database",
            title: "Fragmented Data Sources",
            desc: "Operational information was distributed across separate files and systems.",
          },
          {
            icon: "report",
            title: "Slow Reporting Process",
            desc: "Reports required manual compilation before they could be reviewed.",
          },
          {
            icon: "visualization",
            title: "Limited Data Visualization",
            desc: "Complex datasets were difficult to understand without clear visual presentation.",
          },
          {
            icon: "decision",
            title: "Delayed Decision-Making",
            desc: "Management could not access important performance indicators immediately.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title:
          "Kaluna built a centralized dashboard that transforms operational data into clear and actionable insights.",
        background_image:
          "/image/projects/altatic-analytic/1.webp",

        items: [
          {
            title: "Interactive Data Visualization",
            desc: "Dynamic charts and indicators make complex performance data easier to understand.",
            image_url:
              "/image/projects/altatic-analytic/1.webp",
          },
          {
            title: "Real-Time Metric Monitoring",
            desc: "Important business and operational indicators can be monitored continuously.",
            image_url:
              "/image/projects/altatic-analytic/2.webp",
          },
          {
            title: "Centralized Reporting Dashboard",
            desc: "Multiple data categories and reports are consolidated into one platform.",
            image_url:
              "/image/projects/altatic-analytic/3.webp",
          },
        ],
      },

      tech_stack: [
        {
          name: "Next.js",
          icon: "nextjs",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
        {
          name: "Python",
          icon: "python",
        },
        {
          name: "Git",
          icon: "git",
        },
      ],

      workflow: {
        label: "Our Development Process",
        title: "How We Developed the K-Hub Dashboard",

        items: [
          {
            step: "01",
            title: "Data Requirement Mapping",
            desc: "Identifying data sources, indicators, metrics, and reporting requirements.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "Dashboard Architecture",
            desc: "Designing data structures, visualization components, and dashboard navigation.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "Data Integration",
            desc: "Connecting operational datasets with dashboard processing and visualization features.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Testing and Optimization",
            desc: "Validating dashboard accuracy, performance, responsiveness, and usability.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title:
          "Accelerating Reporting and Data-Driven Decision-Making",
        description:
          "K-Hub provides Altatic Analytic with a centralized platform for monitoring performance, reviewing operational insights, and supporting strategic decisions.",

        highlights: [
          {
            title: "Faster Data Analysis",
            desc: "Important performance indicators can be reviewed without compiling reports manually.",
          },
          {
            title: "Clearer Data Visualization",
            desc: "Charts and dashboard indicators make complex datasets easier to interpret.",
          },
          {
            title: "Improved Decision Support",
            desc: "Management receives faster access to relevant operational information.",
          },
        ],

        image_url:
          "/image/projects/altatic-analytic/1.webp",
      },

      showcase: {
        image_url:
          "/image/projects/altatic-analytic/2.webp",
        alt: "K-Hub data analytics dashboard",
      },
    }),
  },
];

  const testimonials = [
    {
      client_name: "Ibnu Sapto Adi",
      role: "General Manager",
      company_name: "PT Bahtera Sapta Permata",
      content:
        "Kaluna Technology quickly understood our operational needs. Their team was responsive, easy to communicate with, and able to provide solutions that fit BSP’s business processes.",
      avatar_url: "/image/default-avatar.svg",
      logo_url: "/image/mitra/2.webp",
    },
    {
      client_name: "Gunawan Premadi",
      role: "Editor-in-Chief",
      company_name: "Suara Merdeka Network",
      content:
        "Kaluna Technology helped us develop a professional and informative enterprise company profile website. The development process was well managed, and communication with the team went smoothly.",
      avatar_url: "/image/default-avatar.svg",
      logo_url: "/image/mitra/13.webp",
    },
    {
      client_name: "Simon Agung Hoedoyo",
      role: "Project Leader – IoT & Digital Signage",
      company_name: "Top Toy",
      content:
        "Kaluna Technology supported the implementation of our videotron and digital signage system for Top Toy’s advertising needs. Their team understood the technical requirements and handled the installation process well.",
      avatar_url: "/image/default-avatar.svg",
      logo_url: "/image/mitra/16.webp",
    },
    {
      client_name: "Ishaq Nfarara",
      role: "Building System Manager",
      company_name: "Queen City Mall",
      content:
        "Kaluna Technology helped us develop an IoT-based solution for our building management needs. The solution was practical and well suited to our day-to-day operations.",
      avatar_url: "/image/default-avatar.svg",
      logo_url: "/image/mitra/15.webp",
    },
    {
      client_name: "Anisa Apriani",
      role: "Business Development Manager",
      company_name: "Sinau Print",
      content:
        "The ERP system developed by Kaluna Technology has helped make our workflows more structured. Their team also took the time to understand the needs of each department.",
      avatar_url: "/image/default-avatar.svg",
      logo_url: "/image/mitra/11.webp",
    },
    {
      client_name: "Sisca Kristina Dewi",
      role: "General Manager",
      company_name: "Mandiri Pribumi",
      content:
        "The company profile website developed by Kaluna Technology met our expectations. It looks professional, and the entire development process went smoothly.",
      avatar_url: "/image/default-avatar.svg",
      logo_url: "/image/mitra/18.webp",
    },
    {
      client_name: "Mayakharta Siahaan",
      role: "Marketing Manager",
      company_name: "X1-Tire",
      content:
        "The dashboard developed by Kaluna Technology has made it easier for our team to monitor and manage data. The system is practical and easy to use in our daily activities.",
      avatar_url: "/image/default-avatar.svg",
      logo_url: "/image/mitra/14.webp",
    },
  ];

  const team = [
    { full_name: "Laode Hidayat", position: "FULL STACK DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Ilyas Kurnia", position: "FULL STACK DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Irfan", position: "FRONT END DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "M. Afifudin", position: "BACK END DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Jundy Isham", position: "UI UX DESIGNER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Teguh", position: "UI UX DESIGNER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Ahmad Arof", position: "PROJECT MANAGER", image_url: "/image/default-avatar.svg", linkedin_url: "#" }
  ];

  try {
    const runAllSeeds = db.transaction(() => {
      // 1. Eksekusi Services
      db.prepare("DELETE FROM services").run();
      const stmtServices = db.prepare("INSERT INTO services (slug, title, description, image_url, content_json) VALUES (?, ?, ?, ?, ?)");
      for (const item of services) stmtServices.run(item.slug, item.title, item.description, item.image_url, item.content_json);

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