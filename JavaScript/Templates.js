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
                <span class="navbar-toggler-icon"></span>
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
          <ul class="list-group fs-6">
            <li class="list-group-item py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Basic-Expenses.html"
              >
                <i class="fa-solid fa-money-bill-wave"></i>
                Basic Expenses
              </a>
            </li>
            <li class="list-group-item py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Supermarket.html"
              >
                <i class="fa-solid fa-cart-shopping"></i>
                Supermarket
              </a>
            </li>
            <li class="list-group-item py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Health.html"
              >
                <i class="fa-solid fa-heart-pulse"></i>
                Health
              </a>
            </li>
            <li class="list-group-item py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Financial-Expenses.html"
              >
                <i class="fa-solid fa-money-check-dollar"></i>
                Financial Expenses
              </a>
            </li>
            <li class="list-group-item py-3">
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
          <ul class="list-group fs-6">
            <li class="list-group-item py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Food.html"
              >
                <i class="fa-solid fa-pizza-slice"></i>
                Food
              </a>
            </li>
            <li class="list-group-item py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Entertainment.html"
              >
                <i class="fa-solid fa-film"></i>
                Entertainment
              </a>
            </li>
            <li class="list-group-item py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Education.html"
              >
                <i class="fa-solid fa-graduation-cap"></i>
                Education
              </a>
            </li>
            <li class="list-group-item py-3">
              <a
                class="text-decoration-none text-dark"
                href="/Category/Transportation.html"
              >
                <i class="fa-solid fa-car"></i>
                Transportation
              </a>
            </li>
            <li class="list-group-item py-3">
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
              <input type="number" id="amount" class="form-control" required />
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
        <!-- Copyright -->
        <h2 class="fs-4 mb-2">Copyright</h2>
        <p class="mb-4">© dsvillalobos</p>
        <!-- Version -->
        <h2 class="fs-4 mb-2">Version</h2>
        <p class="mb-4">DS Spendify Version 0.1.4</p>
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
            <form id="profileForm" autocomplete="off">
              <!-- Username -->
              <div class="form-group mb-3">
                <label for="username" class="mb-1">Username:</label>
                <input type="text" id="username" class="form-control" required />
              </div>
              <!-- Income -->
              <div class="form-group mb-3">
                <label for="income" class="mb-1">Income ($):</label>
                <input type="number" id="income" class="form-control" required />
              </div>
              <!-- Saving Target -->
              <div class="form-group mb-3">
                <label for="savingTarget" class="mb-1">Saving Target ($):</label>
                <input
                  type="number"
                  id="savingTarget"
                  class="form-control"
                  required
                />
              </div>
              <!-- Save Button -->
              <div class="d-grid gap-2 mb-4">
                <button type="submit" class="btn btn-primary" id="save-button">
                  Save Profile
                </button>
              </div>
            </form>
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
                <i class="fa-solid fa-cart-shopping"></i>
                Supermarket
              </td>
              <td id="supermarketCell" class="fst-italic"></td>
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
