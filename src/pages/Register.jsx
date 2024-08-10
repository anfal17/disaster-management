import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
      <h1 href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
           Disaster Management
        </h1>
        <div className="w-full bg-white rounded-lg shadow sm:max-w-xl"> {/* Changed from sm:max-w-md to sm:max-w-xl */}
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                  placeholder="name@company.com" 
                  required 
                />
              </div>
              <div>
                <label 
                  htmlFor="phone" 
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your phone number
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                  placeholder="+1-234-567-890" 
                  required 
                />
              </div>
              <div>
                <label 
                  htmlFor="password" 
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                  required 
                />
              </div>
              <div>
                <label 
                  htmlFor="confirm-password" 
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input 
                  type="password" 
                  name="confirm-password" 
                  id="confirm-password" 
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                  required 
                />
              </div>
              <div>
                <label 
                  htmlFor="location" 
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Location
                </label>
                <input 
                  type="text" 
                  name="location" 
                  id="location" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                  placeholder="Your City" 
                  required 
                />
              </div>
              <div>
                <label 
                  htmlFor="nearest-relief-center" 
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nearest local relief center
                </label>
                <select 
                  id="nearest-relief-center" 
                  name="nearest-relief-center" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option>North 1</option>
                  <option>South 2</option>
                  <option>East 3</option>
                  <option>West 4</option>
                </select>
              </div>
              <div>
                <label 
                  htmlFor="picture" 
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Profile picture
                </label>
                <input 
                  type="file" 
                  name="picture" 
                  id="picture" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <button 
                type="submit" 
                className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Create Profile
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
