// src/lib/dummy.ts

export const testimonials = [
  {
    client_name: "Ishaq Nfarara",
    role: "Building Operations Manager",
    company_name: "Queen City Mall",
    content:
      "Kaluna Technology engineered an integrated smart facility & energy telemetry system for our commercial buildings. Real-time sensor alerts and ambient monitoring streamlined our operations and cut energy wastage significantly.",
    avatar_url: "/image/mitra/persone/Ishaq Nfarara.webp",
    logo_url: "/image/mitra/15.webp",
  },
  {
    client_name: "Simon Agung Hoedoyo",
    role: "Fleet Operations Lead",
    company_name: "Aliansea Logistics / MyBOS",
    content:
      "The MyBOS IoT fleet telemetry deployed by Kaluna gave our dispatch control room 100% real-time satellite visibility and automated e-POD, cutting vehicle fuel loss by over 22% across regional routes.",
    avatar_url: "/image/mitra/persone/Simon Agung Hoedoyo.webp",
    logo_url: "/image/mitra/16.webp",
  },
  {
    client_name: "Ibnu Sapto Adi",
    role: "General Manager",
    company_name: "PT Bahtera Sapta Permata",
    content:
      "Kaluna connected our heavy machinery and industrial sensors into a centralized telemetry dashboard. Unplanned downtime has been virtually eliminated through their automated predictive alert engine.",
    avatar_url: "/image/mitra/persone/ibnu saptro.webp",
    logo_url: "/image/mitra/2.webp",
  },
  {
    client_name: "Anisa Apriani",
    role: "Operations & Technology Director",
    company_name: "Sinau Print IoT Operations",
    content:
      "Kaluna integrated smart sensors across our printing machinery and production line, automating equipment status tracking and synchronizing machine telemetry directly with our central ERP workflows.",
    avatar_url: "/image/mitra/persone/anisa.webp",
    logo_url: "/image/mitra/11.webp",
  },
  {
    client_name: "Goenawan Permadi",
    role: "Executive Director",
    company_name: "Suara Merdeka Network",
    content:
      "Kaluna Technology demonstrated deep mastery of real-time systems and distributed infrastructure. Their team communicates clearly and executes complex engineering milestones right on schedule.",
    avatar_url: "/image/mitra/persone/gunawan.webp",
    logo_url: "/image/mitra/13.webp",
  },
  {
    client_name: "Mayakharta Siahaan",
    role: "Operations Logistics Manager",
    company_name: "X1-Tire Distribution",
    content:
      "With Kaluna's vehicle telemetry and warehouse sensor integration, our distribution hubs maintain complete visibility over tire inventory movement and delivery fleet transit times.",
    avatar_url: "/image/mitra/persone/mayakarta.webp",
    logo_url: "/image/mitra/14.webp",
  },
];

