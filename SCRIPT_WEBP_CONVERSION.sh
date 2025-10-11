#!/bin/bash

# Script de conversion WebP pour optimisation maximale
# Virtuos Studio - Performance Web

echo "🚀 Conversion des images en format WebP..."

# Vérifier si cwebp est installé
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  WebP tools non installé. Installation via Homebrew..."
    if command -v brew &> /dev/null; then
        brew install webp
    else
        echo "❌ Homebrew non trouvé. Veuillez installer WebP tools manuellement."
        echo "   brew install webp"
        exit 1
    fi
fi

# Créer les dossiers nécessaires
webp_dir="template_webp"
mkdir -p "$webp_dir"

# Fonction de conversion WebP
convert_to_webp() {
    local png_file="$1"
    local quality="$2"
    local webp_file="${png_file%.*}.webp"
    local webp_copy="$webp_dir/${png_file#template/}"
    
    if [ -f "$png_file" ]; then
        # Créer le dossier de destination
        mkdir -p "$(dirname "$webp_copy")"
        
        # Convertir en WebP
        cwebp -q "$quality" "$png_file" -o "$webp_copy" > /dev/null 2>&1
        
        if [ -f "$webp_copy" ]; then
            png_size=$(stat -f%z "$png_file")
            webp_size=$(stat -f%z "$webp_copy")
            reduction=$((100 - (webp_size * 100 / png_size)))
            
            echo "  ✅ $(basename "$png_file"): -${reduction}% ($(du -h "$webp_copy" | cut -f1))"
            
            # Créer aussi une version dans le dossier original pour comparaison
            cp "$webp_copy" "${png_file%.*}.webp"
        else
            echo "  ❌ Erreur conversion: $(basename "$png_file")"
        fi
    fi
}

echo ""
echo "🔥 CONVERSION PRIORITÉ 1 - Images principales"
echo "============================================="

# Images de la page d'accueil - qualité élevée
echo "📸 Images de projets (qualité 85)..."
convert_to_webp "template/mailzen/mailzen-application-saas-gestion-emails.png" 85
convert_to_webp "template/virtuoslife/virtuoslife-site-vitrine-premium-animations-gsap.png" 85
convert_to_webp "template/wextrizy/wextrizy-studio-creatif-site-web-moderne.png" 85
convert_to_webp "template/extrizy/extrizy-identite-digitale-site-web-energique.png" 85
convert_to_webp "template/evasionvoyage/evasion-voyage-agence-site-web-reservation.png" 85

echo ""
echo "🔶 CONVERSION PRIORITÉ 2 - Images sectorielles"
echo "=============================================="

# Images sectorielles - qualité moyenne
echo "🏥 Secteur médical (qualité 80)..."
convert_to_webp "template/Medical/site-web-medical-cabinet-prise-rendez-vous.png" 80
convert_to_webp "template/Medical/site-medical-services-teleconsultation.png" 80
convert_to_webp "template/Medical/cabinet-medical-a-propos-equipe.png" 80

echo "📰 Secteur presse (qualité 80)..."
convert_to_webp "template/Presse/plateforme-presse-articles-actualites.png" 80
convert_to_webp "template/Presse/plateforme-presse-navigation-menu.png" 80
convert_to_webp "template/Presse/plateforme-presse-contenu-editorial.png" 80

echo "🏢 Secteur services (qualité 80)..."
convert_to_webp "template/Services/entreprise-services-site-web-accueil.png" 80
convert_to_webp "template/Services/entreprise-services-a-propos-presentation.png" 80
convert_to_webp "template/Services/entreprise-services-prestations-b2b.png" 80

echo ""
echo "🔷 CONVERSION BATCH - Toutes les autres images"
echo "=============================================="

# Convertir toutes les autres images PNG
echo "🎯 Conversion automatique (qualité 75)..."
find template/ -name "*.png" -not -path "*/webp/*" | while read file; do
    if [ ! -f "${file%.*}.webp" ]; then
        convert_to_webp "$file" 75
    fi
done

echo ""
echo "📊 STATISTIQUES WEBP"
echo "==================="

# Calculer les statistiques
png_total=$(find template/ -name "*.png" -not -path "*/webp/*" -exec du -c {} + | tail -1 | cut -f1)
webp_total=$(find template/ -name "*.webp" -exec du -c {} + | tail -1 | cut -f1)

if [ $png_total -gt 0 ] && [ $webp_total -gt 0 ]; then
    reduction=$((100 - (webp_total * 100 / png_total)))
    echo "📁 PNG total: $((png_total / 1024))MB"
    echo "📁 WebP total: $((webp_total / 1024))MB"
    echo "📈 Réduction WebP: ${reduction}%"
fi

webp_count=$(find template/ -name "*.webp" | wc -l)
echo "🖼️  Fichiers WebP créés: $webp_count"

echo ""
echo "✅ Conversion WebP terminée !"
echo ""
echo "🌐 IMPLÉMENTATION DANS LE HTML"
echo "============================="
echo "Utilisez la balise <picture> pour la compatibilité :"
echo ""
echo '<picture>'
echo '  <source srcset="image.webp" type="image/webp">'
echo '  <img src="image.png" alt="Description" loading="lazy">'
echo '</picture>'
echo ""
echo "🎯 PROCHAINES ÉTAPES"
echo "==================="
echo "1. 🧪 Tester la compatibilité WebP"
echo "2. 🔄 Mettre à jour le HTML avec <picture>"
echo "3. 📊 Mesurer l'amélioration des performances"
echo "4. 🌐 Déployer et tester en production"
