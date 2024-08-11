import React, { useState } from 'react';
import { ref, push } from "firebase/database";
import { db } from '../firebaseConfig';

const MissingPersonReport = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [locationLastSeen, setLocationLastSeen] = useState('');
  const [picture, setPicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be pushed into Firebase
    const reportData = {
      name: name || null,
      description: description || null,
      locationLastSeen: locationLastSeen || null,
      picture: picture ? URL.createObjectURL(picture) : null,
    };

    // Push the data to Firebase Realtime Database
    try {
      await push(ref(db, 'missingPersons'), reportData);
      alert('Missing person report submitted successfully');
    } catch (error) {
      console.error('Error submitting missing person report', error);
    }

    // Clear form fields after submission
    setName('');
    setDescription('');
    setLocationLastSeen('');
    setPicture(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Report a Missing Person</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md text-black" 
            placeholder="Enter the person's name" 
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md text-black" 
            placeholder="Enter a description of the person"
            rows="4"
          />
        </div>
        <div>
          <label className="block text-gray-700">Location Last Seen</label>
          <input 
            type="text" 
            value={locationLastSeen} 
            onChange={(e) => setLocationLastSeen(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md text-black" 
            placeholder="Enter the location where the person was last seen" 
          />
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

export default MissingPersonReport;
