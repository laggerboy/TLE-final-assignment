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
  const desc = item.querySelector(".Desc");

  return {
    imgSrc: img?.src || "",
    title: h2?.textContent.trim() || "",
    price: price?.textContent.trim() || "",
    discount: 0,
    desc: desc?.textContent.trim() || "",
  };
});

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     const index = buttons.indexOf(button);

//     // Get existing cart or initialize as empty array
//     let cart = JSON.parse(localStorage.getItem("Cart")) || [];

//     // Push the selected item
//     cart.push(simplifiedItems[index]);

//     // Save back to localStorage
//     localStorage.setItem("Cart", JSON.stringify(cart));
//   });
// });

// testing view item button instead of add to cart button
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const index = buttons.indexOf(button);
    const preview = document.createElement("div");
    preview.innerHTML = `
    <div
      class="fixed inset-0 z-50 bg-gray-800/50 h-full flex items-center justify-center overflow-y-scroll responsive-padding"
    >
      <button
        class="w-10 h-10 text-3xl text-center rounded-full bg-red-700 text-white hover:bg-red-600 fixed top-20 right-10"
        id="close-view"
      >
        &times;
      </button>
      <div class="bg-white p-6 rounded mt-30 md:mt-100 mb-10">
        <div>
          <img
            src="${simplifiedItems[index].imgSrc}"
            alt="item image"
            class = "max-h-200 object-cover"
          />

          <h2 class="text-xl font-semibold text-center text-black my-4">
           ${simplifiedItems[index].title}
          </h2>
          <p class="Desc text-black text-lg text-center">
            ${simplifiedItems[index].desc}
          </p>
        </div>

        <div>
          <p class="text-black font-bold mt-4 text-center">${simplifiedItems[index].price}</p>
          <button
            class="flex items-center justify-center gap-1 m-auto my-2 border-1 border-blue-950 bg-blue-950 text-white w-40 h-10 rounded-3xl hover:bg-white hover:text-blue-950 duration-100"
            id="add"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
    `;
    document.body.appendChild(preview);

    document.querySelector("#add").addEventListener("click", function () {
      const index = buttons.indexOf(button);

      // Get existing cart or initialize as empty array
      let cart = JSON.parse(localStorage.getItem("Cart")) || [];

      // Push the selected item
      cart.push(simplifiedItems[index]);

      // Save back to localStorage
      localStorage.setItem("Cart", JSON.stringify(cart));
    });

    document
      .querySelector("#close-view")
      .addEventListener("click", function () {
        preview.remove();
      });
  });
});
