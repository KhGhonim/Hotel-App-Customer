import { FaArrowRight, FaBuilding, FaLeaf, FaSun } from "react-icons/fa";

export default function AboutUsEcoFriendly() {
  return (
    <section className="w-full min-h-dvh bg-gray-900  mt-2 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-white sm:text-4xl mb-4">
            Discover Our Eco-Friendly Skyscraper
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Address Istanbul combines luxury with sustainability, offering a
            unique eco-friendly experience in the heart of the city.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-black flex flex-col cursor-pointer items-center p-8 rounded-lg shadow-lg">
            <FaLeaf className="w-12 h-12  text-green-500 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Sustainable Design
            </h3>
            <p className="text-gray-600 mb-6">
              Our building incorporates cutting-edge green technologies and
              materials, minimizing our environmental impact while maximizing
              comfort.
            </p>
          </div>

          <div className="bg-black flex flex-col cursor-pointer items-center p-8 rounded-lg shadow-lg">
            <FaBuilding className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              48th Floor Skyview Terrace
            </h3>
            <p className="text-gray-600 mb-6">
              Experience breathtaking views of Istanbul from our eco-friendly
              observation deck, designed to connect guests with the city's
              skyline.
            </p>
          </div>

          <div className="bg-black flex flex-col cursor-pointer items-center p-8 rounded-lg shadow-lg">
            <FaSun className="w-12 h-12 text-yellow-500 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Energy Efficiency
            </h3>
            <p className="text-gray-600 mb-6">
              Our skyscraper utilizes smart energy systems and renewable
              resources, ensuring a luxurious stay with a reduced carbon
              footprint.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center flex justify-center">
          <button className="bg-black text-white font-semibold transition-all duration-500 group hover:bg-gray-800 px-10 py-4 rounded-none text-lg flex justify-center items-center">
            Book Your Eco-Luxury Stay
            <FaArrowRight className="ml-2 h-5 w-5 group-hover:pl-2 transition-all duration-500 text-orange-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
