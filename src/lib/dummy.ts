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
      "Kaluna Technology quickly understood our operational needs. Their team was responsive, easy to communicate with, and able to provide solutions that fit BSP’s business processes.",
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
      "The dashboard developed by Kaluna Technology has made it easier for our team to monitor and manage data. The system is practical and easy to use in our daily activities.",
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
  // ========================================
  // 1. MY BOSS — IoT SYSTEM
  // ========================================
  {
    slug: "myboss-iot-system",
    client: "MY BOSS",
    title: "IoT System for My Boss (Nasmoco)",
    desc: "A smart IoT system designed to monitor and manage automotive operational devices in real-time.",
    category: "IoT & Asset Monitoring ERP",

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
    category: "Printing & Operational ERP",

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
  slug: "web-media-news-erp",
  client: "WEB MEDIA",
  title: "News Management ERP Website for Web Media",
  desc: "An integrated News Management ERP designed to centralize editorial workflows, article production, media asset management, publication scheduling, and real-time content performance monitoring.",
  category: "News Website & Media Management ERP",

  images: [
    "/image/projects/web-media-profile/1.webp",
    "/image/projects/web-media-profile/2.webp",
    "/image/projects/web-media-profile/3.webp",
  ],

  content_json: JSON.stringify({
    year: "2025",

    overview: {
      label: "Project Overview",
      title: "Transforming News Operations Through an Integrated Media ERP",
      description:
        "Kaluna developed a centralized News Management ERP Website that connects journalists, editors, administrators, and media teams within a unified digital platform. The system simplifies article production, editorial review, publication scheduling, media management, and content performance monitoring.",
      gallery: [
        "/image/projects/web-media-profile/2.webp",
        "/image/projects/web-media-profile/3.webp",
      ],
    },

    challenges: {
      label: "The Challenge",
      title: "Fragmented Editorial Workflows and Inefficient News Management",
      items: [
        {
          icon: "brand",
          title: "Disconnected Editorial Process",
          desc: "Journalists, editors, and administrators managed articles through separate communication channels, making the editorial process difficult to monitor.",
        },
        {
          icon: "content",
          title: "Manual Article Management",
          desc: "Article drafts, revisions, categories, author information, and publication schedules were managed manually across multiple platforms.",
        },
        {
          icon: "responsive",
          title: "Unstructured Media Assets",
          desc: "News images, thumbnails, documents, and supporting media files were stored without a centralized and searchable media library.",
        },
        {
          icon: "conversion",
          title: "Limited Performance Monitoring",
          desc: "The editorial team had limited access to real-time information about article views, publishing activity, and content performance.",
        },
      ],
    },

    solutions: {
      label: "Our Solution",
      title:
        "Kaluna developed a centralized News Management ERP Website for efficient editorial collaboration, content publishing, and media monitoring.",
      background_image: "/image/projects/web-media-profile/1.webp",
      items: [
        {
          title: "Integrated Editorial Dashboard",
          desc: "A centralized dashboard for managing article drafts, editorial reviews, publication status, authors, categories, and publishing schedules.",
          image_url: "/image/projects/web-media-profile/1.webp",
        },
        {
          title: "Article Workflow Management",
          desc: "A structured editorial workflow that allows journalists to submit articles, editors to review content, and administrators to approve publication.",
          image_url: "/image/projects/web-media-profile/2.webp",
        },
        {
          title: "News Analytics and Monitoring",
          desc: "Real-time monitoring for article views, publishing activity, content performance, trending news, and editorial productivity.",
          image_url: "/image/projects/web-media-profile/3.webp",
        },
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
      title: "How We Built the News Management ERP Website",
      items: [
        {
          step: "01",
          title: "Editorial Workflow Mapping",
          desc: "Analyzing the complete news production process, from journalist submission and editorial review to approval and publication.",
          image_url: "/image/ourworkflow/1.webp",
        },
        {
          step: "02",
          title: "System Architecture",
          desc: "Designing a scalable content management architecture with role-based access, structured article data, and secure media storage.",
          image_url: "/image/ourworkflow/2.webp",
        },
        {
          step: "03",
          title: "ERP and Website Integration",
          desc: "Connecting the internal editorial ERP with the public news website to enable automatic and scheduled article publication.",
          image_url: "/image/ourworkflow/3.webp",
        },
        {
          step: "04",
          title: "Testing and Deployment",
          desc: "Testing editorial workflows, user permissions, article publishing, media management, website performance, and system security before deployment.",
          image_url: "/image/ourworkflow/4.webp",
        },
      ],
    },

    result: {
      label: "Result and Impact",
      title: "A Faster, Structured, and Centralized News Publishing Process",
      description:
        "The News Management ERP Website successfully centralized editorial activities, accelerated the article publishing process, improved collaboration between journalists and editors, and provided real-time visibility into content performance.",
      highlights: [
        {
          title: "Centralized Editorial Workflow",
          desc: "Journalists, editors, and administrators can manage the entire news production process within one integrated platform.",
        },
        {
          title: "Faster News Publication",
          desc: "Structured approval and scheduling features significantly reduce the time required to publish news articles.",
        },
        {
          title: "Real-Time Content Monitoring",
          desc: "The editorial team can monitor publishing activity, article performance, trending content, and author productivity in real time.",
        },
      ],
      image_url: "/image/projects/web-media-profile/1.webp",
    },

    showcase: {
      image_url: "/image/projects/web-media-profile/2.webp",
      alt: "Web Media News Management ERP Dashboard",
    },
  }),
},
  // ========================================
  // 4. ARTIC — COMPLEX WEB APPLICATION
  // ========================================
  {
    slug: "artic-analytical-science",
    client: "ARTIC GROUP",
    title: "Analytical Science Platform for Artic",
    desc: "A complex web platform designed to analyze scientific data, model laboratory research parameters, and automate analytical workflows.",
    category: "Analytical Science ERP",

    images: [
      "/image/projects/artic-complex-web/1.webp",
      "/image/projects/artic-complex-web/2.webp",
      "/image/projects/artic-complex-web/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2026",

      overview: {
        label: "Project Overview",
        title: "Advancing Research & Analytical Science Through Automation",
        description: "Artic Group required an advanced Analytical Science ERP capable of processing complex laboratory datasets, automating scientific calculations, and visualizing research findings through high-performance dashboards.",
        gallery: [
          "/image/projects/artic-complex-web/2.webp",
          "/image/projects/artic-complex-web/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title: "Manual Scientific Calculations and Data Fragmentation",
        items: [
          {
            icon: "database",
            title: "Fragmented Lab Data",
            desc: "Research data was stored across disparate local files, making cross-laboratory analysis difficult.",
          },
          {
            icon: "analytics",
            title: "Slow Data Processing",
            desc: "Complex mathematical models required manual execution, leading to research bottlenecks.",
          },
          {
            icon: "report",
            title: "Unstandardized Reports",
            desc: "Analytical findings lacked unified reporting standards across scientific departments.",
          },
          {
            icon: "scale",
            title: "Scalability Limits",
            desc: "Legacy tools could not efficiently process high-volume experimental datasets.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title: "Kaluna engineered a specialized Analytical Science ERP for automated scientific workflows and real-time data modeling.",
        background_image: "/image/projects/artic-complex-web/1.webp",
        items: [
          {
            title: "Automated Analytical Engine",
            desc: "High-performance processing algorithms for real-time scientific data analysis.",
            image_url: "/image/projects/artic-complex-web/1.webp",
          },
          {
            title: "Interactive Science Dashboards",
            desc: "Dynamic charts and 3D data visualization for complex laboratory metrics.",
            image_url: "/image/projects/artic-complex-web/2.webp",
          },
          {
            title: "Centralized Lab Hub",
            desc: "A unified platform connecting multi-branch research teams and equipment.",
            image_url: "/image/projects/artic-complex-web/3.webp",
          },
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
        title: "How We Built Artic's Analytical Science Platform",
        items: [
          {
            step: "01",
            title: "Scientific Requirement Mapping",
            desc: "Analyzing laboratory data structures, mathematical models, and research workflows.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "Architecture & Algorithm Design",
            desc: "Designing scalable data pipelines and secure database schemas for research data.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "Module Development",
            desc: "Building data visualization components and automated analytical engines.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Validation & Deployment",
            desc: "Validating computational accuracy against benchmark lab results.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title: "Accelerating Scientific Breakthroughs and Operational Efficiency",
        description: "The Analytical Science ERP transformed Artic Group's research capabilities, enabling faster data processing and seamless collaboration.",
        highlights: [
          {
            title: "10x Faster Analysis",
            desc: "Automated calculations reduced data processing time significantly.",
          },
          {
            title: "Unified Data Repository",
            desc: "All laboratory data is securely stored and accessible in real time.",
          },
          {
            title: "Enhanced Precision",
            desc: "Standardized analytical pipelines eliminated manual calculation errors.",
          },
        ],
        image_url: "/image/projects/artic-complex-web/1.webp",
      },

      showcase: {
        image_url: "/image/projects/artic-complex-web/2.webp",
        alt: "Artic Analytical Science ERP Interface",
      },
    }),
  },
  // ========================================
  // 5. ALTATIC ANALYTIC — DATA DASHBOARD
  // ========================================
 {
  slug: "kaluna-analytic-finance-erp",
  client: "KALUNA ANALYTIC",
  title: "Financial & Accounting ERP for Kaluna Analytic",
  desc: "An advanced Financial Accounting ERP providing real-time cash flow monitoring, automated bookkeeping, financial analytics, and centralized fiscal reporting.",
  category: "Financial & Accounting ERP",

  images: [
    "/image/projects/altatic-analytic/1.webp",
    "/image/projects/altatic-analytic/2.webp",
    "/image/projects/altatic-analytic/3.webp",
  ],

  content_json: JSON.stringify({
    year: "2026",

    overview: {
      label: "Project Overview",
      title: "Establishing a Centralized Financial and Analytics Backbone",
      description:
        "Kaluna developed a comprehensive Financial and Accounting ERP for Kaluna Analytic to automate financial journaling, monitor real-time cash flow, manage company transactions, and generate accurate financial reports through one centralized platform.",
      gallery: [
        "/image/projects/altatic-analytic/2.webp",
        "/image/projects/altatic-analytic/3.webp",
      ],
    },

    challenges: {
      label: "The Challenge",
      title: "Scattered Financial Records and Limited Financial Visibility",
      items: [
        {
          icon: "database",
          title: "Siloed Accounting Data",
          desc: "Financial records and departmental budgets were managed through separate spreadsheets, resulting in inconsistent and duplicated data.",
        },
        {
          icon: "report",
          title: "Delayed Financial Closing",
          desc: "Monthly and annual financial closing processes required extensive manual reconciliation and verification.",
        },
        {
          icon: "visualization",
          title: "Limited Financial Oversight",
          desc: "Management had limited access to real-time information regarding cash flow, expenses, revenue, and the company's overall financial position.",
        },
        {
          icon: "decision",
          title: "Manual Invoicing Process",
          desc: "Invoices, payment records, accounts receivable, and transaction follow-ups were managed manually by the finance team.",
        },
      ],
    },

    solutions: {
      label: "Our Solution",
      title:
        "Kaluna built a unified Financial and Accounting ERP that automates financial operations and delivers real-time business intelligence.",
      background_image: "/image/projects/altatic-analytic/1.webp",
      items: [
        {
          title: "Automated Ledger Journaling",
          desc: "Every verified transaction is automatically recorded and assigned to the appropriate general ledger account.",
          image_url: "/image/projects/altatic-analytic/1.webp",
        },
        {
          title: "Real-Time Financial Analytics",
          desc: "An integrated dashboard provides live visibility into cash flow, revenue, expenses, accounts payable, and accounts receivable.",
          image_url: "/image/projects/altatic-analytic/2.webp",
        },
        {
          title: "Automated Financial Reporting",
          desc: "Balance sheets, income statements, cash flow reports, and transaction summaries can be generated instantly.",
          image_url: "/image/projects/altatic-analytic/3.webp",
        },
      ],
    },

    tech_stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Python", icon: "python" },
      { name: "Git", icon: "git" },
    ],

    workflow: {
      label: "Our Development Process",
      title: "How We Developed the Kaluna Analytic Financial ERP",
      items: [
        {
          step: "01",
          title: "Financial Workflow Mapping",
          desc: "Analyzing financial processes, transaction flows, approval procedures, reporting requirements, and the company's chart of accounts.",
          image_url: "/image/ourworkflow/1.webp",
        },
        {
          step: "02",
          title: "System Architecture",
          desc: "Designing a secure and scalable financial architecture with structured transaction records, access controls, and audit trails.",
          image_url: "/image/ourworkflow/2.webp",
        },
        {
          step: "03",
          title: "Financial Module Development",
          desc: "Developing modules for invoicing, expenses, income, budgeting, asset management, taxation, and financial reporting.",
          image_url: "/image/ourworkflow/3.webp",
        },
        {
          step: "04",
          title: "Financial Testing and Deployment",
          desc: "Testing calculations, transaction accuracy, reporting consistency, user permissions, and high-volume financial data before deployment.",
          image_url: "/image/ourworkflow/4.webp",
        },
      ],
    },

    result: {
      label: "Result and Impact",
      title: "Improving Financial Accuracy, Visibility, and Decision-Making",
      description:
        "The Financial ERP provides Kaluna Analytic with a centralized platform for maintaining accurate financial records, automating repetitive accounting activities, and monitoring the company's financial health in real time.",
      highlights: [
        {
          title: "Faster Financial Closing",
          desc: "Monthly financial closing can be completed more efficiently through automated transaction recording and reconciliation.",
        },
        {
          title: "Real-Time Financial Visibility",
          desc: "Management can instantly monitor revenue, expenses, cash position, outstanding invoices, and other key financial indicators.",
        },
        {
          title: "Structured Financial Reporting",
          desc: "Financial statements and operational reports are generated from centralized and consistently updated financial data.",
        },
      ],
      image_url: "/image/projects/altatic-analytic/1.webp",
    },

    showcase: {
      image_url: "/image/projects/altatic-analytic/2.webp",
      alt: "Kaluna Analytic Financial ERP Interface",
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