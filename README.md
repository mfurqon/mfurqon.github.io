# Portfolio Personal (Dark Navy)

Website satu halaman: HTML + JavaScript vanilla + Tailwind CSS v4 (lewat build) + Vite + Lucide Icons.
Navigasi bawah melompat ke section Home, Projects, About, dan Contact.

## 1. Menjalankan
Butuh Node.js 20 atau lebih baru.

```bash
npm install        # sekali saja
npm run dev        # server lokal, buka alamat yang tampil (biasanya http://localhost:5173)
npm run build      # membuat folder dist/ (situs statis)
npm run preview    # mencoba hasil build secara lokal
```

## 2. Peta file
| File | Isi |
|---|---|
| `src/content/site.js` | **Semua teks**: nama, proyek, About, kontak |
| `src/styles/main.css` | **Warna dan font** (bagian `@theme`), gaya kapsul nav |
| `index.html` | **Kerangka dan layout** setiap section |
| `src/main.js` | Mengubah data di `site.js` menjadi HTML kartu, daftar, dan ikon |
| `src/components/nav.js` | Navigasi bawah dan penanda section aktif |
| `public/images/` | Gambar proyek |
| `public/cv/` | File CV publik (PDF) |

## 3. Mengganti konten
Buka `src/content/site.js`. Ganti semua teks `[...]` dengan data asli.
- `site`: nama, bidang, intro, kalimat penutup Contact (`contactHeadline`), dan lokasi file CV.
- `about`: profil, pendidikan (salin satu blok `{ }` untuk menambah), keahlian, dan tujuan karier.
- Judul tab dan deskripsi SEO ada di `<title>` dan `<meta name="description">` pada `index.html`. Ganti juga di sana.
- Tulis hanya hal yang benar. Jangan memuat data pribadi yang tidak perlu.

## 4. Menambah atau mengurangi proyek
1. Taruh gambar (disarankan rasio 16:9, lebar sekitar 1200px, format WebP/JPG, di bawah 200 KB) di `public/images/`.
2. Di `projects` pada `site.js`, salin satu blok `{ ... }` lalu isi `title`, `description`, `image` (misal `'images/nama-file.webp'`), `imageAlt`, dan `tech`.
3. `repoUrl` dan `demoUrl` boleh dikosongkan (`''`). Tombolnya otomatis tidak tampil.
4. Menghapus proyek: hapus satu blok-nya. Semua proyek tampil otomatis dalam grid.

## 5. Mengganti kontak
Edit array `contacts` di `site.js`. Hapus baris yang tidak ingin ditampilkan. Tombol "Kirim email" otomatis memakai baris dengan ikon `mail`.
Logo yang tersedia (tulis di `icon`): `gmail`, `linkedin`, `github`, `whatsapp`, `instagram`.
Untuk WhatsApp, tautan berbentuk `https://wa.me/62812xxxxxxx` (kode negara tanpa `+` atau `0`). Ingat, nomor Anda menjadi publik.
Logo merek baru (mis. X, YouTube): cari di https://simpleicons.org, lalu tambahkan di `src/components/brand-icons.js` (impor `siNamaMerek` dan daftarkan di objek `icons`). Ikon umum non-merek: cari di https://lucide.dev, lalu tambahkan di `import` dan `createIcons` pada `src/main.js`. Logo merek adalah milik pemiliknya masing-masing.

## 6. Mengganti warna
Semua warna ada di `src/styles/main.css`: blok `@theme` untuk **mode gelap** dan blok `:root[data-theme="light"]` untuk **mode terang**. Tabel peran token:

| Token | Peran | Dipakai di |
|---|---|---|
| `--color-base` | Primer: latar halaman | Latar seluruh situs |
| `--color-surface` | Sekunder: latar area | Kotak About, kartu kontak, kapsul nav |
| `--color-card` | Tersier: latar kartu | Kartu proyek |
| `--color-accent` | Aksen | Tombol utama, nav aktif, tautan, ikon |
| `--color-accent-hover` | Aksen saat disorot | Hover tombol utama |
| `--color-on-accent` | Teks di atas aksen | Teks tombol dan nav aktif |
| `--color-ink` | Netral: teks utama | Judul dan teks |
| `--color-muted` | Netral: teks sekunder | Deskripsi, label |
| `--color-line` | Netral: border | Garis tepi |

