function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector(".change-color");

const spanValueRef = document.querySelector(".color");

btnChangeColorRef.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanValueRef.textContent = color;
});
