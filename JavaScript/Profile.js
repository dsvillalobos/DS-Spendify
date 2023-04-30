//JavaScript

const username = document.getElementById("username");
const income = document.getElementById("income");
const savingTarget = document.getElementById("savingTarget");
const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("click", saveProfile);

function saveProfile() {
  localStorage.setItem("username", " " + username.value);
  localStorage.setItem("income", income.value);
  localStorage.setItem("savingTarget", savingTarget.value);
}
