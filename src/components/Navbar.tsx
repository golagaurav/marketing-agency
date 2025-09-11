import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white px-4 py-3 shadow-md"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => (window.location.href = '/')}
        >
          Marketing Agency
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => (window.location.href = item.href)}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>

      {/* MobileMenu Component */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
