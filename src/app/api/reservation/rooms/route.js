import { GETALLROOMS } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function GET(request) {

  try {
    const res = await pool.query(GETALLROOMS);

    return NextResponse.json(res.rows);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}