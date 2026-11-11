"use client";

import { Cpu, TrendingUp, Sparkles } from "lucide-react";

interface SkillItem {
  name: string;
  category: "Frontend" | "Design" | "Programming";
  percentage: number;
  description: string;
  highlight: string;
}

const skillsData: SkillItem[] = [
  {
    name: "HTML5",
    category: "Frontend",
    percentage: 50,
    description:
      "Struktur semantik dokumen web, aksesibilitas dasar (a11y), form validation, dan SEO best practices.",
    highlight: "Semantic & Responsive Web",
  },
  {
    name: "Figma",
    category: "Design",
    percentage: 45,
    description:
      "Perancangan wireframe, antarmuka mobile/desktop, auto layout, komponen interaktif, dan prototyping visual.",
    highlight: "UI/UX & Prototyping",
  },
  {
    name: "CSS3",
    category: "Frontend",
    percentage: 20,
    description:
      "Modern CSS layouts (Flexbox, Grid), responsive breakpoints, transisi halus, dan styling estetis.",
    highlight: "Flexbox, Grid & Animation",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    percentage: 5,
    description:
      "Dasar sintaks ES6+, manipulasi DOM, penanganan event, dan interaktivitas dinamis pada halaman web.",
    highlight: "DOM & Dynamic Logic",
  },
  {
    name: "Python",
    category: "Programming",
    percentage: 5,
    description:
      "Pemahaman konsep pemrograman dasar, struktur kontrol, fungsi, dan logika algoritma komputasi.",
    highlight: "Algorithmic Fundamentals",
  },
  {
    name: "C#",
    category: "Programming",
    percentage: 5,
    description:
      "Mempelajari dasar Object-Oriented Programming (OOP), tipe data, dan logika aplikasi berbasis kelas.",
    highlight: "OOP & Core Syntax",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted sm:text-[11px]">
            <span className="h-px w-8 bg-ink" />
            <Cpu className="h-3.5 w-3.5 text-ink" />
            <span>02 — Skills</span>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
            Tools &amp; keterampilan yang dipelajari.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Persentase merupakan parameter estimasi awal dari proses belajar
            aktif saya di SMK Negeri 1 Banjar dan eksplorasi mandiri secara
            berkala.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="gsap-skill-card group flex flex-col justify-between border border-line bg-background p-6 transition-colors hover:border-ink"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  <span>{skill.category}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-[-0.04em] text-ink">
                    {skill.percentage}
                  </span>
                  <span className="font-mono text-sm text-muted">%</span>
                </div>

                <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
                  {skill.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  {skill.highlight}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 border-t border-line pt-3">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  <span>Learning progress</span>
                  <span className="text-ink">{skill.percentage}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-surface-strong">
                  <div
                    className="gsap-skill-bar h-full bg-ink"
                    data-width={`${skill.percentage}%`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment banner */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 bg-ink p-6 text-background sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center border border-background/25 text-background">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-tight">
                Komitmen Pertumbuhan Berkelanjutan
              </h4>
              <p className="mt-1 max-w-2xl text-xs leading-relaxed text-background/60">
                Kemampuan di atas akan terus diuji dan ditingkatkan melalui tugas
                sekolah, proyek open-source, dan eksplorasi teknologi baru.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 border border-background/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-background">
            <Sparkles className="h-3 w-3" />
            Aktif Berkembang
          </span>
        </div>
      </div>
    </section>
  );
}
