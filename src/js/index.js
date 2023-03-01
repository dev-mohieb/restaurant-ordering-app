import { foodItems } from "./data.js";

const ul = document.querySelector("#menu");
const orderList = document.querySelector("#order-list");
const orderSection = document.querySelector("#order-section");
const totalPrice = document.querySelector("#total-price");
const completeOrderBtn = document.querySelector('#complete-order')
const payBtn = document.querySelector('#submit-btn')
const modal = document.querySelector('#modal')
const modalInner = document.querySelector('#modal-inner')
const form = document.querySelector('form')
let total;

document.addEventListener("click", (e) => {
  if (e.target.dataset.pizza) {
    handleSelectedItem(e.target.dataset.pizza, "pizza");
  } else if (e.target.dataset.burger) {
    handleSelectedItem(e.target.dataset.burger, "burger");
  } else if (e.target.dataset.beer) {
    handleSelectedItem(e.target.dataset.beer, "beer");
  } else if (e.target === completeOrderBtn) {
    modal.classList.toggle('hidden')
  } else if (e.target === modal) {
    modal.classList.toggle('hidden')
  }

  renderOrder();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formInput = new FormData(form);
  const fullName = formInput.get('full-name')
  
  modalInner.innerHTML = `
                        <h2 class="text-2xl font-bold">Hold on for a moment</h2>
                        <img class="w-full" src="/images/loading.gif" alt="loading">
  `
  setTimeout( ()=>{
    modal.classList.toggle('hidden')

    orderSection.innerHTML = `
            <section class="bg-[#ECFDF5] py-7 text-center text-3xl text-[#065F46]">
              <p>
                Thanks ${fullName}! Your order is on it's way!
              </p>
            </section>
    `
  }, 3000 )
  document.querySelectorAll('button').forEach(btn => btn.disabled = true)
})


function handleSelectedItem(itemId, itemValue) {
  // Specifically selecting the '+' btn to style it based on
  // item.isSelected value because it broke when using
  // the "remove" btn in the order section.
  const SelectBtn = document.querySelector(`button[value="${itemValue}"]`);

  const item = foodItems.filter((obj) => {
    return obj.uuid === itemId;
  })[0];

  item.isSelected = !item.isSelected;

  if (item.isSelected) {
    SelectBtn.classList.toggle("bg-green-400");
    SelectBtn.classList.toggle("bg-transparent");

    // fixes NaN and undefined when subtracting from total default state, null.
    if (total) {
      total = totalPriceAdd(item);
    } else total = item.price;
  } else {
    SelectBtn.classList.toggle("bg-green-400");
    SelectBtn.classList.toggle("bg-transparent");

    total = totalPriceSub(item);
  }
}

// fixed calculating string numbers using these functions
function totalPriceAdd(item) {
  return parseInt(total) + parseInt(item.price);
}
function totalPriceSub(item) {
  return parseInt(total) - parseInt(item.price);
}

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

  if (order) {
    orderSection.classList.remove("hidden");
  } else orderSection.classList.add("hidden");

  orderList.innerHTML = order;
  totalPrice.textContent = `$${total}`;
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
                    value="${item.name}"
                    class="py-1 px-[13px] text-3xl font-nunito-sans ml-auto rounded-full border border-gray-300 text-plusSignTxDESIGN transition-colors bg-transparent cursor-default md:cursor-pointer">
                        +
                    </button>
                </li>
        `;
  });
  ul.innerHTML = htmlCode;
}

renderMenu();
