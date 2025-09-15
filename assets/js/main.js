// Utilities
function updateYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function bindMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });
  }
}

// Global header/footer renderer
function buildHeaderHTML() {
  const isTpl = location.pathname.includes('/template/');
  const root = isTpl ? '../' : './';
  const tpl = isTpl ? './' : './template/';
  return `
    <div class="container nav-wrap">
      <a href="${root}index.html" class="brand brand-lg">Virtuos<span>Studio</span></a>
      <nav class="navbar" aria-label="Navigation principale">
        <button class="nav-toggle" aria-expanded="false" aria-controls="nav-list">
          <span></span><span></span><span></span>
        </button>
        <ul id="nav-list" class="nav-list">
          <li><a href="${root}index.html#services">Services</a></li>
          <li><a href="${tpl}projets.html">Projets</a></li>
          <li><a href="${tpl}tarifs.html">Tarifs</a></li>
          <li><a href="${tpl}contact.html">Contact</a></li>
          <li><a href="${tpl}faq.html">Faq</a></li>
          <li class="only-mobile"><a href="tel:+33781451966">+33 7 81 45 19 66</a></li>
          <li class="only-mobile"><a class="btn btn-primary" href="${tpl}contact.html">Obtenir un devis</a></li>
        </ul>
        <div class="nav-cta">
          <div class="nav-meta">
            <a href="tel:+33781451966" class="phone">+33 7 81 45 19 66</a>
          </div>
          <a class="btn btn-primary" href="${tpl}contact.html">Obtenir un devis</a>
        </div>
      </nav>
    </div>`;
}

function buildFooterHTML() {
  const isTpl = location.pathname.includes('/template/');
  const root = isTpl ? '../' : './';
  const tpl = isTpl ? './' : './template/';
  return `
    <div class="container footer-inner">
      <div class="contact-col" style="grid-column:1/-1">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:virtuosagency@gmail.com">virtuosagency@gmail.com</a></li>
          <li><a href="tel:+33781451966">+33 7 81 45 19 66</a></li>
          <li class="socials">
            <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      © <span id="year"></span> Virtuos Studio. Tous droits réservés.
    </div>`;
}

function renderGlobalHeaderFooter() {
  const headerEl = document.querySelector('.site-header');
  if (headerEl) {
    headerEl.innerHTML = buildHeaderHTML();
  }
  const footerEl = document.querySelector('.site-footer');
  if (footerEl) {
    footerEl.innerHTML = buildFooterHTML();
  }
}

// Feature flags for motion depending on device and user prefs
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
const isNarrow = window.matchMedia('(max-width: 920px)').matches;
const isMobileEnv = isCoarsePointer || isNarrow;

// Lenis smooth scroll (disabled on mobile or reduced motion)
let lenis;
if (!prefersReduced && !isMobileEnv) {
  lenis = new Lenis({ duration: 1.2, smooth: true, wheelMultiplier: 1.1 });
  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// SplitType text for hero title
let split;
window.addEventListener('DOMContentLoaded', () => {
  // Inject global header/footer first for consistency across pages
  renderGlobalHeaderFooter();
  bindMobileNav();
  updateYear();

  const title = document.querySelector('.title');
  if (title && !prefersReduced && !isMobileEnv) {
    split = new SplitType(title, { types: 'lines, words' });
  }

  // Inject promo banner (20% new founders) under header if not dismissed
  try {
    const KEY = 'promo_banner_dismissed_v1';
    const dismissed = localStorage.getItem(KEY) === '1';
    const header = document.querySelector('.site-header');
    if (header && !dismissed) {
      const banner = document.createElement('div');
      banner.className = 'promo-banner';
      banner.innerHTML = `
        <div class="container promo-inner">
          <div class="promo-text">🎉 <b>-20% pour les nouveaux créateurs d’entreprise</b> sur votre premier projet. Code <b>NEW20</b></div>
          <div class="promo-cta">
            <a class="btn btn-outline" href="${location.pathname.includes('/template/') ? './contact.html' : './template/contact.html'}?promo=NEW20">Profiter de l’offre</a>
            <button class="promo-close" aria-label="Masquer la promotion">✕</button>
          </div>
        </div>`;
      header.insertAdjacentElement('afterend', banner);
      const closeBtn = banner.querySelector('.promo-close');
      closeBtn?.addEventListener('click', () => {
        banner.remove();
        localStorage.setItem(KEY, '1');
      });
    }
  } catch (e) {
    // no-op if storage not available
  }
});

// Toast utility + bind to contact forms
window.addEventListener('DOMContentLoaded', () => {
  const toastEl = document.getElementById('toast');
  function showToast(message) {
    if (!toastEl) {
      return;
    }
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2500);
  }
  const forms = document.querySelectorAll('form.contact-form');
  forms.forEach((form) => {
    form.addEventListener('submit', () => {
      showToast('Merci ! Le formulaire a été ouvert, finalisez l’envoi.');
    });
  });
});

// Social dropdown toggle
window.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.social-trigger');
  const menu = document.getElementById('social-menu');
  if (!trigger || !menu) {
    return;
  }
  const openMenu = () => {
    menu.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
  };
  const closeMenu = () => {
    menu.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  };
  const toggleMenu = () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== trigger) {
      closeMenu();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
});

