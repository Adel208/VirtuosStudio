// Hero épinglé : l'écran reste fixe, les trois réalisations défilent comme une pile de cartes.
// Le titre et le bouton devis restent visibles tout du long. Désactivé si « réduire les animations ».
(function () {
  var root = document.querySelector('.hp');
  if (!root) return;

  function init() {
    var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    root.classList.add('hp-on');

    var track = root.querySelector('.hp-track');
    var cards = Array.prototype.slice.call(root.querySelectorAll('.hp-card'));
    var caps = cards.map(function (c) { return c.querySelector('.hp-cap'); });
    var segs = Array.prototype.slice.call(root.querySelectorAll('.hp-segs i'));
    var count = root.querySelector('.hp-count');
    var hint = root.querySelector('.hp-hint');
    if (cards.length < 3) return;

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

    setTimeout(function () { ScrollTrigger.refresh(); }, 300);
  }

  if (document.readyState === 'complete') init();
  else window.addEventListener('load', init);
})();
