"use client";

import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden border-b border-line pb-12 pt-24 sm:pt-28 lg:flex lg:min-h-screen lg:items-center lg:pb-16 lg:pt-20"
    >
      {/* Background Dot Grid */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Identity, Bio & CTAs */}
          <div className="relative z-10 lg:col-span-7 xl:col-span-7">
            {/* Meta tag */}
            <div className="gsap-hero-badge flex flex-wrap items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted sm:text-[11px]">
              <span className="h-1.5 w-1.5 bg-ink" />
              <span>Portfolio</span>
              <span className="h-px w-8 bg-line sm:w-12" />
              <span className="text-ink">Hello, I&apos;m</span>
            </div>

            {/* Main title */}
            <h1 className="gsap-hero-title mt-6 text-4xl font-extrabold leading-[0.94] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
              Ridwan Sahidi
              <br />
              <span className="text-ink">Nugraha</span>
            </h1>

            {/* Subtitle / Roles */}
            <div className="gsap-hero-title mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] sm:text-xs">
              <span className="text-ink">Front-End Developer</span>
              <span className="text-line">/</span>
              <span className="text-muted">Web Enthusiast</span>
            </div>

            {/* Bio paragraph */}
            <p className="gsap-hero-desc mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Pelajar Rekayasa Perangkat Lunak di SMK Negeri 1 Banjar yang
              berfokus pada pengembangan antarmuka web modern, visual minimalis,
              dan animasi interaktif yang elegan.
            </p>

            {/* Location & Availability Status */}
            <div className="gsap-hero-desc mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:text-[11px]">
              <MapPin className="h-3.5 w-3.5 text-ink" />
              <span>Banjar, West Java, Indonesia</span>
            </div>

            {/* Action buttons */}
            <div className="gsap-hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-3 bg-ink px-6 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-ink-hover"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/cv-ridwan.pdf"
                download="CV-Ridwan-Sahidi-Nugraha.pdf"
                className="inline-flex items-center justify-center gap-3 border border-ink px-6 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Bottom Copyright line with subtle divider */}
            <div className="mt-12 hidden items-center gap-4 pt-4 sm:flex">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/80">
                © 2026 Ridwan Sahidi Nugraha. All rights reserved.
              </span>
              <div className="h-px flex-1 bg-line/60" />
            </div>
          </div>

          {/* Right Column: Freeform Portrait Cutout & Harmonized Circle Backdrop */}
          <div className="relative flex items-center justify-center lg:col-span-5 xl:col-span-5">
            {/* Ambient Aura Glow behind the circle */}
            <div
              className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/5 sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]"
              aria-hidden="true"
            />

            {/* Outer Orbital Ring */}
            <div
              className="pointer-events-none absolute h-[340px] w-[340px] rounded-full border border-line/70 dark:border-line/40 sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]"
              aria-hidden="true"
            />

            {/* Inner Circle Stage / Backdrop — Centered Circular Showcase */}
            <div
              className="relative flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full border border-line bg-surface/75 shadow-inner dark:bg-surface/40 sm:h-[330px] sm:w-[330px] lg:h-[370px] lg:w-[370px]"
            >
              {/* Subtle dot grid inside the circle disk */}
              <div className="pointer-events-none absolute inset-0 rounded-full dot-grid opacity-60" />

              {/* The Portrait Cutout Figure — perfectly centered & proportioned inside the circle */}
              <div className="gsap-hero-visual relative z-10 flex items-center justify-center pt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-cutout.png"
                  alt="Ridwan Sahidi Nugraha"
                  className="h-[230px] w-auto max-w-none object-contain drop-shadow-lg transition-transform duration-500 ease-out hover:scale-105 sm:h-[270px] lg:h-[310px]"
                />
              </div>
            </div>

            {/* Floating 'Available for Collaboration' badge */}
            <div className="gsap-floating-element absolute -top-4 right-0 z-20 flex items-center gap-2 border border-ink bg-ink px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-background hard-shadow-sm sm:-top-6 sm:right-2">
              <span className="h-1.5 w-1.5 animate-pulse bg-background" />
              Available for collaboration
            </div>

            {/* Decorative Sparkle Star */}
            <div className="gsap-floating-element pointer-events-none absolute right-2 top-20 z-20 hidden text-ink/70 sm:block lg:right-4 lg:top-24">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Decorative Solid Square Accent */}
            <div className="gsap-floating-element pointer-events-none absolute right-12 top-1/2 z-20 hidden h-2 w-2 bg-ink sm:block lg:right-14" />
          </div>
        </div>
      </div>

      {/* Far Right: Vertical Scroll to Discover Indicator */}
      <div className="absolute bottom-8 right-6 z-20 hidden flex-col items-center gap-3 lg:flex">
        <span
          className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll to discover
        </span>
      </div>
    </section>
  );
}
