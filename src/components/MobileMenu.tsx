import React from 'react';
import Icon from './ui/icon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Home', href: '/', icon: 'FaHome', color: '#3182CE' },
  { label: 'About Us', href: '/about-us', icon: 'FaInfoCircle', color: '#D69E2E' },
  { label: 'Services', href: '/services', icon: 'FaServicestack', color: '#38A169' },
  { label: 'Contact', href: '/contact-us', icon: 'FaEnvelope', color: '#E53E3E' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 text-white z-50">
      <nav className="flex flex-col space-y-2 px-4 py-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            onClick={onClose}
          >
            <Icon name={item.icon} size={18} color={item.color} />
            <span className="ml-2">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
