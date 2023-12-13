//JavaScript

const expensesContainer = document.getElementById("travelExpensesContainer");

let expenses;

function getTravelExpenses() {
  if (localStorage.getItem("expenses") === null) {
    expenses = [];
  } else {
    expensesContainer.innerHTML = "";

    expenses = JSON.parse(localStorage.getItem("expenses"));

    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].expenseCategory == "Travel") {
        let expenseCard = document.createElement("div");
        expenseCard.classList.add("mb-3");

        expenseCard.innerHTML = `
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-9 h6 my-1">${expenses[i].expenseName}</div>
              <div class="col-3 d-flex justify-content-end">
                <button class="btn btn-danger btn-sm" onclick="deleteTravelExpense(${i})">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row text-center mb-3">
              <div class="col-6">
                <h6>Date:</h6>
                <span class="small">${expenses[i].expenseDate}</span>
              </div>
              <div class="col-6">
                <h6>Category:</h6>
                <span class="small">${expenses[i].expenseCategory}</span>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-6">
                <h6>Account:</h6>
                <span class="small">${expenses[i].expenseAccount}</span>
              </div>
              <div class="col-6">
                <h6>Amount ($):</h6>
                <span class="small">$${expenses[i].expenseAmount}</span>
              </div>
            </div>
          </div>
        </div>
        `;

        expensesContainer.appendChild(expenseCard);
      }
    }
  }
}

function deleteTravelExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  getTravelExpenses();
}

getTravelExpenses();
