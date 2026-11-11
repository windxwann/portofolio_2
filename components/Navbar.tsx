"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const sections = ["hero", "about", "skills", "projects", "contact"];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Close menu if window is resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <button
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          aria-label="Kembali ke bagian Home"
        >
          <span className="grid h-7 w-7 place-items-center bg-ink font-mono text-[11px] font-bold text-background transition-transform group-hover:rotate-6">
            w
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors">
            with.wann
          </span>
        </button>

        {/* Right side navigation & controls */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Desktop navigation - visible on lg and up */}
          <nav aria-label="Navigasi desktop" className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    isActive ? "font-bold text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ink" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Vertical divider on desktop */}
          <div className="hidden h-5 w-px bg-line lg:block" aria-hidden="true" />

          {/* Theme toggle - positioned on the right */}
          <ThemeToggle />

          {/* Hamburger button - mobile only */}
          <button
            ref={hamburgerRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center border border-line bg-surface text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink lg:hidden"
            aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 top-16 z-30 bg-ink/20 backdrop-blur-xs transition-opacity duration-300 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile navigation drawer */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen ? true : undefined}
        className={`fixed inset-x-0 top-16 z-40 border-b border-line bg-background/98 backdrop-blur-xl transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100 shadow-2xl"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
          <div className="mb-3 flex items-center justify-between border-b border-line/60 pb-2.5">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Navigasi Menu
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/70">
              {navItems.length} Sections
            </span>
          </div>

          <nav aria-label="Navigasi mobile" className="flex flex-col divide-y divide-line/40">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex w-full items-center justify-between py-3.5 text-left font-mono text-xs uppercase tracking-[0.16em] transition-all ${
                    isActive
                      ? "font-bold text-ink"
                      : "text-muted hover:text-ink hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] tracking-normal ${
                        isActive ? "font-bold text-ink" : "text-muted/60"
                      }`}
                    >
                      0{index + 1}.
                    </span>
                    <span>{item.label}</span>
                  </div>

                  {isActive ? (
                    <span className="flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="text-muted/40 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 flex flex-col gap-1.5 border-t border-line/60 pt-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              Banjar, West Java, Indonesia
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/60">
              © 2026 with.wann
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
