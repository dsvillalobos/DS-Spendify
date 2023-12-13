//JavaScript

const addIncomeForm = document.getElementById("addIncomeForm");

addIncomeForm.addEventListener("submit", addIncome);

let incomes;

if (localStorage.getItem("incomes") === null) {
  incomes = [];
} else {
  incomes = JSON.parse(localStorage.getItem("incomes"));
}

class Income {
  constructor(incomeName, incomeDate, incomeAccount, incomeAmount) {
    this.incomeName = incomeName;
    this.incomeDate = incomeDate;
    this.incomeAccount = incomeAccount;
    this.incomeAmount = incomeAmount;
  }
}

function addIncome() {
  event.preventDefault();
  const incomeName = document.getElementById("incomeName").value.trim();
  const incomeDate = document.getElementById("incomeDate").value.trim();
  const incomeAccount = document.getElementById("incomeAccount").value.trim();
  const incomeAmount = document.getElementById("incomeAmount").value.trim();

  const newIncome = new Income(
    incomeName,
    incomeDate,
    incomeAccount,
    incomeAmount
  );

  incomes.push(newIncome);

  localStorage.setItem("incomes", JSON.stringify(incomes));

  addIncomeForm.reset();

  let alertElement = document.createElement("div");
  alertElement.classList.add(
    "alert",
    "alert-success",
    "alert-dismissible",
    "fade",
    "show",
    "mt-3"
  );
  alertElement.innerHTML = `
  <strong>Success!</strong> DS Spendify has added your Income.
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
  `;

  addIncomeForm.appendChild(alertElement);
  setDate();
}

function setDate() {
  document.getElementById("incomeDate").valueAsDate = new Date();
}

setDate();
