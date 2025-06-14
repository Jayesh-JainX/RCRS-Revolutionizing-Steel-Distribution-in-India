// public/service-worker.js
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch event for ", event.request.url);
  // You can add custom caching logic here
});
