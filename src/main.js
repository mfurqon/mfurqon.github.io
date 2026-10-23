import './styles/main.css';
import {
  createIcons, House, FolderKanban, User, Mail, FileText, ArrowRight, ExternalLink, Sun, Moon,
} from 'lucide';
import { site, projects, about, contacts } from './content/site.js';
import { renderNav, initScrollSpy } from './components/nav.js';
import { initThemeToggle } from './components/theme.js';
import { brandIcon } from './components/brand-icons.js';

const $ = (selector) => document.querySelector(selector);

// Teks sederhana: elemen bertanda data-site="kunci" diisi dari site.js
document.querySelectorAll('[data-site]').forEach((el) => (el.textContent = site[el.dataset.site]));
document.querySelectorAll('[data-cv]').forEach((a) => (a.href = site.cvUrl));

// Ikon merek jika dikenal (github, linkedin, ...), jika tidak pakai ikon Lucide dengan nama yang sama.
const iconFor = (name, size) => brandIcon(name, size) ?? `<i data-lucide="${name}" class="${size}" aria-hidden="true"></i>`;

// Kelas yang dipakai ulang oleh tautan kecil di kartu proyek
const smallLink = 'inline-flex min-h-10 items-center gap-1.5 text-sm text-accent underline-offset-4 hover:underline';

$('#project-list').innerHTML = projects
  .map((p) => {
    const tags = p.tech.map((t) => `<li class="rounded-full bg-tint px-3 py-1 text-xs">${t}</li>`).join('');
    // Tautan hanya dibuat jika URL-nya diisi
    const repo = p.repoUrl ? `<a class="${smallLink}" href="${p.repoUrl}" target="_blank" rel="noopener">${iconFor('github', 'size-4')}Kode</a>` : '';
    const demo = p.demoUrl ? `<a class="${smallLink}" href="${p.demoUrl}" target="_blank" rel="noopener">${iconFor('external-link', 'size-4')}Demo</a>` : '';
    return `
      <li class="flex flex-col overflow-hidden rounded-3xl border border-line bg-card">
        <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" class="aspect-video w-full object-cover" />
        <div class="flex flex-1 flex-col gap-3 p-6">
          <h3 class="font-display text-xl font-semibold">${p.title}</h3>
          <div class="desc-box text-muted" data-desc><p class="desc-text">${p.description}</p></div>
          <ul class="flex flex-wrap gap-2" aria-label="Teknologi">${tags}</ul>
          <div class="mt-auto flex gap-4 pt-2">${repo}${demo}</div>
        </div>
      </li>`;
  })
  .join('');

// Deskripsi yang lebih panjang dari kotaknya bergulir otomatis; yang muat tidak bergerak.
function setupDescriptionScroll() {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-desc]').forEach((box) => {
    const text = box.firstElementChild;
    const distance = text.offsetHeight - box.clientHeight; // seberapa banyak teks yang terpotong
    const overflowing = distance > 1;
    box.dataset.scroll = overflowing;
    box.style.setProperty('--scroll-distance', `${distance}px`);
    box.style.setProperty('--scroll-time', `${Math.max(4, distance / 12)}s`); // makin panjang makin lama
    // Gerak dikurangi: kotak digulir manual, jadi harus bisa difokus dengan keyboard
    if (overflowing && reduceMotion) box.tabIndex = 0;
    else box.removeAttribute('tabindex');
  });
}
setupDescriptionScroll();
document.fonts?.ready.then(setupDescriptionScroll); // ukur ulang setelah font termuat
addEventListener('resize', setupDescriptionScroll);

$('#about-profile').textContent = about.profile;
$('#about-goal').textContent = about.goal;
$('#about-education').innerHTML = about.education
  .map((e) => `<li><p class="font-medium">${e.title}</p><p class="text-sm text-muted">${e.place}, ${e.period}</p></li>`)
  .join('');
$('#about-skills').innerHTML = about.skills
  .map((s) => `<li class="rounded-full border border-line px-3.5 py-1.5 text-sm">${s}</li>`)
  .join('');

// Tombol ikon saja. Nama kanal tetap ada untuk pembaca layar (aria-label) dan tooltip (title).
$('#contact-list').innerHTML = contacts
  .map((c) => `
    <li>
      <a href="${c.href}" target="_blank" rel="noopener" aria-label="${c.label}" title="${c.label}"
         class="contact-btn flex size-14 items-center justify-center rounded-full border border-line bg-surface text-accent">
        ${iconFor(c.icon, 'size-6')}
      </a>
    </li>`)
  .join('');

// Tombol "Kirim email" memakai tautan mailto: dari daftar contacts; disembunyikan jika tidak ada.
const mail = contacts.find((c) => c.href.startsWith('mailto:'));
if (mail) $('#email-cta').href = mail.href;
else $('#email-cta').remove();

renderNav();
initThemeToggle();
initScrollSpy();
// Hanya ikon Lucide yang diimpor di atas yang ikut di-bundle. Ikon baru: impor di sini + tambahkan ke objek ini.
createIcons({ icons: { House, FolderKanban, User, Mail, FileText, ArrowRight, ExternalLink, Sun, Moon } });
