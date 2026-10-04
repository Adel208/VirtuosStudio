// Consentement aux cookies (CNIL) : Google Analytics ne se charge qu'après accord du visiteur.
// Bibliothèque : tarteaucitron.js, chargée juste avant ce fichier.
tarteaucitron.init({
  privacyUrl: '/template/politique-confidentialite.html',
  hashtag: '#tarteaucitron',
  cookieName: 'tarteaucitron',
  orientation: 'bottom',
  groupServices: false,
  showDetailsOnClick: true,
  serviceDefaultState: 'wait',
  showAlertSmall: false,
  cookieslist: false,
  closePopup: false,
  showIcon: true,             // petite icône pour changer d'avis à tout moment
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
