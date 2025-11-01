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
  const isGitHubPages = location.hostname === 'adel208.github.io';
  const isVirtuosLife = location.hostname === 'virtuos.life';
  
  let root, tpl, homeUrl;
  
  if (isGitHubPages) {
    // GitHub Pages URLs
    root = isTpl ? '/VirtuosStudio/' : '/VirtuosStudio/';
    tpl = isTpl ? '/VirtuosStudio/template/' : '/VirtuosStudio/template/';
    homeUrl = '/VirtuosStudio/';
  } else if (isVirtuosLife) {
    // Production URLs
    root = isTpl ? '/' : '/';
    tpl = isTpl ? '/template/' : '/template/';
    homeUrl = '/';
  } else {
    // Local development URLs
    root = isTpl ? '../' : './';
    tpl = isTpl ? './' : './template/';
    homeUrl = isTpl ? '../index.html' : './index.html';
  }
  
  console.log('Building header - pathname:', location.pathname, 'hostname:', location.hostname);
  console.log('Building header - isGitHubPages:', isGitHubPages, 'isTpl:', isTpl);
  console.log('Building header - root:', root, 'tpl:', tpl, 'homeUrl:', homeUrl);
  return `
    <div class="container nav-wrap">
      <a href="${homeUrl}" class="brand brand-lg">Virtuos<span>Studio</span></a>
      <nav class="navbar" aria-label="Navigation principale">
        <button class="nav-toggle" aria-expanded="false" aria-controls="nav-list">
          <span></span><span></span><span></span>
        </button>
        <ul id="nav-list" class="nav-list">
          <li class="desktop-only"><a href="${homeUrl}">Accueil</a></li>
          <li><a href="${root}projets.html">Projets</a></li>
          <li class="desktop-only"><a href="${root}blog.html">Blog</a></li>
          <li class="desktop-only"><a href="${root}tarifs.html">Tarifs</a></li>
          <li><a href="${root}contact.html">Contact</a></li>
          <li class="only-mobile"><a class="btn btn-primary" href="${root}contact.html">Obtenir un devis</a></li>
        </ul>
        <div class="nav-cta" style="margin-left: 48px;">
          <button class="theme-toggle" aria-label="Changer de thème" title="Basculer entre thème sombre et clair">
            <svg class="theme-icon-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
            <svg class="theme-icon-light" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </button>
          <a class="btn btn-primary" href="${root}contact.html">Obtenir un devis</a>
        </div>
      </nav>
    </div>`;
}

