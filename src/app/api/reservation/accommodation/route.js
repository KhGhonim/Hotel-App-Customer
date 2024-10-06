import { InsertNewBooking } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { checkIn, checkOut, adults, kids, roomID, SpecialRequest, id } =
    await request.json();

  // Convert incoming checkIn and checkOut to PostgreSQL DATE format
  const formattedCheckIn = new Date(checkIn).toISOString().split("T")[0]; // YYYY-MM-DD
  const formattedCheckOut = new Date(checkOut).toISOString().split("T")[0]; // YYYY-MM-DD

  // Use current timestamp for booking date
  const DateStamp = new Date().toISOString(); // Will be automatically cast as `timestamp without time zone`

  // Validate fields
  if (!formattedCheckIn || !formattedCheckOut || adults < 1 || !roomID || !id) {
    return NextResponse.json(
      { error: "All fields are required for reservation" },
      { status: 400 }
    );
  }
  try {
    const InsertBooking = await pool.query(InsertNewBooking, [
      id,
      roomID,
      adults,
      kids,
      formattedCheckIn,
      formattedCheckOut,
      DateStamp,
      SpecialRequest,
    ]);

    if (!InsertBooking) {
      return NextResponse.json(
        { error: "Internal Server Error while Inserting booking" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      booking: InsertBooking.rows[0], 
    });
  } catch (error) {
    console.error("Error fetching booking data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
