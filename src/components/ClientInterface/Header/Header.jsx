"use client";
import Image from "next/image";
import HotelLogo from "../../../../public/images/hotel-svgrepo-com.svg";
import UserPlaceHolder from "../../../../public/PlaceHolder.jpg";
import { useEffect, useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import { Menu } from "DB/db";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const [IsPhotoClicked, setIsPhotoClicked] = useState(false);
  
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
      <header className="bg-transparent  hidden lg:block p-4 absolute z-20 right-0 text-white text-2xl font-cairo font-[500] w-full  ">
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
              {Menu.filter((item) => {
                if (status === "authenticated" && item.name === "Login")
                  return false;
                if (
                  item.name === "Admin Dashboard" &&
                  !(
                    status === "authenticated" &&
                    session?.user?.Role === "admin"
                  )
                )
                  return false;

                if (status !== "authenticated" && item.name === "log Out")
                  return false;
                return true;
              }).map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  className="text-lg hover:xml group relative hover:text-[#F7AB0A] transition-colors duration-300"
                  onClick={(e) => {
                    if (item.name === "log Out") {
                      e.preventDefault();
                      signOut();
                    }
                  }}
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
            <div className="relative">
              <Image
                src={session?.user?.ProfileImg || UserPlaceHolder}
                alt="Profile Image"
                width={50}
                height={50}
                className="rounded-full h-12 w-12 object-cover cursor-pointer transition-transform hover:scale-105 border-2 border-gray-300 shadow-sm"
                quality={100}
                onClick={() => setIsPhotoClicked(!IsPhotoClicked)}
              />

              <div
                className={`${
                  IsPhotoClicked ? "block" : "hidden"
                } absolute !z-50 right-0 mt-2 w-64 bg-white shadow-lg rounded-xl p-4 text-slate-700 text-center transition-transform transform ease-out duration-300`}
              >
                {status === "authenticated" && (
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Welcome, {session?.user?.Firstname}{" "}
                      {session?.user?.Lastname}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      {session?.user?.Email}
                    </p>

                    {session?.user?.Role === "admin" && (
                      <Link
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        href={"/Dashboard"}
                      >
                        Admin Dashboard
                      </Link>
                    )}

                    <button
                      className="mt-4 !z-50 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 transition-colors"
                      onClick={() => signOut()}
                    >
                      Log Out
                    </button>
                  </div>
                )}

                {status !== "authenticated" && (
                  <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mt-2">
                    <Link
                      className="text-base font-medium text-blue-600 hover:text-blue-800 transition-colors mb-2 px-4 py-2 rounded-full hover:bg-blue-100"
                      href={"/login"}
                    >
                      Log In
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
                      href={"/Rooms"}
                    >
                      Check the Rooms
                    </Link>
                  </div>
                )}
              </div>
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

          {/* Tablet Menu Icon */}
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

            <div className="relative">
              <Image
                src={session?.user?.ProfileImg || UserPlaceHolder}
                alt="Profile Image"
                width={50}
                height={50}
                className="rounded-full h-12 w-12 object-cover cursor-pointer transition-transform hover:scale-105 border-2 border-gray-300 shadow-sm"
                quality={100}
                onClick={() => setIsPhotoClicked(!IsPhotoClicked)}
              />

              <div
                className={`${
                  IsPhotoClicked ? "block" : "hidden"
                } absolute !z-50 right-0 mt-2 w-64 bg-white shadow-lg rounded-xl p-4 text-slate-700 text-center transition-transform transform ease-out duration-300`}
              >
                {status === "authenticated" && (
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Welcome, {session?.user?.Firstname}{" "}
                      {session?.user?.Lastname}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      {session?.user?.Email}
                    </p>

                    {session?.user?.Role === "admin" && (
                      <Link
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        href={"/Dashboard"}
                      >
                        Admin Dashboard
                      </Link>
                    )}

                    <button
                      className="mt-4 !z-50 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 transition-colors"
                      onClick={() => signOut()}
                    >
                      Log Out
                    </button>
                  </div>
                )}

                {status !== "authenticated" && (
                  <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mt-2">
                    <Link
                      className="text-base font-medium text-blue-600 hover:text-blue-800 transition-colors mb-2 px-4 py-2 rounded-full hover:bg-blue-100"
                      href={"/login"}
                    >
                      Log In
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
                      href={"/Rooms"}
                    >
                      Check the Rooms
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Menu */}
        <div
          className={`absolute top-0 right-0 h-screen  z-50 bg-[#F5F5F5] w-96 p-7 text-black ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-all duration-300 ease-in `}
        >
          <div className="absolute top-5 right-5">
            <MdClose onClick={toggleMenu} className="text-3xl" />
          </div>

          <div className="flex items-center justify-around my-10 ">
            {status === "authenticated" && session?.user?.Role === "admin" ? (
              <Link
                className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg"
                href={"/Dashboard/RoomList"}
              >
                Add New Room
              </Link>
            ) : (
              <button className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg">
                Book Now
              </button>
            )}
            {status === "authenticated" ? (
              <Link
                className="text-xl hover:scale-105 font-bold bg-[#F7AB0A] p-3 rounded-lg"
                href={"/login"}
                onClick={() => {
                  signOut();
                  toggleMenu();
                }}
              >
                Log Out
              </Link>
            ) : (
              <Link
                className="text-xl hover:scale-105 font-bold bg-[#F7AB0A] p-3 rounded-lg"
                href={"/login"}
                onClick={toggleMenu}
              >
                Log In
              </Link>
            )}
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
        } z-40  text-white  text-2xl font-cairo font-[500] w-full `}
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
            <span className="text-sm font-bold text-primary">KG HOTEL</span>
          </Link>

          <div className="flex items-center gap-4 pr-5">
            <nav className="flex space-x-6 relative">
              {isMenuOpen ? (
                <MdClose onClick={toggleMenu} />
              ) : (
                <MdOutlineMenu onClick={toggleMenu} />
              )}
            </nav>
            <div className="relative">
              <Image
                src={session?.user?.ProfileImg || UserPlaceHolder}
                alt="Profile Image"
                width={50}
                height={50}
                className="rounded-full h-12 w-12 object-cover cursor-pointer transition-transform hover:scale-105 border-2 border-gray-300 shadow-sm"
                quality={100}
                onClick={() => setIsPhotoClicked(!IsPhotoClicked)}
              />

              <div
                className={`${
                  IsPhotoClicked ? "block" : "hidden"
                } absolute !z-50 right-0 mt-2 w-64 bg-white shadow-lg rounded-xl p-4 text-slate-700 text-center transition-transform transform ease-out duration-300`}
              >
                {status === "authenticated" && (
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Welcome, {session?.user?.Firstname}{" "}
                      {session?.user?.Lastname}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      {session?.user?.Email}
                    </p>

                    {session?.user?.Role === "admin" && (
                      <Link
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        href={"/Dashboard"}
                      >
                        Admin Dashboard
                      </Link>
                    )}

                    <button
                      className="mt-4 !z-50 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 transition-colors"
                      onClick={() => signOut()}
                    >
                      Log Out
                    </button>
                  </div>
                )}

                {status !== "authenticated" && (
                  <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mt-2">
                    <Link
                      className="text-base font-medium text-blue-600 hover:text-blue-800 transition-colors mb-2 px-4 py-2 rounded-full hover:bg-blue-100"
                      href={"/login"}
                    >
                      Log In
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
                      href={"/Rooms"}
                    >
                      Check the Rooms
                    </Link>
                  </div>
                )}
              </div>
            </div>
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
            {status === "authenticated" && session?.user?.Role === "admin" ? (
              <button className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg  backdrop-blur-md shadow-lg hover:bg-opacity-40 transition-colors duration-300 border border-black">
                Add A Room
              </button>
            ) : (
              <button className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg  backdrop-blur-md shadow-lg hover:bg-opacity-40 transition-colors duration-300 border border-black">
                Book Now
              </button>
            )}
            {status === "authenticated" ? (
              <Link
                onClick={() => {
                  signOut();
                  toggleMenu();
                }}
                className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg  backdrop-blur-md shadow-lg hover:bg-opacity-40 transition-colors duration-300 border border-black"
                href={"/LogIn"}
              >
                Log Out
              </Link>
            ) : (
              <Link
                onClick={toggleMenu}
                className="text-xl font-bold bg-[#F7AB0A] p-3 rounded-lg  backdrop-blur-md shadow-lg hover:bg-opacity-40 transition-colors duration-300 border border-black"
                href={"/LogIn"}
              >
                Log In
              </Link>
            )}
          </div>
          <ul>
            {Menu.filter((item) => {
              if (item.name === "Login") return false;
              if (
                item.name === "Admin Dashboard" &&
                !(status === "authenticated" && session?.user?.Role === "admin")
              )
                return false;

              if (item.name === "log Out") return false;
              return true;
            }).map((link, index) => (
              <li
                className="p-5 w-full border-b-2 last:border-b-0 hover:px-10 transition-all duration-300 hover:text-[#F7AB0A] "
                key={index}
              >
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center space-x-4 border rounded-md p-2 border-gray-700 shadow-sm mt-6">
            <button
              onClick={() => handleLanguageChange({ target: { value: "en" } })}
              className={`p-2 text-lg rounded-md ${
                selectedLanguage === "en"
                  ? "bg-yellow-500 text-white"
                  : "bg-transparent text-black hover:text-yellow-500"
              } transition-all`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange({ target: { value: "tr" } })}
              className={`p-2 text-lg rounded-md ${
                selectedLanguage === "tr"
                  ? "bg-yellow-500 text-white"
                  : "bg-transparent text-black hover:text-yellow-500"
              } transition-all`}
            >
              Turkish
            </button>
            <button
              onClick={() => handleLanguageChange({ target: { value: "ar" } })}
              className={`p-2 text-lg rounded-md ${
                selectedLanguage === "ar"
                  ? "bg-yellow-500 text-white"
                  : "bg-transparent text-black hover:text-yellow-500"
              } transition-all`}
            >
              Arabic
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for Tablet menu */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="hidden md:block lg:hidden absolute inset-0 bg-black opacity-70 z-40"
        ></div>
      )}
    </>
  );
}
