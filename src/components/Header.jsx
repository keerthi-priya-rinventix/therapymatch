// src/components/Header.jsx
import React from "react";

function Header() {
  const TherapyLogo = ({ size = 32, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 8C16 5.79086 14.2091 4 12 4H6C4.89543 4 4 4.89543 4 6V12C4 14.2091 5.79086 16 8 16C10.2091 16 12 17.7909 12 20V26C12 27.1046 12.8954 28 14 28H16V8Z"
        fill="#0d9488"
      />
      <path
        d="M16 8V28H18C19.1046 28 20 27.1046 20 26V20C20 17.7909 21.7909 16 24 16C26.2091 16 28 14.2091 28 12V6C28 4.89543 27.1046 4 26 4H20C17.7909 4 16 5.79086 16 8Z"
        fill="#5eead4"
      />
    </svg>
  );
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <TherapyLogo
                size={32}
                className="group-hover:opacity-90 transition-opacity"
              />
              <span className="text-xl font-bold text-teal-900 tracking-tight">
                TherapyMatch
              </span>
            </a>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/how-it-works"
              className="text-gray-600 hover:text-gray-900 transition duration-150"
            >
              How It Works
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition duration-150"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition duration-150"
            >
              Contact
            </a>
          </nav>

          {/* Action Button (e.g., Login/Signup) */}
          <div className="hidden md:flex items-center">
            {/* Using the standard utility for a simple button */}
            <button className="ml-4 py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 shadow-sm">
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
