// src/components/AlertComponent.jsx
import React, { useEffect, useState } from 'react';

const AlertComponent = () => {
  const [weatherNews, setWeatherNews] = useState([]);

  useEffect(() => {
    generateStaticWeatherNews();
  }, []);

  const generateStaticWeatherNews = () => {
    // Setting static weather news
    setWeatherNews([
      'News 1: Moderate Rain Expected',
      'News 2: Wind Speed High',
      'News 3: No Major Weather Alerts'
    ]);
  };

  return (
    <div className="max-w-md bg-white p-6 rounded-md shadow-lg w-1/2 grid grid-cols-1 gap-4">
      <h1 className="text-2xl font-semibold mb-4 text-center text-black">Weather Alerts</h1>
      {weatherNews.map((news, index) => (
        <div key={index} className="border rounded-md p-4 bg-yellow-200 hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
          <span className="text-gray-800 font-medium">{news}</span>
        </div>
      ))}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Helpline Numbers</h2>
        <div className="grid grid-cols-1 gap-2 text-black">
          <div className="p-4 bg-blue-100 rounded-md shadow">
            <strong>Command Center:</strong> 123-456-7890
          </div>
          <div className="p-4 bg-red-100 rounded-md shadow">
            <strong>Local Relief Shelter:</strong> 234-567-8901
          </div>
          <div className="p-4 bg-red-100 rounded-md shadow">
            <strong>Fire Safety:</strong> 345-678-9012
          </div>
          <div className="p-4 bg-red-100 rounded-md shadow">
            <strong>NDRF:</strong> 456-789-0123
          </div>
          <div className="p-4 bg-red-100 rounded-md shadow">
            <strong>SDRF:</strong> 567-890-1234
          </div>
          <div className="p-4 bg-red-100 rounded-md shadow">
            <strong>Hospital:</strong> 678-901-2345
          </div>
          <div className="p-4 bg-red-100 rounded-md shadow">
            <strong>Ambulance:</strong> 789-012-3456
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertComponent;
