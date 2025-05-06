'use client';

import React from 'react';
import BookingTemplate from '@/components/templates/BookingTemplate';
import EventBookingForm from '@/components/organisms/EventBookingForm';

const EventBookingPage: React.FC = () => {
  return (
    <BookingTemplate 
      title="Event Venue Booking" 
      description="Book our premium venue spaces for your next event. Fill out the form below to request a booking."
    >
      <EventBookingForm />
    </BookingTemplate>
  );
}

export default EventBookingPage;