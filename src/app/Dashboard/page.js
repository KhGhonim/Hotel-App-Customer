"use client";
import AvabilityHome from "components/Dashboard/AvabilityHome/AvabilityHome";
import DashboardHeader from "components/Dashboard/Header/DashboardHeader";
import HomeStatics from "components/Dashboard/HomeStatics/HomeStatics";
import LatestReviews from "components/Dashboard/LatestReviews/LatestReviews";
import RecentBooking from "components/Dashboard/RecentBooking/RecentBooking";
import ReservationHomeStats from "components/Dashboard/ReservationHomeStats/ReservationHomeStats";
import SideBar from "components/Dashboard/SideBar/SideBar";
import TotalStatistics from "components/Dashboard/TotalStatistics/TotalStatistics";
import { useRef, useState } from "react";

export default function DahsboardAdmin() {
  const [IsSideBarOpened, setIsSideBarOpened] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      setIsSideBarOpened(false);
    }
  };
  return (
    <div>
      <DashboardHeader setIsSideBarOpened={setIsSideBarOpened} IsSideBarOpened={IsSideBarOpened} />
      <SideBar IsSideBarOpened={IsSideBarOpened} />
      <div className={`w-full h-full overflow-hidden transition-all duration-300 bg-gray-100 flex flex-1 flex-col pt-28  ${IsSideBarOpened ? "pl-44" : "pl-20 pr-3  md:pr-10 md:pl-0"} container mx-auto`}>
        {IsSideBarOpened ? (
          <div ref={ref} onClick={handleClickOutside} className="block md:hidden absolute inset-0 z-10 bg-gray-900 bg-opacity-50"></div>
        ) : (null)}
        <HomeStatics />
        <div className="flex flex-col justify-between items-center gap-4 md:flex-row flex-1">
          <ReservationHomeStats />
          <RecentBooking />
        </div>
        <AvabilityHome />
        <TotalStatistics />
        <LatestReviews />
      </div>
    </div>
  );
}
