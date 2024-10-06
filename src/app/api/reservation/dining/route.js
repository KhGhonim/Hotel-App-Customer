import { InsertDiningReservation } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { ReservationTime, Time, People, id } = await request.json();

  if (!ReservationTime || !Time || !People || !id) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }

  if (People < 1) {
    return NextResponse.json(
      { error: "People count must be greater than 0" },
      { status: 400 }
    );
  }

  if (People > 6) {
    return NextResponse.json(
      { error: "People count must be less than 6" },
      { status: 400 }
    );
  }
  const DateStamp = new Date(ReservationTime).toISOString(); 

  try {
    const res = await pool.query(InsertDiningReservation, [
      DateStamp,
      Time,
      People,
      id,
    ]);

    return NextResponse.json({
      success: true,
      data: res.rows,
      message: "Reservation made successfully",
    });
  } catch (error) {
    console.error("Error rezerving dining data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
