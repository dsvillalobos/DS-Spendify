//JavaScript

//DS Spendify Version 0.3.3

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("Static").then((cache) => {
      return cache.addAll([
        //Cache the Index Page
        "/",
        "/index.html",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js",
        "/CSS/styles.css",
        "/Images/Icons/Icon.svg",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        "/Images/Icons/Icon-192.png",
        "/manifest.json",
        "/JavaScript/Templates.js",
        "/JavaScript/Index.js",
        "/JavaScript/Offline.js",
        "/JavaScript/SW-Register.js",
        "/CSS/Category.css",

        //iOS Splash Screens
        "/Images/Splash-Screen/iPhone_14_Pro_Max_portrait.png",
        "/Images/Splash-Screen/iPhone_14_Pro_portrait.png",
        "/Images/Splash-Screen/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
        "/Images/Splash-Screen/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
        "/Images/Splash-Screen/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
        "/Images/Splash-Screen/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
        "/Images/Splash-Screen/iPhone_11__iPhone_XR_portrait.png",
        "/Images/Splash-Screen/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
        "/Images/Splash-Screen/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
        "/Images/Splash-Screen/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
        "/Images/Splash-Screen/12.9__iPad_Pro_portrait.png",
        "/Images/Splash-Screen/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
        "/Images/Splash-Screen/10.9__iPad_Air_portrait.png",
        "/Images/Splash-Screen/10.5__iPad_Air_portrait.png",
        "/Images/Splash-Screen/10.2__iPad_portrait.png",
        "/Images/Splash-Screen/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
        "/Images/Splash-Screen/8.3__iPad_Mini_portrait.png",

        //JavaScript Files
        "/JavaScript/Profile.js",
        "/JavaScript/Stats.js",

        //JavaScript Categories
        "/JavaScript/Category/Basic-Expenses.js",
        "/JavaScript/Category/Shopping.js",
        "/JavaScript/Category/Health.js",
        "/JavaScript/Category/Financial-Expenses.js",
        "/JavaScript/Category/Travel.js",
        "/JavaScript/Category/Food.js",
        "/JavaScript/Category/Entertainment.js",
        "/JavaScript/Category/Education.js",
        "/JavaScript/Category/Transportation.js",
        "/JavaScript/Category/Pet-Expenses.js",

        //Chart.JS
        "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js",
        //HTML2Canvas
        "https://html2canvas.hertzen.com/dist/html2canvas.min.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
