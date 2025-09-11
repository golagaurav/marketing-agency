import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold cursor-pointer" onClick={() => window.location.href = '/'}>
        Marketing Agency
      </div>

      {/* Hamburger Icon for mobile */}
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
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:space-x-4">
        <a
          href="/"
          className="inline-block px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
        >
          Home
        </a>
        <a
          href="/about-us"
          className="inline-block px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
        >
          About Us
        </a>
        <a
          href="/services"
          className="inline-block px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
        >
          Services
        </a>
        <a
          href="/contact-us"
          className="inline-block px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
