"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
// @ts-ignore
import hotelPic from "../../../../public/images/Rooms/Deluxe Double Room with Turkish Bath, istanbul, City View.jpg";
import Image from "next/image";
import Link from "next/link";
export default function RecentBooking() {
  const [data, setdata] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  /**
   * Number of items to display on each page.   */
  let itemsPerPage = 3;
  /**
   * Calculate the index of the last item to display on the current page.
   */
  const indexOfLastItem = currentPage * itemsPerPage;
  /**
   * Calculate the index of the first item to display on the current page.
   */
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  /**
   * Slice the data array to get the items to display on the current page.
   */
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  /**
   * Calculate the total number of pages needed to display all items.
   */
  const totalPages = Math.ceil(data.length / itemsPerPage);

  /**
   * Increment the current page state by 1, if possible.
   */
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1);
    }
  };

  /**
   * Decrement the current page state by 1, if possible.
   */
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const getdata = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BOOKING_API}`, {
        cache: "no-store",
        next: { revalidate: 0 },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      }

      setdata(data);
    };
    getdata();
  }, []);


  if (!data || data.length === 0) {
    return (
      <div className="h-96 flex items-center justify-start">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }
  if (data.length > 0) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-xl h-96 transition-all duration-300 w-full md:w-2/5 overflow-hidden relative">
        <h2 className="mb-2 mt-8 lg:mb-6 lg:mt-0 text-lg font-semibold">
          Recent Bookings
        </h2>
        <div className="space-y-4 overflow-y-auto h-80">
          {currentItems.map((booking, index) => {
            const bookingDate = new Date(
              booking?.booking_date
            ).toLocaleDateString();
            return (
              <Link
                key={index}
                className="flex items-center justify-between hover:bg-gray-100 p-3 rounded-lg transition-all duration-300"
                href={`/booking/${booking?.booking_id}`}
              >
                <div className="flex items-center space-x-4">
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    src={hotelPic}
                    alt={booking?.booking_id}
                    className="h-16 w-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{booking?.room_type}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        {booking?.user_firstname} {booking?.user_lastname}
                      </span>
                      <span className="text-xs text-gray-500">
                        {bookingDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-green-500 px-3 py-1 text-xs font-medium text-white">
                  {booking?.number_of_guests}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="absolute top-4 right-4 w-60 flex justify-between items-center rounded-lg">
          <button
            className={`text-sm font-semibold px-3 py-1 rounded-md transition-all duration-300 ${
              currentPage === 1
                ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                : "text-white bg-blue-600 hover:bg-blue-800"
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className={`text-sm font-semibold px-3 py-1 rounded-md transition-all duration-300 ${
              currentPage === totalPages
                ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                : "text-white bg-blue-600 hover:bg-blue-800"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
