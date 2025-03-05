import { BiStar } from "react-icons/bi";
import { FaStar, FaUserSecret } from "react-icons/fa";

function GuestExperiences() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Guest Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={`https://images.unsplash.com/photo-${
                  index === 1
                    ? "1559741033-d85618ce7e8c"
                    : index === 2
                    ? "1582719508461-905c673771fd"
                    : "1462539405390-d0bdb635c7d1"
                }`}
                alt={`Guest Experience ${index}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaUserSecret className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-600">
                    Family of {index + 2}
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "An unforgettable stay with exceptional service and amenities.
                  The perfect getaway for our family."
                </p>
                <p className="text-sm text-gray-500">- Guest {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuestExperiences;
