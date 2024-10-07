import Image from "next/image";

export default function ResturantChefSpeacial({ restaurantData }) {
  return (
    <section className="mb-12 container mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Chef's Special
      </h2>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            width={500}
            height={500}
            src={restaurantData.chefSpecial.image}
            alt={restaurantData.chefSpecial.name}
            className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              {restaurantData.chefSpecial.name}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {restaurantData.chefSpecial.description}
            </p>
            <p className="text-2xl font-bold text-green-600">
              {restaurantData.chefSpecial.price}
            </p>
            <div className="flex justify-center">
              <button className="bg-green-500 text-white  mt-2 px-24 py-2 rounded-md hover:bg-green-600 transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
