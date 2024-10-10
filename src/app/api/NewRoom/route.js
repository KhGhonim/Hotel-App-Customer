import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";
import { uploadStream } from "utils/CloudineryProvider";
import { InsertRoom } from "../query/queries";

export async function POST(request) {
  const dataFromFrontend = await request.formData();
  const title = dataFromFrontend.get("title");
  const description = dataFromFrontend.get("description");
  const price_per_night = dataFromFrontend.get("price_per_night");
  const capacity = dataFromFrontend.get("capacity");
  const room_type = dataFromFrontend.get("room_type");
  const bed_type = dataFromFrontend.get("bed_type");
  const room_view = dataFromFrontend.get("room_view");
  const rating = dataFromFrontend.get("rating");
  let room_availability = dataFromFrontend.get("room_availability");
  let services = dataFromFrontend.get("services");
  let image = dataFromFrontend.get("image");

  if (
    !title ||
    !description ||
    !price_per_night ||
    !capacity ||
    !room_type ||
    !bed_type ||
    !room_view ||
    !room_availability ||
    !rating ||
    !services
  ) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }

  if (image) {
    try {
      const buffer = Buffer.from(await image.arrayBuffer());
      const uploadedImg = await uploadStream(buffer, "Hotel_RoomsPhotos");
      image = uploadedImg.url;
    } catch (err) {
      console.error("Error uploading image:", err);
      return NextResponse.json(
        { error: "Failed to upload image" },
        { status: 500 }
      );
    }
  }

  if (room_availability === "available") {
    room_availability = true;
  } else {
    room_availability = false;
  }

  console.log(
    title,
    description,
    price_per_night,
    capacity,
    room_type,
    bed_type,
    room_view,
    room_availability,
    rating,
    services,
    image
  );

  try {
    const res = await pool.query(InsertRoom, [
      title,
      description,
      price_per_night,
      capacity,
      room_type,
      bed_type,
      room_view,
      room_availability,
      rating,
      services,
      image,
    ]);

    if (res.rows.length === 0) {
      return NextResponse.json(
        { error: "Failed to create room" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Room created successfully",
      data: res.rows,
      status: 201,
    });
  } catch (error) {
    console.error("Error creating room:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
