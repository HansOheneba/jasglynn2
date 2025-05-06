import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";
import { StudioBooking } from "@/types";
import { sendBookingConfirmationEmail } from "@/lib/email";

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM studio_booking ORDER BY created_at DESC"
    );
    connection.release();
    return NextResponse.json({ bookings: rows as StudioBooking[] }, { status: 200 });
    return NextResponse.json({ bookings: rows }, { status: 200 });
  } catch (error) {
    console.error("Error fetching studio bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch studio bookings" },
      { status: 500 }
    );
  }
}

interface StudioBookingRequestBody {
  name: string;
  email: string;
  phone: string;
  date: string;
  start_time: string;
  end_time: string;
  photographer_needed: boolean;
  session_type: string;
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const body: StudioBookingRequestBody = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "date",
      "start_time",
      "end_time",
      "session_type",
    ];
    const missingFields = requiredFields.filter(
      (field) => !body[field as keyof StudioBookingRequestBody]
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

    // Validate time logic
    if (body.start_time >= body.end_time) {
      return NextResponse.json(
        { error: "End time must be after start time" },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();

    const [result] = await connection.query(
      `INSERT INTO studio_booking 
       (name, email, phone, date, start_time, end_time, photographer_needed, session_type, notes) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        body.name,
        body.email,
        body.phone,
        body.date,
        body.start_time,
        body.end_time,
        body.photographer_needed || false,
        body.session_type,
        body.notes || "",
      ]
    );

    connection.release();

    // Send confirmation email to the customer
    try {
      await sendBookingConfirmationEmail(body.email, body.name, "studio", body);
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
      // We still return success because the booking was created successfully
      // The email error is logged but doesn't affect the booking process
    }

    return NextResponse.json(
      {
        message: "Studio booking created successfully",
        bookingId: (result as ResultSetHeader).insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating studio booking:", error);
    return NextResponse.json(
      { error: "Failed to create studio booking" },
      { status: 500 }
    );
  }
}
