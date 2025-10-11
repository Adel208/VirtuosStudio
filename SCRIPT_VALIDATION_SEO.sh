#!/bin/bash

# Script de validation après renommage SEO
# Virtuos Studio - Vérification des optimisations

echo "🔍 Validation des optimisations SEO des images..."

# Fonction pour vérifier l'existence d'un fichier
check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1"
        return 0
    else
        echo "❌ $1 - FICHIER MANQUANT"
        return 1
    fi
}

# Fonction pour vérifier les liens dans un fichier HTML
check_links() {
    local file="$1"
    local broken_links=0
    
    if [ -f "$file" ]; then
        echo "🔍 Vérification des liens dans $file..."
        
        # Extraire tous les src d'images
        grep -o 'src="[^"]*\.png"' "$file" | sed 's/src="//g' | sed 's/"//g' | while read img_path; do
            # Construire le chemin complet
            if [[ "$img_path" == ./* ]]; then
                full_path="${file%/*}/$img_path"
            elif [[ "$img_path" == template/* ]]; then
                full_path="$img_path"
            else
                full_path="$img_path"
            fi
            
            if [ -f "$full_path" ]; then
                echo "  ✅ $img_path"
            else
                echo "  ❌ $img_path - LIEN CASSÉ"
                ((broken_links++))
            fi
        done
        
        if [ $broken_links -eq 0 ]; then
            echo "✅ Tous les liens d'images sont valides dans $file"
        else
            echo "⚠️  $broken_links liens cassés trouvés dans $file"
        fi
    else
        echo "❌ $file n'existe pas"
    fi
}

echo ""
echo "📁 VÉRIFICATION DES FICHIERS RENOMMÉS"
echo "======================================"

# Vérifier les images principales
echo ""
echo "🔥 Images principales (Priorité 1):"
check_file "template/wextrizy/wextrizy-studio-creatif-site-web-moderne.png"
check_file "template/extrizy/extrizy-identite-digitale-site-web-energique.png"
check_file "template/mailzen/mailzen-application-saas-gestion-emails.png"
check_file "template/virtuoslife/virtuoslife-site-vitrine-premium-animations-gsap.png"
check_file "template/evasionvoyage/evasion-voyage-agence-site-web-reservation.png"

# Vérifier les images sectorielles
echo ""
echo "🔶 Images sectorielles (Priorité 2):"
check_file "template/Medical/site-web-medical-cabinet-prise-rendez-vous.png"
check_file "template/Medical/site-medical-services-teleconsultation.png"
check_file "template/Medical/cabinet-medical-a-propos-equipe.png"
check_file "template/Presse/plateforme-presse-articles-actualites.png"
check_file "template/Services/entreprise-services-site-web-accueil.png"

echo ""
echo "🔗 VÉRIFICATION DES LIENS DANS LES FICHIERS HTML"
echo "=============================================="

# Vérifier les liens dans les fichiers principaux
check_links "index.html"
check_links "template/mailzen.html"
check_links "template/VirtuosLife.html"
check_links "template/extrizy.html"
check_links "template/wextrizy.html"
check_links "template/Medical.html"
check_links "template/Presse.html"
check_links "template/Services.html"

echo ""
echo "📊 ANALYSE SEO DES NOMS DE FICHIERS"
echo "=================================="

# Analyser la qualité SEO des noms de fichiers
echo ""
echo "✅ Noms de fichiers SEO-friendly détectés :"
find template/ -name "*.png" | grep -E "(site-web|agence|application|plateforme|entreprise|cabinet)" | head -10

echo ""
echo "⚠️  Noms de fichiers à améliorer :"
find template/ -name "*.png" | grep -E "(Capture|hero\.png|apropos\.png|contact\.png)" | head -5

echo ""
echo "📈 STATISTIQUES SEO"
echo "=================="

total_images=$(find template/ -name "*.png" | wc -l)
seo_friendly=$(find template/ -name "*.png" | grep -E "(site-web|agence|application|plateforme|entreprise|cabinet)" | wc -l)
percentage=$((seo_friendly * 100 / total_images))

echo "📊 Images totales : $total_images"
echo "✅ Images SEO-friendly : $seo_friendly"
echo "📈 Pourcentage optimisé : $percentage%"

if [ $percentage -gt 70 ]; then
    echo "🎉 Excellent ! Plus de 70% des images sont optimisées SEO"
elif [ $percentage -gt 50 ]; then
    echo "👍 Bien ! Plus de 50% des images sont optimisées SEO"
else
    echo "⚠️  À améliorer : Moins de 50% des images sont optimisées SEO"
fi

echo ""
echo "🎯 RECOMMANDATIONS"
echo "=================="
echo "1. ✅ Tester l'affichage sur le site web"
echo "2. 🔍 Vérifier avec Google Search Console"
echo "3. 📊 Analyser avec Google PageSpeed Insights"
echo "4. 🖼️  Optimiser la compression des images si nécessaire"
echo "5. 📝 Mettre à jour le sitemap.xml"

echo ""
echo "✅ Validation terminée !"
