const fs = require('fs');
let content = fs.readFileSync('src/lib/dummy.ts', 'utf8');

// 1. My Boss (IoT -> EAM ERP)
content = content.replace(
  /category: "IoT System Development",/,
  'category: "Enterprise Asset Management (EAM) ERP",'
);

// 2. Sinau Print (ERP System -> MRP ERP)
content = content.replace(
  /category: "ERP & System Integration",/,
  'category: "Manufacturing Resource Planning (MRP) ERP",'
);

// 3. WebMart (POS -> Retail ERP)
content = content.replace(
  /category: "Retail & POS Management",/,
  'category: "Retail & Supply Chain ERP",'
);

// 4. Artic (HR -> HRIS ERP)
content = content.replace(
  /category: "HR & Payroll Automation",/,
  'category: "Human Resource Information System (HRIS) ERP",'
);

// 5. Altatic (Finance -> FICO ERP)
content = content.replace(
  /category: "Financial Accounting System",/,
  'category: "Financial & Accounting Management ERP",'
);

fs.writeFileSync('src/lib/dummy.ts', content);
console.log("Categories updated.");
