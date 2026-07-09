import { RefreshCw } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-5 py-24 text-center animate-page-enter">
      {/* Premium loader ring */}
      <div className="relative mb-8 flex items-center justify-center w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#299EED] border-r-[#0E2A54] animate-spin" />
        <div className="absolute w-6 h-6 rounded-full bg-[#0E2A54]/10 animate-ping" />
      </div>
      
      {/* Premium loading structure */}
      <div className="space-y-4 max-w-sm w-full">
        <div className="h-6 w-32 bg-gray-200 rounded-md animate-shimmer mx-auto" />
        <div className="h-4 w-56 bg-gray-100 rounded-md animate-shimmer mx-auto" />
        
        {/* Horizontal staggered skeletons */}
        <div className="grid grid-cols-3 gap-3 pt-6">
          <div className="h-10 bg-gray-100 rounded-full animate-shimmer" />
          <div className="h-10 bg-gray-100 rounded-full animate-shimmer" />
          <div className="h-10 bg-gray-100 rounded-full animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
