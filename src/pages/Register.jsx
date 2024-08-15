import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [nearestReliefCenter, setNearestReliefCenter] = useState('');
  const [picture, setPicture] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    let formData = {
      "name" : name,
      "email" : email,
      "phone" : phone,
      "password" : password,
      "location" : location,
      "sublocation" : "North 1"
    }
    
    // if (picture) formData.append('picture', picture);
    

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log(response.data)
      if (response.status == 201) {
        toast.success('Registration successful! Redirecting to Login...');
        setTimeout(() => {
          window.location.href = '/login'; // Redirect after 2 seconds
        }, 2000);
      } else {
        toast.error('An error occurred during registration.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('An error occurred during registration.');
    }
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Create an account
          </h1>
          <div className="w-full bg-white rounded-lg shadow sm:max-w-xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Your phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="+1-234-567-890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="nearestReliefCenter" className="block mb-2 text-sm font-medium text-gray-900">Nearest Relief Center</label>
                  <select
                    name="nearestReliefCenter"
                    id="nearestReliefCenter"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={nearestReliefCenter}
                    onChange={(e) => setNearestReliefCenter(e.target.value)}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="North 1">North 1</option>
                    <option value="South 2">South 2</option>
                    <option value="East 3">East 3</option>
                    <option value="West 4">West 4</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="picture" className="block mb-2 text-sm font-medium text-gray-900">Profile Picture</label>
                  <input
                    type="file"
                    name="picture"
                    id="picture"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={(e) => setPicture(e.target.files[0])}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;
