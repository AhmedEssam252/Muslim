const muslim = "muslim "
const assets = [
  "/",
  "index.html",
  "css/style.css",
  "js/app.js",
  // "https://www.youtube.com/embed/4GCH7_Gj0ro",
  // "https://www.youtube.com/embed/NxSU6fcQmPs",
  "videos/video.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4",
  "img/muslim-logo2-0١.png",
  "img/muslim-logo1-0١.png",
  "img/Sunna.webp",
  "img/quran.png",
  "img/مصلية.svg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(muslim).then(cache => {
      cache.addAll(assets)
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    );
  });