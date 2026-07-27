const fs = require('fs');

// 1. Update dummy.ts
let dummy = fs.readFileSync('src/lib/dummy.ts', 'utf8');

dummy = dummy.replace(/category: ".*",/g, (match, offset) => {
  // Let's check which project this category belongs to by context
  return match;
});

// Direct replacement in dummy.ts:
dummy = dummy.replace(
  /slug: "myboss-iot-system",[\s\S]*?category: ".*?",/,
  `slug: "myboss-iot-system",\n    client: "MY BOSS",\n    title: "IoT System for My Boss (Nasmoco)",\n    desc: "A smart IoT system designed to monitor and manage automotive operational devices in real-time.",\n    category: "IoT & Asset Monitoring ERP",`
);

dummy = dummy.replace(
  /slug: "sinau-print-erp",[\s\S]*?category: ".*?",/,
  `slug: "sinau-print-erp",\n    client: "SINAU PRINT",\n    title: "ERP System for Sinau Print",\n    desc: "An integrated ERP solution designed to manage printing operations, inventory, customer orders, automated workflows, and financial records.",\n    category: "Printing & Operational ERP",`
);

dummy = dummy.replace(
  /slug: "webmart-pos-system",[\s\S]*?category: ".*?",/,
  `slug: "webmart-pos-system",\n    client: "WEBMART RETAIL",\n    title: "Point of Sales (POS) System for WebMart",\n    desc: "An integrated Retail & POS Management ERP designed to synchronize multi-store inventory, cashier transactions, and real-time sales reporting.",\n    category: "Retail & Point of Sales (POS) ERP",`
);

dummy = dummy.replace(
  /slug: "artic-hris-erp",[\s\S]*?category: ".*?",/,
  `slug: "artic-hris-erp",\n    client: "ARTIC GROUP",\n    title: "HR & Payroll Automation for Artic",\n    desc: "A centralized HRIS ERP platform developed to automate payroll, attendance tracking, employee lifecycle, and performance evaluations.",\n    category: "HRIS & Payroll Automation ERP",`
);

dummy = dummy.replace(
  /slug: "altatic-finance-erp",[\s\S]*?category: ".*?",/,
  `slug: "altatic-finance-erp",\n    client: "ALTATIC CORP",\n    title: "Financial & Accounting ERP for Altatic",\n    desc: "An advanced Financial Accounting System providing real-time cash flow monitoring, automated bookkeeping, and fiscal reporting.",\n    category: "Financial & Accounting ERP",`
);

fs.writeFileSync('src/lib/dummy.ts', dummy);

// 2. Update WorksClient.tsx types array
let worksClient = fs.readFileSync('app/works/WorksClient.tsx', 'utf8');

const newTypes = `const types = [
  "IoT & Asset Monitoring ERP",
  "Printing & Operational ERP",
  "Retail & Point of Sales (POS) ERP",
  "HRIS & Payroll Automation ERP",
  "Financial & Accounting ERP"
];`;

worksClient = worksClient.replace(/const types = \[[\s\S]*?\];/, newTypes);
fs.writeFileSync('app/works/WorksClient.tsx', worksClient);

console.log("Updated ERP categories accurately!");
