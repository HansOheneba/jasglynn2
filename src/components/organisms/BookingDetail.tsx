import React from "react";
import Button from "../atoms/Button";
import { EventBooking, StudioBooking, BookingStatus } from "@/types";

interface BookingDetailProps {
  booking: EventBooking | StudioBooking;
  type: "event" | "studio";
  onClose: () => void;
  onUpdateStatus: (id: number, status: BookingStatus) => void;
}

const BookingDetail: React.FC<BookingDetailProps> = ({
  booking,
  type,
  onClose,
  onUpdateStatus,
}) => {
  if (!booking) return null;

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Type guard to check if booking is EventBooking
  const isEventBooking = (
    booking: EventBooking | StudioBooking
  ): booking is EventBooking => {
    return (booking as EventBooking).venue !== undefined;
  };

  // Type guard to check if booking is StudioBooking
  const isStudioBooking = (
    booking: EventBooking | StudioBooking
  ): booking is StudioBooking => {
    return (booking as StudioBooking).session_type !== undefined;
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {type === "event" ? "Event Booking" : "Studio Booking"}
            </h2>
            <Button
              variant="secondary"
              onClick={onClose}
              className="text-sm py-1 px-2"
            >
              Close
            </Button>
          </div>

          {/* Status */}
          <div>
            <span
              className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full 
            ${
              booking.status === "accepted"
                ? "bg-green-100 text-green-800"
                : booking.status === "declined"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
            >
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>

          {/* Contact & Booking Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-jasglynn-gray uppercase tracking-wide">
                Contact Info
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border">
                <p className="text-base font-semibold text-jasglynn-gray">
                  {booking.name}
                </p>
                <p className="text-sm text-jasglynn-gray">{booking.email}</p>
                <p className="text-sm text-jasglynn-gray">{booking.phone}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-jasglynn-gray uppercase tracking-wide">
                {type === "event" ? "Event Info" : "Session Info"}
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border space-y-1 text-sm text-jasglynn-gray">
                {type === "event" && isEventBooking(booking) ? (
                  <>
                    <p>
                      <strong>Venue:</strong> {booking.venue}
                    </p>
                    <p>
                      <strong>Date:</strong> {formatDate(booking.event_date)}
                    </p>
                    <p>
                      <strong>Time:</strong> {booking.event_time}
                    </p>
                    <p>
                      <strong>Guests:</strong> {booking.guests}
                    </p>
                    <p>
                      <strong>Backup Generator:</strong>{" "}
                      {booking.backup_generator ? "Yes" : "No"}
                    </p>
                  </>
                ) : (
                  isStudioBooking(booking) && (
                    <>
                      <p>
                        <strong>Session:</strong> {booking.session_type}
                      </p>
                      <p>
                        <strong>Date:</strong> {formatDate(booking.date)}
                      </p>
                      <p>
                        <strong>Time:</strong> {booking.start_time} -{" "}
                        {booking.end_time}
                      </p>
                      <p>
                        <strong>Photographer:</strong>{" "}
                        {booking.photographer_needed ? "Yes" : "No"}
                      </p>
                    </>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Optional Sections */}
          {type === "event" &&
            isEventBooking(booking) &&
            booking.event_description && (
              <div>
                <h3 className="text-sm font-medium text-jasglynn-gray uppercase tracking-wide mb-1">
                  Event Description
                </h3>
                <div className="bg-white rounded-md p-3 border text-sm text-jasglynn-gray">
                  {booking.event_description}
                </div>
              </div>
            )}

          {booking.notes && (
            <div>
              <h3 className="text-sm font-medium text-jasglynn-gray uppercase tracking-wide mb-1">
                Additional Notes
              </h3>
              <div className="bg-white rounded-md p-3 border text-sm text-jasglynn-gray">
                {booking.notes}
              </div>
            </div>
          )}

          {/* Footer Info */}
          <div className="text-xs text-jasglynn-gray border-t pt-3">
            Booking Created: {new Date(booking.created_at).toLocaleString()}
          </div>

          {/* Action Buttons */}
          {booking.status === "pending" && (
            <div className="flex space-x-3 pt-4">
              <Button
                variant="success"
                onClick={() => onUpdateStatus(booking.id, "accepted")}
              >
                Accept Booking
              </Button>
              <Button
                variant="danger"
                onClick={() => onUpdateStatus(booking.id, "declined")}
              >
                Decline Booking
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
