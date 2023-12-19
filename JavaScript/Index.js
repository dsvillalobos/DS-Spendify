//JavaScript

let username;
const usernameWelcomeText = document.getElementById("usernameWelcomeText");
const usernameWalletAccount = document.getElementById("usernameWalletAccount");
const usernameBankAccount = document.getElementById("usernameBankAccount");

let savingTarget;

const totalOverviewBalanceText = document.getElementById(
  "totalOverviewBalanceText"
);

let totalBalance = 0;
const totalOverviewBalance = document.getElementById("totalOverviewBalance");

let totalIncome = 0;
const totalOverviewIncome = document.getElementById("totalOverviewIncome");

let totalExpenses = 0;
const totalOverviewExpenses = document.getElementById("totalOverviewExpenses");

let totalBalanceWalletAccount = 0;
const balanceWalletAccount = document.getElementById("balanceWalletAccount");

let totalIncomeWalletAccount = 0;
const incomeWalletAccount = document.getElementById("incomeWalletAccount");

let totalExpensesWalletAccount = 0;
const expensesWalletAccount = document.getElementById("expensesWalletAccount");

let totalBalanceBankAccount = 0;
const balanceBankAccount = document.getElementById("balanceBankAccount");

let totalIncomeBankAccount = 0;
const incomeBankAccount = document.getElementById("incomeBankAccount");

let totalExpensesBankAccount = 0;
const expensesBankAccount = document.getElementById("expensesBankAccount");

function getProfile() {
  if (localStorage.getItem("profile") === null) {
    username = "DS Spendify";

    savingTarget = 0;
  } else {
    let profile = JSON.parse(localStorage.getItem("profile"));
    username = profile[0].username;
    usernameWelcomeText.innerHTML = username;

    savingTarget = profile[0].savingTarget;
  }

  usernameWalletAccount.innerHTML = username;
  usernameBankAccount.innerHTML = username;
}

let incomes;

function getAllIncomes() {
  if (localStorage.getItem("incomes") === null) {
    incomes = [];
  } else {
    incomes = JSON.parse(localStorage.getItem("incomes"));

    for (let i = 0; i < incomes.length; i++) {
      totalIncome += Number(incomes[i].incomeAmount);

      if (incomes[i].incomeAccount == "Wallet") {
        totalIncomeWalletAccount += Number(incomes[i].incomeAmount);
      }

      if (incomes[i].incomeAccount == "Bank Account") {
        totalIncomeBankAccount += Number(incomes[i].incomeAmount);
      }
    }
  }

  totalOverviewIncome.innerHTML = "$" + totalIncome;
  incomeWalletAccount.innerHTML = "$" + totalIncomeWalletAccount;
  incomeBankAccount.innerHTML = "$" + totalIncomeBankAccount;
}

let expenses;

function getAllExpenses() {
  if (localStorage.getItem("expenses") === null) {
    expenses = [];
  } else {
    expenses = JSON.parse(localStorage.getItem("expenses"));

    for (let i = 0; i < expenses.length; i++) {
      totalExpenses += Number(expenses[i].expenseAmount);

      if (expenses[i].expenseAccount == "Wallet") {
        totalExpensesWalletAccount += Number(expenses[i].expenseAmount);
      }

      if (expenses[i].expenseAccount == "Bank Account") {
        totalExpensesBankAccount += Number(expenses[i].expenseAmount);
      }
    }
  }

  totalOverviewExpenses.innerHTML = "$" + totalExpenses;
  expensesWalletAccount.innerHTML = "$" + totalExpensesWalletAccount;
  expensesBankAccount.innerHTML = "$" + totalExpensesBankAccount;
}

function getAllBalances() {
  totalBalance = totalIncome - totalExpenses;
  totalOverviewBalance.innerHTML = "$" + totalBalance;

  totalBalanceWalletAccount =
    totalIncomeWalletAccount - totalExpensesWalletAccount;
  balanceWalletAccount.innerHTML = "$" + totalBalanceWalletAccount;

  totalBalanceBankAccount = totalIncomeBankAccount - totalExpensesBankAccount;
  balanceBankAccount.innerHTML = "$" + totalBalanceBankAccount;

  if (
    totalBalance >= savingTarget ||
    localStorage.getItem("incomes") == "[]" ||
    localStorage.getItem("expenses") == "[]"
  ) {
    totalOverviewBalance.classList.add("text-success");
  }

  if (totalBalance < savingTarget && totalBalance > 0) {
    totalOverviewBalance.classList.add("text-warning");
    totalOverviewBalanceText.classList.add("text-warning");
    totalOverviewBalanceText.innerHTML = "Exceeding Saving Target";
  }

  if (
    totalBalance < 0 ||
    (totalBalance == 0 &&
      localStorage.getItem("incomes") != null &&
      localStorage.getItem("incomes") != "[]")
  ) {
    totalOverviewBalance.classList.add("text-danger");
    totalOverviewBalanceText.classList.add("text-danger");
    totalOverviewBalanceText.innerHTML = "Exceeding Income";
  }
}

getProfile();
getAllIncomes();
getAllExpenses();
getAllBalances();
