import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { checkIn, checkOut, adults, kids, totalPrice, email } =
      await request.json();
    if (!checkIn || !checkOut || !adults || !kids || !totalPrice || !email) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Reservation Confirmation - KG Cave Hotel</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .email-header {
      background-color: #2c3e50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .email-body {
      padding: 20px;
    }
    .email-footer {
      background-color: #2c3e50;
      color: white;
      padding: 10px;
      text-align: center;
      font-size: 12px;
    }
    .reservation-details {
      background-color: #ecf0f1;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    .reservation-details h3 {
      margin-bottom: 10px;
      color: #16a085;
    }
    .details-table {
      width: 100%;
      border-spacing: 0;
      margin-bottom: 20px;
    }
    .details-table td {
      padding: 10px;
      border-bottom: 1px solid #bdc3c7;
    }
    .details-table td.label {
      font-weight: bold;
    }
    .cta-button {
      background-color: #16a085;
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Reservation Confirmed!</h1>
    </div>
    <div class="email-body">
      <p>Dear Guest ${email}, </p>
      <p>Thank you for choosing <strong>KG Cave Hotel</strong>! We are thrilled to confirm your reservation and look forward to hosting you.</p>
      <p>We hope you enjoy a pleasant time at our hotel.</p>
      <div class="reservation-details">
        <h3>Your Reservation Details:</h3>
        <table class="details-table">
          <tr>
            <td class="label">Check-In:</td>
            <td>${checkIn}</td>
          </tr>
          <tr>
            <td class="label">Check-Out:</td>
            <td>${checkOut}</td>
          </tr>
          <tr>
            <td class="label">Adults:</td>
            <td>${adults}</td>
          </tr>
          <tr>
            <td class="label">Kids:</td>
            <td>${kids}</td>
          </tr>
          
          <tr>
            <td class="label">Total Price:</td>
            <td>${totalPrice}</td>
          </tr>
        </table>
      </div>
      <p>If you have any questions or need to make changes to your reservation, feel free to contact us directly at <a href="mailto:contact@kgcavehotel.com">contact@kgcavehotel.com</a> or call us at <strong>(555) 123-4567</strong>.</p>
      <p>We look forward to welcoming you!</p>
      <p style="text-align: center;">
        <a href="mailto:contact@kgcavehotel.com" class="cta-button">Contact Us</a>
      </p>
    </div>
    <div class="email-footer">
      <p>KG Cave Hotel, 1234 Mountain View Rd, Cappadocia, Turkey</p>
      <p>&copy; 2024 KG Cave Hotel - All rights reserved</p>
    </div>
  </div>
</body>
</html>`;

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      to: email,
      subject: "Reservation Confirmed! - KG Cave Hotel",
      html: HTML,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: ", info.response);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