// GSAP animations
window.addEventListener('load', () => {
  if (window.gsap) {
    const { gsap } = window;
    gsap.registerPlugin(ScrollTrigger);
    
    // Disable animations on mobile or reduced motion
    if (!prefersReduced && !isMobileEnv) {
      // Intro timeline (softer)
      gsap.from('.site-header', { y: -16, opacity: 0, duration: 0.4, ease: 'power2.out' });
      gsap.from('.kicker', { y: 8, opacity: 0, duration: 0.4, delay: 0.08, ease: 'power2.out' });

      if (document.querySelector('.title .word')) {
        gsap.from('.title .word', {
          y: 16,
          opacity: 0,
          stagger: 0.03,
          duration: 0.6,
          ease: 'power2.out'
        });
      }

      gsap.from('.subtitle', { y: 8, opacity: 0, duration: 0.4, delay: 0.16, ease: 'power2.out' });
      gsap.from('.hero-cta .btn', { y: 6, opacity: 0, duration: 0.4, delay: 0.22, stagger: 0.06, ease: 'power2.out' });
      gsap.from('.hero-badges span', { y: 4, opacity: 0, duration: 0.4, delay: 0.28, stagger: 0.05, ease: 'power2.out' });
      // Subtle reveal for hero logos and micro proof (logo pills)
      if (document.querySelector('.logos .logo-pill')) {
        gsap.from('.logos .logo-pill', { y: 6, opacity: 0, duration: 0.35, delay: 0.34, stagger: 0.04, ease: 'power2.out' });
      }
      if (document.querySelector('.micro-proof')) {
        gsap.from('.micro-proof', { y: 6, opacity: 0, duration: 0.35, delay: 0.42, ease: 'power2.out' });
      }

      // Scroll reveals
      const revealUp = document.querySelectorAll('.service, .project, .price');
      revealUp.forEach((el) => {
        gsap.from(el, {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Reveal for section eyebrows and titles
      const sectionHeaders = document.querySelectorAll('.section .eyebrow, .section .section-title');
      sectionHeaders.forEach((el) => {
        gsap.from(el, {
          y: 10,
          opacity: 0,
          duration: 0.45,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Parallax glows
      gsap.to('.glow-1', {
        yPercent: 10,
        xPercent: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      gsap.to('.glow-2', {
        yPercent: -10,
        xPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Magnetic hover for primary CTAs (hero/nav) — toned down, not on cards
    const canHover = window.matchMedia('(hover: hover)').matches && !prefersReduced && !isMobileEnv;
    if (canHover) {
      // Softer magnetic hover only on hero CTAs
      const magnetBtns = document.querySelectorAll('.hero-cta .btn');
      magnetBtns.forEach((btn) => {
        let bounds;
        const updateBounds = () => { bounds = btn.getBoundingClientRect(); };
        updateBounds();
        window.addEventListener('resize', updateBounds);

        const toX = gsap.quickTo(btn, 'x', { duration: 0.2, ease: 'power2.out' });
        const toY = gsap.quickTo(btn, 'y', { duration: 0.2, ease: 'power2.out' });

        btn.addEventListener('mousemove', (e) => {
          if (!bounds) {
            return;
          }
          const cx = bounds.left + bounds.width / 2;
          const cy = bounds.top + bounds.height / 2;
          const dx = (e.clientX - cx) / 28; // softer
          const dy = (e.clientY - cy) / 28; // softer
          toX(dx);
          toY(dy);
        });
        btn.addEventListener('mouseleave', () => {
          toX(0);
          toY(0);
        });
      });
    }

    // Glow pulse on main hero CTA (homepage)
    const heroPrimary = document.querySelector('#hero .hero-cta .btn.btn-secondary');
    if (heroPrimary && !prefersReduced && !isMobileEnv) {
      gsap.to(heroPrimary, {
        boxShadow: '0 0 16px rgba(181,123,255,0.12), 0 0 0 2px rgba(108,246,255,0.06)',
        duration: 2.0,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });
    }

    // Premium hover tilt for cards (only on devices with hover) — softened
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    if (supportsHover) {
      const tiltCards = document.querySelectorAll('.project.card, .price.card');
      const maxTilt = 1.2; // much softer tilt
      tiltCards.forEach((card) => {
        let bounds;
        const updateBounds = () => { bounds = card.getBoundingClientRect(); };
        updateBounds();
        window.addEventListener('resize', updateBounds);

        card.addEventListener('mousemove', (e) => {
          if (!bounds) {
            return;
          }
          const cx = bounds.left + bounds.width / 2;
          const cy = bounds.top + bounds.height / 2;
          const dx = (e.clientX - cx) / (bounds.width / 2);
          const dy = (e.clientY - cy) / (bounds.height / 2);
          const rotateY = dx * maxTilt; // left(-) to right(+)
          const rotateX = -dy * maxTilt; // top(+) to bottom(-)
          gsap.to(card, { rotateX, rotateY, duration: 0.12, ease: 'power2.out', transformPerspective: 800 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.2, ease: 'power2.out' });
        });
      });
    }
  }
});
