#!/bin/bash

# Script de compression natif macOS (sans dépendances externes)
# Virtuos Studio - Optimisation performance

echo "🗜️  Compression des images avec outils natifs macOS..."

# Créer un dossier de sauvegarde
backup_dir="images_backup_native_$(date +%Y%m%d_%H%M%S)"
echo "📁 Création du backup dans $backup_dir..."
mkdir -p "$backup_dir"

# Fonction de compression avec sips (natif macOS)
compress_with_sips() {
    local file="$1"
    local max_width="$2"
    local quality="$3"
    
    if [ -f "$file" ]; then
        # Créer backup
        cp "$file" "$backup_dir/"
        
        # Obtenir les dimensions actuelles
        width=$(sips -g pixelWidth "$file" | tail -1 | awk '{print $2}')
        height=$(sips -g pixelHeight "$file" | tail -1 | awk '{print $2}')
        old_size=$(stat -f%z "$file")
        
        echo "  📏 $file: ${width}x${height} ($(du -h "$file" | cut -f1))"
        
        # Compresser si nécessaire
        if [ "$width" -gt "$max_width" ] || [ $old_size -gt 500000 ]; then
            # Redimensionner si trop large
            if [ "$width" -gt "$max_width" ]; then
                sips -Z "$max_width" "$file" > /dev/null 2>&1
            fi
            
            # Réduire la qualité (simulation avec sips)
            if [ $old_size -gt 1000000 ]; then
                # Pour les gros fichiers, on réduit plus agressivement
                sips -s format jpeg -s formatOptions "$quality" "$file" > /dev/null 2>&1
                # Reconvertir en PNG si nécessaire
                if [[ "$file" == *.png ]]; then
                    sips -s format png "$file" > /dev/null 2>&1
                fi
            fi
            
            new_size=$(stat -f%z "$file")
            if [ $new_size -lt $old_size ]; then
                reduction=$((100 - (new_size * 100 / old_size)))
                echo "  ✅ Compressé: -${reduction}% ($(du -h "$file" | cut -f1))"
            else
                echo "  ℹ️  Optimisation limitée avec outils natifs"
            fi
        else
            echo "  ℹ️  Déjà optimisé"
        fi
    fi
}

echo ""
echo "🔥 COMPRESSION IMAGES PRIORITAIRES"
echo "================================="

# Liste des images les plus lourdes à compresser en priorité
priority_images=(
    "template/equiora/equioraAccueil-original.png"
    "template/esk/eskhero.png"
    "template/evasionvoyage/evasion-voyage-agence-site-web-reservation.png"
    "template/evasionsignature/evasionsignature1.png"
    "template/Medical/site-web-medical-cabinet-prise-rendez-vous.png"
    "template/wextrizy/wextrizy-studio-creatif-site-web-moderne.png"
    "template/mailzen/mailzen-application-saas-gestion-emails.png"
    "template/virtuoslife/virtuoslife-site-vitrine-premium-animations-gsap.png"
    "template/extrizy/extrizy-identite-digitale-site-web-energique.png"
)

echo "📸 Compression des images principales..."
for img in "${priority_images[@]}"; do
    if [ -f "$img" ]; then
        compress_with_sips "$img" 1200 80
    fi
done

echo ""
echo "🔍 COMPRESSION AUTOMATIQUE DES GROS FICHIERS"
echo "==========================================="

# Compresser automatiquement tous les fichiers > 2MB
echo "🎯 Traitement des fichiers > 2MB..."
find template/ -name "*.png" -size +2M | while read file; do
    compress_with_sips "$file" 1000 75
done

echo ""
echo "📊 ANALYSE POST-COMPRESSION"
echo "=========================="

# Calculer les statistiques
if [ -d "$backup_dir" ] && [ "$(ls -A $backup_dir)" ]; then
    old_total=$(du -sm "$backup_dir" | cut -f1)
    new_total=$(du -sm template/ | cut -f1)
    
    if [ $old_total -gt 0 ]; then
        reduction=$((100 - (new_total * 100 / old_total)))
        echo "📁 Taille avant: ${old_total}MB"
        echo "📁 Taille après: ${new_total}MB"
        echo "📈 Réduction: ${reduction}%"
    fi
    
    compressed_count=$(ls "$backup_dir" | wc -l)
    echo "🖼️  Fichiers traités: $compressed_count"
else
    echo "ℹ️  Aucune compression significative nécessaire"
fi

echo ""
echo "✅ Compression native terminée !"
echo ""
echo "🎯 POUR UNE COMPRESSION AVANCÉE"
echo "==============================="
echo "Installez ImageMagick pour de meilleurs résultats :"
echo "  brew install imagemagick"
echo "Puis exécutez : ./SCRIPT_COMPRESSION_IMAGES.sh"
echo ""
echo "🌐 ALTERNATIVES RECOMMANDÉES"
echo "============================"
echo "1. 🖼️  TinyPNG.com - Compression en ligne"
echo "2. 🔧 ImageOptim.app - Application macOS"
echo "3. 🌐 Squoosh.app - Outil web Google"
echo "4. 📱 Convertir en WebP pour les navigateurs modernes"
