
const header=document.querySelector('[data-header]');
const toggle=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-nav]');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('is-open'));}
const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}})},{threshold:.12});
reveals.forEach(el=>io.observe(el));
const filterButtons=document.querySelectorAll('[data-filter]');
const items=document.querySelectorAll('[data-category]');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{const f=btn.dataset.filter;filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');items.forEach(item=>{item.classList.toggle('is-hidden',f!=='all'&&item.dataset.category!==f);});}));
if(location.hash){const target=document.querySelector(`[data-filter="${location.hash.slice(1)}"]`); if(target) setTimeout(()=>target.click(),200);}
