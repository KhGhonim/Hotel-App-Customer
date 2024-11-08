import { AddMenuHighlights } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";
import { uploadStream } from "utils/CloudineryProvider";

export async function POST(request) {
  const dataFromFrontend = await request.formData();
  const name = dataFromFrontend.get("name");
  const price = dataFromFrontend.get("price");
  const description = dataFromFrontend.get("description");
  let image = dataFromFrontend.get("image");
  if (!name || !price || !description) {
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
        const uploadedImg = await uploadStream(
          buffer,
          "Hotel_Resturant_Updated"
        );
        image = uploadedImg.url; // Set the new image URL from Cloudinary
      } catch (err) {
        console.error("Error uploading image:", err);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    const resposne = await pool.query(AddMenuHighlights, [
      name,
      price,
      description,
      image,
    ]);

    if (!resposne) {
      return NextResponse.json(
        { error: "Failed to add menu highlights" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Menu Highlights added successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
