"use client";

import { useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  Palette,
  Eye,
  CheckCircle,
  X,
  Smartphone,
  Laptop,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Website Development" | "UI/UX Design";
  tools: string[];
  description: string;
  longDescription: string;
  link?: string;
  featured: boolean;
  status: string;
  highlights: string[];
  type: "web" | "design";
}

const projects: Project[] = [
  {
    id: "ghibli-web",
    title: "Studio Ghibli Tribute Website",
    category: "Website Development",
    tools: ["HTML5", "CSS3", "Responsive Design", "Visual Storytelling"],
    description:
      "Website bertema Studio Ghibli dengan pendekatan visual dan storytelling yang hangat, memperkenalkan film-film legendaris melalui antarmuka web interaktif.",
    longDescription:
      "Proyek ini dibangun untuk menggabungkan kehangatan estetika visual khas Studio Ghibli dengan implementasi kode web yang bersih. Menggunakan HTML semantik dan CSS kustom untuk menciptakan tata letak harmonis, tipografi ramah, dan pengalaman membaca yang nyaman.",
    link: "https://wann-studioghibli.netlify.app/",
    featured: true,
    status: "Live Production",
    highlights: [
      "Karakter visual hangat terinspirasi film animasi legendaris",
      "Struktur kode HTML5 semantik dan CSS3 murni",
      "Responsif di berbagai ukuran layar monitor dan tablet",
      "Navigasi katalog film yang intuitif",
    ],
    type: "web",
  },
  {
    id: "furniture-ui",
    title: "UI/UX Design Pemesanan Furniture",
    category: "UI/UX Design",
    tools: ["Figma", "UI/UX Research", "Wireframing", "Design System"],
    description:
      "Perancangan antarmuka aplikasi pemesanan furniture modern dengan fokus pada kemudahan navigasi, visual clean, dan kenyamanan pengguna.",
    longDescription:
      "Studi kasus desain antarmuka e-commerce furniture yang mengutamakan kemudahan navigasi bagi pengguna dalam mencari perabotan rumah tangga. Menitikberatkan pada hierarchy produk, filter kategori yang efisien, dan proses checkout yang ringkas.",
    featured: true,
    status: "Figma Prototype",
    highlights: [
      "Palet warna modern & minimalis yang menonjolkan foto produk",
      "Komponen desain modular dan reusable di Figma",
      "Alur pemesanan (flow checkout) yang ringkas dan bebas friksi",
      "Grid dan typography yang terstruktur rapi",
    ],
    type: "design",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeDesignTab, setActiveDesignTab] = useState<"catalog" | "detail" | "cart">("catalog");

  return (
    <section id="projects" className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted sm:text-[11px]">
            <span className="h-px w-8 bg-ink" />
            <FolderGit2 className="h-3.5 w-3.5 text-ink" />
            <span>03 — Projects</span>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
            Hasil pekerjaan &amp; eksplorasi proyek.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Setiap proyek dikerjakan dengan dedikasi untuk mengasah keahlian
            pemrograman, estetika desain visual, dan pengalaman pengguna nyata.
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="gsap-project-card group flex flex-col overflow-hidden border border-line bg-background card-hover-effect"
            >
              {/* Terminal-style banner */}
              <div className="border-b border-line bg-ink p-6 text-background sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 border border-background/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-background/80">
                    {project.type === "web" ? (
                      <Laptop className="h-3 w-3" />
                    ) : (
                      <Palette className="h-3 w-3" />
                    )}
                    {project.category}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-background/50">
                    {project.status}
                  </span>
                </div>

                <div className="mt-6 border border-background/20 bg-background/[0.04] p-4">
                  <div className="flex items-center gap-1.5 border-b border-background/15 pb-3">
                    <span className="h-2 w-2 rounded-full border border-background/40" />
                    <span className="h-2 w-2 rounded-full border border-background/40" />
                    <span className="h-2 w-2 rounded-full border border-background/40" />
                    <span className="ml-2 truncate font-mono text-[9px] tracking-[0.06em] text-background/50">
                      {project.type === "web"
                        ? "wann-studioghibli.netlify.app"
                        : "figma.com/@withwann/furniture-app"}
                    </span>
                  </div>

                  <div className="pt-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-background">
                        {project.type === "web"
                          ? "Studio Ghibli Tribute Experience"
                          : "FurniSpace — Modern Furniture App"}
                      </span>
                      <span className="border border-background/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-background/50">
                        {project.type === "web" ? "HTML & CSS" : "Figma Prototype"}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-background/60">
                      {project.type === "web"
                        ? "Kisah film My Neighbor Totoro, Spirited Away, & Howl's Moving Castle dengan estetika visual yang imersif."
                        : "Desain antarmuka mobile e-commerce minimalis dengan fokus pada kemudahan belanja perabotan rumah tangga."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {project.highlights.slice(0, 3).map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs leading-relaxed text-muted"
                      >
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-opacity hover:opacity-60"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Detail &amp; Showcase</span>
                  </button>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-ink px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-ink-hover"
                    >
                      <span>Kunjungi Website</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 bg-ink px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-ink-hover"
                    >
                      <span>Lihat Preview UI</span>
                      <Palette className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden border border-ink bg-background">
            <div className="flex items-start justify-between gap-4 border-b border-line p-6">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  {selectedProject.category}
                </span>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-ink">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="grid h-9 w-9 shrink-0 place-items-center border border-line text-muted transition-colors hover:border-ink hover:bg-ink hover:text-background"
                aria-label="Tutup modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-6 overflow-y-auto p-6">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Deskripsi Proyek
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {selectedProject.longDescription}
                </p>
              </div>

              {selectedProject.type === "design" && (
                <div className="border border-line bg-surface p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
                      <Smartphone className="h-3.5 w-3.5" />
                      Preview Layar Prototipe Figma
                    </span>
                    <div className="flex gap-1">
                      {(["catalog", "detail", "cart"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveDesignTab(tab)}
                          className={`px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors ${
                            activeDesignTab === tab
                              ? "bg-ink text-background"
                              : "border border-line bg-background text-muted hover:text-ink"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 border border-line bg-background p-5 text-center">
                    {activeDesignTab === "catalog" && (
                      <div className="space-y-3">
                        <div className="text-xs font-bold text-ink">
                          Halaman Katalog &amp; Kategori
                        </div>
                        <p className="text-xs leading-relaxed text-muted">
                          Menampilkan carousel produk terlaris, filter harga, dan
                          kategori sofa, meja minimalis, dan lampu hias.
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <div className="border border-line bg-surface p-3 text-left">
                            <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
                              Sofa
                            </span>
                            <span className="text-xs font-bold text-ink">
                              Nordic Lounge Chair
                            </span>
                            <span className="block font-mono text-[10px] text-muted">
                              Rp 1.450.000
                            </span>
                          </div>
                          <div className="border border-line bg-surface p-3 text-left">
                            <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
                              Table
                            </span>
                            <span className="text-xs font-bold text-ink">
                              Minimalist Oak Desk
                            </span>
                            <span className="block font-mono text-[10px] text-muted">
                              Rp 2.100.000
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeDesignTab === "detail" && (
                      <div className="space-y-3">
                        <div className="text-xs font-bold text-ink">
                          Halaman Detail Produk &amp; AR Preview
                        </div>
                        <p className="text-xs leading-relaxed text-muted">
                          Informasi dimensi, pilihan material kayu, ulasan pembeli,
                          dan tombol Add to Cart yang menonjol.
                        </p>
                      </div>
                    )}
                    {activeDesignTab === "cart" && (
                      <div className="space-y-3">
                        <div className="text-xs font-bold text-ink">
                          Halaman Checkout &amp; Ringkasan Transaksi
                        </div>
                        <p className="text-xs leading-relaxed text-muted">
                          Flow ringkas tanpa langkah rumit dengan perhitungan
                          ongkos kirim instan dan multi-metode pembayaran.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Sorotan &amp; Fitur Utama
                </h4>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selectedProject.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 border border-line bg-surface p-3 text-xs text-ink"
                    >
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-ink" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Teknologi &amp; Alat
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-line bg-surface p-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="border border-line bg-background px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink"
              >
                Tutup
              </button>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-ink-hover"
                >
                  <span>Buka Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
