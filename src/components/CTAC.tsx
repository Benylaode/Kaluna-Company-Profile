"use client";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

export default function CTAC() {
  const router = useRouter();

  return (
    <section className="bg-[#FAFAFA] pb-12 md:pb-3 lg:pb-3 w-full">
      <div className="kaluna-wide-container">
        <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-[24px] bg-[#0E2A54] px-5 py-8 md:flex-row md:items-center md:px-6 md:py-12 lg:px-12 lg:py-16">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute bottom-0 right-[15%] h-full w-[45%] skew-x-[-35deg] bg-[#183E75]/80"></div>
            <div className="absolute bottom-0 right-[-10%] h-full w-[35%] skew-x-[-35deg] bg-[#1F5DBA]/25"></div>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-[28px] leading-[1.3] tracking-[-0.01em] text-white md:text-[36px] font-medium">
              Not sure yet? Take a look at our work
            <p className="text-[28px] font-normal leading-[1.2] tracking-[-0.01em] text-[#A3D9F7] md:text-[38px]">
              and see what we've built
            </p>
            </h2>
          </div>

          <div className="relative z-10 flex w-full flex-shrink-0 justify-center md:w-auto md:justify-end">
            <Button
              variant="primary-white"
              label="See Our Work"
              onClick={() => router.push("/works")}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
