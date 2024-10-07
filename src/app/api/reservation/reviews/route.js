import { GETAllReviews } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const res = await pool.query(GETAllReviews);

    if (res.rows.length === 0) {
      return NextResponse.json({ error: "No reviews found" }, { status: 404 });
    }
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error("Error fetching review data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
