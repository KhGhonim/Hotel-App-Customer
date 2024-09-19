"use client";
import Image from "next/image";
import HotelLogo from "../../../public/images/hotel-svgrepo-com.svg";
import { useEffect, useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import { Menu } from "DB/db";

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handler for language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };

  // Load language from localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && typeof window !== "undefined") {
      setSelectedLanguage(storedLanguage);
    } else {
      setSelectedLanguage("en");
      localStorage.setItem("language", "en");
    }
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* PC Menu */}
      <header className="bg-transparent  hidden lg:block p-4 absolute z-20 right-0 text-white text-2xl font-cairo font-[500] w-full  overflow-hidden">
        <div className="flex items-center justify-between">
          <Link className="flex items-center gap-4 pl-5" href={"/"}>
            <Image
              src={HotelLogo}
              alt="Hotel Logo"
              width={75}
              height={75}
              quality={100}
            />
            <span className="text-2xl font-bold text-primary">KG HOTEL</span>
          </Link>

          <div className="flex items-center gap-4 pr-5">
            <nav className="flex space-x-6">
              {Menu.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  className="text-lg hover:xml group relative hover:text-[#F7AB0A] transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-black transition-transform duration-500 group-hover:scale-x-100"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center ">
              <select
                id="language"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="ml-2 bg-transparent text-lg  rounded-md cursor-pointer"
              >
                <option
                  className=" text-black bg-white text-sm  text-center"
                  value="en"
                >
                  English
                </option>
                <option
                  className=" text-black bg-white text-sm  text-center"
                  value="tr"
                >
                  Turkish
                </option>
                <option
                  className=" text-black bg-white  text-sm text-center"
                  value="ar"
                >
                  Arabic
                </option>
              </select>
            </div>
          </div>
        </div>
      </header>
      {/* Tablet Menu Header */}
      <header
        className={`bg-transparent hidden  md:block lg:hidden p-4 ${
          isMenuOpen ? "sticky top-0" : "absolute"
        } z-50 right-0  text-white text-2xl font-cairo font-[500] w-full `}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 pl-5">
            <Image
              src={HotelLogo}
              alt="Hotel Logo"
              width={75}
              height={75}
              quality={100}
            />
            <span className="text-2xl font-bold text-primary">KG HOTEL</span>
          </Link>

          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-4 pr-5">
            <nav className="flex space-x-6 relative">
              {isMenuOpen ? (
                <MdClose onClick={toggleMenu} />
              ) : (
                <MdOutlineMenu onClick={toggleMenu} />
              )}
            </nav>

            <div className="flex items-center ">
              <select
                id="language"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="ml-2 bg-transparent text-lg  rounded-md"
              >
                <option
                  className=" text-black bg-white text-sm  text-center"
                  value="en"
                >
                  English
                </option>
                <option
                  className=" text-black bg-white text-sm  text-center"
                  value="tr"
                >
                  Turkish
                </option>
                <option
                  className=" text-black bg-white  text-sm text-center"
                  value="ar"
                >
                  Arabic
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 right-0 h-screen  z-50 bg-[#F5F5F5] w-96 p-7 text-black ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-all duration-300 ease-in `}
        >
          <div className="absolute top-5 right-5">
            <MdClose onClick={toggleMenu} className="text-3xl" />
          </div>

          <div className="flex items-center justify-around my-10 ">
            <button className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg">
              Book Now
            </button>
            <button className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg">
              Log In
            </button>
          </div>
          <ul>
            {Menu.map((link, index) => (
              <li
                className="p-6 w-full border-b-2 last:border-b-0 hover:px-10 transition-all duration-300 hover:text-[#F7AB0A] "
                key={index}
              >
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Phone Menu */}

      <header
        className={`bg-transparent  md:hidden lg:hidden p-4 ${
          isMenuOpen ? "fixed inset-0" : "absolute right-0"
        } z-40  text-white overflow-hidden text-2xl font-cairo font-[500] w-full `}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 pl-5">
            <Image
              src={HotelLogo}
              alt="Hotel Logo"
              width={75}
              height={75}
              quality={100}
            />
            <span className="text-2xl font-bold text-primary">KG HOTEL</span>
          </Link>

          <div className="flex items-center gap-4 pr-5">
            <nav className="flex space-x-6 relative">
              {isMenuOpen ? (
                <MdClose onClick={toggleMenu} />
              ) : (
                <MdOutlineMenu onClick={toggleMenu} />
              )}
            </nav>
          </div>
        </div>

        <div
          className={`  z-50  w-full p-7 text-black ${
            isMenuOpen
              ? "fixed inset-0 translate-x-0 bg-[#F5F5F5]"
              : "fixed inset-0  translate-x-full"
          } transition-all duration-300 ease-in `}
        >
          <div className="absolute top-5 right-5">
            <MdClose onClick={toggleMenu} className="text-3xl" />
          </div>

          <div className="flex items-center justify-around my-10 ">
            <button className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg">
              Book Now
            </button>
            <button className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg">
              Log In
            </button>
          </div>
          <ul>
            {Menu.map((link, index) => (
              <li
                className="p-5 w-full border-b-2 last:border-b-0 hover:px-10 transition-all duration-300 hover:text-[#F7AB0A] "
                key={index}
              >
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center space-x-4 border rounded-md p-2 border-black">
            <button
              onClick={() => handleLanguageChange({ target: { value: "en" } })}
              className={`p-2  text-lg rounded-md ${
                selectedLanguage === "en"
                  ? "bg-yellow-500 text-white"
                  : "bg-transparent text-black"
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange({ target: { value: "tr" } })}
              className={`p-2 border-r-2 border-l-2 text-lg rounded-md ${
                selectedLanguage === "tr"
                  ? "bg-yellow-500 text-white"
                  : "bg-transparent text-black"
              }`}
            >
              Turkish
            </button>
            <button
              onClick={() => handleLanguageChange({ target: { value: "ar" } })}
              className={`p-2 text-lg rounded-md ${
                selectedLanguage === "ar"
                  ? "bg-yellow-500 text-white"
                  : "bg-transparent text-black"
              }`}
            >
              Arabic
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="hidden md:block lg:hidden absolute inset-0 bg-black opacity-70 z-40"
        ></div>
      )}
    </>
  );
}
