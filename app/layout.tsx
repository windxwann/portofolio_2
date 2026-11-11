import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ridwan Sahidi Nugraha — Front-End Developer · Web Enthusiast",
  description:
    "Personal portfolio website of Ridwan Sahidi Nugraha (with.wann) — Front-End Developer & Web Enthusiast based in Banjar, West Java. Exploring modern web interfaces, clean code, and interactive experiences.",
  keywords: [
    "Ridwan Sahidi Nugraha",
    "with.wann",
    "Front-End Developer",
    "Web Enthusiast",
    "SMK Negeri 1 Banjar",
    "Portfolio Next.js",
    "GSAP Animation",
    "UI/UX Design",
  ],
  authors: [{ name: "Ridwan Sahidi Nugraha", url: "https://wann-studioghibli.netlify.app" }],
  creator: "Ridwan Sahidi Nugraha",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://withwann.dev",
    title: "Ridwan Sahidi Nugraha — Front-End Developer · Web Enthusiast",
    description:
      "Minimalist Interactive Personal Portfolio of Ridwan Sahidi Nugraha. Showcasing software engineering skills, creative web projects, and UI/UX design.",
    siteName: "with.wann Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-ink font-sans antialiased selection:bg-ink selection:text-background">
        {/* Apply saved/system theme before first paint to prevent a flash of the wrong theme.
            Raw inline script executes synchronously during HTML parsing (unlike next/script,
            which defers to hydration), so the .dark class is set before any content paints. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
