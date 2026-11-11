"use client";

import {
  GraduationCap,
  BookOpen,
  Code,
  Palette,
  Compass,
  Calendar,
  Quote,
} from "lucide-react";

interface EducationItem {
  period: string;
  institution: string;
  level: string;
  description: string;
  isCurrent?: boolean;
}

const educationHistory: EducationItem[] = [
  {
    period: "2024 – Sekarang",
    institution: "SMK Negeri 1 Banjar",
    level: "Rekayasa Perangkat Lunak (RPL)",
    description:
      "Fokus mendalami kejuruan RPL, mencakup dasar-dasar pemrograman, logika algoritma, perancangan web, antarmuka pengguna, dan software engineering.",
    isCurrent: true,
  },
  {
    period: "2022 – 2024",
    institution: "SMP Negeri 3 Banjar",
    level: "Sekolah Menengah Pertama",
    description:
      "Masa eksplorasi awal terhadap dunia teknologi informasi, komputer, serta mulai tertarik dengan bagaimana sebuah website dan visual grafis dibuat.",
  },
  {
    period: "2017 – 2022",
    institution: "SD Negeri 1 Mekarsari",
    level: "Sekolah Dasar",
    description:
      "Pendidikan dasar yang membangun fondasi kedisiplinan, rasa ingin tahu yang tinggi, dan antusiasme terhadap sains dan teknologi.",
  },
];

const pillars = [
  {
    icon: Code,
    title: "Front-End Development",
    desc: "Menerjemahkan ide dan desain menjadi antarmuka web interaktif yang cepat, rapi, dan responsif.",
  },
  {
    icon: Palette,
    title: "Minimalist UI/UX",
    desc: "Mengutamakan kenyamanan pengguna melalui whitespace seimbang, hierarki visual jelas, dan tipografi tegas.",
  },
  {
    icon: Compass,
    title: "Continuous Curiosity",
    desc: "Semangat belajar mandiri yang tinggi dalam mengeksplorasi teknologi web modern dan tools kreatif.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="gsap-fade-up max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted sm:text-[11px]">
            <span className="h-px w-8 bg-ink" />
            <BookOpen className="h-3.5 w-3.5 text-ink" />
            <span>01 — About</span>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
            Mengenal lebih dekat perjalanan &amp; dedikasi.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Dokumentasi perjalanan saya dari rasa penasaran menjadi minat yang
            serius dalam dunia Rekayasa Perangkat Lunak dan rancang bangun web.
          </p>
        </div>

        {/* Profile: principle card on the left, narrative on the right */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <figure className="gsap-fade-up relative flex flex-col justify-between overflow-hidden border border-ink bg-ink p-7 text-background hard-shadow-sm lg:col-span-4">
            <Quote className="h-5 w-5 text-background/40" aria-hidden="true" />
            <blockquote className="mt-6 font-heading text-lg font-bold leading-snug tracking-tight sm:text-xl">
              Hidup bukan tentang siapa yang paling cepat, tetapi siapa yang terus melangkah tanpa menyerah.
            </blockquote>
            <figcaption className="mt-8 border-t border-background/20 pt-4">
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-background/50">
                Motivation
              </div>
            </figcaption>
          </figure>

          <div className="gsap-fade-up flex flex-col border border-line bg-background p-7 sm:p-9 lg:col-span-8">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-ink">
              <span className="h-2.5 w-2.5 bg-ink" />
              Profil &amp; Latar Belakang
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Halo! Saya{" "}
                <strong className="font-semibold text-ink">
                  Ridwan Sahidi Nugraha
                </strong>
                , seorang pelajar jurusan Rekayasa Perangkat Lunak (RPL) di SMK
                Negeri 1 Banjar, Jawa Barat. Saya memiliki antusiasme yang kuat
                terhadap desain antarmuka dan pengembangan Front-End.
              </p>
              <p>
                Bagi saya, website bukan sekadar kumpulan kode, melainkan sebuah
                media komunikasi visual yang harus memberikan pengalaman
                menyenangkan bagi siapapun yang mengunjunginya. Karena itu, saya
                memadukan estetika desain minimalis dengan sentuhan animasi
                interaktif yang tidak berlebihan.
              </p>
            </div>

            <div className="mt-auto grid grid-cols-1 gap-4 border-t border-line pt-5 sm:grid-cols-2">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Personal Brand
                </span>
                <p className="mt-1 text-sm font-semibold text-ink">with.wann</p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Fokus Saat Ini
                </span>
                <p className="mt-1 text-sm font-semibold text-ink">
                  Web Dev &amp; UI/UX Figma
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principles: one full-width row */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="gsap-fade-up group flex flex-col border border-line bg-background p-6 transition-colors hover:border-ink"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center border border-ink bg-background text-ink transition-colors group-hover:bg-ink group-hover:text-background">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mt-4 text-sm font-bold tracking-tight text-ink">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education timeline */}
        <div className="gsap-fade-up mt-16">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center border border-ink bg-ink text-background">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-ink">
                Riwayat Pendidikan
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                Fondasi akademis yang membentuk karakter dan kompetensi
              </p>
            </div>
          </div>

          <div className="ml-1.5 mt-8 border-l border-line">
            {educationHistory.map((item) => (
              <div key={item.institution} className="group relative pl-8 pb-8 last:pb-0">
                <div
                  className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border border-ink transition-transform group-hover:scale-125 ${
                    item.isCurrent ? "bg-ink" : "bg-background"
                  }`}
                />

                <div className="border border-line bg-background p-6 transition-colors group-hover:border-ink">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      <Calendar className="h-3 w-3 text-ink" />
                      {item.period}
                    </span>
                    {item.isCurrent && (
                      <span className="bg-ink px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-background">
                        Aktif / Berjalan
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold tracking-tight text-ink">
                    {item.institution}
                  </h4>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    {item.level}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
