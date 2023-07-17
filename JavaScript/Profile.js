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
  //Basic Expenses
  localStorage.removeItem("basicExpenses");
  localStorage.removeItem("basicExpensesTOT");
  //Shopping
  localStorage.removeItem("shopping");
  localStorage.removeItem("shoppingTOT");
  //Health
  localStorage.removeItem("health");
  localStorage.removeItem("healthTOT");
  //Financial Expenses
  localStorage.removeItem("financialExpenses");
  localStorage.removeItem("financialExpensesTOT");
  //Travel
  localStorage.removeItem("travel");
  localStorage.removeItem("travelTOT");
  //Food
  localStorage.removeItem("food");
  localStorage.removeItem("foodTOT");
  //Entertainment
  localStorage.removeItem("entertainment");
  localStorage.removeItem("entertainmentTOT");
  //Education
  localStorage.removeItem("education");
  localStorage.removeItem("educationTOT");
  //Transportation
  localStorage.removeItem("transportation");
  localStorage.removeItem("transportationTOT");
  //Pet Expenses
  localStorage.removeItem("petExpenses");
  localStorage.removeItem("petExpensesTOT");
  //Balance
  localStorage.removeItem("balance");

  location.reload();
}
