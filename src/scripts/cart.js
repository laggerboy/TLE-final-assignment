// collapse menu script
const hamMenu = document.getElementById("ham-menu");
const mobileMenu = document.getElementById("mobile-menu");

hamMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-86");
});

// display filler text on empty cart
const cart = document.querySelector("#cart-container");
const fillerText = document.querySelector("#cart-empty");

// create cards for items
const activeCart = JSON.parse(localStorage.getItem("Cart")) || [];

const cartContainer = document.getElementById("cart-container");

function renderCartItems() {
  cartContainer.innerHTML = ""; // Clear existing
  activeCart.forEach((item, index) => {
    const card = document.createElement("div");
    card.className =
      "bg-white shadow-md rounded-2xl p-4 flex flex-col items-center space-y-3";

    card.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.title}" class=" h-full object-cover rounded-md">
      <h2 class="text-lg font-semibold">${item.title}</h2>
      <p class="text-blue-600 font-bold">${item.price}</p>
      <button class="remove-btn font-bold bg-amber-800 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">Remove</button>
    `;

    // Remove button logic
    card.querySelector(".remove-btn").addEventListener("click", () => {
      activeCart.splice(index, 1); // Remove from array
      localStorage.setItem("Cart", JSON.stringify(activeCart)); // Update localStorage
      renderCartItems(); // Re-render
      findSubtotal(); // Re-calc price
      renderSub(); // Re-render subtotal
    });

    cartContainer.appendChild(card);
    checkEmpty();
  });
}

function checkEmpty() {
  document.addEventListener("click", function () {
    if (cartContainer.innerHTML === "") fillerText.classList.remove("hidden");
    else fillerText.classList.add("hidden");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  findSubtotal();

  renderSub();

  checkEmpty();

  renderCartItems();

  if (cartContainer.innerHTML === "") fillerText.classList.remove("hidden");
});

let priceArray = [];

function findPrices() {
  let prices = [];
  for (let i = 0; i < activeCart.length; i++) {
    prices.push(activeCart[i].price);
  }
  let trimmedPrices = prices.map((price) => price.replace("$", ""));
  priceArray = trimmedPrices;
}

let subTotal = 0;

function findSubtotal() {
  findPrices();
  let temp = 0;
  for (let i = 0; i < priceArray.length; i++) {
    temp += parseFloat(priceArray[i]);
    temp = Math.ceil(temp * 100) / 100;

    // console.log(`${subTotal}` + "   " + `${priceArray[i]}`);
  }

  subTotal = temp;
}

function renderSub() {
  document.querySelector(".Subtotal").textContent = `Subtotal: $${subTotal}`;
}
