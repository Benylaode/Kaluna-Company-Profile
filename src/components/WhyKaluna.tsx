// components/WhyKaluna.tsx
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function WhyKaluna() {
  const features = [
    {
      title: "Business-First Web Strategy",
      description: "We don't build generic sites. We build digital sales funnels tailored to your specific industry, audience, and conversion goals.",
      icon: "/image/why/1.svg",
      iconSize: 20,
    },
    {
      title: "Dedicated Team of Web Experts",
      description:
        "From UI/UX designers to front-end developers, your dedicated squad focuses on speed, mobile responsiveness, and pixel-perfect quality.",
      icon: "/image/why/2.svg",
      iconSize: 30,
    },
    {
      title: "Scalable & Integrated Websites",
      description: "Your site grows with you. Easily add e-commerce, booking systems, or CRM integrations without rebuilding from scratch.",
      icon: "/image/why/3.svg",
      iconSize: 25,
    },
    {
      title: "Long-Term Digital Partnership",
      description:
        "We stick around after launch. Enjoy continuous maintenance, security updates, and strategic consulting to keep your site ahead of the curve.",
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
              Building Websites That Go
              <br className="hidden md:block" />
              Beyond a Beautiful Launch
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
