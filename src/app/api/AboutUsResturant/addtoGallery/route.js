import { INSERTGALLERIES } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";
import { uploadStream } from "utils/CloudineryProvider";

export async function POST(request) {
  const dataFromFrontend = await request.formData();
  let image = dataFromFrontend.get("image");

  if (!image) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }
  try {
    if (image instanceof File) {
      // If it's a file, upload the image to Cloudinary
      try {
        const buffer = Buffer.from(await image.arrayBuffer());
        const uploadedImg = await uploadStream(buffer, "Hotel_Gallery");
        image = uploadedImg.url; // Set the new image URL from Cloudinary
      } catch (err) {
        console.error("Error uploading image:", err);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    const res = await pool.query(INSERTGALLERIES, [image]);
    return NextResponse.json(res.rows[0]);
  } catch (error) {
    console.error("Error adding room data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
