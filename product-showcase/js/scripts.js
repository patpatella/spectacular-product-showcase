const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
let index = 0;

document.getElementById("next").onclick = () => changeSlide(1);
document.getElementById("prev").onclick = () => changeSlide(-1);

function changeSlide(step) {
  index = (index + step + totalSlides) % totalSlides;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Auto-slide every 5s
setInterval(() => changeSlide(1), 5000);


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email || !subject || !message) {
    msg.style.color = "red";
    msg.textContent = "⚠ Please fill in all required fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    msg.style.color = "red";
    msg.textContent = "⚠ Please enter a valid email address.";
    return;
  }

  // Success (here you’d normally send form data via fetch/ajax)
  msg.style.color = "green";
  msg.textContent = "✅ Thank you! Your message has been sent.";
  
  // Reset form
  document.getElementById("contactForm").reset();
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  });
  
  // Lightbox behavior (small, accessible)
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lbClose = document.getElementById('lbClose');

  gallery.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const src = card.dataset.src || card.querySelector('img').src;
    const title = card.dataset.title || card.querySelector('img').alt || '';
    openLightbox(src, title);
  });

  function openLightbox(src, title){
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent behind scrolling
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

 // Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // remove active class
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    products.forEach(product => {
      product.style.display =
        category === "all" || product.getAttribute("data-category") === category
          ? "block"
          : "none";
    });
  });
});
