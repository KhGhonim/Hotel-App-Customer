import { CheckIfEmailExists, CreateNewUser } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";
import { uploadStream } from "utils/CloudineryProvider";
import bcrypt from 'bcrypt'
export async function POST(request) {
  const FrontEndSignUpData = await request.formData();

  const email = FrontEndSignUpData.get("email");
  const password = FrontEndSignUpData.get("password");
  const firstName = FrontEndSignUpData.get("firstName");
  const lastName = FrontEndSignUpData.get("lastName");
  const phoneNumber = FrontEndSignUpData.get("phoneNumber");
  let ProfilePic = FrontEndSignUpData.get("avatar");


  if (!email || !password || !firstName || !lastName || !phoneNumber) {
    return NextResponse.json({ error: "Please fill in all fields" }, { status: 400 });
  }


  if (ProfilePic) {
    try {
      const buffer = Buffer.from(await ProfilePic.arrayBuffer());
      const uploadedImg = await uploadStream(buffer, 'Hotel_usersPhotos');
      ProfilePic = uploadedImg.url;
    } catch (err) {
      console.error("Error uploading image:", err);
      return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
    }
  }

  const emailExists = await pool.query(CheckIfEmailExists, [email]);
  if (emailExists.rows.length > 0) {
    return NextResponse.json({ error: "Email already exists" }, { status: 400 });
  }



  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newuser = await pool.query(CreateNewUser, [firstName, lastName, email, hashedPassword, phoneNumber, ProfilePic]);

    if (newuser.rows.length === 0) {
      return NextResponse.json({ error: "Failed to create user" }, { status: 400 });
    }

    return NextResponse.json(newuser.rows[0]);

  } catch (error) {
    console.error("Error signing up:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });

  }
}