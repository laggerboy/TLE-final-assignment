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
  carouselInner.style.transform = "translateX(0%)";
  activateTab(tabEquipment);
});

tabClothing.addEventListener("click", () => {
  carouselInner.style.transform = "translateX(-50%)";
  activateTab(tabClothing);
});
