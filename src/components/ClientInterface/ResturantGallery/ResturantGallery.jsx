"use client";
import Image from "next/image";
import Magnifier from "react18-image-magnifier";

export default function ResturantGallery({ restaurantData }) {
  return (
    <section className="mb-12 container mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">
        Gallery
      </h2>
      <div className="grid grid-cols-1 p-2 md:grid-cols-3 gap-6">
        {restaurantData.gallery.map((image, index) => (
          <div key={index} className="relative group">
            {/* Main gallery image */}
            <Magnifier
              width={"100%"}
              height={"100%"}
              src={image.src}
            />
            {/* Overlay with text */}
          </div>
        ))}
      </div>
    </section>
  );
}
