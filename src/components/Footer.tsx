import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 w-full text-center md:text-left md:flex md:justify-between md:items-center px-4">
      <p className="mb-2 md:mb-0">&copy; 2025 Marketing Agency. All rights reserved.</p>
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 justify-center md:justify-end">
        <Button onClick={() => window.location.href = '/cancellation-policy'}>Cancellation Policy</Button>
        <Button onClick={() => window.location.href = '/privacy-policy'}>Privacy Policy</Button>
        <Button onClick={() => window.location.href = '/terms-and-conditions'}>Terms & Conditions</Button>
      </div>
    </footer>
  );
};

export default Footer;
