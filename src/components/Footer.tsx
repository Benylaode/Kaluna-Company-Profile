import Image from "next/image";

const servicesList = [
  { name: "Web & Application Development", href: "/services/web-application-development" },
  { name: "IoT System Development", href: "/services/iot-system-development" },
  { name: "ERP & System Integration", href: "/services/erp-system-integration" },
  { name: "Industrial & Automation Solutions", href: "/services/industrial-automation-solutions" },
  { name: "Data Dashboard & Analytics", href: "/services/data-dashboard-analytics" },
  { name: "IT Strategy & Consulting", href: "/services/it-strategy-consulting" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz",
    icon: (
      <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC_U6_-QPHfTJv13ESZR3iMw",
    icon: (
      <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pt-sinergi-muda-arsa-arsalynk/",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="mt-[1px] bg-[#FAFAFA] font-sans text-[#3F3F3F]">
      <div className="kaluna-wide-container pb-0">
        <div className="w-full bg-[#EAF3FF] px-5 pb-8 pt-10 rounded-[24px] md:px-[60px] lg:px-[110px] md:pb-9 md:pt-[98px]">
          <div className="grid grid-cols-1 gap-10 border-b border-[#D7E6F8] pb-10 md:grid-cols-12 md:gap-8 lg:gap-12">
            <div className="flex flex-col items-start gap-4 md:col-span-12 lg:col-span-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="Kaluna Technology"
                  width={90}
                  height={90}
                  className="h-[74px] w-[76px] flex-shrink-0 md:h-[86px] md:w-[90px]"
                />
                <div className="flex flex-col">
                  <span className="text-3xl font-black leading-none tracking-wider text-[#0E2A54] md:text-[42px]">
                    KALUNA
                  </span>
                  <span className="mt-1 text-sm font-bold tracking-[0.25em] text-[#0E2A54] md:text-lg">
                    TECHNOLOGY
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0E2A54]">Our Service</h4>
              <ul className="space-y-3 text-sm font-medium text-[#3F3F3F]">
                {servicesList.map((service) => (
                  <li key={service.name}>
                    <a href={service.href} className="transition-colors hover:text-[#299EED]">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0E2A54]">Company</h4>
              <ul className="space-y-3 text-sm font-medium text-[#3F3F3F]">
                <li><a href="/works" className="transition-colors hover:text-[#299EED]">Our Works</a></li>
                <li><a href="/who-we-are" className="transition-colors hover:text-[#299EED]">Who We Are</a></li>
                <li><a href="#footer" className="transition-colors hover:text-[#299EED]">Contact Us</a></li>
                <li><a href="#" className="font-semibold text-[#299EED] hover:underline">Download Compony Profile -&gt;</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0E2A54]">Visit Our Office</h4>
              <p className="mb-4 text-sm font-medium leading-relaxed text-[#3F3F3F]">
                PT Sinergi Muda Arsa Office
                Menara Rajawali, 26th Floor
                Kuningan Business District, South Jakarta, Indonesia
              </p>
              <a
                href="https://maps.google.com/?q=Semarang+Central+Java"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#299EED] hover:underline"
              >
                Open in Maps -&gt;
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 py-8 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E2A54]">Follow Us</span>
              <div className="flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href || "#"}
                    target={social.href && social.href !== "#" ? "_blank" : "_self"}
                    rel={social.href && social.href !== "#" ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0E2A54] text-white transition-colors hover:bg-[#299EED]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a href="mailto:corporate@kalunatechnology.com" className="inline-flex items-center justify-between gap-4 rounded-full bg-[#0E2A54] py-2 pl-5 pr-2 text-white shadow-md transition-colors hover:bg-[#163A70]">
                <span className="text-xs font-medium tracking-wide">corporate@kalunatechnology.com</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#299EED] text-white">
                  <svg className="h-4 w-4 fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
              </a>

              <a href="https://wa.me/628213939569" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-4 rounded-full bg-[#0E2A54] py-2 pl-5 pr-2 text-white shadow-md transition-colors hover:bg-[#163A70]">
                <span className="text-xs font-medium tracking-wide">Chat CS</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#299EED] text-white">
                  <svg className="h-4 w-4 fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="border-t border-[#D7E6F8] pt-6 text-center text-xs font-bold tracking-wider text-[#3F3F3F]">
            © 2026 PT Sinergi Muda Arsa
          </div>
        </div>
      </div>
    </footer>
  );
}