// Logo merek (GitHub, Instagram, dll.). Lucide tidak punya logo WhatsApp/Gmail, jadi dipakai paket lain:
// - Simple Icons (CC0): github, instagram, whatsapp, gmail
// - Bootstrap Icons (MIT): linkedin (Simple Icons sudah menghapusnya)
// Hanya logo yang diimpor di sini yang masuk ke hasil build.
import { siGithub, siInstagram, siWhatsapp, siGmail } from 'simple-icons';
import linkedinRaw from 'bootstrap-icons/icons/linkedin.svg?raw';

const simple = (icon) => ({ viewBox: '0 0 24 24', path: icon.path });

const icons = {
  github: simple(siGithub),
  instagram: simple(siInstagram),
  whatsapp: simple(siWhatsapp),
  gmail: simple(siGmail),
  linkedin: { viewBox: '0 0 16 16', path: linkedinRaw.match(/ d="([^"]+)"/)[1] },
};

// Mengembalikan string SVG, atau null jika nama tidak dikenal (lalu dipakai ikon Lucide).
export function brandIcon(name, sizeClass = 'size-6') {
  const icon = icons[name];
  if (!icon) return null;
  return `<svg viewBox="${icon.viewBox}" fill="currentColor" class="${sizeClass}" aria-hidden="true"><path d="${icon.path}"/></svg>`;
}
