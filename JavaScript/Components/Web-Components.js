//JavaScript

class HeaderClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="mb-4 sticky-top">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand fs-2 fw-bold" href="/index.html"
            ><i class="fa-solid fa-wallet"></i> DS Spendify</a
          >
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars text-light"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-1">
                <a class="nav-link" href="/index.html"
                  ><i class="fa-solid fa-house"></i> Home</a
                >
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="/Views/Stats.html"
                  ><i class="fa-solid fa-chart-simple"></i> Stats</a
                >
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="/Views/Profile.html"
                  ><i class="fa-solid fa-user"></i> Profile</a
                >
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="/Views/About.html"
                  ><i class="fa-solid fa-circle-info"></i> About</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `;
  }
}

window.customElements.define("import-header", HeaderClass);

class WelcomeTextClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="content-container fade-in col-md-8 mx-auto mb-4 text-center">
      <!-- Main Container -->
      <main class="container">
        <div class="fs-5 mb-0">
          Welcome <span class="h5" id="usernameWelcomeText"></span>
        </div>
        <div class="fs-6 fst-italic mb-0">Track and Thrive</div>
      </main>
    </div>
    `;
  }
}

window.customElements.define("import-welcome-text", WelcomeTextClass);

class AccountsClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div
      id="carouselExampleIndicators"
      class="carousel slide fade-in"
      data-bs-interval="5000"
      data-bs-touch="true"
      data-bs-ride="carousel"
    >
      <!-- Accounts Navigation -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <!-- Wallet -->
          <div class="card mx-auto account-card text-light p-2">
            <div class="card-body">
              <h3 class="mb-4">Wallet</h3>
              <div class="row text-center mb-4">
                <div class="col">
                  <h6>Balance</h6>
                  <span id="balanceWalletAccount"></span>
                </div>
                <div class="col">
                  <h6>Income</h6>
                  <span id="incomeWalletAccount"></span>
                </div>
                <div class="col">
                  <h6>Expenses</h6>
                  <span id="expensesWalletAccount"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <h6 id="usernameWalletAccount"></h6>
                </div>
                <div class="col text-end me-2">
                  <i class="fa-solid fa-money-bill-wave h3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <!-- Bank Account -->
          <div class="card mx-auto account-card text-light p-2">
            <div class="card-body">
              <h3 class="mb-4">Bank Account</h3>
              <div class="row text-center mb-4">
                <div class="col">
                  <h6>Balance</h6>
                  <span id="balanceBankAccount"></span>
                </div>
                <div class="col">
                  <h6>Income</h6>
                  <span id="incomeBankAccount"></span>
                </div>
                <div class="col">
                  <h6>Expenses</h6>
                  <span id="expensesBankAccount"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <h6 id="usernameBankAccount"></h6>
                </div>
                <div class="col text-end me-2">
                  <i class="fa-solid fa-building-columns h3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

window.customElements.define("import-accounts", AccountsClass);

class TotalOverviewClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="overview mb-4 mt-2">
      <div class="row text-center mb-3">
        <div class="col">
          <h6 class="mb-1">Total Balance</h6>
          <span class="text-success" id="totalOverviewBalance"></span>
          <br />
          <span
            class="fst-italic small"
            id="totalOverviewBalanceText"
          ></span>
        </div>
      </div>
      <div class="row text-center">
        <div class="col">
          <h6 class="mb-1">Total Income</h6>
          <span class="text-primary" id="totalOverviewIncome"></span>
        </div>
        <div class="col">
          <h6 class="mb-1">Total Expenses</h6>
          <span class="text-danger" id="totalOverviewExpenses"></span>
        </div>
      </div>
    </div>
    `;
  }
}

window.customElements.define("import-total-overview", TotalOverviewClass);

class TransactionButtonsClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="row mb-4">
      <div class="col d-grid gap-2">
        <a
          class="btn btn-success"
          href="/Views/Transactions/Add-Income.html"
          ><i class="fa-solid fa-arrow-up"></i> Add Income</a
        >
      </div>
      <div class="col d-grid gap-2">
        <a
          class="btn btn-primary"
          href="/Views/Transactions/Add-Expense.html"
          ><i class="fa-solid fa-arrow-down"></i> Add Expense</a
        >
      </div>
    </div>
    `;
  }
}

window.customElements.define(
  "import-transaction-buttons",
  TransactionButtonsClass
);

class AddIncomeFormClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <form autocomplete="off" id="addIncomeForm">
      <div class="mb-3">
        <label class="form-label" for="incomeName"
          ><i class="fa-solid fa-arrow-up me-2"></i>Income Name:</label
        >
        <input
          class="form-control"
          type="text"
          name="incomeName"
          id="incomeName"
          required
          placeholder="E.g. Salary"
        />
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label" for="incomeDate"
              ><i class="fa-solid fa-calendar-days me-2"></i>Date:</label
            >
            <input
              class="form-control"
              type="date"
              name="incomeDate"
              id="incomeDate"
              required
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label" for="incomeAccount"
              ><i class="fa-solid fa-money-check-dollar me-2"></i
              >Account:</label
            >
            <select
              class="form-control"
              name="incomeAccount"
              id="incomeAccount"
              required
            >
              <option value="" selected disabled>Select an Account</option>
              <option value="Wallet">Wallet</option>
              <option value="Bank Account">Bank Account</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mb-3">
          <label class="form-label" for="incomeAmount"
            ><i class="fa-solid fa-dollar-sign me-2"></i>Amount ($):</label
          >
          <input
            class="form-control"
            type="number"
            name="incomeAmount"
            id="incomeAmount"
            required
            min="1"
            max="999"
            placeholder="Income Amount"
          />
        </div>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-success">Add Income</button>
      </div>
    </form>
    `;
  }
}

window.customElements.define("import-add-income-form", AddIncomeFormClass);

class AddExpenseFormClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <form autocomplete="off" id="addExpenseForm">
      <div class="mb-3">
        <label class="form-label" for="expenseName"
          ><i class="fa-solid fa-arrow-down me-2"></i>Expense Name:</label
        >
        <input
          class="form-control"
          type="text"
          name="expenseName"
          id="expenseName"
          required
          placeholder="E.g. Groceries"
        />
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label" for="expenseDate"
              ><i class="fa-solid fa-calendar-days me-2"></i>Date:</label
            >
            <input
              class="form-control"
              type="date"
              name="expenseDate"
              id="expenseDate"
              required
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label" for="expenseCategory"
              ><i class="fa-solid fa-list me-2"></i>Category:</label
            >
            <select
              class="form-control"
              name="expenseCategory"
              id="expenseCategory"
              required
            >
              <option value="" selected disabled>Select a Category</option>
              <option value="Home">Home</option>
              <option value="Groceries">Groceries</option>
              <option value="Transportation">Transportation</option>
              <option value="Health and Fitness">Health and Fitness</option>
              <option value="Shopping">Shopping</option>
              <option value="Eating Out">Eating Out</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label" for="expenseAccount"
              ><i class="fa-solid fa-money-check-dollar me-2"></i
              >Account:</label
            >
            <select
              class="form-control"
              name="expenseAccount"
              id="expenseAccount"
              required
            >
              <option value="" selected disabled>Select an Account</option>
              <option value="Wallet">Wallet</option>
              <option value="Bank Account">Bank Account</option>
            </select>
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label" for="expenseAmount"
              ><i class="fa-solid fa-dollar-sign me-2"></i>Amount
              ($):</label
            >
            <input
              class="form-control"
              type="number"
              name="expenseAmount"
              id="expenseAmount"
              required
              min="1"
              max="999"
              placeholder="Expense Amount"
            />
          </div>
        </div>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary">Add Expense</button>
      </div>
    </form>
    `;
  }
}

window.customElements.define("import-add-expense-form", AddExpenseFormClass);

class AboutClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">Created by</div>
          @dsvillalobos
        </div>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">Version</div>
          DS Spendify Version 1.0.9
        </div>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">Help & Privacy</div>
          <ul>
            <li class="mb-1">
              <a class="text-dark" href="" target="_blank">Help Center</a>
            </li>
            <li>
              <a class="text-dark" href="" target="_blank">Data Security</a>
            </li>
          </ul>
        </div>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">Follow Me</div>
          <div class="mt-1">
            <a
              class="text-dark mx-2"
              href="https://www.instagram.com/dsvillalobosss/"
              target="_blank"
              ><i class="fa-brands fa-instagram fs-4"></i
            ></a>
            <a
              class="text-dark mx-2"
              href="https://twitter.com/dsvillalobosss"
              target="_blank"
              ><i class="fa-brands fa-x-twitter fs-4"></i
            ></a>
            <a
              class="text-dark mx-2"
              href="https://www.threads.net/@dsvillalobosss"
              target="_blank"
              ><i class="fa-brands fa-threads fs-4"></i
            ></a>
            <a
              class="text-dark mx-2"
              href="https://github.com/dsvillalobos"
              target="_blank"
              ><i class="fa-brands fa-github fs-4"></i
            ></a>
          </div>
        </div>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">Copyright</div>
          © 2024 dsvillalobos. All rights reserved.
        </div>
      </li>
    </ul>
    `;
  }
}

window.customElements.define("import-about", AboutClass);

class ProfileFormClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <form autocomplete="off" id="profileForm">
      <div class="mb-3">
        <label class="form-label" for="username"
          ><i class="fa-solid fa-user me-2"></i>Username:</label
        >
        <input
          class="form-control"
          type="text"
          name="username"
          id="username"
          required
          placeholder="E.g. John Doe"
        />
      </div>
      <div class="mb-3">
        <label class="form-label" for="savingTarget"
          ><i class="fa-solid fa-dollar-sign me-2"></i>Saving Target
          ($):</label
        >
        <input
          class="form-control"
          type="number"
          name="savingTarget"
          id="savingTarget"
          min="0"
          required
          placeholder="Saving Target"
        />
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-success">Save Profile</button>
      </div>
    </form>
    `;
  }
}

