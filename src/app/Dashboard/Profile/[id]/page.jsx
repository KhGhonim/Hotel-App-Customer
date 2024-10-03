"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FaBed,
  FaEllipsisV,
  FaPhone,
  FaTv,
  FaWater,
  FaWifi,
  FaWind,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";

export default function page() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const openEditModal = () => {
    setShowDropdown(false);
    setShowEditModal(true);
  };

  const openDeleteModal = () => {
    setShowDropdown(false);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 min-h-dvh relative ">
      <div className="flex flex-col md:flex-row p-5 lg:p-10 shadow-lg h-full bg-gray-50">
        <div className="flex-1  overflow-auto p-5 lg:p-10 bg-white shadow-md rounded-lg">
          <div className="flex-1 overflow-auto lg:p-8 bg-white  rounded-lg">
            <div className="flex flex-col space-y-6 w-full mx-auto">
              {/* Profile Header */}
              <div className="relative flex items-center space-x-6">
                <Image
                  src="/placeholder.svg"
                  alt="Profile picture"
                  width={90}
                  height={90}
                  className="rounded-full border-4 border-gray-200 shadow-lg"
                />
                <div>
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Roberto Mansini
                  </h1>
                  <p className="text-sm text-gray-400">ID 1234124512551</p>
                </div>
                <button
                  onClick={toggleDropdown}
                  className="ml-auto p-2 text-gray-500 hover:text-gray-900 relative"
                >
                  <FaEllipsisV className="h-5 w-5" />
                </button>

                {showDropdown && (
                  <div className="absolute top-14 right-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={openEditModal}
                    >
                      Edit Profile
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={openDeleteModal}
                    >
                      Delete Profile
                    </button>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex items-center justify-center p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg">
                  <FaPhone className="h-5 w-5" />
                </button>
                <button className="flex-1 flex items-center justify-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 shadow-lg">
                  <TbMessageCircle className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>

              {/* Booking Info */}
              <div className="grid grid-cols-2 gap-6 border border-gray-200 p-4 rounded-lg bg-gray-50">
                <div className="flex flex-col">
                  <h3 className="text-xs font-medium text-gray-500">
                    Check In
                  </h3>
                  <p className="mt-1 text-gray-900">
                    October 30th, 2021 | 08:23 AM
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs font-medium text-gray-500">
                    Check Out
                  </h3>
                  <p className="mt-1 text-gray-900">November 2nd, 2021</p>
                </div>
              </div>

              {/* Room Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Deluxe Z - 002424
                  </h2>
                  <div>
                    <span className="text-3xl font-bold text-green-500">
                      $145
                    </span>
                    <span className="text-sm text-gray-500">/night</span>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Facilities */}
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="bg-gray-100 text-green-600 flex items-center gap-2 px-4 py-2 rounded-md shadow-sm">
                  <FaBed className="h-5 w-5" />
                  <span className="text-sm">3 Bed Space</span>
                </div>
                <div className="bg-gray-100 text-green-600 flex items-center gap-2 px-4 py-2 rounded-md shadow-sm">
                  <FaShield className="h-5 w-5" />
                  <span className="text-sm">24 Hours Guard</span>
                </div>
                <div className="bg-gray-100 text-green-600 flex items-center gap-2 px-4 py-2 rounded-md shadow-sm">
                  <FaWifi className="h-5 w-5" />
                  <span className="text-sm">Free Wifi</span>
                </div>
                <div className="bg-gray-100 text-green-600 flex items-center gap-2 px-4 py-2 rounded-md shadow-sm">
                  <FaWater className="h-5 w-5" />
                  <span className="text-sm">2 Bathrooms</span>
                </div>
                <div className="bg-gray-100 text-green-600 flex items-center gap-2 px-4 py-2 rounded-md shadow-sm">
                  <FaWind className="h-5 w-5" />
                  <span className="text-sm">Air Conditioner</span>
                </div>
                <div className="bg-gray-100 text-green-600 flex items-center gap-2 px-4 py-2 rounded-md shadow-sm">
                  <FaTv className="h-5 w-5" />
                  <span className="text-sm">Television</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Image Section */}
        <div className="relative w-1/2 h-full">
          <Image
            className="object-cover w-full h-full rounded-l-lg"
            placeholder="blur"
            blurDataURL="/placeholder.svg"
            width={1920}
            height={1080}
            quality={100}
            src="/placeholder.svg"
            alt="Room photo"
          />
          <div className="absolute z-10 inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6 text-white">
            <div className="self-end bg-green-500 px-4 py-1 rounded-full">
              BOOKED
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Bed Room</h2>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Edit Profile */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white z-50  p-6 rounded-md shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form>
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Profile picture"
                  width={90}
                  height={90}
                  className="rounded-full border-4 border-gray-200 shadow-lg w-32 h-32 object-cover cursor-pointer"
                  onClick={() => ref.current.click()}
                />
                <input
                  ref={ref}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Modal: Confirm Delete Profile */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Delete Profile</h2>
            <p className="mb-6">
              Are you sure you want to delete this profile? This action cannot
              be undone.
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
