"use client";

import { useEffect } from "react";

export function SuccessToast({
  open,
  message,
  onClose,
}: {
  open: boolean;
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, 6000);
    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed right-4 bottom-4 z-[100] max-w-sm animate-[toast-in_0.35s_ease-out] rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--ink)] px-5 py-4 text-sm text-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.65)]"
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-strong)] text-xs font-bold"
          aria-hidden
        >
          ✓
        </span>
        <div className="min-w-0">
          <p className="font-semibold">Message sent</p>
          <p className="mt-1 text-white/80">{message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-white/60 transition hover:text-white"
          aria-label="Dismiss notification"
        >
          ×
        </button>
      </div>
    </div>
  );
}
