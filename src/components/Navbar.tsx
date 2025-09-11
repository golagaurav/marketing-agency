import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold cursor-pointer" onClick={() => window.location.href = '/'}>
        Marketing Agency
      </div>

      {/* Hamburger menu button for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex md:space-x-6">
        <button
          onClick={() => window.location.href = '/'}
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          Home
        </button>
        <button
          onClick={() => window.location.href = '/about-us'}
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          About Us
        </button>
        <button
          onClick={() => window.location.href = '/services'}
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          Services
        </button>
        <button
          onClick={() => window.location.href = '/contact-us'}
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          Contact
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
