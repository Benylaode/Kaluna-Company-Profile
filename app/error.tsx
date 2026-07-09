"use client";

import { useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { ServerErrorState } from "../src/components/StateFeedback";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Standard error diagnostics logging
    console.error("Application error captured:", error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-5">
        <ServerErrorState error={error} reset={reset} />
      </main>
      
      <Footer />
    </div>
  );
}
