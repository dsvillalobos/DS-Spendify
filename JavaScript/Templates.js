//JavaScript

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="mb-4 sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="fs-2 fw-bold navbar-brand scale-in-center" href="/index.html">
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
                href="/Category/Taxes-and-Fees.html"
              >
                <i class="fa-solid fa-money-check-dollar"></i>
                Taxes and Fees
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
