"use client";
import { DashboardOpened } from "app/lib/DashboardSlice";
import AvabilityHome from "components/Dashboard/AvabilityHome/AvabilityHome";
import HomeStatics from "components/Dashboard/HomeStatics/HomeStatics";
import LatestReviews from "components/Dashboard/LatestReviews/LatestReviews";
import RecentBooking from "components/Dashboard/RecentBooking/RecentBooking";
import RecentDining from "components/Dashboard/RecentDining/RecentDining";
import ReservationHomeStats from "components/Dashboard/ReservationHomeStats/ReservationHomeStats";
import TotalStatistics from "components/Dashboard/TotalStatistics/TotalStatistics";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DahsboardAdmin() {
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
    <>
      <div
        className={`w-full h-full overflow-hidden transition-all duration-300 bg-gray-100 flex flex-1 flex-col pt-28  ${
          IsSideBarOpened ? "pl-44" : "pl-20 lg:pl-0 pr-3  "
        } container mx-auto`}
      >
        {IsSideBarOpened ? (
          <div
            ref={ref}
            onClick={handleClickOutside}
            className="block md:hidden absolute inset-0 z-10 bg-gray-900 bg-opacity-50"
          ></div>
        ) : null}
        <HomeStatics />
        <div className="flex flex-col justify-between items-center gap-4 md:flex-row flex-1">
          <ReservationHomeStats />
          <RecentBooking />
        </div>
        <div className="flex flex-col pt-5   justify-between items-center gap-4 md:flex-row flex-1">
          <RecentDining />
          <AvabilityHome />
        </div>

        <div className="flex flex-col pt-5   justify-between items-center gap-4 md:flex-row flex-1">
          <TotalStatistics />
          <LatestReviews />
        </div>
      </div>
    </>
  );
}
