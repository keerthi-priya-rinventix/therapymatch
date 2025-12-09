// src/components/Footer.jsx
import React from 'react';

function Footer() {
  // We'll use a deep blue color for the footer, distinct from the main content
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          
          {/* 1. Branding & Copyright */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-2">TherapyMatch</h4>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} TherapyMatch. All rights reserved.
            </p>
          </div>

          {/* 2. Quick Links Section */}
          <div>
            <h5 className="text-md font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/faq" className="hover:text-white transition duration-150">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-white transition duration-150">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition duration-150">Terms of Service</a></li>
            </ul>
          </div>

          {/* 3. Contact Info/Socials (Placeholder) */}
          <div className="text-center md:text-left">
            <h5 className="text-md font-semibold mb-3">Follow Us</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* You would insert SVG icons for social media here */}
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                [Facebook]
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                [Twitter]
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
