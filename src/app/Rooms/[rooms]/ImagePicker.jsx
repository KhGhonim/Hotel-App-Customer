"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImagePicker({ roomData }) {
  const [SelectedImage, setSelectedImage] = useState(roomData.image);
  return (
    <div>
      <Image
        width={500}
        height={500}
        quality={100}
        src={SelectedImage}
        alt={roomData.title}
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
      />
      <div className="mt-4 grid grid-cols-4 gap-2">
        {roomData.roomImages.map((image, index) => (
          <Image
            width={100}
            height={100}
            quality={100}
            onClick={() => setSelectedImage(image)}
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
