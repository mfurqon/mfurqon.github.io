import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  // './' membuat semua path relatif, sehingga build berfungsi baik di
  // username.github.io/nama-repo/ maupun di root domain.
  base: './',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      // Setiap halaman HTML didaftarkan di sini. Tambahkan about.html dkk. di Tahap 4.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
      },
    },
  },
});
