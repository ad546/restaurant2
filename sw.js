var cacheName = 'v2';
var cacheFiles = [
    '/',
    'index.html',
    'restaurant.html',
    'css/styles.css',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'js/dbhelper.js',
    'js/main.js',
    'js/registration.js',
    'js/restaurant_info.js'
];

self.addEventListener('install', function(event) {
    console.log("[Service Worker] Installed");

    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[Service Worker] Caching cacheFiles");
            return cache.addAll(cacheFiles);
        })
    )
})

self.addEventListener('activate', function(event) {
    console.log("[Service Worker] Activated");

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {
                if (thisCacheName !== cacheName) {
                    console.log("[Service Worker} Removing Files from " + thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
})

self.addEventListener('fetch', function(event) {
    console.log("[Service Worker] Fetching", event.request.url);
})