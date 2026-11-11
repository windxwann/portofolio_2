"use client";

import { useEffect, useRef, useState } from "react";

type PhotoStatus = "loading" | "loaded" | "error";

const PHOTO_CANDIDATES = [
  "/profile-cutout.png",
  "/profile.png",
  "/profile.jpg",
  "/photo.jpg",
  "/photo.png",
];

/**
 * Hero portrait — checks for user portrait photos (/profile-cutout.png,
 * /profile.png, /profile.jpg). If no image exists, cleanly displays
 * a sleek minimalist monogram plate (RSN / with.wann).
 */
export default function HeroPortrait() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [status, setStatus] = useState<PhotoStatus>("loading");
  const imageRef = useRef<HTMLImageElement>(null);

  const currentSrc = PHOTO_CANDIDATES[photoIndex];
  const isCutout = currentSrc ? currentSrc.includes("cutout") : false;

  const handleImageError = () => {
    if (photoIndex < PHOTO_CANDIDATES.length - 1) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setStatus("error");
    }
  };

  const handleImageLoad = () => {
    setStatus("loaded");
  };

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    if (image.complete) {
      if (image.naturalWidth > 0) {
        setStatus("loaded");
      } else {
        handleImageError();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoIndex]);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
      {/* Studio backdrop — built from ink alpha so it inverts with the theme:
          a soft grey disc in light mode, a subtle glow in dark mode. */}
      <div className="dot-grid pointer-events-none absolute left-1/2 top-[10%] aspect-square w-[78%] -translate-x-1/2 rounded-full bg-ink/[0.09]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/[0.07] to-transparent" />

      {status !== "error" && currentSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imageRef}
          key={currentSrc}
          src={currentSrc}
          alt="Ridwan Sahidi Nugraha"
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`grayscale contrast-[1.05] transition-opacity duration-500 dark:brightness-110 dark:contrast-[1.08] ${
            isCutout
              ? "absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              : "absolute inset-0 h-full w-full object-cover"
          } ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
        />
      )}

      {status !== "loaded" && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center border border-ink bg-background font-heading text-lg font-extrabold tracking-tight text-ink hard-shadow-sm">
              RSN
            </span>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              with.wann
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
