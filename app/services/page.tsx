// app/services/page.tsx
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CTA from "../../src/components/CTA";
import { getWorks } from "../../src/lib/actions";
import Link from "next/link";
import OurProcese from "@/src/components/OurProcese";
import ServiceValueSolution from "@/src/components/ServiceValueSolution";
import ServiceIndustryUseCases from "@/src/components/ServiceIndustryUseCases";
import ServiceDashboardHeroBanner from "@/src/components/ServiceDashboardHeroBanner";
import ServiceTechnicalFeatures from "@/src/components/ServiceTechnicalFeatures";
import { ShieldCheck, Cpu, RefreshCw, Zap, FileText } from "lucide-react";

export default async function ServicePage() {
  const worksData = await getWorks();

  // Filter works for ERP
  const filteredWorks = worksData.filter(
    (w) => w.category === "ERP & System Integration"
  ).length > 0
    ? worksData.filter((w) => w.category === "ERP & System Integration")
    : worksData;

  const showcaseImage = filteredWorks[0]?.images[0] || "/image/service/erp-integration.png";
  const clientName = filteredWorks[0]?.client || "ERP & System Integration";

  // Technical Key Features from PDF
  const technicalFeatures = [
    {
      title: "Modular Microservice",
      desc: "Enable, disable, or extend individual business modules (e.g., Inventory, POS, HR) without affecting core platform stability.",
      icon: Cpu,
    },
    {
      title: "Granular Role-Based Access Control (RBAC)",
      desc: "Define exact permissions down to the button level for staff, managers, vendors, and external clients.",
      icon: ShieldCheck,
    },
    {
      title: "Multi-Branch & Multi-Currency Data Sync",
      desc: "Handle multi-location inventory, localized tax logic, and multi-currency transactions under one central control panel.",
      icon: RefreshCw,
    },
    {
      title: "Real-Time Event Engine & Webhooks",
      desc: "Instant event triggers (e.g., low-stock alerts, payment confirmations, dispatch updates) via email, WhatsApp, or system push notifications.",
      icon: Zap,
    },
    {
      title: "Comprehensive Audit Trail & Logging",
      desc: "Every database record change, user login, and document modification is timestamped and logged for security compliance.",
      icon: FileText,
    },
  ];

  // Implementation Process steps with short, concise 2-sentence descriptions
  const pdfProcesses = [
    {
      step: "01",
      title: "Business Architecture & Blueprinting",
      desc: "We map existing workflows to identify core operational bottlenecks. This creates a clear ERP blueprint tailored to your goals.",
    },
    {
      step: "02",
      title: "UX/UI & System Workflow Prototyping",
      desc: "We design interactive wireframes and database schemas for early validation. Your team can verify system flows before coding starts.",
    },
    {
      step: "03",
      title: "Agile Development & Integration",
      desc: "We build custom ERP modules and connect tools via secure APIs. Historical data is safely migrated into your new platform.",
    },
    {
      step: "04",
      title: "Security Audit & Quality Assurance",
      desc: "We run rigorous load testing, security checks, and UAT validation. This guarantees system stability and accuracy under real loads.",
    },
    {
      step: "05",
      title: "Deployment & Continuous Optimization",
      desc: "We handle live deployment and provide hands-on staff onboarding. We also deliver ongoing maintenance and cloud monitoring.",
    },
  ];

  // FAQ items matching PDF Page 5 & 6
  const pdfFaqs = [
    {
      q: "Why should our company build a custom ERP with Kaluna instead of buying an off-the-shelf solution like SAP or Odoo?",
      a: "Off-the-shelf ERPs often require companies to alter their proven business processes to fit rigid pre-built software, or pay heavy recurring licensing fees for unused features. Kaluna Technology builds tailored ERP systems engineered specifically around your exact operational workflows, giving you total ownership, zero per-user licensing fees, and the flexibility to scale freely.",
    },
    {
      q: "How long does a typical ERP implementation take with Kaluna Technology?",
      a: "A standard enterprise ERP project typically ranges from 8 to 16 weeks, depending on the scope of modules, custom integrations, and data migration needs. We break deployment down into functional phases so your team can start using core modules early in the process.",
    },
    {
      q: "Can Kaluna’s ERP integrate with our existing tools (e.g., legacy databases, hardware, IoT devices)?",
      a: "Yes. We specialize in system integration. Whether you need to connect your ERP to custom e-commerce stores, POS hardware, GPS fleet trackers, payment gateways, or legacy accounting software, we build secure API pipelines to unify your entire tech stack.",
    },
    {
      q: "How does Kaluna automate internal enterprise workflows?",
      a: "We eliminate repetitive manual work by establishing automated business rules within your ERP. For instance, when a sale is completed at a POS, the ERP automatically updates warehouse inventory, generates an invoice, notifies the fulfillment team, and updates your financial ledger in real-time without human intervention.",
    },
    {
      q: "What level of technical support and system maintenance does Kaluna provide after go-live?",
      a: "We view our clients as long-term technology partners. After deployment, Kaluna provides dedicated SLA-backed technical support, cloud monitoring, periodic security patches, and continuous module development as your enterprise expands.",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342] overflow-x-hidden">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="w-full bg-white pt-[72px] sm:pt-[76px] md:pt-[80px] pb-4 md:pb-6">
        {/* Dynamic Breadcrumbs */}
        <div className="kaluna-container mb-4 md:mb-5">
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-medium tracking-widest text-[#94A3B8] uppercase">
            <Link href="/" className="hover:text-[#299EED] transition-colors">
              Home
            </Link>
            <span className="text-gray-300 font-normal">&gt;</span>
            <span className="text-[#94A3B8] cursor-default">Our Service</span>
            <span className="text-gray-300 font-normal">&gt;</span>
            <span className="text-[#0E2A54] font-bold">
              ERP & System Integration
            </span>
          </div>
        </div>

        <div className="kaluna-wide-container">
          <ServiceDashboardHeroBanner
            description="We build end-to-end Enterprise Resource Planning solutions that unify your core operations into a single, intelligent platform."
          />
        </div>
      </section>

      {/* 2. Overview Section (PDF Page 1) */}
      {/* 2. Overview Section (PDF Page 1) */}
      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            max-w-[1920px]
            px-5
            kaluna-container
            pt-12
            pb-14
            md:pt-16
            md:pb-20
            lg:pt-[52px]
            lg:pb-[72px]
          "
        >
          <div
            className="
              flex
              flex-col
              lg:grid
              lg:grid-cols-[40%_60%]
              items-start
              gap-10
              lg:gap-12
              xl:gap-16
            "
          >
            <div className="w-full lg:pt-[52px] order-2 lg:order-1">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-[14px] w-[3px] shrink-0 rounded-full bg-[#299EED]" />
                <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-[0.06em] text-[#0E2A54]">
                  Overview
                </span>
              </div>
              
              <h2
                className="
                  max-w-[550px]
                  text-[32px]
                  sm:text-[36px]
                  md:text-[40px]
                  lg:text-[42px]
                  font-medium
                  leading-[1.12]
                  tracking-[-0.025em]
                  text-[#0D0D0D]
                "
              >
                Empowering Modern Enterprises Through Automation
              </h2>

              <div
                className="
                  mt-6
                  max-w-[520px]
                  space-y-4
                  text-[13px]
                  md:text-[14px]
                  leading-[1.7]
                  text-[#4A4A4A]
                "
              >
                <p>
                  At Kaluna Technology, we help growing enterprises transform complex, fragmented operations into automated, friction-free workflows. An <strong className="text-[#0E2A54] font-semibold">Enterprise Resource Planning (ERP)</strong> system serves as the centralized digital backbone of an organization—integrating core functions like finance, inventory, human resources, supply chain, and client relations into a unified data ecosystem.
                </p>

                <p>
                  By eliminating manual data entry, bridging isolated departments, and delivering real-time visibility, a custom ERP empowers leadership to make faster, data-driven decisions while driving operational efficiency at scale.
                </p>
              </div>
            </div>

            {/* Device Showcase Frame */}
            <div className="w-full order-1 lg:order-2">
              <div
                className="
                  relative
                  h-[300px]
                  w-full
                  overflow-hidden
                  rounded-[20px]
                  bg-[#EAF3FF]
                  sm:h-[400px]
                  md:h-[480px]
                  lg:h-[540px]
                  xl:h-[560px]
                "
              >
                <img
                  src={showcaseImage}
                  alt="Enterprise ERP System Preview"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Kaluna Solution: Value You Can Measure (PDF Page 1 & 2) */}
      <ServiceValueSolution />

      {/* 4. Problems We Solve: Industry Use Cases */}
      <ServiceIndustryUseCases />

      {/* 5. Technical Key Features (New 5-Column Design) */}
      <ServiceTechnicalFeatures />

      {/* 6. Implementation Process (Original Design) */}
      <OurProcese />

      {/* 7. Frequently Asked Questions (FAQ) (PDF Page 5 & 6) */}
      <section className="w-full bg-white py-14 lg:py-20 border-t border-gray-100">
        <div className="kaluna-wide-container">
          <div
            className="
              relative
              w-full
              rounded-[24px]
              bg-[#EAF3FF]
              px-[calc(min(6.3vw,121px)-min(1.8vw,34px))]
              py-10
              md:py-16
              flex
              lg:min-h-[clamp(620px,41.875vw,804px)]
              lg:items-start
              lg:pb-[72px]
              lg:pt-[clamp(68px,4.27vw,82px)]
            "
          >
            <div
              className="
                mx-auto
                w-full
                md:w-[72%]
                lg:w-[59.22%]
                lg:max-w-[1137px]
              "
            >
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0E2A54]">
                  Frequently Asked Questions (FAQ)
                </span>
                <h2
                  className="
                    mt-1
                    text-[24px]
                    font-medium
                    leading-[1.16]
                    tracking-[-0.035em]
                    text-[#0D0D0D]
                    sm:text-[28px]
                    lg:text-[32px]
                  "
                >
                  Everything You Need to Know About Custom ERP
                </h2>
              </div>

              <div className="mt-6 md:mt-8">
                {pdfFaqs.map((faq, idx) => (
                  <details
                    key={idx}
                    open={idx === 0}
                    className="
                      group
                      border-b
                      border-[#D9D9D9]
                      last:border-b-0
                      [&_summary::-webkit-details-marker]:hidden
                    "
                  >
                    <summary
                      className="
                        flex
                        min-h-[64px]
                        cursor-pointer
                        list-none
                        items-center
                        justify-between
                        gap-7
                        py-4
                        outline-none
                        group-open:items-start
                        group-open:pb-2
                        md:min-h-[76px]
                      "
                    >
                      <span
                        className="
                          max-w-[calc(100%_-_70px)]
                          text-[15px]
                          font-semibold
                          leading-[1.35]
                          tracking-[-0.02em]
                          text-[#0E2A54]
                          transition-colors
                          duration-300
                          group-hover:text-[#299EED]
                          sm:text-[16px]
                          lg:text-[18px]
                        "
                      >
                        {idx + 1}. {faq.q}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          relative
                          flex
                          h-[36px]
                          w-[36px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[8px]
                        "
                      >
                        <span
                          className="
                            absolute
                            h-[1.63px]
                            w-[18px]
                            bg-[#299EED]
                            transition-colors
                            duration-300
                            group-open:bg-[#435A88]
                          "
                        />
                        <span
                          className="
                            absolute
                            h-[18px]
                            w-[1.63px]
                            bg-[#299EED]
                            transition-all
                            duration-300
                            group-open:scale-y-0
                            group-open:bg-[#435A88]
                          "
                        />
                      </span>
                    </summary>

                    <div className="pb-6 pr-0 md:pb-[24px] md:pr-[48px]">
                      <p
                        className="
                          max-w-[1085px]
                          text-[13px]
                          font-normal
                          leading-[1.6]
                          text-[#3F3F3F]
                          sm:text-[14px]
                          lg:text-[15px]
                        "
                      >
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Featured Works */}
      {filteredWorks.length > 0 && (
        <section
          className="
            w-full
            bg-white
            pb-[60px]
            pt-[48px]
            md:pt-[56px]
            lg:pt-[64px]
          "
        >
          <div
            className="
              mx-auto
              max-w-[1920px]
              w-full
              px-5
              md:px-[48px]
              kaluna-container px-[clamp(20px,5vw,72px)]
            "
          >
            <div className="flex items-center justify-between gap-8">
              <h2
                className="
                  max-w-[1320px]
                  text-[28px]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.04em]
                  text-[#0D0D0D]
                  sm:text-[34px]
                  md:text-[42px]
                  lg:text-[48px]
                "
              >
                Featured ERP & System Integration Works
              </h2>

              <Link
                href="/works"
                className="hidden md:inline-flex text-sm font-semibold text-[#299EED] hover:underline items-center gap-1"
              >
                View All Works &rarr;
              </Link>
            </div>

            <div
              id="featured-works-list"
              className="
                mt-8
                flex
                snap-x
                snap-mandatory
                gap-5
                overflow-x-auto
                pb-2
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                md:mt-[36px]
                md:gap-[30px]
                lg:grid
                lg:grid-cols-3
                lg:overflow-visible
                lg:pb-0
              "
            >
              {filteredWorks.slice(0, 3).map((work, idx) => (
                <Link
                  id={`featured-work-${idx + 1}`}
                  key={`${work.slug}-${idx}`}
                  href={`/works/${work.slug}`}
                  className="
                    group
                    relative
                    block
                    aspect-[547/421]
                    w-[84vw]
                    max-w-[547px]
                    shrink-0
                    snap-start
                    overflow-hidden
                    rounded-[24px]
                    bg-[#0E2A54]
                    sm:w-[70vw]
                    md:w-[547px]
                    lg:w-full
                    lg:max-w-none
                  "
                >
                  <img
                    src={work.images?.[0] || "/image/empty-work.svg"}
                    alt={work.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black/10
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-[48%]
                      bg-gradient-to-t
                      from-[#081B36]/95
                      via-[#0E2A54]/82
                      to-transparent
                    "
                  />

                  <h3
                    className="
                      absolute
                      bottom-7
                      left-7
                      right-7
                      z-10
                      text-[22px]
                      font-normal
                      leading-[1.12]
                      tracking-[-0.03em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#299EED]
                      sm:text-[25px]
                      md:bottom-[48px]
                      md:left-[38px]
                      md:right-[38px]
                      md:text-[30px]
                      lg:bottom-[67px]
                      lg:leading-[34px]
                    "
                  >
                    {work.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </main>
  );
}
