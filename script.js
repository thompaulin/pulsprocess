const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}

const yearTargets = document.querySelectorAll('[data-year]');
yearTargets.forEach((target) => {
  target.textContent = new Date().getFullYear();
});

const imageSlots = document.querySelectorAll('.image-slot');
imageSlots.forEach((slot) => {
  const image = slot.querySelector('img');
  if (!image) {
    slot.classList.add('is-empty');
    return;
  }

  image.addEventListener('error', () => {
    slot.classList.add('is-empty');
  });

  image.addEventListener('load', () => {
    slot.classList.remove('is-empty');
  });

  if (!image.complete) return;
  if (image.naturalWidth === 0) slot.classList.add('is-empty');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

let lastScroll = window.scrollY;
window.addEventListener('scroll', () => {
  if (!header) return;
  const currentScroll = window.scrollY;
  header.style.boxShadow = currentScroll > 12 ? '0 14px 40px rgba(11,18,32,.07)' : 'none';
  lastScroll = currentScroll;
}, { passive: true });
