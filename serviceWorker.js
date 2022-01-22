const Muslim = "Muslim";
const assets = [
  "https://ahmedessam252.github.io/Muslim/",
  "https://ahmedessam252.github.io/Muslim/index.html",
  "https://ahmedessam252.github.io/Muslim/css/style.css",
  "https://ahmedessam252.github.io/Muslim/js/app.js",
  "https://ahmedessam252.github.io/Muslim/videos/video.mp4",
  "https://ahmedessam252.github.io/Muslim/videos/video2.mp4",
  "https://ahmedessam252.github.io/Muslim/videos/video3.mp4",
  "https://ahmedessam252.github.io/Muslim/img/muslim-logo2-0١.png",
  "https://ahmedessam252.github.io/Muslim/img/muslim-logo1-0١.png",
  "https://ahmedessam252.github.io/Muslim/img/Sunna.webp",
  "https://ahmedessam252.github.io/Muslim/img/quran.png",
  "https://ahmedessam252.github.io/Muslim/img/مصلية.svg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(Muslim).then(cache => {
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
