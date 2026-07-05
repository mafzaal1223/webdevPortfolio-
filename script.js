// =========================================================
// NAV: scroll state + mobile toggle
// =========================================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// =========================================================
// TYPED ROLE TEXT
// =========================================================
const roles = [
  'Professional Web Developer',
  'Frontend & Backend Engineer',
  'UI / UX Designer',
  'Node.js Developer'
];
const typedEl = document.getElementById('typedRole');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];
  if (!deleting){
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 55);
}
typeLoop();

// =========================================================
// CURSOR GLOW (desktop only)
// =========================================================
const cursorGlow = document.getElementById('cursorGlow');
const isTouch = window.matchMedia('(hover: none)').matches;
if (!isTouch){
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  }, { passive: true });
} else if (cursorGlow) {
  cursorGlow.style.display = 'none';
}

// =========================================================
// HERO CARD 3D TILT
// =========================================================
const tiltCard = document.getElementById('tiltCard');
if (tiltCard && !isTouch){
  const wrap = tiltCard.parentElement;
  wrap.addEventListener('mousemove', (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(10px)`;
  });
  wrap.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0)';
  });
}

// =========================================================
// SCROLL REVEAL
// =========================================================
const revealTargets = document.querySelectorAll(
  '.section-head, .about-lead, .about-details, .skill-card, .process-item, .edu-card, .contact-inner'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => revealObserver.observe(el));

// Stagger skill cards slightly
document.querySelectorAll('.skill-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.06}s`;
});

// =========================================================
// SKILL BAR FILL ON VIEW
// =========================================================
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const card = entry.target;
      const level = card.dataset.level || 0;
      card.style.setProperty('--target-width', level + '%');
      requestAnimationFrame(() => card.classList.add('filled'));
      skillObserver.unobserve(card);
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));

// =========================================================
// SMOOTH ANCHOR SCROLL OFFSET (account for fixed nav)
// =========================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const targetId = this.getAttribute('href');
    if (targetId.length > 1){
      const target = document.querySelector(targetId);
      if (target){
        e.preventDefault();
        const offset = 80;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth'
        });
      }
    }
  });
});
