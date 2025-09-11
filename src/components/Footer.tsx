import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 left-0 w-full text-center md:text-left md:flex md:justify-between md:items-center px-4">
      <p className="mb-2 md:mb-0">&copy; 2025 Marketing Agency. All rights reserved.</p>
      
      <div className="flex flex-row space-x-4 justify-center md:justify-end">
        <a href="/cancellation-policy" className="btn-link text-white hover:text-yellow-400 transition-colors duration-300">
          Cancellation Policy
        </a>
        <a href="/privacy-policy" className="btn-link text-white hover:text-yellow-400 transition-colors duration-300">
          Privacy Policy
        </a>
        <a href="/terms-and-conditions" className="btn-link text-white hover:text-yellow-400 transition-colors duration-300">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
