//JavaScript

const expensesContainer = document.getElementById("accordionExample");

let expenses;

function getTransportationExpenses() {
  if (localStorage.getItem("expenses") === null) {
    expenses = [];
  } else {
    expensesContainer.innerHTML = "";

    expenses = JSON.parse(localStorage.getItem("expenses"));

    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].expenseCategory == "Transportation") {
        let expenseCard = document.createElement("div");
        expenseCard.classList.add("accordion-item");

        expenseCard.innerHTML = `
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion${i}"
            aria-expanded="true"
            aria-controls="accordion${i}"
          >
            <h6 class="text-dark my-1">${expenses[i].expenseName}</h6>
          </button>
        </h2>
        <div
          id="accordion${i}"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-0">
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
            <div class="row text-center mb-3">
              <div class="col-6">
                <h6>Account:</h6>
                <span class="small">${expenses[i].expenseAccount}</span>
              </div>
              <div class="col-6">
                <h6>Amount ($):</h6>
                <span class="small">$${expenses[i].expenseAmount}</span>
              </div>
            </div>
            <div class="d-grid gap-2 mb-3">
              <button class="btn btn-danger btn-sm" onclick="deleteTransportationExpense(${i})">
                <i class="fa-solid fa-trash-can"></i> Delete
              </button>
            </div>
          </div>
        </div>
        `;

        expensesContainer.appendChild(expenseCard);
      }
    }
  }
}

function deleteTransportationExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  getTransportationExpenses();
}

getTransportationExpenses();
