import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import Layout from './components/Layout';
import { messaging } from './firebase-config'; // Importamos la instancia de messaging
import Home from './pages/Home';
import Gameplay from './pages/Gameplay';
import Characters from './pages/Characters';
import Achievements from './pages/Achievements';
import Story from './pages/Story';

// Push Notification Logic
const requestNotificationPermission = async (setIsPushReady) => {
  if (!('Notification' in window) || !('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.warn('Push notifications are not supported in this browser.');
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {


      // --- IMPORTANTE ---
      // Debes obtener esta VAPID key desde tu consola de Firebase:
      // Configuración del proyecto > Cloud Messaging > Certificados push web > Generar par de claves
      const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY; // REEMPLAZA ESTA CLAVE

      const fcmToken = await getToken(messaging, {
        vapidKey,
        serviceWorkerRegistration: await navigator.serviceWorker.ready,
      });

      if (fcmToken) {

        console.log('FCM Token:', fcmToken);
        setIsPushReady(true);
      } else {
        console.error('FCM Token not available. Ensure VAPID key is correct and service worker is registered.');
        console.log('No registration token available. Request permission to generate one.');
      }
    } else {
      console.warn('Notification permission denied.');
    }
  } catch (error) {
    console.error('An error occurred while requesting notification permission. ', error);
  }
};

function App() {
  const [isPushReady, setIsPushReady] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    requestNotificationPermission(setIsPushReady);

    const handleBeforeInstallPrompt = (event) => {
      // Previene que el mini-infobar aparezca en Chrome
      event.preventDefault();
      // Guarda el evento para que pueda ser disparado más tarde.
      setInstallPrompt(event);

    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home installPrompt={installPrompt} />} />
        <Route path="jugabilidad" element={<Gameplay />} />
        <Route path="personajes" element={<Characters />} />
        <Route path="logros" element={<Achievements />} />
        <Route path="historia" element={<Story />} />
      </Route>
    </Routes>
  );
}

export default App;
