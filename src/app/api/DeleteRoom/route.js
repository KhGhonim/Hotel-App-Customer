import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";
import { DeleteOneRoom } from "../query/queries";

export async function POST(request) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Room ID is required" }, { status: 400 });
  }

  try {
    const res = await pool.query(DeleteOneRoom, [id]);
    if (res.rowCount === 0) {
      return NextResponse.json({ error: "No room found" }, { status: 404 });
    }
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error while deleting room data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
