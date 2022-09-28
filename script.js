const createForm = document.createElementById("createForm");
const wrongPassword = document.createElementById("wrongPassword");
const passElement = document.querySelector("#createForm", "#password");
const passConfirmElement = document.querySelector(
  "#createForm",
  "#confirmPassword"
);

function showError() {
  wrongPassword.style.display = "block";
  passElement.classList.add("error");
  passConfirmElement.classList.add("error");
}

function noError() {
  wrongPassword.style.display = "none";
  passElement.classList.add("error");
  passConfirmElement.classList.add("error");
}

function checkPassword(e) {
  e.preventDefault();

  const firstPass = createForm.elements.password.value;
  const confirmPass = createForm.elements.confirmPassword.value;

  if (firstPass === confirmPass) {
    showError();
  } else {
    noError();
  }
}

createForm.addEventListener("submit", checkPassword);
