'use client';

import React from 'react';
import BookingTemplate from '@/components/templates/BookingTemplate';
import StudioBookingForm from '@/components/organisms/StudioBookingForm';

const StudioBookingPage: React.FC = () => {
  return (
    <BookingTemplate 
      title="Photo Studio Booking" 
      description="Reserve our professional photography studios for your next photoshoot. Complete the form below to request a booking."
    >
      <StudioBookingForm />
    </BookingTemplate>
  );
}

export default StudioBookingPage;