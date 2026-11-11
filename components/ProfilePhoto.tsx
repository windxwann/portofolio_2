"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, MapPin } from "lucide-react";

type PhotoStatus = "loading" | "loaded" | "error";

export default function ProfilePhoto() {
  const [status, setStatus] = useState<PhotoStatus>("loading");
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    // The browser may finish (or fail) loading before hydration attaches events.
    if (image.complete) {
      setStatus(image.naturalWidth > 0 ? "loaded" : "error");
    }
  }, []);

  return (
    <figure className="gsap-fade-up border border-ink bg-background p-3 hard-shadow-sm">
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
        {status !== "error" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imageRef}
            src="/profile.jpg"
            alt="Foto Ridwan Sahidi Nugraha"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className={`absolute inset-0 h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 hover:grayscale-0 ${
              status === "loaded" ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {status !== "loaded" && (
          <div className="absolute inset-0 grid place-items-center dot-grid">
            <div className="text-center">
              <span className="mx-auto grid h-20 w-20 place-items-center border border-ink bg-background font-heading text-2xl font-extrabold tracking-tight text-ink">
                RSN
              </span>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                with.wann
              </p>
            </div>
          </div>
        )}

        <span className="absolute left-3 top-3 border border-ink bg-background px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink">
          Portrait
        </span>
      </div>

      <figcaption className="mt-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
              with.wann
            </div>
            <div className="mt-1 text-sm font-semibold tracking-tight text-ink">
              Ridwan Sahidi Nugraha
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
            <Camera className="h-3 w-3" />
            2026
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
          <MapPin className="h-3 w-3 text-ink" />
          Banjar, West Java
        </div>
      </figcaption>
    </figure>
  );
}
