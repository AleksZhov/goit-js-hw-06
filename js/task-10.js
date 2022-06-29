function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector(" input ");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const divBoxesRef = document.querySelector("#boxes");

btnDestroyRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}

btnCreateRef.addEventListener("click", createBoxes);
function createBoxes() {
  const numberArr = [];
  for (let i = 1; i <= inputRef.value; i += 1) {
    numberArr.push(i);
  }

  const divArr = numberArr.map((number, index) => {
    const backgroundColor = getRandomHexColor();
    const width = 30 + 10 * index;
    return `<div style ="width:${width}px;height:${width}px;background-color:${backgroundColor};" ></div>`;
  });

  divBoxesRef.insertAdjacentHTML("beforeend", divArr.join(""));
}
