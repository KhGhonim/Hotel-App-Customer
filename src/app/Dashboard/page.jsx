import AvabilityHome from "components/Dashboard/AvabilityHome/AvabilityHome";
import HomeStatics from "components/Dashboard/HomeStatics/HomeStatics";
import LatestReviews from "components/Dashboard/LatestReviews/LatestReviews";
import RecentBooking from "components/Dashboard/RecentBooking/RecentBooking";
import ReservationHomeStats from "components/Dashboard/ReservationHomeStats/ReservationHomeStats";
import TotalStatistics from "components/Dashboard/TotalStatistics/TotalStatistics";

export default function DahsboardAdmin() {
  return (
    <div className="w-full h-full overflow-hidden bg-gray-100 flex flex-1 flex-col overflow-x-hidden overflow-y-auto p-4">
      <HomeStatics />
      <ReservationHomeStats />
      <RecentBooking />
      <AvabilityHome />
      <TotalStatistics />
      <LatestReviews />
    </div>
  );
}
