// src/components/ui/Select.tsx
import React from 'react';

export interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  id?: string; // ✅ Added for accessibility
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
}) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`px-3 py-2 border rounded-md outline-none focus:ring focus:border-blue-500 ${className}`}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value.toString()} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
