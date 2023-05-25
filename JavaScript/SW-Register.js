//JavaScript

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("Service-Worker.js")
    .then((registration) => {
      console.log("Service Worker Registered :)");
    })
    .catch((error) => {
      console.log("Service Worker Registration has Failed :(");
    });
}
