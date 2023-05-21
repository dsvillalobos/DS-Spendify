//JavaScript

const body = document.getElementsByTagName("body")[0];

if (navigator.onLine) {
  console.log("You're Online :)");
}

window.addEventListener("online", function () {
  this.location.reload();
});

window.addEventListener("offline", function () {
  body.innerHTML = "<import-offline></import-offline>";
});
