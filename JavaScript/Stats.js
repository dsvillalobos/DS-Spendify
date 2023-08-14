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

let expenses = 0;
let balance = 0;
let income = parseInt(localStorage.getItem("income"));
let savingTarget = parseInt(localStorage.getItem("savingTarget"));

const incomeCell = document.getElementById("incomeCell");
const expensesCell = document.getElementById("expensesCell");
const balanceCell = document.getElementById("balanceCell");
const savingTargetCell = document.getElementById("savingTargetCell");
const financialPersonalityCell = document.getElementById(
  "financialPersonalityCell"
);
const mostSpentCategoryCell = document.getElementById("mostSpentCategoryCell");
const leastSpentCategoryCell = document.getElementById(
  "leastSpentCategoryCell"
);
const averageExpensesPerCategoryCell = document.getElementById(
  "averageExpensesPerCategoryCell"
);
const savingTip1 = document.getElementById("savingTip1");
const savingTip2 = document.getElementById("savingTip2");
const savingTip3 = document.getElementById("savingTip3");

function init() {
  if (isNaN(income)) {
    income = 1;
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

  incomeCell.innerHTML = "$" + income;
  expensesCell.innerHTML = "$" + expenses;
  balanceCell.innerHTML = "$" + balance;
  savingTargetCell.innerHTML = "$" + savingTarget;
  localStorage.setItem("balance", balance);

  if (balance >= savingTarget) {
    financialPersonalityCell.innerHTML = "The Saver";
  }

  if (balance < savingTarget && balance > 0) {
    financialPersonalityCell.innerHTML = "The Spender";
  }

  if (balance <= 0) {
    financialPersonalityCell.innerHTML = "The Debtor";
  }

  let mostSpentCategory = Math.max(
    basicExpensesTOT,
    shoppingTOT,
    healthTOT,
    financialExpensesTOT,
    travelTOT,
    foodTOT,
    entertainmentTOT,
    educationTOT,
    transportationTOT,
    petExpensesTOT
  );

  if (mostSpentCategory == basicExpensesTOT) {
    mostSpentCategoryCell.innerHTML =
      "Basic Expenses" + " with $" + basicExpensesTOT;

    savingTip1.innerHTML = "Energy Efficiency.";
    savingTip2.innerHTML = "Water Conservation.";
    savingTip3.innerHTML = "Utility Bill Auditing.";
  }

  if (mostSpentCategory == shoppingTOT) {
    mostSpentCategoryCell.innerHTML = "Shopping" + " with $" + shoppingTOT;

    savingTip1.innerHTML = "Make a Shopping List.";
    savingTip2.innerHTML = "Shop during Sales and Discount Seasons.";
    savingTip3.innerHTML = "Look for Coupons and Promo Codes.";
  }

  if (mostSpentCategory == healthTOT) {
    mostSpentCategoryCell.innerHTML = "Health" + " with $" + healthTOT;

    savingTip1.innerHTML = "Preventive Care.";
    savingTip2.innerHTML = "Generic Medication Choice.";
    savingTip3.innerHTML = "Utilize Health Insurance.";
  }

  if (mostSpentCategory == financialExpensesTOT) {
    mostSpentCategoryCell.innerHTML =
      "Financial Expenses" + " with $" + financialExpensesTOT;

    savingTip1.innerHTML = "Choose the Right Bank.";
    savingTip2.innerHTML = "Minimize Bank Fees.";
    savingTip3.innerHTML = "Limit Credit Card Usage.";
  }

  if (mostSpentCategory == travelTOT) {
    mostSpentCategoryCell.innerHTML = "Travel" + " with $" + travelTOT;

    savingTip1.innerHTML = "Plan and Book in Advance.";
    savingTip2.innerHTML = "Utilize Travel Reward Programs.";
    savingTip3.innerHTML = "Consider Alternative Accommodations.";
  }

  if (mostSpentCategory == foodTOT) {
    mostSpentCategoryCell.innerHTML = "Food" + " with $" + foodTOT;

    savingTip1.innerHTML = "Meal Planning.";
    savingTip2.innerHTML = "Cook at Home.";
    savingTip3.innerHTML = "Brown Bag Your Lunch.";
  }

  if (mostSpentCategory == entertainmentTOT) {
    mostSpentCategoryCell.innerHTML =
      "Entertainment" + " with $" + entertainmentTOT;

    savingTip1.innerHTML = "Evaluate Subscriptions.";
    savingTip2.innerHTML = "Take Advantage of Free Events and Activities.";
    savingTip3.innerHTML = "Explore Local Parks and Recreation.";
  }

  if (mostSpentCategory == educationTOT) {
    mostSpentCategoryCell.innerHTML = "Education" + " with $" + educationTOT;

    savingTip1.innerHTML = "Utilize Free Online Resources.";
    savingTip2.innerHTML = "Consider Community College or Online Education.";
    savingTip3.innerHTML = "Borrow or Rent Textbooks.";
  }

  if (mostSpentCategory == transportationTOT) {
    mostSpentCategoryCell.innerHTML =
      "Transportation" + " with $" + transportationTOT;

    savingTip1.innerHTML = "Utilize Public Transportation.";
    savingTip2.innerHTML = "Maintain Regular Vehicle Maintenance.";
    savingTip3.innerHTML = "Practice Fuel-Efficient Driving.";
  }

  if (mostSpentCategory == petExpensesTOT) {
    mostSpentCategoryCell.innerHTML =
      "Pet Expenses" + " with $" + petExpensesTOT;

    savingTip1.innerHTML = "Adopt from a Shelter.";
    savingTip2.innerHTML = "Consider Pet Insurance.";
    savingTip3.innerHTML = "DIY Pet Toys and Treats.";
  }

  let leastSpentCategory = Math.min(
    basicExpensesTOT,
    shoppingTOT,
    healthTOT,
    financialExpensesTOT,
    travelTOT,
    foodTOT,
    entertainmentTOT,
    educationTOT,
    transportationTOT,
    petExpensesTOT
  );

  if (leastSpentCategory == basicExpensesTOT) {
    leastSpentCategoryCell.innerHTML =
      "Basic Expenses" + " with $" + basicExpensesTOT;
  }

  if (leastSpentCategory == shoppingTOT) {
    leastSpentCategoryCell.innerHTML = "Shopping" + " with $" + shoppingTOT;
  }

  if (leastSpentCategory == healthTOT) {
    leastSpentCategoryCell.innerHTML = "Health" + " with $" + healthTOT;
  }

  if (leastSpentCategory == financialExpensesTOT) {
    leastSpentCategoryCell.innerHTML =
      "Financial Expenses" + " with $" + financialExpensesTOT;
  }

  if (leastSpentCategory == travelTOT) {
    leastSpentCategoryCell.innerHTML = "Travel" + " with $" + travelTOT;
  }

  if (leastSpentCategory == foodTOT) {
    leastSpentCategoryCell.innerHTML = "Food" + " with $" + foodTOT;
  }

  if (leastSpentCategory == entertainmentTOT) {
    leastSpentCategoryCell.innerHTML =
      "Entertainment" + " with $" + entertainmentTOT;
  }

  if (leastSpentCategory == educationTOT) {
    leastSpentCategoryCell.innerHTML = "Education" + " with $" + educationTOT;
  }

  if (leastSpentCategory == transportationTOT) {
    leastSpentCategoryCell.innerHTML =
      "Transportation" + " with $" + transportationTOT;
  }

  if (leastSpentCategory == petExpensesTOT) {
    leastSpentCategoryCell.innerHTML =
      "Pet Expenses" + " with $" + petExpensesTOT;
  }

  let averageExpensesPerCategory = Math.round(expenses / 10);
  averageExpensesPerCategoryCell.innerHTML = "$" + averageExpensesPerCategory;

  let date = new Date();
  const dateSpan = document.getElementById("dateSpan");

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  dateSpan.innerHTML = "Retrieved on: " + month + "-" + day + "-" + year;
}

init();

function exportDataAsImage() {
  let dataToExport = document.getElementById("dataToExport");

  html2canvas(dataToExport).then(function (canvas) {
    let dataURL = canvas.toDataURL("image/png");

    let link = document.createElement("a");
    link.href = dataURL;
    link.download = "DS-Spendify-Stats.png";

    link.click();
  });
}
