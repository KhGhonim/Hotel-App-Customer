import { pool } from "DB/Postgres";

export default async function GET(req, res) {
  try {
    // Connect to the database and run a simple query
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ success: true, time: result.rows[0].now });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ success: false, time: error.message });
  }
}