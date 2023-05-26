//JavaScript

const body = document.getElementsByTagName("body")[0];

window.addEventListener("load", function () {
  function updateOnlineStatus() {
    if (navigator.onLine) {
      console.log("You're Online :)");
    } else {
      body.innerHTML = "<import-offline></import-offline>";
    }
  }

  updateOnlineStatus();

  this.window.addEventListener("online", updateOnlineStatus);
  this.window.addEventListener("offline", updateOnlineStatus);
});

window.addEventListener("online", function () {
  this.location.reload();
});

window.addEventListener("offline", function () {
  body.innerHTML = "<import-offline></import-offline>";
});
