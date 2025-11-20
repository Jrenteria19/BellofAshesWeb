import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import logo from '/logo.png';

const SplashScreen = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500); // Match CSS transition time
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={`splash-screen ${isVisible ? '' : 'hidden'}`}>
      <img src={logo} alt="Logo" className="splash-logo" />
      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
