import { GETALLUSERS } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const response = await pool.query(GETALLUSERS);
    if (response.rows.length === 0) {
      return NextResponse.json({ error: "No users found" }, { status: 404 });
    }
    return NextResponse.json(response.rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
