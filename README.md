Berikut adalah draft file `README.md` yang lengkap dan terstruktur berdasarkan kode sumber yang Anda unggah. File ini mencakup deskripsi proyek, fitur, teknologi, instalasi, dan panduan kontribusi.

````markdown
# GovConnect - Platform Layanan Kelurahan Digital

![GovConnect Banner](public/dashboard.png)

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**GovConnect** adalah platform digital modern yang dirancang untuk menjembatani komunikasi antara masyarakat dengan layanan pemerintah kelurahan. Repositori ini berisi implementasi *Landing Page* yang interaktif dan antarmuka sistem autentikasi (Login/Register) yang responsif.

Proyek ini dibangun dengan fokus pada pengalaman pengguna (UX) yang mulus, animasi yang menarik, dan performa tinggi menggunakan teknologi web terkini.

## ✨ Fitur Utama

### 1. Landing Page Interaktif
Halaman depan yang dirancang untuk memberikan informasi yang jelas dan menarik:
- **Hero Section Dinamis**: Pengenalan visual dengan animasi masuk yang halus.
- **Simulasi Chat**: Demonstrasi interaktif bagaimana *bot* layanan merespons keluhan warga.
- **Visualisasi Masalah & Solusi**: Animasi menggunakan `Framer Motion` untuk menggambarkan masalah antrean dan solusi digital.
- **Alur Kerja (How it Works)**: Panduan visual langkah demi langkah penggunaan aplikasi.
- **FAQ Accordion**: Bagian pertanyaan umum yang dapat diperluas/diciutkan.
- **Testimonial**: Kartu ulasan pengguna dengan tata letak grid responsif.

### 2. Sistem Autentikasi (UI)
Antarmuka pengguna untuk akses akun:
- **Halaman Login**: Formulir masuk dengan validasi visual, *toggle* visibilitas password, dan tautan lupa password.
- **Halaman Register**: Formulir pendaftaran lengkap dengan validasi konfirmasi password.
- **Transisi Halaman**: Perpindahan antar halaman yang mulus tanpa *refresh* kasar.

### 3. Desain & Tema
- **Responsif Penuh**: Tampilan optimal di *mobile*, *tablet*, dan *desktop*.
- **Dark Mode Support**: Mendukung peralihan tema terang dan gelap (menggunakan `next-themes` logic dan Tailwind).
- **Modern Styling**: Menggunakan font *Poppins* dan palet warna profesional (Primary Blue & Secondary Teal).

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun di atas stack teknologi modern:

- **Core**: [Next.js 16](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Komponen UI**: [Shadcn UI](https://ui.shadcn.com/) (dibangun di atas Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: ESLint

## 📋 Prasyarat Instalasi

Sebelum memulai, pastikan komputer Anda telah terinstal:

- [Node.js](https://nodejs.org/) (Versi 18.17 atau lebih baru direkomendasikan)
- Package manager (`npm`, `yarn`, `pnpm`, atau `bun`)

## 🚀 Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal Anda:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/username/landingpage-govconnect.git](https://github.com/username/landingpage-govconnect.git)
    cd landingpage-govconnect
    ```

2.  **Install Dependensi**
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    # atau
    bun install
    ```

3.  **Jalankan Server Development**
    ```bash
    npm run dev
    # atau
    yarn dev
    # atau
    pnpm dev
    # atau
    bun dev
    ```

4.  **Akses Aplikasi**
    Buka browser Anda dan kunjungi [http://localhost:3000](http://localhost:3000).

## wm Struktur Proyek

Berikut adalah gambaran struktur folder utama dalam proyek ini:

````

landingpage-govconnect/
├── app/                    \# Direktori utama Next.js App Router
│   ├── login/              \# Halaman Login
│   ├── register/           \# Halaman Registrasi
│   ├── globals.css         \# Konfigurasi CSS global & Tailwind
│   ├── layout.tsx          \# Layout utama (Font, Metadata)
│   └── page.tsx            \# Halaman Landing Page utama
├── components/
│   ├── ui/                 \# Komponen reusable (Button, Card, Accordion, dll)
│   └── ProblemAnimation.tsx \# Komponen animasi khusus
├── lib/                    \# Fungsi utilitas (cn helper)
├── public/                 \# Aset statis (gambar, logo, ikon)
├── eslint.config.mjs       \# Konfigurasi ESLint
├── next.config.ts          \# Konfigurasi Next.js
├── package.json            \# Daftar dependensi
└── postcss.config.mjs      \# Konfigurasi PostCSS/Tailwind

````

## 💡 Contoh Penggunaan

1.  **Navigasi**: Gunakan navbar di bagian atas untuk berpindah ke bagian Masalah, Fitur, atau FAQ secara instan (scroll smooth).
2.  **Toggle Tema**: Klik ikon Matahari/Bulan di pojok kanan atas (atau dalam menu hamburger di mobile) untuk mengganti mode Gelap/Terang.
3.  **Autentikasi**: Klik tombol "Login" untuk melihat antarmuka masuk, atau "Daftar sekarang" pada halaman login untuk melihat formulir registrasi.
4.  **Interaksi**: Coba klik tombol "Hubungi WhatsApp" yang melayang di pojok kanan bawah untuk simulasi kontak langsung.

## 🤝 Kontribusi

Kontribusi sangat dipersilakan! Jika Anda ingin meningkatkan fitur atau memperbaiki bug:

1.  **Fork** repositori ini.
2.  Buat **Branch** baru (`git checkout -b fitur-keren-anda`).
3.  **Commit** perubahan Anda (`git commit -m 'Menambahkan fitur keren'`).
4.  **Push** ke Branch (`git push origin fitur-keren-anda`).
5.  Buat **Pull Request** baru.

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**.

```text
MIT License

Copyright (c) 2025 GovConnect

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

-----

*Dibuat oleh Tim Pengembang GovConnect.*

```
```
