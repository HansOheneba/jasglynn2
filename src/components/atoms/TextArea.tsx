import React from 'react';

interface TextAreaProps {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
  rows = 4
}) => {
  const baseStyle = 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500';

  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`${baseStyle} ${className} ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      rows={rows}
    />
  );
};

export default TextArea;