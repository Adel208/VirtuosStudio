// Gestion des formulaires avec Netlify Functions + Nodemailer
document.addEventListener('DOMContentLoaded', () => {
  
  // Gestion du formulaire de contact
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Désactiver le bouton pendant l'envoi
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';

      // Récupérer les données du formulaire
      const formData = {
        name: contactForm.querySelector('[name="name"]').value,
        email: contactForm.querySelector('[name="email"]').value,
        phone: contactForm.querySelector('[name="phone"]').value,
        budget: contactForm.querySelector('[name="budget"]').value,
        message: contactForm.querySelector('[name="message"]').value
      };

      try {
        // Envoyer à la fonction Netlify
        const response = await fetch('/.netlify/functions/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
          // Rediriger vers la page de remerciement
          window.location.href = '/template/merci.html';
        } else {
          throw new Error(result.message || 'Erreur lors de l\'envoi');
        }

      } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.');
        
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // Gestion du formulaire d'audit
  const auditForm = document.querySelector('.audit-form');
  if (auditForm) {
    auditForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = auditForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Désactiver le bouton pendant l'envoi
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.style.background = '#ccc';

      // Récupérer les données du formulaire
      const formData = {
        name: auditForm.querySelector('[name="name"]').value,
        email: auditForm.querySelector('[name="email"]').value,
        website: auditForm.querySelector('[name="website"]').value,
        company: auditForm.querySelector('[name="company"]').value,
        goals: auditForm.querySelector('[name="goals"]').value
      };

      try {
        // Envoyer à la fonction Netlify
        const response = await fetch('/.netlify/functions/sendAudit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok && result.success) {
          // Rediriger vers la page de remerciement audit
          window.location.href = '/template/audit-merci.html';
        } else {
          throw new Error(result.message || 'Erreur lors de l\'envoi');
        }

      } catch (error) {
        console.error('Erreur:', error);
        showAuditError(auditForm, 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
        
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
      }
    });
  }

  // Fonction pour afficher le succès de l'audit
  function showAuditSuccess(form, message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
      background: linear-gradient(135deg, #A3FF12, #7DD3FC);
      color: #000;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      margin-top: 20px;
      font-weight: 600;
    `;
    successDiv.innerHTML = `
      <div style="font-size: 24px; margin-bottom: 8px;">✅</div>
      <div style="font-size: 16px; margin-bottom: 8px;">Demande envoyée avec succès !</div>
      <div style="font-size: 14px; opacity: 0.8;">${message}</div>
    `;
    
    // Remplacer le formulaire par le message de succès
    form.style.display = 'none';
    form.parentNode.appendChild(successDiv);

    // Optionnel : redirection après 3 secondes
    setTimeout(() => {
      window.location.href = '#contact';
    }, 3000);
  }

  // Fonction pour afficher les erreurs de l'audit
  function showAuditError(form, message) {
    // Supprimer les anciens messages d'erreur
    const existingError = form.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
      background: #ffebee;
      color: #c62828;
      padding: 12px 16px;
      border-radius: 6px;
      margin-top: 16px;
      border-left: 4px solid #c62828;
      font-size: 14px;
    `;
    errorDiv.textContent = message;
    
    form.appendChild(errorDiv);

    // Supprimer le message après 5 secondes
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
});
