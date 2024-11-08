import { UpdateAboutUsHeadline } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const dataFromFrontend = await request.formData();
  const headline = dataFromFrontend.get("headline");
  const subtitle = dataFromFrontend.get("subtitle");
  const buttonText = dataFromFrontend.get("buttonText");

  if (!headline || !subtitle || !buttonText) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }

  try {
    const res = await pool.query(UpdateAboutUsHeadline, [headline, subtitle, buttonText]);
    if (res.rows.length === 0) {
      return NextResponse.json({ error: "No data added" }, { status: 404 });

    }
    return NextResponse.json(res.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
