import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";
import { EventBooking } from "@/types";
import { sendBookingConfirmationEmail } from "@/lib/email";

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM booking ORDER BY created_at DESC"
    );
    connection.release();

    return NextResponse.json({ bookings: rows as EventBooking[] }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

interface BookingRequestBody {
  name: string;
  email: string;
  phone: string;
  venue: string;
  event_date: string;
  event_time: string;
  guests: number | string;
  backup_generator: boolean;
  event_description?: string;
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const body: BookingRequestBody = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "venue",
      "event_date",
      "event_time",
      "guests",
    ];
    const missingFields = requiredFields.filter(
      (field) => !body[field as keyof BookingRequestBody]
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();

    const [result] = await connection.query<ResultSetHeader>(
      `INSERT INTO booking 
       (name, email, phone, venue, event_date, event_time, guests, backup_generator, event_description, notes) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        body.name,
        body.email,
        body.phone,
        body.venue,
        body.event_date,
        body.event_time,
        typeof body.guests === "string" ? parseInt(body.guests) : body.guests,
        body.backup_generator ? 1 : 0,
        body.event_description || "",
        body.notes || "",
      ]
    );

    connection.release();

    // Send confirmation email to the customer
    try {
      await sendBookingConfirmationEmail(
        body.email,
        body.name,
        'event',
        body
      );
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
      // We still return success because the booking was created successfully
      // The email error is logged but doesn't affect the booking process
    }

    return NextResponse.json(
      {
        message: "Booking created successfully",
        bookingId: result.insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
