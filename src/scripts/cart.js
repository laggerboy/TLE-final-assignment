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
      "bg-white shadow-md rounded-2xl p-4 grid grid-cols-1 min-[456px]:grid-cols-4 justify-evenly items-center space-y-3 w-full mx-auto";

    card.innerHTML = `
    <div class="grid grid-cols-1 min-[456px]:grid-cols-3 items-center gap-6 col-span-3">
      <img src="${item.img}" alt="${item.name}" class=" h-30 w-24 object-cover rounded-md justify-self-center">
      <h2 class="text-lg font-semibold text-center">${item.name}</h2>
      <p class="text-blue-600 font-bold justify-self-center">${item.price}</p>
    </div>
      <button class="remove-btn font-bold bg-amber-800 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition justify-self-center">Remove</button>
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
  for (let i = 0; i < activeCart.length; i++) {
    priceArray.push(activeCart[i].price);
  }
}

let subTotal = 0;

function findSubtotal() {
  findPrices();
  let temp = 0;
  for (let i = 0; i < priceArray.length; i++) {
    temp += parseFloat(priceArray[i]);
    temp = Math.ceil(temp * 100) / 100;
  }

  subTotal = temp;
}

function renderSub() {
  document.querySelector(".Subtotal").textContent = `Subtotal: $${subTotal}`;
}
