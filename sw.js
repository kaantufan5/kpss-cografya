/* KPSS KFT — Service Worker (çevrimdışı önbellek)
   İçerik güncellendiğinde CACHE adındaki sürümü artır (v1 -> v2) ki
   kullanıcıların eski sürümü silinip yenisi yüklensin. */
const CACHE = "kpss-arena-v26";
const ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./data/units.js",
  "./data/turkiye-harita.js",
  "./data/tarih.js",
  "./data/cografya.js",
  "./data/vatandaslik.js",
  "./data/matematik.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// cache-first: önce önbellek, yoksa ağ; ağ da yoksa ana sayfaya düş
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) =>
      hit || fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => { try { c.put(e.request, copy); } catch (err) {} });
        return res;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
