"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBaby, FaCalendar, FaSpinner, FaUsers } from "react-icons/fa";
import { FaWifi, FaCoffee, FaTv, FaBath } from "react-icons/fa";
import { BiSolidFridge, BiSolidWasher } from "react-icons/bi";
import { PiHairDryerLight, PiOven } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { GiSlippers } from "react-icons/gi";
import { FcSafe } from "react-icons/fc";
import { MdOutlineRoomService } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import HotelLogo from "../../../../public/images/Rooms/Connecting Family Room, istanbul, Garden View.webp";
import DiferentDates from "./DiferentDates";
import Link from "next/link";
import Footer from "components/ClientInterface/Footer/Footer";

export default function page() {
  const [Isloading, setIsloading] = useState(false);
  const [Data, setData] = useState([]);
  const searchParams = useSearchParams();
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const adults = searchParams.get("adults");
  const kids = searchParams.get("kids");

  useEffect(() => {
    const HandleRezervation = async () => {
      setIsloading(true);

      if (!checkIn || !checkOut || !adults) {
        toast.error("Please fill in all fields");
        setIsloading(false);
        return;
      }
      setIsloading(true);

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_Rezervation_API}?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&kids=${kids}`,

          {
            cache: "no-store",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const data = await res.json();
        if (data.error === "Check-in date must be before check-out date") {
          toast.error(data.error);
          setIsloading(false);
          return;
        }

        if (!res.ok) {
          toast.error(data.error);
          setIsloading(false);

          return;
        }
        setIsloading(false);

        setData(data);
      } catch (error) {
        toast.error("Something went wrong, please try again later...");
      } finally {
        setIsloading(false);
      }
    };

    HandleRezervation();
  }, [checkOut, checkIn, adults, kids]);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">
              Your Perfect Stay Awaits
            </h2>
            <p className="text-xl mb-4">
              Discover our selection of rooms for your dates:
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
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
              className="bg-slate-50 hover:bg-slate-100 transition-all duration-500 text-black px-6 py-3 rounded-lg"
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

        <h1 className="text-3xl font-bold mb-6">Available Rooms</h1>

        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Your Search</h2>
          <div className="flex flex-wrap gap-4">
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
                    {room?.services?.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-sm px-2 py-1 rounded-full flex items-center"
                      >
                        <span>
                          {amenity === "wifi" && (
                            <FaWifi className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "coffee" && (
                            <FaCoffee className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "turkish bath" && (
                            <FaBath className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "tv" && (
                            <FaTv className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "washer" && (
                            <BiSolidWasher className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "minibar" && (
                            <BiSolidFridge className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "oven" && (
                            <PiOven className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "hairdryer" && (
                            <PiHairDryerLight className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "air conditioning" && (
                            <TbAirConditioning className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "slippers" && (
                            <GiSlippers className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "safe" && (
                            <FcSafe className="w-4 h-4 mr-1" />
                          )}
                          {amenity === "roomervice" && (
                            <MdOutlineRoomService className="w-4 h-4 mr-1" />
                          )}
                        </span>
                        <span className="ml-1">{amenity}</span>
                      </span>
                    ))}
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
