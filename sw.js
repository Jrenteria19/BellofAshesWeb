// --- IMPORTE DE FIREBASE ---
// Este script importa y configura Firebase en el Service Worker.
// Es crucial para recibir notificaciones push en segundo plano.
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// --- CONFIGURACIÓN DE FIREBASE ---
// ¡IMPORTANTE! Debes reemplazar esta configuración con la de tu propio proyecto de Firebase.
// Ve a: Configuración del proyecto > General > Tus apps > Configuración de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyCJZkasBPc3FpvheStudJssugZlum6CgbI",
  authDomain: "bellofashesapp2.firebaseapp.com",
  projectId: "bellofashesapp2",
  storageBucket: "bellofashesapp2.firebasestorage.app",
  messagingSenderId: "363393966145",
  appId: "1:363393966145:web:caca785ae962073bee66c0"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


// --- MANEJO DE NOTIFICACIONES EN SEGUNDO PLANO ---
// Este manejador se activa cuando el Service Worker recibe una notificación push
// mientras la aplicación está en segundo plano o cerrada.
messaging.onBackgroundMessage(function(payload) {
  console.log('[sw.js] Received background message ', payload);

  // Extrae el título y las opciones de la notificación del payload.
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/logo.png' // Un ícono por defecto
  };

  // Muestra la notificación al usuario.
  self.registration.showNotification(notificationTitle, notificationOptions);
});


// --- CACHING DEL APP SHELL ---
const CACHE_NAME = 'bell-of-ashes-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierta');
        return cache.addAll(urlsToCache);
      })
  );
});


// --- ESTRATEGIA DE CACHÉ: STALE-WHILE-REVALIDATE ---
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(err => {
          console.warn('Falló el fetch; se devuelve la respuesta de caché si está disponible.', err);
        });

        return response || fetchPromise;
      });
    })
  );
});


// --- LIMPIEZA DE CACHÉS ANTIGUAS ---
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


// --- MANEJO DE CLICS EN NOTIFICACIONES ---
// Este evento se dispara cuando el usuario hace clic en una notificación.
self.addEventListener('notificationclick', function(event) {
  console.log('[sw.js] Notification click Received.', event.notification.data);

  event.notification.close(); // Cierra la notificación

  // Abre la URL especificada o la página principal si no se proporciona ninguna.
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
