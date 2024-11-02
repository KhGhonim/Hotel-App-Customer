import { GetAllReviewGrid } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const res = await pool.query(GetAllReviewGrid);

    return NextResponse.json(res.rows);
  } catch (error) {
    console.error("Error fetching room data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
