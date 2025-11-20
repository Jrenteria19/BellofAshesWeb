import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import { LanguageProvider } from './components/i18n.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <SplashScreen isVisible={showSplash} />
      {!showSplash && (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </BrowserRouter>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
