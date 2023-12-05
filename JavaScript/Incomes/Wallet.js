//JavaScript

const incomesContainer = document.getElementById("walletIncomesContainer");

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
        incomeCard.classList.add("mb-3");

        incomeCard.innerHTML = `
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-9 h6 my-1">${incomes[i].incomeName}</div>
              <div class="col-3 d-flex justify-content-end">
                <button class="btn btn-danger btn-sm" onclick="deleteWalletIncome(${i})">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row text-center">
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
