import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    // Connect to the database and run a simple query
    const result = await pool.query('SELECT NOW()');

    // Return the result as a JSON response
    return NextResponse.json({ success: true, message: result.rows[0].now });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ success: false, message: 'Database connection error' });
  }
}
