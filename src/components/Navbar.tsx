import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between">
      <div className="text-xl font-bold">Marketing Agency</div>
      <div className="space-x-4">
        <Button onClick={() => window.location.href = '/'}>Home</Button>
        <Button onClick={() => window.location.href = '/about-us'}>About Us</Button>
        <Button onClick={() => window.location.href = '/services'}>Services</Button>
        <Button onClick={() => window.location.href = '/contact-us'}>Contact</Button>
      </div>
    </nav>
  );
};

export default Navbar;
