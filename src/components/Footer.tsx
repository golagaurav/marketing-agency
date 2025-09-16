import React from 'react';
import Icon from './ui/icon'; // Adjust path if necessary

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 left-0 w-full text-center md:text-left md:flex md:justify-between md:items-center px-4">
      <p className="mb-2 md:mb-0">&copy; 2025 Marketing Agency. All rights reserved.</p>
      
      <div className="flex flex-row space-x-6 justify-center md:justify-end">
        <a
          href="/cancellation-policy"
          className="btn-link text-white hover:text-yellow-400 transition-colors duration-300 flex items-center gap-1"
        >
          <Icon name="FaBan" size={16} color="white" />
          Cancellation Policy
        </a>
        <a
          href="/privacy-policy"
          className="btn-link text-white hover:text-yellow-400 transition-colors duration-300 flex items-center gap-1"
        >
          <Icon name="FaUserSecret" size={16} color="white" />
          Privacy Policy
        </a>
        <a
          href="/terms-and-conditions"
          className="btn-link text-white hover:text-yellow-400 transition-colors duration-300 flex items-center gap-1"
        >
          <Icon name="FaFileContract" size={16} color="white" />
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
