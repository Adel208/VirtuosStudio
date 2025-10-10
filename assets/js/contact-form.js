// Gestion du formulaire de contact avec Netlify Functions + Nodemailer
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Désactiver le bouton pendant l'envoi
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';

    // Récupérer les données du formulaire
    const formData = {
      name: form.querySelector('[name="name"]').value,
      email: form.querySelector('[name="email"]').value,
      phone: form.querySelector('[name="phone"]').value,
      budget: form.querySelector('[name="budget"]').value,
      message: form.querySelector('[name="message"]').value
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
});
