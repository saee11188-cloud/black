const CACHE_NAME = 'fitness-app-v3';
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
    // Don't cache YouTube videos
    if (e.request.url.includes('youtube.com') || e.request.url.includes('googlevideo.com')) {
        return;
    }

    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
