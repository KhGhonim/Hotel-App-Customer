import Image from "next/image";

export default function ResturantGallery({ restaurantData,  }) {
  return (
    <section className="mb-12 container mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">
        Gallery
      </h2>
      <div className="grid grid-cols-1 p-2 md:grid-cols-3 gap-6">
        {restaurantData.gallery.map((image, index) => (
          <div key={index} className="relative group">
            {/* Main gallery image */}
            <Image
              width={500}
              height={500}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out transform"
            />
            {/* Overlay with text */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-center text-white">
                <h4 className="text-lg font-semibold">
                  Gallery Image {index + 1}
                </h4>
                <p className="text-sm">Click to view larger</p>
              </div>
              
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
