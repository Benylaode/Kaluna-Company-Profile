"use client"
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="bg-transparent pb-12 md:pb-3 lg:pb-3 w-full border-none outline-none">
      <div className="kaluna-wide-container">
        <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-[24px] bg-[#0E2A54] px-5 py-8 md:flex-row md:items-center md:px-6 md:py-12 lg:px-12 lg:py-16 border-none outline-none">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute bottom-0 right-[15%] h-full w-[45%] skew-x-[-35deg] bg-[#183E75]/80"></div>
            <div className="absolute bottom-0 right-[-10%] h-full w-[35%] skew-x-[-35deg] bg-[#1F5DBA]/25"></div>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-[28px] leading-[1.2] tracking-[-0.01em] text-white md:text-[38px]">
              Let&apos;s Build Intelligent Systems
            </h2>
            <p className="text-[28px] leading-[1.2] tracking-[-0.01em] text-[#A3D9F7] md:text-[38px]">
              That Scale With You
            </p>
          </div>

          <div className="relative z-10 flex w-full flex-shrink-0 justify-center md:w-auto md:justify-end">
            <Button
              variant="primary-white"
              label="Start a Consultation"
              onClick={() => router.push("/contact")}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}