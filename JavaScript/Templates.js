//JavaScript

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="mb-4 sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="fs-2 fw-bold navbar-brand" href="/index.html">
                <i class="fa-solid fa-wallet"></i>
                DS Spendify
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/index.html"
                    >Home</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Pages/Stats.html">Stats</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Pages/Profile.html">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Pages/About.html">About</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>
    `;
  }
}

customElements.define("import-header", Header);

class Categories extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="row mb-4">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-1">
          <ul class="list-group list-group-flush fs-6">
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Basic-Expenses.html"
              >
                <i class="fa-solid fa-money-bill-wave"></i>
                Basic Expenses
              </a>
            </li>
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Shopping.html"
              >
                <i class="fa-solid fa-bag-shopping"></i>
                Shopping
              </a>
            </li>
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Health.html"
              >
                <i class="fa-solid fa-heart-pulse"></i>
                Health
              </a>
            </li>
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Financial-Expenses.html"
              >
                <i class="fa-solid fa-money-check-dollar"></i>
                Financial Expenses
              </a>
            </li>
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Travel.html"
              >
                <i class="fa-solid fa-plane"></i>
                Travel
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-1">
          <ul class="list-group list-group-flush fs-6">
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Food.html"
              >
                <i class="fa-solid fa-pizza-slice"></i>
                Food
              </a>
            </li>
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Entertainment.html"
              >
                <i class="fa-solid fa-film"></i>
                Entertainment
              </a>
            </li>
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Education.html"
              >
                <i class="fa-solid fa-graduation-cap"></i>
                Education
              </a>
            </li>
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Transportation.html"
              >
                <i class="fa-solid fa-car"></i>
                Transportation
              </a>
            </li>
            <li class="list-group-item border-bottom py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Pet-Expenses.html"
              >
                <i class="fa-solid fa-dog"></i>
                Pet Expenses
              </a>
            </li>
          </ul>
        </div>
        </div>
    `;
  }
}

customElements.define("import-categories", Categories);

class Form extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="row mb-4">
        <div class="col-md-8 mx-auto">
          <form id="expenseForm" autocomplete="off">
            <div class="form-group mb-3">
              <label for="expenseName" class="mb-1">Expense Name:</label>
              <input
                type="text"
                id="expenseName"
                class="form-control"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="date" class="mb-1">Date:</label>
              <input type="date" id="date" class="form-control" required />
            </div>
            <div class="form-group mb-3">
              <label for="amount" class="mb-1">Amount ($):</label>
              <input type="number" id="amount" class="form-control" required min="1" max="999" />
            </div>
            <!-- Add Expense Button -->
            <div class="d-grid gap-2 mb-4">
              <button type="submit" class="btn btn-primary">Add Expense</button>
            </div>
          </form>
          <!-- Expense List -->
          <ul class="list-group" id="expenseList"></ul>
        </div>
        </div>
    `;
  }
}

customElements.define("import-form", Form);

class About extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- Created By -->
        <h2 class="fs-4 mb-2">Created By</h2>
        <p class="mb-4">@dsvillalobos</p>
        <!-- Version -->
        <h2 class="fs-4 mb-2">Version</h2>
        <p class="mb-4">DS Spendify Version 0.3.4</p>
        <!-- Follow Me -->
        <h2 class="fs-4 mb-2">Follow Me</h2>
        <p class="mb-4">
          <a
            class="text-decoration-none text-dark"
            target="_blank"
            href="https://www.instagram.com/_dsvillalobos_/"
          >
            <i class="fa-brands fa-instagram"></i>
            Instagram
          </a>
          <br />
          <a
            class="text-decoration-none text-dark"
            target="_blank"
            href="https://twitter.com/_dsvillalobos_"
          >
            <i class="fa-brands fa-twitter"></i>
            Twitter
          </a>
          <br />
          <a
            class="text-decoration-none text-dark"
            target="_blank"
            href="https://github.com/dsvillalobos"
          >
            <i class="fa-brands fa-github"></i>
            GitHub
          </a>
        </p>
        <!-- Need Help? -->
        <h2 class="fs-4 mb-2">Need Help?</h2>
        <p class="mb-4">
          <a
            class="text-dark"
            target="_blank"
            href="https://ds-spendify-home.netlify.app/help-center.html"
            >You can always go to the Help Center.</a
          >
        </p>
        <!-- Copyright -->
        <h2 class="fs-4 mb-2">Copyright</h2>
        <p class="mb-4">© dsvillalobos 2023</p>
    `;
  }
}

customElements.define("import-about", About);

class Overview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="text-center mb-4">
          <div class="row">
            <div class="col">
              <h3 class="fs-5">Income</h3>
              <span id="incomeSpan" class="fst-italic"></span>
            </div>
            <div class="col">
              <h3 class="fs-5">Expenses</h3>
              <span id="expensesSpan" class="fst-italic text-danger"></span>
            </div>
            <div class="col">
              <h3 class="fs-5">Balance</h3>
              <span id="balanceSpan" class="fst-italic text-success"></span>
              <br>
              <span id="balanceSpanMsg" class="fst-italic text-danger"></span>
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define("import-overview", Overview);

