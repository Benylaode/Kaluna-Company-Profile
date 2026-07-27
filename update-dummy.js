const fs = require('fs');
let content = fs.readFileSync('src/lib/dummy.ts', 'utf8');

content = content.replace(
  /slug: "web-media-profile"[\s\S]*?(?=\/\/ ========================================|\n  \];)/,
  `slug: "webmart-pos-system",
    client: "WEBMART RETAIL",
    title: "Point of Sales (POS) System for WebMart",
    desc: "An integrated Retail & POS Management ERP designed to synchronize multi-store inventory, cashier transactions, and real-time sales reporting.",
    category: "Retail & POS Management",

    images: [
      "/image/projects/web-media-profile/1.webp",
      "/image/projects/web-media-profile/2.webp",
      "/image/projects/web-media-profile/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2025",

      overview: {
        label: "Project Overview",
        title: "Modernizing Retail Operations Through Integrated POS ERP",
        description: "Kaluna developed a centralized Point of Sales platform that connects WebMart's multi-branch retail operations, ensuring seamless synchronization between front-end cashiers and back-office inventory.",
        gallery: [
          "/image/projects/web-media-profile/2.webp",
          "/image/projects/web-media-profile/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title: "Disconnected Cashier Systems and Inventory Mismatches",
        items: [
          {
            icon: "brand",
            title: "Manual Stock Sync",
            desc: "Stock levels across different branches were manually updated, leading to frequent out-of-stock scenarios.",
          },
          {
            icon: "content",
            title: "Slow Checkouts",
            desc: "Legacy cashier terminals were sluggish and disconnected from the central pricing database.",
          },
          {
            icon: "responsive",
            title: "Fragmented Sales Data",
            desc: "Daily sales reports from multiple stores had to be manually compiled by the finance team.",
          },
          {
            icon: "conversion",
            title: "Loyalty Program Issues",
            desc: "Customer membership points could not be synced properly across different store branches.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title: "Kaluna deployed a unified Retail & POS ERP for fast checkouts and real-time multi-store synchronization.",
        background_image: "/image/projects/web-media-profile/1.webp",
        items: [
          {
            title: "Cloud-Connected POS Terminals",
            desc: "Fast and reliable cashier interfaces capable of offline mode with auto-sync capabilities.",
            image_url: "/image/projects/web-media-profile/1.webp",
          },
          {
            title: "Centralized Inventory Hub",
            desc: "Live stock deduction across all branches the moment a transaction is completed.",
            image_url: "/image/projects/web-media-profile/2.webp",
          },
          {
            title: "Automated Sales Analytics",
            desc: "Real-time dashboard for store managers to track top-selling items and daily revenue.",
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
        title: "How We Built the WebMart POS System",
        items: [
          {
            step: "01",
            title: "Retail Workflow Mapping",
            desc: "Analyzing peak-hour cashier operations, barcode logic, and inventory deduction flows.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "System Architecture",
            desc: "Designing an offline-first POS architecture with a robust cloud synchronization engine.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "Hardware Integration",
            desc: "Connecting thermal printers, barcode scanners, and cash drawers to the web-based POS.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Deployment & Training",
            desc: "Rolling out the system branch by branch and training staff for smooth adoption.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title: "Achieving 100% Stock Accuracy and Faster Checkouts",
        description: "The new POS ERP successfully eliminated inventory discrepancies and reduced customer waiting time at the checkout counters.",
        highlights: [
          {
            title: "Real-Time Stock Sync",
            desc: "Inventory levels are instantly updated across the entire retail network.",
          },
          {
            title: "Faster Transactions",
            desc: "Checkout speed increased significantly with optimized barcode scanning.",
          },
          {
            title: "Automated Reporting",
            desc: "End-of-day sales reports are generated automatically for headquarters.",
          },
        ],
        image_url: "/image/projects/web-media-profile/1.webp",
      },

      showcase: {
        image_url: "/image/projects/web-media-profile/2.webp",
        alt: "WebMart POS System Interface",
      },
    }),
  },
  `
);

