const colorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

function onColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}
colorBtn.addEventListener("click", onColorBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
