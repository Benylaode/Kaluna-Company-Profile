"use client"
import { useRouter } from "next/navigation";

export default function CTAC() {
  const router = useRouter();

  return (
    <section className="bg-[#FAFAFA] pb-12 md:pb-6">
      <div className="kaluna-wide-container">
        <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-[24px] bg-[#0E2A54] p-8 md:flex-row md:items-center md:px-14 md:py-12">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute bottom-0 right-[15%] h-full w-[45%] skew-x-[-35deg] bg-[#183E75]/80"></div>
            <div className="absolute bottom-0 right-[-10%] h-full w-[35%] skew-x-[-35deg] bg-[#1F5DBA]/25"></div>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-white md:text-[38px]">
              Not sure yet? Take a look at our work
            </h2>
            <p className="text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-[#A3D9F7] md:text-[38px]">
              and see what we've built
            </p>
          </div>

          <div className="relative z-10 flex w-full flex-shrink-0 justify-center md:w-auto md:justify-end">
            <button
              type="button"
              onClick={() => router.push("/works")}
              className="group inline-flex h-14 w-full md:w-auto items-center justify-between gap-4 rounded-full bg-white py-2 pl-8 pr-2 shadow-md transition-all hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-sm font-medium tracking-[0.02em] md:text-base text-[#111111]">See Our Work</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}