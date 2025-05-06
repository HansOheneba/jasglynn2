import React from 'react';
import Button from '../atoms/Button';
import { EventBooking, StudioBooking } from '@/types';

interface BookingListProps {
  bookings: (EventBooking | StudioBooking)[];
  type: 'event' | 'studio';
  onViewDetails: (booking: EventBooking | StudioBooking) => void;
  onUpdateStatus: (id: number, status: 'accepted' | 'declined' | 'pending') => void;
}

const BookingList: React.FC<BookingListProps> = ({ bookings, type, onViewDetails, onUpdateStatus }) => {
  if (!bookings || bookings.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-500 text-center">No {type} bookings found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {type === 'event' ? 'Event Date' : 'Session Date'}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {type === 'event' ? 'Venue' : 'Session Type'}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                  <div className="text-sm text-gray-500">{booking.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {type === 'event' 
                      ? new Date((booking as EventBooking).event_date).toLocaleDateString() 
                      : new Date((booking as StudioBooking).date).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {type === 'event' 
                      ? (booking as EventBooking).event_time 
                      : `${(booking as StudioBooking).start_time} - ${(booking as StudioBooking).end_time}`}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {type === 'event' ? (booking as EventBooking).venue : (booking as StudioBooking).session_type}
                  </div>
                  {type !== 'event' && (booking as StudioBooking).photographer_needed && (
                    <div className="text-xs text-blue-600">Photographer needed</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${booking.status === 'accepted' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'declined' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Button 
                      variant="secondary" 
                      className="text-xs py-1 px-2"
                      onClick={() => onViewDetails(booking)}
                    >
                      View
                    </Button>
                    {booking.status === 'pending' && (
                      <>
                        <Button 
                          variant="success" 
                          className="text-xs py-1 px-2"
                          onClick={() => onUpdateStatus(booking.id, 'accepted')}
                        >
                          Accept
                        </Button>
                        <Button 
                          variant="danger" 
                          className="text-xs py-1 px-2"
                          onClick={() => onUpdateStatus(booking.id, 'declined')}
                        >
                          Decline
                        </Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;