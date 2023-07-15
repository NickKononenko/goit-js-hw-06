const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

console.dir(input);

input.addEventListener("input", onInput);

function onInput() {
  text.style.fontSize = `${input.value}px`;
}
