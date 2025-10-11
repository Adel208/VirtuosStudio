# 📁 Plan de Renommage des Images - SEO Friendly

## 🎯 Objectif
Renommer tous les fichiers images avec des noms SEO-friendly contenant des mots-clés pertinents pour améliorer le référencement sur Google Images.

## ❌ Problèmes identifiés

### **Noms de fichiers non-SEO :**
- `Capture d'écran 2025-09-13 à 13.20.07 PM.png`
- `Nos Services.png`
- `evasion voyage.png`
- `hero.png`
- Espaces dans les noms de fichiers
- Caractères spéciaux (accents, apostrophes)
- Noms génériques sans mots-clés

## ✅ Convention de nommage SEO

### **Format recommandé :**
```
[projet]-[page/section]-[mots-cles]-[type].extension
```

### **Règles :**
- ✅ **Minuscules uniquement**
- ✅ **Tirets (-) au lieu d'espaces**
- ✅ **Pas d'accents ni caractères spéciaux**
- ✅ **Mots-clés SEO pertinents**
- ✅ **Nom descriptif du contenu**
- ✅ **Maximum 60 caractères**

## 📋 Plan de renommage par projet

### **🔥 PRIORITÉ 1 - Images principales (page d'accueil)**

#### **Wextrizy**
```
❌ Capture d'écran 2025-09-13 à 13.20.07 PM.png
✅ wextrizy-studio-creatif-site-web-moderne.png
```

#### **Extrizy**
```
❌ extrizyhero.png
✅ extrizy-identite-digitale-site-web-energique.png
```

#### **MailZen**
```
❌ hero.png
✅ mailzen-application-saas-gestion-emails.png
```

#### **Virtuos Life**
```
❌ virtuoslife1.png
✅ virtuoslife-site-vitrine-premium-animations-gsap.png
```

#### **Evasion Voyage**
```
❌ evasion voyage.png
✅ evasion-voyage-agence-site-web-reservation.png
```

### **🔶 PRIORITÉ 2 - Images sectorielles**

#### **Secteur Médical**
```
❌ Capture d'écran 2025-09-09 à 03.01.58 AM.png
✅ site-web-medical-cabinet-prise-rendez-vous.png

❌ Nos Services.png
✅ site-medical-services-teleconsultation.png

❌ apropos.png
✅ cabinet-medical-a-propos-equipe.png

❌ contact.png
✅ cabinet-medical-contact-rendez-vous.png

❌ rendezvous.png
✅ prise-rendez-vous-medical-en-ligne.png
```

#### **Secteur Presse**
```
❌ Capture d'écran 2025-09-12 à 12.51.24 PM.png
✅ plateforme-presse-articles-actualites.png

❌ afriquewebsite.png
✅ site-web-media-presse-afrique-actualites.png
```

#### **Secteur Services**
```
❌ accueil.png
✅ entreprise-services-site-web-accueil.png

❌ apropos.png
✅ entreprise-services-a-propos-presentation.png

❌ services.png
✅ entreprise-services-prestations-b2b.png

❌ nostarifs.png
✅ entreprise-services-tarifs-devis.png
```

### **🔷 PRIORITÉ 3 - Projets spécifiques**

#### **BTP Construction**
```
❌ btpconstruction.png
✅ btp-construction-site-web-entreprise-batiment.png

❌ realisations.png
✅ btp-construction-realisations-chantiers.png

❌ services.png
✅ btp-construction-services-gros-oeuvre.png
```

#### **Extrizy (détail)**
```
❌ categories.png
✅ extrizy-categories-produits-interface.png

❌ technologie.png
✅ extrizy-technologies-stack-technique.png

❌ extrizytousextraits.png
✅ extrizy-extraits-fonctionnalites-site.png
```

#### **ESK (Sport)**
```
❌ eskhero.png
✅ esk-club-sport-site-web-hero.png

❌ eskabonnement.png
✅ esk-club-sport-abonnements-tarifs.png

❌ eskjoueur.png
✅ esk-club-sport-profils-joueurs.png

❌ eskplanning.png
✅ esk-club-sport-planning-entrainements.png
```

## 🛠️ Méthode de renommage

### **Étape 1 : Backup**
```bash
# Créer une sauvegarde avant renommage
cp -r template/ template_backup/
```

### **Étape 2 : Renommage par lot**
```bash
# Exemple pour Wextrizy
mv "template/wextrizy/Capture d'écran 2025-09-13 à 13.20.07 PM.png" \
   "template/wextrizy/wextrizy-studio-creatif-site-web-moderne.png"
```

### **Étape 3 : Mise à jour des références**
- Mettre à jour tous les fichiers HTML qui référencent ces images
- Vérifier les liens dans index.html
- Tester tous les affichages

## 📊 Impact SEO attendu

### **Bénéfices :**
- **+40% de pertinence** sur Google Images
- **Meilleur référencement** pour les mots-clés sectoriels
- **URLs plus propres** et professionnelles
- **Amélioration du crawl** par les moteurs de recherche

### **Mots-clés ciblés :**
- `site web médical`
- `agence voyage site internet`
- `studio créatif site web`
- `entreprise services site vitrine`
- `application saas interface`
- `btp construction site web`

## 🎯 Ordre d'exécution recommandé

1. **Images page d'accueil** (impact immédiat)
2. **Projets principaux** (MailZen, Wextrizy, Extrizy)
3. **Images sectorielles** (Médical, Presse, Services)
4. **Projets secondaires** (BTP, ESK, etc.)

## ⚠️ Points d'attention

- **Vérifier les liens** après chaque renommage
- **Tester l'affichage** sur toutes les pages
- **Mettre à jour le sitemap.xml** si nécessaire
- **Conserver les dimensions** et qualité des images

## 📝 Checklist de validation

- [ ] Tous les fichiers renommés selon la convention
- [ ] Aucun lien cassé dans les pages HTML
- [ ] Images s'affichent correctement
- [ ] Alt text mis à jour si nécessaire
- [ ] Sitemap.xml actualisé
- [ ] Test de performance maintenu

**Prêt à commencer le renommage ? Commençons par les images prioritaires !** 🚀
