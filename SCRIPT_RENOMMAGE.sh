#!/bin/bash

# Script de renommage des images SEO-friendly
# Virtuos Studio - Optimisation SEO

echo "🚀 Début du renommage des images SEO-friendly..."

# Créer un backup
echo "📁 Création du backup..."
cp -r template/ template_backup_$(date +%Y%m%d_%H%M%S)/

# PRIORITÉ 1 - Images principales page d'accueil

echo "🔥 PRIORITÉ 1 - Images principales..."

# Wextrizy
if [ -f "template/wextrizy/Capture d'écran 2025-09-13 à 13.20.07 PM.png" ]; then
    mv "template/wextrizy/Capture d'écran 2025-09-13 à 13.20.07 PM.png" \
       "template/wextrizy/wextrizy-studio-creatif-site-web-moderne.png"
    echo "✅ Wextrizy image principale renommée"
fi

# Extrizy
if [ -f "template/extrizy/extrizyhero.png" ]; then
    mv "template/extrizy/extrizyhero.png" \
       "template/extrizy/extrizy-identite-digitale-site-web-energique.png"
    echo "✅ Extrizy hero renommée"
fi

# MailZen
if [ -f "template/mailzen/hero.png" ]; then
    mv "template/mailzen/hero.png" \
       "template/mailzen/mailzen-application-saas-gestion-emails.png"
    echo "✅ MailZen hero renommée"
fi

# Virtuos Life
if [ -f "template/virtuoslife/virtuoslife1.png" ]; then
    mv "template/virtuoslife/virtuoslife1.png" \
       "template/virtuoslife/virtuoslife-site-vitrine-premium-animations-gsap.png"
    echo "✅ Virtuos Life image principale renommée"
fi

# Evasion Voyage
if [ -f "template/evasionvoyage/evasion voyage.png" ]; then
    mv "template/evasionvoyage/evasion voyage.png" \
       "template/evasionvoyage/evasion-voyage-agence-site-web-reservation.png"
    echo "✅ Evasion Voyage image principale renommée"
fi

# PRIORITÉ 2 - Images sectorielles

echo "🔶 PRIORITÉ 2 - Images sectorielles..."

# Secteur Médical
if [ -f "template/Medical/Capture d'écran 2025-09-09 à 03.01.58 AM.png" ]; then
    mv "template/Medical/Capture d'écran 2025-09-09 à 03.01.58 AM.png" \
       "template/Medical/site-web-medical-cabinet-prise-rendez-vous.png"
    echo "✅ Medical capture d'écran renommée"
fi

if [ -f "template/Medical/Nos Services.png" ]; then
    mv "template/Medical/Nos Services.png" \
       "template/Medical/site-medical-services-teleconsultation.png"
    echo "✅ Medical services renommée"
fi

if [ -f "template/Medical/apropos.png" ]; then
    mv "template/Medical/apropos.png" \
       "template/Medical/cabinet-medical-a-propos-equipe.png"
    echo "✅ Medical à propos renommée"
fi

if [ -f "template/Medical/contact.png" ]; then
    mv "template/Medical/contact.png" \
       "template/Medical/cabinet-medical-contact-rendez-vous.png"
    echo "✅ Medical contact renommée"
fi

if [ -f "template/Medical/rendezvous.png" ]; then
    mv "template/Medical/rendezvous.png" \
       "template/Medical/prise-rendez-vous-medical-en-ligne.png"
    echo "✅ Medical rendez-vous renommée"
fi

# Secteur Presse
if [ -f "template/Presse/Capture d'écran 2025-09-12 à 12.51.24 PM.png" ]; then
    mv "template/Presse/Capture d'écran 2025-09-12 à 12.51.24 PM.png" \
       "template/Presse/plateforme-presse-articles-actualites.png"
    echo "✅ Presse capture 1 renommée"
fi

if [ -f "template/Presse/Capture d'écran 2025-09-12 à 12.51.36 PM.png" ]; then
    mv "template/Presse/Capture d'écran 2025-09-12 à 12.51.36 PM.png" \
       "template/Presse/plateforme-presse-navigation-menu.png"
    echo "✅ Presse capture 2 renommée"
fi

if [ -f "template/Presse/Capture d'écran 2025-09-12 à 12.51.49 PM.png" ]; then
    mv "template/Presse/Capture d'écran 2025-09-12 à 12.51.49 PM.png" \
       "template/Presse/plateforme-presse-contenu-editorial.png"
    echo "✅ Presse capture 3 renommée"
fi

if [ -f "template/Presse/afriquewebsite.png" ]; then
    mv "template/Presse/afriquewebsite.png" \
       "template/Presse/site-web-media-presse-afrique-actualites.png"
    echo "✅ Presse Afrique renommée"
fi

# Secteur Services
if [ -f "template/Services/accueil.png" ]; then
    mv "template/Services/accueil.png" \
       "template/Services/entreprise-services-site-web-accueil.png"
    echo "✅ Services accueil renommée"
fi

if [ -f "template/Services/apropos.png" ]; then
    mv "template/Services/apropos.png" \
       "template/Services/entreprise-services-a-propos-presentation.png"
    echo "✅ Services à propos renommée"
fi

if [ -f "template/Services/services.png" ]; then
    mv "template/Services/services.png" \
       "template/Services/entreprise-services-prestations-b2b.png"
    echo "✅ Services prestations renommée"
fi

if [ -f "template/Services/nostarifs.png" ]; then
    mv "template/Services/nostarifs.png" \
       "template/Services/entreprise-services-tarifs-devis.png"
    echo "✅ Services tarifs renommée"
fi

echo ""
echo "✅ Renommage terminé !"
echo "📊 Statistiques :"
echo "   - Images principales : renommées"
echo "   - Images sectorielles : renommées"
echo "   - Backup créé dans : template_backup_$(date +%Y%m%d_%H%M%S)/"
echo ""
echo "⚠️  IMPORTANT : Mettre à jour les références dans les fichiers HTML !"
echo "🔄 Prochaine étape : Exécuter le script de mise à jour des liens"
