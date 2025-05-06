import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { BookingStatus } from "@/types";

interface StatusUpdateRequestBody {
  status: BookingStatus;
}

interface StudioBookingRecord {
  id: string;
  status: BookingStatus;
  // Add other fields as needed based on your database schema
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: StatusUpdateRequestBody = await request.json();

    // Validate status
    const { status } = body;
    if (!status || !["pending", "accepted", "declined"].includes(status)) {
      return NextResponse.json(
        {
          error:
            "Invalid status value. Must be one of: pending, accepted, declined",
        },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();

    // Check if studio booking exists
    const [bookings] = await connection.query(
      "SELECT * FROM studio_booking WHERE id = ?",
      [id]
    );

    if ((bookings as StudioBookingRecord[]).length === 0) {
      connection.release();
      return NextResponse.json(
        { error: "Studio booking not found" },
        { status: 404 }
      );
    }

    // Update the booking status
    await connection.query(
      "UPDATE studio_booking SET status = ? WHERE id = ?",
      [status, id]
    );

    connection.release();

    return NextResponse.json(
      { message: "Studio booking status updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating studio booking status:", error);
    return NextResponse.json(
      { error: "Failed to update studio booking status" },
      { status: 500 }
    );
  }
}
