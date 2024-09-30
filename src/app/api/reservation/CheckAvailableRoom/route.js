import { CheckAvailableRoomWithDates } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {

  const checkIn = request.nextUrl.searchParams.get("checkIn")
  const checkOut = request.nextUrl.searchParams.get("checkOut")
  const adults = request.nextUrl.searchParams.get("adults")
  const kids = request.nextUrl.searchParams.get("kids")


  if (!checkIn || !checkOut || !adults) {
    return NextResponse.json({ error: "Please fill in all fields" }, { status: 400 });
  }

  if (checkIn > checkOut) {
    return NextResponse.json({ error: "Check-in date must be before check-out date" }, { status: 400 });
  }

  if (adults < 1) {
    return NextResponse.json({ error: "Adults count must be greater than 0" }, { status: 400 });
  }


  const totalGuests = parseInt(adults) + parseInt(kids);

  if (totalGuests > 7) {
    return NextResponse.json({ error: "Total guests count must be less than 7" }, { status: 400 });
  }
  try {

    const res = await pool.query(CheckAvailableRoomWithDates, [totalGuests]);

    if (res.rows.length === 0) {
      return NextResponse.json({ error: "No room found" }, { status: 404 });
    }
    return NextResponse.json(res.rows);


  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    console.error("Error checking room availability:", error);
  }
}