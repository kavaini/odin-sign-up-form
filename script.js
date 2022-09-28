const createForm = document.getElementById("create-form");
const wrongPassword = document.getElementById("wrongPassword");
const passElement = document.querySelector("#createForm #password");
const passConfirmElement = document.querySelector(
  "#createForm #confirmPassword"
);

function showError() {
  wrongPassword.style.display = "block";
  passElement.classList.add("error");
  passConfirmElement.classList.add("error");
}

function removeError() {
  wrongPassword.style.display = "none";
  passElement.classList.remove("error");
  passConfirmElement.classList.remove("error");
}

function checkPassword(e) {
  e.preventDefault();

  const firstPass = createForm.elements.password.value;
  const confirmPass = createForm.elements.confirmPassword.value;

  if (firstPass === confirmPass) {
    removeError();
  } else {
    showError();
  }
}

createForm.addEventListener("submit", checkPassword);
