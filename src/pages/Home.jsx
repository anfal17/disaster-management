// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
// import WeatherData from '../components/WeatherData';
// import AlertsSection from '../components/AlertsSection';
// import HelplineNumbers from '../components/HelplineNumbers';
import WeatherComponent from '../components/WeatherDetails';
import AlertComponent from '../components/AlertComponent';

const HomePage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <WeatherComponent />
      </div>
      <div className="w-1/2">
        <AlertComponent />
      </div>
    </div>
  );
};

export default HomePage;