class profileFormClass extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="row mb-4">
          <div class="col-md-8 mx-auto">
            <!-- Username -->
            <form autocomplete="off">
              <div class="form-group mb-3">
                <label class="mb-1" for="username">Username:</label>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    id="username"
                    required
                    placeholder="E.g. Lucas Anderson"
                  />
                  <!-- Save Button for Username -->
                  <button class="btn btn-primary" onclick="saveUsername()">
                    Save
                  </button>
                </div>
              </div>
            </form>
            <!-- Income -->
            <form autocomplete="off">
              <div class="form-group mb-3">
                <label class="mb-1" for="income">Income ($):</label>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="number"
                    id="income"
                    required
                    min="1"
                    placeholder="E.g. 1200"
                  />
                  <!-- Save Button for Income -->
                  <button class="btn btn-primary" onclick="saveIncome()">
                    Save
                  </button>
                </div>
              </div>
            </form>
            <!-- Saving Target -->
            <form autocomplete="off">
              <div class="form-group mb-3">
                <label class="mb-1" for="savingTarget">Saving Target ($):</label>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="number"
                    id="savingTarget"
                    required
                    min="0"
                    placeholder="E.g. 200"
                  />
                  <!-- Save Button for Saving Target-->
                  <button class="btn btn-primary" onclick="saveSavingTarget()">
                    Save
                  </button>
                </div>
              </div>
            </form>
            <hr />
            <!-- Delete All Expenses -->
            <div class="d-grid gap-2 mb-3">
              <button
                class="btn btn-danger"
                id="deleteAllExpenses"
                onclick="deleteAllExpenses()"
              >
                Delete All Expenses
              </button>
              <span class="fst-italic">
                This will delete all your expenses; you might want to export them
                as an image on the "Stats" page.
              </span>
            </div>
            <!-- Alert -->
            <div class="alert alert-success" id="alert" style="display: none">
              Success - DS Spendify has Saved your <span id="alertSpan"></span> Correctly!
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define("import-profile-form", profileFormClass);

class statsTable extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <table class="table mb-4">
          <thead>
            <tr>
              <th class="table-dark">Category</th>
              <th class="table-dark">Expenses ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i class="fa-solid fa-money-bill-wave"></i>
                Basic Expenses
              </td>
              <td id="basicExpensesCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-bag-shopping"></i>
                Shopping
              </td>
              <td id="shoppingCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-heart-pulse"></i>
                Health
              </td>
              <td id="healthCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-money-check-dollar"></i>
                Financial Expenses
              </td>
              <td id="financialExpensesCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-plane"></i>
                Travel
              </td>
              <td id="travelCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-pizza-slice"></i>
                Food
              </td>
              <td id="foodCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-film"></i>
                Entertainment
              </td>
              <td id="entertainmentCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-graduation-cap"></i>
                Education
              </td>
              <td id="educationCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-car"></i>
                Transportation
              </td>
              <td id="transportationCell" class="fst-italic"></td>
            </tr>
            <tr>
              <td>
                <i class="fa-solid fa-dog"></i>
                Pet Expenses
              </td>
              <td id="petExpensesCell" class="fst-italic"></td>
            </tr>
          </tbody>
        </table>
    `;
  }
}

customElements.define("import-stats-table", statsTable);

class Charts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="text-center row">
          <!-- Bar Chart-->
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h3 class="fs-5 mb-3">Bar Chart</h3>
            <canvas class="mb-4" id="barChart" width="175" height="175"></canvas>
          </div>
          <!-- Pie Chart -->
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h3 class="fs-5 mb-3">Pie Chart</h3>
            <canvas class="mb-4" id="pieChart" width="175" height="175"></canvas>
          </div>
        </div>
    `;
  }
}

customElements.define("import-charts", Charts);

class dataAnalysis extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <p class="fst-italic mb-3">
          DS Spendify has done a thorough analysis of your data and is all set to
          give you a detailed breakdown:
        </p>
        <!-- Data Analysis Table -->
        <table class="table mb-4">
          <thead>
            <tr>
              <td class="table-dark">Metrics</td>
              <td class="table-dark">Results</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Income</td>
              <td class="fst-italic" id="incomeCell"></td>
            </tr>
            <tr>
              <td>Expenses</td>
              <td class="fst-italic" id="expensesCell"></td>
            </tr>
            <tr>
              <td>Balance</td>
              <td class="fst-italic" id="balanceCell"></td>
            </tr>
            <tr>
              <td>Saving Target</td>
              <td class="fst-italic" id="savingTargetCell"></td>
            </tr>
            <tr>
              <td>Financial Personality</td>
              <td class="fst-italic" id="financialPersonalityCell"></td>
            </tr>
            <tr>
              <td>Most Spent Category</td>
              <td class="fst-italic" id="mostSpentCategoryCell"></td>
            </tr>
            <tr>
              <td>Least Spent Category</td>
              <td class="fst-italic" id="leastSpentCategoryCell"></td>
            </tr>
            <tr>
              <td>Average Expenses per Category</td>
              <td class="fst-italic" id="averageExpensesPerCategoryCell"></td>
            </tr>
            <tr>
              <td>AI Generated Saving Tips</td>
              <td class="fst-italic">
                <li id="savingTip1"></li>
                <li id="savingTip2"></li>
                <li id="savingTip3"></li>
              </td>
            </tr>
          </tbody>
        </table>
    `;
  }
}

customElements.define("import-data-analysis", dataAnalysis);

class Offline extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="container position-absolute top-50 start-50 translate-middle text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="currentColor"
            class="bi bi-wifi-off"
            viewBox="0 0 16 16"
          >
            <path
              d="M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z"
            />
          </svg>
          <h2 class="fw-bold fs-2">Sorry, You're Offline :(</h2>
          <p class="fst-italic">
            DS Spendify will reload when you have an Internet connection.
          </p>
        </div>
    `;
  }
}

customElements.define("import-offline", Offline);
