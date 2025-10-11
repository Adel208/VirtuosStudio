#!/bin/bash

# Script de compression des images pour optimisation web
# Virtuos Studio - Performance SEO

echo "🗜️  Début de la compression des images..."

# Vérifier si ImageMagick est installé
if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick n'est pas installé. Installation via Homebrew..."
    if command -v brew &> /dev/null; then
        brew install imagemagick
    else
        echo "❌ Homebrew non trouvé. Veuillez installer ImageMagick manuellement."
        echo "   brew install imagemagick"
        exit 1
    fi
fi

# Créer un dossier de sauvegarde
backup_dir="images_backup_$(date +%Y%m%d_%H%M%S)"
echo "📁 Création du backup dans $backup_dir..."
mkdir -p "$backup_dir"

# Fonction de compression intelligente
compress_image() {
    local file="$1"
    local max_width="$2"
    local quality="$3"
    
    if [ -f "$file" ]; then
        # Créer backup
        cp "$file" "$backup_dir/"
        
        # Obtenir les dimensions actuelles
        dimensions=$(identify -format "%wx%h" "$file" 2>/dev/null)
        width=$(echo $dimensions | cut -d'x' -f1)
        
        echo "  📏 $file: ${dimensions} ($(du -h "$file" | cut -f1))"
        
        # Compresser seulement si nécessaire
        if [ "$width" -gt "$max_width" ] || [ $(stat -f%z "$file") -gt 500000 ]; then
            convert "$file" \
                -resize "${max_width}x>" \
                -quality "$quality" \
                -strip \
                -interlace Plane \
                "$file.tmp"
            
            # Vérifier que la compression a réussi
            if [ -f "$file.tmp" ]; then
                old_size=$(stat -f%z "$file")
                new_size=$(stat -f%z "$file.tmp")
                reduction=$((100 - (new_size * 100 / old_size)))
                
                if [ $new_size -lt $old_size ]; then
                    mv "$file.tmp" "$file"
                    echo "  ✅ Compressé: -${reduction}% ($(du -h "$file" | cut -f1))"
                else
                    rm "$file.tmp"
                    echo "  ℹ️  Pas d'amélioration, fichier conservé"
                fi
            else
                echo "  ❌ Erreur de compression"
            fi
        else
            echo "  ℹ️  Déjà optimisé"
        fi
    fi
}

echo ""
echo "🔥 COMPRESSION PRIORITÉ 1 - Images principales (page d'accueil)"
echo "=============================================================="

# Images principales - qualité élevée pour l'affichage
echo "📸 Images de projets principaux..."
compress_image "template/mailzen/mailzen-application-saas-gestion-emails.png" 1200 85
compress_image "template/virtuoslife/virtuoslife-site-vitrine-premium-animations-gsap.png" 1200 85
compress_image "template/wextrizy/wextrizy-studio-creatif-site-web-moderne.png" 1200 85
compress_image "template/extrizy/extrizy-identite-digitale-site-web-energique.png" 1200 85
compress_image "template/evasionvoyage/evasion-voyage-agence-site-web-reservation.png" 1200 85

echo ""
echo "🔶 COMPRESSION PRIORITÉ 2 - Images sectorielles"
echo "=============================================="

# Images sectorielles - qualité moyenne
echo "🏥 Secteur médical..."
compress_image "template/Medical/site-web-medical-cabinet-prise-rendez-vous.png" 1000 80
compress_image "template/Medical/site-medical-services-teleconsultation.png" 1000 80
compress_image "template/Medical/cabinet-medical-a-propos-equipe.png" 1000 80
compress_image "template/Medical/cabinet-medical-contact-rendez-vous.png" 1000 80
compress_image "template/Medical/prise-rendez-vous-medical-en-ligne.png" 1000 80

echo "📰 Secteur presse..."
compress_image "template/Presse/plateforme-presse-articles-actualites.png" 1000 80
compress_image "template/Presse/plateforme-presse-navigation-menu.png" 1000 80
compress_image "template/Presse/plateforme-presse-contenu-editorial.png" 1000 80
compress_image "template/Presse/site-web-media-presse-afrique-actualites.png" 1000 80

echo "🏢 Secteur services..."
compress_image "template/Services/entreprise-services-site-web-accueil.png" 1000 80
compress_image "template/Services/entreprise-services-a-propos-presentation.png" 1000 80
compress_image "template/Services/entreprise-services-prestations-b2b.png" 1000 80
compress_image "template/Services/entreprise-services-tarifs-devis.png" 1000 80

echo ""
echo "🔷 COMPRESSION PRIORITÉ 3 - Images lourdes détectées"
echo "=================================================="

# Compresser les images les plus lourdes
echo "🎯 Images > 3MB..."
find template/ -name "*.png" -size +3M -exec bash -c 'compress_image "$0" 1000 75' {} \;

echo "🎯 Images > 2MB..."
find template/ -name "*.png" -size +2M -exec bash -c 'compress_image "$0" 1200 80' {} \;

echo ""
echo "📊 STATISTIQUES FINALES"
echo "======================"

# Calculer les statistiques
old_total=$(du -sm "$backup_dir" | cut -f1)
new_total=$(du -sm template/ | cut -f1)
reduction=$((100 - (new_total * 100 / old_total)))

echo "📁 Taille avant: ${old_total}MB"
echo "📁 Taille après: ${new_total}MB"
echo "📈 Réduction: ${reduction}%"

# Compter les fichiers traités
compressed_count=$(ls "$backup_dir" | wc -l)
echo "🖼️  Fichiers traités: $compressed_count"

echo ""
echo "✅ Compression terminée !"
echo "📂 Backup sauvegardé dans: $backup_dir"
echo ""
echo "🎯 RECOMMANDATIONS POST-COMPRESSION"
echo "=================================="
echo "1. 🌐 Tester l'affichage sur le site web"
echo "2. 📊 Vérifier avec Google PageSpeed Insights"
echo "3. 🔍 Analyser les Core Web Vitals"
echo "4. 📱 Tester sur mobile et desktop"
echo "5. 🖼️  Considérer WebP pour les navigateurs modernes"

# Fonction exportée pour utilisation dans find
export -f compress_image
