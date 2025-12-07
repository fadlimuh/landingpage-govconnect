# GovConnect - Landing Page & Authentication

GovConnect adalah platform digital modern yang dirancang untuk menghubungkan masyarakat dengan layanan pemerintah kelurahan secara efisien. Proyek ini merupakan implementasi *landing page* dan sistem autentikasi (Login/Register) menggunakan teknologi web terbaru.

## 🚀 Fitur Utama

- **Landing Page Modern**: Desain responsif dengan animasi halus menggunakan Framer Motion.
  - **Hero Section**: Pengenalan visual yang menarik.
  - **Simulasi Chat**: Demonstrasi interaktif layanan.
  - **Solusi Masalah**: Visualisasi masalah dan solusi dengan kartu animasi.
  - **Testimonial**: Ulasan pengguna dengan data realistis.
  - **FAQ**: Pertanyaan umum menggunakan komponen Accordion.
- **Sistem Autentikasi**:
  - **Halaman Login**: Desain bersih dengan validasi input dan animasi loading.
  - **Halaman Registrasi**: Formulir pendaftaran lengkap dengan konfirmasi password.
  - **Transisi Halaman**: Animasi perpindahan antar halaman yang mulus.
- **Tema Kustom**: Palet warna yang konsisten (Primary Blue & Secondary Dark Teal) dengan dukungan Dark Mode (siap pakai).

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun dengan stack teknologi modern untuk performa dan pengalaman pengembang terbaik:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Komponen UI**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Cara Menjalankan Project

Pastikan Anda telah menginstal Node.js di komputer Anda.

1.  **Clone repositori ini** (jika ada) atau unduh source code.
2.  **Install dependensi**:

    \\\ash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    # atau
    bun install
    \\\

3.  **Jalankan server development**:

    \\\ash
    npm run dev
    # atau
    yarn dev
    # atau
    pnpm dev
    # atau
    bun dev
    \\\

4.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## 📂 Struktur Folder Utama

\\\
landingpage-govconnect/
├── app/
│   ├── login/          # Halaman Login
│   ├── register/       # Halaman Registrasi
│   ├── globals.css     # Global styles & Tailwind config
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Landing Page utama
├── components/
│   └── ui/             # Komponen reusable (Button, Card, Accordion, dll)
├── public/             # Aset statis (gambar, logo)
└── lib/                # Utilitas helper functions
\\\

## 🎨 Kustomisasi Tema

Warna tema dapat diubah melalui file \pp/globals.css\. Variabel CSS utama:

- \--primary\: Warna utama (Biru)
- \--secondary\: Warna aksen (Dark Teal - \161 43% 20%\)

---

Dibuat dengan ❤️ untuk GovConnect.
