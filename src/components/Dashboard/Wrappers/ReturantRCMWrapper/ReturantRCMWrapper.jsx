"use client";
import { DashboardOpened } from "app/lib/DashboardSlice";
import AboutUsResturant from "../../../../components/Dashboard/RCM/AboutUsResturant/AboutUsResturant.jsx";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuHighlights from "components/Dashboard/RCM/MenuHighlights/MenuHighlights.jsx";
import ChefSpecial from "components/Dashboard/RCM/ChefSpecial/ChefSpecial.jsx";
import GallerySection from "components/Dashboard/RCM/GallerySection/GallerySection.jsx";
import { Toaster } from "react-hot-toast";
export default function ReturantRCMWrapper() {
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
      }  transition-all duration-300  w-full ${
        activeTabs === "About Us" ? "h-screen" : "h-full"
      }`}
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
          Restaurant Content Management
        </h1>
      </header>

      <div className="flex flex-col mb-2 justify-between items-center lg:flex-row gap-8">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-2">
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
              onClick={() => setactiveTabs("Menu Highlights")}
              className={`${
                activeTabs === "Menu Highlights"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
            >
              Menu Highlights
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setactiveTabs("Chef's Special")}
              className={`${
                activeTabs === "Chef's Special"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
            >
              Chef's Special
            </button>
            <button
              onClick={() => setactiveTabs("Gallery")}
              className={`${
                activeTabs === "Gallery"
                  ? "bg-teal-600 text-white"
                  : "bg-white text-teal-600"
              } px-4 py-2 rounded-lg`}
            >
              {" "}
              Gallery
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* About Us Section */}
        {activeTabs === "About Us" && <AboutUsResturant />}

        {/* Menu Highlights Section */}
        {activeTabs === "Menu Highlights" && <MenuHighlights />}

        {/* Chef's Special Section */}
        {activeTabs === "Chef's Special" && <ChefSpecial />}

        {/* Gallery Section */}
        {activeTabs === "Gallery" && <GallerySection />}
      </div>
    </div>
  );
}
