"use client";
import Footer from "components/ClientInterface/Footer/Footer";
import Header from "components/ClientInterface/Header/Header";
import DeleteModal from "components/ClientInterface/Models/DeleteModal";
import EditModel from "components/ClientInterface/Models/showEditModal";
import usePerPersonReservation from "Hooks/usePerPersonReservation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { BiSolidWasher, BiSolidFridge } from "react-icons/bi";
import {
  FaBath,
  FaCoffee,
  FaEllipsisV,
  FaPhone,
  FaTv,
  FaWifi,
} from "react-icons/fa";
import { FcSafe } from "react-icons/fc";
import { GiSlippers } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { PiOven, PiHairDryerLight } from "react-icons/pi";
import { TbAirConditioning, TbMessageCircle } from "react-icons/tb";

function ProfileWrapper() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // @ts-ignore
  const { data: session, status } = useSession();
  const { BookingData } = usePerPersonReservation(session?.user?.id);
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

  const BookingInfo = ({ label, date }) => (
    <div className="flex flex-col">
      <h3 className="text-xs font-medium text-gray-500">{label}</h3>
      <p className="mt-1 text-gray-900">
        {date &&
          new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
        {" | "}
        {date &&
          new Date(date).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
      </p>
    </div>
  );

  const ServiceBadge = ({ service }) => {
    const icons = {
      wifi: FaWifi,
      coffee: FaCoffee,
      "turkish bath": FaBath,
      tv: FaTv,
      washer: BiSolidWasher,
      minibar: BiSolidFridge,
      oven: PiOven,
      hairdryer: PiHairDryerLight,
      "air conditioning": TbAirConditioning,
      slippers: GiSlippers,
      safe: FcSafe,
      roomservice: MdOutlineRoomService,
    };
    const Icon = icons[service] || null;
    return (
      <div className="bg-gray-100 text-green-600 flex items-center gap-2 px-4 py-2 rounded-md shadow-sm">
        {Icon && <Icon className="w-4 h-4" />}{" "}
        <span className="text-sm">{service}</span>
      </div>
    );
  };

  if (!BookingData || BookingData.length === 0) {
    return (
      <div className="flex flex-col md:flex-row p-6 pt-24 gap-2 min-h-screen animate-pulse">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 md:p-10">
          <div className="relative flex items-center space-x-6">
            <div className="rounded-full w-32 h-32 bg-gray-200"></div>
            <div>
              <div className="h-6 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/4"></div>
            </div>
            <div className="h-8 w-8 bg-gray-200 rounded ml-auto"></div>
          </div>
          <div className="flex space-x-4 mt-6">
            <div className="p-4 rounded-full bg-gray-200"></div>
            <div className="flex-1 p-4 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="grid grid-cols-2 gap-6 border border-gray-200 p-4 rounded-lg bg-gray-50 mt-6">
            <div className="h-5 bg-gray-200 rounded mb-1"></div>
            <div className="h-5 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <div className="h-5 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="py-1 px-2 rounded-full bg-gray-200"></div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 shadow-lg">
          <div className="object-cover w-full h-full rounded-lg bg-gray-200 block"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6">
            <div className="bg-gray-200 px-4 py-1 rounded-full w-24 mb-4"></div>
            <div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full  h-full flex flex-col bg-gray-900 relative `}>
      <Header />

      <div className="flex flex-col md:flex-row p-6 px-5 pt-24 gap-2 min-h-screen">
        {/* Profile Info Section */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 md:p-10">
          <div className="flex flex-col space-y-6">
            {/* Profile Header */}
            <div className="relative flex items-center space-x-6">
              <Image
                src={session?.user?.ProfileImg}
                alt={`Profile image of ${session?.user?.name}`}
                width={90}
                height={90}
                quality={100}
                className="rounded-full object-cover w-32 h-32 border-4 border-gray-500 shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">
                  {session?.user?.Firstname} {session?.user?.Lastname}
                </h1>
                <p className="text-sm text-gray-500">ID: {session?.user?.id}</p>
              </div>
              <button
                onClick={toggleDropdown}
                className="ml-auto p-2 text-gray-500 hover:text-gray-900"
              >
                <FaEllipsisV className="h-5 w-5" />
              </button>
              {showDropdown && (
                <div className="absolute top-14 right-0 mt-1 w-48 bg-white shadow-md rounded-md py-2 z-10">
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
              <button className="p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition shadow-lg">
                <FaPhone className="h-5 w-5" />
              </button>
              <button className="flex-1 flex items-center justify-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-lg">
                <TbMessageCircle className="h-5 w-5 mr-2" /> Send Message
              </button>
            </div>

            {/* Booking Info */}
            <div className="grid grid-cols-2 gap-6 border border-gray-200 p-4 rounded-lg bg-gray-50">
              <BookingInfo label="Check In" date={BookingData?.check_in_date} />
              <BookingInfo
                label="Check Out"
                date={BookingData?.check_out_date}
              />
            </div>

            {/* Room Information */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {BookingData?.title} - {BookingData?.room_type}
                </h2>
                <div className="text-right">
                  <span className="text-3xl font-bold text-green-500">
                    ${BookingData?.price_per_night}
                  </span>
                  <span className="text-sm text-gray-500">/night</span>
                </div>
              </div>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {BookingData?.description}
              </p>
            </div>

            {/* Facilities */}
            <div className="flex flex-wrap gap-4 mt-4">
              {BookingData?.services?.map((service, i) => (
                <ServiceBadge key={i} service={service} />
              ))}
            </div>
          </div>
        </div>

        {/* Room Image Section */}
        <div className="relative w-full md:w-1/2 shadow-lg">
          <Image
            className="object-cover w-full h-full rounded-lg"
            placeholder="blur"
            blurDataURL="/placeholder.svg"
            width={1920}
            height={1080}
            quality={100}
            src={BookingData?.rooms_image}
            alt="Room photo"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6 text-white">
            <div className="self-end bg-green-500 px-4 py-1 rounded-full">
              BOOKED
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">{BookingData?.title}</h2>
              <p className="leading-relaxed">{BookingData?.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Edit Profile */}
      {showEditModal && <EditModel closeModal={closeModal} />}
      {/* Modal: Confirm Delete Profile */}
      {showDeleteModal && <DeleteModal closeModal={closeModal} />}

      <Footer />
    </div>
  );
}

export default ProfileWrapper;
