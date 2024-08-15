import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile', { withCredentials: true });
        console.log(response.data)
        setUser(response.data);
        setIsAvailable(response.data.isAvailable);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleToggleAvailability = async () => {
    try {
      await axios.put('http://localhost:5000/update', { isAvailable: !isAvailable }, { withCredentials: true });
      setIsAvailable(prev => !prev);
    } catch (error) {
      console.error('Error updating availability:', error);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(prev => !prev);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Volunteer Profile Details</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <p className="text-gray-900">{user.name}</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <p className="text-gray-900">{user.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <p className="text-gray-900">{user.phone}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <p className="text-gray-900">{user.location}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Sublocation:</label>
          <p className="text-gray-900">{user.sublocation}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Availability:</label>
          <div className="flex items-center">
            <span className={`inline-block w-4 h-4 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'} mr-2`}></span>
            <p className="text-gray-900">{isAvailable ? 'Available' : 'Not Available'}</p>
            <button 
              onClick={handleToggleAvailability} 
              className="ml-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none">
              Toggle Availability
            </button>
          </div>
        </div>

        <button 
          onClick={handleEditProfile} 
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none">
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
