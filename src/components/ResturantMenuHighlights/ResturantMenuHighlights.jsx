import Image from "next/image";

export default function ResturantMenuHighlights({ restaurantData }) {
  return (
    <>
      <section className="mb-12 container  mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600">{restaurantData.description}</p>
      </section>

      {/* Menu Highlights */}
      <section className="mb-12 container  mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Menu Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {restaurantData.menuHighlights.map((item, index) => (
            <div
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl"
              key={index}
            >
              <div className="mb-4">
                <Image
                  width={500}
                  height={500}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-t-md"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h1>
                <h2 className="text-lg text-green-600 font-semibold mb-4">
                  ${item.price}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
