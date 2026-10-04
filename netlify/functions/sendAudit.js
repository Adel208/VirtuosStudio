const { createTransport, sender, recipient, escapeHtml, isEmail, clip, json, errorCode } = require('../lib/mailer');

// Demande d'audit : notification envoyée à Virtuos Studio uniquement.
// Pas de mail de confirmation au visiteur : la fonction est publique, un robot
// pourrait sinon faire envoyer des mails depuis virtuos.life vers n'importe quelle adresse.
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { message: 'Method Not Allowed' });
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { message: 'Requête invalide', success: false });
  }

  if (data['bot-field']) {
    return json(200, { message: "Demande d'audit envoyée avec succès!", success: true });
  }

  const name = clip(data.name, 120);
  const email = clip(data.email, 200);
  const website = clip(data.website, 300);
  const company = clip(data.company, 120);
  const goals = clip(data.goals, 60);

  if (!name || !isEmail(email) || !website) {
    return json(400, { message: 'Nom, email et site web sont obligatoires', success: false });
  }

  const goalsMap = {
    seo: 'Améliorer le référencement Google',
    conversions: 'Augmenter les conversions',
    performance: 'Optimiser les performances',
    design: 'Moderniser le design',
    mobile: "Améliorer l'expérience mobile",
    other: 'Autre objectif'
  };
  const goalText = goals ? goalsMap[goals] || goals : 'Non spécifié';
  const oneLine = (s) => s.replace(/[\r\n]+/g, ' ');

  try {
    await createTransport().sendMail({
      from: sender(),
      to: recipient(),
      replyTo: email,
      subject: `Nouvelle demande d'audit - ${oneLine(name)} (${oneLine(company) || 'Entreprise non spécifiée'})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouvelle demande d'audit</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Contact :</strong> ${escapeHtml(name)}</p>
            <p><strong>Email :</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Entreprise :</strong> ${escapeHtml(company) || 'Non spécifiée'}</p>
            <p><strong>Site web à analyser :</strong> ${escapeHtml(website)}</p>
            <p><strong>Objectif prioritaire :</strong> ${escapeHtml(goalText)}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Demande reçue le ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}.
            Répondez directement à ce message pour écrire au prospect.
          </p>
        </div>
      `
    });

    return json(200, { message: "Demande d'audit envoyée avec succès! Vous recevrez votre rapport sous 24h.", success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de la demande d'audit:", error);
    return json(500, { message: "Erreur lors de l'envoi de la demande. Veuillez réessayer.", success: false, code: errorCode(error) });
  }
};
