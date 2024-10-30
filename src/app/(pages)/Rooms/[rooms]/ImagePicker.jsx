"use client";
import Image from "next/image";
import { useState } from "react";
import room1 from "../../../../../public/images/OneRoom/lemon_tree_hotel_single-room-500x500.webp";
import room2 from "../../../../../public/images/OneRoom/design_2.webp";
import romm3 from "../../../../../public/images/OneRoom/hotel-rooms-8146308.webp";
import Magnifier from "react18-image-magnifier";

export default function ImagePicker({ Data }) {
  const Images = [
    Data.image.src || Data.image,
    room1.src,
    room2.src,
    romm3.src,
  ];

  const [FirstImge, setFirstImge] = useState(Images[0]);
  return (
    <div>
      <Magnifier
        src={FirstImge}
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
      />
      <div className="mt-4 grid grid-cols-4 gap-2">
        {Images.map((image, index) => (
          <Image
            width={100}
            height={100}
            quality={100}
            onClick={() => setFirstImge(image)}
            key={index}
            src={image}
            alt={`thumbnail ${index + 1}`}
            className="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
}
