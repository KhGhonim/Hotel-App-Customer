"use client";
import { useEffect, useRef, useState } from "react";
import { CiSettings } from "react-icons/ci";

export default function DarkAndLightMode() {
  const [IsSettignOpened, setIsSettignOpened] = useState(false);
  const [theme, settheme] = useState(
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setBackground("Morning Them");
      settheme("light");
    } 
  }, [theme]);

  const [activeTab, setActiveTab] = useState("Theme");
  const [background, setBackground] = useState("Morning Them");

  const [container, setContainer] = useState("Wide");
  const [bodyFont, setBodyFont] = useState("Roboto");
  const [headerLayout, setHeaderLayout] = useState("Horizontal");
  const [headerPosition, setHeaderPosition] = useState("Static");

  const handleDeleteAllCookies = () => {
    // Implement cookie deletion logic here
    console.log("Deleting all cookies");
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
  return (
    <div className="fixed z-50 top-1/3 right-0">
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
            <h2 className="text-2xl font-bold">Pick your style</h2>
            <button
              onClick={handleDeleteAllCookies}
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Delete All Cookie
            </button>
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
                  <option>Pastel Dream Theme</option>
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
