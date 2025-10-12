const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Autoriser uniquement POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    // Parser les données du formulaire
    const data = JSON.parse(event.body);
    const { name, email, website, company, goals } = data;

    // Validation des champs obligatoires
    if (!name || !email || !website) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Nom, email et site web sont obligatoires' })
      };
    }

    // Configuration du transporteur Nodemailer avec Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Votre email Gmail
        pass: process.env.GMAIL_APP_PASSWORD // App Password Gmail
      }
    });

    // Mapper les objectifs pour un affichage lisible
    const goalsMap = {
      'seo': 'Améliorer le référencement Google',
      'conversions': 'Augmenter les conversions',
      'performance': 'Optimiser les performances',
      'design': 'Moderniser le design',
      'mobile': 'Améliorer l\'expérience mobile',
      'other': 'Autre objectif'
    };

    const goalText = goals ? goalsMap[goals] || goals : 'Non spécifié';

    // Email pour vous (notification de nouvelle demande)
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🔍 Nouvelle demande d'audit - ${name} (${company || 'Entreprise non spécifiée'})`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #A3FF12, #7DD3FC); padding: 30px; text-align: center;">
            <h1 style="color: #000; margin: 0; font-size: 24px;">🔍 Nouvelle demande d'audit</h1>
            <p style="color: #333; margin: 10px 0 0; font-size: 16px;">Virtuos Studio</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #333; border-bottom: 2px solid #A3FF12; padding-bottom: 10px;">Informations du prospect</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <div style="display: grid; gap: 15px;">
                <div>
                  <strong style="color: #333;">👤 Contact :</strong>
                  <p style="margin: 5px 0 0; color: #555;">${name}</p>
                </div>
                
                <div>
                  <strong style="color: #333;">📧 Email :</strong>
                  <p style="margin: 5px 0 0;"><a href="mailto:${email}" style="color: #A3FF12; text-decoration: none;">${email}</a></p>
                </div>
                
                <div>
                  <strong style="color: #333;">🏢 Entreprise :</strong>
                  <p style="margin: 5px 0 0; color: #555;">${company || 'Non spécifiée'}</p>
                </div>
                
                <div>
                  <strong style="color: #333;">🌐 Site web à analyser :</strong>
                  <p style="margin: 5px 0 0;"><a href="${website}" target="_blank" style="color: #A3FF12; text-decoration: none;">${website}</a></p>
                </div>
                
                <div>
                  <strong style="color: #333;">🎯 Objectif prioritaire :</strong>
                  <p style="margin: 5px 0 0; color: #555;">${goalText}</p>
                </div>
              </div>
            </div>
            
            <div style="background: #e8f5e8; border-left: 4px solid #A3FF12; padding: 15px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px; color: #333;">📋 Actions à effectuer :</h3>
              <ul style="margin: 0; color: #555; line-height: 1.6;">
                <li>Analyser le site web fourni</li>
                <li>Effectuer un audit SEO complet</li>
                <li>Vérifier les performances et Core Web Vitals</li>
                <li>Analyser l'UX et les points de conversion</li>
                <li>Préparer le rapport personnalisé</li>
                <li>Envoyer l'audit sous 24h</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}?subject=Votre audit gratuit Virtuos Studio&body=Bonjour ${name},%0D%0A%0D%0AJe vous remercie pour votre demande d'audit gratuit.%0D%0A%0D%0AJe vais analyser votre site ${website} et vous envoyer un rapport détaillé sous 24h.%0D%0A%0D%0ACordialement,%0D%0AAdel - Virtuos Studio" 
                 style="background: #A3FF12; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                📧 Répondre au prospect
              </a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              Demande reçue le ${new Date().toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      `
    };

    // Email de confirmation pour le prospect
    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: '✅ Votre demande d\'audit gratuit a été reçue - Virtuos Studio',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #A3FF12, #7DD3FC); padding: 30px; text-align: center;">
            <h1 style="color: #000; margin: 0; font-size: 24px;">✅ Demande reçue !</h1>
            <p style="color: #333; margin: 10px 0 0; font-size: 16px;">Votre audit arrive sous 24h</p>
          </div>
          
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #333; margin: 0 0 20px;">Bonjour <strong>${name}</strong>,</p>
            
            <p style="color: #555; line-height: 1.6; margin: 0 0 20px;">
              Merci pour votre confiance ! Nous avons bien reçu votre demande d'audit gratuit pour <strong>${website}</strong>.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin: 0 0 15px;">🔍 Ce que vous allez recevoir :</h3>
              <ul style="color: #555; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li><strong>Analyse SEO complète</strong> - Positionnement, mots-clés, optimisations</li>
                <li><strong>Audit de performance</strong> - Vitesse, Core Web Vitals, optimisations techniques</li>
                <li><strong>Analyse UX/Conversion</strong> - Parcours utilisateur, points de friction, CTA</li>
                <li><strong>Recommandations personnalisées</strong> - Plan d'action concret et priorisé</li>
              </ul>
            </div>
            
            <div style="background: #e8f5e8; border-left: 4px solid #A3FF12; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #333; font-weight: 600;">⏰ Délai de livraison : 24h maximum</p>
              <p style="margin: 5px 0 0; color: #555; font-size: 14px;">Vous recevrez votre rapport détaillé par email</p>
            </div>
            
            <p style="color: #555; line-height: 1.6; margin: 20px 0;">
              En attendant, n'hésitez pas à consulter nos <a href="https://virtuos.life/#projects" style="color: #A3FF12; text-decoration: none;">projets récents</a> pour découvrir notre approche.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #333; font-weight: 600; margin: 0 0 10px;">Une question ? Contactez-nous :</p>
              <a href="mailto:virtuosagency@gmail.com" style="color: #A3FF12; text-decoration: none; font-weight: 600;">virtuosagency@gmail.com</a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="color: #666; font-size: 12px; margin: 0 0 10px;">
              <strong>Virtuos Studio</strong> - Agence web premium
            </p>
            <p style="color: #666; font-size: 12px; margin: 0;">
              Vous recevez cet email suite à votre demande d'audit sur notre site web.
            </p>
          </div>
        </div>
      `
    };

    // Envoyer les deux emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Demande d\'audit envoyée avec succès! Vous recevrez votre rapport sous 24h.',
        success: true
      })
    };

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la demande d\'audit:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Erreur lors de l\'envoi de la demande. Veuillez réessayer.',
        error: error.message,
        success: false
      })
    };
  }
};
