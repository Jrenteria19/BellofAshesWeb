const CACHE_NAME = 'bell-of-ashes-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/arieth.png',
  '/axelin.png',
  '/solonne.png'
];

// Importa los scripts de Firebase.
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// Configuración de Firebase (debe coincidir con tu app)
const firebaseConfig = {
  apiKey: "AIzaSyCJZkasBPc3FpvheStudJssugZlum6CgbI",
  authDomain: "bellofashesapp2.firebaseapp.com",
  projectId: "bellofashesapp2",
  storageBucket: "bellofashesapp2.firebasestorage.app",
  messagingSenderId: "363393966145",
  appId: "1:363393966145:web:caca785ae962073bee66c0",
  measurementId: "G-WZ1NSCKJP7"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {

        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Ignore non-GET requests
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // For navigation requests (HTML pages), use a network-first strategy.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If the fetch is successful, cache it and return it.
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          // If the fetch fails (offline), try to match the request in the cache, or fall back to the main page.
          return caches.match(event.request) || caches.match('/');
        })
    );
    return;
  }

  // For other requests (CSS, JS, images), use a stale-while-revalidate strategy.
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        // Fetch from network in the background to update the cache.
        const fetchPromise = fetch(event.request).then(networkResponse => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });

        // Return the cached response if it exists, otherwise wait for the network.
        return response || fetchPromise;
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/icons/android-chrome-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/') // Open the main page when notification is clicked
  );
});
