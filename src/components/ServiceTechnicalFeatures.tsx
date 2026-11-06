import React from "react";
import { Blocks, UserCheck, CheckCircle2, GitFork, ShieldCheck, TrendingUp } from "lucide-react";

export interface TechnicalFeatureItem {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const features: TechnicalFeatureItem[] = [
  {
    title: "Industrial Edge Computing",
    desc: "Connect plant PLCs, machinery, and microcontrollers to run local logic and eliminate data lag.",
    icon: Blocks,
  },
  {
    title: "Real-Time Sensor Telemetry",
    desc: "Low-latency MQTT and WebSocket streaming for continuous second-by-second equipment visibility.",
    icon: UserCheck,
  },
  {
    title: "Granular Device Access (RBAC)",
    desc: "Role-based control down to individual relays and sensor groups for strict industrial security.",
    icon: CheckCircle2,
  },
  {
    title: "Automated Incident Alerting",
    desc: "Instant threshold anomaly triggers via push webhooks, SMS, and automated equipment throttling.",
    icon: GitFork,
  },
  {
    title: "Enterprise ERP & API Sync",
    desc: "Direct integration connecting hardware telemetry into central ERP, dispatch, and billing platforms.",
    icon: ShieldCheck,
  },
  {
    title: "Predictive Maintenance Engine",
    desc: "Time-series analytics identifying component wear before expensive mechanical breakdowns happen.",
    icon: TrendingUp,
  },
];

export default function ServiceTechnicalFeatures() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 border-t border-gray-100">
      <div className="kaluna-container">
        {/* Section Header */}
        <div className="mx-auto max-w-[800px] text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full" />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">
              KEY FEATURES
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0D0D0D] tracking-tight leading-[1.15]">
            Enterprise-Grade Platform Architecture
          </h2>
          <p className="mt-3.5 text-[13px] sm:text-[14px] leading-[1.65] text-[#555555] max-w-xl mx-auto font-normal">
            Built with modern, modular microservice architecture for maximum stability, security, and performance under heavy load
          </p>
        </div>

        {/* 6-Column Grid with Light-Blue Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 border-t border-b lg:border-y-0 border-[#BCE1F8]">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-start px-4 sm:px-5 lg:px-6 py-8 lg:py-6 border-b md:border-b-0 lg:border-r border-[#BCE1F8] last:border-r-0 last:border-b-0 transition-colors duration-300 hover:bg-[#F4F9FF]/60"
              >
                {/* Top Icon */}
                <div className="mb-8 lg:mb-12 text-[#299EED]">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[17px] lg:text-[17.5px] font-bold text-[#0D0D0D] leading-[1.25] tracking-[-0.01em] mb-4 min-h-[48px] flex items-end">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] sm:text-[12.5px] leading-[1.65] text-[#475569] font-normal">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
