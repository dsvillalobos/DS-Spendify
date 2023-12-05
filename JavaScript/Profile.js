//JavaScript

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", saveProfile);

let profile;

if (localStorage.getItem("profile") === null) {
  profile = [];
} else {
  profile = JSON.parse(localStorage.getItem("profile"));
}

class Profile {
  constructor(username, savingTarget) {
    this.username = username;
    this.savingTarget = savingTarget;
  }
}

function saveProfile() {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const savingTarget = document.getElementById("savingTarget").value.trim();

  const newProfile = new Profile(username, savingTarget);

  profile.splice(0);
  profile.push(newProfile);

  localStorage.setItem("profile", JSON.stringify(profile));

  profileForm.reset();

  let alertElement = document.createElement("div");
  alertElement.classList.add(
    "alert",
    "alert-success",
    "alert-dismissible",
    "fade",
    "show",
    "mt-3"
  );
  alertElement.innerHTML = `
  <strong>Success!</strong> DS Spendify has saved your Profile.
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
  `;

  profileForm.appendChild(alertElement);
}
