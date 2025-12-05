const CACHE_NAME = 'fitness-app-v1';
const ASSETS = [
    './',
    './index.html',
    './src/css/style.css',
    './src/js/app.js',
    './src/js/data.js',
    './src/images/icon.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
