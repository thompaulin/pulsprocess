
const button = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
if (button && menu) {
  button.addEventListener('click', () => menu.classList.toggle('open'));
}
const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 10);
});
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealEls.forEach(el => observer.observe(el));
