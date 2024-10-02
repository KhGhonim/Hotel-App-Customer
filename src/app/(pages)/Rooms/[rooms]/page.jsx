"use client";

import { FaBed } from "react-icons/fa6";
import { MdViewInAr } from "react-icons/md";
import { FaWifi, FaCoffee, FaTv, FaBath, FaStar, FaHome } from "react-icons/fa";
import { BiSolidFridge, BiSolidWasher } from "react-icons/bi";
import { PiHairDryerLight, PiOven } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { GiSlippers } from "react-icons/gi";
import { FcSafe } from "react-icons/fc";
import { MdOutlineRoomService } from "react-icons/md";
import HotelLogo from "../../../../../public/images/Amazing view.jpg";
import terace from "../../../../../public/images/cay in terace.jpg";
import Cityscape from "../../../../../public/images/Cityscape with river.jpg";
import taksim from "../../../../../public/images/taksim.jpg";
import Entrance from "../../../../../public/images/Entrance-scaled.jpg.webp";
import ImagePicker from "./ImagePicker";
import CalenderPicker from "./CalenderPicker";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "next/navigation";
import Header from "components/ClientInterface/Header/Header";

const Skeleton = ({ className }) => (
  <div className={`bg-gray-700 animate-pulse ${className}`}></div>
);
export default function page() {
  const params = useParams().rooms;
  const [Data, setData] = useState(null);
  console.log(Data)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3000/api/reservation/oneRoom?q=${params}`,

        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",
          cache: "no-store",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      }
      setData(data);
    };

    if (params) {
      fetchData();
    }
  }, [params]);

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

  if (Data === null || Data.length === 0) {
    return (
      <div className="w-full min-h-screen bg-gray-900 py-32 text-white p-4 md:p-6 space-y-6">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Main image and thumbnails */}
          <div className="w-full lg:w-2/3 space-y-4">
            <Skeleton className="w-full aspect-[4/3] rounded-lg" />
            <div className="flex gap-2 overflow-x-auto py-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-20 w-32 flex-shrink-0 rounded" />
              ))}
            </div>
          </div>

          {/* Right column - Hotel details */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-8 w-3/4" />
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-5 w-5 mr-1 rounded-full" />
                  ))}
                </div>
                <Skeleton className="h-4 w-16" />
              </div>
            </div>

            <Skeleton className="h-24 w-full" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-24" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-8 w-20 rounded-md" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Booking section */}
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-12 w-full" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-12 w-full sm:w-32" />
          </div>
        </div>
      </div>
    );
  }

  if (Data) {
    return (
      <div className="w-full min-h-screen bg-gray-900">
        <Header />
        <div className=" bg-gray-900  px-4 py-32 ">
          <Toaster position="top-right" />
          <div className="grid md:grid-cols-2 gap-8 mx-auto container">
            <div>
              <ImagePicker roomData={roomData} />
            </div>
            <div>
              <h1 className="text-3xl text-slate-100 font-bold mb-2">
                {Data?.title}
              </h1>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.floor(Data?.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-white">
                  {Data?.rating} out of 5
                </span>
              </div>
              <p className="text-white mb-6">{Data?.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6 text-white">
                <div className="flex items-center ">
                  <FaBed className="w-5 h-5 mr-2" />
                  <span>{Data?.bed_type}</span>
                </div>
                <div className="flex items-center">
                  <FaHome className="w-5 h-5 mr-2" />
                  <span>{Data?.room_type}</span>
                </div>
                <div className="flex items-center">
                  <MdViewInAr className="w-5 h-5 mr-2" />
                  <span>{Data?.room_view}</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-slate-50">
                Services
              </h2>
              <div className="flex flex-wrap gap-2  mb-6">
                {Data?.services?.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-black bg-white rounded-md px-2 py-1"
                  >
                    {service === "wifi" && <FaWifi className="w-4 h-4 mr-1" />}
                    {service === "coffee" && (
                      <FaCoffee className="w-4 h-4 mr-1" />
                    )}
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
                <h1 className="text-3xl text-slate-100 font-bold mb-2">
                  Book Your Stay
                </h1>
                <h2 className="text-xl font-semibold mb-2 text-slate-50">
                  Select your check-in and check-out dates
                </h2>
              </div>

              <CalenderPicker />

              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-slate-100">
                  ${Data?.price_per_night}{" "}
                  <span className="text-sm font-normal text-white">
                    per night
                  </span>
                </div>
                <button className="bg-black hover:bg-gray-800 transition-all duration-300 text-white font-bold py-2 px-8 rounded">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
