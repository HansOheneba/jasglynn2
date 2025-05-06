import React from 'react';

interface SelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  id,
  name,
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
  children
}) => {
  const baseStyle = 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500';

  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`${baseStyle} ${className} ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
    >
      {children}
    </select>
  );
};

export default Select;