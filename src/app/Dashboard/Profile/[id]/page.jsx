"use client";

import { DashboardOpened } from "app/lib/DashboardSlice";
import AuthPersons from "components/Dashboard/ProfilePage/AuthPersons/AuthPersons";
import ProfileSection from "components/Dashboard/ProfilePage/ProfileSection/ProfileSection";
import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function page() {
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
      className={`container mx-auto pl-20 lg:pl-0  pt-24 ${
        IsSideBarOpened ? "pl-36" : "p-6 "
      }  transition-all duration-300  w-full h-full md:h-dvh`}
    >
      {IsSideBarOpened ? (
        <div
          ref={ref}
          onClick={handleClickOutside}
          className="block md:hidden absolute inset-0 z-10 bg-gray-900 bg-opacity-50"
        ></div>
      ) : null}
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800">
        Dashboard Profile
      </h1>
      <div className="flex flex-col justify-between items-center lg:flex-row gap-8">
        {/* Profile Section */}
        <ProfileSection />
        {/* Authorized Persons Section */}
        <AuthPersons />
      </div>
    </div>
  );
}
