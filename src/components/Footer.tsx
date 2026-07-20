import Image from "next/image";
import Link from "next/link";
import { 
  FaYoutube, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaTiktok 
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

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
    href: "https://www.instagram.com/kalunatechnology?igsh=emYxbnkydmR5Mnd1",
    icon: (
      <Image
        src="/image/instagram_icon.svg"
        alt="Instagram"
        width={14}
        height={14}
        className="h-[20px] w-[20px]"
      />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCovhihQGMo4m6IkkyUbU3bQ",
    icon: <FaYoutube className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pt-sinergi-muda-arsa-arsalynk/",
    icon: <FaLinkedinIn className="h-[20px] w-[20px]" />,
  },
  {
    label: "X",
    href: "https://x.com/arsalynk",
    icon: <FaXTwitter className="h-[20px] w-[20px]" />,
    hidden: true,
  },
  {
    label: "Facebook",
    href: "#",
    icon: <FaFacebookF className="h-[20px] w-[20px]" />,
    hidden: true,
  },
  {
    label: "TikTok",
    href: "#",
    icon: <FaTiktok className="h-[20px] w-[20px]" />,
    hidden: true,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="mt-[1px] bg-[#FAFAFA] pb-8 font-sans text-[#3F3F3F]">
      <div className="kaluna-wide-container">
        {/* 1. Mengurangi padding utama agar tinggi background lebih pendek & proporsional */}
        <div className="w-full bg-[#EAF3FF] px-5 sm:px-8 md:px-12 pt-10 pb-6 lg:px-16 lg:pt-14 lg:pb-0 rounded-[20px] md:rounded-[24px]">
          
          {/* 5. Menggunakan lg:gap-14 untuk jarak antar kolom yang lebih lega */}
          <div className="grid grid-cols-1 gap-8 border-b border-[#D7E6F8] pb-6 md:grid-cols-12 md:gap-6 lg:gap-14">
            
            {/* 4. Memperbesar ukuran logo hingga lg:w-[300px] agar lebih terlihat */}
            <div className="flex flex-col items-start md:col-span-12 lg:col-span-4 lg:pr-6">
              <Image
                src="/image/logo-topography.svg"
                alt="Kaluna Technology"
                width={422}
                height={107}
                priority
                className="h-auto w-[220px] object-contain select-none md:w-[240px] lg:w-[300px]"
              />
            </div>

            {/* Our Service */}
            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0D0D0D]">
                Our Service
              </h4>
              <ul className="space-y-3 text-[13px] text-[#3F3F3F]">
                {servicesList.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="transition-colors hover:text-[#299EED]">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="max-w-[180px] md:col-span-4 lg:col-span-2">
              <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0D0D0D]">
                Company
              </h4>
              <ul className="space-y-3 text-[13px] text-[#3F3F3F]">
                <li>
                  <Link href="/works" className="transition-colors hover:text-[#299EED]">
                    Our Works
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are" className="transition-colors hover:text-[#299EED]">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="#footer" className="transition-colors hover:text-[#299EED]">
                    Contact Us
                  </Link>
                </li>
                <li className="group">
                  <Link href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#299EED]">
                    <span>Download Company Profile</span>
                    <svg 
                      className="h-3 w-3 transform transition-transform group-hover:translate-x-0.5 shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Visit Our Office */}
            <div className="max-w-[250px] md:col-span-4 lg:col-span-3">
              <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0D0D0D]">
                Visit Our Office
              </h4>
              <p className="mb-3.5 text-[13px] font-medium leading-relaxed text-[#3F3F3F]">
                PT Sinergi Muda Arsa Office Menara Rajawali, 26th Floor Kuningan Business District, South Jakarta, Indonesia
              </p>
              <a
                href="https://maps.google.com/maps?q=Menara+Rajawali,+Jl.+DR.+Ide+Anak+Agung+Gde+Agung,+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-bold text-[#299EED] hover:underline"
              >
                Open in Maps →
              </a>
            </div>
          </div>

          {/* Baris Bawah: Sosmed & Kontak (jarak ±80px direpresentasikan dengan pt-8) */}
          <div className="flex flex-col justify-between gap-6 pt-8 lg:flex-row lg:items-center">
            
            {/* Area Follow Us */}
            <div className="flex flex-col gap-3">
              <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#1A1A1A]">
                Follow Us
              </span>

              {/* 6. Meningkatkan gap ke gap-3 agar antar-ikon tidak terlalu padat */}
              <div className="flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href || "#"}
                    target={social.href && social.href !== "#" ? "_blank" : "_self"}
                    rel={social.href && social.href !== "#" ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#17366A] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#299EED]${
                      (social as { hidden?: boolean }).hidden ? " hidden" : ""
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* 7. Menambahkan lg:self-end atau margin-top visual jika diperlukan untuk menyeimbangkan posisi tombol */}
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:self-end">
            
              {/* Tombol Email */}
              <a
                href="mailto:corporate@kalunatechnology.com"
                className="inline-flex h-[49px] items-center justify-between gap-3 rounded-full bg-[#0B2545] pl-4 pr-1.5 text-white shadow-sm transition-all duration-300 hover:bg-[#163A70] min-w-0"
              >
                <span className="text-[13px] tracking-[0.01em] truncate hidden sm:block">
                  corporate@kalunatechnology.com
                </span>
                <span className="text-[13px] tracking-[0.01em] sm:hidden">
                  Email Us
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#299EED] text-white">
                  <svg
                    className="h-4 w-4 fill-none stroke-current"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
              </a>

              {/* Tombol Chat CS */}
              <a
                href="https://wa.me/628213939569"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[50px] items-center justify-between gap-4 rounded-full bg-[#0B2545] pl-5 pr-1.5 text-white shadow-sm transition-all duration-300 hover:bg-[#163A70]"
              >
                <span className="text-[14px]  tracking-[0.01em]">
                  Chat CS
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#299EED] text-white">
                  <svg
                    className="h-4 w-4 fill-none stroke-current"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 2 1.72z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* 2 & 8. Copyright Section yang ditaruh di luar/bawah section kontak, dibatasi border-t & py-7 */}
          <div className="mt-10 border-t border-[#D7E6F8] py-3">
            <p className="text-center text-[13px] font-medium tracking-wide text-[#1A1A1A]/80">
              © 2026 PT. KALUNA TECHNOLOGY DIGITAL
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}