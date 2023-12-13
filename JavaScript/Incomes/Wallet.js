//JavaScript

const incomesContainer = document.getElementById("accordionExample");

let incomes;

function getWalletIncomes() {
  if (localStorage.getItem("incomes") === null) {
    incomes = [];
  } else {
    incomesContainer.innerHTML = "";

    incomes = JSON.parse(localStorage.getItem("incomes"));

    for (let i = 0; i < incomes.length; i++) {
      if (incomes[i].incomeAccount == "Wallet") {
        let incomeCard = document.createElement("div");
        incomeCard.classList.add("accordion-item");

        incomeCard.innerHTML = `
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion${i}"
            aria-expanded="true"
            aria-controls="accordion${i}"
          >
            <h6 class="text-dark my-1">${incomes[i].incomeName}</h6>
          </button>
        </h2>
        <div
          id="accordion${i}"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-0">
            <div class="row text-center mb-3">
              <div class="col-4">
                <h6>Date:</h6>
                <span class="small">${incomes[i].incomeDate}</span>
              </div>
              <div class="col-4">
                <h6>Account:</h6>
                <span class="small">${incomes[i].incomeAccount}</span>
              </div>
              <div class="col-4">
                <h6>Amount ($):</h6>
                <span class="small">$${incomes[i].incomeAmount}</span>
              </div>
            </div>
            <div class="d-grid gap-2 mb-3">
              <button class="btn btn-danger btn-sm" onclick="deleteWalletIncome(${i})">
                <i class="fa-solid fa-trash-can"></i> Delete
              </button>
            </div>
          </div>
        </div>
        `;

        incomesContainer.appendChild(incomeCard);
      }
    }
  }
}

function deleteWalletIncome(index) {
  incomes.splice(index, 1);
  localStorage.setItem("incomes", JSON.stringify(incomes));
  getWalletIncomes();
}

getWalletIncomes();
