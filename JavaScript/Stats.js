//JavaScript

let walletTotalIncome = 0;
let bankAccountTotalIncome = 0;

let incomes;

let homeTotalExpenses = 0;
let groceriesTotalExpenses = 0;
let transportationTotalExpenses = 0;
let healthAndFitnessTotalExpenses = 0;
let shoppingTotalExpenses = 0;
let eatingOutTotalExpenses = 0;
let entertainmentTotalExpenses = 0;
let travelTotalExpenses = 0;
let educationTotalExpenses = 0;
let otherTotalExpenses = 0;

let expenses;

function getAccountsTotal() {
  if (
    localStorage.getItem("incomes") === null ||
    localStorage.getItem("incomes") == "[]"
  ) {
    incomes = [];

    const noDataMessage = document.createElement("h6");
    noDataMessage.innerHTML = "Graph Unavailable: No Incomes.";
    noDataMessage.classList.add("text-center", "mb-5", "small");
    document.getElementById("incomesChartContainer").appendChild(noDataMessage);
  } else {
    incomes = JSON.parse(localStorage.getItem("incomes"));

    for (let i = 0; i < incomes.length; i++) {
      if (incomes[i].incomeAccount == "Wallet") {
        walletTotalIncome += Number(incomes[i].incomeAmount);
      }

      if (incomes[i].incomeAccount == "Bank Account") {
        bankAccountTotalIncome += Number(incomes[i].incomeAmount);
      }
    }

    generateIncomesChart();
  }
}

function getCategoriesTotal() {
  if (
    localStorage.getItem("expenses") === null ||
    localStorage.getItem("expenses") == "[]"
  ) {
    expenses = [];

    const noDataMessage = document.createElement("h6");
    noDataMessage.innerHTML = "Graph Unavailable: No Expenses.";
    noDataMessage.classList.add("text-center", "mb-5", "small");
    document
      .getElementById("expensesChartContainer")
      .appendChild(noDataMessage);
  } else {
    expenses = JSON.parse(localStorage.getItem("expenses"));

    for (let i = 0; i < expenses.length; i++) {
      switch (expenses[i].expenseCategory) {
        case "Home":
          homeTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Groceries":
          groceriesTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Transportation":
          transportationTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Health and Fitness":
          healthAndFitnessTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Shopping":
          shoppingTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Eating Out":
          eatingOutTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Entertainment":
          entertainmentTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Travel":
          travelTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Education":
          educationTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        case "Other":
          otherTotalExpenses += Number(expenses[i].expenseAmount);
          break;
        default:
          console.error("Error: Unknown Category");
      }
    }

    document.getElementById("homeTotal").innerHTML = "$" + homeTotalExpenses;
    document.getElementById("groceriesTotal").innerHTML =
      "$" + groceriesTotalExpenses;
    document.getElementById("transportationTotal").innerHTML =
      "$" + transportationTotalExpenses;
    document.getElementById("healthAndFitnessTotal").innerHTML =
      "$" + healthAndFitnessTotalExpenses;
    document.getElementById("shoppingTotal").innerHTML =
      "$" + shoppingTotalExpenses;
    document.getElementById("eatingOutTotal").innerHTML =
      "$" + eatingOutTotalExpenses;
    document.getElementById("entertainmentTotal").innerHTML =
      "$" + entertainmentTotalExpenses;
    document.getElementById("travelTotal").innerHTML =
      "$" + travelTotalExpenses;
    document.getElementById("educationTotal").innerHTML =
      "$" + educationTotalExpenses;
    document.getElementById("otherTotal").innerHTML = "$" + otherTotalExpenses;

    generateExpensesChart();
  }
}

function generateIncomesChart() {
  document.getElementById("incomesChartContainer").style.width = "100%";
  document.getElementById("incomesChartContainer").style.height = "350px";

  const incomesChartCanvas = document.createElement("canvas");
  incomesChartCanvas.classList.add("mb-5");
  incomesChartCanvas.setAttribute("id", "incomesChart");

  document
    .getElementById("incomesChartContainer")
    .appendChild(incomesChartCanvas);

  const incomesChartLabels = ["Wallet", "Bank Account"];
  const incomesChartData = [walletTotalIncome, bankAccountTotalIncome];
  const incomesChartColors = ["#4C956C", "#1E3D59"];

  const incomesChart = new Chart("incomesChart", {
    type: "doughnut",
    data: {
      labels: incomesChartLabels,
      datasets: [
        {
          backgroundColor: incomesChartColors,
          data: incomesChartData,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Incomes per Account",
          font: {
            size: 18,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 5 },
        },
      },
    },
  });
}

function generateExpensesChart() {
  document.getElementById("expensesChartContainer").style.width = "100%";
  document.getElementById("expensesChartContainer").style.height = "350px";

  const expensesChartCanvas = document.createElement("canvas");
  expensesChartCanvas.classList.add("mb-4", "pb-1");
  expensesChartCanvas.setAttribute("id", "expensesChart");

  document
    .getElementById("expensesChartContainer")
    .appendChild(expensesChartCanvas);

  const expensesChartLabels = [
    "Home",
    "Groceries",
    "Transportation",
    "Health and Fitness",
    "Shopping",
    "Eating Out",
    "Entertainment",
    "Travel",
    "Education",
    "Other",
  ];

  const expensesChartData = [
    homeTotalExpenses,
    groceriesTotalExpenses,
    transportationTotalExpenses,
    healthAndFitnessTotalExpenses,
    shoppingTotalExpenses,
    eatingOutTotalExpenses,
    entertainmentTotalExpenses,
    travelTotalExpenses,
    educationTotalExpenses,
    otherTotalExpenses,
  ];

  const expensesChartColors = [
    "#1E3D59",
    "#24455C",
    "#294F5E",
    "#2E5960",
    "#336362",
    "#386D64",
    "#3D7766",
    "#428168",
    "#478B6A",
    "#4C956C",
  ];

  const expensesChart = new Chart("expensesChart", {
    type: "bar",
    data: {
      labels: expensesChartLabels,
      datasets: [
        {
          backgroundColor: expensesChartColors,
          data: expensesChartData,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Expenses per Category",
          font: {
            size: 18,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 6 },
        },
      },
    },
  });
}

getAccountsTotal();
getCategoriesTotal();
