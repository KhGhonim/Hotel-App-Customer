"use client";
import { DashboardOpened } from "app/lib/DashboardSlice";
import AboutCards from "components/Dashboard/AboutCards/AboutCards";
import AboutUsContent from "components/Dashboard/AboutContent/AboutUsContent";
import { useState, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function ContentAboutUsWrapper() {
  const [activeTabs, setactiveTabs] = useState("About Us");

  // @ts-ignore
  const { IsSideBarOpened } = useSelector((state) => state.Users);

  const dispatch = useDispatch();
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      dispatch(DashboardOpened());
    }
  };


  return (
    <div
      className={`container mx-auto  lg:pl-0  pt-24 ${
        IsSideBarOpened ? "!pl-36" : "pl-20 p-6 "
      }  transition-all duration-300  w-full h-full`}
    >
      <Toaster position="top-right" />
      {IsSideBarOpened ? (
        <div
          ref={ref}
          onClick={handleClickOutside}
          className="block md:hidden absolute inset-0 z-10 bg-gray-900 bg-opacity-50"
        ></div>
      ) : null}

      <header className="mb-8 text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-teal-600">
          About Content Management
        </h1>
      </header>

      <div className="flex flex-col mb-2 justify-between items-center lg:flex-row gap-8">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-3">
            <button
              onClick={() => setactiveTabs("About Us")}
              className={`${
                activeTabs === "About Us"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
            >
              About Us
            </button>
            <button
              onClick={() => setactiveTabs("Cards")}
              className={`${
                activeTabs === "Cards"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
            >
              Cards
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* About Us Section */}
        {activeTabs === "About Us" && <AboutUsContent />}

        {/* Cards Section */}
        {activeTabs === "Cards" && <AboutCards />}
      </div>
    </div>
  );
}
