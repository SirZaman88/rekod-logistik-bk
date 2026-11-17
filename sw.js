/* Service worker — Rekod Logistik BK (kulit PWA).
 * Menyimpan fail kulit sahaja (halaman, ikon, manifest) supaya aplikasi boleh dibuka
 * dan memaparkan mesej mesra jika tiada internet. Data sistem tidak disimpan dalam peranti:
 * semua rekod tetap dibaca terus dari Google Apps Script. */
const CACHE = 'logistik-bk-v2';
const FAIL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png',
  './icons/icon-maskable-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FAIL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return; // sistem Google tidak disentuh
  if (e.request.mode === 'navigate') {
    // Halaman: cuba rangkaian dahulu (kemas kini terkini), guna simpanan jika luar talian
    e.respondWith(fetch(e.request).then(r => {
      const salin = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', salin)); return r;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
