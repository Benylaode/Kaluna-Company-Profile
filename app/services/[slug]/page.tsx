// app/services/[slug]/page.tsx
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import CTA from "../../../src/components/CTA";
import { getWorks, getServiceBySlug } from "../../../src/lib/actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import OurProcese from "@/src/components/OurProcese";
import PackageContactButton from "../../../src/components/PackageContactButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}
export interface PackageData {
  name: string;
  price: string;
  desc: string;
  features: string[];
  isPopular?: boolean;

  // Properti tambahan agar sesuai desain
  renewal?: string;
  popularLabel?: string;
  buttonLabel?: string;
}
interface CapabilityData {
  title: string;
  desc: string;
}
interface ProcessData {
  step: string;
  title: string;
  desc: string;
}
interface FaqData {
  q: string;
  a: string;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const worksData = await getWorks();

  const dbService = await getServiceBySlug(slug);
  if (!dbService) {
    notFound();
  }

  const parsedJson = dbService.content_json
    ? JSON.parse(dbService.content_json)
    : {};
  const serviceData = {
    title: dbService.title,
    heroDesc: parsedJson.heroDesc || "Premium Service",
    heroSub:
      parsedJson.heroSub || "Description of our premium service offering.",
    packages: (parsedJson.packages as PackageData[]) || [],
    challenges: (parsedJson.challenges as string[]) || [],
    capabilities: (parsedJson.capabilities as CapabilityData[]) || [],
    processes: (parsedJson.processes as ProcessData[]) || [],
    faqs: (parsedJson.faqs as FaqData[]) || [],
  };

  // Filter works dynamically to match category
  let filteredWorks = worksData;
  if (slug === "web-application-development") {
    filteredWorks = worksData.filter(
      (w) =>
        w.category === "Website Development" ||
        w.category === "Software Development",
    );
  } else if (slug === "iot-system-development") {
    filteredWorks = worksData.filter(
      (w) => w.category === "IoT System" || w.category === "Backend & IoT",
    );
  }
  if (filteredWorks.length === 0) {
    filteredWorks = worksData;
  }

  // Dynamically resolve showcaseImage and clientName from dummy (database) works data
  let showcaseImage = "/image/empty-work.svg";
  let clientName = serviceData.title;

  if (slug === "web-application-development") {
    // Specifically find Website Development project that shows web murni (like suara-merdeka-refresh)
    const matchingWork =
      worksData.find(
        (w) =>
          w.category === "Website Development" &&
          w.slug === "suara-merdeka-refresh",
      ) || worksData.find((w) => w.category === "Website Development");
    if (matchingWork) {
      showcaseImage = matchingWork.images[0];
      clientName = matchingWork.client;
    }
  } else if (slug === "iot-system-development") {
    const matchingWork = worksData.find(
      (w) => w.category === "IoT System" || w.category === "Backend & IoT",
    );
    if (matchingWork) {
      showcaseImage = matchingWork.images[0];
      clientName = matchingWork.client;
    }
  } else {
    // General fallback finding the first work in the filtered category
    const matchingWork = filteredWorks[0];
    if (matchingWork) {
      showcaseImage = matchingWork.images[0];
      clientName = matchingWork.client;
    }
  }

