//JavaScript

//Custom Placeholders
const placeholderExpenseName = document.getElementById("expenseName");
placeholderExpenseName.setAttribute("placeholder", "E.g. Credit Card Payment");
const amountPlaceholder = document.getElementById("amount");
amountPlaceholder.setAttribute("placeholder", "E.g. 300");

//Expense Form and Expense List
const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

//Submit Expense Form
expenseForm.addEventListener("submit", addExpense);

let totalAmount = 0;

function addExpense() {
  location.reload();

  //Values
  const expenseName = document.getElementById("expenseName").value;
  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;

  //Expense
  const expense = {
    expenseName: expenseName,
    date: date,
    amount: amount,
  };

  //Check Expenses in the Local Storage
  let expenses;

  if (localStorage.getItem("financialExpenses") === null) {
    expenses = [];
  } else {
    expenses = JSON.parse(localStorage.getItem("financialExpenses"));
  }

  //Add Expense
  expenses.push(expense);

  //Store Expenses
  localStorage.setItem("financialExpenses", JSON.stringify(expenses));

  //Reset Expense Form
  expenseForm.reset();

  //Update Expense List
  updateExpenseList(expenses);
}

function updateExpenseList(expenses) {
  expenseList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const expenseItem = document.createElement("li");
    expenseItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    expenseItem.innerHTML = `<span class="col-4">${expense.expenseName}</span><span class="col-3">${expense.date}</span><span class="col-1">$${expense.amount}</span>`;

    const deleteButton = document.createElement("button");

    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", () => {
      expenses.splice(index, 1);
      localStorage.setItem("financialExpenses", JSON.stringify(expenses));
      updateExpenseList(expenses);
      location.reload();
    });

    expenseItem.appendChild(deleteButton);
    expenseList.appendChild(expenseItem);

    totalAmount += parseInt(expense.amount);
  });
}

//Check Expenses in Local Storage and Update the Expense List
let expenses;

if (localStorage.getItem("financialExpenses") === null) {
  expenses = [];
} else {
  expenses = JSON.parse(localStorage.getItem("financialExpenses"));
}

updateExpenseList(expenses);
localStorage.setItem("financialExpensesTOT", totalAmount);
