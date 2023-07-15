const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function onInput(event) {
  if (nameInput.value !== "") {
    return (nameOutput.textContent = nameInput.value);
  }
  return (nameOutput.textContent = "Anonymous");
}

nameInput.addEventListener("input", onInput);
