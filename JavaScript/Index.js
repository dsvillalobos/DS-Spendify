//JavaScript

let username;
const usernameWelcomeText = document.getElementById("usernameWelcomeText");
const usernameWalletAccount = document.getElementById("usernameWalletAccount");
const usernameBankAccount = document.getElementById("usernameBankAccount");

let income = 0;
const totalOverviewIncome = document.getElementById("totalOverviewIncome");

function getProfile() {
  if (localStorage.getItem("profile") === null) {
    username = "DS Spendify";
  } else {
    let profile = JSON.parse(localStorage.getItem("profile"));
    username = profile[0].username;
    usernameWelcomeText.innerHTML = username;
  }

  usernameWalletAccount.innerHTML = username;
  usernameBankAccount.innerHTML = username;
}

let incomes;

function getIncome() {
  if (localStorage.getItem("incomes") === null) {
    incomes = [];
  } else {
    incomes = JSON.parse(localStorage.getItem("incomes"));

    for (let i = 0; i < incomes.length; i++) {
      income += Number(incomes[i].incomeAmount);
    }
  }

  totalOverviewIncome.innerHTML = "$" + income;
}

getProfile();
getIncome();
