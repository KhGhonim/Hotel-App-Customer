"use client";
import { useEffect, useRef, useState } from "react";
import { CiSettings } from "react-icons/ci";

export default function DarkAndLightMode() {
  const [IsSettignOpened, setIsSettignOpened] = useState(false);
  const [MakeSpinnerHidden, setMakeSpinnerHidden] = useState("");

  const [activeTab, setActiveTab] = useState("Theme");
  const [background, setBackground] = useState(
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "Morning Theme"
  );

  const previousThemeClass = useRef("");

  useEffect(() => {
    const themeClasses = {
      "Morning Theme": "light",
      "Sunset Theme": "yellow",
      "Ocean Breeze Theme": "babyblue",
      "Forest Theme": "green",
      "Midnight Theme": "dark",
    };

    // Remove the previous theme class if it exists
    if (previousThemeClass.current) {
      document.documentElement.classList.remove(previousThemeClass.current);
    }

    // Add the new theme class
    const newThemeClass = themeClasses[background];
    document.documentElement.classList.add(newThemeClass);

    // Store the new theme class for next time
    previousThemeClass.current = newThemeClass;

    // Save theme to localStorage
    localStorage.setItem("theme", background);
  }, [background]);
  const [container, setContainer] = useState("Wide");
  const [bodyFont, setBodyFont] = useState("Roboto");
  const [headerLayout, setHeaderLayout] = useState("Horizontal");
  const [headerPosition, setHeaderPosition] = useState("Static");

  const handleDeleteAllCookies = () => {
    // Delete all cookies

    // Reload the page
    window.location.reload();
  };

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setIsSettignOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const HandleDisabled = () => {
    setMakeSpinnerHidden("hidden");
    setIsSettignOpened(false);
  };

  return (
    <div className={`${MakeSpinnerHidden} fixed z-50 top-1/3 right-0 `}>
      <button
        onClick={() => setIsSettignOpened(!IsSettignOpened)}
        className=" bg-red-500 text-white p-2 rounded-full"
      >
        <CiSettings className="text-2xl animate-spin" />
      </button>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
          IsSettignOpened ? "block" : "hidden"
        }`}
      >
        <div
          ref={ref}
          className={` absolute  w-full max-w-sm md:max-w-2xl rounded-lg bg-white p-6 shadow-xl  ${
            IsSettignOpened ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base md:text-lg lg:text-2xl font-bold">
              Pick your style
            </h2>
            <div className="flex gap-2">
              <button
                onClick={handleDeleteAllCookies}
                className="rounded-md bg-red-500 p-2 md:px-4 md:py-2 text-xs md:text-sm lg:text-base text-white hover:bg-red-600"
              >
                Delete All Cookie
              </button>
              <button
                onClick={HandleDisabled}
                className="rounded-md bg-slate-500 p-2 md:px-4 md:py-2 text-xs md:text-sm lg:text-base text-white hover:bg-slate-600"
              >
                Make it disabled
              </button>
            </div>
          </div>

          <div className="mb-6 flex border-b">
            {["Theme", "Header", "Content"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-red-500 font-semibold text-red-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Theme" && (
            <div>
              <div className="mb-4">
                <label
                  htmlFor="background"
                  className="mb-2 block font-semibold"
                >
                  Background
                </label>
                <select
                  id="background"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2"
                >
                  <option>Morning Theme</option>
                  <option>Sunset Theme</option>
                  <option>Ocean Breeze Theme</option>
                  <option>Forest Theme </option>
                  <option>Midnight Theme</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "Header" && (
            <div>
              <div className="mb-4">
                <label
                  htmlFor="headerLayout"
                  className="mb-2 block font-semibold"
                >
                  Layout
                </label>
                <select
                  id="headerLayout"
                  value={headerLayout}
                  onChange={(e) => setHeaderLayout(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2"
                >
                  <option>Horizontal</option>
                  <option>Vertical</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="headerPosition"
                  className="mb-2 block font-semibold"
                >
                  Header position
                </label>
                <select
                  id="headerPosition"
                  value={headerPosition}
                  onChange={(e) => setHeaderPosition(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2"
                >
                  <option>Static</option>
                  <option>Fixed</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "Content" && (
            <div>
              <div className="mb-4">
                <label htmlFor="container" className="mb-2 block font-semibold">
                  Container
                </label>
                <select
                  id="container"
                  value={container}
                  onChange={(e) => setContainer(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2"
                >
                  <option>Wide</option>
                  <option>Boxed</option>
                  <option>Full-width</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="bodyFont" className="mb-2 block font-semibold">
                  Body Font
                </label>
                <select
                  id="bodyFont"
                  value={bodyFont}
                  onChange={(e) => setBodyFont(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2"
                >
                  <option>Roboto</option>
                  <option>Open Sans</option>
                  <option>Lato</option>
                  <option>Montserrat</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