export const seedDatabase = (db: any) => {
  console.log('🔄 Memulai proses pengisian data dummy IoT Kaluna...');

  // ==========================================
  // WORKS / PROJECT DATA (SMART IOT SYSTEMS)
  // ==========================================

  const works = [
    // 1. MYBOS — Connected Operational IoT Ecosystem & Fleet Telemetry
    {
      slug: "myboss-iot-system",
      client: "MYBOS",
      title: "MyBOS Connected Operational IoT Ecosystem & Fleet Telemetry",
      desc: "Connected IoT hardware and command telemetry bridging commercial vehicle fleets, remote sensors, and logistics hubs into real-time operational transport intelligence.",
      category: "Connected Asset & Fleet Telemetry",
      images: [
        "/image/projects/myboss-iot-system/1.webp",
        "/image/projects/myboss-iot-system/2.webp",
        "/image/projects/myboss-iot-system/3.webp",
      ],
      content_json: JSON.stringify({
        year: "2026",
        overview: {
          label: "Project Overview",
          title: "Bridging Commercial Logistics Fleets with Real-Time Command Telemetry",
          description: "Managing commercial logistics fleets across vast regional routes without IoT integration leaves dispatchers blind to vehicle locations, engine idling, transit delays, and fuel theft. Kaluna Technology engineered and deployed the MyBOS IoT ecosystem—integrating onboard telematics sensors, GPS tracking units, and an automated central dispatch command center that monitors every vehicle movement in real time.",
          gallery: [
            "/image/projects/myboss-iot-system/2.webp",
            "/image/projects/myboss-iot-system/3.webp",
          ],
        },
        challenges: {
          label: "The Challenge",
          title: "Operational Blind Spots Between Control Rooms, Drivers, and Field Assets",
          items: [
            { icon: "monitoring", title: "Zero Real-Time Route Visibility", desc: "Dispatchers had no empirical telemetry on transit routes, vehicle speed, or delivery delays across regional corridors." },
            { icon: "alert", title: "Fuel Theft & Excessive Idling", desc: "Unmonitored engine runtimes and fuel drainage caused a 25% overhead leak in total fleet operating expenses." },
            { icon: "order", title: "Paper Manifests & Delivery Disputes", desc: "Manual paper waybills delayed billing cycles by weeks and caused recurring customer delivery disputes." },
            { icon: "device", title: "Sudden Roadside Breakdowns", desc: "Lack of engine diagnostics telemetry resulted in unexpected mechanical failures during critical delivery runs." },
          ],
        },
        solutions: {
          label: "Our Solution",
          title: "Kaluna deployed custom GPS telemetry, engine diagnostic sensors, and digital proof-of-delivery connected directly to a central cloud dashboard.",
          background_image: "/image/projects/myboss-iot-system/1.webp",
          items: [
            { title: "Live IoT Telemetry & Satellite GPS Tracking", desc: "Real-time positioning and continuous vehicle sensor feeds delivering second-by-second visibility to dispatchers.", image_url: "/image/projects/myboss-iot-system/1.webp" },
            { title: "Driver Behavior & Engine Telematics", desc: "Automated tracking of harsh braking, rapid acceleration, idling, and component wear to prevent roadside failures.", image_url: "/image/projects/myboss-iot-system/2.webp" },
            { title: "Digital Proof of Delivery (e-POD) & Billing", desc: "Timestamped GPS coordinates, digital signatures, and cargo photo capture for instantaneous invoice reconciliation.", image_url: "/image/projects/myboss-iot-system/3.webp" },
          ],
        },
        tech_stack: [
          { name: "MQTT", icon: "git" },
          { name: "IoT Edge Gateways", icon: "nextjs" },
          { name: "Satellite GPS", icon: "typescript" },
          { name: "PostgreSQL & TimescaleDB", icon: "postgresql" },
          { name: "WebSockets", icon: "nodejs" },
        ],
        workflow: {
          label: "Our Implementation Process",
          title: "Deploying the MyBOS Telemetry Architecture",
          items: [
            { step: "01", title: "Fleet & Route Diagnostics", desc: "Audited vehicle models, operational routes, and fuel leakage points across logistics hubs.", image_url: "/image/ourworkflow/1.webp" },
            { step: "02", title: "Hardware & Sensor Installation", desc: "Mounted OBD-II diagnostics units, tamper-proof fuel level sensors, and satellite GPS receivers.", image_url: "/image/ourworkflow/2.webp" },
            { step: "03", title: "Cloud Gateway & Telemetry Streaming", desc: "Engineered ultra-reliable MQTT brokers and low-latency cloud data streaming pipelines.", image_url: "/image/ourworkflow/3.webp" },
            { step: "04", title: "Dispatch Command Center Launch", desc: "Rolled out real-time dispatch dashboard, driver mobile apps, and automated alert webhooks.", image_url: "/image/ourworkflow/4.webp" },
          ],
        },
        result: {
          label: "Result and Impact",
          title: "22% Fuel Reduction & Zero Delivery Dispute Resolutions",
          description: "The MyBOS connected ecosystem transformed commercial transport operations, delivering complete command over transit assets and drastic operational savings.",
          highlights: [
            { title: "-22% Fleet Fuel Expenditure", desc: "Intelligent route optimization and idling alerts dramatically cut monthly fuel consumption." },
            { title: "100% Real-Time Fleet Visibility", desc: "Continuous satellite telemetry across 500+ commercial transport units." },
            { title: "0 Delivery Disputes", desc: "Digital Proof of Delivery (e-POD) resolved billing discrepancies instantaneously." },
          ],
          image_url: "/image/projects/myboss-iot-system/1.webp",
        },
        showcase: {
          image_url: "/image/projects/myboss-iot-system/case-study-angle-02.webp",
          alt: "MyBOS IoT Fleet Telemetry and Command Center",
        },
      }),
    },

    // 2. INDUSTRIAL AUTOMATION & EDGE COMPUTING
    {
      slug: "industrial-automation-edge",
      client: "INDUSTRIAL AUTOMATION",
      title: "Industrial Automation & Edge Computing Infrastructure",
      desc: "Connecting plant machinery, industrial PLCs, and edge gateways to automate manufacturing workflows, monitor equipment status in real-time, and prevent unplanned downtime.",
      category: "Industrial Automation",
      images: [
        "/image/iot/industrial-automation-edge.svg",
        "/image/iot/scalable-systems-iot.webp",
        "/image/iot/service-section-smart-iot-system.svg",
      ],
      content_json: JSON.stringify({
        year: "2026",
        overview: {
          label: "Project Overview",
          title: "Transforming Manufacturing Floor Machinery into Smart Connected Assets",
          description: "Industrial manufacturing plants often run legacy programmable logic controllers (PLCs) in isolated data silos, making early fault detection impossible and risking millions in unplanned downtime. Kaluna Technology engineered custom industrial edge computing gateways that interface with Modbus, RS-485, and CAN-bus machinery, relaying continuous vibration, temperature, and cycle metrics to central control rooms.",
          gallery: [
            "/image/iot/scalable-systems-iot.webp",
            "/image/iot/service-section-smart-iot-system.svg",
          ],
        },
        challenges: {
          label: "The Challenge",
          title: "Legacy Machine Silos & Expensive Reactive Maintenance",
          items: [
            { icon: "device", title: "Siloed Industrial PLCs", desc: "Machine controllers operated without networked connectivity, requiring manual technician floor checks." },
            { icon: "alert", title: "Unplanned Production Stoppages", desc: "Component overheating and mechanical wear went undetected until complete machine seizure occurred." },
            { icon: "analytics", title: "Zero Real-Time OEE Metrics", desc: "Plant managers lacked live data on Overall Equipment Effectiveness (OEE) and operational uptime." },
            { icon: "monitoring", title: "Safety & Quality Compliance Risks", desc: "Manual threshold recording failed to satisfy rigorous industrial ISO safety standards." },
          ],
        },
        solutions: {
          label: "Our Solution",
          title: "Kaluna engineered rugged industrial edge computing gateways with multi-protocol PLC interfacing and real-time predictive failure alerts.",
          background_image: "/image/iot/industrial-automation-edge.svg",
          items: [
            { title: "Rugged Industrial Edge Gateways", desc: "High-reliability hardware supporting Modbus, OPC-UA, and RS485 communication protocols.", image_url: "/image/iot/industrial-automation-edge.svg" },
            { title: "Predictive Anomaly Detection", desc: "Edge algorithms analyzing temperature deviations and vibration spikes to trigger preventative maintenance.", image_url: "/image/iot/scalable-systems-iot.webp" },
            { title: "Centralized Plant Command Dashboard", desc: "Real-time production floor telemetry mapping machine load, throughput, and operational efficiency.", image_url: "/image/iot/service-section-smart-iot-system.svg" },
          ],
        },
        tech_stack: [
          { name: "Modbus / OPC-UA", icon: "git" },
          { name: "Edge Computing", icon: "nextjs" },
          { name: "MQTT Broker", icon: "nodejs" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "TypeScript", icon: "typescript" },
        ],
        workflow: {
          label: "Our Implementation Process",
          title: "Engineering Industrial Edge Telemetry",
          items: [
            { step: "01", title: "Floor Machinery Audit", desc: "Cataloged PLC models, signal outputs, power requirements, and safety compliance baselines.", image_url: "/image/ourworkflow/1.webp" },
            { step: "02", title: "Edge Hardware Architecture", desc: "Designed isolated electrical schematics, opto-isolated interfaces, and rugged enclosures.", image_url: "/image/ourworkflow/2.webp" },
            { step: "03", title: "Firmware & Protocol Parsing", desc: "Coded custom microcode for sub-second telemetry sampling and anomaly threshold detection.", image_url: "/image/ourworkflow/3.webp" },
            { step: "04", title: "Production Line Integration", desc: "Connected edge nodes to central ERP production queues and conducted safety stress tests.", image_url: "/image/ourworkflow/4.webp" },
          ],
        },
        result: {
          label: "Result and Impact",
          title: "48% Reduction in Unplanned Stoppages & Sub-Second Anomaly Alerts",
          description: "Plant managers achieved continuous real-time visibility across all production lines, dramatically boosting operational efficiency and equipment longevity.",
          highlights: [
            { title: "-48% Unplanned Machine Downtime", desc: "Preventative sensor alerts identified bearing wear before mechanical failure." },
            { title: "99.98% Telemetry Packet Delivery", desc: "Robust edge queuing ensured zero data loss even during network disconnects." },
            { title: "+18% Overall Equipment Effectiveness", desc: "Optimized production cycles driven by live telemetry insights." },
          ],
          image_url: "/image/iot/industrial-automation-edge.svg",
        },
        showcase: {
          image_url: "/image/iot/scalable-systems-iot.webp",
          alt: "Industrial Automation and Edge Computing Dashboard",
        },
      }),
    },

    // 3. SMART FACILITY & ENERGY MANAGEMENT
    {
      slug: "smart-facility-energy",
      client: "FACILITY & ENERGY",
      title: "Smart Facility & Energy Management Telemetry",
      desc: "Multi-sensor environmental telemetry, automated power and energy consumption tracking, ambient climate monitoring, and digital facility safety compliance.",
      category: "Facility & Energy Management",
      images: [
        "/image/iot/smart-facility-energy.svg",
        "/image/iot/case-enterprise-iot.webp",
        "/image/iot/hero-smart-iot-system.svg",
      ],
      content_json: JSON.stringify({
        year: "2026",
        overview: {
          label: "Project Overview",
          title: "Autonomous Facility Monitoring & Intelligent Energy Optimization",
          description: "Large commercial complexes and industrial campuses consume massive electrical power while relying on manual meter reads that overlook energy spikes and safety hazards. Kaluna deployed a distributed multi-sensor IoT network measuring power draw, ambient humidity, temperature, and air quality across commercial facilities, connected to an automated cloud analytics engine.",
          gallery: [
            "/image/iot/case-enterprise-iot.webp",
            "/image/iot/hero-smart-iot-system.svg",
          ],
        },
        challenges: {
          label: "The Challenge",
          title: "Uncontrolled Energy Waste & Manual Meter Recording",
          items: [
            { icon: "alert", title: "Heavy Peak Energy Surcharges", desc: "Commercial chillers and machinery ran during peak tariff hours without automated regulation." },
            { icon: "monitoring", title: "Delayed Hazard Detection", desc: "Electrical panel overheating and water leaks remained undetected until equipment damage occurred." },
            { icon: "device", title: "Manual Multi-Building Inspections", desc: "Facility engineering staff spent dozens of hours weekly collecting manual gauge readings." },
            { icon: "analytics", title: "Lack of ESG Carbon Accounting", desc: "Corporate stakeholders had no verifiable data on greenhouse emissions and energy efficiency." },
          ],
        },
        solutions: {
          label: "Our Solution",
          title: "Kaluna engineered an autonomous sensor grid with automated power load shedding, environmental monitoring, and instant incident dispatch.",
          background_image: "/image/iot/smart-facility-energy.svg",
          items: [
            { title: "Digital Power & Current Transformer Telemetry", desc: "Non-invasive CT sensors streaming phase voltage, power factor, and kilowatt consumption live.", image_url: "/image/iot/smart-facility-energy.svg" },
            { title: "Ambient Environmental & Hazard Grid", desc: "Wireless sensor nodes monitoring temperature, humidity, CO2 levels, and water leakage.", image_url: "/image/iot/case-enterprise-iot.webp" },
            { title: "Automated Load Shedding & HVAC Control", desc: "Smart relays automatically cycling non-critical loads during high-tariff grid hours.", image_url: "/image/iot/hero-smart-iot-system.svg" },
          ],
        },
        tech_stack: [
          { name: "LoRaWAN & Zigbee", icon: "git" },
          { name: "MQTT Streaming", icon: "nextjs" },
          { name: "Edge Microcontrollers", icon: "typescript" },
          { name: "TimescaleDB", icon: "postgresql" },
          { name: "Next.js", icon: "nodejs" },
        ],
        workflow: {
          label: "Our Implementation Process",
          title: "Deploying Campus-Wide Sensor Networks",
          items: [
            { step: "01", title: "Facility Energy Baseline", desc: "Audited main switchboards, HVAC distribution, and priority monitoring zones.", image_url: "/image/ourworkflow/1.webp" },
            { step: "02", title: "Wireless Sensor Grid Design", desc: "Engineered robust LoRaWAN mesh coverage across concrete floors and underground basements.", image_url: "/image/ourworkflow/2.webp" },
            { step: "03", title: "Telemetry Gateway Deployment", desc: "Installed secure gateways streaming encrypted telemetry packets to cloud servers.", image_url: "/image/ourworkflow/3.webp" },
            { step: "04", title: "Automated Threshold Calibration", desc: "Configured intelligent alerts for thermal anomalies, voltage spikes, and emergency shutoffs.", image_url: "/image/ourworkflow/4.webp" },
          ],
        },
        result: {
          label: "Result and Impact",
          title: "31% Lower Energy Consumption & 100% Automated Facility Compliance",
          description: "Facility operators achieved dramatic reductions in utility bills and established an autonomous safety net for critical building infrastructure.",
          highlights: [
            { title: "-31% Facility Power Waste", desc: "Automated load shedding and chiller optimization slashed monthly electric utility overhead." },
            { title: "24/7 Thermal Anomaly Detection", desc: "Prevented two major electrical fire hazards through instant temperature threshold alerts." },
            { title: "Zero Manual Meter Logging", desc: "100% automated telemetry data logging compliant with national green building standards." },
          ],
          image_url: "/image/iot/smart-facility-energy.svg",
        },
        showcase: {
          image_url: "/image/iot/case-enterprise-iot.webp",
          alt: "Smart Facility and Energy Telemetry Dashboard",
        },
      }),
    },

    // 4. MYBOS — Transport Command & Logistics Dispatch Telemetry
    {
      slug: "myboss-logistics-fleet-management",
      client: "MYBOS LOGISTICS",
      title: "MyBOS Transport Command & Real-Time Logistics Telemetry",
      desc: "Commercial fleet route optimization, automated digital delivery manifests (e-POD), and real-time transit telemetry across inter-city supply chains.",
      category: "Connected Asset & Fleet Telemetry",
      images: [
        "/image/iot/mybos-fleet-tracking.svg",
        "/image/iot/cover.webp",
        "/image/projects/myboss-iot-system/case-study-angle-02.webp",
      ],
      content_json: JSON.stringify({
        year: "2026",
        overview: {
          label: "Project Overview",
          title: "Real-Time Fleet Command Telemetry for Multi-Regional Supply Chains",
          description: "Operating commercial transport fleets without integrated IoT telematics created massive transit delays, route deviations, and delivery disputes. Kaluna engineered the MyBOS Logistics command module—providing live GPS satellite mapping, automated dispatch routing, and digital proof-of-delivery reconciliation.",
          gallery: [
            "/image/iot/cover.webp",
            "/image/projects/myboss-iot-system/case-study-angle-02.webp",
          ],
        },
        challenges: {
          label: "The Challenge",
          title: "Manual Dispatch Delays & Lack of Fleet Visibility",
          items: [
            { icon: "monitoring", title: "Route Blind Spots", desc: "Dispatchers had no way to track transit bottlenecks or verify driver stops in real time." },
            { icon: "alert", title: "Excessive Transit Idling", desc: "Unmonitored engine runtimes led to heavy fuel waste and elevated maintenance costs." },
            { icon: "order", title: "Paper Delivery Manifests", desc: "Manual paper signatures delayed invoice billing by days and risked document loss." },
            { icon: "device", title: "Customer ETA Inaccuracy", desc: "Clients received unreliable delivery estimates, damaging operational satisfaction." },
          ],
        },
        solutions: {
          label: "Our Solution",
          title: "Kaluna deployed continuous satellite telematics and a central web command console for real-time fleet dispatch.",
          background_image: "/image/iot/mybos-fleet-tracking.svg",
          items: [
            { title: "Continuous GPS & Speed Telematics", desc: "Sub-second satellite telemetry tracking vehicle location, speed, and geofencing boundaries.", image_url: "/image/iot/mybos-fleet-tracking.svg" },
            { title: "Electronic Proof of Delivery (e-POD)", desc: "Mobile driver workflow capturing recipient signatures and timestamped GPS coordinates.", image_url: "/image/iot/cover.webp" },
            { title: "Dynamic Route & Traffic Optimization", desc: "Automated routing algorithms guiding transport drivers away from congested transit corridors.", image_url: "/image/projects/myboss-iot-system/case-study-angle-02.webp" },
          ],
        },
        tech_stack: [
          { name: "MQTT", icon: "git" },
          { name: "Satellite GPS", icon: "nextjs" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "TypeScript", icon: "typescript" },
          { name: "WebSockets", icon: "nodejs" },
        ],
        workflow: {
          label: "Our Implementation Process",
          title: "Deploying Logistics Fleet Telematics",
          items: [
            { step: "01", title: "Transit Route Auditing", desc: "Mapped key delivery corridors, fleet specifications, and dispatch hub locations.", image_url: "/image/ourworkflow/1.webp" },
            { step: "02", title: "Telematics Hardware Mounting", desc: "Installed tamper-proof GPS units, OBD sensors, and mobile driver consoles.", image_url: "/image/ourworkflow/2.webp" },
            { step: "03", title: "Dispatch Gateway Integration", desc: "Streamed real-time vehicle telemetry into central logistics command software.", image_url: "/image/ourworkflow/3.webp" },
            { step: "04", title: "e-POD Verification & Rollout", desc: "Validated electronic proof of delivery workflows with warehouse dispatchers.", image_url: "/image/ourworkflow/4.webp" },
          ],
        },
        result: {
          label: "Result and Impact",
          title: "Zero Lost Shipments & 25% Faster Billing Cycles",
          description: "MyBOS logistics dispatchers gained full operational control, lowering transit costs and guaranteeing delivery reliability.",
          highlights: [
            { title: "100% Real-Time Route Visibility", desc: "Continuous satellite positioning across all active commercial transport units." },
            { title: "+25% Faster Invoice Billing", desc: "Instant e-POD submission eliminated paper waybill processing delays." },
            { title: "-18% Transit Fuel Overhead", desc: "Optimized route navigation and idling alerts reduced fleet fuel consumption." },
          ],
          image_url: "/image/iot/mybos-fleet-tracking.svg",
        },
        showcase: {
          image_url: "/image/iot/cover.webp",
          alt: "MyBOS Logistics Fleet Tracking and Dispatch Console",
        },
      }),
    },

    // 5. INDUSTRIAL MACHINERY & EQUIPMENT SENSOR IOT
    {
      slug: "smart-machinery-telemetry",
      client: "INDUSTRIAL MACHINERY",
      title: "Industrial Machinery & Equipment Sensor IoT",
      desc: "Connecting machine PLCs, vibration sensors, and thermal monitors directly to real-time operational ERP queues for predictive maintenance.",
      category: "Industrial Automation",
      images: [
        "/image/iot/sinau-print-iot.svg",
        "/image/iot/mybos-iot.svg",
        "/image/iot/case-study-angle-02.webp",
      ],
      content_json: JSON.stringify({
        year: "2026",
        overview: {
          label: "About the Project",
          title: "Connecting Industrial Production Machinery to Intelligent Cloud Telemetry",
          description: "Heavy production machinery experiences intense mechanical wear. Operating without real-time sensor oversight risks motor burnout and catastrophic production halts. Kaluna engineered a multi-sensor telemetry array monitoring equipment vibration, temperature, RPM, and power draw, linked directly to central enterprise ERP queues.",
          gallery: [
            "/image/iot/mybos-iot.svg",
            "/image/iot/case-study-angle-02.webp",
          ],
        },
        challenges: {
          label: "The Challenge",
          title: "Motor Burnouts, Thermal Runaway & Production Line Stalls",
          items: [
            { icon: "order", title: "Unchecked Motor Overheating", desc: "Thermal spikes during high-output production caused premature component burnout." },
            { icon: "inventory", title: "Vibration Bearing Wear", desc: "Mechanical bearing decay was undetected until severe machine stalling occurred." },
            { icon: "customer", title: "Cascading Production Delays", desc: "Unexpected machine halts held up subsequent assembly and packaging lines." },
            { icon: "workflow", title: "Manual Maintenance Logs", desc: "Maintenance was conducted reactively on arbitrary calendar dates rather than actual run hours." },
          ],
        },
        solutions: {
          label: "Our Solution",
          title: "Kaluna deployed industrial thermal and piezoelectric vibration sensors streaming real-time machine health directly to ERP dashboards.",
          background_image: "/image/iot/sinau-print-iot.svg",
          items: [
            { title: "Real-Time Machine Runtime Telemetry", desc: "Live tracking of motor temperature, RPM, and duty cycles via industrial edge gateways.", image_url: "/image/iot/sinau-print-iot.svg" },
            { title: "Automated Maintenance Work Orders", desc: "Automatic ERP ticket generation when vibration or operating hour thresholds are reached.", image_url: "/image/iot/mybos-iot.svg" },
            { title: "Predictive Equipment Lifecycle Analytics", desc: "Historical time-series telemetry forecasting component degradation before failure.", image_url: "/image/iot/case-study-angle-02.webp" },
          ],
        },
        tech_stack: [
          { name: "MQTT", icon: "git" },
          { name: "Industrial Edge PLC", icon: "nextjs" },
          { name: "Modbus RTU", icon: "typescript" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "WebSockets", icon: "nodejs" },
        ],
        workflow: {
          label: "Our Implementation Process",
          title: "Connecting Production Floor Sensors",
          items: [
            { step: "01", title: "Thermal & Vibration Profiling", desc: "Audited critical stress points across industrial production machinery.", image_url: "/image/ourworkflow/1.webp" },
            { step: "02", title: "Rugged Sensor Mounting", desc: "Installed opto-isolated temperature probes and accelerometer sensors.", image_url: "/image/ourworkflow/2.webp" },
            { step: "03", title: "ERP Telemetry Pipeline", desc: "Connected edge gateways to the central ERP production database via MQTT.", image_url: "/image/ourworkflow/3.webp" },
            { step: "04", title: "Emergency Cut-Off Calibration", desc: "Validated automated machine throttling under simulated thermal spikes.", image_url: "/image/ourworkflow/4.webp" },
          ],
        },
        result: {
          label: "Result and Impact",
          title: "3x Fewer Production Halts & +40% Machine Uptime",
          description: "Industrial operators eliminated catastrophic machine failures and synchronized equipment throughput with customer delivery deadlines.",
          highlights: [
            { title: "3x Fewer Production Halts", desc: "Preventative alerts stopped thermal burnout across active production lines." },
            { title: "+40% Operational Machine Uptime", desc: "Service intervals triggered by empirical wear rather than arbitrary schedules." },
            { title: "100% Automated Maintenance Logs", desc: "Sensor telemetry recorded every machine runtime hour automatically." },
          ],
          image_url: "/image/iot/sinau-print-iot.svg",
        },
        showcase: {
          image_url: "/image/iot/mybos-iot.svg",
          alt: "Industrial Machinery IoT Sensor Telemetry Console",
        },
      }),
    },

    // 6. DISTRIBUTED CONNECTED DEVICES & TELEMETRY PLATFORM
    {
      slug: "smart-device-ecosystem",
      client: "CONNECTED DEVICES",
      title: "Distributed Connected Devices & Telemetry Platform",
      desc: "An enterprise IoT platform consolidating remote device health, firmware status, and automated alert telemetry across distributed commercial endpoints.",
      category: "Remote Asset Telemetry",
      images: [
        "/image/iot/aspoo-marketplace.svg",
        "/image/iot/card-smart-iot.svg",
        "/image/iot/myboss-logistics-cover.webp",
      ],
      content_json: JSON.stringify({
        year: "2026",
        overview: {
          label: "Project Overview",
          title: "Centralizing Telemetry Across Thousands of Remote Device Endpoints",
          description: "Managing distributed commercial IoT hardware across multiple regional locations without a centralized gateway leads to firmware fragmentation, missed device failures, and security vulnerabilities. Kaluna engineered an enterprise IoT platform capable of tracking device heartbeats, ambient telemetry, and firmware over-the-air (FOTA) updates in real time.",
          gallery: [
            "/image/iot/card-smart-iot.svg",
            "/image/iot/myboss-logistics-cover.webp",
          ],
        },
        challenges: {
          label: "The Challenge",
          title: "Fragmented Device Fleets & Offline Service Inefficiencies",
          items: [
            { icon: "database", title: "Unmonitored Device Heartbeats", desc: "Remote endpoints went offline without immediate notification to system administrators." },
            { icon: "analytics", title: "Inconsistent Firmware Versions", desc: "Manual technician visits were required to patch device firmware across regional sites." },
            { icon: "report", title: "Lack of Central Diagnostic Logs", desc: "Device error logs were lost when local microcontroller buffers experienced memory overflow." },
            { icon: "scale", title: "Scalability Bottlenecks", desc: "Legacy servers failed to ingest simultaneous device ping bursts from thousands of units." },
          ],
        },
        solutions: {
          label: "Our Solution",
          title: "Kaluna engineered a cloud-native device management framework with sub-second heartbeat tracking and remote firmware management.",
          background_image: "/image/iot/aspoo-marketplace.svg",
          items: [
            { title: "High-Throughput Device Telemetry Broker", desc: "MQTT cluster ingesting tens of thousands of telemetry packets per second seamlessly.", image_url: "/image/iot/aspoo-marketplace.svg" },
            { title: "Firmware Over-The-Air (FOTA) Manager", desc: "Secure cryptographic firmware deployment and rollback for remote connected hardware.", image_url: "/image/iot/card-smart-iot.svg" },
            { title: "Real-Time Device Health Dashboard", desc: "Interactive geographic map displaying operational status, ping latency, and battery health.", image_url: "/image/iot/myboss-logistics-cover.webp" },
          ],
        },
        tech_stack: [
          { name: "MQTT & CoAP", icon: "git" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "PostgreSQL & Redis", icon: "postgresql" },
          { name: "Docker", icon: "nodejs" },
        ],
        workflow: {
          label: "Our Implementation Process",
          title: "Engineering the Device Telemetry Cloud",
          items: [
            { step: "01", title: "Communication Protocol Audit", desc: "Standardized lightweight binary JSON payloads to minimize cellular data bandwidth.", image_url: "/image/ourworkflow/1.webp" },
            { step: "02", title: "FOTA Pipeline Architecture", desc: "Designed dual-bank memory partitioning and cryptographic signature verification.", image_url: "/image/ourworkflow/2.webp" },
            { step: "03", title: "Cloud Broker & Clustering", desc: "Configured high-availability MQTT brokers with automated failover routing.", image_url: "/image/ourworkflow/3.webp" },
            { step: "04", title: "Stress Audits & Production Deploy", desc: "Simulated 50,000 simultaneous device connection spikes before live production launch.", image_url: "/image/ourworkflow/4.webp" },
          ],
        },
        result: {
          label: "Result and Impact",
          title: "99.99% Device Uptime & Instant Remote Firmware Updates",
          description: "Enterprise operators gained complete control over thousands of distributed connected endpoints with zero downtime.",
          highlights: [
            { title: "99.99% Remote Device Uptime", desc: "Sub-second heartbeat monitoring detected network dropouts immediately." },
            { title: "100% Remote FOTA Updates", desc: "Firmware deployed to thousands of endpoints without physical technician visits." },
            { title: "-70% Cellular Bandwidth Cost", desc: "Optimized MQTT packet serialization minimized monthly SIM card transmission fees." },
          ],
          image_url: "/image/iot/aspoo-marketplace.svg",
        },
        showcase: {
          image_url: "/image/iot/card-smart-iot.svg",
          alt: "Distributed Smart Device Telemetry Platform Showcase",
        },
      }),
    },
  ];

  const team = [
    { full_name: "Laode Hidayat", position: "LEAD EMBEDDED & FULL STACK DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Ilyas Kurnia", position: "IOT & SYSTEMS INTEGRATION ENGINEER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Irfan Zidni", position: "TELEMETRY DASHBOARD FRONT END DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "M. Afifudin", position: "MQTT & CLOUD GATEWAY BACK END DEVELOPER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Jundy Isham", position: "INDUSTRIAL UI UX DESIGNER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Teguh Bhagaskara", position: "PRODUCT & HARDWARE INTERACTION DESIGNER", image_url: "/image/default-avatar.svg", linkedin_url: "#" },
    { full_name: "Ahmad Arof", position: "IOT PROJECT MANAGER", image_url: "/image/default-avatar.svg", linkedin_url: "#" }
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

      // 2. Eksekusi Testimonials
      db.prepare("DELETE FROM testimonials").run();
      const stmtTestimonials = db.prepare("INSERT INTO testimonials (client_name, role, company_name, content, avatar_url, logo_url) VALUES (?, ?, ?, ?, ?, ?)");
      for (const item of testimonials) stmtTestimonials.run(item.client_name, item.role, item.company_name, item.content, item.avatar_url, item.logo_url);

      // 3. Eksekusi Team
      db.prepare("DELETE FROM team_members").run();
      const stmtTeam = db.prepare("INSERT INTO team_members (full_name, position, image_url, linkedin_url) VALUES (?, ?, ?, ?)");
      for (const m of team) stmtTeam.run(m.full_name, m.position, m.image_url, m.linkedin_url);
    });

    runAllSeeds();
    console.log('✅ Data dummy IoT Kaluna berhasil di-reset dan dimasukkan ke SQLite secara atomik!');
  } catch (error) {
    console.error('❌ Terjadi kesalahan saat mengisi data dummy IoT:', error);
  }
};
