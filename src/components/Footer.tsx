import React, { useState } from 'react';
import Select, { Option } from './ui/Select';

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState<string | number>('');

  const policyOptions: Option[] = [
    { label: 'Cancellation Policy', value: '/cancellation-policy' },
    { label: 'Privacy Policy', value: '/privacy-policy' },
    { label: 'Terms & Conditions', value: '/terms-and-conditions' },
  ];

  const handleChange = (value: string | number) => {
    setSelectedOption(value);
    if (typeof value === 'string' && value) {
      window.location.href = value;
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 left-0 w-full text-center md:text-left md:flex md:justify-between md:items-center px-4">
      <p className="mb-2 md:mb-0">&copy; 2025 Marketing Agency. All rights reserved.</p>

      <div className="flex items-center space-x-4 justify-center md:justify-end w-full md:w-auto">
        <div className="w-60 text-black">
          <Select
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
