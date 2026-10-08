// Bandeau promo : inséré tout de suite sous l'en-tête, avant le premier affichage,
// pour éviter que la page « saute » quand il apparaît.
(function () {
  try {
    // Le bandeau n'est affiché que sur l'accueil et la page Tarifs (ailleurs : un petit bloc dédié).
    var path = location.pathname.replace(/\/+$/, '');
    if (!/(^|\/)(index\.html|tarifs(\.html)?)?$/.test(path) || /\/(articles|template)\//.test(path)) return;
    var KEY = 'promo_banner_dismissed_v3';
    if (localStorage.getItem(KEY) === '1') return;
    var header = document.querySelector('.site-header');
    if (!header || document.querySelector('.promo-banner')) return;
    var root = document.currentScript.src.replace(/assets\/js\/promo\.js.*$/, '');
    var banner = document.createElement('div');
    banner.className = 'promo-banner';
    banner.innerHTML =
      '<div class="container promo-inner">' +
        '<div class="promo-text"> <b>-7% pour les nouveaux cr&eacute;ateurs d&rsquo;entreprise</b> sur votre premier projet. Code <b>NEW7</b> &middot; Offre non cumulable</div>' +
        '<div class="promo-cta">' +
          '<a class="btn btn-outline" href="' + root + 'contact.html?promo=NEW7">Profiter de l&rsquo;offre</a>' +
          '<button class="promo-close" aria-label="Masquer la promotion">\u2715</button>' +
        '</div>' +
      '</div>';
    header.insertAdjacentElement('afterend', banner);
    banner.querySelector('.promo-close').addEventListener('click', function () {
      banner.remove();
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
    });
  } catch (e) { /* stockage indisponible : pas de bandeau */ }
})();
