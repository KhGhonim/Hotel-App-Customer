import { FaBed } from "react-icons/fa6";
import { MdViewInAr } from "react-icons/md";
import { FaWifi, FaCoffee, FaTv, FaBath, FaStar, FaHome } from "react-icons/fa";
import { BiSolidFridge, BiSolidWasher } from "react-icons/bi";
import { PiHairDryerLight, PiOven } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { GiSlippers } from "react-icons/gi";
import { FcSafe } from "react-icons/fc";
import { MdOutlineRoomService } from "react-icons/md";
import HotelLogo from "../../../../public/images/Amazing view.jpg";
import terace from "../../../../public/images/cay in terace.jpg";
import Cityscape from "../../../../public/images/Cityscape with river.jpg";
import taksim from "../../../../public/images/taksim.jpg";
import Entrance from "../../../../public/images/Entrance-scaled.jpg.webp";
import ImagePicker from "./ImagePicker";
import CalenderPicker from "./CalenderPicker";

export default function page() {
  const roomData = {
    id: "room-001",
    title: "Deluxe Ocean View Suite",
    image: HotelLogo,
    description:
      "Experience luxury with breathtaking ocean views in our spacious Deluxe Suite. Perfect for a romantic getaway or a relaxing family vacation.",
    bedType: "King Size",
    roomType: "Suite",
    roomView: "Ocean View",
    services: ["washer", "tv", "coffee", "air conditioning"],
    roomImages: [terace, Cityscape, Entrance, taksim],
    rating: 3.5,
    pricePerNight: 299,
  };
  return (
    <div className=" bg-gray-900  px-4 py-32 ">
      <div className="grid md:grid-cols-2 gap-8 mx-auto container">
        <div>
          <ImagePicker roomData={roomData} />
        </div>
        <div>
          <h1 className="text-3xl text-slate-100 font-bold mb-2">
            {roomData.title}
          </h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`w-5 h-5 ${
                  index < Math.floor(roomData.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-white">
              {roomData.rating} out of 5
            </span>
          </div>
          <p className="text-white mb-6">{roomData.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6 text-white">
            <div className="flex items-center ">
              <FaBed className="w-5 h-5 mr-2" />
              <span>{roomData.bedType}</span>
            </div>
            <div className="flex items-center">
              <FaHome className="w-5 h-5 mr-2" />
              <span>{roomData.roomType}</span>
            </div>
            <div className="flex items-center">
              <MdViewInAr className="w-5 h-5 mr-2" />
              <span>{roomData.roomView}</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-slate-50">Services</h2>
          <div className="flex flex-wrap gap-2  mb-6">
            {roomData.services.map((service, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-black bg-white rounded-md px-2 py-1"
              >
                {service === "wifi" && <FaWifi className="w-4 h-4 mr-1" />}
                {service === "coffee" && <FaCoffee className="w-4 h-4 mr-1" />}
                {service === "turkish bath" && (
                  <FaBath className="w-4 h-4 mr-1" />
                )}
                {service === "tv" && <FaTv className="w-4 h-4 mr-1" />}
                {service === "washer" && (
                  <BiSolidWasher className="w-4 h-4 mr-1" />
                )}
                {service === "minibar" && (
                  <BiSolidFridge className="w-4 h-4 mr-1" />
                )}
                {service === "oven" && <PiOven className="w-4 h-4 mr-1" />}
                {service === "hairdryer" && (
                  <PiHairDryerLight className="w-4 h-4 mr-1" />
                )}
                {service === "air conditioning" && (
                  <TbAirConditioning className="w-4 h-4 mr-1" />
                )}
                {service === "slippers" && (
                  <GiSlippers className="w-4 h-4 mr-1" />
                )}
                {service === "safe" && <FcSafe className="w-4 h-4 mr-1" />}
                {service === "roomervice" && (
                  <MdOutlineRoomService className="w-4 h-4 mr-1" />
                )}
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 mx-auto container">
        <div>
          <div>
            <h1 className="text-3xl text-slate-100 font-bold mb-2">Book Your Stay</h1>
            <h2 className="text-xl font-semibold mb-2 text-slate-50">Select your check-in and check-out dates</h2>
          </div>

          <CalenderPicker />

          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-100">
              ${roomData.pricePerNight}{" "}
              <span className="text-sm font-normal text-white">per night</span>
            </div>
            <button className="bg-black hover:bg-gray-800 transition-all duration-300 text-white font-bold py-2 px-8 rounded">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
