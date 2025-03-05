"use client";
import Image from "next/image";
import { FaBaby, FaCalendar, FaSpinner, FaUsers } from "react-icons/fa";
import { FaWifi, FaCoffee, FaTv, FaBath } from "react-icons/fa";
import { BiSolidFridge, BiSolidWasher } from "react-icons/bi";
import { PiHairDryerLight, PiOven } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { GiSlippers } from "react-icons/gi";
import { FcSafe } from "react-icons/fc";
import { MdOutlineRoomService } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import HotelLogo from "../../../../../public/images/Rooms/Connecting Family Room, istanbul, Garden View.webp";
import Link from "next/link";
import Footer from "components/ClientInterface/Footer/Footer";
import DiferentDates from "app/(pages)/CheckAvailableRoom/DiferentDates";
import { useAvailableRooms } from "Hooks/useAvailableRooms";
import { CgHome } from "react-icons/cg";

function CheckAvailableRoomsWrapper() {
  const { Isloading, Data, checkOut, checkIn, adults, kids } =
    useAvailableRooms();

  return (
    <>
      <Toaster />
      <div className="container mx-auto px-4 py-8">
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg overflow-hidden mb-8">
          <Link
            href="/"
            className="absolute top-3 z-50 right-2 text-black p-2 bg-white/80  hover:scale-105 transition-all duration-300 rounded-md"
          >
            <CgHome className="  text-yellow-700 font-semibold rounded-lg  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </Link>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              Your Perfect Stay Awaits
            </h2>
            <p className="text-sm md:text-lg mb-4">
              Discover our selection of rooms for your dates:
            </p>
            <div className="flex flex-wrap gap-4 mb-6 text-xs md:text-base">
              <div className="bg-white/20 px-3 py-1 rounded-full">
                Check-in: {checkIn}
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                Check-out: {checkOut}
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                Adults: {adults}
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                Kids: {kids}
              </div>
            </div>
            <Link
              className="bg-slate-50 hover:bg-slate-100 transition-all duration-500 text-xs md:text-base text-black px-3 py-1 md:px-6 md:py-3 rounded-lg"
              href={"#ModifySearch"}
            >
              Modify Search
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4">
            <svg
              className="w-64 h-64 text-white/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 7h-8V7h6c1.1 0 2 .9 2 2v5z" />
            </svg>
          </div>
        </div>

        <h1 className="text-xl md:text-3xl font-bold mb-6">Available Rooms</h1>

        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-sm md:text-lg font-semibold mb-2">Your Search</h2>
          <div className="flex flex-wrap gap-4 text-xs md:text-base">
            <div className="flex items-center">
              <FaCalendar className="mr-2" />
              <span>Check-in: {checkIn}</span>
            </div>
            <div className="flex items-center">
              <FaCalendar className="mr-2" />
              <span>Check-out: {checkOut}</span>
            </div>
            <div className="flex items-center">
              <FaUsers className="mr-2" />
              <span>Adults: {adults}</span>
            </div>
            <div className="flex items-center">
              <FaBaby className="mr-2" />
              <span>Kids: {kids}</span>
            </div>
          </div>
        </div>

        {Isloading ? (
          <div className="flex justify-center">
            <FaSpinner className="animate-spin w-10 h-10 text-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Data?.map((room, i) => (
              <div
                className="bg-white p-6 rounded-lg flex justify-between flex-col shadow-lg hover:scale-105 hover:shadow-xl duration-300"
                key={i}
              >
                <div>
                  <h1 className="text-xl md:text-2xl font-bold">
                    {room?.title}
                  </h1>
                  <h6 className="text-gray-500 py-3">
                    Capacity: {room?.room_capacity} guests
                  </h6>
                </div>
                <div>
                  <Image
                    src={room?.image || HotelLogo}
                    alt={room?.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room?.services?.map((facility, index) => {
                      const iconMap = {
                        wifi: <FaWifi className="w-4 h-4 mr-1" />,
                        coffee: <FaCoffee className="w-4 h-4 mr-1" />,
                        "turkish bath": <FaBath className="w-4 h-4 mr-1" />,
                        tv: <FaTv className="w-4 h-4 mr-1" />,
                        washer: <BiSolidWasher className="w-4 h-4 mr-1" />,
                        minibar: <BiSolidFridge className="w-4 h-4 mr-1" />,
                        oven: <PiOven className="w-4 h-4 mr-1" />,
                        hairdryer: (
                          <PiHairDryerLight className="w-4 h-4 mr-1" />
                        ),
                        "air conditioning": (
                          <TbAirConditioning className="w-4 h-4 mr-1" />
                        ),
                        slippers: <GiSlippers className="w-4 h-4 mr-1" />,
                        safe: <FcSafe className="w-4 h-4 mr-1" />,
                        roomservice: (
                          <MdOutlineRoomService className="w-4 h-4 mr-1" />
                        ),
                      };

                      const icon = iconMap[facility];
                      if (!icon) return null;

                      return (
                        <div
                          key={index}
                          className="flex items-center bg-gray-100 gap-2 rounded-full px-4 py-1 text-sm font-medium"
                        >
                          <span>{icon}</span>
                          <span>{facility}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Link
                  href={`/ReservationConfirmation?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&kids=${kids}&room_id=${room.id}&price=${room.price_per_night}`}
                  className="w-full text-center bg-black rounded-lg text-white hover:bg-gray-800 px-6 py-3 my-5 transition-all duration-500"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        )}

        <hr className="my-8" />
        <DiferentDates />
      </div>

      <Footer />
    </>
  );
}

export default CheckAvailableRoomsWrapper;
