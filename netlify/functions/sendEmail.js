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
    const { name, email, phone, budget, message } = data;

    // Configuration du transporteur Nodemailer avec Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Votre email Gmail
        pass: process.env.GMAIL_APP_PASSWORD // App Password Gmail
      }
    });

    // Contenu de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Vous recevez l'email sur votre propre adresse
      replyTo: email, // Pour répondre directement au client
      subject: `Nouveau message de ${name} - Virtuos Studio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis le site Virtuos Studio</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
            <p><strong>Budget estimé :</strong> ${budget}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message :</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact du site Virtuos Studio.
          </p>
        </div>
      `
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email envoyé avec succès!' })
    };

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Erreur lors de l\'envoi de l\'email',
        error: error.message 
      })
    };
  }
};
