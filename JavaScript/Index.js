//JavaScript

let expenses = 0;
let balance = 0;

const usernameSpan = document.getElementById("usernameSpan");
const incomeSpan = document.getElementById("incomeSpan");
const expensesSpan = document.getElementById("expensesSpan");
const balanceSpan = document.getElementById("balanceSpan");
const balanceSpanMsg = document.getElementById("balanceSpanMsg");

let username = localStorage.getItem("username");
let income = parseInt(localStorage.getItem("income"));
let savingTarget = parseInt(localStorage.getItem("savingTarget"));

let basicExpensesTOT = parseInt(localStorage.getItem("basicExpensesTOT"));
let shoppingTOT = parseInt(localStorage.getItem("shoppingTOT"));
let healthTOT = parseInt(localStorage.getItem("healthTOT"));
let financialExpensesTOT = parseInt(
  localStorage.getItem("financialExpensesTOT")
);
let travelTOT = parseInt(localStorage.getItem("travelTOT"));
let foodTOT = parseInt(localStorage.getItem("foodTOT"));
let entertainmentTOT = parseInt(localStorage.getItem("entertainmentTOT"));
let educationTOT = parseInt(localStorage.getItem("educationTOT"));
let transportationTOT = parseInt(localStorage.getItem("transportationTOT"));
let petExpensesTOT = parseInt(localStorage.getItem("petExpensesTOT"));

function init() {
  if (username === null) {
    username = "";
  }

  if (isNaN(income)) {
    income = 1000;
  }

  if (isNaN(savingTarget)) {
    savingTarget = 0;
  }

  if (isNaN(basicExpensesTOT)) {
    basicExpensesTOT = 0;
  }

  if (isNaN(shoppingTOT)) {
    shoppingTOT = 0;
  }

  if (isNaN(healthTOT)) {
    healthTOT = 0;
  }

  if (isNaN(financialExpensesTOT)) {
    financialExpensesTOT = 0;
  }

  if (isNaN(travelTOT)) {
    travelTOT = 0;
  }

  if (isNaN(foodTOT)) {
    foodTOT = 0;
  }

  if (isNaN(entertainmentTOT)) {
    entertainmentTOT = 0;
  }

  if (isNaN(educationTOT)) {
    educationTOT = 0;
  }

  if (isNaN(transportationTOT)) {
    transportationTOT = 0;
  }

  if (isNaN(petExpensesTOT)) {
    petExpensesTOT = 0;
  }

  expenses =
    basicExpensesTOT +
    shoppingTOT +
    healthTOT +
    financialExpensesTOT +
    travelTOT +
    foodTOT +
    entertainmentTOT +
    educationTOT +
    transportationTOT +
    petExpensesTOT;

  balance = income - expenses;

  if (balance >= savingTarget) {
    balanceSpan.classList.add("text-success");
  }

  if (balance < savingTarget && balance > 0) {
    balanceSpan.classList.add("text-danger");
    balanceSpanMsg.innerHTML = "Exceeding Saving Target";
  }

  if (balance <= 0) {
    balanceSpan.classList.add("text-danger");
    balanceSpanMsg.innerHTML = "Exceeding Income";
  }

  usernameSpan.innerHTML = username;
  incomeSpan.innerHTML = "$" + income;
  expensesSpan.innerHTML = "$" + expenses;
  balanceSpan.innerHTML = "$" + balance;
}

init();
