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
            class="navbar-toggler"
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
              <li class="nav-item">
                <a class="nav-link" href="/index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Views/Stats.html">Stats</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Views/Profile.html">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Views/About.html">About</a>
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

class AccountsClass extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide fade-in">
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
          <div class="account-card shadow">
            <h1 class="fs-3 text-light mb-4">Wallet</h1>
            <h4 class="fs-5 text-light">Balance</h4>
            <h3 class="fs-4 text-light mb-3">
              $<span id="balanceWalletAccount">230</span>
            </h3>
            <div class="account-card-info">
              <h4 class="fs-6 text-light mt-2">
                <span id="usernameWalletAccount">dsvillalobos</span>
              </h4>
              <div class="account-card-icon">
                <i class="fa-solid fa-wallet text-light fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <!-- Bank Account -->
          <div class="account-card shadow">
            <h1 class="fs-3 text-light mb-4">Bank Account</h1>
            <h4 class="fs-5 text-light">Balance</h4>
            <h3 class="fs-4 text-light mb-3">
              $<span id="balanceBankAccount">230</span>
            </h3>
            <div class="account-card-info">
              <h4 class="fs-6 text-light mt-2">
                <span id="usernameBankAccount">dsvillalobos</span>
              </h4>
              <div class="account-card-icon">
                <i class="fa-solid fa-credit-card text-light fs-3"></i>
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
    <div class="overview mb-4">
      <div class="row text-center">
        <div class="col">
          <h3 class="fs-5 mb-1">Balance</h3>
          <span class="text-success fs-6" id="totalOverviewBalance">$460</span>
        </div>
      </div>
      <div class="row text-center">
        <div class="col">
          <h3 class="fs-5 mb-1">Income</h3>
          <span class="fs-6" id="totalOverviewIncome">$460</span>
        </div>
        <div class="col">
          <h3 class="fs-5 mb-1">Expenses</h3>
          <span class="text-danger fs-6" id="totalOverviewExpenses">$0</span>
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
    <div class="row">
      <div class="col d-grid gap-2">
        <a class="btn btn-success" href="/Views/Add-Income.html">Add Income</a>
      </div>
      <div class="col d-grid gap-2">
        <a class="btn btn-primary" href="/Views/Add-Expense.html"
          >Add Expense</a
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
    <div>
      <form autocomplete="off" id="addIncomeForm">
        <!-- Income Name -->
        <div class="mb-3">
          <label class="form-label mb-1" for="incomeName"
            >Income Name:</label
          >
          <input
            class="form-control"
            type="text"
            name="incomeName"
            id="incomeName"
            required
          />
        </div>
        <!-- Date and Account Row -->
        <div class="row">
          <div class="col">
            <!-- Date -->
            <div class="mb-3">
              <label class="form-label mb-1" for="incomeDate">Date:</label>
              <input
                class="form-control"
                type="date"
                name="incomeDate"
                id="incomeDate"
                required
              />
            </div>
          </div>
          <div class="col">
            <!-- Account -->
            <div class="mb-3">
              <label class="form-label mb-1" for="incomeAccount">
                Account:
              </label>
              <select
                class="form-control"
                name="incomeAccount"
                id="incomeAccount"
                required
              >
                <option value="" disabled selected>
                  Select an Account
                </option>
                <option value="Wallet">Wallet</option>
                <option value="Bank Account">Bank Account</option>
              </select>
            </div>
          </div>
        </div>
        <!-- Amount -->
        <div class="mb-3">
          <label class="form-label mb-1" for="incomeAmount"
            >Amount ($):</label
          >
          <input
            class="form-control"
            type="number"
            name="incomeAmount"
            id="incomeAmount"
            min="1"
            max="999"
            required
          />
        </div>
        <!-- Add Income Button -->
        <div class="d-grid gap-2">
          <button class="btn btn-success">Add Income</button>
        </div>
      </form>
    </div>
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
    <div>
      <form autocomplete="off" id="addExpenseForm">
        <!-- Expense Name -->
        <div class="mb-3">
          <label class="form-label mb-1" for="expenseName"
            >Expense Name:</label
          >
          <input
            class="form-control"
            type="text"
            name="expenseName"
            id="expenseName"
            required
          />
        </div>
        <!-- Date and Category Row -->
        <div class="row">
          <div class="col">
            <!-- Date -->
            <div class="mb-3">
              <label class="form-label mb-1" for="expenseDate">Date:</label>
              <input
                class="form-control"
                type="date"
                name="expenseDate"
                id="expenseDate"
                required
              />
            </div>
          </div>
          <div class="col">
            <!-- Category -->
            <div class="mb-3">
              <label class="form-label mb-1" for="expenseCategory"
                >Category:</label
              >
              <select
                class="form-control"
                name="expenseCategory"
                id="expenseCategory"
                required
              >
                <option value="" disabled selected>
                  Select a Category
                </option>
                <option value="Home">Home</option>
                <option value="Groceries">Groceries</option>
                <option value="Transportation">Transportation</option>
                <option value="Health and Fitness">
                  Health and Fitness
                </option>
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
        <!-- Account -->
        <div class="mb-3">
          <label class="form-label mb-1" for="expenseAccount">
            Account:
          </label>
          <select
            class="form-control"
            name="expenseAccount"
            id="expenseAccount"
            required
          >
            <option value="" disabled selected>Select an Account</option>
            <option value="Wallet">Wallet</option>
            <option value="Bank Account">Bank Account</option>
          </select>
        </div>
        <!-- Amount -->
        <div class="mb-3">
          <label class="form-label mb-1" for="expenseAmount"
            >Amount ($):</label
          >
          <input
            class="form-control"
            type="number"
            name="expenseAmount"
            id="expenseAmount"
            min="1"
            max="999"
            required
          />
        </div>
        <!-- Add Expense Button -->
        <div class="d-grid gap-2">
          <button class="btn btn-primary">Add Expense</button>
        </div>
      </form>
    </div>
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
    <table class="table text-center">
      <tbody>
        <tr>
          <td><h6 class="fs-6">Created by</h6></td>
          <td>@dsvillalobos</td>
        </tr>
        <tr>
          <td><h6 class="fs-6">Version</h6></td>
          <td>DS Spendify Version 1.0.2</td>
        </tr>
        <tr>
          <td><h6 class="fs-6">Need Help?</h6></td>
          <td>
            <a
              class="text-dark"
              href="https://ds-spendify-home.netlify.app/help-center"
            >
              Go to the Help Center.
            </a>
          </td>
        </tr>
        <tr>
          <td><h6 class="fs-6">Follow Me</h6></td>
          <td>
            <a
              class="fs-5 text-dark mx-2"
              href="https://twitter.com/dsvillalobosss"
              ><i class="fa-brands fa-x-twitter"></i
            ></a>
            <a
              class="fs-5 text-dark mx-2"
              href="https://www.instagram.com/dsvillalobosss/"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a
              class="fs-5 text-dark mx-2"
              href="https://www.threads.net/@dsvillalobosss"
              ><i class="fa-brands fa-threads"></i
            ></a>
            <a
              class="fs-5 text-dark mx-2"
              href="https://github.com/dsvillalobos"
              ><i class="fa-brands fa-github"></i
            ></a>
          </td>
        </tr>
        <tr>
          <td><h6 class="fs-6">Copyright</h6></td>
          <td>© dsvillalobos 2023</td>
        </tr>
      </tbody>
    </table>
    `;
  }
}

window.customElements.define("import-about", AboutClass);
