// components/WhyKaluna.tsx
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function WhyKaluna() {
  const features = [
    {
      title: "Tailored Hardware & Sensor Architecture",
      description: "We do not use generic plug-and-play tools. Each device architecture is securely tailored to your physical infrastructure, security protocols, and operational workflows.",
      icon: "/image/why/1.svg",
      iconSize: 20,
    },
    {
      title: "Industrial Automation & Edge Computing",
      description:
        "Connecting plant machinery, industrial PLCs, and edge gateways to automate manufacturing workflows, monitor equipment status, and prevent unplanned downtime.",
      icon: "/image/why/2.svg",
      iconSize: 30,
    },
    {
      title: "Real-Time Telemetry & Zero Data Lag",
      description: "Ultra-reliable MQTT and low-latency cloud data streaming deliver continuous visibility across commercial fleets, energy grids, and remote facilities.",
      icon: "/image/why/3.svg",
      iconSize: 25,
    },
    {
      title: "Seamless Enterprise ERP Integration",
      description:
        "Direct integration with central ERP platforms, logistics dispatchers, and automated alert systems—turning raw hardware signals into automated operational decisions.",
      icon: "/image/why/4.svg",
      iconSize: 30,
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="kaluna-container">
        <ScrollReveal duration={800} direction="up">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="h-3.5 w-[2.5px] rounded-full bg-[#299EED]" />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0E2A54]">
                Why Kaluna
              </span>
            </div>

            <h2 className="text-[28px] md:text-[30px] lg:text-[36px] font-medium leading-tight tracking-tight text-[#0D0D0D]">
              Connecting Physical Assets
              <br className="hidden md:block" />
              Beyond Off-the-Shelf Tools
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              delay={index * 150}
              duration={800}
              direction="up"
              distance={25}
            >
              <div className="h-full rounded-[15px] border border-transparent bg-[#EAF3FF] p-6 md:p-8 shadow-sm">
                
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#A3D9F733]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={feature.iconSize}
                    height={feature.iconSize}
                  />
                </div>

                <h3 className="mb-3 text-lg font-medium leading-snug text-[#0E2A54]">
                  {feature.title}
                </h3>

                <p className="text-[12px] leading-relaxed text-[#3F3F3F]">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
