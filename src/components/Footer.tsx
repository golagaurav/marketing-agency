// src/components/Footer.tsx
import React, { useState } from 'react';
import Select, { Option } from './ui/Select';

const policyOptions: Option[] = [
  { label: 'Cancellation Policy', value: '/cancellation-policy' },
  { label: 'Privacy Policy', value: '/privacy-policy' },
  { label: 'Terms & Conditions', value: '/terms-and-conditions' },
];

const Footer: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | number>('');

  const handleChange = (value: string | number) => {
    setSelectedOption(value);
    if (typeof value === 'string' && value) {
      window.location.assign(value); // avoids full page reload if possible
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 left-0 w-full text-center md:text-left md:flex md:justify-between md:items-center px-4 z-50">
      <p className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} Marketing Agency. All rights reserved.
      </p>

      <div className="flex items-center space-x-4 justify-center md:justify-end w-full md:w-auto">
        <div className="w-60 text-black">
          {/* Hidden label for screen readers */}
          <label htmlFor="policy-select" className="sr-only">
            Select Policy
          </label>
          <Select
            id="policy-select"
            options={policyOptions}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Select Policy"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
