import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [isLocationError, setIsLocationError] = useState(false);
  const [fetchedCity, setFetchedCity] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const storedWeather = localStorage.getItem('weatherData');
      if (storedWeather) {
        const weatherData = JSON.parse(storedWeather);
        setWeather(weatherData);
        setFetchedCity(weatherData.name);
        checkAlerts(weatherData);
        return;
      }

      if (!navigator.geolocation) {
        setError('Geolocation is not supported by this browser.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = 'df1286f2eaf8ed819d1fc86a052e5fe4';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
          try {
            const response = await axios.get(apiUrl);
            const data = response.data;
            setWeather(data);
            setFetchedCity('Current Location');
            localStorage.setItem('weatherData', JSON.stringify(data));
            setError(null);
            checkAlerts(data);
          } catch (error) {
            setError('Failed to fetch weather data.');
          }
        },
        (error) => {
          setIsLocationError(true);
          setError('Failed to retrieve your location.');
        }
      );
    };

    fetchWeatherData();
  }, []);

  const handleCitySearch = async (e) => {
    e.preventDefault();
    if (!city) {
      setError('Please enter a city name.');
      return;
    }
    fetchWeatherByCity(city);
  };

  const fetchWeatherByCity = async (city) => {
    const apiKey = 'df1286f2eaf8ed819d1fc86a052e5fe4';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setWeather(data);
      setFetchedCity(city);
      localStorage.setItem('weatherData', JSON.stringify(data));
      setError(null);
      checkAlerts(data);
    } catch (error) {
      setError('Failed to fetch weather data.');
      setWeather(null);
    }
  };

  const checkAlerts = (data) => {
    let message = '';
    if (data.main.temp > 30) {
      message += 'Alert: High Temperature! ';
    }
    if (data.wind.speed > 15) {
      message += 'Alert: Heavy Wind! ';
    }
    if (data.rain && data.rain['1h'] > 10) {
      message += 'Alert: Heavy Rainfall! ';
    }
    if (!message) {
      message = 'No Weather Alerts';
    }
    setAlertMessage(message);
  };

  return (
    <div className="bg-gradient-to-br  min-h-screen flex justify-center items-center">
      <div className="max-w-md bg-white p-8 rounded-md shadow-lg w-full h-auto">
        <h1 className="text-3xl font-semibold mb-6 text-green-500 text-center">
          Weather App {fetchedCity && `- ${fetchedCity}`} 
          {alertMessage && <span className={`text-red-600`}> - {alertMessage}</span>}
        </h1>
        <form onSubmit={handleCitySearch} className="mb-6 relative">
          <label htmlFor="city" className="block text-blue-700 font-medium mb-2">
            Enter City:
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 px-4 py-2 block w-64 h-12 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-black"
              placeholder="Enter city name"
            />
            <button
              type="submit"
              className="ml-1 bg-blue-500 text-white py-2 px-4 h-12 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Get Weather
            </button>
          </div>
        </form>
        <div id="weather-info" className="grid grid-cols-2 gap-4">
          {weather && (
            <>
              <div
                className={`border rounded-md p-4 ${
                  weather.main.temp > 30 ? 'bg-red-200' : 'bg-yellow-200'
                } hover:bg-yellow-300 transition-colors duration-300 ease-in-out`}
              >
                <span className="text-gray-900">
                  <i className="fas fa-thermometer-half text-red-500"></i>
                  Temperature:
                </span>
                <span className="text-gray-800 font-medium">
                  {weather.main.temp}°C
                </span>
              </div>
              <div
                className={`border rounded-md p-4 ${
                  weather.wind.speed > 15 ? 'bg-red-200' : 'bg-purple-200'
                } hover:bg-purple-300 transition-colors duration-300 ease-in-out`}
              >
                <span className="text-gray-900">
                  <i className="fas fa-wind text-yellow-500"></i>
                  Wind Speed:
                </span>
                <span className="text-gray-800 font-medium">
                  {weather.wind.speed} km/h
                </span>
              </div>
              <div
                className={`border rounded-md p-4 ${
                  (weather.rain && weather.rain['1h'] > 10) ? 'bg-red-200' : 'bg-pink-200'
                } hover:bg-pink-300 transition-colors duration-300 ease-in-out`}
              >
                <span className="text-gray-900">
                  <i className="fas fa-tint text-green-500"></i>
                  Rainfall:
                </span>
                <span className="text-gray-800 font-medium">
                  {weather.rain ? `${weather.rain['1h']} mm` : '0 mm'}
                </span>
              </div>
              <div className="border rounded-md p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ease-in-out">
                <span className="text-gray-900">
                  <i className="fas fa-wave-square text-blue-400"></i>
                  Seismic Waves:
                </span>
                <span className="text-gray-800 font-medium">
                  {/* Placeholder for seismic waves data */}
                  0.0
                </span>
              </div>
            </>
          )}
          {error && (
            <div className="text-red-500 text-center">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
