// Envoi des e-mails des formulaires via la boîte contact@virtuos.life (SMTP Hostinger).
// Variables d'environnement à définir dans Netlify (Site configuration → Environment variables) :
//   SMTP_USER  = contact@virtuos.life
//   SMTP_PASS  = mot de passe de la boîte (jamais dans le code)
//   SMTP_HOST  = optionnel, smtp.hostinger.com par défaut
//   CONTACT_TO = optionnel, adresse qui reçoit les demandes (SMTP_USER par défaut)
const nodemailer = require('nodemailer');

function createTransport() {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP_USER ou SMTP_PASS manquant dans les variables Netlify');
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

const sender = () => `"Virtuos Studio" <${process.env.SMTP_USER}>`;
const recipient = () => process.env.CONTACT_TO || process.env.SMTP_USER;

// Neutralise le HTML saisi par les visiteurs avant de l'insérer dans un e-mail.
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const isEmail = (value) => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(String(value || ''));

// Coupe les champs trop longs (un formulaire de contact n'a pas besoin de plus).
const clip = (value, max) => String(value ?? '').trim().slice(0, max);

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
});

// Catégorie d'erreur sans détail sensible, renvoyée au navigateur pour le diagnostic.
function errorCode(error) {
  const msg = String(error && error.message || '');
  if (/SMTP_USER ou SMTP_PASS manquant/.test(msg)) return 'config';
  if (error && (error.code === 'EAUTH' || /535|Invalid login|authentication/i.test(msg))) return 'auth';
  if (error && /ECONNECTION|ETIMEDOUT|ESOCKET|ECONNREFUSED|ENOTFOUND/.test(error.code || msg)) return 'connexion';
  return 'autre';
}

module.exports = { createTransport, sender, recipient, escapeHtml, isEmail, clip, json, errorCode };
