"use client";

import React from "react";
import { Factory, Truck, Store, BarChart3, Users, Code2, ArrowRight } from "lucide-react";

export interface IndustryUseCase {
  id: number;
  industry: string;
  solutionTitle: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

const useCases: IndustryUseCase[] = [
  {
    id: 1,
    industry: "Printing & Packaging",
    solutionTitle: "Unified POS & Production ERP",
    description:
      "Synchronizes online and walk-in sales with automated production queueing, paper inventory deductions, and instant financial accounting.",
    icon: Factory,
    tag: "Retail & POS Automation",
  },
  {
    id: 2,
    industry: "Logistics & Fleet",
    solutionTitle: "Fleet & Truck Tracking ERP",
    description:
      "Connects IoT vehicle GPS with dispatch management, automated maintenance alerts, and driver performance logs.",
    icon: Truck,
    tag: "IoT & Fleet Telematics",
  },
  {
    id: 3,
    industry: "SME & Multi-Merchant",
    solutionTitle: "Omnichannel E-Commerce ERP",
    description:
      "Centralizes multi-store product listings, order routing, payment reconciliation, and cross-channel inventory syncing.",
    icon: Store,
    tag: "Omnichannel Sync",
  },
  {
    id: 4,
    industry: "Corporate Office",
    solutionTitle: "Automated Office KPI Tracker",
    description:
      "Centralizes individual and team goal setting, tracks milestone completions in real-time, and generates automated performance reviews.",
    icon: BarChart3,
    tag: "HR & Analytics",
  },
  {
    id: 5,
    industry: "HR & Recruitment",
    solutionTitle: "Smart CV & Talent Pipeline",
    description:
      "Automates resume parsing, screens candidate profiles against role requirements, and tracks interview stages in a centralized pipeline.",
    icon: Users,
    tag: "Talent Pipeline Engine",
  },
  {
    id: 6,
    industry: "Tech & Product Teams",
    solutionTitle: "Product Management Workspace",
    description:
      "Unifies feature roadmaps, bug tracking, resource allocation, and cross-team dependencies into one central workspace.",
    icon: Code2,
    tag: "Workspace & Agile System",
  },
];

export default function ServiceIndustryUseCases() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 border-t border-gray-100">
      <div className="kaluna-wide-container px-5 md:px-[min(5vw,86px)]">
        {/* Section Header */}
        <div className="mx-auto max-w-[800px] text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[15px] w-[3px] shrink-0 rounded-full bg-[#299EED]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.035em] text-[#0E2A54]">
              PROBLEMS WE SOLVE
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-medium text-[#111111] tracking-[-0.025em] leading-[1.15]">
            Industry Use Cases & Tailored Solutions
          </h2>
          <p className="mt-3.5 text-[13px] sm:text-[14px] text-[#555555] leading-[1.65] max-w-xl mx-auto font-normal">
            Tailored ERP modules engineered around specialized operational pain points across diverse enterprise sectors
          </p>
        </div>

        {/* Symmetrical 3-Column Grid using Old Key Features Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {useCases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="group relative h-full rounded-[18px] sm:rounded-[20px] bg-[#EAF3FF] p-7 lg:p-8 border border-[#DCEEFF] transition-all duration-300 hover:bg-white hover:shadow-[0_16px_45px_rgba(14,42,84,0.1)] hover:border-[#299EED]/60 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Tag */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-white text-[#0E2A54] shadow-sm group-hover:bg-[#0E2A54] group-hover:text-white transition-colors duration-300">
                      <Icon size={24} className="stroke-[1.9]" />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold tracking-wide text-[#0E2A54] border border-[#D7E6F8]">
                      {item.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[20px] font-medium leading-[1.3] tracking-[-0.015em] text-[#0E2A54] group-hover:text-[#299EED] transition-colors">
                    {item.solutionTitle}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[13px] sm:text-[14px] font-normal leading-[1.65] text-[#545454]">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-3 border-t border-[#DCEEFF]/60 flex items-center justify-between text-[11px] font-semibold text-[#0E2A54] group-hover:text-[#299EED]">
                  <span>Use Case 0{idx + 1}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{item.tag}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
