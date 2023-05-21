//JavaScript

const username = document.getElementById("username");
const income = document.getElementById("income");
const savingTarget = document.getElementById("savingTarget");
const profileForm = document.getElementById("profileForm");
const deleteDataButton = document.getElementById("deleteData-button");

profileForm.addEventListener("submit", saveProfile);
deleteDataButton.addEventListener("click", deleteData);

function saveProfile() {
  username.value = username.value.trim();
  localStorage.setItem("username", " " + username.value);
  localStorage.setItem("income", income.value);
  localStorage.setItem("savingTarget", savingTarget.value);
}

function deleteData() {
  localStorage.clear();
  location.reload();
}
