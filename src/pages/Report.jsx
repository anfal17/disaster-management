import React, { useState } from 'react';
import { ref, push } from "firebase/database";
import { db } from '../firebaseConfig';

const Report = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [picture, setPicture] = useState(null);
  const [geoLocation, setGeoLocation] = useState({});

  // Get user location using Geolocation API
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.error('Error getting location', error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be pushed into Firebase
    const reportData = {
      name: name || null,
      contact: contact || null,
      location: location || null,
      geoLocation: geoLocation.latitude && geoLocation.longitude ? {
        latitude: geoLocation.latitude,
        longitude: geoLocation.longitude
      } : null,
      picture: picture ? URL.createObjectURL(picture) : null,
    };

    // Push the data to Firebase Realtime Database
    try {
      await push(ref(db, 'reports'), reportData);
      alert('Report submitted successfully');
    } catch (error) {
      console.error('Error submitting report', error);
    }

    // Clear form fields after submission
    setName('');
    setContact('');
    setLocation('');
    setPicture(null);
    setGeoLocation({});
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Submit a Report</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md text-black" 
            placeholder="Enter your name" 
          />
        </div>
        <div>
          <label className="block text-gray-700">Contact Number</label>
          <input 
            type="text" 
            value={contact} 
            onChange={(e) => setContact(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md text-black" 
            placeholder="Enter your contact number" 
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md text-black" 
            placeholder="Enter your location" 
          />
          <button 
            type="button" 
            onClick={getLocation} 
            className="mt-2 text-blue-500"
          >
            Use My Current Location
          </button>
          {geoLocation.latitude && geoLocation.longitude && (
            <p className="text-sm text-gray-500 mt-2">
              Latitude: {geoLocation.latitude}, Longitude: {geoLocation.longitude}
            </p>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Picture</label>
          <input 
            type="file" 
            onChange={(e) => setPicture(e.target.files[0])} 
            className="w-full px-4 py-2 border rounded-md text-black" 
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default Report;
