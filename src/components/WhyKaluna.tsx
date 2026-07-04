// components/WhyKaluna.tsx
export default function WhyKaluna() {
  const features = [
    {
      title: "Business-Oriented Development",
      description: "We develop system based on your real business needs",
      icon: "♟️" // Ganti dengan ikon SVG yang sesuai (misal: Lucide React)
    },
    {
      title: "A Dedicated Technical Team For You",
      description: "Our experienced team focuses on quality, security, and performance",
      icon: "🔄"
    },
    {
      title: "Scalable and Integrated Solutions",
      description: "Every solutions is designed to grow alongside your business",
      icon: "↗️"
    },
    {
      title: "Long-Term Technology Partnership",
      description: "We provide continuous support and long-term collaboration",
      icon: "🛡️"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider text-[#0D2342] mb-4">
          <span className="w-1 h-4 bg-[#1E88E5] block"></span>
          WHY KALUNA
        </div>
        <h2 className="text-4xl font-bold text-[#0D2342]">
          Delivering IT Solutions That Go<br />Beyond Implementation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#EEF4FF] p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-[#DCE8FC] text-[#0D2342] rounded-xl flex items-center justify-center text-2xl mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#0D2342] mb-3 leading-snug">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}