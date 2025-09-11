import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 w-full text-center md:text-left md:flex md:justify-between md:items-center px-4">
      <p className="mb-2 md:mb-0">&copy; 2025 Marketing Agency. All rights reserved.</p>
      
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 justify-center md:justify-end">
        <a href="/cancellation-policy" className="btn-link">
          Cancellation Policy
        </a>
        <a href="/privacy-policy" className="btn-link">
          Privacy Policy
        </a>
        <a href="/terms-and-conditions" className="btn-link">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
