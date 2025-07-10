// collapse menu script
const hamMenu = document.getElementById("ham-menu");
const mobileMenu = document.getElementById("mobile-menu");

hamMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-86");
});

// highlight selected size
const buttons = document.querySelectorAll(".size-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.remove("bg-amber-700", "text-white", "border-amber-600");
      b.classList.add("hover:bg-gray-100");
    });
    button.classList.add("bg-amber-700", "text-white", "border-amber-600");
    button.classList.remove("hover:bg-gray-100");
  });
});

// add to cart logic
const addBtn = document.getElementById("add");

const container = document.querySelector(".Container");

// get requested item info from local storage
const currentItem = JSON.parse(localStorage.getItem("shopItem"));
const img = currentItem.img;
const name = currentItem.name;
const price = currentItem.price;
const desc = currentItem.desc;

document.getElementById("img").setAttribute("src", img);
document.getElementById("name").textContent = name;
document.getElementById("price"), (textContent = price);
document.getElementById("desc").textContent = desc;

const cartItem = {
  img: img,
  name: name,
  price: price,
  desc: desc,
};

let cart = JSON.parse(localStorage.getItem("Cart")) || [];
addBtn.addEventListener("click", function () {
  const qty = document.getElementById("qty").value;

  for (let i = 0; i < qty; i++) {
    cart.push(cartItem);
  }
  localStorage.setItem("Cart", JSON.stringify(cart));
});