window.customElements.define("import-profile-form", ProfileFormClass);

class AccordionMenuClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="accordion accordion-menu" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h6 class="text-dark my-1">Incomes</h6>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-0">
            <ul class="list-group list-group-flush">
              <li class="list-group-item pb-3 pt-0">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Incomes/Wallet.html"
                  ><i class="fa-solid fa-money-bill-wave"></i> Wallet</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Incomes/Bank-Account.html"
                  ><i class="fa-solid fa-building-columns"></i> Bank
                  Account</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h6 class="text-dark my-1">Expenses</h6>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-0">
            <ul class="list-group list-group-flush">
              <li class="list-group-item pb-3 pt-0">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Home.html"
                  ><i class="fa-solid fa-house-chimney"></i> Home</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Groceries.html"
                  ><i class="fa-solid fa-basket-shopping"></i> Groceries</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Transportation.html"
                  ><i class="fa-solid fa-car"></i> Transportation</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Health-and-Fitness.html"
                  ><i class="fa-solid fa-heart-pulse"></i> Health and
                  Fitness</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Shopping.html"
                  ><i class="fa-solid fa-bag-shopping"></i> Shopping</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Eating-Out.html"
                  ><i class="fa-solid fa-pizza-slice"></i> Eating Out</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Entertainment.html"
                  ><i class="fa-solid fa-clapperboard"></i> Entertainment</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Travel.html"
                  ><i class="fa-solid fa-plane"></i> Travel</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Education.html"
                  ><i class="fa-solid fa-graduation-cap"></i> Education</a
                >
              </li>
              <li class="list-group-item py-3">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/Expenses/Other.html"
                  ><i class="fa-solid fa-file-circle-question"></i> Other</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <h6 class="text-dark my-1">Financial Intelligence</h6>
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-0">
            <ul class="list-group list-group-flush">
              <li class="list-group-item pb-3 pt-0">
                <a
                  class="text-decoration-none text-dark"
                  href="/Views/AI-Insights.html"
                  ><i class="fa-solid fa-robot"></i> AI Insights</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

window.customElements.define("import-accordion-menu", AccordionMenuClass);

class StatsTableClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th class="col-7 py-2 table-primary text-light">Category</th>
          <th class="col-5 py-2 table-primary text-light">Expenses ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-house-chimney"></i> Home
          </td>
          <td class="col-5 py-2"><span id="homeTotal"></span></td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-basket-shopping"></i> Groceries
          </td>
          <td class="col-5 py-2"><span id="groceriesTotal"></span></td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-car"></i> Transportation
          </td>
          <td class="col-5 py-2">
            <span id="transportationTotal"></span>
          </td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-heart-pulse"></i> Health and Fitness
          </td>
          <td class="col-5 py-2">
            <span id="healthAndFitnessTotal"></span>
          </td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-bag-shopping"></i> Shopping
          </td>
          <td class="col-5 py-2"><span id="shoppingTotal"></span></td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-pizza-slice"></i> Eating Out
          </td>
          <td class="col-5 py-2"><span id="eatingOutTotal"></span></td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-clapperboard"></i> Entertainment
          </td>
          <td class="col-5 py-2">
            <span id="entertainmentTotal"></span>
          </td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-plane"></i> Travel
          </td>
          <td class="col-5 py-2"><span id="travelTotal"></span></td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-graduation-cap"></i> Education
          </td>
          <td class="col-5 py-2"><span id="educationTotal"></span></td>
        </tr>
        <tr>
          <td class="col-7 py-2">
            <i class="fa-solid fa-file-circle-question"></i> Other
          </td>
          <td class="col-5 py-2"><span id="otherTotal"></span></td>
        </tr>
      </tbody>
    </table>
    `;
  }
}

window.customElements.define("import-stats-table", StatsTableClass);

class StatsChartsClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div
      id="carouselExampleIndicators"
      class="carousel slide fade-in"
      data-bs-interval="5000"
      data-bs-touch="true"
      data-bs-ride="carousel"
    >
      <!-- Accounts Navigation -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div id="incomesChartContainer"></div>
        </div>
        <div class="carousel-item">
          <div id="expensesChartContainer"></div>
        </div>
      </div>
    </div>
    `;
  }
}

window.customElements.define("import-stats-charts", StatsChartsClass);

class StatsButtonsClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="content-container fade-in col-md-8 mx-auto">
      <div class="container">
        <div class="row mb-2">
          <div class="col d-grid gap-2">
            <button class="btn btn-success" id="exportAsPDFButton">
              <i class="fa-solid fa-file-pdf"></i> Export as PDF
            </button>
          </div>
          <div class="col d-grid gap-2">
            <a class="btn btn-primary" href="/Views/AI-Insights.html"
              ><i class="fa-solid fa-robot"></i> AI Insights</a
            >
          </div>
        </div>
        <div class="text-center small fst-italic">
          <div>Export is limited to the current chart view.</div>
        </div>
      </div>
    </div>
    `;
  }
}

window.customElements.define("import-stats-buttons", StatsButtonsClass);
