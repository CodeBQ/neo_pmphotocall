document.addEventListener('DOMContentLoaded', () => {
  const sessionSelect = document.getElementById('sessionType');
  const sessionSummary = document.getElementById('sessionSummary');
  const sessionPrice = document.getElementById('sessionPrice');
  const bookingForm = document.getElementById('bookingForm');
  const formConfirmation = document.getElementById('formConfirmation');
  const packageButtons = document.querySelectorAll('[data-package]');

  const sessionDetails = {
    Starter: {
      summary: 'Starter · 45-minute session',
      price: '$150 package · great for quick updates',
    },
    Signature: {
      summary: 'Signature · 2-hour session',
      price: '$320 package · includes styling',
    },
    Events: {
      summary: 'Events · half-day coverage',
      price: '$540 package · on-site editing available',
    },
  };

  function updateSession(selection) {
    const details = sessionDetails[selection];
    if (details) {
      sessionSummary.textContent = details.summary;
      sessionPrice.textContent = details.price;
      sessionSelect.value = selection;
    }
  }

  sessionSelect.addEventListener('change', (event) => {
    updateSession(event.target.value);
  });

  packageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      updateSession(button.dataset.package);
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });

  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formConfirmation.classList.remove('d-none');
    formConfirmation.textContent = 'Message received! We will reply shortly.';
    bookingForm.reset();
    updateSession('Signature');
  });

  updateSession(sessionSelect.value);
});
