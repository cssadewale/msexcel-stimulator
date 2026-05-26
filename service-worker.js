/* MS Excel Stimulator service worker | Branding: Adewale Samson Adeagbo | DataTech Builder | Data Scientist | Educator | https://cssadewale.pages.dev | buildingmyictcareer@gmail.com | 2348100866322, 2348094481488 */
const CACHE_NAME = 'ms-excel-stimulator-free-v1';
const ASSETS = [
  './',
  './index.html',
  './DataSheet-Pro-v3.html',
  './manifest.json',
  './xlsx.full.min.js',
  './service-worker.js',
  './brand-photo.jpg',
  './brand-headshot-pro.png',
  './brand-logo-transparent-optimized.png',
  './favicon-16.png',
  './favicon-32.png',
  './apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './README.md',
  './DEPLOYMENT.md',
  './USER_GUIDE.md',
  './CHANGELOG.md'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(network => {
        const clone = network.clone();
        if (event.request.url.startsWith(self.location.origin)) {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return network;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
