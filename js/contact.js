const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#address");
const adressError = document.querySelector("#addressError");
const feedback = document.querySelector("#feedback");
const feedbackError = document.querySelector("#feedbackError");

function validateForm() {
  event.preventDefault();

  if (name.ariaValueMax.length > 0) {
    firstNameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  console.log(hello);
}

form.addEventListener("submit", validateForm);

form.onsubmit = function () {
  event.preventDefault();

  console.log(event);

  const name = document.querySelector("#name");
  console.log(name.value);
  console.log(email.value);
  console.log(address.value);
  console.log(feedback.value);
};
