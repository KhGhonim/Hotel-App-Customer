import { FaWifi, FaCoffee, FaTv, FaBath, FaStar } from "react-icons/fa";
import { BiSolidFridge, BiSolidWasher } from "react-icons/bi";
import { PiHairDryerLight, PiOven } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { GiSlippers } from "react-icons/gi";
import { FcSafe } from "react-icons/fc";
import { MdOutlineRoomService } from "react-icons/md";
import Link from "next/link";

export default function RoomsCard({
  title,
  image,
  description,
  bedType,
  roomType,
  roomView,
  services,
  pricePerNight,
  rating,
  id
}) {
  const renderStars = (rating) => {
    const totalStars = 5; 
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="overflow-hidden border-2 border-gray-300 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl duration-300">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t-lg"
      />

      {/* Content Section */}
      <div className="p-5  space-y-4">
        {/* Title & Description */}
        <h1 className="text-xl font-bold text-gray-800 text-center">{title}</h1>
        <p className="text-xs text-gray-500 text-center">{description}</p>

        {/* Room Details */}
        <div className="text-sm text-gray-600 flex font-semibold justify-between">
          <p>{bedType}</p>
          <p>{roomType}</p>
          <p>{roomView}</p>
        </div>

        {/* Services Section */}
        <div className="flex justify-center space-x-3 text-gray-600 text-lg">
          {services.includes("wifi") && <FaWifi title="Wi-Fi" />}
          {services.includes("coffee") && <FaCoffee title="Coffee" />}
          {services.includes("tv") && <FaTv title="TV" />}
          {services.includes("turkish bath") && <FaBath title="Turkish Bath" />}
          {services.includes("washer") && <BiSolidWasher title="Washer" />}
          {services.includes("minibar") && <BiSolidFridge title="Minibar" />}
          {services.includes("oven") && <PiOven title="Oven" />}
          {services.includes("hairdryer") && (
            <PiHairDryerLight title="Hairdryer" />
          )}
          {services.includes("air conditioning") && (
            <TbAirConditioning title="Air Conditioning" />
          )}
          {services.includes("slippers") && <GiSlippers title="Slippers" />}
          {services.includes("safe") && <FcSafe title="Safe" />}
          {services.includes("roomervice") && (
            <MdOutlineRoomService title="Room Service" />
          )}
        </div>

        {/* Price and Rating Section */}
        <div className="flex justify-between items-center font-bold text-lg text-gray-700">
          <p>${pricePerNight} / night</p>
          <div className="flex">{renderStars(rating)}</div>
        </div>
      </div>

      {/* Button Section */}
      <div className="bg-gray-100 p-4">
        <Link href={`/Rooms/${id}`} passHref>
          <button className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
