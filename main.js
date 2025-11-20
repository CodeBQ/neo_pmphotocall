document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const confirmation = document.getElementById('formConfirmation');
  const currentYear = document.getElementById('currentYear');

  currentYear.textContent = new Date().getFullYear();

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    confirmation.classList.remove('d-none');
    confirmation.textContent = 'Message sent! I will be in touch soon.';
    contactForm.reset();
  });
});
