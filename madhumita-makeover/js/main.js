/* ========================================
   Madhumita's Makeover Studio & Academy
   Main JavaScript
   ======================================== */

/* ===== CUSTOM CURSOR ===== */
const cursor    = document.getElementById('cursor');
const ring      = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = (mx - 5) + 'px';
  cursor.style.top  = (my - 5) + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = (rx - 18) + 'px';
  ring.style.top  = (ry - 18) + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .ftab, .gallery-item, .price-card, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2.5)';
    ring.style.transform   = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform   = 'scale(1)';
  });
});

/* ===== SCROLL PROGRESS BAR ===== */
const prog = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  prog.style.width = Math.min(pct, 100) + '%';
});

/* ===== STICKY NAV ===== */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

/* ===== HERO BACKGROUND LOAD + PARALLAX ===== */
const heroBg = document.getElementById('heroBg');
setTimeout(() => heroBg.classList.add('loaded'), 100);

window.addEventListener('scroll', () => {
  const s = window.scrollY;
  if (s < window.innerHeight) {
    heroBg.style.transform = `translateY(${s * 0.4}px)`;
  }
});

/* ===== ABOUT IMAGE ANIMATION ===== */
const aboutImg = document.getElementById('aboutImg');
if (aboutImg) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) aboutImg.classList.add('anim');
  }, { threshold: 0.3 });
  obs.observe(aboutImg);
}

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 40);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObs.observe(el));

/* ===== FLOATING PARTICLES ===== */
const pContainer = document.getElementById('particles');
if (pContainer) {
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left              = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay    = (Math.random() * 10) + 's';
    const size = (1 + Math.random() * 2) + 'px';
    p.style.width  = size;
    p.style.height = size;
    pContainer.appendChild(p);
  }
}

/* ===== GALLERY FILTER TABS ===== */
document.querySelectorAll('.ftab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    // Future: filter gallery items by category
  });
});

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    const icon   = this.querySelector('span');
    const isOpen = answer.style.display === 'block';
    // Close all
    document.querySelectorAll('.faq-a').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-q span').forEach(s => s.textContent = '+');
    // Open clicked if it was closed
    if (!isOpen) {
      answer.style.display = 'block';
      icon.textContent = '−';
    }
  });
});

/* ===== CONTACT FORM (Netlify) ===== */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    // Netlify handles submission automatically via data-netlify="true"
    // Optionally show a thank-you message
    const btn = this.querySelector('.submit-btn');
    btn.textContent = '✓ Sent! We will be in touch soon.';
    btn.style.background = '#2a9d5c';
    btn.disabled = true;
  });
}
