const CACHE_NAME = 'fitness-app-v2';
const ASSETS = [
    './',
    './index.html',
    './src/css/style.css',
    './src/js/app.js',
    './src/js/data.js',
    './src/images/icon.png',
    './src/images/exercises/bench_press.png',
    './src/images/exercises/dumbbell_press.png',
    './src/images/exercises/dumbbell_flyes.png',
    './src/images/exercises/dips.png',
    './src/images/exercises/tricep_pushdown.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            );
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
