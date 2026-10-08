// Projets en vedette : un projet à la fois, liste numérotée, changement automatique (pausé au survol).
(function () {
  var root = document.querySelector('[data-pshow]');
  if (!root) return;
  var items = Array.prototype.slice.call(root.querySelectorAll('.pshow-item'));
  var slides = Array.prototype.slice.call(root.querySelectorAll('.pshow-slide'));
  var url = root.querySelector('.pshow-url');
  var current = 0;

  function select(index) {
    if (index === current) return;
    current = index;
    items.forEach(function (item, k) {
      var on = k === index;
      item.classList.toggle('is-active', on);
      item.querySelector('.pshow-head').setAttribute('aria-expanded', String(on));
    });
    slides.forEach(function (slide, k) {
      var on = k === index;
      slide.classList.toggle('is-active', on);
      slide.setAttribute('aria-hidden', String(!on));
      slide.tabIndex = on ? 0 : -1;
    });
    if (url) url.textContent = items[index].getAttribute('data-url') || 'virtuos.life';
  }

  items.forEach(function (item, k) {
    var head = item.querySelector('.pshow-head');
    head.addEventListener('click', function () { select(k); });
    head.addEventListener('keydown', function (e) {
      var next = e.key === 'ArrowDown' ? k + 1 : e.key === 'ArrowUp' ? k - 1 : null;
      if (next === null) return;
      e.preventDefault();
      var target = items[(next + items.length) % items.length].querySelector('.pshow-head');
      target.focus();
      select((next + items.length) % items.length);
    });
  });

  // La barre de progression de l'élément actif décide du passage au suivant.
  root.addEventListener('animationend', function (e) {
    if (e.animationName === 'pshow-progress') select((current + 1) % items.length);
  });

  // Pause quand la section n'est pas à l'écran.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      root.classList.toggle('is-offscreen', !entries[0].isIntersecting);
    }, { threshold: 0.25 }).observe(root);
  }
})();