content = content.replace(
  /slug: "artic-complex-web"[\s\S]*?(?=\/\/ ========================================|\n  \];)/,
  `slug: "artic-hris-erp",
    client: "ARTIC GROUP",
    title: "HR & Payroll Automation for Artic",
    desc: "A centralized HRIS ERP platform developed to automate payroll, attendance tracking, employee lifecycle, and performance evaluations.",
    category: "HR & Payroll Automation",

    images: [
      "/image/projects/artic-complex-web/1.webp",
      "/image/projects/artic-complex-web/2.webp",
      "/image/projects/artic-complex-web/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2026",

      overview: {
        label: "Project Overview",
        title: "Streamlining Workforce Management with HRIS Automation",
        description: "Artic Group required a robust HR & Payroll ERP capable of handling complex shift schedules, automated salary calculations, tax deductions, and employee performance tracking across multiple regional offices.",
        gallery: [
          "/image/projects/artic-complex-web/2.webp",
          "/image/projects/artic-complex-web/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title: "Manual Payroll Calculation and Fragmented HR Data",
        items: [
          {
            icon: "database",
            title: "Messy Attendance Data",
            desc: "Data from multiple fingerprint machines was consolidated manually, causing frequent delays.",
          },
          {
            icon: "users",
            title: "Complex Overtime Rules",
            desc: "Calculating shifts and overtime pay for hundreds of employees was prone to human error.",
          },
          {
            icon: "report",
            title: "Manual Tax & BPJS",
            desc: "Tax (Pph21) and insurance deductions were calculated using complex spreadsheets.",
          },
          {
            icon: "scale",
            title: "Poor Employee Portal",
            desc: "Employees had no easy way to request leave, check payslips, or track their remaining time off.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title: "Kaluna engineered a comprehensive HR & Payroll ERP to automate the entire employee lifecycle.",
        background_image: "/image/projects/artic-complex-web/1.webp",
        items: [
          {
            title: "Automated Payroll Engine",
            desc: "One-click payroll generation with integrated tax and insurance calculations.",
            image_url: "/image/projects/artic-complex-web/1.webp",
          },
          {
            title: "Biometric Integration",
            desc: "Direct synchronization with office fingerprint and facial recognition attendance machines.",
            image_url: "/image/projects/artic-complex-web/2.webp",
          },
          {
            title: "Employee Self-Service (ESS)",
            desc: "A dedicated portal for staff to request leave, view payslips, and manage profiles.",
            image_url: "/image/projects/artic-complex-web/3.webp",
          },
        ],
      },

      tech_stack: [
        { name: "Laravel", icon: "laravel" },
        { name: "PHP", icon: "php" },
        { name: "MySQL", icon: "mysql" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Git", icon: "git" },
      ],

      workflow: {
        label: "Our Development Process",
        title: "How We Automated Artic's HR Operations",
        items: [
          {
            step: "01",
            title: "HR Policy Assessment",
            desc: "Mapping out company policies on leaves, shifts, overtime, and salary structures.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "System & Database Design",
            desc: "Architecting a secure database to handle sensitive employee records and payroll history.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "Hardware Integration",
            desc: "Connecting the HRIS ERP seamlessly with existing biometric attendance devices.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Parallel Run & Go-Live",
            desc: "Testing automated payroll against manual calculations to ensure 100% accuracy.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title: "Achieving Zero-Error Payroll and Transparent HR Operations",
        description: "The HRIS ERP transformed Artic Group's HR department, reducing payroll processing time from days to just a few hours.",
        highlights: [
          {
            title: "Error-Free Payroll",
            desc: "Automated tax and overtime calculations eliminated salary disputes.",
          },
          {
            title: "Empowered Employees",
            desc: "Staff can easily manage their leave requests through the ESS portal.",
          },
          {
            title: "Time Efficiency",
            desc: "HR managers save weeks of administrative work every month.",
          },
        ],
        image_url: "/image/projects/artic-complex-web/1.webp",
      },

      showcase: {
        image_url: "/image/projects/artic-complex-web/2.webp",
        alt: "Artic HRIS ERP Dashboard",
      },
    }),
  },
  `
);

