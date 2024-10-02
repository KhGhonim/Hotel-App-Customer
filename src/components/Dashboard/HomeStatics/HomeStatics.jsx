import { BiBed } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function HomeStatics() {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 ">
      <div className="rounded-xl bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="mr-4 rounded bg-red-100 p-3">
            <BiBed className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">New Booking</p>
            <p className="text-2xl font-semibold text-gray-900">8,461</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="mr-4 rounded bg-green-100 p-3">
            <FaBuildingCircleCheck className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Check In</p>
            <p className="text-2xl font-semibold text-gray-900">753</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="mr-4 rounded bg-blue-300 p-3">
            <CiLogout className="h-6 w-6 text-blue-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Check Out</p>
            <p className="text-2xl font-semibold text-gray-900">516</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="mr-4 rounded bg-orange-300 p-3">
            <IoPerson  className="h-6 w-6 text-orange-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Visitors</p>
            <p className="text-2xl font-semibold text-gray-900">516</p>
          </div>
        </div>
      </div>
    </div>
  );
}
