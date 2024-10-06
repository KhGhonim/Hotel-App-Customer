"use client";
import { useState } from "react";
import Image from "next/image";
// @ts-ignore
import Logo from "../../../../public/images/hotel-svgrepo-com.svg";
import { DashboardMenu } from "DB/db";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  // @ts-ignore
  const [OpenSubItem, setOpenSubItem] = useState(null);
  const { IsSideBarOpened } = useSelector((state) => state.Users);
  const router = useRouter();

  const HandleMenuDashboard = (item) => {
    setOpenSubItem(item.label);
    item.link === "/Dashboard" ? router.push(item.link) : null;
  };
  return (
    <div className="flex fixed left-0 top-0 z-40   h-screen">
      <div
        className={`flex transition-all duration-300  flex-col items-center justify-between bg-white pb-20 ${
          IsSideBarOpened ? "w-56" : "w-16"
        }`}
      >
        <Link
          href="/Dashboard"
          className={`flex w-full items-center  ml-3  p-4 ${
            IsSideBarOpened ? "justify-start" : "justify-center"
          }`}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            priority={true}
            className="h-16 w-16"
          />

          {IsSideBarOpened && (
            <div className="flex  items-center  flex-col">
              <h1 className=" text-base font-bold">KG Cave Hotel</h1>
              <h6 className="text-[10px] text-gray-500">
                Hotel Admin Dashboard
              </h6>
            </div>
          )}
        </Link>
        {DashboardMenu.map((item, index) => (
          <div
            key={index}
            className="relative "
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => {
              HandleMenuDashboard(item);
            }}
          >
            <div
              className={`flex h-12 px-8 gap-5 cursor-pointer transition-all duration-300  items-center z-50 ${
                IsSideBarOpened ? "justify-start w-44 " : "justify-center"
              } rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900`}
            >
              <p> {item.icon}</p>
              {IsSideBarOpened && (
                <h6 className="text-black font-bold">{item.label}</h6>
              )}
            </div>
            {hoveredItem === item.label && item.subItems && (
              <>
                <div
                  className={`${
                    IsSideBarOpened
                      ? "hidden"
                      : "absolute left-[80px] -top-10 w-48"
                  }  rounded-md bg-white py-2 shadow-lg `}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {hoveredItem === item.label &&
              item.subItems &&
              OpenSubItem === item.label && (
                <>
                  <div
                    className={`${
                      IsSideBarOpened
                        ? "block transition-all duration-500"
                        : "hidden transition-all duration-500"
                    }  w-full bg-white  `}
                    onMouseLeave={() => setOpenSubItem(null)}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href="#"
                        className="block pl-14 rounded-md py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
