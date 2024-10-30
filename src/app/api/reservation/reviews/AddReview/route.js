import { InsertReview } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { rating, id, review } = await request.json();

  if (!rating || !id || !review) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }

  try {
    const res = await pool.query(InsertReview, [ id, review, rating]);
    if (res.rowCount === 0) {
      return NextResponse.json({ error: "No review found" }, { status: 404 });
    }
    return NextResponse.json({ res: res.rows[0] });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