function buildFooterHTML() {
  const isTpl = location.pathname.includes('/template/');
  const isGitHubPages = location.hostname === 'adel208.github.io';
  const isVirtuosLife = location.hostname === 'virtuos.life';
  
  let root, tpl, homeUrl;
  
  if (isGitHubPages) {
    // GitHub Pages URLs
    root = isTpl ? '/VirtuosStudio/' : '/VirtuosStudio/';
    tpl = isTpl ? '/VirtuosStudio/template/' : '/VirtuosStudio/template/';
    homeUrl = '/VirtuosStudio/';
  } else if (isVirtuosLife) {
    // Production URLs
    root = isTpl ? '/' : '/';
    tpl = isTpl ? '/template/' : '/template/';
    homeUrl = '/';
  } else {
    // Local development URLs
    root = isTpl ? '../' : './';
    tpl = isTpl ? './template/' : './template/';
    homeUrl = isTpl ? '../index.html' : './index.html';
  }
  return `
    <div class="container footer-inner" style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; align-items: start;">
      <div class="footer-brand">
        <a href="${homeUrl}" class="brand brand-lg">Virtuos<span>Studio</span></a>
        <p>Agence web premium spécialisée en design moderne et SEO.</p>
        <div class="footer-social" style="margin-top: 20px;">
          <div class="social-links" style="display: flex; gap: 12px;">
            <a href="https://www.behance.net/adeljebali" target="_blank" rel="noopener" aria-label="Behance">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.5 4C5.5 4 4 5.5 4 7.5v9C4 18.5 5.5 20 7.5 20h9c2 0 3.5-1.5 3.5-3.5v-9C20 5.5 18.5 4 16.5 4h-9zm7.5 2h3v1h-3V6zM8 7h2.5c1.4 0 2.5 1.1 2.5 2.5S11.9 12 10.5 12H8V7zm0 7h3c1.7 0 3 1.3 3 3s-1.3 3-3 3H8v-6z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/adel.djeb.144/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="var(--bg)"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--bg)" stroke-width="2"/>
              </svg>
            </a>
            <a href="https://github.com/Adel208" target="_blank" rel="noopener" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.13-1.11-1.44-1.11-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-nav">
        <h4>Navigation</h4>
        <ul>
          <li><a href="${root}projets.html">Projets</a></li>
          <li><a href="${root}blog.html">Blog</a></li>
          <li><a href="${root}tarifs.html">Tarifs</a></li>
          <li><a href="${root}contact.html">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-legal">
        <h4>Légal</h4>
        <ul>
          <li><a href="${root}faq.html">FAQ</a></li>
          <li><a href="${tpl}politique-confidentialite.html">Politique de confidentialité</a></li>
          <li><a href="${tpl}mentions-legales.html">Mentions légales</a></li>
        </ul>
      </div>
      
      <div class="footer-contact">
        <h4>Contact</h4>
        <div class="contact-info">
          <a href="mailto:virtuosagency@gmail.com" class="contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            virtuosagency@gmail.com
          </a>
          <a href="tel:+33781451966" class="contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +33 7 81 45 19 66
          </a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="copyright">
          &copy; <span id="year"></span> Virtuos Studio. Tous droits réservés.
        </div>
      </div>
    </div>`;
}

