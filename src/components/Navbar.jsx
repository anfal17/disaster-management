import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    const token = Cookies.get('token');
    setIsAuthenticated(!token); // Fix: update authentication state based on token presence
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
      Cookies.remove('token'); 
      setIsAuthenticated(false); 
      navigate('/'); 
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Disaster Management</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/guides" className="mr-5 hover:text-gray-900">Guides</Link>
          <Link to="/helpline" className="mr-5 hover:text-gray-900">Helpline</Link>
          <Link to="/report" className="mr-5 hover:text-gray-900">Report</Link>
          <Link to="/missing" className="mr-5 hover:text-gray-900">Missing</Link>
        </nav>
        
        {isAuthenticated ? (
          <div className="flex items-center mt-4 md:mt-0">
            <Link 
              to="/profile"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mr-2 focus:outline-none hover:bg-gray-200 rounded text-base">
              Profile
            </Link>
            <button 
              onClick={handleLogout} 
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
              Logout
            </button>
          </div>
        ) : (
          <Link 
            to="/login" 
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
