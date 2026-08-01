"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="id">
      <body className="bg-[#0E2A54] text-white flex min-h-screen items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="w-16 h-16 bg-[#299EED]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#299EED]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-white">System Encountered an Error</h1>
          <p className="text-sm text-gray-300 mb-6">
            An unexpected application error occurred. Please try reloading.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="px-5 py-2.5 bg-[#299EED] hover:bg-[#1F5DBA] text-white font-semibold rounded-full transition-colors text-sm cursor-pointer"
            >
              Try Again
            </button>
            <a
              href="/"
              className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-colors text-sm"
            >
              Back to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
