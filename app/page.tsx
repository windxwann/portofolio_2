"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LanguageMarquee from "@/components/LanguageMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useGsapAnimations } from "@/hooks/useGsapAnimations";

export default function Home() {
  // Initialize GSAP ScrollTrigger & matchMedia animations
  useGsapAnimations();

  return (
    <div className="flex min-h-screen flex-col bg-background text-ink antialiased selection:bg-ink selection:text-background">
      {/* Fixed top navigation with text menu on the right */}
      <Navbar />

      <main className="w-full flex-1">
        <Hero />
        <LanguageMarquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
