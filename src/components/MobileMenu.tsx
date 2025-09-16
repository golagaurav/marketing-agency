import React from 'react';
import Icon from './ui/icon'; // Adjust path as needed

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // completely hide when closed

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 text-white z-50">
      <nav className="flex flex-col space-y-2 px-4 py-4">
        <a
          href="/"
          className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
          onClick={onClose}
        >
          <Icon name="FaHome" size={18} color="white" />
          <span className="ml-2">Home</span>
        </a>
        <a
          href="/about-us"
          className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
          onClick={onClose}
        >
          <Icon name="FaInfoCircle" size={18} color="white" />
          <span className="ml-2">About Us</span>
        </a>
        <a
          href="/services"
          className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
          onClick={onClose}
        >
          <Icon name="FaServicestack" size={18} color="white" />
          <span className="ml-2">Services</span>
        </a>
        <a
          href="/contact-us"
          className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
          onClick={onClose}
        >
          <Icon name="FaEnvelope" size={18} color="white" />
          <span className="ml-2">Contact</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
