// collapse menu script
const hamMenu = document.getElementById("ham-menu");
const mobileMenu = document.getElementById("mobile-menu");

hamMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-86");
});

// shop carousel script
const tabEquipment = document.getElementById("tab-equipment");
const tabClothing = document.getElementById("tab-clothing");
const carouselInner = document.getElementById("carousel-inner");

function activateTab(tab) {
  // Remove active underline
  tabEquipment.querySelector("span").classList.remove("scale-x-100");
  tabClothing.querySelector("span").classList.remove("scale-x-100");

  // Add active underline
  tab.querySelector("span").classList.add("scale-x-100");
}

tabEquipment.addEventListener("click", () => {
  carouselInner.style.transform = "translateX(-50%)";
  activateTab(tabEquipment);
});

tabClothing.addEventListener("click", () => {
  carouselInner.style.transform = "translateX(0%)";
  activateTab(tabClothing);
});
