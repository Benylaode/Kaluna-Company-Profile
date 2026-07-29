// components/WhyKaluna.tsx
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function WhyKaluna() {
  const features = [
    {
      title: "Business-Oriented Development",
      description: "We develop and customize ERP systems based on your actual business processes and operational needs.",
      icon: "/image/why/1.svg",
      iconSize: 20,
    },
    {
      title: "A Dedicated Technical Team For You",
      description:
        "Our experienced engineers focus on software quality, enterprise-grade security, and system performance.",
      icon: "/image/why/2.svg",
      iconSize: 30,
    },
    {
      title: "Scalable and Integrated Solutions",
      description: "Architected to adapt and expand smoothly as your business grows and your operational complexity increases.",
      icon: "/image/why/3.svg",
      iconSize: 25,
    },
    {
      title: "Long-Term Technology Partnership",
      description:
        "Beyond initial deployment, we provide continuous support, monitoring, and system optimization.",
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
              Delivering IT Solutions That Go
              <br className="hidden md:block" />
              Beyond Implementation
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