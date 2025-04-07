// Lightbox functionality
const lightboxImages = document.querySelectorAll('.lightbox');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');



let previous = 0;
const grid = document.getElementById("gallery_grid");
const x = document.getElementById("lightbox-close");
const next = document.getElementById("lightbox-next");


const class_ = ["family_1", "family_2", "bride_1", "flower_1", "kids_1", "bride_2"];
function visability()
{
  const t = String(event.target.id);

  if (class_.includes(t))
  {
    
    lightboxImage.style.display = "block";
    lightboxModal.style.display = "block";
    lightboxImage.src = event.target.src.substring(0, event.target.src.length - 5) + "_HD.JPEG";
    
    previous = class_.indexOf(t) % 6;
  }
  else if (t === "lightbox-close")
  {
    lightboxImage.style.display = "none";
    lightboxModal.style.display = "none";
  }
  else if (t === "lightbox-next")
  {
    lightboxImage.src = "images/" + class_[(previous + 1) % 6] + "_HD.JPEG";
    previous = (previous + 1) % 6;
  }
  else
  {
    return;
  }
}
grid.addEventListener("click", visability);
x.addEventListener("click", visability);
next.addEventListener("click", visability);



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