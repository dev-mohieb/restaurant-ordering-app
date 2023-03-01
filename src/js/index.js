import { foodItems } from "./data.js";

const ul = document.querySelector("#menu");
const orderList = document.querySelector("#order-list");
const orderSection = document.querySelector("#order-section");
const totalPrice = document.querySelector("#total-price");
let total = 0;


document.addEventListener("click", (e) => {
  if (e.target.dataset.pizza) {
    handlePizzaSelect(e.target.dataset.pizza);
    e.target.classList.toggle("bg-green-400");
    e.target.classList.toggle("bg-transparent");
  } else if (e.target.dataset.burger) {
    handleBurgerSelect(e.target.dataset.burger);
    e.target.classList.toggle("bg-green-400");
    e.target.classList.toggle("bg-transparent");
  } else if (e.target.dataset.beer) {
    handleBeerSelect(e.target.dataset.beer);
    e.target.classList.toggle("bg-green-400");
    e.target.classList.toggle("bg-transparent");
  }
  renderOrder();
});

function renderOrder() {
  let order = "";

  foodItems.forEach((item) => {
    if (item.isSelected) {
      order += `
                <li class="flex gap-3 items-center">
                    <h3 class="">${item.name}</h3>
                    <button 
                    data-${item.name}="${item.uuid}"
                    class="text-xs font-nunito-sans -mb-1 text-descreptionTxDESIGN cursor-default md:cursor-pointer">remove</button>
                    <p class="ml-auto text-xl">$${item.price}</p>
                </li>`;
    }
  });

  if (order != "") {
    orderSection.classList.remove("hidden");
  } else orderSection.classList.add("hidden");

  orderList.innerHTML = order;
}

function handlePizzaSelect() {
  const pizza = foodItems.filter((item) => {
    return item.name === "pizza";
  })[0];
  pizza.isSelected = !pizza.isSelected;

  if (pizza.isSelected) {
    totalPrice.textContent = (total + pizza.price);
  } else {
    totalPrice.textContent = (total - pizza.price)
  }
}
function handleBurgerSelect() {
  const burger = foodItems.filter((item) => {
    return item.name === "burger";
  })[0];
  burger.isSelected = !burger.isSelected;

  if (burger.isSelected) {
    totalPrice.textContent = (total + burger.price);
  } else {
    totalPrice.textContent = (total - burger.price)
  }
}
function handleBeerSelect() {
  const beer = foodItems.filter((item) => {
    return item.name === "beer";
  })[0];
  beer.isSelected = !beer.isSelected;

  if (beer.isSelected) {
    totalPrice.textContent += beer.price;
  } else {
    totalPrice.textContent -= beer.price
  }
}

function renderMenu() {
  let htmlCode = "";

  foodItems.forEach((item) => {
    htmlCode += `
                <li class="py-12 flex gap-8 items-center border-b border-b-gray-300">
                    <img src="${item.icon}" alt="">
                    <section class="space-y-2 font-smythe">
                        <h2 class="text-3xl">${item.name}</h2>
                        <p class="text-descreptionTxDESIGN">${item.ingredients.join(
                          ", "
                        )}</p>
                        <p class="text-xl">$${item.price}</p>
                    </section>
                    <button
                    data-${item.name}="${item.uuid}" 
                    class="py-1 px-[13px] text-3xl font-nunito-sans ml-auto rounded-full border border-gray-300 text-plusSignTxDESIGN transition-colors bg-transparent cursor-default md:cursor-pointer">
                        +
                    </button>
                </li>
        `;
  });
  ul.innerHTML = htmlCode;
}

renderMenu();
