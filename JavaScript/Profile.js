//JavaScript

const username = document.getElementById("username");
const income = document.getElementById("income");
const savingTarget = document.getElementById("savingTarget");
const alert = document.getElementById("alert");
const alertSpan = document.getElementById("alertSpan");

function saveUsername() {
  username.value = username.value.trim();
  localStorage.setItem("username", " " + username.value);
  event.preventDefault();
  username.value = "";
  alertSpan.innerHTML = "Username";
  alert.style.display = "block";
}

function saveIncome() {
  localStorage.setItem("income", income.value);
  event.preventDefault();
  income.value = "";
  alertSpan.innerHTML = "Income";
  alert.style.display = "block";
}

function saveSavingTarget() {
  localStorage.setItem("savingTarget", savingTarget.value);
  event.preventDefault();
  savingTarget.value = "";
  alertSpan.innerHTML = "Saving Target";
  alert.style.display = "block";
}

function deleteAllExpenses() {
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
