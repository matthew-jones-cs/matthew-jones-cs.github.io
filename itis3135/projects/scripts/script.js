// Lightbox functionality
const lightboxImages = document.querySelectorAll('.lightbox');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

if (lightboxImages && lightboxModal){
  lightboxImages.forEach( (img) => {
      img.addEventListener('click', () => {
      lightboxModal.style.display = 'block';
      lightboxImage.src = img.src.substring(0, img.src.length - 5) + "_HD.JPEG";
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightboxModal.style.display = 'none';
    lightboxImage.src = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.style.display = 'none';
      lightboxImage.src = '';
    }
  });
}


// Contact form validation
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm){
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.style.color = 'green';
      contactForm.reset();
    }
  });
}