import Image from "next/image";
import { FaTripadvisor } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import HotelLogo from "../../../../public/images/hotel-svgrepo-com.svg";
import taksim from "../../../../public/images/taksim.jpg";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Image
        src={taksim}
        alt="taksim"
        priority={true}
        quality={100}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-95" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ADDRESS</h3>
            <p className="mb-2">Zeytinburunu Mahallesi, Bayrampaşa Sokak</p>
            <p className="mb-2">34112 Fatih</p>
            <p className="mb-4">Istanbul/Türkiye</p>
            <Link
              className="mb-1 flex items-center gap-2"
              href={"tel:+444 99 44"}
            >
              <span>
                <TbDeviceLandlinePhone size={20} className="text-[#fff]" />
              </span>
              : 444 99 44{" "}
            </Link>
            <Link
              className="mb-1 flex items-center gap-2"
              href={"tel:+90 555 444 66 22"}
            >
              <span>
                <MdOutlinePhone size={20} className="text-red-400" />
              </span>
              : 90 555 444 66 22{" "}
            </Link>
            <Link
              className="mb-1 flex items-center gap-2 group"
              href={"mailto:info@kghotel.com"}
            >
              <span>
                <MdEmail
                  size={20}
                  className="text-blue-400 group-hover:font-bold"
                />
              </span>{" "}
              : info@kghotel.com
            </Link>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">QUICK MENU</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AIRPORT TRANSFER
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SPA & FITNESS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SAFE TOURISM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SUSTAINABILITY MANAGEMENT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SUSTAINABILITY TOURISM
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">STAY IN TOUCH</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#3b985c] hover:text-[#3b985c]/80 transition-all duration-300 ease-in-out"
              >
                <FaTripadvisor className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#3b5998] hover:text-[#3b5998]/80 transition-all duration-300 ease-in-out"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#fbad50] hover:text-[#fbad50]/80 transition-all duration-300 ease-in-out"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#e1306c] hover:text-[#e1306c]/80 transition-all duration-300 ease-in-out"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center">
            <Image
              src={HotelLogo}
              alt="Demiray Hotel Logo"
              width={150}
              height={50}
              priority={true}
              className="mb-4 sm:mb-0"
            />
            <h1 className="text-white text-lg md:text-2xl font-semibold">
              KG Cave Hotel
            </h1>
          </div>
          <p className="text-sm">© 2024 KG Cave Hotel - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
