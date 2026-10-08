// Le bandeau promo a été retiré du site. L'offre « nouveaux créateurs » (NEW7)
// est présentée dans un petit bloc en bas de la page Tarifs et une note sur la page Contact.
// Ce fichier reste référencé par les pages ; il supprime seulement un ancien bandeau éventuel.
(function () {
  var old = document.querySelector('.promo-banner');
  if (old) old.remove();
})();
