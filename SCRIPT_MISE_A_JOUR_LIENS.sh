#!/bin/bash

# Script de mise à jour des liens après renommage
# Virtuos Studio - Optimisation SEO

echo "🔄 Mise à jour des références d'images dans les fichiers HTML..."

# PRIORITÉ 1 - Mise à jour index.html (page d'accueil)

echo "🏠 Mise à jour de index.html..."

# Wextrizy
sed -i.bak 's|template/wextrizy/Capture d'\''écran 2025-09-13 à 13.20.07 PM.png|template/wextrizy/wextrizy-studio-creatif-site-web-moderne.png|g' index.html

# Extrizy
sed -i.bak 's|template/extrizy/extrizyhero.png|template/extrizy/extrizy-identite-digitale-site-web-energique.png|g' index.html

# MailZen
sed -i.bak 's|template/mailzen/hero.png|template/mailzen/mailzen-application-saas-gestion-emails.png|g' index.html

# Virtuos Life
sed -i.bak 's|template/virtuoslife/virtuoslife1.png|template/virtuoslife/virtuoslife-site-vitrine-premium-animations-gsap.png|g' index.html

# Evasion Voyage
sed -i.bak 's|template/evasionvoyage/evasion voyage.png|template/evasionvoyage/evasion-voyage-agence-site-web-reservation.png|g' index.html

echo "✅ index.html mis à jour"

# PRIORITÉ 2 - Mise à jour des pages template

echo "📄 Mise à jour des pages template..."

# MailZen.html
if [ -f "template/mailzen.html" ]; then
    sed -i.bak 's|./mailzen/hero.png|./mailzen/mailzen-application-saas-gestion-emails.png|g' template/mailzen.html
    echo "✅ mailzen.html mis à jour"
fi

# VirtuosLife.html
if [ -f "template/VirtuosLife.html" ]; then
    sed -i.bak 's|./virtuoslife/virtuoslife1.png|./virtuoslife/virtuoslife-site-vitrine-premium-animations-gsap.png|g' template/VirtuosLife.html
    echo "✅ VirtuosLife.html mis à jour"
fi

# extrizy.html
if [ -f "template/extrizy.html" ]; then
    sed -i.bak 's|./extrizy/extrizyhero.png|./extrizy/extrizy-identite-digitale-site-web-energique.png|g' template/extrizy.html
    echo "✅ extrizy.html mis à jour"
fi

# wextrizy.html
if [ -f "template/wextrizy.html" ]; then
    sed -i.bak 's|./wextrizy/Capture d'\''écran 2025-09-13 à 13.20.07 PM.png|./wextrizy/wextrizy-studio-creatif-site-web-moderne.png|g' template/wextrizy.html
    echo "✅ wextrizy.html mis à jour"
fi

# evasionvoyage.html
if [ -f "template/evasionvoyage.html" ]; then
    sed -i.bak 's|./evasionvoyage/evasion voyage.png|./evasionvoyage/evasion-voyage-agence-site-web-reservation.png|g' template/evasionvoyage.html
    echo "✅ evasionvoyage.html mis à jour"
fi

# Medical.html
if [ -f "template/Medical.html" ]; then
    sed -i.bak 's|./Medical/Capture d'\''écran 2025-09-09 à 03.01.58 AM.png|./Medical/site-web-medical-cabinet-prise-rendez-vous.png|g' template/Medical.html
    sed -i.bak 's|./Medical/Nos Services.png|./Medical/site-medical-services-teleconsultation.png|g' template/Medical.html
    sed -i.bak 's|./Medical/apropos.png|./Medical/cabinet-medical-a-propos-equipe.png|g' template/Medical.html
    sed -i.bak 's|./Medical/contact.png|./Medical/cabinet-medical-contact-rendez-vous.png|g' template/Medical.html
    sed -i.bak 's|./Medical/rendezvous.png|./Medical/prise-rendez-vous-medical-en-ligne.png|g' template/Medical.html
    echo "✅ Medical.html mis à jour"
fi

# Presse.html
if [ -f "template/Presse.html" ]; then
    sed -i.bak 's|./Presse/Capture d'\''écran 2025-09-12 à 12.51.24 PM.png|./Presse/plateforme-presse-articles-actualites.png|g' template/Presse.html
    sed -i.bak 's|./Presse/Capture d'\''écran 2025-09-12 à 12.51.36 PM.png|./Presse/plateforme-presse-navigation-menu.png|g' template/Presse.html
    sed -i.bak 's|./Presse/Capture d'\''écran 2025-09-12 à 12.51.49 PM.png|./Presse/plateforme-presse-contenu-editorial.png|g' template/Presse.html
    sed -i.bak 's|./Presse/afriquewebsite.png|./Presse/site-web-media-presse-afrique-actualites.png|g' template/Presse.html
    echo "✅ Presse.html mis à jour"
fi

# Services.html
if [ -f "template/Services.html" ]; then
    sed -i.bak 's|./Services/accueil.png|./Services/entreprise-services-site-web-accueil.png|g' template/Services.html
    sed -i.bak 's|./Services/apropos.png|./Services/entreprise-services-a-propos-presentation.png|g' template/Services.html
    sed -i.bak 's|./Services/services.png|./Services/entreprise-services-prestations-b2b.png|g' template/Services.html
    sed -i.bak 's|./Services/nostarifs.png|./Services/entreprise-services-tarifs-devis.png|g' template/Services.html
    echo "✅ Services.html mis à jour"
fi

# Mise à jour des autres pages qui référencent ces images
echo "🔍 Recherche d'autres références..."

# Rechercher dans tous les fichiers HTML
find . -name "*.html" -exec grep -l "Capture d'écran\|hero\.png\|virtuoslife1\.png\|evasion voyage\.png" {} \; | while read file; do
    echo "⚠️  Vérifier manuellement : $file"
done

echo ""
echo "✅ Mise à jour des liens terminée !"
echo "📊 Fichiers traités :"
echo "   - index.html"
echo "   - template/mailzen.html"
echo "   - template/VirtuosLife.html"
echo "   - template/extrizy.html"
echo "   - template/wextrizy.html"
echo "   - template/evasionvoyage.html"
echo "   - template/Medical.html"
echo "   - template/Presse.html"
echo "   - template/Services.html"
echo ""
echo "🔍 Vérifications recommandées :"
echo "   1. Tester l'affichage de toutes les images"
echo "   2. Vérifier les liens dans le navigateur"
echo "   3. Contrôler les performances de chargement"
echo "   4. Valider avec les outils SEO"
echo ""
echo "📝 Fichiers de sauvegarde créés avec extension .bak"
