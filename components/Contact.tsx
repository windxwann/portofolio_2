"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Check,
  Copy,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const emailAddress = "ridwan.sahidi14@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("submitting");

    // Simulate clean dispatch with visual feedback
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="border-t border-background/10 bg-ink py-20 text-background lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-background/50 sm:text-[11px]">
            <span className="h-px w-8 bg-background" />
            <Mail className="h-3.5 w-3.5 text-background" />
            <span>04 — Contact</span>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-background sm:text-4xl lg:text-5xl">
            Let&apos;s create something meaningful.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
            Terbuka untuk diskusi proyek web, sharing ilmu seputar teknologi,
            kesempatan magang, atau sekadar bertukar sapa.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12">
          {/* Direct info */}
          <div className="space-y-5 lg:col-span-5">
            <div className="gsap-fade-up border border-background/15 bg-background/[0.03] p-7">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center bg-background text-ink">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="border border-background/20 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-background/60">
                  Respon Cepat
                </span>
              </div>

              <div className="mt-5">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-background/50">
                  Kirim Email Langsung
                </span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="mt-1 block break-all text-base font-bold text-background transition-opacity hover:opacity-70 sm:text-lg"
                >
                  {emailAddress}
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 border border-background/25 px-3.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-background transition-colors hover:bg-background hover:text-ink"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>Email Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    emailAddress
                  )}&su=${encodeURIComponent("Halo Ridwan")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-background px-3.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-surface-strong"
                >
                  <span>Buka Gmail</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="gsap-fade-up border border-background/15 p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center border border-background/20 text-background">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-background">
                    Lokasi &amp; Domisili
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-background/60">
                    Banjar, Jawa Barat, Indonesia (GMT+7)
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-background/10 pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-background/50">
                <span>Personal Branding</span>
                <span className="border border-background/20 px-2 py-1 text-background">
                  with.wann
                </span>
              </div>
            </div>

            <div className="gsap-fade-up border border-background/15 p-6">
              <h4 className="text-sm font-bold tracking-tight text-background">
                Media Sosial &amp; Jejaring
              </h4>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 border border-background/15 p-3 text-center text-background/70 transition-colors hover:border-background hover:bg-background/10 hover:text-background"
                >
                  <GithubIcon className="h-5 w-5" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em]">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 border border-background/15 p-3 text-center text-background/70 transition-colors hover:border-background hover:bg-background/10 hover:text-background"
                >
                  <LinkedinIcon className="h-5 w-5" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em]">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 border border-background/15 p-3 text-center text-background/70 transition-colors hover:border-background hover:bg-background/10 hover:text-background"
                >
                  <InstagramIcon className="h-5 w-5" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em]">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="gsap-fade-up border border-background/15 bg-background p-7 text-ink sm:p-9 lg:col-span-7">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold tracking-tight text-ink">
                <MessageSquare className="h-5 w-5" />
                Kirim Pesan Langsung
              </h3>
              <p className="mt-1 text-xs text-muted sm:text-sm">
                Isi formulir di bawah ini dan saya akan membalas secepat mungkin.
              </p>
            </div>

            {formStatus === "success" ? (
              <div className="mt-6 border border-line bg-surface p-8 text-center animate-fadeIn">
                <div className="mx-auto grid h-12 w-12 place-items-center bg-ink text-background">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-base font-bold text-ink">
                  Terima kasih! Pesan Anda telah terkirim.
                </h4>
                <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-muted">
                  Saya akan memeriksa pesan Anda dan membalas melalui email dalam
                  waktu singkat.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Nama Lengkap <span className="text-ink">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Contoh: Alex Pratama"
                    className="w-full border border-line px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Alamat Email <span className="text-ink">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@domain.com"
                    className="w-full border border-line px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Pesan Anda <span className="text-ink">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tuliskan pesan, ide proyek, atau pertanyaan Anda..."
                    className="w-full resize-none border border-line px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="flex w-full items-center justify-center gap-2 bg-ink px-6 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-background transition-colors hover:bg-ink-hover disabled:opacity-60"
                >
                  {formStatus === "submitting" ? (
                    <span>Mengirimkan Pesan...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
