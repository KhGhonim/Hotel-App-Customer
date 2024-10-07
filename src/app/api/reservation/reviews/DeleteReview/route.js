import { DeleteReview } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Review ID is required" },
      { status: 400 }
    );
  }

  try {
    const res = await pool.query(DeleteReview, [id]);
    if (res.rowCount === 0) {
      return NextResponse.json({ error: "No review found" }, { status: 404 });
    }
    return NextResponse.json({ status: 200});
  } catch (error) {
    console.error("Error fetching review data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
