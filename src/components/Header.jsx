// src/components/Header.jsx
import React from 'react';
// Assuming you have a logo image in your assets folder
// import Logo from '../assets/logo.svg'; 

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Branding Section */}
          <div className="flex-shrink-0">
            {/* If you have a logo image, use it here */}
            {/* <img className="h-8 w-auto" src={Logo} alt="TherapyMatch" /> */}
            <a href="/" className="text-2xl font-bold text-primary-blue">
              TherapyMatch
            </a>
          </div>
          
          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition duration-150">
              How It Works
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition duration-150">
              About Us
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition duration-150">
              Contact
            </a>
          </nav>

          {/* Action Button (e.g., Login/Signup) */}
          <div className="hidden md:flex items-center">
            {/* Using the standard utility for a simple button */}
            <button 
              className="ml-4 py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 shadow-sm"
            >
              Log In
            </button>
          </div>

          {/* Mobile Menu Button (omitted for brevity) */}
          {/* ... */}
        </div>
      </div>
    </header>
  );
}

export default Header;