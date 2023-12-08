const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.querySelector("[type=number]");
const createRef = controlsRef.querySelector("button[data-create]");
const destroyRef = controlsRef.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  boxesRef.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const divElem = document.createElement("div");
    divElem.style.width = `${30 + i * 10}px`;
    divElem.style.height = `${30 + i * 10}px`;
    divElem.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(divElem);
  }
}

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
};

createRef.addEventListener("click", () => {
  createBoxes(inputRef.value);
});
destroyRef.addEventListener("click", destroyBoxes);
