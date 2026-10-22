// Consentement aux cookies (CNIL) : Google Analytics ne se charge qu'après accord du visiteur.
// Bibliothèque : tarteaucitron.js, chargée juste avant ce fichier.
// Racine du site déduite de l'adresse de ce script (virtuos.life ou GitHub Pages /VirtuosStudio/).
var siteRoot = document.currentScript.src.replace(/assets\/js\/consent\.js.*$/, '');

tarteaucitron.init({
  privacyUrl: siteRoot + 'template/politique-confidentialite.html',
  hashtag: '#tarteaucitron',
  cookieName: 'tarteaucitron',
  orientation: 'bottom',
  groupServices: false,
  showDetailsOnClick: true,
  serviceDefaultState: 'wait',
  showAlertSmall: false,
  cookieslist: false,
  closePopup: false,
  showIcon: false,            // icône retirée : le lien « Gérer les cookies » du pied de page permet de changer d'avis
  iconPosition: 'BottomLeft',
  adblocker: false,
  DenyAllCta: true,           // « Tout refuser » aussi visible que « Tout accepter »
  AcceptAllCta: true,
  highPrivacy: true,          // rien n'est chargé sans action du visiteur
  alwaysNeedConsent: false,
  handleBrowserDNTRequest: false,
  removeCredit: false,
  moreInfoLink: true,
  useExternalCss: false,
  useExternalJs: false,
  mandatory: true,
  mandatoryCta: false,
  googleConsentMode: false,  // sinon gtag.js se charge (sans cookies) avant l'accord
  partnersList: false
});

tarteaucitron.user.gtagUa = 'G-CD8731D445';
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');

// Pixel Meta (publicités Facebook / Instagram) : chargé seulement après accord du visiteur.
// Sur les pages de remerciement, on enregistre en plus une demande de contact (« Lead »).
tarteaucitron.user.facebookpixelId = '1840979967320623';
tarteaucitron.user.facebookpixelMore = function () {
  var page = location.pathname;
  if (page.indexOf('/template/merci') !== -1) fbq('track', 'Lead', { content_name: 'Contact' });
  if (page.indexOf('/template/audit-merci') !== -1) fbq('track', 'Lead', { content_name: 'Audit gratuit' });
};
(tarteaucitron.job = tarteaucitron.job || []).push('facebookpixel');
