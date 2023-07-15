const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const onIncrementBtnClick = () => {
  return (value.textContent = Number(value.textContent) + 1);
};
const onDecrementBtnClick = () => {
  return (value.textContent = Number(value.textContent) - 1);
};

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);