content = content.replace(
  /slug: "altatic-analytic"[\s\S]*?(?=\/\/ ========================================|\n  \];)/,
  `slug: "altatic-finance-erp",
    client: "ALTATIC CORP",
    title: "Financial & Accounting ERP for Altatic",
    desc: "An advanced Financial Accounting System providing real-time cash flow monitoring, automated bookkeeping, and fiscal reporting.",
    category: "Financial Accounting System",

    images: [
      "/image/projects/altatic-analytic/1.webp",
      "/image/projects/altatic-analytic/2.webp",
      "/image/projects/altatic-analytic/3.webp",
    ],

    content_json: JSON.stringify({
      year: "2026",

      overview: {
        label: "Project Overview",
        title: "Establishing a Centralized Financial Backbone",
        description: "Kaluna developed a comprehensive Financial ERP that helps Altatic Corp automate journaling, track real-time cash flow, and generate compliance-ready financial statements effortlessly.",
        gallery: [
          "/image/projects/altatic-analytic/2.webp",
          "/image/projects/altatic-analytic/3.webp",
        ],
      },

      challenges: {
        label: "The Challenge",
        title: "Scattered Financial Records and Delayed Reporting",
        items: [
          {
            icon: "database",
            title: "Siloed Accounting",
            desc: "Different departments managed budgets in separate spreadsheets, causing discrepancies.",
          },
          {
            icon: "report",
            title: "Delayed Closing",
            desc: "Month-end and year-end closing processes took weeks to reconcile.",
          },
          {
            icon: "visualization",
            title: "Lack of Oversight",
            desc: "Executives had no real-time visibility into the company's daily cash position.",
          },
          {
            icon: "decision",
            title: "Manual Invoicing",
            desc: "Invoicing and accounts receivable tracking were handled manually.",
          },
        ],
      },

      solutions: {
        label: "Our Solution",
        title: "Kaluna built a unified Financial ERP that automates accounting and provides deep financial intelligence.",
        background_image: "/image/projects/altatic-analytic/1.webp",
        items: [
          {
            title: "Automated Ledger Journaling",
            desc: "Transactions automatically post to the correct general ledger accounts.",
            image_url: "/image/projects/altatic-analytic/1.webp",
          },
          {
            title: "Real-Time Financial Dashboard",
            desc: "Live tracking of cash flow, accounts payable, and accounts receivable.",
            image_url: "/image/projects/altatic-analytic/2.webp",
          },
          {
            title: "One-Click Statements",
            desc: "Instant generation of balance sheets, income statements, and cash flow reports.",
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
        title: "How We Developed Altatic's Financial ERP",
        items: [
          {
            step: "01",
            title: "Chart of Accounts Mapping",
            desc: "Structuring the financial accounts to align with Altatic's exact corporate structure.",
            image_url: "/image/ourworkflow/1.webp",
          },
          {
            step: "02",
            title: "System Architecture",
            desc: "Designing secure, immutable transactional databases to prevent data tampering.",
            image_url: "/image/ourworkflow/2.webp",
          },
          {
            step: "03",
            title: "Module Development",
            desc: "Building modules for invoicing, expenses, asset depreciation, and reporting.",
            image_url: "/image/ourworkflow/3.webp",
          },
          {
            step: "04",
            title: "Auditing & Go-Live",
            desc: "Simulating high-volume transactions to ensure perfect mathematical accuracy.",
            image_url: "/image/ourworkflow/4.webp",
          },
        ],
      },

      result: {
        label: "Result and Impact",
        title: "Accelerating Financial Operations and Decision Making",
        description: "The Financial ERP provides Altatic Corp with a reliable platform for maintaining fiscal health and automating tedious accounting tasks.",
        highlights: [
          {
            title: "Instant Financial Closing",
            desc: "Month-end closing is now completed in days instead of weeks.",
          },
          {
            title: "Executive Clarity",
            desc: "Leadership has instant access to real-time financial health indicators.",
          },
          {
            title: "Improved Cash Flow",
            desc: "Automated invoicing reminders significantly reduced accounts receivable delays.",
          },
        ],
        image_url: "/image/projects/altatic-analytic/1.webp",
      },

      showcase: {
        image_url: "/image/projects/altatic-analytic/2.webp",
        alt: "Altatic Financial ERP Interface",
      },
    }),
  },
  `
);

fs.writeFileSync('src/lib/dummy.ts', content);
console.log('Update complete!');
