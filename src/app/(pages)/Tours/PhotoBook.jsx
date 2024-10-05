"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

export default function PhotoBook({ images }) {
  const [FlipSize, setFlipSize] = useState("fixed");

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth > 768) {
      setFlipSize("fixed");
    } else {
      setFlipSize("stretch");
    }
  }, [windowWidth]);
  return (
    <HTMLFlipBook
      width={500}
      height={700}
      size={FlipSize}
      border={2}
      maxShadowOpacity={1}
      drawShadow={false}
      showCover={true}
      mobileScrollSupport={true}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full h-full flex justify-center items-center bg-white"
        >
          <Image
            width={500}
            quality={100}
            height={700}
            src={image}
            alt={`Page ${index + 1}`}
            className="object-cover h-full"
          />
        </div>
      ))}
    </HTMLFlipBook>
  );
}
