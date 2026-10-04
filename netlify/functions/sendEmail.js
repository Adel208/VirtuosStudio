const { createTransport, sender, recipient, escapeHtml, isEmail, clip, json, errorCode } = require('../lib/mailer');

exports.handler = async (event) => {
  // Autoriser uniquement POST
  if (event.httpMethod !== 'POST') {
    return json(405, { message: 'Method Not Allowed' });
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { message: 'Requête invalide' });
  }

  // Champ piège invisible : rempli uniquement par les robots
  if (data['bot-field']) {
    return json(200, { message: 'Email envoyé avec succès!' });
  }

  const name = clip(data.name, 120);
  const email = clip(data.email, 200);
  const phone = clip(data.phone, 40);
  const budget = clip(data.budget, 60);
  const message = clip(data.message, 5000);

  if (!name || !isEmail(email) || !message) {
    return json(400, { message: 'Nom, e-mail valide et message sont obligatoires' });
  }

  try {
    await createTransport().sendMail({
      from: sender(),
      to: recipient(),
      replyTo: email, // Pour répondre directement au client
      subject: `Nouveau message de ${name.replace(/[\r\n]+/g, ' ')} - Virtuos Studio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis le site Virtuos Studio</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
            <p><strong>Email :</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Téléphone :</strong> ${escapeHtml(phone) || 'Non fourni'}</p>
            <p><strong>Budget estimé :</strong> ${escapeHtml(budget) || 'Non précisé'}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message :</h3>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact du site Virtuos Studio.
          </p>
        </div>
      `
    });

    return json(200, { message: 'Email envoyé avec succès!' });
  } catch (error) {
    // Le détail reste dans les logs Netlify, il n'est pas renvoyé au visiteur
    console.error("Erreur lors de l'envoi de l'email:", error);
    return json(500, { message: "Erreur lors de l'envoi de l'email", code: errorCode(error) });
  }
};
