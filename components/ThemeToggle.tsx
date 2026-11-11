"use client";

import { useRef } from "react";
import { Moon, Sun } from "lucide-react";

const FADE_DURATION = 400;
const REVEAL_DURATION = 550;
const REVEAL_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = !root.classList.contains("dark");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const applyTheme = () => {
      root.classList.toggle("dark", isDark);

      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch {
        // localStorage unavailable (private mode, etc.) — theme still toggles for this visit
      }
    };

    // 1. Circular reveal expanding from this button (View Transitions API)
    if (
      typeof document.startViewTransition === "function" &&
      !prefersReducedMotion
    ) {
      const rect = buttonRef.current?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      // Radius needed to cover the farthest corner of the viewport
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(applyTheme);

      transition.ready
        .then(() => {
          root.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: REVEAL_DURATION,
              easing: REVEAL_EASING,
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {
          // Transition skipped (e.g. rapid re-click) — theme is already applied
        });

      return;
    }

    // 2. Fallback: temporary global color cross-fade, then instant flip
    if (!prefersReducedMotion) {
      root.classList.add("theme-fading");
      window.setTimeout(() => {
        root.classList.remove("theme-fading");
      }, FADE_DURATION + 50);
    }

    applyTheme();
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center border border-line bg-surface text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
      aria-label="Ganti tema terang atau gelap"
      title="Ganti tema terang/gelap"
    >
      {/* Icons are swapped purely via CSS (dark variant) to avoid hydration mismatch */}
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );
}
