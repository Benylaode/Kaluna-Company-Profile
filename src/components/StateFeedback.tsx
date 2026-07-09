"use client";

import { useEffect, useState } from "react";
import { WifiOff, AlertTriangle, Clock, ShieldAlert, FolderOpen, RefreshCw } from "lucide-react";
import Magnetic from "./Magnetic";

// ==========================================
// 1. EMPTY STATE
// ==========================================
export function EmptyState({ 
  title = "No Data Found", 
  description = "We couldn't find any results matching your filters. Try resetting them.", 
  onReset 
}: { 
  title?: string; 
  description?: string; 
  onReset?: () => void; 
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-page-enter max-w-md mx-auto my-12">
      <div className="relative mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-[#299EED]/10 text-[#299EED] group">
        <FolderOpen size={48} className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
        <div className="absolute inset-0 rounded-full border border-dashed border-[#299EED]/30 animate-[spin_20s_linear_infinite]" />
      </div>
      <h3 className="text-xl font-bold text-[#0E2A54] mb-2">{title}</h3>
      <p className="text-sm text-[#4B5563] mb-6">{description}</p>
      {onReset && (
        <Magnetic>
          <button
            onClick={onReset}
            className="px-6 py-3 bg-[#0E2A54] text-white rounded-full font-medium shadow-md hover:bg-[#163A70] active:scale-95 transition-transform"
          >
            Reset Filters
          </button>
        </Magnetic>
      )}
    </div>
  );
}

// ==========================================
// 2. NO INTERNET STATE
// ==========================================
export function NoInternet({ onRetry }: { onRetry?: () => void }) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-page-enter max-w-md mx-auto my-16">
      <div className="relative mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-red-50 text-red-500">
        <WifiOff size={48} className="animate-[pulse_2s_infinite]" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </div>
      <h3 className="text-xl font-bold text-[#0E2A54] mb-2">Connection Lost</h3>
      <p className="text-sm text-[#4B5563] mb-6">
        {isOnline 
          ? "You are back online! Press refresh to restore live content." 
          : "Please check your network cables or Wi-Fi connection and try again."}
      </p>
      <Magnetic>
        <button
          onClick={() => {
            if (onRetry) onRetry();
            else window.location.reload();
          }}
          className="flex items-center gap-2 px-6 py-3 bg-[#0E2A54] text-white rounded-full font-medium shadow-md hover:bg-[#163A70] active:scale-95 transition-transform"
        >
          <RefreshCw size={16} className={!isOnline ? "animate-spin" : ""} />
          Reconnect Now
        </button>
      </Magnetic>
    </div>
  );
}

// ==========================================
// 3. TIMEOUT STATE
// ==========================================
export function TimeoutState({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-page-enter max-w-md mx-auto my-16">
      <div className="relative mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-amber-50 text-amber-500">
        <Clock size={48} className="animate-[spin_8s_linear_infinite]" />
        <div className="absolute inset-2 border-2 border-dashed border-amber-300 rounded-full animate-[spin_12s_linear_infinite]" />
      </div>
      <h3 className="text-xl font-bold text-[#0E2A54] mb-2">Request Timeout</h3>
      <p className="text-sm text-[#4B5563] mb-6">
        The server is taking too long to respond. This might be due to heavy traffic or network lag.
      </p>
      <Magnetic>
        <button
          onClick={() => {
            if (onRetry) onRetry();
            else window.location.reload();
          }}
          className="flex items-center gap-2 px-6 py-3 bg-[#0E2A54] text-white rounded-full font-medium shadow-md hover:bg-[#163A70] active:scale-95 transition-transform"
        >
          <RefreshCw size={16} />
          Retry Request
        </button>
      </Magnetic>
    </div>
  );
}

// ==========================================
// 4. FORBIDDEN (403) STATE
// ==========================================
export function ForbiddenState() {
  const [locked, setLocked] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-page-enter max-w-md mx-auto my-16">
      <div 
        onClick={() => setLocked(!locked)}
        className="relative mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 text-gray-700 cursor-pointer group"
      >
        <ShieldAlert 
          size={48} 
          className={`transition-transform duration-500 ${locked ? "" : "scale-110 text-red-500 rotate-12"}`} 
        />
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-red-500/20 transition-all duration-300" />
      </div>
      <h3 className="text-xl font-bold text-[#0E2A54] mb-2">Access Denied</h3>
      <p className="text-sm text-[#4B5563] mb-6">
        You do not have permission to view this directory or page. Status Code: 403 Forbidden.
      </p>
      <Magnetic>
        <a
          href="/"
          className="px-6 py-3 bg-[#0E2A54] text-white rounded-full font-medium shadow-md hover:bg-[#163A70] active:scale-95 transition-transform"
        >
          Return to Dashboard
        </a>
      </Magnetic>
    </div>
  );
}

// ==========================================
// 5. SERVER ERROR (500) & ERROR FALLBACK STATE
// ==========================================
export function ServerErrorState({ 
  error, 
  reset 
}: { 
  error?: Error; 
  reset?: () => void; 
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-page-enter max-w-2xl mx-auto my-12 bg-white rounded-2xl border border-red-100 shadow-xl">
      <div className="relative mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600">
        <AlertTriangle size={40} className="animate-[bounce_2s_infinite]" />
      </div>
      <h3 className="text-2xl font-bold text-[#0E2A54] mb-3">Something Went Wrong</h3>
      <p className="text-base text-[#4B5563] mb-6 max-w-md">
        An internal server error occurred, or a component crashed. We have been notified and are looking into it.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {reset && (
          <Magnetic>
            <button
              onClick={reset}
              className="px-6 py-3 bg-[#0E2A54] text-white rounded-full font-medium shadow-md hover:bg-[#163A70] active:scale-95 transition-transform"
            >
              Try Again
            </button>
          </Magnetic>
        )}
        <Magnetic>
          <a
            href="/"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 active:scale-95 transition-transform"
          >
            Go Home
          </a>
        </Magnetic>
      </div>

      {error && (
        <div className="w-full text-left">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs font-semibold text-[#299EED] hover:underline focus:outline-none mb-3 block mx-auto text-center"
          >
            {showDetails ? "Hide System Diagnostics" : "Show System Diagnostics"}
          </button>
          {showDetails && (
            <pre className="p-4 bg-gray-50 rounded-xl text-xs font-mono text-gray-600 overflow-x-auto max-h-48 border border-gray-200 animate-fade-in">
              <strong>Error:</strong> {error.message || "Unknown error"}
              {"\n\n"}
              <strong>Stack:</strong> {error.stack || "No stack trace available"}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

// ==========================================
// 6. SKELETON LOADERS
// ==========================================
export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm space-y-4">
      <div className="h-44 w-full rounded-xl animate-shimmer" />
      <div className="space-y-2">
        <div className="h-5 w-2/3 rounded-md animate-shimmer" />
        <div className="h-4 w-full rounded-md animate-shimmer" />
        <div className="h-4 w-5/6 rounded-md animate-shimmer" />
      </div>
      <div className="pt-2 flex justify-between items-center">
        <div className="h-8 w-24 rounded-full animate-shimmer" />
        <div className="h-6 w-12 rounded-md animate-shimmer" />
      </div>
    </div>
  );
}

export function SkeletonBanner() {
  return (
    <div className="w-full h-44 rounded-2xl animate-shimmer flex items-center justify-center p-8">
      <div className="space-y-3 w-1/3">
        <div className="h-8 w-full rounded-md bg-white/40" />
        <div className="h-4 w-2/3 rounded-md bg-white/40 mx-auto" />
      </div>
    </div>
  );
}
