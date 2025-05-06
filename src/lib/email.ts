import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.ResendAPI_KEY);

/**
 * Event booking details interface
 */
interface EventBookingDetails {
  venue: string;
  event_date: string | Date;
  event_time: string;
  guests: number | string;
}

/**
 * Studio booking details interface
 */
interface StudioBookingDetails {
  session_type: string;
  date: string | Date;
  start_time: string;
  end_time: string;
}

/**
 * Send a booking confirmation email to the customer
 * @param recipientEmail Email address of the booking customer
 * @param recipientName Name of the booking customer
 * @param bookingType Type of booking ('event' or 'studio')
 * @param bookingDetails Additional details to include in the email
 */
export async function sendBookingConfirmationEmail<T extends 'event' | 'studio'>(
  recipientEmail: string,
  recipientName: string,
  bookingType: T,
  bookingDetails: T extends 'event' ? EventBookingDetails : StudioBookingDetails
) {
  try {
    const bookingTypeLabel = bookingType === 'event' ? 'Event Venue' : 'Photo Studio';
    
    const { data, error } = await resend.emails.send({
      from: 'JASGlynn <booking@hansoheneba.com>',
      to: recipientEmail,
      subject: `Your ${bookingTypeLabel} Booking Request Confirmation`,
     html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
    <!-- Header -->
    <div style="background-color: #111827; padding: 20px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px;">JASGlynn</h1>
      <p style="color: #9ca3af; margin: 5px 0 0; font-size: 14px;">Booking Confirmation</p>
    </div>

    <!-- Body -->
    <div style="padding: 30px;">
      <p style="font-size: 16px; color: #111827;">Hi ${recipientName},</p>
      <p style="font-size: 15px; color: #4b5563;">
        Thank you for your <strong>${bookingTypeLabel.toLowerCase()}</strong> booking request. We’ve received your submission and are currently reviewing it.
      </p>

      <!-- Booking Details Card -->
      <div style="background-color: #f9fafb; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 6px;">
        <h3 style="margin-top: 0; color: #1f2937;">Booking Summary</h3>
        <p><strong>Type:</strong> ${bookingTypeLabel}</p>
        ${
          bookingType === 'event' 
            ? `<p><strong>Venue:</strong> ${(bookingDetails as EventBookingDetails).venue}</p>
               <p><strong>Date:</strong> ${new Date((bookingDetails as EventBookingDetails).event_date).toLocaleDateString()}</p>
               <p><strong>Time:</strong> ${(bookingDetails as EventBookingDetails).event_time}</p>
               <p><strong>Guests:</strong> ${(bookingDetails as EventBookingDetails).guests}</p>`
            : `<p><strong>Session Type:</strong> ${(bookingDetails as StudioBookingDetails).session_type}</p>
               <p><strong>Date:</strong> ${new Date((bookingDetails as StudioBookingDetails).date).toLocaleDateString()}</p>
               <p><strong>Time:</strong> ${(bookingDetails as StudioBookingDetails).start_time} - ${(bookingDetails as StudioBookingDetails).end_time}</p>`
        }
      </div>

      <p style="font-size: 15px; color: #4b5563;">
        Our team will reach out to you within <strong>2-3 working days</strong> to confirm or discuss your booking. If you have any urgent concerns, don’t hesitate to contact us.
      </p>

      <p style="margin-top: 30px; font-size: 15px; color: #111827;">Warm regards,<br><strong>JASGlynn Team</strong></p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} JASGlynn. All rights reserved.</p>
    </div>
  </div>
`

    });

    if (error) {
      console.error('Error sending confirmation email:', error);
      return { success: false, error };
    }

    console.log('Confirmation email sent successfully:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Failed to send confirmation email:', err);
    return { success: false, error: err };
  }
}