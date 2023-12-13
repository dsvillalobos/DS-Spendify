//JavaScript

const addExpenseForm = document.getElementById("addExpenseForm");

addExpenseForm.addEventListener("submit", addExpense);

let expenses;

if (localStorage.getItem("expenses") === null) {
  expenses = [];
} else {
  expenses = JSON.parse(localStorage.getItem("expenses"));
}

class Expense {
  constructor(
    expenseName,
    expenseDate,
    expenseCategory,
    expenseAccount,
    expenseAmount
  ) {
    this.expenseName = expenseName;
    this.expenseDate = expenseDate;
    this.expenseCategory = expenseCategory;
    this.expenseAccount = expenseAccount;
    this.expenseAmount = expenseAmount;
  }
}

function addExpense() {
  event.preventDefault();
  const expenseName = document.getElementById("expenseName").value.trim();
  const expenseDate = document.getElementById("expenseDate").value.trim();
  const expenseCategory = document
    .getElementById("expenseCategory")
    .value.trim();
  const expenseAccount = document.getElementById("expenseAccount").value.trim();
  const expenseAmount = document.getElementById("expenseAmount").value.trim();

  const newExpense = new Expense(
    expenseName,
    expenseDate,
    expenseCategory,
    expenseAccount,
    expenseAmount
  );

  expenses.push(newExpense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  addExpenseForm.reset();

  let alertElement = document.createElement("div");
  alertElement.classList.add(
    "alert",
    "alert-primary",
    "alert-dismissible",
    "fade",
    "show",
    "mt-3"
  );
  alertElement.innerHTML = `
  <strong>Success!</strong> DS Spendify has added your Expense.
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
  `;

  addExpenseForm.appendChild(alertElement);
  setDate();
}

function setDate() {
  document.getElementById("expenseDate").valueAsDate = new Date();
}

setDate();
