import { GETROOMS } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const q = request.nextUrl.searchParams.get("q")
  console.log(q)
  if (!q) {
    return NextResponse.json({ error: "Room ID is required" }, { status: 400 });
  }



  try {
    const res = await pool.query(GETROOMS, [q]);


    if (res.rows.length === 0) {
      return NextResponse.json({ error: "No room found" }, { status: 404 });

    }

    return NextResponse.json(res.rows[0]);

  } catch (error) {
    console.error("Error fetching room data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
