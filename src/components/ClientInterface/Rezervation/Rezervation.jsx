"use client";
import { useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus, FaSpinner } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import AccommodationForm from "./AccommodationForm";
import DiningForm from "./DiningForm";
import HotelLogo from "../../../../public/images/hotel-svgrepo-com.svg";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Rezervation() {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [IsRezervationBarGoDown, setIsRezervationBarGoDown] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("accommodation");
  const [Isloading, setIsloading] = useState(false);
  const [CheckIn, setCheckIn] = useState(null);
  const [CheckInForDisplay, setCheckInForDisplay] = useState(null);
  const [CheckOut, setCheckOut] = useState(null);
  const [CheckOutForDisplay, setCheckOutForDisplay] = useState(null);
  const dateInputRef = useRef(null);
  const dateInputRef2 = useRef(null);
  const router = useRouter();

  {
    /* Handlers CheckIn  */
  }
  const handleDateChangeForCheckIn = (event) => {
    const selectedDate = new Date(event.target.value);
    setCheckIn(selectedDate.toISOString().slice(0, 10));
    const formattedDate = selectedDate
      .toLocaleDateString("en-US", { day: "numeric", month: "short" })
      .toUpperCase();
    setCheckInForDisplay(formattedDate);
  };

  {
    /* Handlers CheckOut */
  }
  const handleDateChangeForCheckOut = (event) => {
    const selectedDate = new Date(event.target.value);
    setCheckOut(selectedDate.toISOString().slice(0, 10));
    const formattedDate = selectedDate
      .toLocaleDateString("en-US", { day: "numeric", month: "short" })
      .toUpperCase();
    setCheckOutForDisplay(formattedDate);
  };

  {
    /* Date picker for CheckIn */
  }
  const openDatePicker = () => {
    dateInputRef.current.showPicker();
  };

  {
    /* Date picker for CheckOut */
  }
  const openDatePicker2 = () => {
    dateInputRef2.current.showPicker();
  };

  const addAdults = (eo) => {
    eo.preventDefault();

    setAdults(adults + 1);
  };
  const removeAdults = (eo) => {
    eo.preventDefault();

    if (adults > 1) {
      setAdults(adults - 1);
    }

    if (adults < 0) {
      setAdults(1);
    }
  };
  const addKids = (eo) => {
    eo.preventDefault();
    setKids(kids + 1);
  };
  const removeKids = (eo) => {
    eo.preventDefault();

    if (kids > 0) {
      setKids(kids - 1);
    }

    if (kids < 0) {
      setKids(0);
    }
  };

  {
    /* Rezervation bar go down */
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 750) {
        setIsRezervationBarGoDown(true);
      } else {
        setIsRezervationBarGoDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const RezervationAPI = `${process.env.NEXT_PUBLIC_Rezervation_API}?checkIn=${CheckIn}&checkOut=${CheckOut}&adults=${adults}&kids=${kids}`;
  const HandleRezervation = async (eo) => {
    eo.preventDefault();
    setIsloading(true);

    if (!CheckIn || !CheckOut || !adults) {
      toast.error("Please fill in all fields");
      setIsloading(false);
      return;
    }

    try {
      const res = await fetch(RezervationAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        setIsloading(false);

        return;
      }
      setIsloading(false);

      toast.success("Rooms are available, redirecting to room selection...");
      router.push(
        `/CheckAvailableRoom?checkIn=${CheckIn}&checkOut=${CheckOut}&adults=${adults}&kids=${kids}`
      );
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
    } finally {
      setIsloading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      {/* Rezervation PC */}
      <div
        id="rezervation"
        className={`hidden lg:block ${
          IsRezervationBarGoDown
            ? "fixed top-0 right-0 bg-[#AF8D70] rounded-lg"
            : "absolute bottom-5 right-0 "
        } tranition-all duration-300 ease-linear  z-50`}
      >
        <form
          onSubmit={HandleRezervation}
          className="flex items-center justify-between space-x-2  p-4 max-w-5xl   rounded-lg shadow-md"
        >
          {/* Rezervation date picker for check in */}
          <div
            className="flex flex-col items-center cursor-pointer hover:bg-[#CBB665] duration-300 group ease-linear py-6 px-9 rounded-xl"
            onClick={openDatePicker}
          >
            <span className="text-white text-center font-extrabold items-center cursor-pointer">
              ARRIVAL
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
                {CheckInForDisplay}
              </span>
              <span className="text-xl md:text-2xl lg:text-3xl text-white font-bold group-hover:rotate-180 duration-300">
                <IoIosArrowDown />
              </span>
            </div>

            {/* Hidden input for date selection */}
            <input
              ref={dateInputRef}
              type="date"
              className="absolute opacity-0 pointer-events-none"
              onChange={handleDateChangeForCheckIn}
            />
          </div>

          {/* Rezervation date picker for check out */}

          <div
            className="flex flex-col items-center cursor-pointer hover:bg-[#CBB665] duration-300 group ease-linear py-6 px-9 rounded-xl"
            onClick={openDatePicker2}
          >
            <span className="text-white text-center font-extrabold items-center cursor-pointer">
              DEPARTURE
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
                {CheckOutForDisplay}
              </span>
              <span className="text-xl md:text-2xl lg:text-3xl text-white font-bold group-hover:rotate-180 duration-300">
                <IoIosArrowDown />
              </span>
            </div>

            {/* Hidden input for date selection */}
            <input
              ref={dateInputRef2}
              type="date"
              className="absolute opacity-0 pointer-events-none"
              onChange={handleDateChangeForCheckOut}
            />
          </div>

          {/* Rezervation number of guests */}
          <div className="flex flex-col  items-center cursor-pointer hover:bg-[#CBB665] duration-300 ease-linear py-6 px-9 rounded-xl">
            <span className="text-white   text-center font-extrabold items-center cursor-pointer">
              ADULT
            </span>
            <div className="flex items-center">
              <button className="text-white  p-2 rounded-l">
                <FaMinus onClick={removeAdults} />
              </button>
              <span className="px-4 font-extrabold text-white">{adults}</span>
              <button className="text-white  p-2 rounded-r">
                <FaPlus onClick={addAdults} />
              </button>
            </div>
          </div>

          {/* Rezervation number of kids */}
          <div className="flex flex-col cursor-pointer  items-center hover:bg-[#CBB665] duration-300 ease-linear py-6 px-9 rounded-xl">
            <span className="text-white   text-center font-extrabold items-center cursor-pointer">
              CHILDREN
            </span>
            <div className="flex items-center">
              <button className="text-white  p-2 rounded-l">
                <FaMinus onClick={removeKids} />
              </button>
              <span className="px-4 extrabold text-white">{kids}</span>
              <button className="text-white  p-2 rounded-r">
                <FaPlus onClick={addKids} />
              </button>
            </div>
          </div>

          {/* Rezervation Button */}
          <button
            type="submit"
            disabled={Isloading}
            className={` ${
              IsRezervationBarGoDown ? "bg-[#C6A587]" : "bg-[#99826E]"
            }  text-white p-5 md:p-7 lg:p-9 rounded-xl hover:bg-[#ACA4A3] transition-all duration-300 ease-in-out`}
          >
            {Isloading ? <FaSpinner className="animate-spin" /> : "Book Now"}
          </button>
        </form>
      </div>

      {/* Rezervation Button */}
      <div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-500 text-base md:text-2xl hover:bg-blue-500/80 transition-all duration-300 ease-in-out text-white p-4 px-6 md:p-8 md:px-12 mt-20 rounded-lg"
        >
          Book Now
        </button>
      </div>

      {/* Rezervation Modal */}
      <div
        className={`w-full  inset-0 z-50   max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg ${
          isFormOpen ? " fixed translate-y-0" : " absolute -translate-y-[200%]"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-5">
            <Image
              width={100}
              height={100}
              src={HotelLogo}
              alt="Address Hotels+Resorts"
              className="h-12 md:w-24 w-12 md:h-24 rounded-full"
            />
            <h1 className="text-xl font-bold">KG Cave Hotel</h1>
          </div>
          <button
            onClick={() => setIsFormOpen(false)}
            className="text-gray-600 hover:text-gray-800 hover:scale-110"
          >
            <MdClose className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div>
          <div className="grid w-full grid-cols-2 mb-6 rounded-lg">
            <button
              className={`py-2 px-4 text-center text-xl md:text-2xl rounded-lg ${
                activeTab === "accommodation"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("accommodation")}
            >
              Accommodation
            </button>
            <button
              className={`py-2 px-4 text-center text-xl md:text-2xl rounded-lg ${
                activeTab === "dining"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("dining")}
            >
              Banquet
            </button>
          </div>

          {activeTab === "accommodation" ? (
            <AccommodationForm setIsFormOpen={setIsFormOpen} />
          ) : (
            <DiningForm setIsFormOpen={setIsFormOpen} />
          )}
        </div>
      </div>
    </>
  );
}
