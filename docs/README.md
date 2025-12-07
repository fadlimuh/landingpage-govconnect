# 📖 Dokumentasi Proyek GovConnect

**GovConnect** adalah platform digital modern yang dirancang untuk menghubungkan masyarakat dengan layanan pemerintah kelurahan secara efisien. Dokumentasi ini menjelaskan secara lengkap struktur proyek, arsitektur, komponen, dan logika yang digunakan.

---

## 📑 Daftar Isi

1. [Gambaran Umum Proyek](#1-gambaran-umum-proyek)
2. [Teknologi yang Digunakan](#2-teknologi-yang-digunakan)
3. [Struktur Folder Proyek](#3-struktur-folder-proyek)
4. [Arsitektur Aplikasi](#4-arsitektur-aplikasi)
5. [Sistem Tema & Styling](#5-sistem-tema--styling)
6. [Halaman & Routes](#6-halaman--routes)
7. [Komponen UI](#7-komponen-ui)
8. [Sistem Animasi](#8-sistem-animasi)
9. [Konfigurasi Proyek](#9-konfigurasi-proyek)
10. [Panduan Pengembangan](#10-panduan-pengembangan)

---

## 1. Gambaran Umum Proyek

### 1.1 Deskripsi

GovConnect adalah aplikasi web landing page yang menyediakan antarmuka untuk layanan kelurahan digital. Aplikasi ini memungkinkan warga untuk:

- Melaporkan masalah lingkungan
- Mengajukan surat/dokumen
- Mendapatkan informasi kelurahan
- Memantau status pengajuan

### 1.2 Tujuan Proyek

- Mempermudah akses layanan kelurahan bagi masyarakat
- Mengurangi antrian fisik di kantor kelurahan
- Meningkatkan transparansi proses administrasi
- Menyediakan informasi terpusat dan real-time

### 1.3 Target Pengguna

- Warga kelurahan yang membutuhkan layanan administrasi
- Masyarakat umum yang ingin melaporkan permasalahan lingkungan
- Calon pengguna yang ingin mengenal platform GovConnect

---

## 2. Teknologi yang Digunakan

### 2.1 Core Framework

| Teknologi  | Versi  | Fungsi                                                          |
| ---------- | ------ | --------------------------------------------------------------- |
| Next.js    | 16.0.7 | Framework React untuk Server-Side Rendering & Static Generation |
| React      | 19.2.0 | Library UI untuk membangun antarmuka pengguna                   |
| TypeScript | ^5     | Superset JavaScript dengan type safety                          |

### 2.2 Styling

| Teknologi      | Versi  | Fungsi                                     |
| -------------- | ------ | ------------------------------------------ |
| Tailwind CSS   | ^4     | Utility-first CSS framework                |
| tailwind-merge | ^3.4.0 | Menggabungkan class Tailwind tanpa konflik |
| clsx           | ^2.1.1 | Utility untuk menggabungkan class names    |

### 2.3 UI Components

| Teknologi                | Versi    | Fungsi                                    |
| ------------------------ | -------- | ----------------------------------------- |
| Radix UI (Accordion)     | ^1.2.12  | Komponen Accordion yang accessible        |
| Radix UI (Slot)          | ^1.2.4   | Utility untuk component composition       |
| class-variance-authority | ^0.7.1   | Membuat variant komponen dengan type-safe |
| Lucide React             | ^0.556.0 | Library ikon modern                       |

### 2.4 Animasi

| Teknologi     | Versi     | Fungsi                      |
| ------------- | --------- | --------------------------- |
| Framer Motion | ^12.23.25 | Library animasi untuk React |

---

## 3. Struktur Folder Proyek

```
landingpage-govconnect/
├── 📁 app/                          # App Router (Next.js 13+)
│   ├── 📁 login/                    # Route: /login
│   │   └── page.tsx                 # Halaman Login
│   ├── 📁 register/                 # Route: /register
│   │   └── page.tsx                 # Halaman Registrasi
│   ├── globals.css                  # Global styles & CSS variables
│   ├── layout.tsx                   # Root layout (metadata, font)
│   └── page.tsx                     # Landing Page utama (/)
│
├── 📁 components/                   # Komponen reusable
│   ├── 📁 ui/                       # Shadcn UI Components
│   │   ├── accordion.tsx            # Komponen Accordion
│   │   ├── button.tsx               # Komponen Button dengan variants
│   │   └── card.tsx                 # Komponen Card family
│   └── ProblemAnimation.tsx         # Komponen animasi masalah
│
├── 📁 docs/                         # Dokumentasi proyek
│   └── README.md                    # File dokumentasi ini
│
├── 📁 lib/                          # Utility functions
│   └── utils.ts                     # Helper: cn() untuk class merging
│
├── 📁 public/                       # Static assets
│   ├── dashboard.png                # Screenshot dashboard
│   ├── logo-dashboard.png           # Logo utama
│   ├── logo.png                     # Logo alternatif
│   ├── favicon.ico                  # Favicon
│   └── [icons].svg                  # Berbagai ikon SVG
│
├── eslint.config.mjs                # Konfigurasi ESLint
├── next.config.ts                   # Konfigurasi Next.js
├── next-env.d.ts                    # TypeScript declarations untuk Next.js
├── package.json                     # Dependencies & scripts
├── postcss.config.mjs               # Konfigurasi PostCSS
├── README.md                        # README ringkas proyek
└── tsconfig.json                    # Konfigurasi TypeScript
```

---

## 4. Arsitektur Aplikasi

### 4.1 App Router (Next.js 13+)

Proyek ini menggunakan **App Router** dari Next.js 13+, yang memungkinkan:

- File-based routing dengan folder `app/`
- Server Components sebagai default
- Layouts yang dapat di-nest
- Loading & Error states bawaan

### 4.2 Diagram Alur Aplikasi

```
┌─────────────────────────────────────────────────────────────┐
│                         layout.tsx                          │
│  (Root Layout: Font Poppins, Metadata, HTML structure)      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │   page.tsx  │    │ login/      │    │ register/   │     │
│  │  (Landing)  │    │ page.tsx    │    │ page.tsx    │     │
│  └─────────────┘    └─────────────┘    └─────────────┘     │
│         │                  │                  │             │
│         ▼                  ▼                  ▼             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Components (UI Library)                │   │
│  │  Button | Card | Accordion | Custom Animations      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4.3 Client vs Server Components

- **Server Components** (default): Komponen tanpa interaktivitas
- **Client Components** (dengan `"use client"`): Komponen dengan state, event, atau hooks

Halaman yang menggunakan `"use client"`:

- `app/page.tsx` (animasi, state tema)
- `app/login/page.tsx` (form handling)
- `app/register/page.tsx` (form handling)

---

## 5. Sistem Tema & Styling

### 5.1 CSS Variables (globals.css)

File `globals.css` mendefinisikan sistem warna menggunakan CSS custom properties dengan format HSL:

```css
:root {
  /* Background & Foreground */
  --background: 0 0% 100%; /* Putih */
  --foreground: 222.2 84% 4.9%; /* Hitam kebiruan */

  /* Primary (Biru Tua - Identitas Pemerintahan) */
  --primary: 218 53% 28%;
  --primary-foreground: 210 40% 98%;

  /* Secondary (Dark Teal - Aksen Modern) */
  --secondary: 161 43% 35%;
  --secondary-foreground: 210 40% 98%;

  /* Accent (Sama dengan Secondary) */
  --accent: 161 43% 35%;

  /* UI States */
  --muted: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%; /* Merah untuk error */

  /* Borders & Inputs */
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 218 53% 28%;
}
```

### 5.2 Dark Mode

Dark mode didefinisikan dengan class `.dark`:

```css
.dark {
  --background: 222.2 84% 4.9%; /* Gelap */
  --foreground: 210 40% 98%; /* Terang */
  --primary: 218 53% 38%; /* Biru lebih terang */
  --secondary: 161 43% 51%; /* Teal lebih terang */
  /* ... */
}
```

Toggle tema dilakukan melalui JavaScript di `page.tsx`:

```typescript
const toggleTheme = () => {
  setIsDark(!isDark);
  document.documentElement.classList.toggle("dark");
};
```

### 5.3 Tailwind v4 Integration

Tailwind v4 terintegrasi melalui `@theme inline` di `globals.css`:

```css
@theme inline {
  --color-primary: hsl(var(--primary));
  --color-secondary: hsl(var(--secondary));
  /* ... mapping CSS variables ke Tailwind */
}
```

---

## 6. Halaman & Routes

### 6.1 Landing Page (`/`)

**File:** `app/page.tsx`

Landing page terdiri dari beberapa section yang diurutkan secara vertikal:

| Section      | ID                 | Deskripsi                                                            |
| ------------ | ------------------ | -------------------------------------------------------------------- |
| Navbar       | -                  | Navigasi fixed dengan link ke section, tombol Login, dan toggle tema |
| Hero         | -                  | Headline utama dengan animasi chat simulasi                          |
| Masalah      | `#masalah`         | 3 kartu masalah umum warga dengan animasi ikon                       |
| Fitur/Solusi | `#fitur`           | 4 fitur utama + animasi "Solution"                                   |
| Cara Kerja   | `#cara-penggunaan` | 3 langkah penggunaan + animasi phone                                 |
| Manfaat      | `#manfaat`         | 4 kartu benefit dengan animasi unik                                  |
| Testimoni    | `#testimoni`       | 3 kartu testimoni dengan foto profil                                 |
| FAQ          | `#faq`             | Accordion dengan 4 pertanyaan umum                                   |
| Footer       | -                  | Info kontak, link layanan, copyright                                 |

**State yang Dikelola:**

```typescript
const [isDark, setIsDark] = useState(false); // Tema gelap/terang
```

### 6.2 Halaman Login (`/login`)

**File:** `app/login/page.tsx`

Formulir login dengan fitur:

- Input email dengan ikon
- Input password dengan toggle visibility
- Button submit dengan loading state
- Link ke halaman register
- Link kembali ke beranda

**State yang Dikelola:**

```typescript
const [isLoading, setIsLoading] = useState(false); // Loading saat submit
const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
```

### 6.3 Halaman Register (`/register`)

**File:** `app/register/page.tsx`

Formulir registrasi dengan fitur:

- Input nama lengkap
- Input email
- Input password dengan toggle visibility
- Input konfirmasi password dengan toggle visibility
- Button submit dengan loading state
- Link ke halaman login
- Link kembali ke beranda

**State yang Dikelola:**

```typescript
const [isLoading, setIsLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
```

---

## 7. Komponen UI

### 7.1 Button (`components/ui/button.tsx`)

Komponen button dengan berbagai variant menggunakan `class-variance-authority`:

**Variants:**
| Variant | Deskripsi |
|---------|-----------|
| `default` | Background primary, teks putih |
| `destructive` | Background merah untuk aksi berbahaya |
| `outline` | Border dengan background transparan |
| `secondary` | Background secondary (teal) |
| `ghost` | Transparan, hover menampilkan background |
| `link` | Styling seperti link dengan underline |

**Sizes:**
| Size | Dimensi |
|------|---------|
| `default` | h-9, px-4 |
| `sm` | h-8, px-3, text-xs |
| `lg` | h-10, px-8 |
| `icon` | h-9, w-9 (untuk ikon saja) |

**Penggunaan:**

```tsx
<Button variant="secondary" size="lg">
  Mulai Sekarang
</Button>

<Button variant="ghost" size="icon" asChild>
  <Link href="/login">Login</Link>
</Button>
```

### 7.2 Card (`components/ui/card.tsx`)

Family komponen untuk menampilkan konten dalam kartu:

| Komponen          | Fungsi                                   |
| ----------------- | ---------------------------------------- |
| `Card`            | Container utama dengan border dan shadow |
| `CardHeader`      | Area header dengan padding               |
| `CardTitle`       | Judul kartu                              |
| `CardDescription` | Deskripsi/subtitle                       |
| `CardContent`     | Area konten utama                        |
| `CardFooter`      | Area footer                              |

**Penggunaan:**

```tsx
<Card>
  <CardHeader>
    <CardTitle>Judul Kartu</CardTitle>
    <CardDescription>Deskripsi singkat</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Konten utama...</p>
  </CardContent>
  <CardFooter>
    <Button>Aksi</Button>
  </CardFooter>
</Card>
```

### 7.3 Accordion (`components/ui/accordion.tsx`)

Komponen untuk menampilkan konten yang bisa di-expand/collapse:

| Komponen           | Fungsi                             |
| ------------------ | ---------------------------------- |
| `Accordion`        | Container utama (wrapper Radix UI) |
| `AccordionItem`    | Item individual dengan border      |
| `AccordionTrigger` | Tombol trigger dengan chevron      |
| `AccordionContent` | Konten yang di-expand              |

**Penggunaan:**

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Pertanyaan 1?</AccordionTrigger>
    <AccordionContent>Jawaban untuk pertanyaan 1...</AccordionContent>
  </AccordionItem>
</Accordion>
```

### 7.4 Utility Function: `cn()`

**File:** `lib/utils.ts`

Fungsi helper untuk menggabungkan class names dengan Tailwind:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Penggunaan:**

```tsx
<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "large" && "text-lg"
)}>
```

---

## 8. Sistem Animasi

### 8.1 Animation Variants (Framer Motion)

Tiga variant animasi dasar yang didefinisikan di `page.tsx`:

```typescript
// Fade in dari bawah
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Slide dari kiri
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

// Slide dari kanan
const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

// Container dengan stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
```

### 8.2 Komponen Animasi Kustom

#### ChatAnimation

**Lokasi:** `app/page.tsx` (inline)

Simulasi chat bot dengan pesan yang muncul berurutan:

- Menampilkan percakapan antara user dan bot
- Reset setiap 8 detik
- Typing indicator di akhir

#### HowItWorksAnimation

**Lokasi:** `app/page.tsx` (inline)

Animasi step-by-step proses penggunaan:

- 4 langkah dengan progress indicator
- Setiap step menyala secara berurutan
- Loop otomatis setiap 2.5 detik per step

#### SolutionAnimation

**Lokasi:** `app/page.tsx` (inline)

Visualisasi integrasi layanan:

- Ikon layanan muncul satu per satu
- Garis penghubung menggambar ke phone
- Phone menampilkan cycling services

#### Benefits Animations

| Animasi                  | Fungsi                                    |
| ------------------------ | ----------------------------------------- |
| `ClockToCheckAnimation`  | Jam berubah menjadi centang (hemat waktu) |
| `StepsLightingAnimation` | Progress steps menyala (transparansi)     |
| `PhoneServicesAnimation` | Ikon layanan muncul di sekitar phone      |

#### FAQAnimation

**Lokasi:** `app/page.tsx` (inline)

Transformasi tanda tanya menjadi bola lampu:

- Fase 1: Tanda tanya berputar
- Fase 2: Transformasi ke lightbulb
- Fase 3: Glow effect

### 8.3 Pattern Animasi Umum

**Scroll-triggered Animation:**

```tsx
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Konten */}
</motion.div>
```

**Infinite Loop Animation:**

```tsx
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  {/* Konten */}
</motion.div>
```

**Staggered Children:**

```tsx
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeInUp}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 9. Konfigurasi Proyek

### 9.1 Next.js Config (`next.config.ts`)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
};

export default nextConfig;
```

**Penjelasan:**

- `remotePatterns`: Mengizinkan gambar dari `randomuser.me` untuk foto profil testimoni

### 9.2 TypeScript Config (`tsconfig.json`)

Konfigurasi standar Next.js dengan path aliases:

- `@/*` → `./` (root directory)

### 9.3 PostCSS Config (`postcss.config.mjs`)

Integrasi dengan Tailwind CSS v4:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

### 9.4 ESLint Config (`eslint.config.mjs`)

Menggunakan konfigurasi default Next.js untuk linting.

---

## 10. Panduan Pengembangan

### 10.1 Memulai Development

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser
# http://localhost:3000
```

### 10.2 Scripts yang Tersedia

| Script  | Perintah        | Fungsi                         |
| ------- | --------------- | ------------------------------ |
| `dev`   | `npm run dev`   | Menjalankan development server |
| `build` | `npm run build` | Build untuk production         |
| `start` | `npm run start` | Menjalankan production server  |
| `lint`  | `npm run lint`  | Menjalankan ESLint             |

### 10.3 Menambah Halaman Baru

1. Buat folder baru di `app/`:

   ```
   app/
   └── nama-halaman/
       └── page.tsx
   ```

2. Struktur dasar file:

   ```tsx
   export default function NamaHalamanPage() {
     return (
       <div>
         <h1>Nama Halaman</h1>
       </div>
     );
   }
   ```

3. Untuk halaman dengan interaktivitas, tambahkan `"use client"` di baris pertama.

### 10.4 Menambah Komponen UI Baru

1. Buat file di `components/ui/`:

   ```
   components/ui/nama-komponen.tsx
   ```

2. Gunakan pattern yang konsisten:

   ```tsx
   import * as React from "react";
   import { cn } from "@/lib/utils";

   const NamaKomponen = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div ref={ref} className={cn("base-classes", className)} {...props} />
   ));
   NamaKomponen.displayName = "NamaKomponen";

   export { NamaKomponen };
   ```

### 10.5 Kustomisasi Tema

Untuk mengubah warna tema:

1. Buka `app/globals.css`
2. Modifikasi nilai CSS variables di `:root` dan `.dark`
3. Gunakan format HSL (tanpa `hsl()`, hanya values)

Contoh mengubah warna primary:

```css
:root {
  --primary: 220 60% 30%; /* Biru lebih gelap */
}
```

### 10.6 Integrasi WhatsApp

Nomor WhatsApp dikonfigurasi di `page.tsx`:

```typescript
const WHATSAPP_NUMBER = "6289668176764";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,...`;
```

Untuk mengubah nomor, edit konstanta `WHATSAPP_NUMBER`.

---

## 📝 Catatan Tambahan

- **Responsive Design**: Semua halaman responsive dengan breakpoint `md` (768px) dan `lg` (1024px)
- **Accessibility**: Komponen UI menggunakan Radix UI yang accessible by default
- **Performance**: Menggunakan Next.js Image optimization dan font optimization
- **SEO**: Metadata dikonfigurasi di `layout.tsx`

---

_Dokumentasi ini dibuat untuk proyek GovConnect versi 0.1.0_
_Terakhir diperbarui: Desember 2025_
