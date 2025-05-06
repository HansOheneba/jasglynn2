import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { BookingStatus } from "@/types";

interface StatusUpdateRequestBody {
  status: BookingStatus;
}

export interface RouteParams {
  params: {
    id: string;
  };
}

interface BookingRecord {
  id: string;
  status: BookingStatus;
  // Add other booking fields as needed
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

    const [bookings] = await connection.query(
      "SELECT * FROM booking WHERE id = ?",
      [id]
    );

    if ((bookings as BookingRecord[]).length === 0) {
      connection.release();
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    // Update the booking status
    await connection.query("UPDATE booking SET status = ? WHERE id = ?", [
      status,
      id,
    ]);

    connection.release();

    return NextResponse.json(
      { message: "Booking status updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating booking status:", error);
    return NextResponse.json(
      { error: "Failed to update booking status" },
      { status: 500 }
    );
  }
}
