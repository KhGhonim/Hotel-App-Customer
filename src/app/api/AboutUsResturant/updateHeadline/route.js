import { UpdateHeadline } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const id = await request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }
  try {
    const res = await pool.query(UpdateHeadline, [id]);

    return NextResponse.json(res.rows[0]);
  } catch (error) {
    console.error("Error fetching room data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
