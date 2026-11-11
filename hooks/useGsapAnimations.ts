"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered only on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapAnimations() {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Use gsap.matchMedia for responsive & accessibility control
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { reduceMotion } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          // If reduced motion is requested, show everything immediately
          gsap.set(
            ".gsap-fade-up, .gsap-hero-title, .gsap-card, .gsap-skill-bar, .gsap-reveal",
            {
              opacity: 1,
              y: 0,
              visibility: "visible",
            }
          );
          return;
        }

        // 1. Hero Reveal Animation
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl
          .fromTo(
            ".gsap-hero-badge",
            { autoAlpha: 0, y: -15 },
            { autoAlpha: 1, y: 0, duration: 0.6 }
          )
          .fromTo(
            ".gsap-hero-title",
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15 },
            "-=0.3"
          )
          .fromTo(
            ".gsap-hero-desc",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.7 },
            "-=0.4"
          )
          .fromTo(
            ".gsap-hero-actions",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            "-=0.3"
          )
          .fromTo(
            ".gsap-hero-visual",
            { autoAlpha: 0, scale: 0.96, y: 25 },
            { autoAlpha: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.5"
          );

        // Ambient floating animation for hero decorative cards
        gsap.to(".gsap-floating-element", {
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.8,
        });

        // 2. About Section Reveal
        gsap.fromTo(
          "#about .gsap-fade-up",
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#about",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // 3. Skills Cards & Progress Bars
        gsap.fromTo(
          ".gsap-skill-card",
          { autoAlpha: 0, y: 30, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#skills",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );

        // Animate skill progress bars width on scroll
        const skillBars = document.querySelectorAll(".gsap-skill-bar");
        skillBars.forEach((bar) => {
          const targetWidth = bar.getAttribute("data-width") || "0%";
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: targetWidth,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // 4. Project Cards Reveal
        gsap.fromTo(
          ".gsap-project-card",
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#projects",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );

        // 5. Contact Section Reveal
        gsap.fromTo(
          "#contact .gsap-fade-up",
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#contact",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    );

    isLoaded.current = true;

    return () => {
      mm.revert();
    };
  }, []);
}

export { gsap, ScrollTrigger };

