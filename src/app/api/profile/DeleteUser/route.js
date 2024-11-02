import { DeleteUser } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const  id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  try {
    const res = await pool.query(DeleteUser, [id]);
    if (res.rowCount === 0) {
      return NextResponse.json({ error: "No user found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error while deleting user data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
