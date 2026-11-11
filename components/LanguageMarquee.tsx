import type { ReactNode } from "react";
import {
  siCss,
  siFigma,
  siGit,
  siGreensock,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siSharp,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { Code2, MonitorSmartphone, PenTool } from "lucide-react";

interface SimpleIconData {
  title: string;
  path: string;
}

function BrandIcon({ icon }: { icon: SimpleIconData }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
    >
      <path d={icon.path} />
    </svg>
  );
}

interface MarqueeItem {
  name: string;
  icon: ReactNode;
}

const topRow: MarqueeItem[] = [
  { name: "HTML5", icon: <BrandIcon icon={siHtml5} /> },
  { name: "CSS3", icon: <BrandIcon icon={siCss} /> },
  { name: "JavaScript", icon: <BrandIcon icon={siJavascript} /> },
  { name: "TypeScript", icon: <BrandIcon icon={siTypescript} /> },
  { name: "React", icon: <BrandIcon icon={siReact} /> },
  { name: "Next.js", icon: <BrandIcon icon={siNextdotjs} /> },
  { name: "Tailwind CSS", icon: <BrandIcon icon={siTailwindcss} /> },
  { name: "GSAP", icon: <BrandIcon icon={siGreensock} /> },
];

const bottomRow: MarqueeItem[] = [
  { name: "Python", icon: <BrandIcon icon={siPython} /> },
  { name: "C#", icon: <BrandIcon icon={siSharp} /> },
  { name: "Node.js", icon: <BrandIcon icon={siNodedotjs} /> },
  { name: "Git", icon: <BrandIcon icon={siGit} /> },
  { name: "Figma", icon: <BrandIcon icon={siFigma} /> },
  { name: "VS Code", icon: <Code2 className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /> },
  {
    name: "Responsive Design",
    icon: <MonitorSmartphone className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />,
  },
  { name: "UI / UX", icon: <PenTool className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /> },
];

function MarqueeGroup({
  items,
  hidden = false,
}: {
  items: MarqueeItem[];
  hidden?: boolean;
}) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-2 pr-2 sm:gap-3 sm:pr-3"
    >
      {items.map((item) => (
        <li key={item.name} className="flex items-center">
          <span className="group inline-flex items-center gap-2 border border-ink/25 bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink sm:gap-2.5 sm:px-4 sm:py-2 sm:text-[11px]">
            <span className="text-ink/70 transition-colors group-hover:text-ink">
              {item.icon}
            </span>
            <span className="whitespace-nowrap">{item.name}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function MarqueeRow({ items, reverse = false }: { items: MarqueeItem[]; reverse?: boolean }) {
  return (
    <div
      className={`flex w-max ${
        reverse ? "marquee-track-reverse" : "marquee-track"
      }`}
    >
      <MarqueeGroup items={items} />
      <MarqueeGroup items={items} hidden />
    </div>
  );
}

export default function LanguageMarquee() {
  return (
    <section
      aria-label="Bahasa pemrograman dan tools yang dipelajari"
      className="border-b border-line bg-background py-5 sm:py-6"
    >
      <div className="marquee select-none space-y-2.5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] sm:space-y-3">
        <MarqueeRow items={topRow} />
        <MarqueeRow items={bottomRow} reverse />
      </div>
    </section>
  );
}
