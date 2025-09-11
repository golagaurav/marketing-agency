import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full bg-gray-900 text-white transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex flex-col space-y-2 px-4 py-4">
        <a
          href="/"
          className="block px-4 py-2 hover:bg-gray-700 rounded-md"
          onClick={onClose}
        >
          Home
        </a>
        <a
          href="/about-us"
          className="block px-4 py-2 hover:bg-gray-700 rounded-md"
          onClick={onClose}
        >
          About Us
        </a>
        <a
          href="/services"
          className="block px-4 py-2 hover:bg-gray-700 rounded-md"
          onClick={onClose}
        >
          Services
        </a>
        <a
          href="/contact-us"
          className="block px-4 py-2 hover:bg-gray-700 rounded-md"
          onClick={onClose}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
