import {  getBookingRoomPerUser } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const UserId = request.nextUrl.searchParams.get("q");
  if (!UserId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  try {
    
    const BookingData = await pool.query(getBookingRoomPerUser, [UserId]);
    return NextResponse.json(BookingData.rows[0]);
  } catch (error) {
    console.error("Error fetching booking data in PerPersonReservation:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
