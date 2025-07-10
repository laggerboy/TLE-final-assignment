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

// get all shop items

const items = Array.from(document.querySelectorAll(".Item")).map((card) => {
  const name = card.querySelector("h2")?.textContent.trim() || "";
  const priceText =
    card.querySelector("p.text-white.font-bold")?.textContent.trim() || "$0";
  const price = parseFloat(priceText.replace("$", ""));
  const img = card.querySelector("img")?.src || "";
  const description = card.querySelector("p.Desc")?.textContent.trim() || "";

  return {
    name,
    price,
    img,
    description,
  };
});

const previewBtns = Array.from(document.querySelectorAll(".Preview"));

previewBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    localStorage.setItem("index", index);
    localStorage.setItem("shopItem", JSON.stringify(items[index]));
  });
});
