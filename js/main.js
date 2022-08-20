const slider = document.querySelector("#inputRange");
const number = document.querySelector("#num");

function priceFormat(price) {
  const price2 = Number(price);
  return new Intl.NumberFormat('en-IN', {
    style: "currency",
    currency: "USD",
  }).format(price2);
}



slider.addEventListener("change", (e) => {
  let value = slider.value + 1;
  changePrice(value);
});

function changePrice(value) {
  let num = document.querySelector("#num");
  num.textContent = priceFormat(value);
}

number.textContent = priceFormat(number.textContent);