function renderGlobalHeaderFooter() {
  console.log('renderGlobalHeaderFooter called');
  const headerEl = document.querySelector('.site-header');
  if (headerEl) {
    console.log('Header element found, building HTML...');
    headerEl.innerHTML = buildHeaderHTML();
    console.log('Header HTML set, adding navigation handlers...');
    
    // Add active states to navigation
    addActiveNavStates();
    
    // Add click handlers for navigation links
    const navLinks = document.querySelectorAll('.nav-list a');
    console.log('Found', navLinks.length, 'navigation links');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        console.log('Navigation click:', link.href);
        // Check if link exists
        if (link.href.includes('template/') && !link.href.includes('#')) {
          console.log('Template link clicked, checking if file exists...');
        }
      });
    });

    // GA4 Conversion Tracking
    setupConversionTracking();
  } else {
    console.error('Header element (.site-header) not found!');
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
      } else if (linkPath.includes('blog.html') && (currentPath.includes('blog') || currentPath.includes('articles'))) {
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

// GA4 Conversion Tracking
function setupConversionTracking() {
  // Track phone calls
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'phone_call', {
        'event_category': 'contact',
        'event_label': 'phone_click',
        'value': 1
      });
      console.log('Phone call tracked');
    });
  });

  // Track email clicks
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'email_contact', {
        'event_category': 'contact',
        'event_label': 'email_click',
        'value': 1
      });
      console.log('Email contact tracked');
    });
  });

  // Track CTA button clicks
  document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': button.textContent.trim(),
        'value': 1
      });
      console.log('CTA clicked:', button.textContent.trim());
    });
  });

  // Track form submissions with specific labels
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
      let formType = 'contact_form';
      let formValue = 5;
      
      // Identify form type by class or context
      if (form.classList.contains('audit-form')) {
        formType = 'audit_request';
        formValue = 10; // Higher value for audit requests
      } else if (form.classList.contains('contact-form')) {
        formType = 'contact_form';
        formValue = 5;
      } else if (form.closest('.newsletter')) {
        formType = 'newsletter_signup';
        formValue = 2;
      }
      
      gtag('event', 'form_submit', {
        'event_category': 'conversion',
        'event_label': formType,
        'value': formValue
      });
      console.log('Form submission tracked:', formType);
    });
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
  console.log('DOM loaded, initializing...');
  // Inject global header/footer first for consistency across pages
  renderGlobalHeaderFooter();
  bindMobileNav();
  updateYear();
  console.log('Navigation initialized');

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
      // Intro timeline simplifiée - plus sobre
      gsap.from('.site-header', { y: -8, opacity: 0, duration: 0.5, ease: 'power2.out' });
      gsap.from('.kicker', { y: 4, opacity: 0, duration: 0.5, delay: 0.1, ease: 'power2.out' });

      if (document.querySelector('.title .word')) {
        gsap.from('.title .word', {
          y: 8,
          opacity: 0,
          stagger: 0.02,
          duration: 0.7,
          ease: 'power2.out'
        });
      }

      gsap.from('.subtitle', { y: 4, opacity: 0, duration: 0.5, delay: 0.2, ease: 'power2.out' });
      gsap.from('.hero-cta .btn', { y: 3, opacity: 0, duration: 0.5, delay: 0.3, stagger: 0.05, ease: 'power2.out' });

      // Transitions douces au scroll pour les sections - plus sobre
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        gsap.from(section, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Transitions douces pour les éléments de contenu
      const contentElements = document.querySelectorAll('.service, .project, .price, .testimonial');
      contentElements.forEach((el) => {
        gsap.from(el, {
          y: 12,
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

      // Transitions pour les en-têtes de section
      const sectionHeaders = document.querySelectorAll('.section .eyebrow, .section .section-title');
      sectionHeaders.forEach((el) => {
        gsap.from(el, {
          y: 8,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Parallax glows simplifié - mouvement plus subtil
      gsap.to('.glow-1', {
        yPercent: 5,
        xPercent: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
      gsap.to('.glow-2', {
        yPercent: -5,
        xPercent: -2,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    // Effet magnétique très subtil pour les CTAs principaux
    const canHover = window.matchMedia('(hover: hover)').matches && !prefersReduced && !isMobileEnv;
    if (canHover) {
      // Effet magnétique très doux uniquement sur les CTAs hero
      const magnetBtns = document.querySelectorAll('.hero-cta .btn');
      magnetBtns.forEach((btn) => {
        let bounds;
        const updateBounds = () => { bounds = btn.getBoundingClientRect(); };
        updateBounds();
        window.addEventListener('resize', updateBounds);

        const toX = gsap.quickTo(btn, 'x', { duration: 0.3, ease: 'power2.out' });
        const toY = gsap.quickTo(btn, 'y', { duration: 0.3, ease: 'power2.out' });

        btn.addEventListener('mousemove', (e) => {
          if (!bounds) {
            return;
          }
          const cx = bounds.left + bounds.width / 2;
          const cy = bounds.top + bounds.height / 2;
          const dx = (e.clientX - cx) / 50; // très doux
          const dy = (e.clientY - cy) / 50; // très doux
          toX(dx);
          toY(dy);
        });
        btn.addEventListener('mouseleave', () => {
          toX(0);
          toY(0);
        });
      });
    }

    // Glow pulse très subtil sur le CTA principal
    const heroPrimary = document.querySelector('#hero .hero-cta .btn.btn-secondary');
    if (heroPrimary && !prefersReduced && !isMobileEnv) {
      gsap.to(heroPrimary, {
        boxShadow: '0 0 8px rgba(181,123,255,0.08), 0 0 0 1px rgba(108,246,255,0.04)',
        duration: 3.0,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });
    }

    // Premium hover tilt for cards (only on devices with hover) — softened
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    if (supportsHover) {
      // Suppression des animations de tilt pour les cartes - plus sobre
      // Les cartes gardent seulement les transitions CSS de base
    }
  }
});

// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;

  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    console.log('Theme switched to:', newTheme);
  });
}

// Initialize theme toggle when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
});
