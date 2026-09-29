const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const updates = document.createElement('link');
updates.rel = 'stylesheet';
updates.href = 'assets/updates.css';
document.head.appendChild(updates);
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
