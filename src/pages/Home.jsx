// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
// import WeatherData from '../components/WeatherData';
// import AlertsSection from '../components/AlertsSection';
// import HelplineNumbers from '../components/HelplineNumbers';
import WeatherComponent from '../components/WeatherDetails';

const HomePage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <WeatherComponent/>
    </div>
  );
};

export default HomePage;