  return (
    <main className="min-h-screen bg-white font-sans text-[#0D2342] overflow-x-hidden">
      <Navbar />

      <section className="w-full bg-white pt-[80px] sm:pt-[110px] md:pt-[90px] pb-2 md:pb-4">
        {/* Dynamic Breadcrumbs matching screenshot styling */}
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 mb-4 md:mb-5">
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-medium tracking-widest text-[#94A3B8] uppercase">
            <Link href="/" className="hover:text-[#299EED] transition-colors">
              Home
            </Link>
            <span className="text-gray-300 font-normal">&gt;</span>
            <span className="text-[#94A3B8] cursor-default">Our Service</span>
            <span className="text-gray-300 font-normal">&gt;</span>
            <span className="text-[#0E2A54] font-bold">
              {serviceData.title}
            </span>
          </div>
        </div>

        <div className="kaluna-wide-container">
          <div
            className="
              relative
              w-full
              h-[150px]
              sm:h-[180px]
              md:h-[240px]
              rounded-[12px]
              sm:rounded-[16px]
              overflow-hidden
              flex
              items-center
              justify-center
              bg-cover
              bg-center
              bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)]
            "
            style={{
              backgroundImage: "url('/image/banner-title.svg')",
            }}
          >
            {/* Color blend overlay spreading from #02184d to #08297d */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)] opacity-75 mix-blend-multiply z-[1]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#02184d_0%,#08297d_100%)] opacity-25 z-[1]" />

            <h1 className="relative z-10 text-[28px] sm:text-[36px] md:text-[52px] lg:text-[60px] font-normal md:font-light tracking-[-0.02em] text-white text-center px-4">
              {serviceData.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 pt-10 pb-12 md:pt-12 md:pb-16 lg:pt-[44px] lg:pb-[60px]">
          <div className="flex flex-col lg:grid lg:grid-cols-[40%_60%] items-start gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full lg:pt-[44px] order-2 lg:order-1">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[14px] w-[3px] shrink-0 rounded-full bg-[#299EED]" />
                <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-[0.06em] text-[#0E2A54]">
                  Overview
                </span>
              </div>
              <h2 className="max-w-[550px] text-[24px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-medium leading-[1.12] tracking-[-0.025em] text-[#0D0D0D]">
                {serviceData.heroDesc}
              </h2>
              <div className="mt-6 max-w-[510px] space-y-5 text-[12px] md:text-[14px] leading-[1.6] text-[#4A4A4A]">
                <p>{serviceData.heroSub}</p>
              </div>
            </div>

            {/* Device Showcase Card exactly mimicking WorkProjectCard styling */}
            <div className="w-full order-1 lg:order-2">
              <div className="relative w-full aspect-[979/711] overflow-hidden rounded-[24px] bg-[#0E2A54] shadow-lg">
                <img
                  src={showcaseImage}
                  alt={`${serviceData.title} Preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Browser Window Controls (Top Left) */}
                <div className="absolute left-6 top-6 z-20 flex items-center gap-1.5 md:left-8 md:top-8">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#81C3F9]/60" />
                </div>
                {/* Client Indicator (Bottom Left) */}
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 md:bottom-8 md:left-8">
                  <div className="h-4 w-[3px] bg-[#299EED] rounded-full" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                    {clientName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRICING PACKAGES — mengikuti proporsi technical.svg */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[linear-gradient(180deg,#0E2A54_0%,#1F5DBA_100%)]
          py-14
          md:py-16
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1440px] w-full px-4 md:px-8">
          {/* Section label */}
          <div className="flex h-[15px] items-center justify-center gap-[13px]">
            <span
              aria-hidden="true"
              className="h-[15px] w-[4px] shrink-0 bg-[#299EED]"
            />

            <span
              className="
                text-[12px]
                font-medium
                uppercase
                leading-[15px]
                tracking-[0.02em]
                text-white
                md:text-[14px]
              "
            >
              Package
            </span>
          </div>

          {/* Section heading */}
          <h2
            className="
              mx-auto
              mt-6
              max-w-[700px]
              text-center
              text-[30px]
              font-normal
              leading-[38px]
              tracking-[-0.025em]
              text-white
              md:mt-8
              md:text-[36px]
              md:leading-[44px]
              min-[1800px]:text-[42px]
              min-[1800px]:leading-[48px]
            "
          >
            Ideal Packages Tailored to
            <span className="block">Your Business Needs</span>
          </h2>

          {/* Package cards grid */}
          <div
            className="
              mt-10
              grid
              grid-cols-1
              items-stretch
              justify-items-center
              gap-[28px]
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {serviceData.packages.map((pkg, idx) => {
              const isPopular = Boolean(pkg.isPopular);
              const renewalText =
                pkg.renewal ||
                "Annual Renewal: $450,000 / year (Domain & Hosting)";
              const popularText = pkg.popularLabel || "Best";
              const buttonText = pkg.buttonLabel || "Contact Us";
              const displayPrice =
                pkg.price ||
                (pkg.name.toLowerCase() === "custom"
                  ? "Chat Admin"
                  : "Contact Us");

              return (
                <article
                  key={`${pkg.name}-${idx}`}
                  className={`
                    relative
                    flex
                    w-full
                    max-w-[547px]
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-[24px]
                    px-6
                    py-7
                    sm:px-8
                    sm:py-8
                    ${
                      isPopular
                        ? "bg-[#299EED]/50 text-white"
                        : "bg-white text-[#0D0D0D]"
                    }
                  `}
                >
                  <div className="flex flex-col flex-1">
                    {/* Package badge */}
                    <div className="flex min-h-[42px] flex-wrap items-center gap-2">
                      <span
                        className={`
                          inline-flex
                          h-[42px]
                          items-center
                          justify-center
                          whitespace-nowrap
                          rounded-full
                          border
                          bg-[#EAF3FF]
                          px-[20px]
                          text-[15px]
                          font-normal
                          leading-none
                          text-[#0E2A54]
                          ${isPopular ? "border-[#62BFF1]" : "border-[#299EED]"}
                        `}
                      >
                        {pkg.name}
                      </span>

                      {isPopular && (
                        <span
                          className="
                            inline-flex
                            h-[42px]
                            items-center
                            justify-center
                            gap-1.5
                            whitespace-nowrap
                            rounded-full
                            border
                            border-[#FF993A]
                            bg-[#FF2B2B]
                            px-[18px]
                            text-[14px]
                            font-normal
                            leading-none
                            text-white
                          "
                        >
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 shrink-0"
                            viewBox="0 0 16 18"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M13.662 7.248c-.341-.768-.837-1.458-1.457-2.025l-.512-.47a.143.143 0 0 0-.228.058l-.229.656c-.142.411-.404.832-.775 1.245-.025.026-.053.033-.072.035-.019.002-.049-.002-.076-.027a.11.11 0 0 1-.035-.084c.065-1.058-.251-2.252-.944-3.551C8.761 2.006 7.965 1.164 6.97.577L6.244.15a.143.143 0 0 0-.211.128l.039.844c.026.576-.041 1.086-.199 1.51a6.19 6.19 0 0 1-.826 1.432c-.247.301-.527.573-.835.811a6.208 6.208 0 0 0-1.763 2.135 6.12 6.12 0 0 0-.636 2.713c0 .829.163 1.633.486 2.39a6.21 6.21 0 0 0 1.328 1.95 6.148 6.148 0 0 0 1.967 1.313 6.222 6.222 0 0 0 2.406.481 6.222 6.222 0 0 0 2.406-.479 6.2 6.2 0 0 0 1.967-1.313 6.21 6.21 0 0 0 1.328-1.95 6.108 6.108 0 0 0 .487-2.391 6.151 6.151 0 0 0-.526-2.476Z"
                            />
                          </svg>

                          <span>{popularText}</span>
                        </span>
                      )}
                    </div>

                    {/* Package description */}
                    <p
                      className={`
                        mt-5
                        text-[14px]
                        font-normal
                        leading-relaxed
                        ${isPopular ? "text-white" : "text-[#333333]"}
                      `}
                    >
                      {pkg.desc}
                    </p>

                    {/* Price section */}
                    <div className="mt-5">
                      <p
                        className={`
                          text-[13px]
                          font-normal
                          uppercase
                          leading-none
                          tracking-[0.02em]
                          ${isPopular ? "text-white/90" : "text-[#7A7A7A]"}
                        `}
                      >
                        START FROM
                      </p>

                      <h3
                        className={`
                          mt-1.5
                          whitespace-nowrap
                          text-[34px]
                          sm:text-[40px]
                          lg:text-[44px]
                          font-normal
                          leading-tight
                          tracking-[-0.03em]
                          ${isPopular ? "text-white" : "text-[#0E2A54]"}
                        `}
                      >
                        {displayPrice}
                      </h3>

                      <p
                        className={`
                          mt-1.5
                          text-[13px]
                          font-normal
                          leading-normal
                          ${isPopular ? "text-white/80" : "text-[#7A7A7A]"}
                        `}
                      >
                        {renewalText}
                      </p>
                    </div>

                    {/* Thin Divider */}
                    <div
                      className={`
                        mt-5
                        h-[1px]
                        w-full
                        ${isPopular ? "bg-white/40" : "bg-[#E3E3E3]"}
                      `}
                    />

                    {/* Feature list */}
                    <ul className="mt-5 space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={`${feature}-${featureIndex}`}
                          className="flex items-center gap-2.5"
                        >
                          <span
                            className={`
                              flex
                              h-[20px]
                              w-[20px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              ${
                                isPopular
                                  ? "bg-white text-[#299EED]"
                                  : "bg-[#299EED] text-white"
                              }
                            `}
                          >
                            <svg
                              aria-hidden="true"
                              className="h-2.5 w-2.5"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M1.8 7.2 5.2 10.5 12.1 2.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>

                          <span
                            className={`
                              text-[14px]
                              font-normal
                              leading-normal
                              ${isPopular ? "text-white" : "text-[#222222]"}
                            `}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <PackageContactButton
                    packageName={pkg.name}
                    buttonText={buttonText}
                    isPopular={isPopular}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* 4. PROBLEM WE SOLVE */}
      <section className="w-full bg-white py-6 lg:py-[28px]">
        <div className="kaluna-wide-container">
          <div
            className="
              relative
              w-full
              rounded-[24px]
              bg-[#EAF3FF]
              px-6
              py-10
              md:px-6
              md:py-16
              lg:px-12
              lg:py-20
            "
          >
            <div className="mx-auto max-w-[1440px] px-4 md:px-8">
              {/* Label */}
              <div className="flex items-center justify-center gap-[11px]">
                <span
                  aria-hidden="true"
                  className="h-[15px] w-[4px] shrink-0 bg-[#299EED]"
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-none
                    tracking-[0.04em]
                    text-[#0E2A54]
                    md:text-[11px]
                    xl:text-[12px]
                  "
                >
                  Problem We Solve
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  mx-auto
                  mt-[25px]
                  max-w-[700px]
                  text-center
                  text-[25px]
                  font-medium
                  leading-[1.16]
                  tracking-[-0.025em]
                  text-[#0D0D0D]
                  sm:text-[27px]
                  md:text-[29px]
                  lg:text-[31px]
                  xl:text-[33px]
                "
              >
                Addressing Common Challenges
                <span className="block">in Modern Business Website</span>
              </h2>

              {/* Cards */}
              <div
                className="
                  mt-[34px]
                  grid
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                  lg:grid-cols-4
                  lg:gap-6
                  xl:gap-[30px]
                "
              >
                {serviceData.challenges.slice(0, 4).map((challenge, idx) => (
                  <article
                    key={`${challenge}-${idx}`}
                    className="
                      relative
                      isolate
                      aspect-[402/256]
                      w-full
                      overflow-hidden
                      rounded-[18px]
                      bg-[linear-gradient(180deg,#0E2A54_0%,#1F5DBA_100%)]
                    "
                  >
                    {/* Geometric shapes */}
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 z-[1] h-full w-full"
                      viewBox="0 0 402 256"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <g opacity="0.5">
                        <path
                          d="
                            M326.342 257.135
                            H408.504
                            C410.241 257.135 411.648 255.726 411.648 253.988
                            V171.765
                            C411.648 170.832 410.519 170.361 409.86 171.021
                            L325.598 255.345
                            C324.939 256.004 325.405 257.135 326.342 257.135Z
                          "
                          fill="#2C9FDD"
                        />
                        <path
                          d="
                            M-287.29 678.556
                            L748.034 -357.063
                            H903
                            L-131.853 678.556
                            H-287.29Z
                          "
                          fill="#375CA9"
                        />
                        <path
                          d="
                            M-347.997 -423
                            H-192.552
                            L294.169 64.079
                            C294.579 64.489 294.579 65.153 294.169 65.563
                            L219.403 140.371
                            C218.174 141.6 216.183 141.6 214.954 140.371
                            L-347.997 -423Z
                          "
                          fill="#203560"
                        />
                      </g>
                    </svg>

                    <img
                      src="/image/bg-service.jpg"
                      alt=""
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        z-[2]
                        h-auto
                        max-w-none
                        opacity-30
                        mix-blend-hard-light
                      "
                      style={{
                        width: "210.45%",
                        left: "-55.22%",
                        top: "-53.52%",
                      }}
                    />

                    {/* Card text */}
                    <p
                      className="
                        absolute
                        bottom-[15%]
                        left-[6%]
                        z-10
                        max-w-[86%]
                        text-[18px]
                        font-normal
                        leading-[1.28]
                        tracking-[-0.015em]
                        text-[#8DD0F5]
                        sm:text-[20px]
                        lg:text-[19px]
                        xl:text-[22px]
                        2xl:text-[24px]
                      "
                    >
                      {challenge}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pt-12 pb-16 md:pt-14 md:pb-20 lg:pb-[88px]">
        <div className="mx-auto max-w-[1440px] w-full px-4 md:px-8">
          <div className="mx-auto w-full max-w-[1440px]">
            {/* Section label */}
            <div className="flex h-[15px] items-center gap-[13px]">
              <span
                aria-hidden="true"
                className="h-[15px] w-[4px] shrink-0 bg-[#299EED]"
              />

              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  leading-[15px]
                  tracking-[0.02em]
                  text-[#0E2A54]
                  md:text-[14px]
                "
              >
                Key Features
              </span>
            </div>

            {/* Section heading */}
            <h2
              className="
                mt-6
                max-w-[520px]
                text-[26px]
                font-normal
                leading-[1.25]
                tracking-[-0.03em]
                text-[#0D0D0D]
                sm:text-[30px]
                md:mt-8
                md:text-[34px]
              "
            >
              Essential Capabilities
              <span className="block">Built into Every Website</span>
            </h2>

            {/* Capability items */}
            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-y-9
                md:grid-cols-2
                md:gap-x-10
                md:gap-y-12
                lg:mt-[60px]
                lg:grid-cols-3
                lg:grid-rows-2
                lg:gap-x-8
                lg:gap-y-[61px]
              "
            >
              {[0, 3, 1, 4, 2, 5].map((capabilityIndex, visualIndex) => {
                const cap = serviceData.capabilities[capabilityIndex];

                if (!cap) return null;

                return (
                  <article
                    key={`${cap.title}-${visualIndex}`}
                    className={`
                        flex
                        min-w-0
                        items-start
                        gap-5
                        md:gap-6
                        ${
                          [
                            "lg:col-start-1 lg:row-start-1",
                            "lg:col-start-1 lg:row-start-2",
                            "lg:col-start-2 lg:row-start-1",
                            "lg:col-start-2 lg:row-start-2",
                            "lg:col-start-3 lg:row-start-1",
                            "lg:col-start-3 lg:row-start-2",
                          ][visualIndex] ?? ""
                        }
                      `}
                  >
                    {/* Generic check icon — pure CSS, no image asset/import */}
                    <div
                      aria-hidden="true"
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-[10px]
                        bg-[#EAF3FF]
                        md:h-12
                        md:w-12
                      "
                    >
                      <span
                        className="
                          block
                          h-[9px]
                          w-[18px]
                          -translate-y-[1px]
                          -rotate-45
                          rounded-[1px]
                          border-b-[2px]
                          border-l-[2px]
                          border-[#0E2A54]
                          md:h-[11px]
                          md:w-[21px]
                          md:border-b-[3px]
                          md:border-l-[3px]
                        "
                      />
                    </div>

                    {/* Text content */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                            text-[16px]
                            font-medium
                            leading-[1.25]
                            tracking-[-0.02em]
                            text-[#0E2A54]
                            md:text-[18px]
                            md:leading-[24px]
                          "
                      >
                        {cap.title}
                      </h3>

                      <p
                        className="
                            mt-1.5
                            max-w-[458px]
                            text-[13px]
                            font-normal
                            leading-[1.5]
                            text-[#7A7A7A]
                            md:text-[14px]
                            md:leading-[20px]
                          "
                      >
                        {cap.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <OurProcese/>

      {/* 6. FAQ */}
      <section className="w-full bg-white py-6 lg:py-[28px]">
        <div className="kaluna-wide-container">
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[24px]
              bg-[#EAF3FF]
              px-6
              py-10
              md:px-6
              md:py-16
              lg:px-12
              lg:py-20
              flex
              lg:min-h-[clamp(620px,41.875vw,804px)]
              lg:items-start
              lg:pb-[72px]
              lg:pt-[clamp(68px,4.27vw,82px)]
            "
          >
            <div
              className="
                mx-auto
                w-full
                md:w-[72%]
                lg:w-[59.22%]
                lg:max-w-[1137px]
              "
            >
              <h2
                className="
                  text-[24px]
                  font-medium
                  leading-[1.16]
                  tracking-[-0.035em]
                  text-[#0D0D0D]
                  sm:text-[28px]
                  lg:text-[32px]
                "
              >
                Frequently Asked Question
              </h2>

              <div className="mt-4 md:mt-5 lg:mt-6">
                {serviceData.faqs.map((faq, idx) => (
                  <details
                    key={`${faq.q}-${idx}`}
                    open={idx === 0}
                    className="
                      group
                      border-b
                      border-[#D9D9D9]
                      last:border-b-0
                      [&_summary::-webkit-details-marker]:hidden
                    "
                  >
                    <summary
                      className="
                        flex
                        min-h-[72px]
                        cursor-pointer
                        list-none
                        items-center
                        justify-between
                        gap-7
                        py-4
                        outline-none
                        group-open:min-h-[56px]
                        group-open:items-start
                        group-open:pb-2
                        md:min-h-[86px]
                        lg:min-h-[96px]
                      "
                    >
                      <span
                        className="
                          max-w-[calc(100%_-_70px)]
                          text-[15px]
                          font-normal
                          leading-[1.35]
                          tracking-[-0.025em]
                          text-[#7A7A7A]
                          transition-colors
                          duration-300
                          group-hover:text-[#299EED]
                          group-open:text-[#0D0D0D]
                          sm:text-[17px]
                          lg:text-[19px]
                        "
                      >
                        {faq.q}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          relative
                          flex
                          h-[38px]
                          w-[38px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[8px]
                        "
                      >
                        <span
                          className="
                            absolute
                            h-[1.63px]
                            w-[20px]
                            bg-[#299EED]
                            transition-colors
                            duration-300
                            group-open:bg-[#435A88]
                          "
                        />
                        <span
                          className="
                            absolute
                            h-[20px]
                            w-[1.63px]
                            bg-[#299EED]
                            transition-all
                            duration-300
                            group-open:scale-y-0
                            group-open:bg-[#435A88]
                          "
                        />
                      </span>
                    </summary>

                    <div className="pb-6 pr-0 md:pb-[26px] md:pr-[72px]">
                      <p
                        className="
                          max-w-[1085px]
                          text-[13px]
                          font-normal
                          leading-[1.58]
                          tracking-[-0.005em]
                          text-[#3F3F3F]
                          sm:text-[14px]
                          lg:text-[15px]
                          lg:leading-[24px]
                        "
                      >
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED WORKS */}
      <section
        className="
          w-full
          bg-white
          pb-[60px]
          pt-[48px]
          md:pt-[56px]
          lg:pt-[64px]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            w-full
            px-5
            md:px-[48px]
            px-4 md:px-8
          "
        >
          <div className="flex items-center justify-between gap-8">
            <h2
              className="
                max-w-[1320px]
                text-[32px]
                font-medium
                leading-[1.1]
                tracking-[-0.04em]
                text-[#0D0D0D]
                sm:text-[38px]
                md:text-[46px]
                lg:text-[54px]
              "
            >
              Featured {serviceData.title} Works
            </h2>

            <div className="hidden shrink-0 items-center gap-[7px] md:flex">
              <a
                href="#featured-work-1"
                aria-label="Go to previous featured work"
                className="
                  flex
                  h-[54px]
                  w-[54px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#0E2A54]
                  bg-white
                  text-[#0E2A54]
                  transition-colors
                  duration-300
                  hover:bg-[#EAF3FF]
                "
              >
                <svg
                  aria-hidden="true"
                  className="h-[20px] w-[20px]"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M12.5 4.5 7 10l5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={`#featured-work-${Math.min(3, filteredWorks.length)}`}
                aria-label="Go to next featured work"
                className="
                  flex
                  h-[54px]
                  w-[54px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0E2A54]
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#163B70]
                "
              >
                <svg
                  aria-hidden="true"
                  className="h-[20px] w-[20px]"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="m7.5 4.5 5.5 5.5-5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            id="featured-works-list"
            className="
              mt-8
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              pb-2
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              md:mt-[36px]
              md:gap-[30px]
              lg:grid
              lg:grid-cols-3
              lg:overflow-visible
              lg:pb-0
            "
          >
            {filteredWorks.slice(0, 3).map((work, idx) => (
              <Link
                id={`featured-work-${idx + 1}`}
                key={`${work.slug}-${idx}`}
                href={`/works/${work.slug}`}
                className="
                  group
                  relative
                  block
                  aspect-[547/421]
                  w-[84vw]
                  max-w-[547px]
                  shrink-0
                  snap-start
                  overflow-hidden
                  rounded-[24px]
                  bg-[#0E2A54]
                  sm:w-[70vw]
                  md:w-[547px]
                  lg:w-full
                  lg:max-w-none
                "
              >
                <img
                  src={work.images?.[0] || "/image/empty-work.svg"}
                  alt={work.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/10
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[48%]
                    bg-gradient-to-t
                    from-[#081B36]/95
                    via-[#0E2A54]/82
                    to-transparent
                  "
                />

                <h3
                  className="
                    absolute
                    bottom-7
                    left-7
                    right-7
                    z-10
                    text-[25px]
                    font-normal
                    leading-[1.12]
                    tracking-[-0.03em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#299EED]
                    sm:text-[28px]
                    md:bottom-[48px]
                    md:left-[38px]
                    md:right-[38px]
                    md:text-[34px]
                    lg:bottom-[67px]
                    lg:leading-[38px]
                  "
                >
                  {work.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}