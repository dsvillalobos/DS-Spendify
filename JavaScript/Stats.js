//JavaScript

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

  document.getElementById("basicExpensesCell").innerHTML =
    "$" + basicExpensesTOT;
  document.getElementById("shoppingCell").innerHTML = "$" + shoppingTOT;
  document.getElementById("healthCell").innerHTML = "$" + healthTOT;
  document.getElementById("financialExpensesCell").innerHTML =
    "$" + financialExpensesTOT;
  document.getElementById("travelCell").innerHTML = "$" + travelTOT;
  document.getElementById("foodCell").innerHTML = "$" + foodTOT;
  document.getElementById("entertainmentCell").innerHTML =
    "$" + entertainmentTOT;
  document.getElementById("educationCell").innerHTML = "$" + educationTOT;
  document.getElementById("transportationCell").innerHTML =
    "$" + transportationTOT;
  document.getElementById("petExpensesCell").innerHTML = "$" + petExpensesTOT;

  const labels = [
    "Basic Expenses",
    "Shopping",
    "Health",
    "Financial Expenses",
    "Travel",
    "Food",
    "Entertainment",
    "Education",
    "Transportation",
    "Pet Expenses",
  ];

  const colors = [
    "#33512A",
    "#3E6333",
    "#4A753C",
    "#558846",
    "#619A4F",
    "#6DAA5B",
    "#7DB46D",
    "#8EBD7F",
    "#9EC791",
    "#AED0A4",
  ];

  const data = [
    basicExpensesTOT,
    shoppingTOT,
    healthTOT,
    financialExpensesTOT,
    travelTOT,
    foodTOT,
    entertainmentTOT,
    educationTOT,
    transportationTOT,
    petExpensesTOT,
  ];

  const barChart = new Chart("barChart", {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: colors,
          data: data,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  });

  const pieChart = new Chart("pieChart", {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: colors,
          data: data,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  });
}

init();
