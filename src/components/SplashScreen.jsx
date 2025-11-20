import React from 'react';
import './SplashScreen.css';
import logo from '/logo.png';

const SplashScreen = ({ isVisible }) => {
  return (
    <div className={`splash-screen ${isVisible ? '' : 'hidden'}`}>
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
