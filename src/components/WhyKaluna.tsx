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
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#1E88E5] mb-4 uppercase">
          <span className="w-1.5 h-4 bg-[#1E88E5] block rounded-full"></span>
          WHY KALUNA
        </div>
        <h2 className="text-3xl md:text-[42px] font-bold text-[#0D2342] leading-tight">
          Delivering IT Solutions That Go<br className="hidden md:block" /> Beyond Implementation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#F4F8FF] p-6 md:p-8 rounded-[24px] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
            <div className="w-12 h-12 bg-white text-[#1E88E5] rounded-[14px] flex items-center justify-center mb-6 shadow-sm">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-[#0D2342] mb-3 leading-snug">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}