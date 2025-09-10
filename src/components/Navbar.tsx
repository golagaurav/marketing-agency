import React, { useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">Marketing Agency</div>

      {/* Hamburger Menu for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Hamburger icon */}
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

      {/* Menu Items */}
      <div
        className={`
          ${isOpen ? 'block' : 'hidden'} 
          absolute top-full left-0 w-full bg-gray-900 md:static md:flex md:space-x-4 md:w-auto
          md:block
          `}
      >
        <Button onClick={() => window.location.href = '/'}>Home</Button>
        <Button onClick={() => window.location.href = '/about-us'}>About Us</Button>
        <Button onClick={() => window.location.href = '/services'}>Services</Button>
        <Button onClick={() => window.location.href = '/contact-us'}>Contact</Button>
      </div>
    </nav>
  );
};

export default Navbar;
