import Link from "next/link";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Magnetic from "../src/components/Magnetic";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-5">
        <div className="text-center max-w-lg mx-auto animate-page-enter">
          {/* Decorative graphic and title */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[120px] md:text-[160px] font-black leading-none text-[#0E2A54]/10 select-none">
              404
            </h1>
            <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-[#0E2A54] tracking-tight">
              Page Not Found
            </span>
          </div>

          <p className="text-base text-[#4B5563] mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Magnetic>
              <Link
                href="/"
                className="px-8 py-4 bg-[#0E2A54] text-white rounded-full font-semibold shadow-lg hover:bg-[#163A70] active:scale-95 transition-all"
              >
                Go Back Home
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className="px-8 py-4 border border-[#0E2A54] text-[#0E2A54] rounded-full font-semibold hover:bg-[#0E2A54]/5 active:scale-95 transition-all"
              >
                Contact Support
              </Link>
            </Magnetic>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
