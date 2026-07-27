const fs = require('fs');

// 1. Update dummy.ts
let dummy = fs.readFileSync('src/lib/dummy.ts', 'utf8');

const articNewContent = `{
    slug: "artic-analytical-science",
    client: "ARTIC GROUP",
    title: "Analytical Science System for Artic",
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
  }`;

dummy = dummy.replace(/\{\s*slug: "artic-hris-erp"[\s\S]*?\},\n  \}/, articNewContent + ',\n  }');
fs.writeFileSync('src/lib/dummy.ts', dummy);

// 2. Update WorksClient.tsx
let worksClient = fs.readFileSync('app/works/WorksClient.tsx', 'utf8');

worksClient = worksClient.replace(
  /"HRIS & Payroll Automation ERP"/g,
  '"Analytical Science ERP"'
);

fs.writeFileSync('app/works/WorksClient.tsx', worksClient);

console.log("Updated Artic to Analytical Science ERP!");
