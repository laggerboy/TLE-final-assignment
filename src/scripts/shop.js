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

// add to cart logic

const items = Array.from(document.querySelectorAll(".Item"));
const buttons = Array.from(document.querySelectorAll(".Item button"));

const simplifiedItems = items.map((item) => {
  const img = item.querySelector("img");
  const h2 = item.querySelector("h2");
  const price = item.querySelector("p.font-bold");

  return {
    imgSrc: img?.src || "",
    title: h2?.textContent.trim() || "",
    price: price?.textContent.trim() || "",
  };
});

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     let index = buttons.indexOf(button);
//     if (localStorage.getItem("Cart")) cart.push(localStorage.getItem("Cart"));
//     cart.push(simplifiedItems[index]);
//     // localStorage.removeItem("Cart");
//     localStorage.setItem("Cart", JSON.stringify(cart));
//   });
// });

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const index = buttons.indexOf(button);

    // Get existing cart or initialize as empty array
    let cart = JSON.parse(localStorage.getItem("Cart")) || [];

    // Push the selected item
    cart.push(simplifiedItems[index]);

    // Save back to localStorage
    localStorage.setItem("Cart", JSON.stringify(cart));
  });
});
