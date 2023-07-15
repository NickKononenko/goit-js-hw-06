const form = document.querySelector(".login-form");

console.dir(form);

form.addEventListener("submit", onFormSumbit);

function onFormSumbit(event) {
  event.preventDefault();
  if (form.elements.email.value === "" || form.elements.password.value === "") {
    window.alert("Щось тут не так, хммм. Перевір чи всі поля заповнені!");
  } else {
    const userData = {
      email: `${form.elements.email.value}`,
      password: `${form.elements.password.value}`,
    };
    console.log(userData);
    form.reset();
  }
}
