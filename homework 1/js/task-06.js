const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", onBlur);

function onBlur() {
  const inputLength = validationInput.value.length;
  const dataLength = Number(validationInput.dataset.length);
  if (inputLength === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
