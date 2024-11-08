import { UpdateAboutCards } from "app/api/query/queries";
import { pool } from "DB/Postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const dataFromFrontend = await request.formData();
  const Cardtitle = dataFromFrontend.get("Cardtitle");
  const CardDscription = dataFromFrontend.get("CardDscription");
  const Cardicon = dataFromFrontend.get("Cardicon");
  const currentCard = dataFromFrontend.get("currentCard");
  if (!currentCard) {
    return NextResponse.json(
      { error: "Please select a card" },
      { status: 400 }
    );
  }

  if (!Cardtitle || !CardDscription || !Cardicon) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }

  try {
    let cardId;
    switch (currentCard) {
      case "Card1":
        cardId = 1;
        break;
      case "Card2":
        cardId = 2;
        break;
      case "Card3":
        cardId = 3;
        break;
      default:
        return NextResponse.json(
          { error: "Invalid card identifier" },
          { status: 400 }
        );
    }

    const res = await pool.query(UpdateAboutCards, [
      Cardtitle,
      CardDscription,
      Cardicon,
      cardId,
    ]);
    if (res.rowCount === 0) {
      return NextResponse.json(
        { error: "Card not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Card successfully updated" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
