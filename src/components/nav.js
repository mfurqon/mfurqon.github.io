// Navigasi bawah: tautan lompat ke section di halaman yang sama.
// "id" harus sama dengan atribut id pada <section> di index.html.
const items = [
  { label: 'Home', id: 'home', icon: 'house' },
  { label: 'Projects', id: 'projects', icon: 'folder-kanban' },
  { label: 'About', id: 'about', icon: 'user' },
  { label: 'Contact', id: 'contact', icon: 'mail' },
];

export function renderNav() {
  const links = items
    .map(({ label, id, icon }) => `
      <li>
        <a href="#${id}" data-nav="${id}"
           class="nav-item flex min-h-12 min-w-16 flex-col items-center justify-center gap-0.5 rounded-full px-3.5 py-1.5 text-[0.7rem] font-medium text-muted transition-colors duration-200 hover:text-ink sm:min-w-20 sm:flex-row sm:gap-2 sm:px-5 sm:text-sm">
          <i data-lucide="${icon}" class="size-5" aria-hidden="true"></i>
          <span>${label}</span>
        </a>
      </li>`)
    .join('');

  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Navigasi utama');
  nav.className = 'fixed inset-x-0 bottom-4 z-50 flex justify-center px-4';
  nav.innerHTML = `<ul class="nav-capsule flex max-w-full items-center gap-1 rounded-full p-1.5">${links}</ul>`;
  document.body.append(nav);
}

// Scroll-spy: menandai tombol nav sesuai section yang sedang terlihat di tengah layar.
export function initScrollSpy() {
  const links = [...document.querySelectorAll('[data-nav]')];
  const setActive = (id) =>
    links.forEach((a) =>
      a.dataset.nav === id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: '-45% 0px -50% 0px' } // hanya garis tipis di tengah layar yang dihitung
  );
  items.forEach(({ id }) => observer.observe(document.getElementById(id)));

  // Section terakhir pendek, jadi saat sudah mentok di bawah paksa aktifkan Contact.
  addEventListener('scroll', () => {
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) setActive(items.at(-1).id);
  }, { passive: true });

  setActive('home');
}
