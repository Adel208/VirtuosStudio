// Hero épinglé (tablette et ordinateur) : l'écran reste fixe, les trois réalisations se relaient
// en fondu enchaîné. Le titre et le bouton devis restent visibles tout du long.
// Désactivé sur téléphone (hero sans captures) et si « réduire les animations » est activé.
(function () {
  var root = document.querySelector('.hp');
  if (!root) return;

  function setup() {
    var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || !gsap.matchMedia) return;
    gsap.registerPlugin(ScrollTrigger);

    var mm = gsap.matchMedia();
    mm.add('(min-width: 641px) and (prefers-reduced-motion: no-preference)', function () {
      var track = root.querySelector('.hp-track');
      var cards = Array.prototype.slice.call(root.querySelectorAll('.hp-card'));
      var caps = cards.map(function (c) { return c.querySelector('.hp-cap'); });
      var segs = Array.prototype.slice.call(root.querySelectorAll('.hp-segs i'));
      var count = root.querySelector('.hp-count');
      var hint = root.querySelector('.hp-hint');
      if (cards.length < 3) return;

      root.classList.add('hp-on');

      // Une seule capture visible à la fois : les autres attendent, cachées, légèrement en dessous
      gsap.set(cards, { transformOrigin: '50% 100%' });
      cards.forEach(function (c, i) {
        gsap.set(c, { y: i === 0 ? 0 : 50, scale: i === 0 ? 1 : .96, opacity: i === 0 ? 1 : 0, zIndex: 10 - i });
        gsap.set(caps[i], { opacity: i === 0 ? 1 : 0 });
      });

      // Chronologie (en unités de scroll) : pause / passage A→B / pause / passage B→C / pause
      var tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: onUpdate
        }
      });

      function pass(from, at) {
        var to = from + 1;
        // La capture actuelle monte et s'efface...
        tl.to(caps[from], { opacity: 0, duration: .25 }, at);
        tl.to(cards[from], { y: -60, scale: 1.02, opacity: 0, duration: .5, ease: 'power2.in' }, at);
        // ...pendant que la suivante arrive d'en dessous
        tl.to(cards[to], { y: 0, scale: 1, opacity: 1, duration: .5, ease: 'power2.out' }, at + .25);
        tl.to(caps[to], { opacity: 1, duration: .3 }, at + .4);
      }
      pass(0, .3);
      pass(1, 1.3);
      tl.to({}, { duration: .3 }, 2.0); // pause finale sur la dernière carte

      var total = tl.duration();
      var current = -1;
      function onUpdate(self) {
        var t = self.progress * total;
        var idx = t < .65 ? 0 : (t < 1.65 ? 1 : 2);
        if (idx !== current) {
          current = idx;
          if (count) count.textContent = '0' + (idx + 1) + ' / 03';
        }
        segs.forEach(function (s, i) { s.style.setProperty('--p', i <= idx ? 1 : 0); });
        if (hint) hint.classList.toggle('is-gone', self.progress > .02);
      }
      onUpdate({ progress: 0 });

      var timer = setTimeout(function () { ScrollTrigger.refresh(); }, 300);

      // Quand l'écran passe sous 641 px (rotation, redimensionnement), tout est remis à zéro
      return function () {
        clearTimeout(timer);
        root.classList.remove('hp-on');
        cards.concat(caps).forEach(function (el) { el.removeAttribute('style'); });
        segs.forEach(function (s) { s.style.removeProperty('--p'); });
      };
    });
  }

  if (document.readyState === 'complete') setup();
  else window.addEventListener('load', setup);
})();
