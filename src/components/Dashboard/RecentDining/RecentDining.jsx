"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCalendar, FaClock, FaSpinner, FaUser } from "react-icons/fa";

export default function RecentDining() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const FetchDiningData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_Dashboarddining_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include",
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
      }

      setData(data);
    };

    FetchDiningData();
  }, []);

  if (!Data || Data.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }
  return (
    <div className="p-6 w-full md:w-2/3 h-96 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Dining Reservations
        </h1>
        <p className="text-gray-500">Overview of all recent reservations</p>
      </div>

      {/* Scrollable area for reservations */}
      <div className="h-64 overflow-y-auto space-y-4 pr-2">
        {Data?.map((reservation, index) => {
          return (
            <div
              key={index}
              className="group flex flex-wrap gap-3 justify-between text-xs items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Reservation details date and time */}
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-green-500 w-5 h-5" />
                <span className="text-gray-800 font-medium">
                  {reservation?.date.slice(0, 10)}
                </span>
              </div>

              <div className="w-0.5 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-green-500 w-5 h-5" />
                <span className="text-gray-800 font-medium">
                  {reservation?.time.slice(0, 5)}
                </span>
              </div>
              <div className="w-0.5 h-4 bg-gray-300 rounded-full"></div>

              {/* Reservation details guests */}
              <div className="flex items-center space-x-2 mb-2">
                <FaUser className="text-green-500 w-5 h-5" />
                <span className="text-gray-800 font-medium">
                  {reservation?.people}{" "}
                  {reservation?.people === 1 ? "Guest" : "Guests"}
                </span>
              </div>
              <div className="w-0.5 h-4 bg-gray-300 rounded-full"></div>

              {/* Reservation details Image and Name */}
              <div className="flex items-center space-x-3 ">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm">
                  <Image
                    width={40}
                    height={40}
                    src={reservation?.image}
                    alt={reservation?.user_firstname}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-500">
                    {reservation?.user_firstname} {reservation?.user_lastname}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
