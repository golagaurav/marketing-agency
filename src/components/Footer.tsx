import React from 'react';
import { Link } from 'wouter';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-lg border-t-4 border-orange-500 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between flex-wrap">
          <Link href="/">
            <Button className="flex items-center space-x-2 bg-transparent hover:bg-gray-700 text-white px-3 py-2">
              <img src="/logo.png" className="h-6 w-auto" />
              <span className="font-semibold text-lg">Marketing Agency</span>
            </Button>
          </Link>
          <p className="text-sm text-gray-400 mt-2 sm:mt-0">
            &copy; 2025 Marketing Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
