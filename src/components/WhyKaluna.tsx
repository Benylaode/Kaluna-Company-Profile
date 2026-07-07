// components/WhyKaluna.tsx
import { Users, Settings, Target, Handshake } from "lucide-react";

export default function WhyKaluna() {
  const features = [
    {
      title: "Business-Oriented Development",
      description: "We develop system based on your real business needs",
      icon: <Target size={24} strokeWidth={2} />
    },
    {
      title: "A Dedicated Technical Team For You",
      description: "Our experienced team focuses on quality, security, and performance",
      icon: <Users size={24} strokeWidth={2} />
    },
    {
      title: "Scalable and Integrated Solutions",
      description: "Every solutions is designed to grow alongside your business",
      icon: <Settings size={24} strokeWidth={2} />
    },
    {
      title: "Long-Term Technology Partnership",
      description: "We provide continuous support and long-term collaboration",
      icon: <Handshake size={24} strokeWidth={2} />
    }
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="kaluna-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <span className="h-3.5 w-[2.5px] bg-[#299EED] rounded-full"></span>
            <span className="text-xs font-semibold tracking-[0.08em] text-[#0E2A54] uppercase">
              Why Kaluna
            </span>
          </div>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#0E2A54] leading-tight tracking-tight">
            Delivering IT Solutions That Go<br className="hidden md:block" /> Beyond Implementation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F3F8FF] p-6 md:p-8 rounded-[24px] shadow-sm hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white text-[#299EED] rounded-[12px] flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0E2A54] mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}