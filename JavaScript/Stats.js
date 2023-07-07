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
const financialPersonalitySpan = document.getElementById(
  "financialPersonalitySpan"
);
const financialPersonalityTitle = document.getElementById(
  "financialPersonalityTitle"
);
const financialPersonalityText = document.getElementById(
  "financialPersonalityText"
);

const totalSpentSpan = document.getElementById("totalSpentSpan");
const mostSpentCategorySpan = document.getElementById("mostSpentCategorySpan");

const savingTip1Title = document.getElementById("savingTip1Title");
const savingTip1Text = document.getElementById("savingTip1Text");
const savingTip2Title = document.getElementById("savingTip2Title");
const savingTip2Text = document.getElementById("savingTip2Text");
const savingTip3Title = document.getElementById("savingTip3Title");
const savingTip3Text = document.getElementById("savingTip3Text");

const detailsElements = document.querySelectorAll("details");

function init() {
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

  localStorage.setItem("balance", balance);

  if (balance >= savingTarget) {
    financialPersonalitySpan.innerHTML = "The Saver";

    financialPersonalityTitle.innerHTML = "The Saver";
    financialPersonalityText.innerHTML =
      "The saver prioritizes saving, focuses on long-term financial security, and practices frugality consistently.";
  }

  if (balance < savingTarget && balance > 0) {
    financialPersonalitySpan.innerHTML = "The Spender";

    financialPersonalityTitle.innerHTML = "The Spender";
    financialPersonalityText.innerHTML =
      "Spenders prioritize immediate enjoyment over long-term goals, indulging in impulsive purchases and experiences.";
  }

  if (balance <= 0) {
    financialPersonalitySpan.innerHTML = "The Debtor";

    financialPersonalityTitle.innerHTML = "The Debtor";
    financialPersonalityText.innerHTML =
      "Debtors rely on borrowing and carry significant debt, often struggling with financial management and repayment.";
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
    mostSpentCategorySpan.innerHTML = "Basic Expenses";
    totalSpentSpan.innerHTML = "$" + basicExpensesTOT;

    savingTip1Title.innerHTML = "Energy Efficiency";
    savingTip1Text.innerHTML =
      "Use energy-saving appliances, LED light bulbs, and smart thermostats to reduce your electricity consumption. Unplug electronics when not in use and turn off lights in empty rooms.";

    savingTip2Title.innerHTML = "Water Conservation";
    savingTip2Text.innerHTML =
      "Be mindful of your water usage by fixing leaks promptly and installing water-efficient fixtures. Take shorter showers, turn off the tap while brushing your teeth, and collect rainwater for watering plants.";

    savingTip3Title.innerHTML = "Utility Bill Auditing";
    savingTip3Text.innerHTML =
      "Regularly review your utility bills to ensure accuracy and identify any unusual spikes in usage. Contact your utility provider if you notice discrepancies or have concerns.";
  }

  if (mostSpentCategory == shoppingTOT) {
    mostSpentCategorySpan.innerHTML = "Shopping";
    totalSpentSpan.innerHTML = "$" + shoppingTOT;

    savingTip1Title.innerHTML = "Make a Shopping List";
    savingTip1Text.innerHTML =
      "Before heading to the store, make a list of the items you need to purchase. Stick to the list and avoid impulsive purchases. This will help you stay focused and avoid unnecessary spending.";

    savingTip2Title.innerHTML = "Shop during Sales and Discount Seasons";
    savingTip2Text.innerHTML =
      "Take advantage of seasonal sales, clearance events, or discount seasons like Black Friday or Cyber Monday. This is a great time to get items at discounted prices.";

    savingTip3Title.innerHTML = "Look for Coupons and Promo Codes";
    savingTip3Text.innerHTML =
      "Search for coupons and promo codes before making a purchase. Many retailers offer discounts that can be found online or through apps. Take advantage of these savings opportunities.";
  }

  if (mostSpentCategory == healthTOT) {
    mostSpentCategorySpan.innerHTML = "Health";
    totalSpentSpan.innerHTML = "$" + healthTOT;

    savingTip1Title.innerHTML = "Preventive Care";
    savingTip1Text.innerHTML =
      "Focus on maintaining a healthy lifestyle to prevent costly medical expenses down the line. This includes exercising regularly, eating nutritious meals, getting enough sleep, and managing stress.";

    savingTip2Title.innerHTML = "Generic Medications";
    savingTip2Text.innerHTML =
      "When prescribed medication, ask your healthcare provider if there are generic alternatives available. Generic medications are typically more affordable than brand-name versions but have the same active ingredients and effectiveness.";

    savingTip3Title.innerHTML = "Utilize Health Insurance";
    savingTip3Text.innerHTML =
      "Understand the coverage provided by your health insurance plan. Take advantage of preventive care services, wellness programs, and discounts offered by your insurer. Review your plan's formulary to choose medications that are covered at a lower cost.";
  }

  if (mostSpentCategory == financialExpensesTOT) {
    mostSpentCategorySpan.innerHTML = "Financial Expenses";
    totalSpentSpan.innerHTML = "$" + financialExpensesTOT;

    savingTip1Title.innerHTML = "Choose the Right Bank";
    savingTip1Text.innerHTML =
      "Compare different banks and their offerings to find one that aligns with your needs. Look for banks that offer low or no monthly fees, competitive interest rates on savings accounts, and convenient ATM access.";

    savingTip2Title.innerHTML = "Minimize Bank Fees";
    savingTip2Text.innerHTML =
      "Be mindful of the fees associated with your bank accounts. Avoid unnecessary charges by understanding the terms and conditions, maintaining minimum balance requirements, and opting for electronic statements instead of paper statements.";

    savingTip3Title.innerHTML = "Limit Credit Card Usage";
    savingTip3Text.innerHTML =
      "Use credit cards responsibly and avoid overspending. Only charge what you can comfortably pay off each month to prevent excessive debt and interest charges.";
  }

  if (mostSpentCategory == travelTOT) {
    mostSpentCategorySpan.innerHTML = "Travel";
    totalSpentSpan.innerHTML = "$" + travelTOT;

    savingTip1Title.innerHTML = "Plan and Book in Advance";
    savingTip1Text.innerHTML =
      "Start planning your trips well in advance to take advantage of early bird discounts and lower prices. Booking flights, accommodations, and attractions ahead of time can help you secure better deals.";

    savingTip2Title.innerHTML = "Utilize Travel Reward Programs";
    savingTip2Text.innerHTML =
      "Sign up for travel reward programs offered by airlines, hotels, and credit card companies. Accumulate points or miles through your purchases and loyalty to redeem them for discounted or free travel in the future.";

    savingTip3Title.innerHTML = "Consider Alternative Accommodations";
    savingTip3Text.innerHTML =
      "Explore alternatives to traditional hotels, such as vacation rentals, hostels, or guesthouses. These options are often more budget-friendly, especially if you're traveling with a group or for an extended period.";
  }

  if (mostSpentCategory == foodTOT) {
    mostSpentCategorySpan.innerHTML = "Food";
    totalSpentSpan.innerHTML = "$" + foodTOT;

    savingTip1Title.innerHTML = "Meal Planning";
    savingTip1Text.innerHTML =
      "Plan your meals in advance, create a shopping list, and stick to it. Having a plan reduces the chances of impulse purchases and helps you avoid wasting food. Consider batch cooking and preparing meals in advance to save time and money.";

    savingTip2Title.innerHTML = "Cook at Home";
    savingTip2Text.innerHTML =
      "Eating out can be expensive, so try to cook at home as much as possible. Prepare meals from scratch using fresh ingredients, as it's often cheaper than relying on pre-packaged or processed foods. Explore new recipes and cooking techniques to keep meals interesting.";

    savingTip3Title.innerHTML = "Brown Bag Your Lunch";
    savingTip3Text.innerHTML =
      "Instead of buying lunch at work or school, bring your own packed lunch. Preparing your meals ahead of time can save you a significant amount of money over time. Consider packing leftovers from dinner or making sandwiches and salads.";
  }

  if (mostSpentCategory == entertainmentTOT) {
    mostSpentCategorySpan.innerHTML = "Entertainment";
    totalSpentSpan.innerHTML = "$" + entertainmentTOT;

    savingTip1Title.innerHTML = "Evaluate Subscriptions";
    savingTip1Text.innerHTML =
      "Take a close look at your entertainment subscriptions, such as Netflix, HBO Max, Spotify, or any other streaming or music services you're subscribed to. Assess whether you're utilizing all of them and consider canceling or downgrading any subscriptions that you don't frequently use or can live without.";

    savingTip2Title.innerHTML = "Take Advantage of Free Events and Activities";
    savingTip2Text.innerHTML =
      "Keep an eye out for free or low-cost entertainment events in your community. Many cities offer concerts, art exhibits, festivals, and outdoor movie screenings that you can enjoy without spending a lot of money.";

    savingTip3Title.innerHTML = "Explore Local Parks and Recreation";
    savingTip3Text.innerHTML =
      "Visit local parks, nature reserves, and recreation areas that offer opportunities for outdoor activities and entertainment. Enjoy a picnic, go for a hike, or participate in community events organized by these establishments.";
  }

  if (mostSpentCategory == educationTOT) {
    mostSpentCategorySpan.innerHTML = "Education";
    totalSpentSpan.innerHTML = "$" + educationTOT;

    savingTip1Title.innerHTML = "Utilize Free Online Resources";
    savingTip1Text.innerHTML =
      "Take advantage of free online educational resources such as Khan Academy, Coursera, MIT OpenCourseWare, and TED-Ed. These platforms offer a wide range of courses and educational materials across various subjects.";

    savingTip2Title.innerHTML =
      "Consider Community College or Online Education";
    savingTip2Text.innerHTML =
      "Community colleges generally offer more affordable tuition rates compared to four-year institutions. Taking courses at a community college or pursuing online education can help save money while still gaining valuable knowledge.";

    savingTip3Title.innerHTML = "Borrow or Rent Textbooks";
    savingTip3Text.innerHTML =
      "Instead of purchasing new textbooks, consider borrowing or renting them from the library, fellow students, or online textbook rental services. This can significantly reduce the cost of required course materials.";
  }

  if (mostSpentCategory == transportationTOT) {
    mostSpentCategorySpan.innerHTML = "Transportation";
    totalSpentSpan.innerHTML = "$" + transportationTOT;

    savingTip1Title.innerHTML = "Utilize Public Transportation";
    savingTip1Text.innerHTML =
      "Consider using public transportation whenever possible, such as buses, trains, or subways. Public transit can be a cost-effective alternative to driving, particularly for daily commutes or city travel.";

    savingTip2Title.innerHTML = "Maintain Regular Vehicle Maintenance";
    savingTip2Text.innerHTML =
      "Keep up with regular vehicle maintenance, including oil changes, tire rotations, and air filter replacements. Proper maintenance can improve fuel efficiency and prevent costly repairs down the line.";

    savingTip3Title.innerHTML = "Practice Fuel-Efficient Driving";
    savingTip3Text.innerHTML =
      "Adopt fuel-efficient driving habits such as maintaining a steady speed, avoiding rapid acceleration and hard braking, and using cruise control on the highway. These practices can help improve your vehicle's fuel economy.";
  }

  if (mostSpentCategory == petExpensesTOT) {
    mostSpentCategorySpan.innerHTML = "Pet Expenses";
    totalSpentSpan.innerHTML = "$" + petExpensesTOT;

    savingTip1Title.innerHTML = "Adopt from a Shelter";
    savingTip1Text.innerHTML =
      "Consider adopting a pet from a local animal shelter or rescue organization instead of buying from a breeder. Adoption fees are generally much lower than the cost of purchasing a pet, and you'll be providing a loving home to an animal in need.";

    savingTip2Title.innerHTML = "Consider Pet Insurance";
    savingTip2Text.innerHTML =
      "Evaluate pet insurance options to determine if it's a good fit for your pet. Pet insurance can help cover unexpected medical costs, but it's important to research different plans, coverage options, and deductibles to find the most cost-effective solution.";

    savingTip3Title.innerHTML = "DIY Pet Toys and Treats";
    savingTip3Text.innerHTML =
      "Get creative and make your own pet toys and treats using safe and affordable materials. There are plenty of DIY tutorials and recipes available online that can save you money while still providing entertainment and enjoyment for your pet.";
  }

  detailsElements.forEach((details) => {
    details.addEventListener("click", () => {
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.removeAttribute("open");
        }
      });
    });
  });

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
