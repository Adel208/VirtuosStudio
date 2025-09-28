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
          <li><a href="${root}index.html">Accueil</a></li>
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
      <div class="brand-col">
        <a href="${root}index.html" class="brand brand-lg">Virtuos<span>Studio</span></a>
        <p>Sites web premium: design sombre, animations maîtrisées et SEO efficace.</p>
      </div>
      <div class="links-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="${root}index.html">Accueil</a></li>
          <li><a href="${tpl}projets.html">Projets</a></li>
          <li><a href="${tpl}tarifs.html">Tarifs</a></li>
          <li><a href="${tpl}contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="links-col">
        <h4>Ressources</h4>
        <ul>
          <li><a href="${tpl}faq.html">FAQ</a></li>
          <li><a href="${tpl}confidentialite.html">Confidentialité</a></li>
          <li><a href="${tpl}mentions-legales.html">Mentions légales</a></li>
          <li><a href="${tpl}articles.html">Articles</a></li>
        </ul>
      </div>
      <div class="contact-col footer-contact">
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="mailto:virtuosagency@gmail.com">
              <span class="icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18v12H3z" stroke="currentColor" opacity=".9"/><path d="M3 7l9 7 9-7" stroke="currentColor"/></svg>
              </span>
              <span>virtuosagency@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+33781451966">
              <span class="icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4l3 1-1 4c1.5 3 3.5 5 6 6l4-1 1 3-2 3c-6 0-11-5-11-11L5 4z" stroke="currentColor"/></svg>
              </span>
              <span>+33 7 81 45 19 66</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-links-bar">
      <ul class="footer-links">
        <li><a href="${tpl}faq.html">FAQ</a></li>
        <li><a href="${tpl}confidentialite.html">Confidentialité</a></li>
        <li><a href="${tpl}mentions-legales.html">Mentions légales</a></li>
      </ul>
    </div>
    <div class="socials">
      <a href="https://www.behance.net/adeljebali" target="_blank" rel="noopener" aria-label="Behance">
        <span class="icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 4C5.5 4 4 5.5 4 7.5v9C4 18.5 5.5 20 7.5 20h9c2 0 3.5-1.5 3.5-3.5v-9C20 5.5 18.5 4 16.5 4h-9zm7.5 2h3v1h-3V6zM8 7h2.5c1.4 0 2.5 1.1 2.5 2.5S11.9 12 10.5 12H8V7zm0 7h3c1.7 0 3 1.3 3 3s-1.3 3-3 3H8v-6z" stroke="currentColor"/></svg>
        </span>
        <span>Behance</span>
      </a>
      <a href="https://www.instagram.com/adel.djeb.144/" target="_blank" rel="noopener" aria-label="Instagram">
        <span class="icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor"/><circle cx="12" cy="12" r="4" stroke="currentColor"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
        </span>
        <span>Instagram</span>
      </a>
      <a href="https://github.com/Adel208" target="_blank" rel="noopener" aria-label="GitHub">
        <span class="icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.13-1.11-1.44-1.11-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" stroke="currentColor"/></svg>
        </span>
        <span>GitHub</span>
      </a>
      <a href="https://www.facebook.com/share/19YV6Zni92/" target="_blank" rel="noopener" aria-label="Facebook">
        <span class="icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" stroke="currentColor"/></svg>
        </span>
        <span>Facebook</span>
      </a>
    </div>
    <div class="copyright">
      &copy; <span id="year"></span> Virtuos Studio. Tous droits r&eacute;serv&eacute;s.
    </div>`;
}

function renderGlobalHeaderFooter() {
  const headerEl = document.querySelector('.site-header');
  if (headerEl) {
    headerEl.innerHTML = buildHeaderHTML();
    // Add active states to navigation
    addActiveNavStates();
  }
  const footerEl = document.querySelector('.site-footer');
  if (footerEl) {
    footerEl.innerHTML = buildFooterHTML();
  }
}

function addActiveNavStates() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-list a');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    
    // Check if current page matches the link
    if (currentPath === linkPath || 
        (currentPath.includes('/template/') && linkPath.includes('/template/')) ||
        (currentPath.endsWith('index.html') && linkPath.endsWith('index.html')) ||
        (currentPath === '/' && linkPath.endsWith('index.html'))) {
      
      // Special handling for different sections
      if (linkPath.includes('projets.html') && currentPath.includes('projets')) {
        link.classList.add('active');
      } else if (linkPath.includes('contact.html') && currentPath.includes('contact')) {
        link.classList.add('active');
      } else if (linkPath.includes('#services') && currentPath.includes('index')) {
        link.classList.add('active');
      } else if (currentPath === linkPath) {
        link.classList.add('active');
      }
    }
  });
}

// Enhanced feature flags for motion and device capabilities
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
const isNarrow = window.matchMedia('(max-width: 920px)').matches;
const isMobileEnv = isCoarsePointer || isNarrow;
const hasHover = window.matchMedia('(hover: hover)').matches;
const isHighRefresh = window.screen?.refreshRate > 60 || false;
const supportsBackdrop = CSS.supports('backdrop-filter', 'blur(10px)');
const prefersContrast = window.matchMedia('(prefers-contrast: high)').matches;

// Conditional animations and smooth scroll
let lenis;

// Initialize smooth scroll with enhanced conditions
if (!prefersReduced && !isMobileEnv && hasHover) {
  const scrollConfig = {
    duration: isHighRefresh ? 1.0 : 1.2,
    smooth: true,
    wheelMultiplier: isHighRefresh ? 1.2 : 1.1
  };
  
  lenis = new Lenis(scrollConfig);
  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// Conditional hover effects
if (hasHover && !prefersReduced) {
  document.documentElement.classList.add('has-hover');
}

// High contrast mode adjustments
if (prefersContrast) {
  document.documentElement.classList.add('high-contrast');
}

// Backdrop filter fallback
if (!supportsBackdrop) {
  document.documentElement.classList.add('no-backdrop');
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
          <div class="promo-text"> <b>-20% pour les nouveaux cr&eacute;ateurs d&rsquo;entreprise</b> sur votre premier projet. Code <b>NEW20</b></div>
          <div class="promo-cta">
            <a class="btn btn-outline" href="${location.pathname.includes('/template/') ? './contact.html' : './template/contact.html'}?promo=NEW20">Profiter de l&rsquo;offre</a>
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
      showToast('Merci ! Le formulaire a &eacute;t&eacute; ouvert, finalisez l&rsquo;envoi.');
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
