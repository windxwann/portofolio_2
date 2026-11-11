"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-background/10 bg-ink py-10 text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.16em]">
              with.wann
            </span>
            <span className="border border-background/25 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-background/60">
              Portfolio
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-background/50">
            © 2026 Ridwan Sahidi Nugraha. All rights reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 border border-background/25 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-ink"
          aria-label="Kembali ke atas"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
