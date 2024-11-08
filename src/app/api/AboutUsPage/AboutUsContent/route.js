import { INSERTABOUTUS } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";
import { uploadStream } from "utils/CloudineryProvider";

export async function POST(request) {
  const dataFromFrontend = await request.formData();

  const welcoming = dataFromFrontend.get("welcoming");
  const title = dataFromFrontend.get("title");
  const description = dataFromFrontend.get("description");
  const buttonText = dataFromFrontend.get("buttonText");
  const content = dataFromFrontend.get("content");
  let image = dataFromFrontend.get("image");

  if (!welcoming || !title || !description || !buttonText || !content) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }

  if (!image) {
    return NextResponse.json(
      { error: "Please upload an image" },
      { status: 400 }
    );
  }

  try {
    if (image instanceof File) {
      // If it's a file, upload the image to Cloudinary
      try {
        const buffer = Buffer.from(await image.arrayBuffer());
        const uploadedImg = await uploadStream(buffer, "Hotel_AboutUsPage");
        image = uploadedImg.url; // Set the new image URL from Cloudinary
      } catch (err) {
        console.error("Error uploading image:", err);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    const res = await pool.query(INSERTABOUTUS, [
      welcoming,
      title,
      content,
      description,
      buttonText,
      image,
    ]);
    if (res.rowCount === 0) {
      return NextResponse.json(
        { error: "About us content not added" },
        { status: 404 }
      );
    }

    return NextResponse.json(res.rows[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
