# Ridwan Sahidi Nugraha — Personal Portfolio Website

> **Personal Branding:** `with.wann`  
> **Role:** Front-End Developer · Web Enthusiast  
> **Concept:** Minimalist Monochrome (opencode-inspired)  
> **Color Theme:** Black (`#0A0A0A`) & White (`#FFFFFF`) — dengan toggle **Light/Dark Mode**

Website portofolio personal yang dirancang untuk memperkenalkan identitas, kemampuan, pengalaman belajar, serta hasil karya **Ridwan Sahidi Nugraha** dalam bidang teknologi dan pengembangan web modern.

---

## 🚀 Fitur Utama & Struktur Halaman

1. **Fixed Top Navigation dengan Satu Menu di Kanan Atas**
   - Logo personal branding `with.wann` dengan mark monokrom.
   - Tombol **toggle tema terang/gelap** (ikon bulan/matahari) di samping kiri.
   - **Desktop**: brand di kiri, link navigasi horizontal (Home, About, Skills, Projects, Contact) + toggle tema di kanan navbar.
   - **Mobile**: toggle tema + tombol **hamburger** di pojok kanan atas; hamburger membuka panel slide-down berisi link Home, About, Skills, Projects, dan Contact.
   - Menu mobile menutup otomatis saat memilih link atau menekan `Esc`.
2. **Programming Language Marquee
   - Dua baris kartu berjalan bolak-balik (kiri dan kanan) menampilkan bahasa pemrograman dan tools.
   - Setiap item memakai ikon brand (Simple Icons) dan border tersendiri.
   - Animasi berhenti saat di-hover dan mendukung `prefers-reduced-motion`.
3. **Hero Section (`#hero`)**
   - Tipografi besar hitam-putih yang tegas dan bersih.
   - Mockup terminal `developer.ts` monokrom dengan ambient floating badges.
   - Call to Action: *Explore My Work* & *Download CV*.
   - Informasi lokasi: Banjar, Jawa Barat, Indonesia.
4. **About Section (`#about`)**
   - Profil komprehensif sebagai pelajar RPL di SMK Negeri 1 Banjar.
   - Kartu foto personal (fallback monogram `RSN` bila foto belum tersedia).
   - 3 Pilar utama: Front-End Development, Minimalist UI/UX, dan Continuous Curiosity.
   - Timeline riwayat pendidikan terstruktur:
     - 2017–2022: SD Negeri 1 Mekarsari
     - 2022–2024: SMP Negeri 3 Banjar
     - 2024–Sekarang: SMK Negeri 1 Banjar — Rekayasa Perangkat Lunak
5. **Skills Section (`#skills`)**
   - Estimasi kemampuan awal terukur dengan animasi progress bar saat di-scroll:
     - HTML5: 50%
     - Figma: 45%
     - CSS3: 20%
     - JavaScript: 5%
     - Python: 5%
     - C#: 5%
   - Banner komitmen pengembangan kompetensi berkelanjutan.
6. **Projects Section (`#projects`)**
   - **Studio Ghibli Tribute Website**: Live link ke [https://wann-studioghibli.netlify.app/](https://wann-studioghibli.netlify.app/)
   - **UI/UX Design Pemesanan Furniture**: Interactive showcase modal dengan tab switcher layar (Katalog, Detail Produk, dan Keranjang).
7. **Contact Section (`#contact`)**
   - Fitur 1-click salin email `ridwansahidinugraha@gmail.com` dengan notifikasi visual.
   - Formulir pesan interaktif dengan feedback pengiriman.
   - Tautan sosial media: GitHub, LinkedIn, Instagram.
8. **Footer (`#footer`)**
   - Hak cipta personal branding `with.wann`.
   - Tombol smooth scroll *Back to Top*.
9. **Light/Dark Mode Toggle**
   - Inversi monokrom penuh: semua token warna (`ink`, `background`, `surface`, `line`, `muted`) dibalik lewat CSS variables di `globals.css` — struktur, layout, dan animasi tidak berubah.
   - Animasi **circular reveal** saat pergantian tema (View Transitions API): lingkaran menyebar dari posisi tombol toggle dan meng-wipe seluruh halaman ke tema baru (~550ms), dengan fallback cross-fade warna untuk browser lama.
   - Menghormati `prefers-reduced-motion` — tema langsung berganti tanpa animasi bagi pengguna yang menonaktifkan motion.
   - Preferensi tema disimpan di `localStorage` dan mengikuti `prefers-color-scheme` OS saat pertama kali dikunjungi.
   - Script inline di root layout menerapkan tema **sebelum paint pertama** sehingga tidak ada flash warna salah (FOUC).

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Engine:** [GSAP (GreenSock)](https://gsap.com/) & [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- **Typography:** [Manrope](https://fonts.google.com/specimen/Manrope) (Headings) & [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Body) via `next/font/google`
- **Icons:** [Lucide React](https://lucide.dev/), [Simple Icons](https://simpleicons.org/) (brand bahasa pemrograman) & Custom SVG Social Icons

---

## 📁 Struktur Proyek

```text
portofolio/
├── app/
│   ├── layout.tsx         # Root layout dengan font Manrope & DM Sans serta SEO Metadata
│   ├── page.tsx           # Single Page Portfolio container dengan hook GSAP
│   └── globals.css        # Tailwind CSS v4, token monokrom (light/dark), marquee & utility
├── components/
│   ├── Navbar.tsx         # Fixed top navigation dengan satu menu dropdown di kanan atas
│   ├── ThemeToggle.tsx    # Tombol toggle tema terang/gelap (localStorage + prefers-color-scheme)
│   ├── Hero.tsx           # Hero section dengan terminal monokrom & CTA
│   ├── LanguageMarquee.tsx# Marquee dua baris bahasa pemrograman dengan ikon & border
│   ├── About.tsx          # Profil, kartu foto personal & timeline pendidikan
│   ├── ProfilePhoto.tsx   # Kartu foto personal dengan fallback monogram
│   ├── Skills.tsx         # Kartu skill dengan animated progress bar GSAP
│   ├── Projects.tsx       # Kartu karya, modal detail & live link
│   ├── Contact.tsx        # Kartu kontak, copy-email, dan form interaktif
│   ├── Footer.tsx         # Footer dengan tombol Back to Top
│   └── SocialIcons.tsx    # Ikon SVG GitHub, LinkedIn, dan Instagram
├── hooks/
│   └── useGsapAnimations.ts # Konfigurasi GSAP ScrollTrigger & matchMedia
├── public/
│   ├── cv-ridwan.pdf      # Dokumen Curriculum Vitae resmi yang dapat diunduh
│   └── profile.jpg        # Foto personal (opsional — fallback monogram otomatis)
├── package.json
└── README.md
```

---

## 💻 Menjalankan di Lingkungan Lokal

1. Jalankan development server:
   ```bash
   npm run dev
   ```
2. Buka browser di [http://localhost:3000](http://localhost:3000).

3. Untuk menjalankan production build:
   ```bash
   npm run build
   npm run start
   ```

---

## 📷 Menambahkan Foto Personal

Simpan foto portrait dengan nama **`profile.jpg`** di folder `public/`:

```text
public/profile.jpg
```

Selama file tersebut belum ada, kartu foto di section **About** otomatis menampilkan fallback monogram `RSN` tanpa error. Foto akan tampil sebagai grayscale agar tetap konsisten dengan tema monokrom.
