import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  min?: string | number;
  max?: string | number;
  pattern?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
  min,
  max,
  pattern
}) => {
  const baseStyle = 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500';

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`${baseStyle} ${className} ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      min={min}
      max={max}
      pattern={pattern}
    />
  );
};

export default Input;