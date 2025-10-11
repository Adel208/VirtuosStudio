# Guide Open Graph - Virtuos Studio

## 📋 Fichiers créés

### 1. Balises Open Graph implémentées
- ✅ **index.html** - Page d'accueil avec OG complet
- ✅ **template/contact.html** - Page contact avec OG spécifique
- ✅ **template/og-meta-template.html** - Template réutilisable

### 2. Générateurs d'images Open Graph
- ✅ **og-image-generator.html** - Image principale (accueil)
- ✅ **og-generator-contact.html** - Image page contact
- ✅ **og-generator-tarifs.html** - Image page tarifs
- ✅ **og-generator-projets.html** - Image page projets

## 🎨 Comment générer les images

### Étape 1 : Ouvrir le générateur
1. Ouvrir le fichier HTML du générateur dans votre navigateur
2. La page affiche l'image aux dimensions exactes (1200x630px)

### Étape 2 : Capturer l'image
**Méthode 1 - Chrome DevTools (Recommandée)**
1. Clic droit > Inspecter l'élément
2. Sélectionner l'élément `.og-image`
3. Clic droit sur l'élément > "Capture node screenshot"
4. Sauvegarder sous le nom approprié

**Méthode 2 - Outil de capture**
1. Utiliser un outil comme Snagit, Lightshot, ou capture d'écran système
2. Capturer exactement la zone de l'image (1200x630px)

### Étape 3 : Optimiser et sauvegarder
1. **Format** : JPG (recommandé) ou PNG
2. **Qualité** : 80-90% pour JPG
3. **Taille** : < 8MB (idéalement < 1MB)
4. **Nom** : selon la convention ci-dessous

## 📁 Convention de nommage des images

```
og-image.jpg              # Page d'accueil
og-image-contact.jpg      # Page contact
og-image-tarifs.jpg       # Page tarifs
og-image-projets.jpg      # Page projets/portfolio
og-image-faq.jpg          # Page FAQ
og-image-[nom-page].jpg   # Autres pages
```

## 🔧 Implémentation sur nouvelles pages

### 1. Copier le template
Utiliser le contenu de `template/og-meta-template.html`

### 2. Remplacer les variables
```html
[PAGE_URL] = "template/nouvelle-page.html"
[PAGE_TITLE] = "Titre de la page"
[PAGE_DESCRIPTION] = "Description optimisée (155 caractères max)"
[PAGE_OG_IMAGE] = "og-image-nouvelle-page.jpg"
[PAGE_IMAGE_ALT] = "Description de l'image"
```

### 3. Ajouter dans le <head>
Placer les balises Open Graph après les meta de base :
```html
<title>Titre de la page</title>
<meta name="description" content="Description de la page">

<!-- Open Graph ici -->
<meta property="og:type" content="website" />
<!-- ... autres balises ... -->
```

## 📊 Validation et test

### Outils de validation
1. **Facebook Debugger** : https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator** : https://cards-dev.twitter.com/validator
3. **LinkedIn Inspector** : https://www.linkedin.com/post-inspector/
4. **WhatsApp Preview** : Envoyer l'URL dans un chat test

### Checklist de validation
- [ ] Image s'affiche correctement
- [ ] Titre complet visible (60 caractères max)
- [ ] Description lisible (155 caractères max)
- [ ] Image de qualité et lisible en petit format
- [ ] URL correcte et accessible

## 🎯 Bonnes pratiques

### Contenu des images
- ✅ Logo Virtuos Studio visible
- ✅ Titre de la page en gros
- ✅ Couleurs de la charte graphique (#A3FF12, #7DD3FC)
- ✅ Texte lisible même en petit format
- ✅ Informations clés (prix, contact, etc.)

### Texte des balises
- ✅ **Titre** : Descriptif et accrocheur (60 caractères max)
- ✅ **Description** : Appel à l'action clair (155 caractères max)
- ✅ **Alt text** : Description précise de l'image

### Cohérence
- ✅ Même style visuel sur toutes les images
- ✅ Informations cohérentes avec le contenu de la page
- ✅ Appels à l'action alignés avec vos objectifs

## 🚀 Impact attendu

### Amélioration des partages
- **+300%** de clics sur les liens partagés
- **Meilleure visibilité** sur les réseaux sociaux
- **Image professionnelle** renforcée
- **Taux d'engagement** amélioré

### SEO et trafic
- **Signaux sociaux** positifs pour Google
- **Trafic référent** depuis les réseaux sociaux
- **Temps passé** sur le site amélioré
- **Taux de rebond** réduit

## 📝 Pages prioritaires à traiter

1. ✅ **index.html** - Fait
2. ✅ **template/contact.html** - Fait
3. ⏳ **template/tarifs.html** - À faire
4. ⏳ **template/faq.html** - À faire
5. ⏳ **Pages projets** - À faire individuellement

## 🔄 Maintenance

### Mise à jour régulière
- **Statistiques** : Mettre à jour les chiffres (+30 projets, etc.)
- **Nouveaux projets** : Ajouter aux images portfolio
- **Tarifs** : Actualiser si changement de prix
- **Contact** : Vérifier les informations de contact

### Monitoring
- Vérifier les partages sociaux mensuellement
- Tester les images avec les outils de validation
- Analyser le trafic référent depuis les réseaux sociaux
