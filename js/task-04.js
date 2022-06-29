let counterValue = 0;
const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);
const valueRef = document.querySelector("#value");

decrementButtonRef.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);
incrementButtonRef.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
