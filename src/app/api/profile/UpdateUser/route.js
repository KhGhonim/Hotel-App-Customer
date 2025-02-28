import { UpdateUser } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";
import { uploadStream } from "utils/CloudineryProvider";

export async function POST(request) {
  const  id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  const FrontEndData = await request.formData();
  const email = FrontEndData.get("email");
  const FirstName = FrontEndData.get("FirstName");
  const LastName = FrontEndData.get("LastName");
  const role = FrontEndData.get("role");
  let ProfileImg = FrontEndData.get("ProfileImg");

  if (!email || !FirstName || !LastName || !role) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }
  try {
    if (ProfileImg) {
      try {
        const buffer = Buffer.from(await ProfileImg.arrayBuffer());
        const uploadedImg = await uploadStream(buffer, "Hotel_usersPhotos");
        ProfileImg = uploadedImg.url;
      } catch (err) {
        console.error("Error uploading image:", err);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    const res = await pool.query(UpdateUser, [
      email,
      FirstName,
      LastName,
      role,
      ProfileImg,
      id,
    ]);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
