// collapse menu script
const hamMenu = document.getElementById("ham-menu");
const mobileMenu = document.getElementById("mobile-menu");

hamMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-86");
});

// carousel script

const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let current = 0;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle("opacity-100", i === index);
    img.classList.toggle("opacity-0", i !== index);
  });
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showSlide(current);
});
