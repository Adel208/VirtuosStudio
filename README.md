# Virtuos Studio — Agence Web Futuriste

Site statique moderne (HTML/CSS/JS) avec GSAP, ScrollTrigger, Lenis et SplitType. Thème sombre premium, navbar + CTA, section projets, section tarifs, et des pages `template/` pour chaque projet.

## Démarrage rapide

- Ouvrez `index.html` dans votre navigateur.
- Les pages détaillées sont dans `template/` (ex: `template/evasionsignature.html`).

## Architecture & composants

- `index.html` — page d’accueil
- `assets/css/style.css` — styles globaux
- `assets/js/main.js` — scripts et animations
- `template/*.html` — pages projets (prévisualisées via `<iframe>`)

### Header & Footer globaux injectés
Afin d’assurer une navbar et un footer 100% uniformes, leur HTML est injecté au runtime par `assets/js/main.js` dans les conteneurs vides:

```html
<header class="site-header"></header>
<footer class="site-footer"></footer>
```

Le script détecte automatiquement si la page est dans `template/` pour ajuster les liens relatifs.

## Animations (profil sobre)

- Entrées adoucies (offsets et durées réduits, `power2.out`).
- Hover magnétique limité aux boutons du hero (faible amplitude).
- Tilt des cards fortement réduit (~1.2°).

## Personnalisation

- Variables CSS dans `:root` (`assets/css/style.css`).
- Ajoutez des cartes projet dans `index.html#projects` et créez la page associée dans `template/`.

## Qualité & CI

- GitHub Actions simple pour lint HTML avec HTMLHint (par défaut) sur chaque push/PR.
- Workflow Pages pour publier automatiquement le site statique.

## Déploiement GitHub Pages

L’action GitHub déploie sur GitHub Pages. Une fois activé dans Settings → Pages, l’URL sera:

```
https://adel208.github.io/VirtuosStudio/
```

## Contribution

1. Créez une branche: `git checkout -b feat/ma-feature`
2. Commitez: `git commit -m "feat: ajoute X"`
3. Poussez: `git push -u origin feat/ma-feature`
4. Ouvrez une Pull Request

## Contact

Navbar et footer contiennent un CTA et des coordonnées (ex: virtuosagency@gmail.com, +33 7 81 45 19 66). Remplacez par vos infos.