Cukup ubah kode hex, simpan, dan browser memperbarui otomatis. Glow dan transparansi nav ikut berubah karena dihitung dari token ini.
Tempat yang tidak otomatis: warna bilah browser di `themeColors` pada `src/components/theme.js` (dan `<meta name="theme-color">` di `index.html`), serta warna di `public/images/project-placeholder.svg`.
Token `--glow-nav`, `--glow-ring`, `--glow-btn`, dan `--glow-wash` adalah warna cahaya aksen (nav aktif, hover tombol, panel Contact). Nilainya ditulis manual per tema: jika Anda mengganti `--color-accent`, ubah juga angka RGB-nya.
Token `--color-tint` adalah lapisan tipis untuk tag dan hover, `--glass`, `--glass-sheen`, `--glass-edge`, `--glass-border`, dan `--nav-shadow` mengatur kaca nav.css`, hapus jika tidak diinginkan).
Pastikan kontras teks tetap cukup (periksa di https://webaim.org/resources/contrastchecker/).

## 6b. Mode terang dan gelap
- Tombol matahari/bulan di kanan atas mengganti tema. Pilihan pengunjung disimpan di `localStorage` browser mereka (tidak dikirim ke mana pun).
- Tema untuk kunjungan pertama diatur oleh `DEFAULT_THEME` di skrip `<head>` pada `index.html`: `'dark'` (default), `'light'`, atau `'system'` (ikuti pengaturan perangkat).

## 7. Mengubah layout
- **Urutan atau isi section**: edit `index.html`. Tiap section dibatasi komentar `<!-- ... -->`.
- **Jumlah kolom proyek**: pada `<ul id="project-list">`, ubah `sm:grid-cols-2 lg:grid-cols-3`. Awalan `sm:`, `md:`, `lg:` berarti tablet, laptop kecil, dan layar besar; tanpa awalan berarti ponsel.
- **Tinggi deskripsi kartu proyek**: `.desc-box` di `main.css` (default 3 baris). Deskripsi yang lebih panjang bergulir otomatis, berhenti saat di-hover, dan bisa digulir manual jika pengunjung memilih gerak dikurangi.
- **Jarak antar section**: kelas `py-16` (naik ke `py-24` untuk lebih lega).
- **Lebar konten**: `max-w-5xl` pada `<main>`.
- **Menambah section baru**: (1) tambah `<section id="nama">` di `index.html`, (2) tambah satu baris di array `items` pada `src/components/nav.js` dengan `id` yang sama.
- **Font**: ganti tautan Google Fonts di `index.html` dan nama font di `@theme`. Fallback sistem tetap ada jika font gagal dimuat.
- Daftar kelas Tailwind: https://tailwindcss.com/docs

## 8. Publikasi ke GitHub Pages
1. Buat repositori di GitHub, lalu push proyek ini ke branch `main`.
2. Di GitHub: **Settings, Pages, Build and deployment, Source: GitHub Actions**.
3. Setiap push ke `main` menjalankan `.github/workflows/deploy.yml` (tab **Actions**) dan situs terbit di `https://username.github.io/nama-repo/`.
4. Konfigurasi `base: './'` di `vite.config.js` sudah menangani path repositori, jadi tidak perlu diubah.

## 9. Daftar periksa sebelum publikasi
- [ ] Tidak ada teks `[...]` tersisa (cari dengan Ctrl+F di folder proyek).
- [ ] Semua tautan kontak, repo, dan demo benar dan bisa dibuka.
- [ ] `public/cv/cv-publik.pdf` ada dan hanya berisi informasi profesional. File di situs publik dapat diunduh siapa pun.
- [ ] Gambar proyek tampil, punya `imageAlt`, dan ukurannya wajar.
- [ ] Tidak ada alamat rumah, tanggal lahir lengkap, atau data pribadi lain.
- [ ] Tidak ada API key atau password di kode.
- [ ] Tidak ada error di console browser (F12).
- [ ] Coba di lebar ponsel: tidak ada scroll horizontal, dan nav tidak menutupi konten.
- [ ] Tab dengan keyboard: outline biru terlihat dan semua tombol bisa dijangkau.
- [ ] `npm run build` sukses, lalu cek dengan `npm run preview`. Periksa ulang tampilan di sini (kaca nav, glow, animasi, kedua mode tema): hasil build bisa berbeda dari `npm run dev` karena CSS diminify.
