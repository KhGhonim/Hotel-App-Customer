import { activities } from "DB/db";
import Image from "next/image";
import BG from "../../../../public/images/1-or-2-Day-Private-Guided-Tour-of-Istanbul-with-Hotel-Transfer-11.jpg";
import Header from "components/ClientInterface/Header/Header";
import Footer from "components/ClientInterface/Footer/Footer";
export default function page() {
  return (
    <div className="min-h-screen">
      <Header />

      <div
        className="relative h-[50vh]  flex items-center justify-center"
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Discover Cappadocia</h1>
          <p className="text-xl">
            Unforgettable tours and activities await you
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Tours and Activities</h2>
          <p className="text-xl text-muted-foreground">
            Explore the wonders of Cappadocia with our curated selection of
            experiences.
          </p>
        </header>
        <div className="flex flex-col space-y-8 items-center p-6 bg-gray-50">
          {activities?.map((activity, index) => (
            <div
              key={index}
              className={`flex flex-col w-full max-w-4xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden bg-white shadow-md ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src={activity?.image}
                  alt={activity?.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-l-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold hover:underline cursor-pointer hover:text-teal-300 transition-all duration-500">
                    Learn More
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {activity?.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-6 text-gray-600 text-base leading-relaxed">
                  {activity?.description}
                </p>

                {/* Button */}
                <button className="self-start bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full px-6 py-3 font-semibold shadow-md hover:from-teal-600 hover:to-cyan-700 transition-all duration-500">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
