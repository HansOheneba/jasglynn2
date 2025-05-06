import React from 'react';

interface BookingTemplateProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const BookingTemplate: React.FC<BookingTemplateProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h1>
          {description && (
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {description}
            </p>
          )}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BookingTemplate;