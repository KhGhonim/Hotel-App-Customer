"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Toaster } from "react-hot-toast";
import HotelLogo from "../../../../public/images/Rooms/Connecting Family Room, istanbul, Garden View.webp";
import { BiSolidWasher, BiSolidFridge } from "react-icons/bi";
import { FaWifi, FaCoffee, FaBath, FaTv } from "react-icons/fa";
import { FcSafe } from "react-icons/fc";
import { GiSlippers } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { PiOven, PiHairDryerLight } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import Link from "next/link";
import useRezervationConfirmation from "Hooks/useRezervationConfirmation";
import { CgHome } from "react-icons/cg";

export default function ReservationConfirmation() {
  const searchParams = useSearchParams();
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const adults = searchParams.get("adults");
  const kids = searchParams.get("kids");
  const price = parseInt(searchParams.get("price"), 10);
  const roomID = searchParams.get("room_id");

  const {
    isConfirmed,
    RoomData,
    handleConfirmAndPay,
    setSpecialRequest,
    totalPrice,
    numberOfDays,
    session,
  } = useRezervationConfirmation(
    roomID,
    price,
    kids,
    adults,
    checkIn,
    checkOut
  );
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto bg-white shadow-lg relative rounded-lg p-8">
        <Link
          href="/"
          className="absolute top-0 z-50 right-0 text-white p-1 bg-black/80  hover:scale-105 transition-all duration-300 rounded-md"
        >
          <CgHome className="  text-white font-semibold rounded-lg  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        </Link>
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Reservation Confirmation
          </h1>
          <h2 className="text-xl text-gray-600">
            Please review your booking details below
          </h2>
        </div>

        {/* Property Image */}
        <div className="relative mt-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            className="w-full h-80 object-cover"
            width={800}
            height={400}
            src={RoomData?.image || HotelLogo}
            alt={RoomData?.title}
          />
        </div>

        {/* Property Details */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            {RoomData?.title}
          </h2>
          <p className="text-gray-600 mt-2">{RoomData.description}</p>

          {/* Facilities */}
          <div className="flex flex-wrap gap-2 mt-4">
            {RoomData?.services?.map((facility, index) => {
              const iconMap = {
                wifi: <FaWifi className="w-4 h-4 mr-1" />,
                coffee: <FaCoffee className="w-4 h-4 mr-1" />,
                "turkish bath": <FaBath className="w-4 h-4 mr-1" />,
                tv: <FaTv className="w-4 h-4 mr-1" />,
                washer: <BiSolidWasher className="w-4 h-4 mr-1" />,
                minibar: <BiSolidFridge className="w-4 h-4 mr-1" />,
                oven: <PiOven className="w-4 h-4 mr-1" />,
                hairdryer: <PiHairDryerLight className="w-4 h-4 mr-1" />,
                "air conditioning": (
                  <TbAirConditioning className="w-4 h-4 mr-1" />
                ),
                slippers: <GiSlippers className="w-4 h-4 mr-1" />,
                safe: <FcSafe className="w-4 h-4 mr-1" />,
                roomservice: <MdOutlineRoomService className="w-4 h-4 mr-1" />,
              };

              const icon = iconMap[facility];
              if (!icon) return null;

              return (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-sm font-medium"
                >
                  <span>{icon}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking and Price Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Booking Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              Booking Information
            </h3>
            <p className="mt-2 text-gray-600">
              <strong>Check-in:</strong> {checkIn}
            </p>
            <p className="mt-1 text-gray-600">
              <strong>Check-out:</strong> {checkOut}
            </p>
            <p className="mt-1 text-gray-600">
              <strong>Total Duration:</strong> {numberOfDays} days.
            </p>
            <p className="mt-1 text-gray-600">
              <strong>Guests:</strong> {adults} Adults, {kids} Children
            </p>
          </div>

          {/* Price Breakdown */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              Price Breakdown
            </h3>
            <p className="mt-2 text-gray-600">
              <strong>Total:</strong> ${totalPrice}
            </p>

            <div className="mt-1 text-gray-600 flex flex-col justify-between text-xs">
              <p>
                <strong>Special Requests</strong>{" "}
              </p>
              <input
                type="text"
                onChange={(e) => setSpecialRequest(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-10"
              />
            </div>
          </div>
        </div>

        {/* Confirmation and Payment Section */}
        {!isConfirmed ? (
          <button
            className="w-full mt-8 bg-blue-600 text-white text-lg py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={handleConfirmAndPay}
          >
            Confirm and Pay
          </button>
        ) : (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-8 rounded-lg">
            <p className="font-bold">
              Thank you! Your reservation has been successfully made.
            </p>
            <p>
              A confirmation email has been sent to {session?.user?.Email} with
              all the reservation details.
            </p>
            <p>You can also view your reservation in your profile.</p>
          </div>
        )}
      </div>
    </div>
  );
}
