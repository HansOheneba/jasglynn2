'use client';

import React, { useState, useEffect } from 'react';
import AdminTemplate from '@/components/templates/AdminTemplate';
import BookingList from '@/components/organisms/BookingList';
import BookingDetail from '@/components/organisms/BookingDetail';
import Button from '@/components/atoms/Button';
import { EventBooking, StudioBooking, BookingStatus } from '@/types';

export default function AdminDashboardPage() {
  // State for bookings
  const [eventBookings, setEventBookings] = useState<EventBooking[]>([]);
  const [studioBookings, setStudioBookings] = useState<StudioBooking[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  
  // State for booking details modal
  const [selectedBooking, setSelectedBooking] = useState<EventBooking | StudioBooking | null>(null);
  const [selectedBookingType, setSelectedBookingType] = useState<'event' | 'studio' | ''>('');
  
  // State for filtering
  const [filter, setFilter] = useState<'all' | BookingStatus>('all');
  
  // Fetch bookings
  const fetchBookings = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      // Fetch event bookings
      const eventResponse = await fetch('/api/booking');
      const eventData = await eventResponse.json();
      
      // Fetch studio bookings
      const studioResponse = await fetch('/api/studio-booking');
      const studioData = await studioResponse.json();
      
      if (eventResponse.ok && studioResponse.ok) {
        setEventBookings(eventData.bookings || []);
        setStudioBookings(studioData.bookings || []);
      } else {
        throw new Error('Failed to fetch bookings');
      }
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('Failed to load bookings. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Update booking status
  const updateBookingStatus = async (id: number, status: BookingStatus, type: 'event' | 'studio') => {
    try {
      const endpoint = type === 'event' ? `/api/booking/${id}/status` : `/api/studio-booking/${id}/status`;
      
      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (response.ok) {
        // Refresh bookings after status update
        fetchBookings();
        
        // If currently viewing this booking in detail, update the selected booking
        if (selectedBooking && selectedBooking.id === id) {
          setSelectedBooking({ ...selectedBooking, status });
        }
      } else {
        throw new Error('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
      alert('Failed to update booking status. Please try again.');
    }
  };
  
  // Filter bookings based on status
  const getFilteredBookings = <T extends EventBooking | StudioBooking>(bookings: T[]): T[] => {
    if (filter === 'all') return bookings;
    return bookings.filter(booking => booking.status === filter);
  };
  
  // Handler for viewing booking details
  const handleViewDetails = (booking: EventBooking | StudioBooking, type: 'event' | 'studio') => {
    setSelectedBooking(booking);
    setSelectedBookingType(type);
  };
  
  // Handler for closing the booking details modal
  const handleCloseDetails = () => {
    setSelectedBooking(null);
    setSelectedBookingType('');
  };
  
  // Handler for updating booking status
  const handleUpdateStatus = (id: number, status: BookingStatus) => {
    if (selectedBookingType === '') {
      console.error('Booking type not specified');
      return;
    }
    updateBookingStatus(id, status, selectedBookingType);
  };
  
  // Load bookings on component mount
  useEffect(() => {
    fetchBookings();
  }, []);
  
  return (
    <AdminTemplate title="Admin Dashboard">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Booking Management</h2>
          <Button
            variant="primary"
            onClick={fetchBookings}
            disabled={isLoading}
          >
            {isLoading ? 'Refreshing...' : 'Refresh Bookings'}
          </Button>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              onClick={() => setFilter('all')}
              className="text-sm"
            >
              All Bookings
            </Button>
            <Button
              variant={filter === 'pending' ? 'primary' : 'secondary'}
              onClick={() => setFilter('pending')}
              className="text-sm"
            >
              Pending
            </Button>
            <Button
              variant={filter === 'accepted' ? 'primary' : 'secondary'}
              onClick={() => setFilter('accepted')}
              className="text-sm"
            >
              Accepted
            </Button>
            <Button
              variant={filter === 'declined' ? 'primary' : 'secondary'}
              onClick={() => setFilter('declined')}
              className="text-sm"
            >
              Declined
            </Button>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-100 text-red-800 p-4 rounded mb-6">
            {error}
          </div>
        )}
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Event Venue Bookings</h3>
            {isLoading ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-500 text-center">Loading event bookings...</p>
              </div>
            ) : (
              <BookingList
                bookings={getFilteredBookings(eventBookings)}
                type="event"
                onViewDetails={(booking) => handleViewDetails(booking, 'event')}
                onUpdateStatus={(id, status) => updateBookingStatus(id, status, 'event')}
              />
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Photo Studio Bookings</h3>
            {isLoading ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-500 text-center">Loading studio bookings...</p>
              </div>
            ) : (
              <BookingList
                bookings={getFilteredBookings(studioBookings)}
                type="studio"
                onViewDetails={(booking) => handleViewDetails(booking, 'studio')}
                onUpdateStatus={(id, status) => updateBookingStatus(id, status, 'studio')}
              />
            )}
          </div>
        </div>
      </div>
      
      {selectedBooking && selectedBookingType !== '' && (
        <BookingDetail
          booking={selectedBooking}
          type={selectedBookingType as 'event' | 'studio'}
          onClose={handleCloseDetails}
          onUpdateStatus={handleUpdateStatus}
        />
      )}
    </AdminTemplate>
  );
}