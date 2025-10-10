# Configuration Email avec Nodemailer + Netlify Functions

## Étapes de configuration

### 1. Générer un App Password Gmail

1. Allez sur votre compte Gmail
2. Cliquez sur votre profil → **Gérer votre compte Google**
3. Allez dans **Sécurité**
4. Activez la **Validation en deux étapes** (si pas déjà fait)
5. Cherchez **Mots de passe des applications**
6. Sélectionnez :
   - Application : **Autre (nom personnalisé)**
   - Nom : "Netlify Nodemailer"
7. Copiez le mot de passe généré (16 caractères)

### 2. Configurer les variables d'environnement sur Netlify

1. Allez sur **netlify.com** → votre site
2. **Site configuration** → **Environment variables**
3. Ajoutez ces 2 variables :

```
GMAIL_USER = votre-email@gmail.com
GMAIL_APP_PASSWORD = le-mot-de-passe-généré-ci-dessus
```

4. Cliquez sur **Save**

### 3. Installer les dépendances et déployer

1. Installez les dépendances localement :
```bash
npm install
```

2. Poussez sur Git :
```bash
git add .
git commit -m "Configuration Nodemailer + Netlify Functions"
git push
```

### 4. Test

Après le déploiement :
1. Allez sur votre site
2. Remplissez le formulaire de contact
3. Vous devriez recevoir l'email sur votre Gmail !

## En cas de problème

- Vérifiez les logs Netlify Functions dans le dashboard
- Assurez-vous que les variables d'environnement sont bien définies
- Vérifiez que l'App Password Gmail est correct
- Testez d'abord en local avec `netlify dev` (nécessite Netlify CLI)

## Variables d'environnement requises

- `GMAIL_USER` : Votre adresse Gmail
- `GMAIL_APP_PASSWORD` : Le mot de passe d'application généré
