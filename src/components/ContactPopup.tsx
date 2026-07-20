"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
}

export default function ContactPopup({ isOpen, onClose, packageName }: ContactPopupProps) {
  const router = useRouter();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const waMessage = packageName
    ? encodeURIComponent(`Halo, saya tertarik dengan paket *${packageName}* dari Kaluna Technology. Bisa bantu saya?`)
    : encodeURIComponent("Halo, saya ingin berkonsultasi mengenai layanan Kaluna Technology.");

  const waUrl = `https://wa.me/628213939569?text=${waMessage}`;

  return (
    <>
      {/* Backdrop blur overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-[#0D2342]/60 backdrop-blur-[6px] transition-opacity duration-300"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      >
        <div
          className="relative w-full max-w-[480px] overflow-hidden rounded-[24px] bg-white shadow-[0_24px_64px_rgba(13,35,66,0.22)] animate-popup-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header gradient bar */}
          <div className="h-[5px] w-full bg-gradient-to-r from-[#0E2A54] via-[#299EED] to-[#63C5F5]" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-4 top-5 flex h-9 w-9 items-center justify-center rounded-full text-[#94A3B8] transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#0E2A54]"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="px-7 pb-8 pt-6">
            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF3FF]">
              <svg
                className="h-7 w-7 text-[#0E2A54]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>

            {/* Title */}
            <h2
              id="contact-popup-title"
              className="mb-2 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0D2342]"
            >
              {packageName ? `Paket ${packageName}` : "Hubungi Kami"}
            </h2>
            <p className="mb-7 text-[14px] leading-relaxed text-[#64748B]">
              Pilih cara yang paling nyaman untuk kamu terhubung dengan tim kami.
            </p>

            {/* Divider */}
            <div className="mb-7 h-px w-full bg-[#E9EEF5]" />

            {/* Options */}
            <div className="flex flex-col gap-3">
              {/* Consultation option */}
              <button
                onClick={() => {
                  onClose();
                  router.push("/contact");
                }}
                className="group flex w-full items-center gap-4 rounded-2xl border border-[#E2EAF4] bg-[#F8FBFF] p-4 text-left transition-all duration-200 hover:border-[#299EED]/40 hover:bg-[#EAF3FF] hover:shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0E2A54] text-white transition-all duration-200 group-hover:bg-[#299EED]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-semibold leading-none text-[#0D2342]">Start a Consultation</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#64748B]">Isi form konsultasi kami dan tim akan segera menghubungi kamu.</p>
                </div>
                <svg className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#299EED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* WhatsApp option */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group flex w-full items-center gap-4 rounded-2xl border border-[#E2EAF4] bg-[#F8FBFF] p-4 text-left transition-all duration-200 hover:border-[#25D366]/40 hover:bg-[#F0FFF6] hover:shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white transition-all duration-200 group-hover:bg-[#1EB057]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-semibold leading-none text-[#0D2342]">Hubungi via WhatsApp</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#64748B]">Chat langsung dengan CS kami sekarang.</p>
                </div>
                <svg className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Footer note */}
            <p className="mt-6 text-center text-[11px] text-[#94A3B8]">
              Respons dalam 1×24 jam pada hari kerja
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popup-in {
          from { opacity: 0; transform: scale(0.94) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-popup-in {
          animation: popup-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </>
  );
}
