// Tombol ganti tema. Tema awal ditentukan oleh skrip kecil di <head> index.html (agar tidak berkedip).
// Pilihan pengunjung disimpan di localStorage (hanya di browser mereka, tidak dikirim ke mana pun).
const themeColors = { dark: '#080e1b', light: '#f1f5fc' }; // untuk bilah browser di ponsel; samakan dengan --color-base

export function initThemeToggle() {
  const root = document.documentElement;
  const button = document.createElement('button');
  button.type = 'button';
  button.className =
    'nav-capsule fixed top-4 right-4 z-50 flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:text-accent';
  // Dua ikon; CSS menampilkan salah satu sesuai tema (lihat .theme-icon-* di main.css)
  button.innerHTML = `
    <span class="theme-icon-sun"><i data-lucide="sun" class="size-5" aria-hidden="true"></i></span>
    <span class="theme-icon-moon"><i data-lucide="moon" class="size-5" aria-hidden="true"></i></span>`;

  const refresh = () => {
    const theme = root.dataset.theme;
    const label = theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap';
    button.setAttribute('aria-label', label);
    button.title = label;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme]);
  };

  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch { /* penyimpanan diblokir: abaikan */ }
    refresh();
  });

  refresh();
  document.body.append(button);
}
